import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import type { Locale } from "@/lib/i18n";
import { firm } from "@/lib/site";
import type { ServiceKey, ServicePageDefinition } from "@/lib/service-page-types";
import { getServicePath } from "@/lib/services";

const ui = {
  fr: { home: "Accueil", expertise: "Expertise juridique", since: "Depuis", years: "+32 ans", scope: "Mohammedia · Casablanca · Maroc", call: "Appeler le cabinet", whatsapp: "Écrire sur WhatsApp", related: "Expertises complémentaires", faqNumber: "FAQ" },
  ar: { home: "الرئيسية", expertise: "مجال التدخل", since: "منذ", years: "+32 سنة", scope: "المحمدية · الدار البيضاء · المغرب", call: "الاتصال بالمكتب", whatsapp: "التواصل عبر واتساب", related: "اختصاصات مرتبطة", faqNumber: "س / ج" },
} as const;

export function ServiceLandingPage({ locale, page }: { locale: Locale; page: ServicePageDefinition }) {
  const copy = page.content[locale];
  const labels = ui[locale];

  return (
    <main className="overflow-hidden bg-paper text-slate-950">
      <FaqJsonLd faqs={copy.faqs} />

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 start-[8%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute inset-y-0 end-[30%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="font-display absolute -end-8 bottom-[-3rem] select-none text-[15rem] font-semibold leading-none tracking-[-0.04em] text-white/[0.025] sm:text-[22rem]">{page.index}</div>

        <div className="relative mx-auto grid max-w-[90rem] gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 lg:px-12 lg:pb-28 lg:pt-24">
          <div>
            <nav aria-label={locale === "ar" ? "مسار التنقل" : "Fil d’Ariane"} className="mb-14 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-slate-400">
              <Link href={`/${locale}`} className="inline-flex min-h-11 items-center transition-colors hover:text-amber-300 motion-reduce:transition-none">{labels.home}</Link>
              <span aria-hidden="true" className="text-amber-400">/</span>
              <span>{labels.expertise}</span>
            </nav>
            <p className="border-s border-amber-500/60 ps-4 text-xs font-semibold tracking-[0.18em] text-amber-300">{copy.eyebrow}</p>
            <h1 className="font-display mt-7 max-w-[15ch] text-[clamp(2.8rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{copy.h1}</h1>
            <p className="mt-8 max-w-[66ch] text-lg leading-8 text-slate-300 sm:text-xl">{copy.lead}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${firm.telephone}`} className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-gold px-6 py-3 font-semibold text-navy shadow-[0_14px_36px_rgba(197,160,89,0.18)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brass active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"><Phone aria-hidden="true" size={17} />{labels.call}</a>
              <a href={firm.whatsappUrl} rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.08] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"><MessageCircle aria-hidden="true" size={17} />{labels.whatsapp}</a>
            </div>
          </div>

          <aside className="self-end border-y border-white/10 bg-white/[0.035] px-7 py-9 shadow-2xl backdrop-blur-md">
            <p className="text-xs font-semibold tracking-[0.18em] text-amber-300/80">{labels.since}</p>
            <p className="font-display mt-3 text-[5rem] font-semibold leading-none tracking-[-0.04em]">1992</p>
            <div className="my-7 h-px bg-white/10" />
            <p className="font-display text-4xl text-gold">{labels.years}</p>
            <p className="mt-6 text-sm leading-7 text-slate-300">{labels.scope}</p>
          </aside>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="border-t border-slate-900/15 pt-5"><p className="font-display text-[6rem] leading-none text-gold-ink">{page.index}</p><p className="mt-3 text-xs font-semibold tracking-[0.18em] text-slate-600">{copy.eyebrow}</p></div>
          <div className="space-y-6 text-lg leading-8 text-slate-700">{copy.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[86rem]">
          <header className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="font-display max-w-[14ch] text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">{copy.servicesTitle}</h2>
            <p className="max-w-[60ch] text-lg leading-8 text-slate-400 lg:justify-self-end">{copy.servicesIntro}</p>
          </header>
          <div className="divide-y divide-white/10">
            {copy.services.map((item, index) => (
              <article key={item.title} className="group grid gap-5 py-9 transition-[background-color,padding] duration-300 hover:bg-amber-500/[0.055] motion-reduce:transition-none sm:grid-cols-[5rem_1fr] sm:px-4 lg:grid-cols-[8rem_0.8fr_1.2fr] lg:items-baseline lg:gap-10 lg:py-11 lg:hover:px-7">
                <p className="font-display text-lg tracking-[0.08em] text-gold">{String(index + 1).padStart(2, "0")} /</p>
                <h3 className="font-display text-2xl font-semibold leading-tight transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none rtl:group-hover:-translate-x-1 sm:text-3xl">{item.title}</h3>
                <p className="max-w-[62ch] text-sm leading-7 text-slate-400 lg:text-base">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><h2 className="font-display max-w-[13ch] text-[clamp(2.7rem,5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-balance">{copy.processTitle}</h2><p className="mt-7 max-w-[55ch] text-lg leading-8 text-slate-600">{copy.processIntro}</p></div>
          <ol className="border-t border-slate-900/15">
            {copy.process.map((step, index) => <li key={step.title} className="grid gap-4 border-b border-slate-900/15 py-7 sm:grid-cols-[4rem_1fr]"><span className="font-display text-lg text-gold-ink">0{index + 1} /</span><div><h3 className="font-display text-2xl font-semibold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="font-display text-5xl text-gold-ink">{labels.faqNumber}</p><h2 className="font-display mt-6 max-w-[12ch] text-[clamp(2.6rem,5vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-balance">{copy.faqTitle}</h2><p className="mt-7 max-w-[52ch] leading-7 text-slate-600">{copy.faqIntro}</p></div>
          <div className="border-t border-slate-900/15">
            {copy.faqs.map((faq, index) => <details key={faq.question} className="group border-b border-slate-900/15 py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-start font-display text-xl font-semibold marker:content-none"><span><span className="me-3 text-sm text-gold-ink">0{index + 1} /</span>{faq.question}</span><span aria-hidden="true" className="text-gold-ink transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="mt-4 max-w-[68ch] ps-10 leading-7 text-slate-600">{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-900/15 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><h2 className="font-display text-2xl font-semibold">{labels.related}</h2><div className="flex flex-wrap gap-3">{copy.related.map((item) => <Link key={item.key} href={getServicePath(locale, item.key)} className="inline-flex min-h-11 items-center rounded-full border border-slate-900/20 px-5 py-2.5 font-semibold transition-colors hover:border-gold hover:bg-gold/10 motion-reduce:transition-none">{item.label}</Link>)}</div></div>
      </section>

      <section className="bg-gold px-5 py-20 text-navy sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[86rem] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><h2 className="font-display max-w-[14ch] text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1] tracking-[-0.03em] text-balance">{copy.ctaTitle}</h2><p className="mt-6 max-w-[62ch] text-lg leading-8 text-navy/75">{copy.ctaText}</p></div><Link href={`/${locale}/contact`} className="inline-flex min-h-14 items-center justify-between gap-8 rounded-xl bg-navy px-6 py-4 font-semibold text-white shadow-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 motion-reduce:transform-none motion-reduce:transition-none lg:justify-self-end">{labels.call}<Phone aria-hidden="true" size={18} /></Link></div>
      </section>

      <a href={firm.whatsappUrl} aria-label={labels.whatsapp} rel="noopener noreferrer" className="fixed bottom-5 end-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/60 bg-whatsapp text-white shadow-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"><MessageCircle aria-hidden="true" size={24} /></a>
    </main>
  );
}
