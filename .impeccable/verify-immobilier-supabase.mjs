import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3112";
const out = ".impeccable/review";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", headless: true });
const report = { externalSubmissions: 0, checks: [], browserErrors: [] };
try {
  for (const locale of ["ar", "fr"]) {
    const path = locale === "ar" ? "/ar/ads/immobilier" : "/ads/immobilier";
    for (const [view, width, height] of [["desktop",1440,1000],["mobile",390,844],["narrow",320,740]]) {
      const ctx = await browser.newContext({ viewport: { width, height } });
      await ctx.route(/https:\/\/.*(googletagmanager|google-analytics)\..*/, route => route.abort());
      const page = await ctx.newPage();
      page.on("pageerror", error => report.browserErrors.push(error.message));
      let requests = [], whatsapp = [], respond;
      await ctx.route("**/api/immobilier-leads", async route => {
        requests.push(route.request().postDataJSON());
        await new Promise(resolve => { respond = resolve; });
        await route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ ok: false }) });
      });
      await ctx.route("https://wa.me/**", route => { whatsapp.push(route.request().url()); return route.abort(); });
      assert.equal((await page.goto(origin + path, { waitUntil: "networkidle" })).status(), 200);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled);
      assert.equal(await page.locator('meta[name="robots"]').getAttribute("content"), "noindex, follow");
      assert.equal(await page.locator('html').getAttribute("dir"), locale === "ar" ? "rtl" : "ltr");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
      assert.ok(await page.locator("#lead-name").evaluate(el => parseFloat(getComputedStyle(el).fontSize) >= 16));
      await page.locator("form").scrollIntoViewIfNeeded();
      assert.ok(await page.locator("form p").count() >= 2);
      await page.screenshot({ path: `${out}/supabase-${locale}-${view}.png` });
      await page.locator("#lead-name").fill("TEST ONLY QA");
      await page.locator("#lead-topic").selectOption("rural");
      const button = page.locator('button[type="submit"]');
      await button.click();
      await page.waitForFunction(() => document.querySelector("form").getAttribute("aria-busy") === "true", null, { timeout: 2000 }).catch(async error => {
        console.log(JSON.stringify({ diagnostic: "pending-state", locale, view, requestCount: requests.length,
          formBusy: await page.locator("form").getAttribute("aria-busy"),
          buttonDisabled: await button.isDisabled(), browserErrors: report.browserErrors,
          alert: await page.locator('form [role="alert"]').textContent().catch(() => null),
        }));
        throw error;
      });
      assert.ok(await button.isDisabled());
      assert.ok(await page.locator("#lead-name").isDisabled());
      assert.equal(whatsapp.length, 0);
      await page.evaluate(() => document.querySelector('button[type="submit"]').click());
      assert.equal(requests.length, 1);
      assert.equal(requests[0].phone, null);
      assert.equal(requests[0].locale, locale);
      if (view !== "narrow") await page.screenshot({ path: `${out}/supabase-${locale}-${view}-loading.png` });
      respond();
      await page.locator('form [role="alert"]').waitFor();
      const errorBox = await page.locator('form [role="alert"]').boundingBox();
      assert.ok(errorBox.y >= 0 && errorBox.y + errorBox.height < height - 72);
      assert.equal(await page.locator("#lead-name").inputValue(), "TEST ONLY QA");
      assert.equal(whatsapp.length, 0);
      assert.ok(await button.isEnabled());
      if (view !== "narrow") await page.screenshot({ path: `${out}/supabase-${locale}-${view}-error.png` });
      const oldId = requests[0].id;
      await ctx.unroute("**/api/immobilier-leads");
      await ctx.route("**/api/immobilier-leads", async route => {
        const row = route.request().postDataJSON(); requests.push(row);
        assert.equal(row.id, oldId);
        await route.fulfill({ status: 201, contentType: "application/json", body: JSON.stringify({ ok: true }) });
      });
      await button.click();
      await page.waitForTimeout(400);
      assert.equal(requests.length, 2);
      assert.equal(whatsapp.length, 1);
      assert.ok(decodeURIComponent(whatsapp[0]).includes("TEST ONLY QA"));
      report.checks.push(`${locale}/${view}: disclosure, private API payload, save before WhatsApp, loading, double-click guard, error retains inputs, stable retry UUID and confirmed-save navigation`);
      await ctx.close();
    }
  }
  // Explicit WhatsApp-only recovery is not represented as a successful save.
  const ctx = await browser.newContext();
  await ctx.route(/https:\/\/.*(googletagmanager|google-analytics)\..*/, route => route.abort());
  await ctx.route("**/api/immobilier-leads", route => route.fulfill({ status: 429, contentType: "application/json", body: '{"ok":false}' }));
  let navigated = false;
  await ctx.route("https://wa.me/**", route => { navigated = true; return route.abort(); });
  const page = await ctx.newPage();
  await page.goto(origin + "/ads/immobilier", { waitUntil: "networkidle" });
  await page.locator("#lead-name").fill("TEST ONLY QA"); await page.locator("#lead-topic").selectOption("rural");
  await page.locator('button[type="submit"]').click();
  await page.locator('form [role="alert"]').waitFor();
  assert.match(await page.locator('form [role="alert"]').innerText(), /minute/);
  await page.getByRole("button", { name: "Ouvrir WhatsApp sans enregistrement" }).click();
  await page.waitForTimeout(300); assert.ok(navigated);
  report.checks.push("rate-limit feedback and explicit unsaved WhatsApp recovery");
  await ctx.close();
  assert.deepEqual(report.browserErrors, []);
  await writeFile(`${out}/supabase-form-checks.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
