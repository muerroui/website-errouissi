import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import nextEnv from "@next/env";

const loadEnv = nextEnv.default?.loadEnvConfig || nextEnv.loadEnvConfig;
loadEnv(process.cwd());

const base = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
assert.ok(base && key, "Server Supabase configuration required");

const headers = { apikey: key };
if (!key.startsWith("sb_secret_")) headers.Authorization = `Bearer ${key}`;

const testIds = [randomUUID(), randomUUID()];
const selector = `id=in.(${testIds.join(",")})`;
const endpoint = `${base}/rest/v1/errouissi_avocat`;

console.log("Testing direct write to errouissi_avocat for contact leads...");

try {
  // Test direct insert that simulates /api/contact-leads
  for (const [index, locale] of ["ar", "fr"].entries()) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify({
        id: testIds[index],
        name: "TEST CONTACT LEAD",
        phone: "+212600000000",
        topic: index === 0 ? "succession" : "fiscal",
        locale,
        page_path: locale === "ar" ? "/ar/contact" : "/fr/contact",
      }),
    });
    assert.equal(res.status, 201, `Failed to insert for ${locale}`);
    const rows = await res.json();
    assert.equal(rows[0].id, testIds[index]);
    assert.equal(rows[0].page_path, locale === "ar" ? "/ar/contact" : "/fr/contact");
    console.log(`✓ Inserted test contact row for ${locale}:`, rows[0].topic, rows[0].page_path);
  }

  // Verify retrieval
  const getRes = await fetch(`${endpoint}?select=id,topic,locale,page_path&${selector}`, { headers });
  assert.ok(getRes.ok);
  const fetched = await getRes.json();
  assert.equal(fetched.length, 2);
  console.log("✓ Successfully verified 2 contact rows in errouissi_avocat");
} finally {
  const delRes = await fetch(`${endpoint}?${selector}`, {
    method: "DELETE",
    headers: { ...headers, Prefer: "return=representation" },
  });
  assert.ok(delRes.ok);
  console.log("✓ Cleaned up synthetic contact test rows");
}

console.log("ALL CONTACT LEADS TESTS PASSED!");
