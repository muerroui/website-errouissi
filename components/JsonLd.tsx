import { firm, siteUrl, yearsExperience } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const descriptions: Record<Locale, string> = {
  fr: "Avocat au Barreau de Casablanca agréé près la Cour de Cassation, établi à Mohammedia depuis 1992 : droit immobilier, foncier rural, successions, droit fiscal, administratif, médiation et accompagnement des MRE au Maroc.",
  ar: "مكتب الأستاذ عبد الرزاق الرويسي للمحاماة بالمحمدية (هيئة المحامين بالدار البيضاء ومقبول لدى محكمة النقض منذ 1992)، متخصص في منازعات التحفيظ العقاري، وتصفية التركات والمواريث، والوساطة، ومواكبة مغاربة العالم، وقضايا الأراضي الفلاحية والضرائب بالمغرب.",
};

export function JsonLd({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const data = {
    "@context": "https://schema.org",
    "@type": ["Attorney", "LegalService", "LocalBusiness"],
    "@id": `${siteUrl}/${locale}#cabinet`,
    name: firm.name,
    alternateName: isAr ? "مكتب الأستاذ عبد الرزاق الرويسي للمحاماة" : firm.shortName,
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}${firm.defaultOgImage}`,
    description: descriptions[locale],
    foundingDate: firm.founded,
    slogan: isAr
      ? `أكثر من ${yearsExperience} سنة من الممارسة القانونية الرصينة`
      : `Plus de ${yearsExperience} ans d'expérience juridique`,
    telephone: firm.telephone,
    email: firm.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      postalCode: firm.address.postalCode,
      addressCountry: firm.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: firm.geo.latitude,
      longitude: firm.geo.longitude,
    },
    hasMap: firm.googleReviewsUrl,
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:30",
    }],
    memberOf: [
      {
        "@type": "Organization",
        name: isAr ? "هيئة المحامين بالدار البيضاء" : "Barreau de Casablanca",
      },
      {
        "@type": "Organization",
        name: isAr ? "محكمة النقض بالرباط" : "Cour de Cassation du Royaume du Maroc",
      },
    ],
    areaServed: [
      "Mohammédia",
      "Aïn Harrouda",
      "Benslimane",
      "Bouznika",
      "Casablanca",
      "Bouskoura",
      "Témara",
      "Rabat",
      "Salé",
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
      { "@type": "ContactPoint", email: firm.email, contactType: "customer service", availableLanguage: ["French", "Arabic", "English"], areaServed: "MA" },
    ],
    employee: {
      "@type": "Person",
      "@id": `${siteUrl}/${locale}#avocat`,
      name: isAr ? "الأستاذ عبد الرزاق الرويسي" : "Maître Abderrazak Errouissi",
      alternateName: isAr ? "Maître Abderrazak Errouissi" : "الأستاذ عبد الرزاق الرويسي",
      jobTitle: isAr
        ? "محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض"
        : "Avocat au Barreau de Casablanca, agréé près la Cour de Cassation",
      memberOf: {
        "@type": "Organization",
        name: isAr ? "هيئة المحامين بالدار البيضاء" : "Barreau de Casablanca",
      },
      knowsAbout: isAr
        ? ["القانون العقاري", "العقار الفلاحي", "الملكية العدلية", "الأراضي السلالية", "الأراضي الفلاحية", "أراضي تعاونيات الإصلاح الزراعي", "الشياع", "الميراث والتركات", "القانون الضريبي", "القانون الإداري", "الوساطة القانونية", "مواكبة مغاربة العالم", "التحكيم"]
        : ["Droit immobilier", "Droit foncier rural", "Melkiya", "Terres Soulaliyates", "Terres agricoles", "Terres des coopératives de la réforme agraire", "Indivision", "Successions", "Fiscalité", "Droit administratif", "Médiation", "Accompagnement juridique MRE", "Arbitrage"],
    },
    sameAs: [firm.socialLinks.linkedin, firm.socialLinks.facebook, firm.googleReviewsUrl],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
