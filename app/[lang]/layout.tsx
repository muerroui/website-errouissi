import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type LayoutProps = { children: ReactNode; params: Promise<{ lang: string }> };

const defaults: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Avocat à Mohammedia depuis 1992 | Maître Errouissi",
    description: "Maître Abderrazak Errouissi, avocat à Mohammedia depuis 1992. Foncier rural, terres agricoles, immobilier et successions partout au Maroc.",
  },
  ar: {
    title: "محامي المحمدية منذ 1992 | الأستاذ عبد الرزاق الرويسي",
    description: "الأستاذ عبد الرزاق الرويسي محامي بالمحمدية منذ 1992، متخصص في العقار الفلاحي وأراضي الجموع والميراث والمنازعات العقارية بالمغرب.",
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = defaults[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: copy.title, template: `%s | ${lang === "ar" ? "مكتب الرويسي" : "Cabinet Errouissi"}` },
    description: copy.description,
    alternates: { canonical: `/${lang}`, languages: { "fr-MA": "/fr", "ar-MA": "/ar", "x-default": "/fr" } },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: lang === "ar" ? ["fr_MA"] : ["ar_MA"],
      url: `/${lang}`,
      siteName: "Cabinet Errouissi",
      title: copy.title,
      description: copy.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang === "ar" ? "ar-MA" : "fr-MA"} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head><JsonLd locale={lang} /></head>
      <body><Header locale={lang} />{children}<Footer locale={lang} /></body>
    </html>
  );
}
