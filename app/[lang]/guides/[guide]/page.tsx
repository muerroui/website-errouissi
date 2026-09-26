import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { getGuideBySlug, guides } from "@/lib/guides";
import { getGuidePath } from "@/lib/guide-slugs";
import type { GuideKey } from "@/lib/guide-slugs";
import { isLocale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string; guide: string }> };

export function generateStaticParams() {
  return (["fr", "ar"] as const).flatMap((lang) =>
    Object.values(guides).map((guide) => ({ lang, guide: guide.content[lang].slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, guide: encodedSlug } = await params;
  if (!isLocale(lang)) return {};
  const guide = getGuideBySlug(lang, decodeURIComponent(encodedSlug));
  if (!guide) return {};
  const copy = guide.content[lang];
  const key = guide.key as GuideKey;
  const canonical = getGuidePath(lang, key);
  const frPath = getGuidePath("fr", key);
  const arPath = getGuidePath("ar", key);

  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: { canonical, languages: { "fr-MA": frPath, "ar-MA": arPath, "x-default": frPath } },
    openGraph: {
      type: "article",
      url: `${siteUrl}${canonical}`,
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: lang === "ar" ? ["fr_MA"] : ["ar_MA"],
      title: copy.seo.title,
      description: copy.seo.description,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
  };
}

export default async function GuideRoute({ params }: PageProps) {
  const { lang, guide: encodedSlug } = await params;
  if (!isLocale(lang)) notFound();
  const guide = getGuideBySlug(lang, decodeURIComponent(encodedSlug));
  if (!guide) notFound();
  return <GuidePage locale={lang} guide={guide} />;
}
