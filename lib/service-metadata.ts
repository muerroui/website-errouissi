import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import type { ServicePageDefinition } from "@/lib/service-page-types";
import { getServicePath } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export function buildServiceMetadata(locale: Locale, page: ServicePageDefinition): Metadata {
  const copy = page.content[locale];
  const canonical = getServicePath(locale, page.key);
  return {
    title: { absolute: copy.seo.title },
    description: copy.seo.description,
    alternates: {
      canonical,
      languages: {
        "fr-MA": getServicePath("fr", page.key),
        "ar-MA": getServicePath("ar", page.key),
        "x-default": getServicePath("fr", page.key),
      },
    },
    openGraph: {
      type: "website",
      url: new URL(canonical, siteUrl),
      title: copy.seo.title,
      description: copy.seo.description,
      locale: locale === "ar" ? "ar_MA" : "fr_MA",
    },
  };
}
