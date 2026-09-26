import { firm, siteUrl } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const descriptions: Record<Locale, string> = {
  fr: "Avocat spécialisé en droit immobilier, conflits de succession, arbitrage et litiges fonciers. Services pour particuliers, entreprises et agriculteurs au Maroc.",
  ar: "مكتب الأستاذ عبد الرزاق الرويسي للمحاماة بالمحمدية، متخصص في القانون العقاري ونزاعات الميراث والتحكيم والمنازعات العقارية، ويقدم خدماته للأفراد والمقاولات والفلاحين في المغرب.",
};

export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "@id": `${siteUrl}/${locale}#cabinet`,
    name: firm.name,
    alternateName: locale === "ar" ? "مكتب الأستاذ عبد الرزاق الرويسي للمحاماة" : firm.shortName,
    url: `${siteUrl}/${locale}`,
    description: descriptions[locale],
    foundingDate: firm.founded,
    slogan: locale === "ar" ? "خبرة قانونية لأكثر من 32 سنة" : "Plus de 32 ans d'expérience juridique",
    telephone: firm.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      postalCode: firm.address.postalCode,
      addressCountry: firm.address.country,
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=127%20Boulevard%20de%20Palestine%2C%20Mohammedia%2028830",
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:30",
    }],
    areaServed: [
      "Mohammédia", "Casablanca", "Rabat", "Fès", "Marrakech", "Tanger", "Kénitra", "Bouskoura", "Benslimane",
      { "@type": "Country", name: "Maroc" },
    ],
    knowsLanguage: ["fr", "ar", "en"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Parking sur place", value: true },
      { "@type": "LocationFeatureSpecification", name: "Accessible en fauteuil roulant", value: true },
    ],
    contactPoint: [
      { "@type": "ContactPoint", telephone: firm.telephone, contactType: "customer service", availableLanguage: ["French", "Arabic", "English"], areaServed: "MA" },
      { "@type": "ContactPoint", telephone: firm.whatsappNumber, url: firm.whatsappUrl, contactType: "WhatsApp", availableLanguage: ["French", "Arabic", "English"], areaServed: "MA" },
    ],
    employee: {
      "@type": "Person",
      name: "Maître Abderrazak Errouissi",
      jobTitle: locale === "ar" ? "محام" : "Avocat",
      knowsAbout: ["Droit immobilier", "Droit foncier rural", "Terres agricoles", "Terres Soulaliyates", "Indivision", "Successions", "Fiscalité", "Droit administratif", "Arbitrage"],
    },
    sameAs: [firm.socialLinks.linkedin, firm.socialLinks.facebook],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
