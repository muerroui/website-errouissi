import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, Clock3, FileCheck2, MessageCircle } from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { GuideJsonLd } from "@/components/GuideJsonLd";
import type { GuideDefinition } from "@/lib/guide-types";
import type { Locale } from "@/lib/i18n";
import { getGuidePath } from "@/lib/guide-slugs";
import type { GuideKey } from "@/lib/guide-slugs";
import { guides as guidesForRelated } from "@/lib/guides";
import { getServicePath } from "@/lib/services";
import { firm } from "@/lib/site";

const ui = {
  fr: {
    home: "Accueil",
    guides: "Guides juridiques",
    summary: "Dans ce guide",
    essentials: "L’essentiel à retenir",
    documents: "Préparer votre dossier",
    sources: "Sources institutionnelles",
    legalNote: "Information générale",
    legalText: "Ce guide présente des repères généraux en droit marocain. Les documents, les délais et la situation du bien doivent être examinés avant de choisir une démarche.",
    updated: "Mis à jour le",
    read: "Lecture",
    minutes: "min",
    service: "Voir l’expertise associée",
    call: "Appeler le cabinet",
    whatsapp: "Écrire sur WhatsApp",
    contact: "Présenter votre dossier",
    related: "Guides à consulter ensuite",
    relatedRead: "Consulter",
  },
  ar: {
    home: "الرئيسية",
    guides: "الدليل القانوني",
    summary: "محتويات الدليل",
    essentials: "أهم ما ينبغي معرفته",
    documents: "إعداد وثائق الملف",
    sources: "المصادر الرسمية",
    legalNote: "معلومات عامة",
    legalText: "يقدم هذا الدليل معلومات عامة في إطار القانون المغربي. ويظل فحص الوثائق والآجال والوضعية الخاصة بالعقار ضرورياً قبل اختيار أي إجراء.",
    updated: "آخر تحيين",
    read: "مدة القراءة",
    minutes: "دقائق",
    service: "الاطلاع على مجال التدخل المرتبط",
    call: "الاتصال بالمكتب",
    whatsapp: "مراسلة المكتب عبر واتساب",
    contact: "عرض الملف على المكتب",
    related: "أدلة مرتبطة بالموضوع",
    relatedRead: "قراءة الدليل",
  },
} as const;

function readingTime(guide: GuideDefinition, locale: Locale) {
  const copy = guide.content[locale];
  const words = [copy.lead, ...copy.intro, ...copy.takeaways, ...copy.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? [])]), ...copy.faqs.flatMap((faq) => [faq.question, faq.answer])]
    .join(" ")
    .trim()
    .split(/\s+/).length;
  return Math.max(5, Math.ceil(words / (locale === "ar" ? 170 : 210)));
}

