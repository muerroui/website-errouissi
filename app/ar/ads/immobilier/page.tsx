import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpLeft, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { GoogleHeroBadge, GoogleReviewsSection } from "@/components/ads/GoogleSocialProof";
import { ImmobilierLeadForm } from "@/components/ads/ImmobilierLeadForm";
import { propertyWhatsAppUrl, type PropertyTopic } from "@/lib/ads-immobilier";
import { firm, siteUrl } from "@/lib/site";
import styles from "@/app/ads/immobilier/landing.module.css";

const title = "نزاع حول عقار، أرض فلاحية أو تركة موروثة | الأستاذ الرويسي";
const description = "نزاع حول عقار، أرض فلاحية أو تركة موروثة بالمغرب؟ تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ مقبول لدى محكمة النقض ممارس منذ 1992. تواصل فوري عبر واتساب أو الهاتف.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/ads/immobilier" },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: "/ar/ads/immobilier", siteName: "Cabinet Errouissi", locale: "ar_MA", type: "website" },
};

const issues: { topic: PropertyTopic; title: string; text: string }[] = [
  { topic: "property", title: "نزاع حول ملكية عقارية أو استحقاق", text: "دعاوى الاستحقاق، الترامي، نزاعات الحدود، ومنازعات الحيازة والاستغلال دون سند." },
  { topic: "rural", title: "أراضٍ فلاحية وعقارات قروية", text: "تصفية الوضعية القانونية للملكيات الفلاحية، الرسوم العدلية، وأراضي تعاونيات الإصلاح الزراعي." },
  { topic: "inheritance", title: "عقارات شائعة وتركات متنازع عليها", text: "تصفية التركات، قسمة العقارات المشاعة قضائياً أو رضائياً، وإسناد الاستغلال." },
  { topic: "registration", title: "مساطر التحفيظ العقاري والتعرضات", text: "مؤازرة طالبي التحفيظ أو المتعرضين، والتقييدات الاحتياطية أمام المحافظة العقارية وقضاء التحفيظ." },
  { topic: "lease", title: "منازعات الأكرية السكنية والمهنية والتجارية", text: "دعاوى الإفراغ، استيفاء الوجيبة الكرائية، ومساطر القانون 49.16 والقانون 67.12." },
  { topic: "transaction", title: "تدقيق المعاملات والبيوعات العقارية", text: "فحص الشواهد العقارية وسلسلة البيوع قبل التعاقد والتحقق من سلامة الوضعية القانونية." },
];

const faqs = [
  {
    question: "كيف يتم تحديد أتعاب الملف وتكاليف الاستشارة؟",
    answer: "تُحدد الأتعاب بشفافية ووضوح منذ التواصل الأول، بالاتفاق المتبادل وفقاً لطبيعة النزاع، تعقيد الإجراءات والمصالح المتنازع عليها، وطبقاً لأحكام القانون المنظم لمهنة المحاماة. ولا يُباشر أي إجراء دون موافقتكم المسبقة.",
  },
  {
    question: "عقاري يقع في مدينة أخرى بالمغرب: كيف تبدأ المواكبة؟",
    answer: "يقع مقر المكتب بالمحمدية ويتولى القضايا بالدار البيضاء، الرباط ومختلف محاكم المملكة. يمكنكم البدء بالتواصل هاتفياً أو عبر واتساب مع إرسال الوثائق المتوفرة، قبل تحديد موعد بالمكتب أو مباشرة المسطرة القضائية بالدائرة المختصة.",
  },
  {
    question: "هل يمكن التواصل مع المكتب في حال عدم توفر كافة الوثائق؟",
    answer: "نعم بكل تأكيد. حتى وإن كانت وثائقكم غير مكتملة (رسم عقاري غير متوفر، وثائق إراثة ناقصة)، يحدد المكتب معكم منذ التواصل الأول الوثائق الجوهرية الواجب استخراجها من المحافظة العقارية أو المحاكم لمباشرة الإجراءات وحماية حقوقكم.",
  },
  {
    question: "من يتولى الرد على تواصلي وما هو الأجل المعتاد؟",
    answer: "يتولى مكتب الأستاذ عبد الرزاق الرويسي الرد مباشرة على اتصالاتكم ورسائلكم من الاثنين إلى السبت بين 09:00 و19:30. ويتم التفاعل مع طلبكم في أقرب الآجال (عادة خلال ساعتين أثناء أوقات العمل) لتوضيح مسار قضيتكم.",
  },
];

