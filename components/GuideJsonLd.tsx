import type { Locale } from "@/lib/i18n";
import type { GuideDefinition } from "@/lib/guide-types";
import { firm, siteUrl } from "@/lib/site";
import { getGuidePath } from "@/lib/guide-slugs";
import type { GuideKey } from "@/lib/guide-slugs";

export function GuideJsonLd({ locale, guide }: { locale: Locale; guide: GuideDefinition }) {
  const copy = guide.content[locale];
  const url = `${siteUrl}${getGuidePath(locale, guide.key as GuideKey)}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: copy.h1,
        description: copy.seo.description,
        inLanguage: locale === "ar" ? "ar-MA" : "fr-MA",
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        mainEntityOfPage: url,
        author: { "@type": "Person", name: "Maître Abderrazak Errouissi" },
        publisher: { "@id": `${siteUrl}/${locale}#cabinet` },
        about: copy.category,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: locale === "ar" ? "الرئيسية" : "Accueil", item: `${siteUrl}/${locale}` },
          { "@type": "ListItem", position: 2, name: locale === "ar" ? "الدليل القانوني" : "Guides juridiques", item: `${siteUrl}/${locale}/guides` },
          { "@type": "ListItem", position: 3, name: copy.h1, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
