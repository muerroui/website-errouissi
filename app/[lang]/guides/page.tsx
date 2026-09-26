import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { guides } from "@/lib/guides";
import { getGuidePath } from "@/lib/guide-slugs";
import type { GuideKey } from "@/lib/guide-slugs";
import { isLocale, type Locale } from "@/lib/i18n";

type PageProps = { params: Promise<{ lang: string }> };

const copy = {
  fr: {
    title: "Guides juridiques du cabinet Errouissi",
    description: "Guides pratiques en droit immobilier, foncier rural, successions, expropriation et fiscalité au Maroc, rédigés pour comprendre avant d’agir.",
    h1: "Comprendre le droit avant de choisir une démarche",
    lead: "Des dossiers pratiques consacrés aux questions foncières, rurales, successorales, administratives et fiscales rencontrées au Maroc.",
    home: "Accueil",
    label: "Guides juridiques",
    read: "Lire le guide",
    note: "Ces contenus fournissent des repères généraux. Une décision juridique nécessite l’examen des pièces, des délais et des circonstances propres au dossier.",
  },
  ar: {
    title: "الدليل القانوني لمكتب الرويسي",
    description: "أدلة عملية حول القانون العقاري والعقار الفلاحي والتركات ونزع الملكية والمنازعات الضريبية في المغرب لفهم الوضع قبل اتخاذ الإجراء.",
    h1: "فهم الوضع القانوني قبل اختيار الإجراء",
    lead: "أدلة عملية حول القضايا العقارية والفلاحية والإرثية والإدارية والضريبية التي يواجهها الأفراد والمقاولات والفلاحون في المغرب.",
    home: "الرئيسية",
    label: "الدليل القانوني",
    read: "قراءة الدليل",
    note: "تقدم هذه المواد معلومات عامة. ويظل فحص الوثائق والآجال وظروف الملف ضرورياً قبل اتخاذ أي قرار قانوني.",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const page = copy[lang];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${lang}/guides`, languages: { "fr-MA": "/fr/guides", "ar-MA": "/ar/guides", "x-default": "/fr/guides" } },
    openGraph: { type: "website", url: `/${lang}/guides`, title: page.title, description: page.description },
  };
}

export default async function GuidesIndex({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const page = copy[locale];
  const Arrow = locale === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <main className="bg-[#F3F0E9] text-slate-950">
      <header className="relative isolate overflow-hidden bg-[#0B132B] px-5 pb-20 pt-12 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
        <div aria-hidden="true" className="absolute inset-y-0 start-[9%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute -bottom-24 end-[8%] h-72 w-72 rounded-full bg-[#C5A059]/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-[86rem]">
          <nav aria-label={locale === "ar" ? "مسار التنقل" : "Fil d’Ariane"} className="flex items-center gap-3 text-sm text-slate-400"><Link href={`/${locale}`} className="underline-offset-4 hover:text-amber-300 hover:underline">{page.home}</Link><span className="text-[#C5A059]">/</span><span>{page.label}</span></nav>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
            <h1 className="font-display max-w-[15ch] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{page.h1}</h1>
            <p className="max-w-[52ch] border-s border-[#C5A059]/60 ps-6 text-lg leading-8 text-slate-300">{page.lead}</p>
          </div>
        </div>
      </header>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[86rem]">
          <p className="max-w-[72ch] text-base leading-7 text-slate-600">{page.note}</p>
          <div className="mt-14 border-t border-slate-900/15">
            {Object.values(guides).map((guide) => {
              const item = guide.content[locale];
              return (
                <article key={guide.key} className="group grid gap-5 border-b border-slate-900/15 py-8 transition-[background-color,padding] duration-300 hover:bg-[#C5A059]/[0.08] motion-reduce:transition-none sm:px-4 lg:grid-cols-[0.55fr_1.2fr_0.25fr] lg:items-baseline lg:gap-10 lg:py-10 lg:hover:px-7">
                  <p className="text-sm font-semibold text-[#8A682F]">{item.category}</p>
                  <div><h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl"><Link href={getGuidePath(locale, guide.key as GuideKey)}>{item.h1}</Link></h2><p className="mt-3 max-w-[66ch] leading-7 text-slate-600">{item.lead}</p></div>
                  <Link href={getGuidePath(locale, guide.key as GuideKey)} className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#C5A059]/60 underline-offset-4 group-hover:decoration-[#C5A059] lg:justify-self-end">{page.read}<Arrow aria-hidden="true" size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
