import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3000";
const output = ".impeccable/review";
const capture = !process.argv.includes("--checks-only");
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
    const response = await page.goto(`${origin}/ar/ads/immobilier?utm_source=qa`, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled);
    const metrics = await page.evaluate(() => {
      const call = document.querySelector('main a[href^="tel:"]');
      const h1 = document.querySelector("h1");
      const form = document.querySelector("form");
      function luminance(color) {
        const rgb = color.match(/[\d.]+/g).slice(0, 3).map(Number).map((value) => {
          const normalized = value / 255;
          return normalized <= .04045 ? normalized / 12.92 : ((normalized + .055) / 1.055) ** 2.4;
        });
        return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
      }
      const contrasts = [...document.querySelectorAll('h1, h1 span, h2, h3, p, label, label span, summary, address, figcaption, a[data-contact-position]')].filter((node) => node.getBoundingClientRect().height > 0).map((node) => {
        const style = getComputedStyle(node);
        let ancestor = node;
        while (ancestor.parentElement && getComputedStyle(ancestor).backgroundColor === 'rgba(0, 0, 0, 0)') ancestor = ancestor.parentElement;
        const foreground = luminance(style.color);
        const background = luminance(getComputedStyle(ancestor).backgroundColor);
        const ratio = (Math.max(foreground, background) + .05) / (Math.min(foreground, background) + .05);
        const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && Number(style.fontWeight) >= 700);
        return { text: node.textContent.trim().slice(0, 45), ratio: Math.round(ratio * 100) / 100, minimum: large ? 3 : 4.5 };
      });
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
        contrasts,
      };
    });
    assert.equal(metrics.lang, "ar-MA");
    assert.equal(metrics.dir, "rtl");
    assert.equal(metrics.h1Count, 1);
    assert.equal(metrics.scrollWidth, width, `${name}: horizontal overflow`);
    assert(metrics.callBottom < height - 84, `${name}: primary call CTA must fit first viewport`);
    assert(metrics.h1Font.includes("Noto Naskh Arabic"));
    assert(metrics.robots.includes("noindex") && metrics.robots.includes("follow"));
    assert.equal(metrics.canonical, "https://errouissi.ma/ar/ads/immobilier");
    assert(metrics.phoneLinks.every((href) => href === "tel:+212523283258"));
    assert(metrics.whatsappLinks.every((href) => href.startsWith("https://wa.me/212668075213?text=")));
    assert.equal(metrics.structuredData.foundingDate, "1992-01");
    assert(metrics.contrasts.every((entry) => entry.ratio >= entry.minimum), JSON.stringify(metrics.contrasts.filter((entry) => entry.ratio < entry.minimum)));
    const illustration = page.locator('img[src*="litige-immobilier-avocat-maroc"]');
    await illustration.scrollIntoViewIfNeeded();
    await illustration.evaluate((image) => image.decode());
    assert.equal(await illustration.getAttribute("loading"), "lazy");
    assert.equal(await illustration.getAttribute("width"), "1200");
    assert.equal(await illustration.getAttribute("height"), "800");
    assert(await page.locator("figcaption").textContent().then((text) => text.includes("مشهد توضيحي مولّد")));
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    report.views.push({ name, ...metrics });
    if (capture) {
      await page.screenshot({ path: `${output}/ads-immobilier-${name}.png`, fullPage: true });
      await page.screenshot({ path: `${output}/ads-immobilier-${name}-hero.png` });
      await page.locator("figure").screenshot({ path: `${output}/ads-immobilier-${name}-image.png` });
    }
    await ctx.close();
  }

  const ctx = await context({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  page.on("pageerror", (error) => report.browserErrors.push(error.message));
  await page.goto(`${origin}/ar/ads/immobilier`, { waitUntil: "networkidle" });
  const callEvent = await page.evaluate(() => {
    const link = document.querySelector('a[data-contact-position="header"]');
    const preventNavigation = (event) => { if (event.target.closest?.('a[href^="tel:"]')) event.preventDefault(); };
    document.addEventListener("click", preventNavigation, true);
    link.click();
    document.removeEventListener("click", preventNavigation, true);
    return (window.dataLayer || []).map((item) => Array.from(item)).find((entry) => entry[0] === "event" && entry[1] === "phone_click");
  });
  assert.equal(callEvent?.[2]?.contact_position, "header");
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
  const queued = await page.evaluate(() => (window.dataLayer || []).map((item) => Array.from(item)));
  page.on("console", (message) => {
    if (message.text().startsWith("qa-contact-event:")) queued.push(JSON.parse(message.text().slice("qa-contact-event:".length)));
  });
  await page.evaluate(() => {
    const original = window.gtag;
    window.gtag = (...args) => {
      original(...args);
      console.log(`qa-contact-event:${JSON.stringify(args)}`);
    };
  });
  await page.route("https://wa.me/**", async (route) => {
    outgoing = route.request().url();
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
  report.checks.push("noindex/follow and self canonical", "generated image loads at all three widths with dimensions, lazy loading and illustration disclosure", "sampled text contrast at all three viewports", "phone click instrumentation without dialing", "Arabic form errors and focus", "issue-to-form topic preset", "mobile bar hidden during input", "Arabic digit normalization", "WhatsApp composition intercepted without sending", "no form PII in analytics");
  await ctx.close();

  const optionalCtx = await context();
  const optional = await optionalCtx.newPage();
  await optional.goto(`${origin}/ar/ads/immobilier`, { waitUntil: "networkidle" });
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
  await noJs.goto(`${origin}/ar/ads/immobilier`, { waitUntil: "networkidle" });
  assert(await noJs.locator('button[type="submit"]').isDisabled());
  assert(await noJs.locator('main a[href^="tel:"]').first().isVisible());
  assert(await noJs.locator('main a[href^="https://wa.me/"]').first().isVisible());
  report.checks.push("no-JS contacts available, no accidental form GET with PII");
  await noJsCtx.close();

  const reducedCtx = await context({ reducedMotion: "reduce" });
  const reduced = await reducedCtx.newPage();
  await reduced.goto(`${origin}/ar/ads/immobilier`, { waitUntil: "networkidle" });
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
