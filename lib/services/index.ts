import type { Locale } from "@/lib/i18n";
import type { ServiceKey, ServicePageDefinition } from "@/lib/service-page-types";
import { immobilierPage } from "@/lib/services/immobilier";
import { successionPage } from "@/lib/services/succession";
import { foncierRuralPage } from "@/lib/services/foncier-rural";
import { fiscalPage } from "@/lib/services/fiscal";
import { administratifPage } from "@/lib/services/administratif";

export const servicePages: Record<ServiceKey, ServicePageDefinition> = {
  immobilier: immobilierPage,
  succession: successionPage,
  foncierRural: foncierRuralPage,
  fiscal: fiscalPage,
  administratif: administratifPage,
};

export function getServicePath(locale: Locale, key: ServiceKey) {
  return `/${locale}/services/${servicePages[key].content[locale].slug}`;
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return Object.values(servicePages).find((page) => page?.content[locale].slug === slug);
}
