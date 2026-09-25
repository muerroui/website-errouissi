import { chromium } from "playwright-core";

const paths = [
  "/fr/services/droit-immobilier", "/ar/services/القانون-العقاري",
  "/fr/services/succession-heritage", "/ar/services/الميراث-والتركات",
  "/fr/services/droit-foncier-rural", "/ar/services/العقار-الفلاحي-وأراضي-الجموع",
  "/fr/contact", "/ar/contact",
];

const browser = await chromium.launch({ executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", headless: true });
const page = await browser.newPage();
const report = [];

for (const path of paths) {
  await page.goto(`http://localhost:3100${path}`, { waitUntil: "domcontentloaded" });
  report.push(await page.evaluate((route) => ({
    route,
    lang: document.documentElement.lang,
    dir: document.documentElement.dir,
    h1: document.querySelectorAll("h1").length,
    titleLength: [...document.title].length,
    descriptionLength: [...(document.querySelector('meta[name="description"]')?.content || "")].length,
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    hreflangCount: document.querySelectorAll('link[rel="alternate"][hreflang]').length,
    faqSchema: [...document.querySelectorAll('script[type="application/ld+json"]')].some((node) => node.textContent?.includes('"FAQPage"')),
  }), path));
}

console.log(JSON.stringify(report, null, 2));
await browser.close();