export function GuidePage({ locale, guide }: { locale: Locale; guide: GuideDefinition }) {
  const copy = guide.content[locale];
  const labels = ui[locale];
  const Arrow = locale === "ar" ? ArrowUpLeft : ArrowUpRight;
  const date = new Intl.DateTimeFormat(locale === "ar" ? "ar-MA" : "fr-MA", { dateStyle: "long" }).format(new Date(guide.updatedAt));
  const related = (guide.relatedGuides ?? [])
    .map((key) => ({ key: key as GuideKey, guide: guidesForRelated[key as GuideKey] }))
    .filter((item) => item.guide);

  return (
    <main className="overflow-clip bg-paper text-slate-950">
      <GuideJsonLd locale={locale} guide={guide} />
      <FaqJsonLd faqs={copy.faqs} />

      <article>
        <header className="relative isolate overflow-hidden bg-navy text-white">
          <div aria-hidden="true" className="absolute inset-y-0 start-[9%] hidden w-px bg-white/[0.06] lg:block" />
          <div aria-hidden="true" className="absolute inset-y-0 end-[26%] hidden w-px bg-white/[0.06] lg:block" />
          <div aria-hidden="true" className="absolute -bottom-24 end-[4%] h-72 w-72 rounded-full bg-gold/[0.07] blur-3xl" />

          <div className="relative mx-auto max-w-[90rem] px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
            <nav aria-label={locale === "ar" ? "مسار التنقل" : "Fil d’Ariane"} className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <Link href={`/${locale}`} className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-amber-300 hover:underline motion-reduce:transition-none">{labels.home}</Link>
              <span aria-hidden="true" className="text-gold">/</span>
              <Link href={`/${locale}/guides`} className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-amber-300 hover:underline motion-reduce:transition-none">{labels.guides}</Link>
              <span aria-hidden="true" className="text-gold">/</span>
              <span className="text-slate-300">{copy.category}</span>
            </nav>

            <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
              <div>
                <h1 className="font-display max-w-[17ch] text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">{copy.h1}</h1>
                <p className="mt-8 max-w-[68ch] text-lg leading-8 text-slate-300 sm:text-xl">{copy.lead}</p>
              </div>

              <aside className="self-end border-y border-white/10 py-7 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
                  <span>{labels.updated}</span>
                  <time dateTime={guide.updatedAt} className="font-medium text-white">{date}</time>
                </div>
                <div className="flex items-center justify-between gap-6 pt-5">
                  <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" size={16} className="text-gold" />{labels.read}</span>
                  <span className="font-medium tabular-nums text-white">{readingTime(guide, locale)} {labels.minutes}</span>
                </div>
              </aside>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-[86rem] gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-24 lg:px-12 lg:py-28">
          <div className="min-w-0">
            <div className="max-w-[72ch] space-y-6 text-[1.06rem] leading-8 text-slate-700 sm:text-lg">
              {copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <section aria-labelledby="guide-essentials" className="my-16 border-y border-gold/45 py-9">
              <h2 id="guide-essentials" className="font-display text-3xl font-semibold tracking-[-0.02em]">{labels.essentials}</h2>
              <ul className="mt-7 grid gap-5 sm:grid-cols-3">
                {copy.takeaways.map((item) => <li key={item} className="border-t border-slate-900/15 pt-4 leading-7 text-slate-700">{item}</li>)}
              </ul>
            </section>

            <div className="space-y-20">
              {copy.sections.map((section) => (
                <section id={section.id} key={section.id} className="scroll-mt-28">
                  <h2 className="font-display max-w-[20ch] text-[clamp(2.25rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">{section.title}</h2>
                  <div className="mt-8 max-w-[72ch] space-y-6 text-[1.06rem] leading-8 text-slate-700 sm:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets?.length ? (
                    <ul className="mt-8 max-w-[72ch] border-t border-slate-900/15">
                      {section.bullets.map((item) => <li key={item} className="grid grid-cols-[1.25rem_1fr] gap-4 border-b border-slate-900/15 py-4 leading-7 text-slate-700"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-ink" /><span>{item}</span></li>)}
                    </ul>
                  ) : null}
                  {section.note ? <p className="mt-8 max-w-[72ch] bg-warm-paper px-6 py-5 leading-7 text-slate-800">{section.note}</p> : null}
                </section>
              ))}
            </div>
          </div>

          <aside className="min-w-0 lg:order-last">
            <div className="space-y-8 lg:sticky lg:top-28">
              <nav aria-label={labels.summary} className="border-t border-slate-900/20 pt-5">
                <h2 className="font-display text-2xl font-semibold">{labels.summary}</h2>
                <ol className="mt-5 space-y-1 text-sm leading-6 text-slate-600">
                  {copy.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="flex min-h-11 items-center border-s border-transparent py-2 ps-4 underline-offset-4 transition-colors hover:border-gold hover:text-slate-950 hover:underline motion-reduce:transition-none">{section.title}</a></li>)}
                  <li><a href="#questions" className="flex min-h-11 items-center border-s border-transparent py-2 ps-4 underline-offset-4 transition-colors hover:border-gold hover:text-slate-950 hover:underline motion-reduce:transition-none">{copy.faqTitle}</a></li>
                </ol>
              </nav>

              <div className="bg-navy p-6 text-white shadow-[0_22px_55px_rgba(11,19,43,0.16)]">
                <p className="font-display text-xl font-semibold">{labels.legalNote}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{labels.legalText}</p>
                <Link href={getServicePath(locale, guide.serviceKey)} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brass underline decoration-gold/50 underline-offset-4 hover:decoration-gold">
                  {labels.service}<Arrow aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <section className="bg-warm-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <FileCheck2 aria-hidden="true" className="text-gold-ink" size={28} strokeWidth={1.5} />
              <h2 className="font-display mt-6 max-w-[14ch] text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{copy.checklistTitle}</h2>
              <p className="mt-6 max-w-[48ch] leading-7 text-slate-600">{copy.checklistIntro}</p>
            </div>
            <ul className="border-t border-slate-900/15">
              {copy.checklist.map((item) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-slate-900/15 py-5 leading-7 text-slate-700"><span aria-hidden="true" className="font-display text-gold-ink">—</span><span>{item}</span></li>)}
            </ul>
          </div>
        </section>

        <section id="questions" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <h2 className="font-display max-w-[14ch] text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{copy.faqTitle}</h2>
              <div className="mt-9 border-t border-slate-900/15 pt-5">
                <p className="text-sm font-semibold text-slate-800">{copy.sourcesLabel}</p>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                  {copy.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline decoration-slate-400 underline-offset-4 transition-colors hover:text-gold-ink motion-reduce:transition-none">{source.label}</a></li>)}
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-900/15">
              {copy.faqs.map((faq) => <details key={faq.question} className="group border-b border-slate-900/15 py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-semibold marker:content-none sm:text-2xl"><span>{faq.question}</span><span aria-hidden="true" className="text-gold-ink transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="mt-5 max-w-[68ch] pe-10 leading-7 text-slate-600">{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="border-t border-slate-900/10 bg-paper px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-[86rem]">
              <h2 className="font-display text-3xl font-semibold tracking-[-0.02em]">{labels.related}</h2>
              <div className="mt-8 grid gap-px bg-slate-900/10 md:grid-cols-3">
                {related.map(({ key, guide: relatedGuide }) => {
                  const item = relatedGuide.content[locale];
                  return <article key={key} className="bg-paper p-6 transition-colors hover:bg-warm-paper"><p className="text-sm font-semibold text-gold-ink">{item.category}</p><h3 className="font-display mt-3 text-xl font-semibold leading-snug"><Link href={getGuidePath(locale, key)}>{item.h1}</Link></h3><Link href={getGuidePath(locale, key)} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-gold/60 underline-offset-4">{labels.relatedRead}<Arrow aria-hidden="true" size={15} /></Link></article>;
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-gold px-5 py-20 text-navy sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div><h2 className="font-display max-w-[15ch] text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1] tracking-[-0.03em]">{copy.ctaTitle}</h2><p className="mt-6 max-w-[62ch] text-lg leading-8 text-navy/75">{copy.ctaText}</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:justify-self-end">
              <Link href={`/${locale}/contact`} className="inline-flex min-h-14 items-center justify-between gap-7 rounded-xl bg-navy px-6 py-4 font-semibold text-white shadow-[0_18px_44px_rgba(11,19,43,0.24)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none">{labels.contact}<Arrow aria-hidden="true" size={18} /></Link>
              <a href={firm.whatsappUrl} rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-between gap-7 rounded-xl border border-navy/25 px-6 py-4 font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none">{labels.whatsapp}<MessageCircle aria-hidden="true" size={18} /></a>
            </div>
          </div>
        </section>
      </article>

    </main>
  );
}
