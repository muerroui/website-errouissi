import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  FileWarning,
  HelpCircle,
  Landmark,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { firm, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "ar" }];
}

const content = {
  fr: {
    seo: {
      title: "Avocat pour Marocains du Monde (MRE) | Litiges Fonciers & Successions au Maroc",
      description:
        "Cabinet de Maître Abderrazak Errouissi : défense du patrimoine et des droits des Marocains résidant à l'étranger (France, Belgique, Canada...). Consultation confidentielle au cabinet par mandataire familial et représentation par procuration consulaire.",
    },
    breadcrumbs: {
      home: "Accueil",
      current: "Marocains du Monde (MRE)",
    },
    hero: {
      badge: "Marocains Résidant à l'Étranger · Europe & Amérique du Nord",
      h1: "Défense de vos droits et de votre patrimoine au Maroc",
      lead:
        "Vous résidez en France, en Belgique, au Canada ou ailleurs dans le monde, et vous faites face à un litige successoral, une spoliation, ou une contestation foncière au Maroc ? Maître Abderrazak Errouissi, avocat au Barreau de Casablanca agréé près la Cour de cassation (depuis 1992), sécurise vos intérêts sans allers-retours inutiles.",
      experience: "Plus de 34 ans d'exercice",
      jurisdiction: "Barreau de Casablanca · Cour de cassation",
      officeCity: "Cabinet à Mohammedia (Axe Casablanca – Rabat)",
      ctaWhatsApp: "Échanger sur WhatsApp",
      ctaCall: "Appeler le cabinet",
    },
    confidentiality: {
      tag: "Règle déontologique & Sécurité juridique",
      title: "Confidentialité & Consultation : La procédure stricte du cabinet pour les MRE",
      intro:
        "Par souci absolu du secret professionnel, de protection des titres originaux et de confidentialité des dossiers de famille, le cabinet ne dispense pas de consultations informelles à distance (par téléphone ou visioconférence).",
      ruleDetail:
        "Les dossiers immobiliers et successoraux au Maroc reposent sur des actes authentiques (actes adoulaires, réquisitions foncières, moulkiyas, jugements d'iratha) dont l'analyse exige un examen matériel rigoureux sur pièces.",
      stepsTitle: "Comment organiser votre consultation et la gestion de votre dossier :",
      step1Title: "1. Consultation au cabinet par un mandataire familial",
      step1Desc:
        "Vous mandatez un membre de votre famille ou une personne de confiance résidant au Maroc. Celui-ci se présente en personne au cabinet à Mohammedia, muni des documents originaux ou copies conformes, pour une consultation juridique complète et confidentielle.",
      step2Title: "2. Représentation en justice par procuration consulaire (وكالة قنصلية)",
      step2Desc:
        "Pour engager les actions judiciaires (assignation, référé, appel, cassation) ou intervenir auprès de la Conservation foncière sans que vous ayez à voyager, il vous suffit d'établir une procuration officielle auprès du Consulat Général du Royaume du Maroc dans votre pays de résidence donnant mandat au cabinet.",
    },
    domainsTitle: "Les 4 grands contentieux traités pour les Marocains du Monde",
    domainsSubtitle:
      "Une expertise ciblée sur les problématiques juridiques récurrentes vécues à distance :",
    domains: [
      {
        num: "01",
        title: "Successions bloquées & Sortie d'indivision",
        desc: "Blocages entre cohéritiers, occupation privative d'un bien familial sans indemnité, partage amiable ou judiciaire (qisma qada'iya), inventaire des biens et liquidation de l'indivision devant les tribunaux marocains.",
        points: [
          "Action en partage judiciaire de biens immobiliers et agricoles",
          "Fixation d'indemnités d'occupation contre les occupants sans droit",
          "Éviction des blocages et vente aux enchères si indivisible",
        ],
      },
      {
        num: "02",
        title: "Protection foncière, Spoliation & Squat",
        desc: "Terrains non clôturés, villas ou appartements laissés vacants au Maroc, empiétements de limites séparatives, fausses revendications de possession et actions rapides en expulsion d'occupant sans titre.",
        points: [
          "Action en revendication de propriété (istiqqaq)",
          "Procédure d'expulsion d'urgence en référé contre les squatteurs",
          "Constat d'huissier et poursuite des constructions illicites",
        ],
      },
      {
        num: "03",
        title: "Conservation Foncière & Réquisitions d'immatriculation",
        desc: "Tentatives d'immatriculation par des tiers sur vos terrains, oppositions formelles dans les délais légaux stricts, conversion de titres Melkia en titres fonciers définitifs et levée de blocages administratifs.",
        points: [
          "Formulation d'oppositions auprès du Conservateur de la Propriété Foncière",
          "Suivi des instances d'opposition devant le Tribunal de Première Instance",
          "Purge des hypothèques ou saisies indues inscrites sur vos titres",
        ],
      },
      {
        num: "04",
        title: "Terres agricoles, Melkia & Réforme agraire",
        desc: "Gestion complexe des terres héritées : statut des parcelles de coopératives de la réforme agraire (loi 06-03), authenticité des actes adoulaires coutumiers, litiges de bornage rural et défense contre l'expropriation.",
        points: [
          "Attribution et dévolution des lots de coopératives agricoles après décès",
          "Expertise de délimitation de terres Melkia et ruraux",
          "Recours en indemnisation juste lors d'expropriations publiques",
        ],
      },
    ],
    processTitle: "Comment se déroule la défense de vos intérêts depuis l'étranger",
    processSubtitle:
      "Une méthode claire, transparente et conforme aux règles du Barreau de Casablanca :",
    processSteps: [
      {
        step: "Étape 1",
        title: "Prise de contact & Préparation",
        text: "Contactez le cabinet par téléphone ou WhatsApp pour exposer les grandes lignes de la situation et préparer la liste exacte des pièces à examiner (actes de propriété, livret de famille, jugements).",
      },
      {
        step: "Étape 2",
        title: "Consultation physique avec votre mandataire familial",
        text: "Un membre de votre famille ou mandataire de confiance se rend au cabinet à Mohammedia pour déposer et analyser les documents avec Maître Errouissi en toute confidentialité.",
      },
      {
        step: "Étape 3",
        title: "Établissement de la procuration consulaire",
        text: "Depuis le Consulat du Maroc de votre pays (Paris, Bruxelles, Montréal, Madrid...), vous signez la procuration officielle habilitant le cabinet à agir en justice en votre nom.",
      },
      {
        step: "Étape 4",
        title: "Pilotage judiciaire & Information continue",
        text: "Maître Errouissi rédige les requêtes, dépose les mémoires, plaide devant les juridictions compétentes et vous tient informé à chaque date d'audience jusqu'au jugement définitif.",
      },
    ],
    locationTitle: "Un cabinet accessible pour vos proches au Maroc",
    locationDesc:
      "Situé au centre de Mohammedia sur le Boulevard de Palestine, le cabinet est idéalement placé sur l'axe Casablanca–Rabat, facilement accessible en train ou en voiture pour les membres de votre famille venant de Casablanca, Rabat, Benslimane ou des autres régions du Maroc.",
    locationAddress: "127 Boulevard de Palestine, 1er étage (au-dessus du café Montreal), Mohammedia",
    faqTitle: "Questions fréquentes des Marocains résidant à l'étranger",
    faqs: [
      {
        question: "Dois-je me déplacer au Maroc pour engager un avocat et lancer un procès ?",
        answer:
          "Non, votre présence physique n'est pas obligatoire pour lancer la procédure judiciaire. Grâce à une procuration consulaire (وكالة قنصلية) légalisée auprès du Consulat du Maroc dans votre pays de résidence, Maître Errouissi peut valablement vous représenter devant toutes les juridictions marocaines et effectuer les actes de procédure nécessaires.",
      },
      {
        question: "Pourquoi le cabinet exige-t-il la visite d'un mandataire familial plutôt qu'une visio ?",
        answer:
          "Pour des motifs déontologiques impératifs de confidentialité, de secret professionnel et de rigueur juridique. Les contentieux fonciers et successoraux au Maroc nécessitent l'examen visuel et matériel des actes originaux (titres de propriété, moulkiyas, actes de notoriété adoulaire) afin de déceler d'éventuels vices de forme ou inscriptions de conservation foncière avant toute démarche judiciaire.",
      },
      {
        question: "Devant quels tribunaux le cabinet Maître Errouissi peut-il intervenir ?",
        answer:
          "Inscrit au Barreau de Casablanca et agréé près la Cour de cassation, Maître Abderrazak Errouissi plaide devant les tribunaux de première instance, cours d'appel et tribunaux administratifs de Mohammedia, Casablanca, Rabat, Benslimane, ainsi que sur l'ensemble du territoire marocain pour les dossiers d'envergure, jusqu'à la Cour de cassation à Rabat.",
      },
      {
        question: "Un de mes cohéritiers occupe notre maison ou terrain au Maroc sans accord, que faire ?",
        answer:
          "Le droit marocain ne permet pas à un héritier de s'approprier un bien en indivision au détriment des autres. Maître Errouissi peut introduire une action en partage judiciaire accompagnée d'une demande de fixation d'indemnité d'occupation à la charge de l'occupant pour chaque mois d'occupation privative.",
      },
      {
        question: "Que faire si un voisin ou un tiers a déposé une réquisition sur notre terrain ?",
        answer:
          "La vigilance est cruciale : les délais de la Conservation Foncière sont forclosifs. Dès qu'une réquisition abusive est identifiée, une opposition formelle motivée doit être déposée auprès du Conservateur de la Propriété Foncière. Le cabinet assure la formulation juridique de cette opposition et sa défense devant le tribunal compétent.",
      },
      {
        question: "Comment préparer les documents avant la consultation de mon mandataire familial ?",
        answer:
          "Rassemblez tous les actes disponibles : numéro de titre foncier ou de réquisition, moulkiya ou contrat de vente, acte d'iratha (de notoriété successorale), acte de décès, et tout document cadastral. Votre mandataire familial apportera ces pièces au cabinet lors de son rendez-vous à Mohammedia.",
      },
    ],
  },
  ar: {
    seo: {
      title: "محامي مغاربة العالم بالخارج | قضايا العقار، التركات والتمثيل القضائي بالمغرب",
      description:
        "مكتب الأستاذ عبد الرزاق الرويسي لمواكبة مغاربة العالم (فرنسا، بلجيكا، كندا...): حماية العقارات، قسمة التركات، ومنازعات التحفيظ بالمغرب. استشارة حضورية بالمكتب عبر أحد أفراد العائلة وتمثيل بالوكالة القنصلية.",
    },
    breadcrumbs: {
      home: "الرئيسية",
      current: "مغاربة العالم (MRE)",
    },
    hero: {
      badge: "مغاربة العالم المقيمون بالخارج · أوروبا وأمريكا الشمالية",
      h1: "حماية حقوقكم وأملاككم العقارية بالمغرب دون عناء السفر والتنقل",
      lead:
        "هل تقيمون بفرنسا، بلجيكا، كندا أو أي بلد آخر وتواجهون نزاعاً في تركة، أو محاولة ترامٍ على عقار، أو إشكالاً في التحفيظ العقاري بالمغرب؟ يضع الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء ومقبول لدى محكمة النقض (أكثر من 34 سنة من الممارسة)، خبرته القضائية لضمان حقوقكم أمام محاكم المملكة.",
      experience: "أكثر من 34 سنة من الممارسة",
      jurisdiction: "هيئة المحامين بالدار البيضاء · مقبول لدى محكمة النقض",
      officeCity: "مقر المكتب بالمحمدية (محور الدار البيضاء – الرباط)",
      ctaWhatsApp: "التواصل عبر واتساب",
      ctaCall: "الاتصال المباشر بالمكتب",
    },
    confidentiality: {
      tag: "قواعد المهنة والأمان القانوني",
      title: "السرية التامة والاستشارة: المسطرة الصارمة للمكتب المعتمدة لمغاربة العالم",
      intro:
        "حفاظاً على السر المهني، وحماية الرسوم العقارية الأصلية وضماناً للسرية التامة لشؤون الأسر، لا يقدم المكتب استشارات قانونية غير رسمية عن بعد (عبر الهاتف أو تقنية الفيديو).",
      ruleDetail:
        "تتطلب القضايا العقارية وقسمة التركات بالمغرب فحصاً مادياً دقيقاً للأصول والرسوم العدلية (رسوم الملكية، الإراثة، الشراءات القديمة، ومطالب التحفيظ) للتأكد من صحتها القانونية قبل اتخاذ أي إجراء.",
      stepsTitle: "كيفية تنظيم الاستشارة ومباشرة الإجراءات القانونية :",
      step1Title: "1. استشارة حضورية بالمكتب بواسطة أحد أفراد العائلة أو وكيل محلي",
      step1Desc:
        "يمكنكم تكليف أحد أفراد عائلتكم أو شخص موثوق به مقيم بالمغرب، لزيارة مكتب الأستاذ الرويسي بمدينة المحمدية حاملاً الوثائق والرسوم (أصول أو نسخ مطابقة للأصل) لدراسة الملف بشكل مباشر وحضوري وسري.",
      step2Title: "2. التمثيل القضائي الرسمي بواسطة وكالة قنصلية (وكالة قضائية)",
      step2Desc:
        "لرفع الدعاوى القضائية أو الطعن أمام المحاكم أو تسجيل التعرضات دون الحاجة إلى تكبد عناء السفر إلى المغرب، يكفي إنجاز وكالة رسمية لدى القنصلية العامة للمملكة المغربية ببلد إقامتكم لتفويض المكتب بالدفاع عنكم.",
    },
    domainsTitle: "المنازعات الكبرى المعالجة لمغاربة العالم المقيمين بالخارج",
    domainsSubtitle:
      "تخصص دقيق في النزاعات المعقدة التي تتطلب تدخلاً قضائياً حازماً داخل المغرب :",
    domains: [
      {
        num: "01",
        title: "تصفية التركات ونزاعات الشياع بين الورثة",
        desc: "معالجة انسداد القسمة الودية، استغلال أحد الورثة لعقار أو أرض دون أداء نصيب الباقين، رفع دعوى القسمة القضائية لفرز الحصص، أو بيع العقار بالمزاد العلني في حالة عدم إمكانية القسمة العينية.",
        points: [
          "دعاوى القسمة القضائية للعقارات والأراضي الفلاحية المشاعة",
          "المطالبة بالتعويض عن استغلال العقار في مواجهة الحائزين دون سند",
          "تصفية التركات وتحديد الأنصبة بدقة وتصفية ديون التركة",
        ],
      },
      {
        num: "02",
        title: "حماية العقارات والأراضي من الترامي والاستيلاء",
        desc: "الأراضي العارية، الشقق، أو الفيلات المغلقة أثناء إقامتكم بالخارج؛ التصدي السريع لحالات وضع اليد غير القانوني، انتزاع الحيازة، وإقامة مبانٍ دون ترخيص على أملاككم.",
        points: [
          "دعاوى استحقاق الملكية واسترداد الحيازة",
          "المساطر الاستعجالية لطرد المحتل بدون سند أو حق",
          "المعاينات بواسطة المفوض القضائي وتوقيف الأشغال غير القانونية",
        ],
      },
      {
        num: "03",
        title: "مساطر التحفيظ العقاري ومواجهة التعرضات",
        desc: "التصدي لمطالب التحفيظ المفتوحة من طرف الغير على أملاككم، تسجيل التعرضات داخل الآجال القانونية الحاسمة، تسوية وضعية الرسوم العقارية وتطهير الحجوزات والرهون غير المبررة.",
        points: [
          "إيداع التعرضات الرسمية ومتابعتها لدى المحافظ على الأملاك العقارية",
          "الترافع في ملفات التحفيظ المحالة على المحكمة الابتدائية",
          "متابعة مساطر التحفيظ من مرحلة المطلب إلى استخراج الرسم العقاري النهائي",
        ],
      },
      {
        num: "04",
        title: "العقار الفلاحي، أراضي الملك والإصلاح الزراعي",
        desc: "النزاعات المرتبطة بالأراضي الموروثة في البادية؛ أراضي تعاونيات الإصلاح الزراعي (القانون 06-03)، إثبات صحة الرسوم العدلية القديمة، وفحص قرارات نزع الملكية للمنفعة العامة لضمان التعويض العادل.",
        points: [
          "تسوية وضعية ورثة المستفيدين من أراضي تعاونيات الإصلاح الزراعي",
          "نزاعات الحدود والمساحة والشفعة في الأراضي الفلاحية",
          "المنازعة القضائية في التعويضات المتعلقة بنزع الملكية",
        ],
      },
    ],
    processTitle: "كيف تتم مسطرة الدفاع عن مصالحكم وأنتم بالخارج",
    processSubtitle:
      "منهجية واضحة ومضبوطة تراعي المسافة والضوابط القانونية والأخلاقية :",
    processSteps: [
      {
        step: "المرحلة 1",
        title: "التواصل الأولي والتشخيص",
        text: "تواصل أولي عبر الهاتف أو واتساب لتحديد موضوع النزاع والمدينة المعنية وحصر الوثائق الأساسية المطلوبة للدراسة.",
      },
      {
        step: "المرحلة 2",
        title: "الاستشارة الحضورية عبر أحد أفراد العائلة بالمكتب",
        text: "يقوم أحد أقاربكم بزيارة مقر المكتب بالمحمدية حاملاً الوثائق والرسوم لفحصها مباشرة وبشكل متكامل وسري من طرف الأستاذ الرويسي.",
      },
      {
        step: "المرحلة 3",
        title: "إنجاز الوكالة القنصلية ببلد الإقامة",
        text: "تقومون بإنجاز وكالة رسمية لدى القنصلية العامة المغربية في بلد إقامتكم (باريس، بروكسيل، مونتريال، مدريد...) لتفويض الأستاذ الرويسي للترافع باسمكم.",
      },
      {
        step: "المرحلة 4",
        title: "مباشرة المساطر القضائية والمتابعة المنتظمة",
        text: "يقوم المكتب بصياغة المقالات، تسجيل الدعاوى، الترافع في الجلسات وموافاتكم بكل تطور ومآل الإجراءات إلى حين صدور الأحكام وتنفيذها.",
      },
    ],
    locationTitle: "مقر استراتيجي وسهل الولوج لأفراد عائلتكم بالمغرب",
    locationDesc:
      "يقع المكتب في قلب مدينة المحمدية بشارع فلسطين (الطابق الأول، فوق مقهى مونتريال)، على المحور الاستراتيجي الرابط بين الدار البيضاء والرباط، مما يسهل زيارة أفراد عائلتكم القادمين من الدار البيضاء، الرباط، بنسليمان، أو باقي مدن المملكة.",
    locationAddress: "127 شارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، المحمدية 28830",
    faqTitle: "الأسئلة الشائعة لمغاربة العالم",
    faqs: [
      {
        question: "هل يلزمني السفر إلى المغرب لتوكيل محامٍ ومباشرة الدعوى القضائية ؟",
        answer:
          "لا، لا يشترط سفركم إلى المغرب لتوكيل المحامي وبدء الإجراءات. بفضل الوكالة القنصلية المنجزة لدى قنصلية المملكة المغربية ببلد إقامتكم، يتولى الأستاذ عبد الرزاق الرويسي الترافع ورفع الدعاوى وتمثيلكم قانونياً أمام المحاكم المغربية والإدارات المعنية.",
      },
      {
        question: "لماذا يشترط المكتب استشارة حضورية عبر أحد أفراد العائلة عوض استشارة عن بعد ؟",
        answer:
          "لضمان أعلى معايير السرية المهنية، وحماية الرسوم العقارية والوثائق العائلية الحساسة. فالقضايا العقارية وقضايا التركات تتطلب فحصاً مادياً دقيقاً للأصول والرسوم العدلية للتأكد من خلوها من أي إشكال أو تقييد بالمحافظة العقارية قبل الشروع في المسطرة القضائية.",
      },
      {
        question: "ما هي المحاكم التي يمارس ويترافع أمامها الأستاذ عبد الرزاق الرويسي ؟",
        answer:
          "الأستاذ عبد الرزاق الرويسي مسجل بهيئة المحامين بالدار البيضاء ومقبول لدى محكمة النقض؛ يترافع أمام المحاكم الابتدائية، محاكم الاستئناف، والمحاكم الإدارية والتجارية بالمحمدية، الدار البيضاء، الرباط، بنسليمان ومختلف محاكم المملكة، وصولاً إلى محكمة النقض بالرباط.",
      },
      {
        question: "أحد الورثة يستغل المنزل أو الأرض بالمغرب ويرفض القسمة، ما هو الحل ؟",
        answer:
          "القانون المغربي لا يجيز لأحد الورثة الاستئثار بالعقار المشاع دون موافقة باقي الشركاء. يمكن للمكتب رفع دعوى القسمة القضائية لإنهاء الشياع، مع المطالبة بأداء تعويض عن الاستغلال (أجرة المثل) عن كل فترة استئثاره بالعقار.",
      },
      {
        question: "ما العمل في حالة إيداع شخص لمطلب تحفيظ على أرضنا أثناء تواجدنا بالخارج ؟",
        answer:
          "السرعة حاسمة نظراً لوجود آجال قانونية صارمة للتعرض. بمجرد علمكم بمطلب التحفيظ، يتم تسجيل تعرض قانوني رسمي لدى المحافظة العقارية المختصة، ويتولى المكتب متابعة النزاع وتثبيت حقوقكم وتقديم الوثائق المثبتة للملكية.",
      },
      {
        question: "كيف أجهز الوثائق قبل زيارة قريبي لمقر المكتب بالمحمدية ؟",
        answer:
          "يُستحسن تجهيز جميع الوثائق المتاحة: رقم الرسم العقاري أو مطلب التحفيظ، رسم الملكية أو عقد الشراء، رسم الإراثة، شهادة الوفاة، وأي مراسلات أو أحكام سابقة، ليحملها قريبكم أو وكيلكم إلى المكتب لدراستها.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const c = content[lang];

  return {
    title: c.seo.title,
    description: c.seo.description,
    alternates: {
      canonical: `/${lang}/mre`,
      languages: {
        "fr-MA": "/fr/mre",
        "ar-MA": "/ar/mre",
        "x-default": "/fr/mre",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}/mre`,
      title: c.seo.title,
      description: c.seo.description,
    },
  };
}

export default async function MrePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const isAr = locale === "ar";
  const c = content[locale];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    description: c.seo.description,
    url: `${siteUrl}/${locale}/mre`,
    telephone: firm.telephone,
    email: firm.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      postalCode: firm.address.postalCode,
      addressCountry: firm.address.country,
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Netherlands" },
      { "@type": "Country", name: "Morocco" },
    ],
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.breadcrumbs.home,
        item: `${siteUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.breadcrumbs.current,
        item: `${siteUrl}/${locale}/mre`,
      },
    ],
  };

  return (
    <main className="bg-paper text-slate-950">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdService).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <FaqJsonLd faqs={[...c.faqs]} />

      {/* 1. HERO SECTION */}
      <header className="relative isolate overflow-hidden bg-navy px-5 pb-20 pt-12 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
        <div
          aria-hidden="true"
          className="absolute -top-32 end-[10%] h-96 w-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 start-[5%] h-80 w-80 rounded-full bg-blue-950/40 blur-3xl pointer-events-none"
        />

        <div className="relative mx-auto max-w-[86rem]">
          {/* Breadcrumb */}
          <nav
            aria-label={isAr ? "مسار التنقل" : "Fil d'Ariane"}
            className="flex items-center gap-3 text-sm text-slate-400"
          >
            <Link
              href={`/${locale}`}
              className="inline-flex min-h-11 items-center underline-offset-4 hover:text-amber-300 hover:underline"
            >
              {c.breadcrumbs.home}
            </Link>
            <span className="text-gold" aria-hidden="true">
              /
            </span>
            <span className="text-slate-200 font-medium">{c.breadcrumbs.current}</span>
          </nav>

          {/* Hero Grid */}
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-300">
                <Scale size={14} className="text-amber-400" />
                <span>{c.hero.badge}</span>
              </div>

              <h1 className="font-display mt-6 max-w-[20ch] text-[clamp(2.35rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
                {c.hero.h1}
              </h1>

              <p className="mt-6 max-w-[58ch] text-lg leading-8 text-slate-300">
                {c.hero.lead}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={firm.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-gold px-6 py-3 font-semibold text-navy transition-all duration-200 hover:bg-gold-light hover:shadow-lg active:scale-95"
                >
                  <MessageCircle size={18} />
                  <span>{c.hero.ctaWhatsApp}</span>
                </a>
                <a
                  href={`tel:${firm.telephone}`}
                  className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all duration-200 hover:border-gold hover:text-gold active:scale-95"
                >
                  <Phone size={18} />
                  <span>{c.hero.ctaCall}</span>
                </a>
              </div>
            </div>

            {/* Badges card */}
            <div className="rounded-3xl border border-white/10 bg-[#0E1738]/80 p-7 backdrop-blur-sm sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold/15 p-3 text-gold shrink-0">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{c.hero.experience}</h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {isAr
                      ? "تأسس المكتب سنة 1992 بالمحمدية ويواكب الجالية المغربية منذ عقود"
                      : "Maître Abderrazak Errouissi, avocat depuis janvier 1992"}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                <div className="rounded-xl bg-gold/15 p-3 text-gold shrink-0">
                  <Landmark size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{c.hero.jurisdiction}</h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {isAr
                      ? "تمثيل قانوني أمام المحاكم الابتدائية، الاستئناف ومحكمة النقض بالرباط"
                      : "Représentation devant toutes les juridictions du Royaume"}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 flex items-start gap-4">
                <div className="rounded-xl bg-gold/15 p-3 text-gold shrink-0">
                  <MapPin size={26} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">{c.hero.officeCity}</h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {isAr
                      ? "موقع مركزي بشارع فلسطين لسهولة استقبال أقاربكم القادمين من شتى المدن"
                      : "Idéalement situé pour vos proches résidant sur l'axe Casa–Rabat"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CONFIDENTIALITY & FAMILY PROXY NOTICE (STRICT USER RULE) */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 bg-[#F6F4EE] border-b border-slate-900/10">
        <div className="mx-auto max-w-[86rem]">
          <div className="rounded-3xl border-2 border-amber-600/30 bg-white p-7 sm:p-10 lg:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
              <div className="rounded-2xl bg-amber-500/15 p-4 text-amber-800 shrink-0 self-start">
                <Lock size={36} strokeWidth={2} />
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 uppercase tracking-wider">
                  {c.confidentiality.tag}
                </div>

                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {c.confidentiality.title}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-700 font-medium">
                  {c.confidentiality.intro}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.confidentiality.ruleDetail}
                </p>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg">
                    {c.confidentiality.stepsTitle}
                  </h3>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold text-sm font-bold">
                          1
                        </span>
                        <h4 className="font-bold text-slate-950 text-base">
                          {c.confidentiality.step1Title}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {c.confidentiality.step1Desc}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-gold text-sm font-bold">
                          2
                        </span>
                        <h4 className="font-bold text-slate-950 text-base">
                          {c.confidentiality.step2Title}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {c.confidentiality.step2Desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 KEY PRACTICE AREAS FOR MRE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[86rem]">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              {c.domainsTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              {c.domainsSubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {c.domains.map((domain) => (
              <div
                key={domain.num}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-gold/60 hover:shadow-xl sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-gold-ink">
                    {domain.num}
                  </span>
                  <div className="h-2 w-12 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                </div>

                <h3 className="font-display mt-6 text-xl font-bold text-slate-950 sm:text-2xl">
                  {domain.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {domain.desc}
                </p>

                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {domain.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2
                        size={17}
                        className="text-amber-600 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS / COMMENT NOUS TRAVAILLONS DEPUIS L'ÉTRANGER */}
      <section className="bg-navy px-5 py-20 sm:px-8 lg:px-12 lg:py-24 text-white">
        <div className="mx-auto max-w-[86rem]">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              {isAr ? "مراحل العمل القانوني" : "Méthodologie d'intervention"}
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              {c.processTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              {c.processSubtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-white/10 bg-[#0E1738] p-7 transition-all duration-200 hover:border-amber-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {step.step}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                </div>
                <h3 className="font-display mt-5 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LOCATION & ACCÈS POUR VOS PROCHES */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24 bg-white border-b border-slate-900/10">
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-800">
                <MapPin size={14} className="text-amber-600" />
                <span>{isAr ? "موقع المكتب بالمحمدية" : "Situation géographique"}</span>
              </div>

              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {c.locationTitle}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {c.locationDesc}
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3.5">
                  <Building2 size={20} className="text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-sm font-semibold">
                      {isAr ? "العنوان الرسمي للمكتب" : "Adresse du cabinet"}
                    </strong>
                    <span className="text-slate-600 text-sm">{c.locationAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200">
                  <Clock3 size={20} className="text-amber-700 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 text-sm font-semibold">
                      {isAr ? "أوقات العمل" : "Horaires d'ouverture"}
                    </strong>
                    <span className="text-slate-600 text-sm">
                      {isAr
                        ? "من الاثنين إلى السبت: 09:00 إلى 19:30"
                        : "Du lundi au samedi, de 09:00 à 19:30"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800"
                >
                  <span>{isAr ? "صفحة الاتصال والمسار" : "Coordonnées complètes"}</span>
                  <ArrowIcon size={16} />
                </Link>
                <a
                  href={firm.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition-all hover:border-gold hover:text-gold-ink"
                >
                  <MessageCircle size={18} className="text-emerald-600" />
                  <span>{isAr ? "رسالة واتساب مسبقة" : "Message WhatsApp préalable"}</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#FAF9F5] p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-950">
                {isAr ? "الوثائق الموصى بإحضارها للاستشارة" : "Pièces recommandées lors du rendez-vous"}
              </h3>
              <p className="mt-2 text-xs text-slate-500">
                {isAr
                  ? "يُرجى تسليمها لقريبكم الذي سيزور المكتب :"
                  : "À remettre à votre mandataire familial :"}
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <FileCheck2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? "نسخة من الرسوم العقارية أو شواهد الملكية أو رسوم الملكية العدلية (الملكية)"
                      : "Copies des titres fonciers, certificats de propriété ou actes adoulaires de Melkia"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <FileCheck2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? "رسم الإراثة (عقد إحصاء الورثة) وعقود الوفاة في قضايا التركات"
                      : "Acte de notoriété (Iratha) et certificat de décès en matière successorale"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <FileCheck2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? "أي أحكام، مراسلات أو إشعارات صادرة عن المحاكم أو المحافظة العقارية"
                      : "Copies des jugements antérieurs, sommations ou notifications de la Conservation"}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <FileCheck2 size={18} className="text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    {isAr
                      ? "نسخة من بطاقة التعريف الوطنية للموكل وللقريب الزائر للمكتب"
                      : "Copies des pièces d'identité (CNIE / passeport) du mandant et du proche"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ DÉDIÉE MRE */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[86rem]">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-ink">
              {isAr ? "أسئلة وأجوبة" : "Foire aux questions"}
            </span>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              {c.faqTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:border-gold/50"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    size={20}
                    className="text-amber-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-slate-950 text-base leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 ps-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
