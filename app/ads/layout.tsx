import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { CampaignAnalytics } from "@/components/ads/CampaignAnalytics";
import { siteUrl } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: false, follow: true },
};

// Independent root layout: the campaign does not inherit the editorial site's menu.
export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar-MA" dir="rtl" data-scroll-behavior="smooth">
      <body>{children}<CampaignAnalytics /></body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-QKRLHX88W9" strategy="afterInteractive" />
      <Script id="campaign-google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QKRLHX88W9');
        gtag('config', 'G-Q8VVZ5F10M');
      `}</Script>
    </html>
  );
}
