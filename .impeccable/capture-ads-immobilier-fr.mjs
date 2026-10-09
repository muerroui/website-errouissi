import assert from "node:assert/strict";
import { chromium } from "playwright-core";
const origin = process.env.ADS_PREVIEW_ORIGIN || "http://localhost:3111";
const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", headless: true });
try {
  for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844], ["narrow", 320, 740]]) {
    const ctx = await browser.newContext({ viewport: { width, height } });
    await ctx.route(/https:\/\/.*(googletagmanager|google-analytics)\..*/, (route) => route.abort());
    const page = await ctx.newPage();
    assert.equal((await page.goto(`${origin}/ads/immobilier`, { waitUntil: "networkidle" })).status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => !document.querySelector('button[type="submit"]').disabled);
    await page.locator("figure img").scrollIntoViewIfNeeded();
    await page.locator("figure img").evaluate((img) => img.decode());
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
    assert.equal(await page.locator('meta[name="robots"]').getAttribute("content"), "noindex, follow");
    assert((await page.locator('main a[href^="tel:"]').first().boundingBox()).y < height - 84);
    await page.screenshot({ path: `.impeccable/review/ads-immobilier-fr-${name}.png`, fullPage: true });
    await page.screenshot({ path: `.impeccable/review/ads-immobilier-fr-${name}-hero.png` });
    console.log(`${name}: final capture verified`);
    await ctx.close();
  }
} finally { await browser.close(); }
