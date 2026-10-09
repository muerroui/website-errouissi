import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { createRequire } from "node:module";
import { randomUUID } from "node:crypto";
import vm from "node:vm";
import ts from "typescript";

const root = process.cwd();
const nodeRequire = createRequire(import.meta.url);
const env = { SUPABASE_URL: "https://qa-project.supabase.co", SUPABASE_SECRET_KEY: "sb_secret_mock_not_real" };
const modules = new Map();
let upstream = [];
let behavior = async () => new Response(null, { status: 201 });
function load(file) {
  if (modules.has(file)) return modules.get(file).exports;
  const module = { exports: {} }; modules.set(file, module);
  const javascript = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(javascript, {
    module, exports: module.exports, Buffer, URL, Request, Response, AbortSignal, Date, Map, Set,
    process: { env },
    require(name) {
      if (name.startsWith("@/")) return load(resolve(root, name.slice(2) + ".ts"));
      if (name.startsWith(".")) return load(resolve(dirname(file), name + ".ts"));
      return nodeRequire(name);
    },
    fetch: async (url, options) => { upstream.push({ url: String(url), options }); return behavior(); },
  }, { filename: file });
  return module.exports;
}
const { POST } = load(resolve(root, "app/api/immobilier-leads/route.ts"));
let index = 0;
const data = (locale = "fr") => ({ id: randomUUID(), name: "TEST ONLY", phone: null, topic: "rural", locale });
function request(body, headers = {}) {
  return new Request("https://errouissi.ma/api/immobilier-leads", {
    method: "POST", headers: { Origin: "https://errouissi.ma", "Content-Type": "application/json",
      "x-real-ip": `192.0.2.${++index}`, ...headers }, body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
const checks = [];
for (const locale of ["ar", "fr"]) {
  const payload = data(locale);
  const response = await POST(request(payload));
  assert.equal(response.status, 201);
  assert.deepEqual(await response.json(), { ok: true });
  const call = upstream.at(-1);
  const row = JSON.parse(call.options.body);
  assert.equal(row.page_path, locale === "ar" ? "/ar/ads/immobilier" : "/ads/immobilier");
  assert.equal(row.phone, null);
  assert.equal(call.options.headers.apikey, env.SUPABASE_SECRET_KEY);
  assert.equal(call.options.headers.Authorization, undefined);
  assert.equal(response.headers.get("cache-control"), "no-store");
}
checks.push("AR/FR insert, optional phone, exact campaign path, minimal response and new secret authentication");
await POST(request({ ...data(), phone: "٠٦٦٨٠٧٥٢١٣", ignored: "not persisted" }));
const row = JSON.parse(upstream.at(-1).options.body);
assert.equal(row.phone, "0668075213"); assert.equal(row.ignored, undefined);
checks.push("numeral normalization and strict column allowlist");
for (const invalid of [{ ...data(), name: "x" }, { ...data(), topic: "bad" },
  { ...data(), locale: "xx" }, { ...data(), phone: "oops" }, { ...data(), name: "a".repeat(81) },
  { ...data(), name: "test\u0000" }, { ...data(), id: "bad" }, { ...data(), website: "spam" }]) {
  const before = upstream.length;
  assert.equal((await POST(request(invalid))).status, 400);
  assert.equal(upstream.length, before);
}
checks.push("server validation rejects invalid fields without writing");
assert.equal((await POST(request(data(), { Origin: "https://evil.example" }))).status, 403);
assert.equal((await POST(request(data(), { "sec-fetch-site": "cross-site" }))).status, 403);
assert.equal((await POST(request(data(), { "Content-Type": "text/plain" }))).status, 415);
assert.equal((await POST(request("{"))).status, 400);
assert.equal((await POST(request(JSON.stringify({ name: "a".repeat(5000) })))).status, 413);
checks.push("cross-site, content type, malformed and oversized body protection");
env.SUPABASE_SECRET_KEY = "";
assert.equal((await POST(request(data()))).status, 503);
env.SUPABASE_SERVICE_ROLE_KEY = "legacy_mock_not_real";
assert.equal((await POST(request(data()))).status, 201);
assert.equal(upstream.at(-1).options.headers.Authorization, "Bearer legacy_mock_not_real");
checks.push("missing configuration fails honestly; legacy server key supported");
behavior = async () => new Response(JSON.stringify({ message: "PRIVATE_UPSTREAM_DETAIL" }), { status: 400 });
const failure = await POST(request(data()));
assert.equal(failure.status, 502); assert.ok(!(await failure.text()).includes("PRIVATE_UPSTREAM_DETAIL"));
behavior = async () => { throw new Error("PRIVATE_CONNECTION_DETAIL"); };
assert.equal((await POST(request(data()))).status, 503);
checks.push("database and network failures do not expose private details");
behavior = async () => new Response(JSON.stringify({ code: "23505" }), { status: 409 });
assert.equal((await POST(request(data()))).status, 200);
checks.push("duplicate submission UUID treated as already saved");
behavior = async () => new Response(null, { status: 201 });
for (let i = 0; i < 8; i++) assert.equal((await POST(request(data(), { "x-real-ip": "198.51.100.5" }))).status, 201);
assert.equal((await POST(request(data(), { "x-real-ip": "198.51.100.5" }))).status, 429);
checks.push("per-instance rate limit");
console.log(JSON.stringify({ checks, externalRequests: 0, passed: true }, null, 2));
