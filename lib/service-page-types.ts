import type { Locale } from "@/lib/i18n";

export type ServiceKey = "immobilier" | "succession" | "foncierRural";

export type ServiceLocaleContent = {
  slug: string;
  seo: { title: string; description: string };
  eyebrow: string;
  h1: string;
  lead: string;
  summary: string[];
  servicesTitle: string;
  servicesIntro: string;
  services: Array<{ title: string; text: string }>;
  processTitle: string;
  processIntro: string;
  process: Array<{ title: string; text: string }>;
  faqTitle: string;
  faqIntro: string;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ key: ServiceKey; label: string }>;
  ctaTitle: string;
  ctaText: string;
};

export type ServicePageDefinition = {
  key: ServiceKey;
  index: string;
  content: Record<Locale, ServiceLocaleContent>;
};
