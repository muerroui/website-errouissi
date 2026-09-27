import type { Locale } from "@/lib/i18n";
import type { GuideDefinition } from "@/lib/guide-types";
import type { GuideKey } from "@/lib/guide-slugs";
import { agriculturalRegistrationGuide, indivisionGuide, melkiyaGuide, soulaliyatesGuide } from "@/lib/guides/rural";
import { expropriationGuide, immatriculationGuide, oppositionGuide } from "@/lib/guides/property";
import { inheritanceGuide, taxDisputeGuide } from "@/lib/guides/tax-and-inheritance";
import { caveatGuide, dispossessionGuide, encroachmentGuide, ownershipClaimGuide, saleOthersPropertyGuide, shufaaGuide } from "@/lib/guides/land-disputes";

export const guides: Record<GuideKey, GuideDefinition> = {
  immatriculation: immatriculationGuide,
  expropriation: expropriationGuide,
  opposition: oppositionGuide,
  soulaliyates: soulaliyatesGuide,
  indivision: indivisionGuide,
  melkiya: melkiyaGuide,
  "agricultural-registration": agriculturalRegistrationGuide,
  "tax-dispute": taxDisputeGuide,
  inheritance: inheritanceGuide,
  caveat: caveatGuide,
  shufaa: shufaaGuide,
  dispossession: dispossessionGuide,
  encroachment: encroachmentGuide,
  "sale-others-property": saleOthersPropertyGuide,
  "ownership-claim": ownershipClaimGuide,
};

export function getGuideBySlug(locale: Locale, slug: string) {
  return Object.values(guides).find((guide) => guide.content[locale].slug === slug);
}
