import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

const routes = [
  ["fiscal-fr", "/fr/services/droit-fiscal", 1440, 1000],
  ["fiscal-ar", "/ar/services/القانون-الضريبي", 390, 844],
  ["administratif-fr", "/fr/services/droit-administratif", 1440, 1000],
  ["administratif-ar", "/ar/services/القانون-الإداري", 390, 844],
];

for (const [name, path, width, height] of routes) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(`http://localhost:3104${path}`, { waitUntil: "networkidle" });
  const result = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    dir: document.documentElement.dir,
    h1: document.querySelectorAll("h1").length,
    titleLength: [...document.title].length,
    descriptionLength: [...(document.querySelector('meta[name="description"]')?.content || "")].length,
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    hreflang: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
    faq: [...document.querySelectorAll('script[type="application/ld+json"]')].some((node) => node.textContent?.includes('"FAQPage"')),
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  console.log(name, result);
  await page.screenshot({ path: `.impeccable/review/${name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
