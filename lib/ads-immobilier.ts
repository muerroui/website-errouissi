import { firm } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export const propertyTopics = [
  { value: "property", label: "نزاع حول الملكية أو حدود العقار" },
  { value: "rural", label: "أرض فلاحية أو عقار قروي" },
  { value: "inheritance", label: "عقار موروث أو قسمة بين الورثة" },
  { value: "registration", label: "تحفيظ عقاري أو تعرض" },
  { value: "lease", label: "نزاع كراء أو إفراغ" },
  { value: "transaction", label: "بيع أو شراء عقار" },
  { value: "other", label: "ملف عقاري آخر" },
] as const;

export type PropertyTopic = (typeof propertyTopics)[number]["value"];

const frenchPropertyTopics: { value: PropertyTopic; label: string }[] = [
  { value: "property", label: "Propriété ou limites d’un bien" },
  { value: "rural", label: "Terre agricole ou foncier rural" },
  { value: "inheritance", label: "Bien hérité ou partage entre héritiers" },
  { value: "registration", label: "Immatriculation foncière ou opposition" },
  { value: "lease", label: "Litige locatif ou expulsion" },
  { value: "transaction", label: "Vente ou achat immobilier" },
  { value: "other", label: "Autre dossier immobilier" },
];

export function getPropertyTopics(locale: Locale) {
  return locale === "ar" ? propertyTopics : frenchPropertyTopics;
}

export function normalizePhone(value: string) {
  return value.trim().replace(/[٠-٩۰-۹]/g, (digit) => {
    const code = digit.charCodeAt(0);
    return String(code - (code >= 0x06f0 ? 0x06f0 : 0x0660));
  });
}

export function propertyWhatsAppUrl(name?: string, topic?: PropertyTopic, phone?: string, locale: Locale = "ar") {
  const label = getPropertyTopics(locale).find((entry) => entry.value === topic)?.label;
  const lines = locale === "ar" ? [
    "السلام عليكم، أرغب في التواصل مع مكتب الأستاذ عبد الرزاق الرويسي بخصوص ملف عقاري.",
    name ? `الاسم: ${name.trim()}` : "",
    label ? `موضوع الملف: ${label}` : "",
    phone ? `رقم التواصل: ${normalizePhone(phone)}` : "",
    "أود معرفة إمكانية تحديد موعد والوثائق المناسبة لملفي. شكراً.",
  ] : [
    "Bonjour, je souhaite contacter le cabinet de Maître Abderrazak Errouissi au sujet d’un dossier immobilier.",
    name ? `Nom : ${name.trim()}` : "",
    label ? `Sujet du dossier : ${label}` : "",
    phone ? `Téléphone : ${normalizePhone(phone)}` : "",
    "Je souhaite connaître les possibilités de rendez-vous et les documents utiles à mon dossier. Merci.",
  ];
  return `${firm.whatsappUrl}?text=${encodeURIComponent(lines.filter(Boolean).join("\n"))}`;
}
