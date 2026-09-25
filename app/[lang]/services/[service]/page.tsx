import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { isLocale } from "@/lib/i18n";
import { buildServiceMetadata } from "@/lib/service-metadata";
import { getServiceBySlug, servicePages } from "@/lib/services";

type PageProps = { params: Promise<{ lang: string; service: string }> };

export function generateStaticParams() {
  return (["fr", "ar"] as const).flatMap((lang) =>
    Object.values(servicePages)
      .filter((page) => !(lang === "fr" && page.key === "foncierRural"))
      .map((page) => ({ lang, service: page.content[lang].slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, service } = await params;
  if (!isLocale(lang)) return {};
  const page = getServiceBySlug(lang, decodeURIComponent(service));
  if (!page) return {};
  return buildServiceMetadata(lang, page);
}

export default async function ServicePage({ params }: PageProps) {
  const { lang, service } = await params;
  if (!isLocale(lang)) notFound();
  const page = getServiceBySlug(lang, decodeURIComponent(service));
  if (!page) notFound();
  return <ServiceLandingPage locale={lang} page={page} />;
}
