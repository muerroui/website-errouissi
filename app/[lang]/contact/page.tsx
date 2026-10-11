import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Route,
} from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { ContactLeadForm } from "@/components/contact/ContactLeadForm";
import { isLocale, type Locale } from "@/lib/i18n";
import { firm, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

const content = {
  fr: {
    seo: {
      title: "Contact avocat Mohammedia | Cabinet Errouissi",
      description:
        "Contactez Maître Abderrazak Errouissi, avocat à Mohammedia : formulaire de contact, téléphone, WhatsApp, horaires et itinéraire. Cabinet près de Casablanca.",
    },
    eyebrow: "Contact · Rendez-vous · Mohammedia",
    h1: "Contacter un avocat à Mohammedia",
    lead:
      "Exposez les éléments de votre dossier via le formulaire ou convenez directement d’un rendez-vous avec le cabinet de Maître Abderrazak Errouissi, avocat depuis 1992.",
    call: "Appeler le cabinet",
    whatsapp: "Écrire sur WhatsApp",
    email: "Envoyer un e-mail",
    badgeExperienceLabel: "Expérience professionnelle",
    badgeExperience: "Depuis 1992 (+32 ans)",
    badgeBarreauLabel: "Barreau & juridictions",
    badgeBarreau: "Barreau de Casablanca · Cour de cassation",
    detailsTitle: "Le cabinet, simplement",
    emailLabel: "Courriel direct",
    addressLabel: "Adresse",
    address: "127 Boulevard de Palestine, 1er étage, au-dessus du café Montreal, Mohammédia 28830",
    hoursLabel: "Horaires",
    hours: "Du lundi au samedi, de 09:00 à 19:30",
    accessLabel: "Accès",
    access: "Parking sur place et accès en fauteuil roulant",
    areaLabel: "Zone d’intervention",
    area: "Mohammedia, Casablanca, Rabat et dossiers partout au Maroc",
    pillarsEyebrow: "Domaines d'intervention",
    pillarsTitle: "Nos 4 piliers d’expertise pour votre dossier",
    pillarsIntro:
      "Sélectionnez votre domaine ci-dessous pour l'intégrer automatiquement au formulaire de contact, ou consultez la page dédiée pour en savoir plus :",
    selectPillar: "Sélectionner dans le formulaire",
    viewPillar: "Voir la page dédiée",
    pillars: [
      {
        num: "01",
        topic: "succession",
        title: "Liquidation des successions et partage d’héritage",
        text: "Inventaire et liquidation de la succession, partage amiable ou judiciaire, sortie d’indivision et résolution des litiges entre héritiers.",
        href: "/fr/services/succession-heritage",
      },
      {
        num: "02",
        topic: "foncierRural",
        title: "Foncier rural & terres de la réforme agraire",
        text: "Titres de propriété Melkia, litiges des terres des coopératives de la réforme agraire (du vivant des attributaires ou après décès), et expropriation.",
        href: "/fr/services/droit-foncier-rural",
      },
      {
        num: "03",
        topic: "fiscal",
        title: "Droit fiscal et contentieux fiscal",
        text: "Assistance lors des contrôles fiscaux, réponses aux notifications de redressement, recours devant les commissions et tribunaux administratifs.",
        href: "/fr/services/droit-fiscal",
      },
      {
        num: "04",
        topic: "administratif",
        title: "Droit administratif et contentieux public",
        text: "Recours pour excès de pouvoir, responsabilité administrative de l’État et des collectivités, et recours gracieux ou hiérarchiques.",
        href: "/fr/services/droit-administratif",
      },
    ],
    prepareTitle: "Préparer votre premier échange",
    prepareIntro:
      "Quelques éléments permettent au cabinet de comprendre rapidement l’urgence, les parties concernées et les premières mesures à envisager.",
    prepare: [
      {
        title: "Résumez les faits",
        text: "Indiquez les dates, les personnes ou sociétés impliquées et l’objectif recherché.",
      },
      {
        title: "Réunissez les documents",
        text: "Contrats, titres, décisions, courriers, factures ou pièces d’état civil selon le dossier.",
      },
      {
        title: "Signalez les délais",
        text: "Mentionnez toute audience, convocation, mise en demeure ou échéance déjà reçue.",
      },
    ],
    mapTitle: "Votre avocat au centre de Mohammedia",
    mapText:
      "Le cabinet se trouve boulevard de Palestine, au 1er étage au-dessus du café Montreal. Sa situation permet de recevoir les clients de Mohammedia et de l’axe Casablanca–Rabat.",
    route: "Ouvrir l’itinéraire",
    faqTitle: "Questions avant de contacter le cabinet",
    faqs: [
      {
        question: "Comment prendre rendez-vous avec le cabinet ?",
        answer:
          "Vous pouvez remplir le formulaire ci-dessus, appeler le 05 23 28 32 58 ou écrire sur WhatsApp. Indiquez brièvement la nature du dossier et les éventuelles échéances afin d’organiser le rendez-vous utilement.",
      },
      {
        question: "Quels documents apporter au premier rendez-vous ?",
        answer:
          "Apportez les contrats, titres, courriers, décisions et justificatifs liés au dossier. Une chronologie courte des faits aide également à identifier les questions prioritaires.",
      },
      {
        question: "Le cabinet intervient-il à Casablanca ?",
        answer:
          "Oui. Le cabinet est établi à Mohammedia et intervient notamment pour des dossiers à Casablanca, Rabat et dans d’autres villes du Maroc selon leur nature.",
      },
      {
        question: "Combien coûte une consultation juridique ?",
        answer:
          "Le coût dépend de la nature de la consultation, du volume des pièces et du travail demandé. Le périmètre de l’intervention et les honoraires sont précisés selon le dossier.",
      },
      {
        question: "Le cabinet est-il accessible en fauteuil roulant ?",
        answer:
          "L’accès est indiqué comme adapté aux personnes en fauteuil roulant et un stationnement est disponible sur place. Il est conseillé de prévenir le cabinet avant le rendez-vous pour organiser l’accueil.",
      },
    ],
  },
  ar: {
    seo: {
      title: "الاتصال بمكتب الأستاذ عبد الرزاق الرويسي | محامٍ بهيئة الدار البيضاء",
      description:
        "تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض (المحمدية): استمارة عرض المعطيات، الهاتف، واتساب، العنوان، ومسار الوصول.",
    },
    eyebrow: "الاتصال · حجز موعد استشارة · المحمدية",
    h1: "الاتصال بمكتب المحاماة بالمحمدية",
    lead:
      "يمكنكم عرض عناصر قضيتكم مباشرة عبر الاستمارة وحجز موعد للاستشارة مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء ممارس منذ سنة 1992 ومقبول لدى محكمة النقض.",
    call: "الاتصال بالمكتب",
    whatsapp: "التواصل عبر واتساب",
    email: "مراسلة عبر البريد الإلكتروني",
    badgeExperienceLabel: "الممارسة المهنية",
    badgeExperience: "منذ 1992 (+32 سنة)",
    badgeBarreauLabel: "الصفة المهنية",
    badgeBarreau: "هيئة المحامين بالدار البيضاء · محكمة النقض",
    detailsTitle: "بيانات المكتب وولوج المقر",
    emailLabel: "البريد الإلكتروني المباشر",
    addressLabel: "العنوان",
    address: "127 شارع فلسطين، الطابق الأول، فوق مقهى مونتريال، المحمدية 28830",
    hoursLabel: "أوقات العمل",
    hours: "من الاثنين إلى السبت، من 09:00 إلى 19:30",
    accessLabel: "الولوج",
    access: "موقف سيارات بالمكان وولوج ميسر لذوي الحركية المحدودة",
    areaLabel: "دوائر الاختصاص والترافع",
    area: "المحمدية، الدار البيضاء، الرباط، وكافة الدوائر القضائية ومحاكم المملكة",
    pillarsEyebrow: "محاور الممارسة والترافع",
    pillarsTitle: "أربعة محاور رئيسية لمعالجة قضاياكم",
    pillarsIntro:
      "اختاروا موضوع قضيتكم لتعبئته مباشرة في استمارة التواصل أعلاه، أو اضغطوا على الرابط للاطلاع على الإجراءات الخاصة بكل مجال :",
    selectPillar: "عرض قضيتكم في هذا المجال",
    viewPillar: "تفاصيل المجال والإجراءات",
    pillars: [
      {
        num: "01",
        topic: "succession",
        title: "تصفية التركات وقسمة المواريث",
        text: "حصر متروك الهالك، إعداد القسمة الرضائية والقضائية، إنهاء حالة الشياع، وحل النزاعات بين الورثة حول الأصول والعقارات الموروثة.",
        href: "/ar/services/الميراث-والتركات",
      },
      {
        num: "02",
        topic: "foncierRural",
        title: "العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي",
        text: "رسوم الملكية العدلية (أراضي الملك)، قضايا ومنازعات أراضي تعاونيات الإصلاح الزراعي (حال حياة المستفيدين وبعد وفاتهم)، ونزع الملكية للمنفعة العامة.",
        href: "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
      },
      {
        num: "03",
        topic: "fiscal",
        title: "القانون الضريبي والمنازعات الجبائية",
        text: "مؤازرة الملزمين أثناء المراقبة الضريبية، الرد على رسائل التصحيح، الترافع أمام اللجان الضريبية، ومقاضاة الإدارة أمام المحاكم الإدارية.",
        href: "/ar/services/القانون-الضريبي",
      },
      {
        num: "04",
        topic: "administratif",
        title: "القانون الإداري والمنازعات العمومية",
        text: "دعاوى الإلغاء لتجاوز السلطة، دعاوى التعويض والمسؤولية الإدارية للدولة والجماعات الترابية، ومباشرة التظلمات الاستعطافية والرئاسية.",
        href: "/ar/services/القانون-الإداري",
      },
    ],
    prepareTitle: "إعداد ملف الاستشارة القانونية الأولى",
    prepareIntro:
      "يُرجى إعداد عناصر الملف مسبقاً لتمكين المكتب من دراسة الوقائع بدقة، وتحديد درجات الاستعجال والإجراءات التحفظية اللازمة.",
    prepare: [
      {
        title: "عرض التسلسل الزمني للوقائع",
        text: "بيان تواريخ النزاع بدقة، أسماء وصفات الأطراف المعنية، والمطالب أو الأهداف القانونية المنشودة.",
      },
      {
        title: "حصر الوثائق والمستندات الثبوتية",
        text: "شهادات الملكية العقارية، عقود التفويت والصلح، الرسوم العدلية، الأحكام والقرارات القضائية، والمراسلات الرسمية ذات الصلة.",
      },
      {
        title: "بيان الآجال القانونية والإجراءات الجارية",
        text: "الإشارة فوراً إلى أي استدعاء لجلسة، تبليغ إنذار، إشعار ضريبي، أو أجل قانوني وشيك لتفادي سقوط الحقوق أو فوات مواعيد الطعن.",
      },
    ],
    mapTitle: "مقر المكتب في قلب المحمدية",
    mapText:
      "يقع مقر المكتب بشارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، بموقع استراتيجي يسهل الوصول إليه من المحمدية ومحور الدار البيضاء–الرباط، مع توفر مرآب للسيارات.",
    route: "فتح مسار الوصول على الخريطة",
    faqTitle: "الأسئلة الشائعة حول الاستشارة وحجز المواعيد",
    faqs: [
      {
        question: "كيف يتم حجز موعد استشارة لدى المكتب؟",
        answer:
          "يمكنكم ملء استمارة عرض المعطيات أعلاه، أو الاتصال مباشرة بالرقم 05 23 28 32 58، أو المراسلة عبر واتساب، مع بيان موضوع النزاع وأي آجال قانونية وشيكة لتحديد موعد ملائم لدراسة الملف.",
      },
      {
        question: "ما الوثائق والمستندات الواجب إحضارها للاستشارة الأولى؟",
        answer:
          "يتعين إحضار أصول أو نسخ من الرسوم والعقود الرسمية أو العرفية، الشواهد العقارية، القرارات أو الأحكام القضائية، وكافة المراسلات والإنذارات المتعلقة بالنزاع لتشخيص الموقف بدقة.",
      },
      {
        question: "هل يمارس المكتب ويترافع أمام محاكم الدار البيضاء وباقي المدن؟",
        answer:
          "نعم. يقع مقر المكتب بالمحمدية التابعة ترابياً لهيئة المحامين بالدار البيضاء، ويمارس مهام النيابة والترافع أمام المحاكم الابتدائية ومحاكم الاستئناف والمحاكم التجارية والإدارية بالدار البيضاء، الرباط، ومحكمة النقض وكافة محاكم المملكة.",
      },
      {
        question: "كيف يتم تحديد الأتعاب القانونية ومصاريف الدعوى؟",
        answer:
          "تُحدد الأتعاب بالاتفاق وفقاً لأحكام القانون رقم 28.08 المنظم لمهنة المحاماة، بناءً على طبيعة النزاع، تعقيد الإجراءات، الجهد المستغرق، والمصالح المتنازع عليها، بكل شفافية ووضوح.",
      },
      {
        question: "هل مقر المكتب مهيأ وميسر لذوي الحركية المحدودة؟",
        answer:
          "نعم، مدخل العمارة مهيأ وميسر، مع توفر أماكن لركن السيارات بمحيط المقر. ويُفضل إشعار المكتب مسبقاً لتيسير الاستقبال على أفضل وجه.",
      },
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
    alternates: {
      canonical,
      languages: {
        "fr-MA": "/fr/contact",
        "ar-MA": "/ar/contact",
        "x-default": "/fr/contact",
      },
    },
    openGraph: {
      type: "website",
      url: new URL(canonical, siteUrl),
      title: copy.seo.title,
      description: copy.seo.description,
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const isAr = locale === "ar";
  const copy = content[locale];
  const mapQuery = encodeURIComponent("127 Boulevard de Palestine, Mohammedia 28830, Morocco");
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <main id="contact" className="overflow-hidden bg-paper text-slate-950">
      <FaqJsonLd faqs={[...copy.faqs]} />

      {/* Hero with Direct Actions & Lead Form */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 start-[8%] hidden w-px bg-white/[0.06] lg:block" />
        <div
          aria-hidden="true"
          className="font-display absolute -end-8 bottom-[-4rem] select-none text-[13rem] font-semibold leading-none tracking-[-0.04em] text-white/[0.025] sm:text-[21rem]"
        >
          05
        </div>

        <div className="relative mx-auto grid max-w-[90rem] gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20">
          <div>
            <nav
              aria-label={isAr ? "مسار التنقل" : "Fil d’Ariane"}
              className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-slate-400"
            >
              <Link href={`/${locale}`} className="inline-flex min-h-11 items-center hover:text-amber-300">
                {isAr ? "الرئيسية" : "Accueil"}
              </Link>
              <span className="text-amber-400">/</span>
              <span>{isAr ? "الاتصال بالمكتب" : "Contact"}</span>
            </nav>

            <p className="border-s border-amber-500/60 ps-4 text-xs font-semibold tracking-[0.18em] text-amber-300">
              {copy.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-[14ch] text-[clamp(2.75rem,5.5vw,4.8rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-balance">
              {copy.h1}
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-slate-300 sm:text-xl">
              {copy.lead}
            </p>

            <div className="mt-8 flex w-full flex-col flex-wrap gap-3 sm:w-auto sm:flex-row">
              <a
                href={`tel:${firm.telephone}`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-3 font-semibold text-navy shadow-[0_14px_36px_rgba(197,160,89,0.18)] transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-brass active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                <Phone aria-hidden="true" size={18} />
                {copy.call}
              </a>
              <a
                href={firm.whatsappUrl}
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.08] active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                <MessageCircle aria-hidden="true" size={18} />
                {copy.whatsapp}
              </a>
              <a
                href={`mailto:${firm.email}`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.08] hover:text-gold active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                <Mail aria-hidden="true" size={18} />
                {copy.email}
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 flex flex-wrap items-center gap-8 text-sm text-slate-300">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-amber-300/80">
                  {copy.badgeExperienceLabel}
                </p>
                <p className="font-display mt-1 text-2xl font-semibold text-white">
                  {copy.badgeExperience}
                </p>
              </div>
              <div className="hidden h-9 w-px bg-white/15 sm:block" />
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-amber-300/80">
                  {copy.badgeBarreauLabel}
                </p>
                <p className="font-display mt-1 text-base font-semibold text-white">
                  {copy.badgeBarreau}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-2">
            <ContactLeadForm locale={locale} />
          </div>
        </div>
      </section>

      {/* Practical Cabinet Info Band */}
      <section className="border-b border-slate-900/10 bg-slate-100/80 px-5 py-8 text-slate-900 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[90rem] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 shrink-0 text-gold-ink" size={22} />
            <div>
              <p className="font-semibold text-navy">{copy.addressLabel}</p>
              <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">{copy.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock3 className="mt-1 shrink-0 text-gold-ink" size={22} />
            <div>
              <p className="font-semibold text-navy">{copy.hoursLabel}</p>
              <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">{copy.hours}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Accessibility className="mt-1 shrink-0 text-gold-ink" size={22} />
            <div>
              <p className="font-semibold text-navy">{copy.accessLabel}</p>
              <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">{copy.access}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Route className="mt-1 shrink-0 text-gold-ink" size={22} />
            <div>
              <p className="font-semibold text-navy">{copy.areaLabel}</p>
              <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">{copy.area}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars Section */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28 bg-white border-b border-slate-900/10">
        <div className="mx-auto max-w-[86rem]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold-ink uppercase">
              {copy.pillarsEyebrow}
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.3rem,4.5vw,3.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-navy">
              {copy.pillarsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {copy.pillarsIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {copy.pillars.map((pillar) => (
              <article
                key={pillar.topic}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-900/10 bg-paper p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-2xl font-bold text-gold-ink">
                      {pillar.num} /
                    </span>
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-navy hover:underline"
                    >
                      <span>{copy.viewPillar}</span>
                      <ArrowIcon size={14} aria-hidden="true" />
                    </Link>
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-semibold leading-tight text-navy">
                    <Link href={pillar.href} className="hover:text-gold-ink transition-colors">
                      {pillar.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    data-case-topic={pillar.topic}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-95 cursor-pointer"
                  >
                    <span>{copy.selectPillar}</span>
                    <ArrowIcon size={15} aria-hidden="true" />
                  </button>
                  <Link
                    href={pillar.href}
                    className="text-sm font-medium text-slate-500 hover:text-navy transition-colors"
                  >
                    {isAr ? "صفحة المجال ←" : "En savoir plus →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-[5.5rem] leading-none text-gold-ink">01</p>
            <h2 className="font-display mt-6 max-w-[13ch] text-[clamp(2.5rem,4.5vw,4.2rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance">
              {copy.prepareTitle}
            </h2>
            <p className="mt-6 max-w-[55ch] text-lg leading-8 text-slate-600">
              {copy.prepareIntro}
            </p>
          </div>
          <ol className="border-t border-slate-900/15">
            {copy.prepare.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-4 border-b border-slate-900/15 py-8 sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-display text-lg text-gold-ink">0{index + 1} /</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-display text-[4.5rem] text-gold">MA</p>
            <h2 className="font-display mt-5 max-w-[13ch] text-[clamp(2.5rem,4.5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
              {copy.mapTitle}
            </h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-slate-300">
              {copy.mapText}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-amber-500/35 px-6 py-3 font-semibold text-amber-200 transition-colors hover:bg-amber-500/10 motion-reduce:transition-none sm:w-auto"
            >
              <Route aria-hidden="true" size={18} />
              {copy.route}
            </a>
          </div>
          <div className="relative overflow-hidden border border-white/10 bg-midnight p-2 shadow-2xl">
            <iframe
              title={copy.mapTitle}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 block h-72 w-full opacity-90 grayscale-[25%] contrast-[1.05] sm:h-96 lg:h-[480px]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-2 z-20 border border-amber-500/20">
              <span className="absolute bottom-4 start-4 max-w-[18rem] bg-navy/90 px-4 py-3 text-xs leading-5 text-amber-100 backdrop-blur-md">
                {isAr ? "127 شارع فلسطين · المحمدية" : "127 Boulevard de Palestine · Mohammédia"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-display text-5xl text-gold-ink">{isAr ? "س / ج" : "FAQ"}</p>
            <h2 className="font-display mt-6 max-w-[12ch] text-[clamp(2.5rem,4.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
              {copy.faqTitle}
            </h2>
          </div>
          <div className="border-t border-slate-900/15">
            {copy.faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-slate-900/15 py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-start font-display text-xl font-semibold">
                  <span>
                    <span className="me-3 text-sm text-gold-ink">0{index + 1} /</span>
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-gold-ink transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[68ch] ps-10 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Contact Banner */}
      <section className="bg-gold px-5 py-16 text-navy sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[86rem] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a
              href={`tel:${firm.telephone}`}
              dir="ltr"
              className="inline-block whitespace-nowrap font-brand text-3xl font-semibold tabular-nums tracking-[-0.02em] transition-colors hover:text-navy/80"
            >
              {firm.displayTelephone}
            </a>
            <p className="mt-1.5 flex items-center gap-2 text-base font-semibold text-navy/90">
              <Mail size={16} />
              <a href={`mailto:${firm.email}`} className="underline-offset-4 hover:underline">
                {firm.email}
              </a>
            </p>
            <p className="mt-1 text-sm text-navy/75">{copy.hours}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${firm.email}`}
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-navy/20 bg-navy/10 px-6 py-4 font-semibold text-navy transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-navy/20 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            >
              <Mail aria-hidden="true" size={19} />
              {copy.email}
            </a>
            <a
              href={firm.whatsappUrl}
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-xl bg-navy px-7 py-4 font-semibold text-white shadow-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            >
              <MessageCircle aria-hidden="true" size={19} />
              {copy.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
