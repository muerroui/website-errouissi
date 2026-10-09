// Integration test: creates and removes ONLY two clearly labeled synthetic leads.
// Never log credentials or query real contact rows.
import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());
const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3112";
const base = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
assert.ok(base && key, "Server Supabase configuration required");
const headers = { apikey: key };
if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;
const ids = [randomUUID(), randomUUID()];
const selector = `id=in.(${ids.join(",")})`;
const endpoint = `${base}/rest/v1/errouissi_avocat`;
let checks = [];
try {
  for (const [index, locale] of ["ar", "fr"].entries()) {
    const result = await fetch(`${origin}/api/immobilier-leads`, {
      method: "POST", headers: { Origin: origin, "Content-Type": "application/json" },
      body: JSON.stringify({ id: ids[index], name: "TEST ONLY CODEX — SUPABASE INTEGRATION", phone: null, topic: "other", locale }),
    });
    assert.equal(result.status, 201, `API write ${locale} failed (HTTP ${result.status})`);
    assert.deepEqual(await result.json(), { ok: true });
  }
  const result = await fetch(`${endpoint}?select=id,locale,page_path,phone&${selector}`, { headers });
  assert.ok(result.ok, `Synthetic-row verification failed (HTTP ${result.status})`);
  const rows = await result.json();
  assert.equal(rows.length, 2);
  for (const row of rows) {
    assert.equal(row.phone, null);
    assert.equal(row.page_path, row.locale === "ar" ? "/ar/ads/immobilier" : "/ads/immobilier");
  }
  checks.push("Both campaign locales saved to errouissi_avocat; nullable phone and exact paths confirmed");
  const duplicate = await fetch(`${origin}/api/immobilier-leads`, {
    method: "POST", headers: { Origin: origin, "Content-Type": "application/json" },
    body: JSON.stringify({ id: ids[0], name: "TEST ONLY CODEX — SUPABASE INTEGRATION", phone: null, topic: "other", locale: "ar" }),
  });
  assert.equal(duplicate.status, 200);
  checks.push("Same UUID retry does not duplicate a lead");
  const publicKey = "sb_publishable_bb5MCPCAAjyL9ZxsqBDqAA_UiVMrKmD";
  const publicRead = await fetch(`${endpoint}?select=id&${selector}`, { headers: { apikey: publicKey } });
  if (publicRead.ok) assert.deepEqual(await publicRead.json(), []);
  else assert.ok([401,403].includes(publicRead.status), `Unexpected public access status ${publicRead.status}`);
  checks.push("Public key cannot read synthetic contacts");
} finally {
  const deleted = await fetch(`${endpoint}?${selector}`, { method: "DELETE", headers: { ...headers, Prefer: "return=representation" } });
  assert.ok(deleted.ok, `Cleanup failed: remove only TEST ONLY CODEX rows with UUIDs ${ids.join(", ")}`);
  const remaining = await fetch(`${endpoint}?select=id&${selector}`, { headers });
  assert.ok(remaining.ok); assert.deepEqual(await remaining.json(), []);
}
console.log(JSON.stringify({ passed: true, checks, syntheticRowsCreated: 2, syntheticRowsRemaining: 0, realContactsRead: 0 }, null, 2));
