import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, MapPin, MessageCircle, Phone, Route, Accessibility } from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { firm, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

const content = {
  fr: {
    seo: { title: "Contact avocat Mohammedia | Cabinet Errouissi", description: "Contactez Maître Abderrazak Errouissi, avocat à Mohammedia : téléphone, WhatsApp, horaires et itinéraire. Cabinet près de Casablanca." },
    eyebrow: "Contact · Rendez-vous · Mohammedia",
    h1: "Contacter un avocat à Mohammedia",
    lead: "Exposez brièvement votre situation et convenez d’un rendez-vous avec le cabinet de Maître Abderrazak Errouissi, avocat depuis 1992.",
    call: "Appeler le cabinet",
    whatsapp: "Écrire sur WhatsApp",
    detailsTitle: "Le cabinet, simplement",
    addressLabel: "Adresse",
    address: "127 Boulevard de Palestine, 1er étage, au-dessus du café Montreal, Mohammédia 28830",
    hoursLabel: "Horaires",
    hours: "Du lundi au samedi, de 09:00 à 19:30",
    accessLabel: "Accès",
    access: "Parking sur place et accès en fauteuil roulant",
    areaLabel: "Zone d’intervention",
    area: "Mohammedia, Casablanca, Rabat et dossiers partout au Maroc",
    prepareTitle: "Préparer votre premier échange",
    prepareIntro: "Quelques éléments permettent au cabinet de comprendre rapidement l’urgence, les parties concernées et les premières mesures à envisager.",
    prepare: [
      { title: "Résumez les faits", text: "Indiquez les dates, les personnes ou sociétés impliquées et l’objectif recherché." },
      { title: "Réunissez les documents", text: "Contrats, titres, décisions, courriers, factures ou pièces d’état civil selon le dossier." },
      { title: "Signalez les délais", text: "Mentionnez toute audience, convocation, mise en demeure ou échéance déjà reçue." },
    ],
    mapTitle: "Votre avocat au centre de Mohammedia",
    mapText: "Le cabinet se trouve boulevard de Palestine, au 1er étage au-dessus du café Montreal. Sa situation permet de recevoir les clients de Mohammedia et de l’axe Casablanca–Rabat.",
    route: "Ouvrir l’itinéraire",
    faqTitle: "Questions avant de contacter le cabinet",
    faqs: [
      { question: "Comment prendre rendez-vous avec le cabinet ?", answer: "Vous pouvez appeler le 05 23 28 32 58 ou écrire sur WhatsApp. Indiquez brièvement la nature du dossier et les éventuelles échéances afin d’organiser le rendez-vous utilement." },
      { question: "Quels documents apporter au premier rendez-vous ?", answer: "Apportez les contrats, titres, courriers, décisions et justificatifs liés au dossier. Une chronologie courte des faits aide également à identifier les questions prioritaires." },
      { question: "Le cabinet intervient-il à Casablanca ?", answer: "Oui. Le cabinet est établi à Mohammedia et intervient notamment pour des dossiers à Casablanca, Rabat et dans d’autres villes du Maroc selon leur nature." },
      { question: "Combien coûte une consultation juridique ?", answer: "Le coût dépend de la nature de la consultation, du volume des pièces et du travail demandé. Le périmètre de l’intervention et les honoraires sont précisés selon le dossier." },
      { question: "Le cabinet est-il accessible en fauteuil roulant ?", answer: "L’accès est indiqué comme adapté aux personnes en fauteuil roulant et un stationnement est disponible sur place. Il est conseillé de prévenir le cabinet avant le rendez-vous pour organiser l’accueil." },
    ],
  },
  ar: {
    seo: { title: "الاتصال بمكتب الأستاذ عبد الرزاق الرويسي | محامٍ بهيئة الدار البيضاء", description: "تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض (المحمدية): الهاتف، واتساب، العنوان، ومسار الوصول." },
    eyebrow: "الاتصال · حجز موعد استشارة · المحمدية",
    h1: "الاتصال بمكتب المحاماة بالمحمدية",
    lead: "يمكنكم عرض عناصر قضيتكم بإيجاز وحجز موعد للاستشارة مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء ممارس منذ سنة 1992 ومقبول لدى محكمة النقض.",
    call: "الاتصال بالمكتب",
    whatsapp: "التواصل عبر واتساب",
    detailsTitle: "بيانات المكتب وولوج المقر",
    addressLabel: "العنوان",
    address: "127 شارع فلسطين، الطابق الأول، فوق مقهى مونتريال، المحمدية 28830",
    hoursLabel: "أوقات العمل",
    hours: "من الاثنين إلى السبت، من 09:00 إلى 19:30",
    accessLabel: "الولوج",
    access: "موقف سيارات بالمكان وولوج ميسر لذوي الحركية المحدودة",
    areaLabel: "دوائر الاختصاص والترافع",
    area: "المحمدية، الدار البيضاء، الرباط، وكافة الدوائر القضائية ومحاكم المملكة",
    prepareTitle: "إعداد ملف الاستشارة القانونية الأولى",
    prepareIntro: "يُرجى إعداد عناصر الملف مسبقاً لتمكين المكتب من دراسة الوقائع بدقة، وتحديد درجات الاستعجال والإجراءات التحفظية اللازمة.",
    prepare: [
      { title: "عرض التسلسل الزمني للوقائع", text: "بيان تواريخ النزاع بدقة، أسماء وصفات الأطراف المعنية، والمطالب أو الأهداف القانونية المنشودة." },
      { title: "حصر الوثائق والمستندات الثبوتية", text: "شهادات الملكية العقارية، عقود التفويت والصلح، الرسوم العدلية، الأحكام والقرارات القضائية، والمراسلات الرسمية ذات الصلة." },
      { title: "بيان الآجال القانونية والإجراءات الجارية", text: "الإشارة فوراً إلى أي استدعاء لجلسة، تبليغ إنذار، إشعار ضريبي، أو أجل قانوني وشيك لتفادي سقوط الحقوق أو فوات مواعيد الطعن." },
    ],
    mapTitle: "مقر المكتب في قلب المحمدية",
    mapText: "يقع مقر المكتب بشارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، بموقع استراتيجي يسهل الوصول إليه من المحمدية ومحور الدار البيضاء–الرباط، مع توفر مرآب للسيارات.",
    route: "فتح مسار الوصول على الخريطة",
    faqTitle: "الأسئلة الشائعة حول الاستشارة وحجز المواعيد",
    faqs: [
      { question: "كيف يتم حجز موعد استشارة لدى المكتب؟", answer: "يمكنكم الاتصال مباشرة بالرقم 05 23 28 32 58 أو المراسلة عبر واتساب، مع بيان موضوع النزاع وأي آجال قانونية وشيكة لتحديد موعد ملائم لدراسة الملف." },
      { question: "ما الوثائق والمستندات الواجب إحضارها للاستشارة الأولى؟", answer: "يتعين إحضار أصول أو نسخ من الرسوم والعقود الرسمية أو العرفية، الشواهد العقارية، القرارات أو الأحكام القضائية، وكافة المراسلات والإنذارات المتعلقة بالنزاع لتشخيص الموقف بدقة." },
      { question: "هل يمارس المكتب ويترافع أمام محاكم الدار البيضاء وباقي المدن؟", answer: "نعم. يقع مقر المكتب بالمحمدية التابعة ترابياً لهيئة المحامين بالدار البيضاء، ويمارس مهام النيابة والترافع أمام المحاكم الابتدائية ومحاكم الاستئناف والمحاكم التجارية والإدارية بالدار البيضاء، الرباط، ومحكمة النقض وكافة محاكم المملكة." },
      { question: "كيف يتم تحديد الأتعاب القانونية ومصاريف الدعوى؟", answer: "تُحدد الأتعاب بالاتفاق وفقاً لأحكام القانون رقم 28.08 المنظم لمهنة المحاماة، بناءً على طبيعة النزاع، تعقيد الإجراءات، الجهد المستغرق، والمصالح المتنازع عليها، بكل شفافية ووضوح." },
      { question: "هل مقر المكتب مهيأ وميسر لذوي الحركية المحدودة؟", answer: "نعم، مدخل العمارة مهيأ وميسر، مع توفر أماكن لركن السيارات بمحيط المقر. ويُفضل إشعار المكتب مسبقاً لتيسير الاستقبال على أفضل وجه." },
    ],
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = content[lang];
  const canonical = `/${lang}/contact`;
  return {
    title: { absolute: copy.seo.title },
    description: copy.seo.description,
    alternates: { canonical, languages: { "fr-MA": "/fr/contact", "ar-MA": "/ar/contact", "x-default": "/fr/contact" } },
    openGraph: { type: "website", url: new URL(canonical, siteUrl), title: copy.seo.title, description: copy.seo.description, locale: lang === "ar" ? "ar_MA" : "fr_MA" },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const copy = content[locale];
  const mapQuery = encodeURIComponent("127 Boulevard de Palestine, Mohammedia 28830, Morocco");

  return (
    <main id="contact" className="overflow-hidden bg-paper text-slate-950">
      <FaqJsonLd faqs={[...copy.faqs]} />

      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 start-[8%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="font-display absolute -end-8 bottom-[-4rem] select-none text-[13rem] font-semibold leading-none tracking-[-0.04em] text-white/[0.025] sm:text-[21rem]">05</div>
        <div className="relative mx-auto grid max-w-[90rem] gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-24 lg:px-12 lg:pb-28 lg:pt-24">
          <div>
            <nav aria-label={locale === "ar" ? "مسار التنقل" : "Fil d’Ariane"} className="mb-14 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-slate-400"><Link href={`/${locale}`} className="inline-flex min-h-11 items-center hover:text-amber-300">{locale === "ar" ? "الرئيسية" : "Accueil"}</Link><span className="text-amber-400">/</span><span>{locale === "ar" ? "الاتصال بالمكتب" : "Contact"}</span></nav>
            <p className="border-s border-amber-500/60 ps-4 text-xs font-semibold tracking-[0.18em] text-amber-300">{copy.eyebrow}</p>
            <h1 className="font-display mt-7 max-w-[14ch] text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1] tracking-[-0.035em] text-balance">{copy.h1}</h1>
            <p className="mt-8 max-w-[64ch] text-lg leading-8 text-slate-300 sm:text-xl">{copy.lead}</p>
            <div className="mt-10 flex w-full flex-col flex-wrap gap-3 sm:w-auto sm:flex-row">
              <a href={`tel:${firm.telephone}`} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-3 font-semibold text-navy shadow-[0_14px_36px_rgba(197,160,89,0.18)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brass active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"><Phone aria-hidden="true" size={18} />{copy.call}</a>
              <a href={firm.whatsappUrl} rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.08] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"><MessageCircle aria-hidden="true" size={18} />{copy.whatsapp}</a>
            </div>
          </div>
          <aside className="border-y border-white/10 bg-white/[0.035] px-7 py-9 shadow-2xl backdrop-blur-md">
            <div className="flex items-end justify-between gap-6">
              <div><p className="text-xs font-semibold tracking-[0.18em] text-amber-300/80">{locale === "ar" ? "منذ" : "Depuis"}</p><p className="font-display mt-2 text-5xl font-semibold tracking-[-0.04em]">1992</p></div>
              <p className="font-display text-3xl text-gold">{locale === "ar" ? "+32 سنة" : "+32 ans"}</p>
            </div>
            <div className="my-7 h-px bg-white/10" />
            <p className="font-display text-3xl font-semibold text-gold">{copy.detailsTitle}</p>
            <dl className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
              <div className="grid grid-cols-[1.5rem_1fr] gap-3"><MapPin className="mt-1 text-gold" size={18} /><div><dt className="font-semibold text-white">{copy.addressLabel}</dt><dd>{copy.address}</dd></div></div>
              <div className="grid grid-cols-[1.5rem_1fr] gap-3"><Clock3 className="mt-1 text-gold" size={18} /><div><dt className="font-semibold text-white">{copy.hoursLabel}</dt><dd>{copy.hours}</dd></div></div>
              <div className="grid grid-cols-[1.5rem_1fr] gap-3"><Accessibility className="mt-1 text-gold" size={18} /><div><dt className="font-semibold text-white">{copy.accessLabel}</dt><dd>{copy.access}</dd></div></div>
              <div className="grid grid-cols-[1.5rem_1fr] gap-3"><Route className="mt-1 text-gold" size={18} /><div><dt className="font-semibold text-white">{copy.areaLabel}</dt><dd>{copy.area}</dd></div></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="font-display text-[6rem] leading-none text-gold-ink">01</p><h2 className="font-display mt-7 max-w-[13ch] text-[clamp(2.7rem,5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-balance">{copy.prepareTitle}</h2><p className="mt-7 max-w-[55ch] text-lg leading-8 text-slate-600">{copy.prepareIntro}</p></div>
          <ol className="border-t border-slate-900/15">{copy.prepare.map((item, index) => <li key={item.title} className="grid gap-4 border-b border-slate-900/15 py-8 sm:grid-cols-[4rem_1fr]"><span className="font-display text-lg text-gold-ink">0{index + 1} /</span><div><h3 className="font-display text-2xl font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div><p className="font-display text-[5rem] text-gold">MA</p><h2 className="font-display mt-6 max-w-[13ch] text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-balance">{copy.mapTitle}</h2><p className="mt-7 max-w-[56ch] text-lg leading-8 text-slate-300">{copy.mapText}</p><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} rel="noopener noreferrer" className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-amber-500/35 px-6 py-3 font-semibold text-amber-200 transition-colors hover:bg-amber-500/10 motion-reduce:transition-none sm:w-auto"><Route aria-hidden="true" size={18} />{copy.route}</a></div>
          <div className="relative overflow-hidden border border-white/10 bg-midnight p-2 shadow-2xl">
            <iframe title={copy.mapTitle} src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} width="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="relative z-10 block h-72 w-full opacity-90 grayscale-[25%] contrast-[1.05] sm:h-96 lg:h-[480px]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-2 z-20 border border-amber-500/20">
              <span className="absolute bottom-4 start-4 max-w-[18rem] bg-navy/90 px-4 py-3 text-xs leading-5 text-amber-100 backdrop-blur-md">{locale === "ar" ? "127 شارع فلسطين · المحمدية" : "127 Boulevard de Palestine · Mohammédia"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><p className="font-display text-5xl text-gold-ink">{locale === "ar" ? "س / ج" : "FAQ"}</p><h2 className="font-display mt-6 max-w-[12ch] text-[clamp(2.6rem,5vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-balance">{copy.faqTitle}</h2></div><div className="border-t border-slate-900/15">{copy.faqs.map((faq, index) => <details key={faq.question} className="group border-b border-slate-900/15 py-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-start font-display text-xl font-semibold"><span><span className="me-3 text-sm text-gold-ink">0{index + 1} /</span>{faq.question}</span><span aria-hidden="true" className="text-gold-ink transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="mt-4 max-w-[68ch] ps-10 leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div>
      </section>

      <section className="bg-gold px-5 py-16 text-navy sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a href={`tel:${firm.telephone}`} dir="ltr" className="inline-block whitespace-nowrap font-brand text-3xl font-semibold tabular-nums tracking-[-0.02em] transition-colors hover:text-navy/80">{firm.displayTelephone}</a>
            <p className="mt-2 text-navy/80">{copy.hours}</p>
          </div>
          <a href={firm.whatsappUrl} rel="noopener noreferrer" className="inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-xl bg-navy px-7 py-4 font-semibold text-white shadow-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto">
            <MessageCircle aria-hidden="true" size={19} />{copy.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
