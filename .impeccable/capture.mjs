import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

const routes = [
  { name: "accueil", desktop: "/fr", mobile: "/ar" },
  { name: "immobilier", desktop: "/fr/services/droit-immobilier", mobile: "/ar/services/القانون-العقاري" },
  { name: "succession", desktop: "/fr/services/succession-heritage", mobile: "/ar/services/الميراث-والتركات" },
  { name: "foncier-rural", desktop: "/fr/services/droit-foncier-rural", mobile: "/ar/services/العقار-الفلاحي-وأراضي-الجموع" },
  { name: "fiscal", desktop: "/fr/services/droit-fiscal", mobile: "/ar/services/القانون-الضريبي" },
  { name: "administratif", desktop: "/fr/services/droit-administratif", mobile: "/ar/services/القانون-الإداري" },
  { name: "contact", desktop: "/fr/contact", mobile: "/ar/contact" },
];

const report = [];

for (const route of routes) {
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto(`http://localhost:3100${route.mobile}`, { waitUntil: "networkidle" });
  const metrics = await mobile.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
  }));
  report.push({ page: route.name, ...metrics });
  await mobile.screenshot({ path: `.impeccable/review/mobile-${route.name}.png`, fullPage: true });
  await mobile.close();

  const desktop = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await desktop.goto(`http://localhost:3100${route.desktop}`, { waitUntil: "networkidle" });
  await desktop.screenshot({ path: `.impeccable/review/desktop-${route.name}.png`, fullPage: true });
  await desktop.close();
}

console.log(JSON.stringify(report, null, 2));

await browser.close();
