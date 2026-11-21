import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDownRight, ArrowUpLeft, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { guides } from "@/lib/guides";
import { getGuidePath, type GuideKey } from "@/lib/guide-slugs";
import { firm, getDefaultOgImage, yearsExperience } from "@/lib/site";
import { isLocale, type Locale } from "@/lib/i18n";
import { getServicePath } from "@/lib/services";

type PageProps = { params: Promise<{ lang: string }> };

const featuredGuideKeys: readonly GuideKey[] = [
  "immatriculation",
  "melkiya",
  "agrarianReform",
  "soulaliyate",
  "indivision",
  "inheritance",
];

const seoCopy: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Avocat à Mohammedia depuis 1992 | Maître Errouissi",
    description: `Maître Abderrazak Errouissi, avocat à Mohammedia depuis 1992 (+${yearsExperience} ans). Foncier rural, terres agricoles, immobilier, successions, MRE et fiscalité au Maroc.`,
  },
  ar: {
    title: "محامٍ بالمحمدية منذ 1992 | الأستاذ عبد الرزاق الرويسي",
    description: `الأستاذ عبد الرزاق الرويسي، محامٍ بالمحمدية منذ 1992 (+${yearsExperience} سنة) ومقبول لدى محكمة النقض: العقار، الأراضي الفلاحية، التركات، الضرائب ومغاربة العالم بالمغرب.`,
  },
};