function ContactButtons({ position, light = false, compact = false }: { position: string; light?: boolean; compact?: boolean }) {
  return (
    <div className={styles.actions}>
      <a href={propertyWhatsAppUrl()} data-contact-position={position} aria-label={compact ? "تواصلوا عبر واتساب" : undefined} className={`${styles.button} ${light ? styles.darkButton : styles.goldButton}`}>
        <MessageCircle size={21} aria-hidden="true" />{compact ? "واتساب" : "مراسلة عبر واتساب"}
      </a>
      <a href={`tel:${firm.telephone}`} data-contact-position={position} aria-label={compact ? "اتصلوا بالمكتب" : undefined} className={`${styles.button} ${light ? styles.paperSecondary : styles.secondaryButton}`}>
        <Phone size={20} aria-hidden="true" />{compact ? "اتصال" : "الاتصال بالمكتب"}
      </a>
    </div>
  );
}

export default function PropertyCampaignPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#cabinet`,
    name: "مكتب الأستاذ عبد الرزاق الرويسي",
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
    <div className={styles.page} lang="ar-MA" dir="rtl">
      <a className={styles.skipLink} href="#main">انتقلوا إلى المحتوى</a>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <a href="/ar" className={styles.brand} aria-label="مكتب الأستاذ عبد الرزاق الرويسي — الموقع الرئيسي">
            <span>الأستاذ عبد الرزاق الرويسي</span>
            <span className={styles.brandDetail}>مكتب المحاماة · المحمدية · منذ 1992</span>
          </a>
          <div className={styles.headerActions}>
            <a href="/ads/immobilier" className={styles.langSwitch} hrefLang="fr-MA" lang="fr" aria-label="Passer en version française">
              Français
            </a>
            <a className={styles.headerPhone} href={`tel:${firm.telephone}`} data-contact-position="header" aria-label={`اتصلوا بالمكتب: ${firm.displayTelephone}`}>
              <Phone size={18} aria-hidden="true" /><span dir="ltr">{firm.displayTelephone}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <GoogleHeroBadge locale="ar" />
              <h1 id="hero-heading">نزاع حول عقار، أرض فلاحية<br /><span>أو تركة موروثة؟</span></h1>
              <p className={styles.heroSubtitle}>مكتب محاماة مختص في قضايا العقار والتحفيظ بالمغرب — ممارسة مهنية منذ 1992</p>
              <p className={styles.heroDescription}>نزاعات الملكية، قسمة التركات، الأراضي الفلاحية، أو مساطر التحفيظ: اعرضوا قضيتكم على مكتب الأستاذ عبد الرزاق الرويسي لتشخيص الوضعية وترتيب موعد لدراسة ملفكم.</p>
              <div className={styles.heroPractical}>
                <span>📍 المقر بالمحمدية · مباشرة القضايا بمختلف محاكم المغرب</span>
                <span className={styles.heroPracticalDivider}>·</span>
                <span>🕒 من الاثنين إلى السبت: 09:00–19:30</span>
              </div>
              <ContactButtons position="hero" />
              <p className={styles.directNumber}>للاتصال مباشرة: <a href={`tel:${firm.telephone}`} data-contact-position="hero_number" dir="ltr">{firm.displayTelephone}</a></p>
              <div className={styles.heroEvidence}>
                <p>الأستاذ عبد الرزاق الرويسي · ممارسة مهنية منذ <bdi>1992</bdi> (<bdi>+32</bdi> سنة)</p>
                <p>تقييم <bdi>5,0/5</bdi> على Google Maps · <bdi>24</bdi> تقييماً موثقاً · هيئة المحامين بالدار البيضاء</p>
              </div>
            </div>
            <div id="consultation" className={styles.consultation}>
              <ImmobilierLeadForm />
            </div>
          </div>
        </section>

        <section className={`${styles.container} ${styles.issuesSection}`} aria-labelledby="issues-heading">
          <div className={styles.sectionIntro}>
            <h2 id="issues-heading">ما موضوع<br />ملفكم العقاري؟</h2>
            <p>اختاروا الحالة الأقرب لملفكم لتهيئة الرسالة. لكل عقار وثائقه، ولكل نزاع تفاصيله.</p>
            <figure className={styles.landFigure}>
              <Image
                src="/images/ads/litige-immobilier-avocat-maroc.webp"
                alt="ملف نزاع عقاري مع ميزان العدالة وتصميم يوضح حدود ملكية متنازعاً عليها، دون أشخاص"
                width={1200}
                height={800}
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 36vw, 34vw"
                loading="lazy"
              />
            </figure>
          </div>
          <div className={styles.issueList}>
            {issues.map((issue) => (
              <a key={issue.topic} href="#consultation" data-case-topic={issue.topic} className={styles.issueRow}>
                <div><h3>{issue.title}</h3><p>{issue.text}</p></div>
                <ArrowUpLeft size={24} aria-hidden="true" />
                <span className={styles.srOnly}>— اختاروا هذا الموضوع للتواصل</span>
              </a>
            ))}
          </div>
        </section>

        <GoogleReviewsSection locale="ar" />

        <section className={styles.lawyerSection} aria-labelledby="lawyer-heading">
          <div className={`${styles.container} ${styles.lawyerGrid}`}>
            <div>
              <h2 id="lawyer-heading">خبرة في المادة العقارية.<br />وإلمام بميدان النزاع.</h2>
              <p className={styles.lawyerName}>الأستاذ عبد الرزاق الرويسي</p>
              <p className={styles.lawyerBody}>محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض ممارس منذ 1992، راكم تجربة رصينة في معالجة النزاعات العقارية المعقدة، قضايا التحفيظ، الأراضي الفلاحية، وقسمة التركات.</p>
              <p className={styles.lawyerBody}>ترتكز مؤازرة المكتب على تشخيص دقيق للوثائق والرسوم وتحديد المسطرة القضائية أو التحفظية الأنسب لضمان حقوقكم وصيانتها طبقاً لأحكام القانون.</p>
              <a href={`tel:${firm.telephone}`} data-contact-position="lawyer" className={styles.textLink}>عرض ملفكم على المكتب <ArrowLeft size={20} aria-hidden="true" /></a>
            </div>
            <aside className={styles.office} aria-label="عنوان المكتب">
              <MapPin size={27} aria-hidden="true" />
              <h3>نستقبلكم بالمحمدية</h3>
              <address>127 شارع فلسطين<br />الطابق الأول، فوق مقهى مونتريال<br />المحمدية، المغرب</address>
              <p>تقييم ممتاز 5,0/5 على Google · 24 تقييماً موثقاً</p>
              <p>يرجى الاتصال لتحديد موعد.</p>
              <a className={styles.textLink} href={firm.googleReviewsUrl} target="_blank" rel="noopener noreferrer">الاطلاع على التقييمات ومسار الوصول على Google Maps <ArrowUpLeft size={18} aria-hidden="true" /></a>
              <a className={styles.officePhone} href={`tel:${firm.telephone}`} dir="ltr" data-contact-position="office">{firm.displayTelephone}</a>
            </aside>
          </div>
        </section>

        <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="faq-heading">
          <h2 id="faq-heading">أسئلة شائعة</h2>
          <div className={styles.faqList}>
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<Plus size={20} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className={styles.finalSection} aria-labelledby="final-heading">
          <div className={`${styles.container} ${styles.finalInner}`}>
            <div><h2 id="final-heading">ابدؤوا بعرض<br />ملفكم العقاري.</h2><p>بيّنوا موضوع النزاع وموقع العقار، وأخطروا المكتب فوراً بأي أجل مسطري أو إشعار قضائي جارٍ.</p></div>
            <div><ContactButtons position="final" light /><p className={styles.finalNote}>التواصل الأولي لا ينشئ توكيلاً ولا يرتب مسؤولية مهنية إلا بعد الاتفاق الرسمي.</p></div>
          </div>
        </section>
      </main>

      <footer className={`${styles.container} ${styles.footer}`}>
        <div><p>مكتب الأستاذ عبد الرزاق الرويسي</p><span>المحمدية · ممارسة مهنية منذ 1992</span></div>
        <div className={styles.footerLinks}><a href="/ar">الموقع الرئيسي</a><a href="/ads/immobilier" hrefLang="fr-MA" lang="fr">Français</a></div>
        <p className={styles.disclaimer}>تقدم هذه الصفحة معطيات تعريفية بخدمات المكتب ولا تغني عن الاستشارة القانونية المباشرة ودراسة الوثائق. ولا يشكل أي إجراء ضماناً مسبقاً لنتيجة قضائية محددة.</p>
      </footer>

      <nav className={styles.mobileContact} aria-label="تواصل سريع مع المكتب"><ContactButtons position="mobile_bar" compact /></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
