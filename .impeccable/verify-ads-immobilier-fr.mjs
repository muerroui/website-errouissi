import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3110";
const output = ".impeccable/review";
const capture = !process.argv.includes("--checks-only");
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", headless: true });
const report = { origin, views: [], checks: [], browserErrors: [] };
async function context(options = {}) {
  const ctx = await browser.newContext(options);
  // Do not emit real Google analytics, make calls or send WhatsApp messages in QA.
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
        const foreground = luminance(style.color), background = luminance(getComputedStyle(ancestor).backgroundColor);
        const ratio = (Math.max(foreground, background) + .05) / (Math.min(foreground, background) + .05);
        const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && Number(style.fontWeight) >= 700);
        return { text: node.textContent.trim().slice(0, 45), ratio: Math.round(ratio * 100) / 100, minimum: large ? 3 : 4.5 };
      });
      return {
        lang: document.documentElement.lang, dir: document.documentElement.dir,
        h1: h1.textContent, h1Count: document.querySelectorAll("h1").length,
        font: getComputedStyle(h1).fontFamily,
        robots: document.querySelector('meta[name="robots"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        scrollWidth: document.documentElement.scrollWidth,
        callBottom: call.getBoundingClientRect().bottom,
        scriptCount: document.querySelectorAll('#campaign-google-analytics').length,
        phoneLinks: [...document.querySelectorAll('a[href^="tel:"]')].map((node) => node.getAttribute("href")),
        whatsappLinks: [...document.querySelectorAll('a[href^="https://wa.me/"]')].map((node) => node.getAttribute("href")),
        contrasts,
      };
    });
    assert.equal(metrics.lang, "fr-MA"); assert.equal(metrics.dir, "ltr");
    assert.equal(metrics.h1Count, 1); assert(metrics.h1.includes("Avocat immobilier"));
    assert(metrics.font.includes("Playfair Display"));
    assert.equal(metrics.scrollWidth, width, `${name}: horizontal overflow`);
    assert(metrics.callBottom < height - 84, `${name}: call CTA outside first viewport`);
    assert(metrics.robots.includes("noindex") && metrics.robots.includes("follow"));
    assert.equal(metrics.canonical, "https://errouissi.ma/ads/immobilier");
    assert.equal(metrics.scriptCount, 1);
    assert(metrics.phoneLinks.every((href) => href === "tel:+212523283258"));
    assert(metrics.whatsappLinks.every((href) => new URL(href).searchParams.get("text").startsWith("Bonjour")));
    assert(metrics.contrasts.every((entry) => entry.ratio >= entry.minimum), JSON.stringify(metrics.contrasts.filter((entry) => entry.ratio < entry.minimum)));
    assert.equal(await page.locator('a[hreflang="ar-MA"]').getAttribute("href"), "/ar/ads/immobilier");
    const illustration = page.locator('img[src*="litige-immobilier-avocat-maroc"]');
    await illustration.scrollIntoViewIfNeeded(); await illustration.evaluate((image) => image.decode());
    assert.equal(await illustration.getAttribute("loading"), "lazy");
    assert((await page.locator("figcaption").textContent()).includes("Illustration générée"));
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    if (capture) {
      await page.screenshot({ path: `${output}/ads-immobilier-fr-${name}.png`, fullPage: true });
      await page.screenshot({ path: `${output}/ads-immobilier-fr-${name}-hero.png` });
    }
    report.views.push({ name, width, ...metrics });
    await ctx.close();
  }

  const ctx = await context({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  page.on("pageerror", (error) => report.browserErrors.push(error.message));
  await page.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  const phoneEvent = await page.evaluate(() => {
    const link = document.querySelector('a[data-contact-position="header"]');
    link.addEventListener("click", (event) => event.preventDefault(), { once: true });
    link.click();
    return (window.dataLayer || []).map((item) => Array.from(item)).find((entry) => entry[1] === "phone_click");
  });
  assert.equal(phoneEvent[2].page_language, "fr-MA"); assert.equal(phoneEvent[2].campaign_page, "immobilier_fr");
  const submit = page.locator('button[type="submit"]');
  await submit.click();
  assert.equal(await page.locator('[aria-invalid="true"]').count(), 2);
  assert.equal(await page.evaluate(() => document.activeElement.id), "lead-name");
  assert((await page.locator("#name-error").textContent()).startsWith("Indiquez"));
  await page.locator("#lead-name").fill("Test français");
  await page.locator('[data-case-topic="inheritance"]').click();
  assert.equal(await page.locator("#lead-topic").inputValue(), "inheritance");
  assert.equal(await page.evaluate(() => document.activeElement.id), "lead-name");
  assert.equal(await page.locator('nav[aria-label="Contacter rapidement le cabinet"]').isVisible(), false);
  await page.locator("#lead-phone").fill("incorrect"); await submit.click();
  assert((await page.locator("#phone-error").textContent()).startsWith("Saisissez"));
  await page.locator("#lead-phone").fill("٠٦٦٨ ٠٧٥ ٢١٣");
  const events = [];
  page.on("console", (message) => { if (message.text().startsWith("qa-event:")) events.push(JSON.parse(message.text().slice(9))); });
  await page.evaluate(() => { const original = window.gtag; window.gtag = (...args) => { original(...args); console.log(`qa-event:${JSON.stringify(args)}`); }; });
  let outgoing;
  await page.route("https://wa.me/**", async (route) => { outgoing = route.request().url(); await route.fulfill({ contentType: "text/html", body: "QA: intercepted, not sent" }); });
  await submit.click(); await page.waitForURL("https://wa.me/**");
  const message = new URL(outgoing).searchParams.get("text");
  assert(message.startsWith("Bonjour")); assert(message.includes("Test français"));
  assert(message.includes("Bien hérité ou partage entre héritiers")); assert(message.includes("0668 075 213"));
  assert.equal(events.find((entry) => entry[1] === "whatsapp_click")[2].page_language, "fr-MA");
  assert(!JSON.stringify(events).includes("Test français")); assert(!JSON.stringify(events).includes("0668"));
  report.checks.push("French phone and WhatsApp events, no PII", "French validation and focus", "topic preset", "Arabic digit normalization", "localized WhatsApp composer, intercepted", "input hides bottom bar");
  await ctx.close();

  const optionalCtx = await context(); const optional = await optionalCtx.newPage();
  await optional.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  await optional.locator("#lead-name").fill("Test sans téléphone"); await optional.locator("#lead-topic").selectOption("property");
  let optionalUrl;
  await optional.route("https://wa.me/**", async (route) => { optionalUrl = route.request().url(); await route.fulfill({ contentType: "text/html", body: "QA: intercepted" }); });
  await optional.locator('button[type="submit"]').click(); await optional.waitForURL("https://wa.me/**");
  assert(!new URL(optionalUrl).searchParams.get("text").includes("Téléphone :")); await optionalCtx.close();

  const noJsCtx = await context({ javaScriptEnabled: false }); const noJs = await noJsCtx.newPage();
  await noJs.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  assert(await noJs.locator('button[type="submit"]').isDisabled());
  assert(await noJs.locator('main a[href^="tel:"]').first().isVisible());
  assert(await noJs.locator('main a[href^="https://wa.me/"]').first().isVisible()); await noJsCtx.close();

  const reducedCtx = await context({ reducedMotion: "reduce" }); const reduced = await reducedCtx.newPage();
  await reduced.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" });
  assert.equal(await reduced.evaluate(() => getComputedStyle(document.querySelector('section > div'), "::after").animationName), "none");
  await reduced.locator("details summary").first().click(); assert.equal(await reduced.locator("details[open]").count(), 1);
  const sitemap = await reduced.request.get(`${origin}/sitemap.xml`);
  assert(!(await sitemap.text()).includes("/ads/immobilier"));
  for (const path of ["/ar", "/fr", "/ar/contact", "/fr/contact", "/ar/services/القانون-العقاري", "/fr/services/droit-immobilier"]) {
    const res = await reduced.request.get(`${origin}${path}`); assert.equal(res.status(), 200, path);
    assert(!/name="robots" content="noindex/.test(await res.text()), `${path}: editorial indexing changed`);
  }
  await reduced.goto(`${origin}/ar/ads/immobilier`, { waitUntil: "networkidle" });
  assert.equal(await reduced.locator('a[hreflang="fr-MA"]').getAttribute("href"), "/ads/immobilier");
  const arPhoneEvent = await reduced.evaluate(() => {
    const link = document.querySelector('a[data-contact-position="header"]'); link.addEventListener("click", (e) => e.preventDefault(), { once: true }); link.click();
    return (window.dataLayer || []).map((item) => Array.from(item)).find((entry) => entry[1] === "phone_click");
  });
  assert.equal(arPhoneEvent[2].page_language, "ar-MA"); assert.equal(arPhoneEvent[2].campaign_page, "immobilier_ar");
  report.checks.push("phone optional", "no-JS direct contacts", "reduced motion and native FAQ", "both campaigns absent from sitemap", "six editorial routes still 200 and indexable", "bidirectional language links and Arabic event locale");
  await reducedCtx.close();
  assert.equal(report.browserErrors.length, 0, report.browserErrors.join("\n"));
  await writeFile(`${output}/ads-immobilier-fr-checks.json`, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify({ views: report.views.map(({ name, width, lang, dir, scrollWidth, callBottom }) => ({ name, width, lang, dir, scrollWidth, callBottom })), checks: report.checks, browserErrors: report.browserErrors }, null, 2));
} finally { await browser.close(); }
