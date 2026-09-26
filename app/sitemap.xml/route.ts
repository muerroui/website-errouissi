import { siteUrl } from "@/lib/site";
import { getServicePath, servicePages } from "@/lib/services";

function entry(path: string, frPath: string, arPath: string, priority: string, changefreq: string) {
  return `
  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr-MA" href="${siteUrl}${frPath}" />
    <xhtml:link rel="alternate" hreflang="ar-MA" href="${siteUrl}${arPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${frPath}" />
  </url>`;
}

export function GET() {
  const homes = (["fr", "ar"] as const).map((locale) => entry(`/${locale}`, "/fr", "/ar", "1.0", "weekly"));
  const services = Object.values(servicePages).flatMap((page) => {
    const frPath = getServicePath("fr", page.key);
    const arPath = getServicePath("ar", page.key);
    return [entry(frPath, frPath, arPath, "0.9", "monthly"), entry(arPath, frPath, arPath, "0.9", "monthly")];
  });
  const contacts = [entry("/fr/contact", "/fr/contact", "/ar/contact", "0.8", "monthly"), entry("/ar/contact", "/fr/contact", "/ar/contact", "0.8", "monthly")];
  const urls = [...homes, ...services, ...contacts].join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
