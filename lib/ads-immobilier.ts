import { firm } from "@/lib/site";

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

export function normalizePhone(value: string) {
  return value.trim().replace(/[٠-٩۰-۹]/g, (digit) => {
    const code = digit.charCodeAt(0);
    return String(code - (code >= 0x06f0 ? 0x06f0 : 0x0660));
  });
}

export function propertyWhatsAppUrl(name?: string, topic?: PropertyTopic, phone?: string) {
  const label = propertyTopics.find((entry) => entry.value === topic)?.label;
  const lines = [
    "السلام عليكم، أرغب في التواصل مع مكتب الأستاذ عبد الرزاق الرويسي بخصوص ملف عقاري.",
    name ? `الاسم: ${name.trim()}` : "",
    label ? `موضوع الملف: ${label}` : "",
    phone ? `رقم التواصل: ${normalizePhone(phone)}` : "",
    "أود معرفة إمكانية تحديد موعد والوثائق المناسبة لملفي. شكراً.",
  ].filter(Boolean);
  return `${firm.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
}
