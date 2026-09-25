import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { buildServiceMetadata } from "@/lib/service-metadata";
import { foncierRuralPage } from "@/lib/services/foncier-rural";

type PageProps = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return [{ lang: "fr" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "fr") return {};
  return buildServiceMetadata("fr", foncierRuralPage);
}

export default async function FoncierRuralPage({ params }: PageProps) {
  const { lang } = await params;
  if (lang !== "fr") notFound();
  return <ServiceLandingPage locale="fr" page={foncierRuralPage} />;
}
