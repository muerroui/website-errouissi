import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CampaignLayout } from "@/components/ads/CampaignLayout";
import { siteUrl } from "@/lib/site";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: false, follow: true },
};

// Separate root: Arabic campaigns do not inherit the editorial navigation.
export default function ArabicAdsLayout({ children }: { children: ReactNode }) {
  return <CampaignLayout locale="ar">{children}</CampaignLayout>;
}
