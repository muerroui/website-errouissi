import type { Locale } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/service-page-types";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type GuideLocaleContent = {
  slug: string;
  seo: { title: string; description: string };
  category: string;
  h1: string;
  lead: string;
  intro: string[];
  takeaways: string[];
  sections: GuideSection[];
  checklistTitle: string;
  checklistIntro: string;
  checklist: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaText: string;
  serviceLabel: string;
  sourcesLabel: string;
  sources: Array<{ label: string; url: string }>;
};

export type GuideDefinition = {
  key: string;
  publishedAt: string;
  updatedAt: string;
  serviceKey: ServiceKey;
  content: Record<Locale, GuideLocaleContent>;
};
