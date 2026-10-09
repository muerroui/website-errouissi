import { createHash } from "node:crypto";
import { normalizePhone, propertyTopics } from "@/lib/ads-immobilier";

export const runtime = "nodejs";

const maxBodyBytes = 4096;
// Best-effort per-instance abuse protection; not a distributed rate limiter.
const attempts = new Map<string, { count: number; expires: number }>();

function reply(status: number, error?: string) {
  return Response.json(error ? { ok: false, error } : { ok: true }, {
    status, headers: { "Cache-Control": "no-store" },
  });
}

async function readBody(request: Request) {
  if (Number(request.headers.get("content-length")) > maxBodyBytes) throw new Error("too_large");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("invalid_body");
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) { await reader.cancel(); throw new Error("too_large"); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString("utf8")) as unknown;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const expectedOrigin = new URL(request.url).origin;
  const allowedOrigins = new Set([expectedOrigin, "https://errouissi.ma"]);
  if (!origin || !allowedOrigins.has(origin) || request.headers.get("sec-fetch-site") === "cross-site") {
    return reply(403, "forbidden");
  }
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return reply(415, "invalid_content_type");
  }

  let input: unknown;
  try { input = await readBody(request); }
  catch (error) { return reply(error instanceof Error && error.message === "too_large" ? 413 : 400, "invalid_body"); }
  if (!input || typeof input !== "object" || Array.isArray(input)) return reply(400, "invalid_body");
  const data = input as Record<string, unknown>;
  if (data.website) return reply(400, "invalid_body"); // Honeypot, never stored.
  const { id, locale, topic } = data;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const phone = typeof data.phone === "string" ? normalizePhone(data.phone) : "";
  if (typeof id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)
    || (locale !== "ar" && locale !== "fr") || name.length < 2 || name.length > 80
    || /[\u0000-\u001f\u007f]/.test(name)
    || !propertyTopics.some((entry) => entry.value === topic)
    || (data.phone != null && typeof data.phone !== "string")) return reply(400, "invalid_fields");
  const digits = phone.replace(/[^0-9]/g, "");
  if (phone && (phone.length > 30 || !/^\+?[0-9\s().-]+$/.test(phone) || digits.length < 8 || digits.length > 15)) {
    return reply(400, "invalid_fields");
  }

  const now = Date.now();
  for (const [key, entry] of attempts) if (entry.expires <= now) attempts.delete(key);
  // Forwarded IP headers must be sanitized by the hosting proxy. No raw IP is retained.
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const bucketKey = createHash("sha256").update(ip).digest("hex");
  const bucket = attempts.get(bucketKey) || { count: 0, expires: now + 60_000 };
  if (bucket.count >= 8 || (!attempts.has(bucketKey) && attempts.size >= 10_000)) return reply(429, "rate_limited");
  bucket.count += 1;
  attempts.set(bucketKey, bucket);

  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !secret) return reply(503, "save_unavailable");
  let endpoint: URL;
  try {
    endpoint = new URL("/rest/v1/errouissi_avocat", url);
    if (endpoint.protocol !== "https:" || !endpoint.hostname.endsWith(".supabase.co")) return reply(503, "save_unavailable");
  } catch { return reply(503, "save_unavailable"); }

  try {
    const headers: Record<string, string> = {
      apikey: secret, "Content-Type": "application/json", Prefer: "return=minimal",
    };
    // New sb_secret keys authenticate via apikey; legacy service_role JWTs also use Bearer.
    if (!secret.startsWith("sb_secret_")) headers.Authorization = `Bearer ${secret}`;
    const result = await fetch(endpoint, {
      method: "POST", headers, cache: "no-store", signal: AbortSignal.timeout(7000),
      body: JSON.stringify({ id, name, phone: phone || null, topic, locale,
        page_path: locale === "ar" ? "/ar/ads/immobilier" : "/ads/immobilier" }),
    });
    if (result.ok) return reply(201);
    // Retrying the same submission UUID never creates a second lead.
    if (result.status === 409) {
      const problem = await result.json().catch(() => null);
      if (problem?.code === "23505") return reply(200);
    }
    // Do not expose or log database responses, credentials or submitted personal data.
    return reply(502, "save_failed");
  } catch { return reply(503, "save_unavailable"); }
}
