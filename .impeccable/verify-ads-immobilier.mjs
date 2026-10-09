import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3000";
const output = ".impeccable/review";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});
const report = { origin, views: [], checks: [], browserErrors: [] };

async function context(options = {}) {
  const ctx = await browser.newContext(options);
  // Never pollute real analytics or contact an external messaging account in QA.
  await ctx.route(/https:\/\/.*(googletagmanager|google-analytics)\..*/, (route) => route.abort());
  return ctx;
}

try {
  for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844], ["narrow", 320, 740]]) {
    const ctx = await context({ viewport: { width, height } });
    const page = await ctx.newPage();
    page.on("pageerror", (error) => report.browserErrors.push(error.message));
    const response = await page.goto(`${origin}/ads/immobilier?utm_source=qa`, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled);
    const metrics = await page.evaluate(() => {
      const call = document.querySelector('main a[href^="tel:"]');
      const h1 = document.querySelector("h1");
      const form = document.querySelector("form");
      return {
        lang: document.documentElement.lang, dir: document.documentElement.dir,
        h1Count: document.querySelectorAll("h1").length,
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        robots: document.querySelector('meta[name="robots"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        width: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth,
        callBottom: call.getBoundingClientRect().bottom,
        h1Font: getComputedStyle(h1).fontFamily, h1FontSize: getComputedStyle(h1).fontSize,
        formTop: form.getBoundingClientRect().top,
        phoneLinks: [...document.querySelectorAll('a[href^="tel:"]')].map((node) => node.getAttribute("href")),
        whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/"]')].map((node) => node.getAttribute("href")),
        structuredData: JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent),
      };
    });
    assert.equal(metrics.lang, "ar-MA");
    assert.equal(metrics.dir, "rtl");
    assert.equal(metrics.h1Count, 1);
    assert.equal(metrics.scrollWidth, width, `${name}: horizontal overflow`);
    assert(metrics.callBottom < height - 84, `${name}: primary call CTA must fit first viewport`);
    assert(metrics.h1Font.includes("Noto Naskh Arabic"));
    assert(metrics.robots.includes("noindex") && metrics.robots.includes("follow"));
    assert(metrics.canonical.endsWith("/ads/immobilier") && !metrics.canonical.includes("utm_"));
    assert(metrics.phoneLinks.every((href) => href === "tel:+212523283258"));
    assert(metrics.whatsappLinks.every((href) => href.startsWith("https://wa.me/212668075213?text=")));
    assert.equal(metrics.structuredData.foundingDate, "1992-01");
    report.views.push({ name, ...metrics });
    await page.screenshot({ path: `${output}/ads-immobilier-${name}.png`, fullPage: true });
    await page.screenshot({ path: `${output}/ads-immobilier-${name}-hero.png` });
    await ctx.close();
  }

  const ctx = await context({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  page.on("pageerror", (error) => report.browserErrors.push(error.message));
  await page.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  const submit = page.locator('button[type="submit"]');
  await submit.click();
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 2);
  assert.equal(await page.evaluate(() => document.activeElement.id), "lead-name");
  await page.locator("#lead-name").fill("اختبار التحقق");
  await page.locator('[data-case-topic="rural"]').click();
  assert.equal(await page.locator("#lead-topic").inputValue(), "rural");
  assert.equal(await page.evaluate(() => document.activeElement.id), "lead-name");
  assert.equal(await page.locator('nav[aria-label="تواصل سريع مع المكتب"]').isVisible(), false);
  await page.locator("#lead-phone").fill("not-a-phone");
  await submit.click();
  assert.equal(await page.locator("#phone-error").count(), 1);
  await page.locator("#lead-phone").fill("٠٦٦٨ ٠٧٥ ٢١٣");
  let outgoing;
  let queued;
  await page.route("https://wa.me/**", async (route) => {
    outgoing = route.request().url();
    queued = await page.evaluate(() => (window.dataLayer || []).map((item) => Array.from(item)));
    await route.fulfill({ status: 200, contentType: "text/html", body: "<!doctype html><title>QA: WhatsApp intercepted, not sent</title>" });
  });
  await submit.click();
  await page.waitForURL("https://wa.me/**");
  const message = new URL(outgoing).searchParams.get("text");
  assert(message.includes("اختبار التحقق"));
  assert(message.includes("أرض فلاحية أو عقار قروي"));
  assert(message.includes("0668 075 213"));
  const event = queued.find((entry) => entry[0] === "event" && entry[1] === "whatsapp_click");
  assert.equal(event?.[2]?.contact_position, "consultation_form");
  assert(!JSON.stringify(queued).includes("اختبار التحقق"));
  assert(!JSON.stringify(queued).includes("0668"));
  report.checks.push("Arabic form errors and focus", "issue-to-form topic preset", "mobile bar hidden during input", "Arabic digit normalization", "WhatsApp composition intercepted without sending", "no form PII in analytics");
  await ctx.close();

  const optionalCtx = await context();
  const optional = await optionalCtx.newPage();
  await optional.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  await optional.locator("#lead-name").fill("اختبار بدون هاتف");
  await optional.locator("#lead-topic").selectOption("property");
  let optionalUrl;
  await optional.route("https://wa.me/**", async (route) => {
    optionalUrl = route.request().url();
    await route.fulfill({ contentType: "text/html", body: "QA: intercepted" });
  });
  await optional.locator('button[type="submit"]').click();
  await optional.waitForURL("https://wa.me/**");
  assert(!new URL(optionalUrl).searchParams.get("text").includes("رقم التواصل"));
  report.checks.push("phone genuinely optional");
  await optionalCtx.close();

  const noJsCtx = await context({ javaScriptEnabled: false });
  const noJs = await noJsCtx.newPage();
  await noJs.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  assert(await noJs.locator('button[type="submit"]').isDisabled());
  assert(await noJs.locator('main a[href^="tel:"]').first().isVisible());
  assert(await noJs.locator('main a[href^="https://wa.me/"]').first().isVisible());
  report.checks.push("no-JS contacts available, no accidental form GET with PII");
  await noJsCtx.close();

  const reducedCtx = await context({ reducedMotion: "reduce" });
  const reduced = await reducedCtx.newPage();
  await reduced.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  const animation = await reduced.evaluate(() => getComputedStyle(document.querySelector('section > div'), "::after").animationName);
  assert.equal(animation, "none");
  await reduced.locator("details summary").first().click();
  assert(await reduced.locator("details[open]").count() === 1);
  report.checks.push("reduced motion", "native FAQ disclosure");
  await reducedCtx.close();

  assert.equal(report.browserErrors.length, 0, report.browserErrors.join("\n"));
  await writeFile(`${output}/ads-immobilier-checks.json`, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
