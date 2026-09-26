import type { Locale } from "@/lib/i18n";

export const guideSlugPairs = [
  { key: "immatriculation", fr: "titre-foncier-conservation-fonciere-maroc", ar: "التحفيظ-العقاري-في-المغرب" },
  { key: "expropriation", fr: "expropriation-indemnisation-maroc", ar: "نزع-الملكية-والتعويض" },
  { key: "opposition", fr: "opposition-immatriculation-fonciere-maroc", ar: "التعرض-على-مطلب-التحفيظ" },
  { key: "soulaliyates", fr: "terres-collectives-soulaliyates-maroc", ar: "أراضي-الجموع-والأراضي-السلالية" },
  { key: "indivision", fr: "sortie-indivision-maroc", ar: "الخروج-من-الشياع-في-القانون-المغربي" },
  { key: "melkiya", fr: "melkiya-terrain-non-titre-maroc", ar: "العقار-غير-المحفظ-ورسم-الملكية" },
  { key: "agricultural-registration", fr: "immatriculation-terrain-agricole-maroc", ar: "تحفيظ-أرض-فلاحية-بالمغرب" },
  { key: "tax-dispute", fr: "controle-fiscal-contestation-maroc", ar: "المراقبة-والمنازعات-الضريبية" },
  { key: "inheritance", fr: "heritage-succession-maroc", ar: "الإرث-وتصفية-التركة-في-المغرب" },
] as const;

export type GuideKey = (typeof guideSlugPairs)[number]["key"];

export function guideHubPath(locale: Locale) {
  return `/${locale}/guides`;
}

export function getGuideSlug(locale: Locale, key: GuideKey) {
  return guideSlugPairs.find((pair) => pair.key === key)?.[locale];
}

export function getGuidePath(locale: Locale, key: GuideKey) {
  const slug = getGuideSlug(locale, key);
  return slug ? `/${locale}/guides/${slug}` : guideHubPath(locale);
}

export function getAlternateGuidePath(pathname: string, locale: Locale) {
  const decoded = decodeURIComponent(pathname);
  if (decoded === `/${locale}/guides`) return `/${locale === "fr" ? "ar" : "fr"}/guides`;
  const currentPrefix = `/${locale}/guides/`;
  if (!decoded.startsWith(currentPrefix)) return null;
  const slug = decoded.slice(currentPrefix.length);
  const pair = guideSlugPairs.find((item) => item[locale] === slug);
  if (!pair) return null;
  const other = locale === "fr" ? "ar" : "fr";
  return `/${other}/guides/${pair[other]}`;
}
