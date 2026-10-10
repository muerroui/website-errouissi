import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { ReactNode } from "react";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

type LayoutProps = { children: ReactNode; params: Promise<{ lang: string }> };

const defaults: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Avocat à Mohammedia depuis 1992 | Maître Errouissi",
    description: "Maître Abderrazak Errouissi, avocat à Mohammedia depuis 1992. Foncier rural, terres agricoles, immobilier et successions partout au Maroc.",
  },
  ar: {
    title: "محامٍ بهيئة الدار البيضاء بالمحمدية منذ 1992 | الأستاذ عبد الرزاق الرويسي",
    description: "الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء يمارس بالمحمدية منذ 1992 (مقبول لدى محكمة النقض). تجربة راسخة في قضايا العقار، والأراضي الفلاحية، وأراضي تعاونيات الإصلاح الزراعي، وقسمة التركات بالمغرب.",
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const copy = defaults[lang];
  return {
    metadataBase: new URL(siteUrl),
    title: { default: copy.title, template: `%s | ${lang === "ar" ? "مكتب الرويسي" : "Cabinet Errouissi"}` },
    description: copy.description,
    alternates: { canonical: `/${lang}`, languages: { "fr-MA": "/fr", "ar-MA": "/ar", "x-default": "/fr" } },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_MA" : "fr_MA",
      alternateLocale: lang === "ar" ? ["fr_MA"] : ["ar_MA"],
      url: `/${lang}`,
      siteName: "Cabinet Errouissi",
      title: copy.title,
      description: copy.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang === "ar" ? "ar-MA" : "fr-MA"} dir={lang === "ar" ? "rtl" : "ltr"} data-scroll-behavior="smooth">
      <head><JsonLd locale={lang} /></head>
      <body>
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
        <FloatingWhatsApp locale={lang} />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QKRLHX88W9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QKRLHX88W9');
          gtag('config', 'G-Q8VVZ5F10M');
        `}
      </Script>
      <Script id="google-analytics-lead-events" strategy="afterInteractive">
        {`
          document.addEventListener('click', function (event) {
            var link = event.target instanceof Element
              ? event.target.closest('a[href]')
              : null;

            if (!link || typeof window.gtag !== 'function') return;

            var href = link.getAttribute('href') || '';
            var eventName = href.indexOf('tel:') === 0
              ? 'phone_click'
              : href.indexOf('https://wa.me/') === 0
                ? 'whatsapp_click'
                : null;

            if (!eventName) return;

            window.gtag('event', eventName, {
              event_category: 'lead',
              link_url: link.href,
              page_location: window.location.href,
              page_language: document.documentElement.lang
            });
          });
        `}
      </Script>
    </html>
  );
}