const content = {
  fr: {
    eyebrow: "Cabinet d'avocat à Mohammedia · Depuis janvier 1992",
    h1: "Avocat à Mohammedia depuis 1992",
    intro: `Plus de ${yearsExperience} ans d'expérience en droit immobilier, foncier rural, terres agricoles, successions et fiscalité, à Mohammedia et partout au Maroc.`,
    call: "Appeler le cabinet",
    whatsapp: "Écrire sur WhatsApp",
    proofTitle: "Une expérience juridique construite sur plus de trois décennies",
    proofText: "Maître Abderrazak Errouissi accompagne particuliers, entreprises et agriculteurs avec une approche rigoureuse, directe et adaptée à chaque dossier.",
    teamNumber: "Une dizaine",
    teamTitle: "Une équipe placée sous sa direction",
    teamText: "Le cabinet réunit une dizaine d’avocats collaborateurs inscrits au barreau. Chaque dossier est traité sous la direction et la supervision directes de Maître Abderrazak Errouissi.",
    servicesTitle: "Nos domaines d'intervention",
    servicesIntro: "Conseil, négociation, médiation, arbitrage et représentation devant les juridictions marocaines.",
    services: [
      ["Droit immobilier et foncier", "Titres fonciers, achat, vente, location, transfert de propriété et litiges immobiliers."],
      ["Successions et héritage", "Partage, indivision, conflits entre héritiers et successions comportant des biens immobiliers."],
      ["Droit foncier rural", "Terres agricoles, Melkiya, bornage, terres Soulaliyates, terres des coopératives de la réforme agraire, expropriation et sortie d’indivision."],
      ["Fiscalité", "Conseil, contrôle, contentieux fiscal et accompagnement des particuliers et entreprises."],
      ["Droit administratif", "Démarches, recours et litiges impliquant les administrations publiques."],
      ["Médiation & Accompagnement MRE", "Médiation, règlement amiable et défense du patrimoine immobilier et successoral des Marocains résidant à l’étranger (consultation par proche à Mohammedia et procuration consulaire)."],
    ],
    guidesEyebrow: "Guides juridiques essentiels",
    guidesTitle: "Comprendre vos droits au Maroc avant d’engager une démarche",
    guidesIntro: "Des dossiers pratiques rédigés au cabinet pour clarifier la conservation foncière, la Melkiya, les terres agricoles, les terres Soulaliyates et le partage successoral.",
    guidesAll: "Voir les 21 guides juridiques",
    guideRead: "Lire le guide",
    reachTitle: "Un cabinet à Mohammedia, actif dans tout le Maroc",
    reachText: "Implanté au cœur de Mohammédia, le cabinet intervient quotidiennement sur l’axe Casablanca–Rabat (Aïn Harrouda, Benslimane, Bouznika, Bouskoura, Témara, Salé) ainsi que devant les juridictions de Fès, Marrakech, Tanger et Kénitra partout au Maroc.",
    reachLandmark: "127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal), quartier Centre / Parc — Mohammédia 28830",
    reachMapLink: "Voir le plan d’accès et l’itinéraire",
    faqLabel: "FAQ",
    faqTitle: "Questions fréquentes sur le cabinet à Mohammedia",
    faqIntro: "Repères pratiques avant de contacter ou de visiter le cabinet de Maître Abderrazak Errouissi à Mohammédia.",
    faqs: [
      {
        question: "Où se situe le cabinet d’avocat de Maître Abderrazak Errouissi à Mohammedia ?",
        answer: "Le cabinet est installé au 127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal), 28830 Mohammédia. Il accueille les justiciables du lundi au samedi, de 09h00 à 19h30, avec stationnement sur place et accès adapté aux personnes à mobilité réduite.",
      },
      {
        question: "Devant quelles juridictions le cabinet intervient-il au Maroc ?",
        answer: "Avocat au Barreau de Casablanca depuis janvier 1992 et agréé près la Cour de Cassation, Maître Abderrazak Errouissi plaide devant le Tribunal de Première Instance de Mohammédia, les juridictions civiles, commerciales et administratives de Casablanca et Rabat, ainsi que devant l’ensemble des juridictions du Royaume et la Cour de Cassation.",
      },
      {
        question: "Quels sont les principaux domaines d’intervention du cabinet ?",
        answer: "Le cabinet intervient principalement en droit immobilier et foncier (titres fonciers, Melkiya, bornage, baux), droit foncier rural (terres agricoles, coopératives de la réforme agraire, terres Soulaliyates), liquidations successorales et sortie d’indivision, droit fiscal, droit administratif et médiation.",
      },
      {
        question: "Comment un Marocain résidant à l’étranger (MRE) peut-il confier un dossier au cabinet ?",
        answer: "Par respect strict du secret professionnel et de la vérification des actes originaux, le cabinet ne donne pas de consultation informelle par téléphone ou visioconférence. Un proche résidant au Maroc peut présenter les pièces lors d’un rendez-vous au cabinet à Mohammédia (page dédiée /fr/mre), et le mandat officiel s’établit par procuration authentifiée au Consulat du Maroc.",
      },
    ],
    finalTitle: "Parlez de votre dossier à un avocat",
    finalText: "Exposez brièvement votre situation par téléphone ou WhatsApp afin d'organiser un rendez-vous au cabinet.",
  },
  ar: {
    eyebrow: "مكتب الأستاذ عبد الرزاق الرويسي للمحاماة · هيئة الدار البيضاء · منذ 1992",
    h1: "محامٍ بالمحمدية منذ 1992",
    intro: `أكثر من ${yearsExperience} سنة من الممارسة المهنية في قضايا التحفيظ العقاري، والعقار الفلاحي، وأراضي تعاونيات الإصلاح الزراعي، وتصفية التركات، والمنازعات الجبائية والإدارية بالمغرب.`,
    call: "الاتصال بالمكتب",
    whatsapp: "التواصل عبر واتساب",
    proofTitle: "خبرة قانونية وقضائية تمتد لأكثر من ثلاثة عقود",
    proofText: "يقدم الأستاذ عبد الرزاق الرويسي المشورة القانونية والمؤازرة القضائية للأفراد والشركات والمستغلين الفلاحيين بمنهج تحليلي صارم يراعي خصوصية القواعد الموضوعية والإجرائية لكل ملف.",
    teamNumber: "10 محامين",
    teamTitle: "فريق متكامل يعمل تحت إشرافه المباشر",
    teamText: "يضم المكتب نخبة من المحامين المتعاونين والمساعدين القانونيين المقيدين بهيئة المحامين بالدار البيضاء. وتُعالج كافة القضايا تحت الإشراف والتوجيه المباشر للأستاذ عبد الرزاق الرويسي.",
    servicesTitle: "مجالات ممارسة المكتب واختصاصاته",
    servicesIntro: "الاستشارة القانونية، التفاوض، الوساطة الاتفاقية، التحكيم، والتمثيل والترافع أمام مختلف المحاكم المغربية.",
    services: [
      ["القانون العقاري ومساطر التحفيظ", "متابعة مطالب التحفيظ، تأسيس الرسوم العقارية، تقييد التصرفات والتشطيبات، دعاوى القسمة وإنهاء الشياع، وحل النزاعات العقارية المعقدة."],
      ["تصفية التركات وقسمة المواريث", "حصر متروك الهالك، إعداد القسمة الرضائية والقضائية، إنهاء حالة الشياع، وحل النزاعات بين الورثة حول الأصول والعقارات الموروثة."],
      ["العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي", "رسوم الملكية العدلية (أراضي الملك)، الأراضي السلالية، قضايا أراضي تعاونيات الإصلاح الزراعي (حال حياة المستفيدين وبعد وفاتهم)، ونزع الملكية للمنفعة العامة."],
      ["القانون الضريبي والمنازعات الجبائية", "مؤازرة الملزمين أثناء المراقبة الضريبية، الرد على رسائل التصحيح، الترافع أمام اللجان الضريبية، ومقاضاة الإدارة أمام المحاكم الإدارية."],
      ["القانون الإداري والمنازعات العمومية", "دعاوى الإلغاء لتجاوز السلطة، دعاوى التعويض والمسؤولية الإدارية للدولة والجماعات الترابية، ومباشرة التظلمات الاستعطافية والرئاسية."],
      ["الوساطة القانونية ومواكبة مغاربة العالم (MRE)", "الوساطة والحلول الودية، وحماية الأملاك العقارية وتصفية التركات للمغاربة المقيمين بالخارج عبر استشارة حضورية بالمكتب بواسطة قريب والتمثيل بالوكالة القنصلية."],
    ],
    guidesEyebrow: "الأدلة القانونية الأساسية",
    guidesTitle: "مراجع عملية لفهم مساطر العقار والتركات بالمغرب",
    guidesIntro: "مذكرات وأدلة تطبيقية أعدها المكتب لتوضيح مساطر التحفيظ العقاري، رسم الملكية، أراضي الإصلاح الزراعي، الأراضي السلالية، والخروج من الشياع.",
    guidesAll: "الاطلاع على كافة الأدلة القانونية (21 دليلاً)",
    guideRead: "قراءة الدليل",
    reachTitle: "مكتب محاماة بالمحمدية يباشر القضايا في مختلف محاكم المملكة",
    reachText: "انطلاقاً من مقره بالمحمدية، يترافع المكتب يومياً على محور الدار البيضاء–الرباط (عين حرودة، بنسليمان، بوزنيقة، بوسكورة، تمارة، سلا)، كما يباشر القضايا أمام محاكم فاس، ومراكش، وطنجة، والقنيطرة وسائر الدوائر القضائية بالمملكة.",
    reachLandmark: "127 شارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، وسط المدينة — المحمدية 28830",
    reachMapLink: "عرض الخريطة ومسار الوصول",
    faqLabel: "س / ج",
    faqTitle: "أسئلة شائعة حول مكتب المحاماة بالمحمدية",
    faqIntro: "معطيات عملية وتنظيمية قبل الاتصال بالمكتب أو زيارته بمدينة المحمدية.",
    faqs: [
      {
        question: "أين يقع مقر مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية؟",
        answer: "يقع مقر المكتب بـ 127 شارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، المحمدية 28830. يستقبل المكتب المراجعين من الاثنين إلى السبت من الساعة 09:00 إلى 19:30، مع توفر موقف سيارات وولوج ميسر لذوي الحركية المحدودة.",
      },
      {
        question: "أمام أي المحاكم يترافع المكتب في المغرب؟",
        answer: "الأستاذ عبد الرزاق الرويسي محامٍ مسجل بهيئة المحامين بالدار البيضاء منذ يناير 1992 ومقبول لدى محكمة النقض، ويترافع أمام المحكمة الابتدائية بالمحمدية، ومحاكم الدار البيضاء والرباط (المدنية والتجارية والإدارية)، وسائر محاكم المملكة ومحكمة النقض.",
      },
      {
        question: "ما هي مجالات الممارسة الرئيسية للمكتب؟",
        answer: "يتركز عمل المكتب في القانون العقاري والتحفيظ العقاري، العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي والأراضي السلالية، تصفية التركات وقسمة الميراث، المنازعات الضريبية، القضاء الإداري، والوساطة الاتفاقية.",
      },
      {
        question: "كيف يمكن للمغاربة المقيمين بالخارج (MRE) تكليف المكتب بقضاياهم؟",
        answer: "حفاظاً على السر المهني وضرورة فحص أصول الوثائق، لا يقدم المكتب استشارات غير رسمية عن بعد. يمكن لقريب مقيم بالمغرب تقديم الوثائق خلال موعد حضوري بمقر المكتب بالمحمدية (صفحة /ar/mre)، ويتم التمثيل القضائي الرسمي بموجب وكالة مصادق عليها بالقنصلية المغربية.",
      },
    ],
    finalTitle: "تواصلوا مع المكتب بشأن قضيتكم",
    finalText: "تفضلوا بعرض عناصر ملفكم بإيجاز عبر الهاتف أو واتساب لترتيب موعد استشارة قانونية بمقر المكتب.",
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const seo = seoCopy[lang];
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "fr-MA": "/fr",
        "ar-MA": "/ar",
        "x-default": "/fr",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      title: seo.title,
      description: seo.description,
      images: [getDefaultOgImage(lang)],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [firm.defaultOgImage],
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const isAr = locale === "ar";
  const copy = content[locale];
  const Arrow = isAr ? ArrowUpLeft : ArrowUpRight;
  const cities = isAr
    ? ["المحمدية", "عين حرودة", "بنسليمان", "بوزنيقة", "الدار البيضاء", "بوسكورة", "تمارة", "الرباط"]
    : ["Mohammédia", "Aïn Harrouda", "Benslimane", "Bouznika", "Casablanca", "Bouskoura", "Témara", "Rabat"];
  const serviceHrefs = [
    getServicePath(locale, "immobilier"),
    getServicePath(locale, "succession"),
    getServicePath(locale, "foncierRural"),
    getServicePath(locale, "fiscal"),
    getServicePath(locale, "administratif"),
    `/${locale}/mre`,
  ];

  return (
    <main className="overflow-hidden bg-paper text-slate-950">
      <FaqJsonLd faqs={[...copy.faqs]} />

      <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="absolute inset-y-0 start-[8%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute inset-y-0 end-[30%] hidden w-px bg-white/[0.06] lg:block" />
        <div aria-hidden="true" className="absolute inset-x-0 top-[32%] h-px bg-white/[0.05]" />
        <div aria-hidden="true" className="font-display absolute -end-10 bottom-[-3.5rem] select-none text-[16rem] font-semibold leading-none tracking-[-0.04em] text-white/[0.025] sm:text-[22rem] lg:text-[28rem]">92</div>

        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-[90rem] grid-cols-1 px-5 pb-14 pt-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-24 xl:gap-24">
          <div className="flex min-w-0 flex-col justify-between">
            <div className="grid gap-8 lg:grid-cols-[6rem_minmax(0,1fr)]">
              <p className="hidden whitespace-pre-line border-t border-amber-500/50 pt-4 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.22em] text-amber-200/70 lg:block">
                {isAr ? "مكتب محاماة\nالمحمدية" : "Cabinet\nd’avocat\nMohammedia"}
              </p>
              <div>
                <h1 className="font-display max-w-full break-words text-[clamp(2.75rem,7.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white text-balance lg:max-w-[13ch] lg:leading-[0.98]">{copy.h1}</h1>
                <p className="mt-8 max-w-[66ch] border-s border-amber-500/50 ps-6 text-lg leading-8 text-slate-300 sm:text-xl">{copy.intro}</p>
              </div>
            </div>

            <div className="mt-14 grid items-end gap-8 border-t border-white/10 pt-8 sm:grid-cols-[1fr_auto] lg:ms-[6rem]">
              <div className="flex w-full flex-col flex-wrap gap-3 sm:w-auto sm:flex-row">
                <a href={`tel:${firm.telephone}`} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-3 font-semibold text-navy shadow-[0_14px_36px_rgba(197,160,89,0.18)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-brass hover:shadow-[0_18px_42px_rgba(197,160,89,0.26)] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto">
                  <Phone aria-hidden="true" size={17} strokeWidth={1.7} />{copy.call}
                </a>
                <a href={firm.whatsappUrl} className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.08] active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" size={17} strokeWidth={1.7} />{copy.whatsapp}
                </a>
              </div>
              <a href="#expertises" className="group hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-amber-300 motion-reduce:transition-none sm:flex">
                {isAr ? "مجالات الممارسة" : "Découvrir nos expertises"}<ArrowDownRight aria-hidden="true" size={18} className="text-amber-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none rtl:-scale-x-100" />
              </a>
            </div>
          </div>

          <aside className="relative mt-14 self-center border-y border-white/10 bg-white/[0.035] px-7 py-9 shadow-2xl backdrop-blur-md lg:mt-12 lg:-translate-y-4 lg:px-8 lg:py-11">
            <div className="absolute inset-y-0 start-0 w-px bg-amber-500/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/75">{isAr ? "منذ يناير" : "Depuis janvier"}</p>
            <p className="font-display mt-3 text-[5.5rem] font-semibold leading-none tracking-[-0.04em] text-white">1992</p>
            <div className="my-8 h-px bg-white/10" />
            <p className="font-display text-[4.75rem] font-semibold leading-none tracking-[-0.04em] text-gold">+{yearsExperience}</p>
            <p className="mt-2 text-lg text-slate-200">{isAr ? "سنة من الخبرة" : "ans d’expérience"}</p>
            <p className="mt-8 max-w-[28ch] text-sm leading-7 text-slate-400">{isAr ? "ممارسة قانونية رصينة في مؤازرة الخواص، المقاولات، والفاعلين العقاريين والفلاحيين عبر كافة ربوع المملكة." : "Une pratique au service des particuliers, des entreprises et des agriculteurs dans tout le Maroc."}</p>
            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex justify-between gap-5"><dt className="text-slate-400">{isAr ? "المقر" : "Cabinet"}</dt><dd className="font-medium text-slate-200">{isAr ? "المحمدية" : "Mohammédia"}</dd></div>
              <div className="flex justify-between gap-5"><dt className="text-slate-400">{isAr ? "اللغات" : "Langues"}</dt><dd className="font-medium text-slate-200" dir="ltr">{isAr ? "العربية · Français · English" : "Français · العربية · English"}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div className="relative border-t border-slate-900/15 pt-5">
            <p className="font-display text-[clamp(5rem,12vw,10rem)] font-semibold leading-none tracking-[-0.04em] text-gold-ink">+{yearsExperience}</p>
            <p className="mt-2 max-w-48 text-xs font-semibold uppercase leading-5 tracking-[0.2em] text-slate-600">{isAr ? "عاماً من الممارسة القانونية" : "années de pratique juridique"}</p>

            {/* Authentic Photographic Proof Card */}
            <div className="group mt-8 overflow-hidden rounded-2xl border border-slate-900/10 bg-white p-2.5 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={firm.defaultOgImage}
                  alt={isAr ? "بذلة المحاماة، ملفات الترافع والبطاقة المهنية للأستاذ عبد الرزاق الرويسي بمكتبه بالمحمدية" : "Cartable d'avocat, robe d'audience et carte professionnelle de Maître Abderrazak Errouissi à Mohammedia"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="px-2 pt-3 pb-1">
                <p className="font-display text-sm font-semibold text-slate-900">
                  {isAr ? "الأستاذ عبد الرزاق الرويسي" : "Maître Abderrazak Errouissi"}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {isAr ? "مقبول لدى محكمة النقض · هيئة المحامين بالدار البيضاء" : "Agréé près la Cour de Cassation · Barreau de Casablanca"}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pt-16">
            <h2 className="font-display max-w-[15ch] text-[clamp(2.7rem,5vw,4.7rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 text-balance">{copy.proofTitle}</h2>
            <p className="mt-8 max-w-[68ch] text-lg leading-8 text-slate-600">{copy.proofText}</p>
            <div className="mt-12 grid gap-5 border-y border-slate-900/15 py-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-baseline sm:gap-10">
              <p className="font-display whitespace-nowrap text-4xl font-semibold leading-none text-gold-ink sm:text-5xl">{copy.teamNumber}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-slate-950">{copy.teamTitle}</h3>
                <p className="mt-3 max-w-[68ch] text-sm leading-7 text-slate-600 sm:text-base">{copy.teamText}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div><p className="font-display text-2xl text-slate-950">{isAr ? "المحمدية" : "Mohammédia"}</p><p className="mt-2 text-sm text-slate-600">{isAr ? "مقر المكتب" : "Adresse du cabinet"}</p></div>
              <div><p className="font-display text-2xl text-slate-950">{isAr ? "المغرب" : "Maroc"}</p><p className="mt-2 text-sm text-slate-600">{isAr ? "نطاق الترافع والممارسة" : "Zone d’intervention"}</p></div>
              <div><p className="font-display text-2xl text-slate-950" dir="ltr">FR · AR · EN</p><p className="mt-2 text-sm text-slate-600">{isAr ? "لغات التواصل" : "Langues de travail"}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertises" className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[86rem]">
          <header className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-display max-w-[12ch] text-[clamp(3rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white text-balance">{copy.servicesTitle}</h2>
            <p className="max-w-[58ch] text-lg leading-8 text-slate-400 lg:justify-self-end">{copy.servicesIntro}</p>
          </header>

          <div className="divide-y divide-white/10">
            {copy.services.map(([title, description], index) => {
              const href = serviceHrefs[index];
              return <article key={title} className="group grid gap-5 rounded-2xl px-4 py-9 transition-colors duration-300 hover:bg-amber-500/[0.055] motion-reduce:transition-none sm:grid-cols-[5rem_1fr] sm:px-6 lg:grid-cols-[8rem_0.8fr_1.2fr] lg:items-baseline lg:gap-10 lg:px-7 lg:py-11">
                <p className="font-display text-lg tracking-[0.08em] text-gold">{String(index + 1).padStart(2, "0")} /</p>
                <h3 className="font-display text-2xl font-semibold leading-tight text-white transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none rtl:group-hover:-translate-x-1 sm:text-3xl">{href ? <Link href={href} className="inline-flex min-h-11 items-center">{title}</Link> : title}</h3>
                <p className="max-w-[62ch] text-sm leading-7 text-slate-400 lg:text-base">{description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[86rem]">
          <header className="grid gap-8 border-b border-slate-900/15 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-ink">{copy.guidesEyebrow}</p>
              <h2 className="font-display mt-4 max-w-[18ch] text-[clamp(2.4rem,4.5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 text-balance">{copy.guidesTitle}</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-[54ch] text-base leading-7 text-slate-600">{copy.guidesIntro}</p>
              <Link href={`/${locale}/guides`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-950 underline decoration-gold underline-offset-4 transition-colors hover:text-gold-ink">
                <span>{copy.guidesAll}</span>
                <Arrow aria-hidden="true" size={16} />
              </Link>
            </div>
          </header>

          <div className="mt-10 grid gap-px bg-slate-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuideKeys.map((key) => {
              const guide = guides[key];
              const item = guide.content[locale];
              const href = getGuidePath(locale, key);
              return (
                <article key={key} className="group flex flex-col justify-between bg-paper p-7 transition-colors duration-300 hover:bg-warm-paper motion-reduce:transition-none">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-gold-ink">{item.category}</p>
                    <h3 className="font-display mt-3 text-2xl font-semibold leading-snug text-slate-950">
                      <Link href={href}>{item.h1}</Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{item.lead}</p>
                  </div>
                  <Link href={href} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-950 underline decoration-gold/60 underline-offset-4 group-hover:decoration-gold">
                    <span>{copy.guideRead}</span>
                    <Arrow aria-hidden="true" size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-display text-[5rem] leading-none text-gold-ink">MA</p>
            <h2 className="font-display mt-8 max-w-[13ch] text-[clamp(2.8rem,5vw,4.6rem)] font-semibold leading-[1.03] tracking-[-0.03em] text-slate-950 text-balance">{copy.reachTitle}</h2>
            <p className="mt-7 max-w-[62ch] text-lg leading-8 text-slate-600">{copy.reachText}</p>
            <div className="mt-8 border-s-2 border-gold ps-5">
              <p className="text-sm font-medium leading-6 text-slate-800">{copy.reachLandmark}</p>
              <Link href={`/${locale}/contact#map`} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-ink underline decoration-gold underline-offset-4 hover:text-slate-950">
                <span>{copy.reachMapLink}</span>
                <Arrow aria-hidden="true" size={15} />
              </Link>
            </div>
          </div>
          <div className="grid content-start sm:grid-cols-2">
            {cities.map((city, index) => (
              <p key={city} className="flex items-baseline justify-between gap-4 border-t border-slate-900/15 py-5 text-xl text-slate-800 sm:px-5 sm:text-2xl">
                <span className="font-display">{city}</span><span className="text-[0.65rem] font-semibold tabular-nums tracking-[0.18em] text-slate-600">0{index + 1}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="font-display text-5xl text-gold-ink">{copy.faqLabel}</p>
            <h2 className="font-display mt-6 max-w-[13ch] text-[clamp(2.5rem,4.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 text-balance">{copy.faqTitle}</h2>
            <p className="mt-6 max-w-[50ch] leading-7 text-slate-600">{copy.faqIntro}</p>
          </div>
          <div className="border-t border-slate-900/15">
            {copy.faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-slate-900/15 py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-start font-display text-xl font-semibold marker:content-none">
                  <span>
                    <span className="me-3 text-sm text-gold-ink">0{index + 1} /</span>
                    {faq.question}
                  </span>
                  <span aria-hidden="true" className="text-gold-ink transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
                </summary>
                <p className="mt-4 max-w-[68ch] ps-10 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-5 py-20 text-navy sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[86rem] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-24">
          <div>
            <h2 className="font-display max-w-[13ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-balance">{copy.finalTitle}</h2>
            <p className="mt-7 max-w-[62ch] text-lg leading-8 text-navy/75">{copy.finalText}</p>
          </div>
          <div className="grid w-full gap-3 sm:w-72 lg:w-80 lg:justify-self-end">
            <a href={`tel:${firm.telephone}`} className="inline-flex min-h-14 items-center justify-between gap-8 rounded-xl bg-navy px-6 py-4 font-semibold text-white shadow-2xl transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none">
              <span>{copy.call}</span><Phone aria-hidden="true" size={18} />
            </a>
            <a href={firm.whatsappUrl} className="inline-flex min-h-14 items-center justify-between gap-8 rounded-xl border border-navy/25 px-6 py-4 font-semibold transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none" rel="noopener noreferrer">
              <span>{copy.whatsapp}</span><MessageCircle aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
