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
    title: "الأدلة القانونية والتوجيهية | مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية",
    description: "أدلة قانونية وعملية في التحفيظ العقاري، أراضي تعاونيات الإصلاح الزراعي، الشفعة، نزع الملكية، المنازعات الضريبية، وقسمة التركات بالمغرب صاغها محامٍ ممارس.",
    h1: "الإحاطة بالأحكام القانونية والمساطر القضائية قبل مباشرة الإجراءات",
    lead: "دراسات ومذكرات توجيهية عملية في منازعات التحفيظ، أراضي تعاونيات الإصلاح الزراعي والأراضي المشاعة، التركات، القضاء الإداري والتحصيل الضريبي بالمغرب.",
    home: "الرئيسية",
    label: "الأدلة القانونية التوجيهية",
    read: "الاطلاع على الدراسة القانونية",
    note: "تتضمن هذه الأدلة مبادئ توجيهية وإضاءات قانونية عامة؛ ولا تغني عن فحص وثائق الملكية، الرسوم العدلية، وتحديد الآجال القانونية الخاصة بكل نازلة.",
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
    <main className="bg-paper text-slate-950">
      <header className="relative isolate overflow-hidden bg-navy px-5 pb-20 pt-12 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
        <div aria-hidden="true" className="absolute inset-y-0 start-[9%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute -bottom-24 end-[8%] h-72 w-72 rounded-full bg-gold/[0.07] blur-3xl" />
        <div className="relative mx-auto max-w-[86rem]">
          <nav aria-label={locale === "ar" ? "مسار التنقل" : "Fil d’Ariane"} className="flex items-center gap-3 text-sm text-slate-400"><Link href={`/${locale}`} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-amber-300 hover:underline">{page.home}</Link><span className="text-gold">/</span><span>{page.label}</span></nav>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
            <h1 className="font-display max-w-[15ch] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{page.h1}</h1>
            <p className="max-w-[52ch] border-s border-gold/60 ps-6 text-lg leading-8 text-slate-300">{page.lead}</p>
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
                <article key={guide.key} className="group grid gap-5 border-b border-slate-900/15 py-8 transition-[background-color,padding] duration-300 hover:bg-gold/[0.08] motion-reduce:transition-none sm:px-4 lg:grid-cols-[0.55fr_1.2fr_0.25fr] lg:items-baseline lg:gap-10 lg:py-10 lg:hover:px-7">
                  <p className="text-sm font-semibold text-gold-ink">{item.category}</p>
                  <div><h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] sm:text-3xl"><Link href={getGuidePath(locale, guide.key as GuideKey)} className="inline-flex min-h-11 items-center">{item.h1}</Link></h2><p className="mt-3 max-w-[66ch] leading-7 text-slate-600">{item.lead}</p></div>
                  <Link href={getGuidePath(locale, guide.key as GuideKey)} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-gold/60 underline-offset-4 group-hover:decoration-gold lg:justify-self-end">{page.read}<Arrow aria-hidden="true" size={16} /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
