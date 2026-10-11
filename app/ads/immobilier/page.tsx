import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { ImmobilierLeadForm } from "@/components/ads/ImmobilierLeadForm";
import { GoogleHeroBadge, GoogleReviewsSection } from "@/components/ads/GoogleSocialProof";
import { propertyWhatsAppUrl, type PropertyTopic } from "@/lib/ads-immobilier";
import { firm, siteUrl } from "@/lib/site";
import styles from "./landing.module.css";

const title = "Avocat immobilier au Maroc | Maître Errouissi";
const description = "Litige immobilier, terrain ou bien hérité au Maroc ? Contactez Maître Abderrazak Errouissi à Mohammedia, avocat depuis 1992. Téléphone ou WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ads/immobilier" },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: "/ads/immobilier", siteName: "Cabinet Errouissi", locale: "fr_MA", type: "website" },
};

const issues: { topic: PropertyTopic; title: string; text: string }[] = [
  { topic: "property", title: "Propriété ou limites contestées", text: "Droits de propriété, limites du bien ou occupation sans accord." },
  { topic: "rural", title: "Terre agricole ou foncier rural", text: "Propriété et litiges concernant les terres agricoles et les biens ruraux." },
  { topic: "inheritance", title: "Un bien partagé entre héritiers", text: "Indivision, partage et désaccords sur l’utilisation d’un bien hérité." },
  { topic: "registration", title: "Immatriculation ou opposition", text: "Accompagnement du dossier foncier, étude des oppositions et des pièces." },
  { topic: "lease", title: "Litige locatif ou expulsion", text: "Étude du bail, des loyers dus et du différend entre bailleur et locataire." },
  { topic: "transaction", title: "Vente ou achat immobilier", text: "Examen de la situation juridique et des documents avant votre décision." },
];

const faqs = [
  {
    question: "Pourquoi prendre un premier rendez-vous avec notre cabinet ?",
    answer: "Bénéficiez d'un premier échange personnalisé pour présenter votre situation, obtenir une première orientation juridique et découvrir les démarches envisageables. Notre cabinet vous accueille dans un cadre professionnel et confidentiel.",
  },
  {
    question: "Le cabinet intervient-il pour des litiges partout au Maroc ?",
    answer: "Oui, le cabinet prend en charge les dossiers immobiliers et fonciers dans tout le Maroc, et représente ses clients devant les tribunaux de première instance, les cours d'appel et la Cour de cassation.",
  },
  {
    question: "Le cabinet accompagne-t-il les Marocains résidant à l'étranger (MRE) ?",
    answer: "Oui, le cabinet accompagne les Marocains résidant à l'étranger pour leurs biens immobiliers, immatriculations foncières et successions au Maroc, avec un suivi rigoureux des démarches et pièces requises.",
  },
  {
    question: "Peut-on consulter le cabinet avant d'acheter un bien immobilier ou un terrain ?",
    answer: "Oui, vous pouvez consulter le cabinet avant l'achat afin d'auditer la situation juridique du bien et les documents disponibles, et d'identifier les points de vigilance avant la conclusion de la transaction.",
  },
];

function ContactButtons({ position, light = false, compact = false }: { position: string; light?: boolean; compact?: boolean }) {
  return (
    <div className={styles.actions}>
      <a href={`tel:${firm.telephone}`} data-contact-position={position} aria-label={compact ? "Appeler le cabinet" : undefined} className={`${styles.button} ${light ? styles.darkButton : styles.goldButton}`}>
        <Phone size={20} aria-hidden="true" />{compact ? "Appeler" : "Appeler le cabinet"}
      </a>
      <a href={propertyWhatsAppUrl(undefined, undefined, undefined, "fr")} data-contact-position={position} aria-label={compact ? "Contacter le cabinet sur WhatsApp" : undefined} className={`${styles.button} ${light ? styles.paperSecondary : styles.secondaryButton}`}>
        <MessageCircle size={21} aria-hidden="true" />{compact ? "WhatsApp" : "Écrire sur WhatsApp"}
      </a>
    </div>
  );
}

