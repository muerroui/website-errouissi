import { firm } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export interface ContactTopicItem {
  value: ContactTopic;
  label: string;
  description: string;
  serviceHref: string;
}

export const contactTopics: readonly ContactTopicItem[] = [
  {
    value: "succession",
    label: "تصفية التركات وقسمة المواريث",
    description:
      "حصر متروك الهالك، إعداد القسمة الرضائية والقضائية، إنهاء حالة الشياع، وحل النزاعات بين الورثة حول الأصول والعقارات الموروثة.",
    serviceHref: "/ar/services/الميراث-والتركات",
  },
  {
    value: "foncierRural",
    label: "العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي",
    description:
      "رسوم الملكية العدلية (أراضي الملك)، قضايا ومنازعات أراضي تعاونيات الإصلاح الزراعي (حال حياة المستفيدين وبعد وفاتهم)، ونزع الملكية للمنفعة العامة.",
    serviceHref: "/ar/services/العقار-الفلاحي-وأراضي-تعاونيات-الإصلاح-الزراعي",
  },
  {
    value: "fiscal",
    label: "القانون الضريبي والمنازعات الجبائية",
    description:
      "مؤازرة الملزمين أثناء المراقبة الضريبية، الرد على رسائل التصحيح، الترافع أمام اللجان الضريبية، ومقاضاة الإدارة أمام المحاكم الإدارية.",
    serviceHref: "/ar/services/القانون-الضريبي",
  },
  {
    value: "administratif",
    label: "القانون الإداري والمنازعات العمومية",
    description:
      "دعاوى الإلغاء لتجاوز السلطة، دعاوى التعويض والمسؤولية الإدارية للدولة والجماعات الترابية، ومباشرة التظلمات الاستعطافية والرئاسية.",
    serviceHref: "/ar/services/القانون-الإداري",
  },
  {
    value: "other",
    label: "موضوع آخر / استشارة قانونية عامة",
    description:
      "استشارة قانونية في مجالات الممارسة الأخرى، تدقيق العقود، أو دراسة مسبقة لملف قضائي بالمكتب.",
    serviceHref: "/ar/contact",
  },
] as const;

export type ContactTopic =
  | "succession"
  | "foncierRural"
  | "fiscal"
  | "administratif"
  | "other";

export const frenchContactTopics: readonly ContactTopicItem[] = [
  {
    value: "succession",
    label: "Liquidation des successions et partage d’héritage",
    description:
      "Inventaire et liquidation de la succession, partage amiable ou judiciaire, sortie d’indivision et résolution des litiges successoraux.",
    serviceHref: "/fr/services/succession-heritage",
  },
  {
    value: "foncierRural",
    label: "Foncier rural & terres de la réforme agraire",
    description:
      "Titres de propriété Melkia, litiges des terres des coopératives de la réforme agraire (du vivant des attributaires ou après décès), et expropriation.",
    serviceHref: "/fr/services/droit-foncier-rural",
  },
  {
    value: "fiscal",
    label: "Droit fiscal et contentieux fiscal",
    description:
      "Assistance lors des contrôles fiscaux, réponses aux notifications de redressement, recours devant les commissions et tribunaux administratifs.",
    serviceHref: "/fr/services/droit-fiscal",
  },
  {
    value: "administratif",
    label: "Droit administratif et contentieux public",
    description:
      "Recours pour excès de pouvoir, responsabilité administrative de l’État et des collectivités, et recours gracieux ou hiérarchiques.",
    serviceHref: "/fr/services/droit-administratif",
  },
  {
    value: "other",
    label: "Autre sujet / Consultation générale",
    description:
      "Autre domaine d’intervention, examen contractuel ou étude préalable d’un dossier devant les juridictions.",
    serviceHref: "/fr/contact",
  },
] as const;

export function getContactTopics(locale: Locale): readonly ContactTopicItem[] {
  return locale === "ar" ? contactTopics : frenchContactTopics;
}

export function normalizePhone(value: string) {
  return value.trim().replace(/[٠-٩۰-۹]/g, (digit) => {
    const code = digit.charCodeAt(0);
    return String(code - (code >= 0x06f0 ? 0x06f0 : 0x0660));
  });
}

export function contactWhatsAppUrl(
  name?: string,
  topic?: ContactTopic,
  phone?: string,
  locale: Locale = "ar",
) {
  const topics = getContactTopics(locale);
  const found = topics.find((entry) => entry.value === topic);
  const label = found?.label;

  const lines =
    locale === "ar"
      ? [
          "السلام عليكم ورحمة الله، أرغب في حجز موعد استشارة قانونية لدى مكتب الأستاذ عبد الرزاق الرويسي.",
          name ? `الاسم الكامل: ${name.trim()}` : "",
          label ? `مجال القضية / الموضوع: ${label}` : "",
          phone ? `رقم الهاتف: ${normalizePhone(phone)}` : "",
          "أرجو إفادتي بالوثائق المطلوبة لدراسة الملف والموعد المقترح للاستشارة بمقر المكتب بالمحمدية. مع التقدير.",
        ]
      : [
          "Bonjour, je souhaite convenir d’un rendez-vous de consultation avec le cabinet de Maître Abderrazak Errouissi.",
          name ? `Nom complet : ${name.trim()}` : "",
          label ? `Domaine du dossier : ${label}` : "",
          phone ? `Téléphone : ${normalizePhone(phone)}` : "",
          "Je souhaite connaître les documents utiles à l’examen du dossier et les disponibilités pour un rendez-vous au cabinet. Merci.",
        ];

  return `${firm.whatsappUrl}?text=${encodeURIComponent(lines.filter(Boolean).join("\n"))}`;
}
