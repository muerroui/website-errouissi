import Script from "next/script";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { CampaignAnalytics } from "@/components/ads/CampaignAnalytics";

export function CampaignLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={`${locale}-MA`} dir={locale === "ar" ? "rtl" : "ltr"} data-scroll-behavior="smooth">
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