export default function FrenchPropertyCampaignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#cabinet`,
    name: "Cabinet de Maître Abderrazak Errouissi",
    url: siteUrl,
    telephone: firm.telephone,
    foundingDate: firm.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.street,
      addressLocality: firm.address.city,
      postalCode: firm.address.postalCode,
      addressCountry: "MA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "24",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <div className={styles.page} lang="fr-MA" dir="ltr">
      <a className={styles.skipLink} href="#main">Aller au contenu</a>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="/fr" className={styles.brand} aria-label="Cabinet de Maître Errouissi — site principal">
            <span>Maître Abderrazak Errouissi</span>
            <span className={styles.brandDetail}>Cabinet d’avocat · Mohammedia · Depuis 1992</span>
          </a>
          <a className={styles.headerPhone} href={`tel:${firm.telephone}`} data-contact-position="header" aria-label={`Appeler le cabinet au ${firm.displayTelephone}`}>
            <Phone size={18} aria-hidden="true" /><span dir="ltr">{firm.displayTelephone}</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <GoogleHeroBadge locale="fr" />
              <h1 id="hero-heading">Avocat immobilier<br /><span>au Maroc</span></h1>
              <p className={styles.heroQuestion}>Un terrain ou un bien en litige ?</p>
              <p className={styles.heroDescription}>Propriété, immatriculation, terre agricole ou bien hérité : commencez par discuter de votre dossier avec le cabinet de Maître Abderrazak Errouissi.</p>
              <ContactButtons position="hero" />
              <p className={styles.directNumber}>Appelez directement : <a href={`tel:${firm.telephone}`} data-contact-position="hero_number" dir="ltr">{firm.displayTelephone}</a></p>
              <div className={styles.heroEvidence}>
                <p>Avocat depuis <bdi>1992</bdi> · <bdi>5,0/5</bdi> sur Google (<bdi>24</bdi> avis vérifiés)</p>
                <p>Cabinet à Mohammedia · Accompagnement au Maroc selon le dossier</p>
              </div>
            </div>
            <div id="consultation" className={styles.consultation}>
              <ImmobilierLeadForm locale="fr" />
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.issuesSection}`} aria-labelledby="issues-heading">
          <div className={styles.sectionIntro}>
            <h2 id="issues-heading">Quel est votre<br />dossier immobilier ?</h2>
            <p>Choisissez le sujet le plus proche de votre situation pour préparer votre message. Chaque bien a ses documents, chaque litige ses particularités.</p>
            <figure className={styles.landFigure}>
              <Image src="/images/ads/litige-immobilier-avocat-maroc.webp"
                alt="Illustration sans personne : dossier de litige immobilier, balance de justice et plan de propriété aux limites contestées"
                width={1200} height={800}
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 36vw, 34vw" loading="lazy" />
            </figure>
          </div>
          <div className={styles.issueList}>
            {issues.map((issue) => (
              <a key={issue.topic} href="#consultation" data-case-topic={issue.topic} className={styles.issueRow}>
                <div><h3>{issue.title}</h3><p>{issue.text}</p></div>
                <ArrowUpRight size={24} aria-hidden="true" />
                <span className={styles.srOnly}>— Choisir ce sujet pour contacter le cabinet</span>
              </a>
            ))}
          </div>
        </section>

        <GoogleReviewsSection locale="fr" />

        <section className={styles.lawyerSection} aria-labelledby="lawyer-heading">
          <div className={`${styles.container} ${styles.lawyerGrid}`}>
            <div>
              <h2 id="lawyer-heading">L’expérience juridique.<br />La connaissance du terrain.</h2>
              <p className={styles.lawyerName}>Maître Abderrazak Errouissi</p>
              <p className={styles.lawyerBody}>Avocat depuis 1992, avec une attention particulière au foncier rural, aux terres agricoles, à l’immatriculation foncière et aux litiges concernant les biens hérités.</p>
              <p className={styles.lawyerBody}>L’accompagnement commence par la compréhension des faits et l’examen des documents, puis par une discussion des options adaptées à votre dossier. Aucun résultat n’est garanti : chaque situation fait l’objet d’une étude juridique.</p>
              <a href={`tel:${firm.telephone}`} data-contact-position="lawyer" className={styles.textLink}>Discuter de votre dossier <ArrowRight size={20} aria-hidden="true" /></a>
            </div>
            <aside className={styles.office} aria-label="Adresse du cabinet">
              <MapPin size={27} aria-hidden="true" />
              <h3>À votre écoute à Mohammedia</h3>
              <address>127 Boulevard de Palestine<br />1er étage, au-dessus du Café Montréal<br />Mohammedia, Maroc</address>
              <p>Note 5,0/5 sur Google · 24 avis vérifiés</p>
              <p>Appelez pour convenir d’un rendez-vous.</p>
              <a className={styles.textLink} href={firm.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Voir les avis et l’adresse sur Google Maps <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className={styles.officePhone} href={`tel:${firm.telephone}`} dir="ltr" data-contact-position="office">{firm.displayTelephone}</a>
            </aside>
          </div>
        </section>

        <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="faq-heading">
          <h2 id="faq-heading">Questions fréquentes</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<Plus size={20} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className={styles.finalSection} aria-labelledby="final-heading">
          <div className={`${styles.container} ${styles.finalInner}`}>
            <div><h2 id="final-heading">Parlons de<br />votre dossier.</h2><p>Précisez le sujet et le lieu du bien. Si un délai ou une convocation concerne votre dossier, signalez-le dès le premier contact.</p></div>
            <div><ContactButtons position="final" light /><p className={styles.finalNote}>Un appel ou un message WhatsApp ne vaut pas acceptation du mandat.</p></div>
          </div>
        </section>
      </main>

      <footer className={`${styles.container} ${styles.footer}`}>
        <div><p>Cabinet de Maître Abderrazak Errouissi</p><span>Mohammedia · Avocat depuis 1992</span></div>
        <div className={styles.footerLinks}><a href="/fr">Site principal</a><a href="/ar/ads/immobilier" hrefLang="ar-MA" lang="ar">العربية</a></div>
      </footer>

      <nav className={styles.mobileContact} aria-label="Contacter rapidement le cabinet"><ContactButtons position="mobile_bar" compact /></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
