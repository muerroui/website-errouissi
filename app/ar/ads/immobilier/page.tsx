import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpLeft, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { ImmobilierLeadForm } from "@/components/ads/ImmobilierLeadForm";
import { propertyWhatsAppUrl, type PropertyTopic } from "@/lib/ads-immobilier";
import { firm, siteUrl } from "@/lib/site";
import styles from "@/app/ads/immobilier/landing.module.css";

const title = "محامٍ في المنازعات العقارية و نزاعات الاراضي الفلاحية | الأستاذ عبد الرزاق الرويسي";
const description = "نزاع حول عقار أو أرض فلاحية؟ مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض (المحمدية)، ممارس في قضايا التحفيظ، التركات، والنزاعات العقارية منذ 1992.";

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
  { question: "هل ينوب المكتب في النزاعات العقارية خارج دائرة المحمدية؟", answer: "نعم. ينوب المكتب ويترافع أمام المحاكم الابتدائية ومحاكم الاستئناف بالدار البيضاء والرباط، وكافة محاكم المملكة ومحكمة النقض، خاصة في النزاعات العقارية المعقدة وقضايا التحفيظ." },
  { question: "ما هي المعطيات الضرورية خلال التواصل الأول؟", answer: "يُستحسن بيان طبيعة العقار (محفظ، في طور التحفيظ، أو غير محفظ)، موضوع النزاع، وأي استدعاء لجلسة أو إنذار أو تبليغ توصلتم به لتدارك أي أجل قانوني وشيك." },
  { question: "هل يلزم توفير كافة الوثائق قبل حجز الموعد؟", answer: "يكفي حصر المعطيات الأساسية، على أن تُحضر في الموعد وثائق الملكية المتوفرة (رسم عقاري، شهادة ملكية، رسم ملكية عدلي، عقد بيع، أو إراثة) للتدقيق القانوني المباشر." },
  { question: "كيف يتم تحديد أتعاب الملف العقاري؟", answer: "تُحدد الأتعاب بالاتفاق وفقاً لتعقيد المسطرة، حجم الوثائق، والمصالح المتنازع عليها، مع توثيق نطاق الإنابة طبقاً لقانون المحاماة." },
];

function ContactButtons({ position, light = false, compact = false }: { position: string; light?: boolean; compact?: boolean }) {
  return (
    <div className={styles.actions}>
      <a href={`tel:${firm.telephone}`} data-contact-position={position} aria-label={compact ? "اتصلوا بالمكتب" : undefined} className={`${styles.button} ${light ? styles.darkButton : styles.goldButton}`}>
        <Phone size={20} aria-hidden="true" />{compact ? "اتصال بالمكتب" : "اتصلوا بالمكتب"}
      </a>
      <a href={propertyWhatsAppUrl()} data-contact-position={position} aria-label={compact ? "تواصلوا عبر واتساب" : undefined} className={`${styles.button} ${light ? styles.paperSecondary : styles.secondaryButton}`}>
        <MessageCircle size={21} aria-hidden="true" />{compact ? "واتساب" : "تواصلوا عبر واتساب"}
      </a>
    </div>
  );
}

export default function PropertyCampaignPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "LegalService",
    "@id": `${siteUrl}/#cabinet`, name: "مكتب الأستاذ عبد الرزاق الرويسي",
    url: siteUrl, telephone: firm.telephone, foundingDate: firm.founded,
    address: { "@type": "PostalAddress", streetAddress: firm.address.street, addressLocality: firm.address.city, postalCode: firm.address.postalCode, addressCountry: "MA" },
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
          <a className={styles.headerPhone} href={`tel:${firm.telephone}`} data-contact-position="header" aria-label={`اتصلوا بالمكتب: ${firm.displayTelephone}`}>
            <Phone size={18} aria-hidden="true" /><span dir="ltr">{firm.displayTelephone}</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h1 id="hero-heading">محامٍ في قضايا العقار<br /><span>والتحفيظ بالمغرب</span></h1>
              <p className={styles.heroQuestion}>نزاع حول ملكية عقار، تحفيظ، أو أرض فلاحية؟</p>
              <p className={styles.heroDescription}>من قضايا التحفيظ والتعرضات إلى قسمة التركات وتصفية الأراضي الفلاحية، ابدؤوا بدراسة ملفكم مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض.</p>
              <ContactButtons position="hero" />
              <p className={styles.directNumber}>للاتصال مباشرة: <a href={`tel:${firm.telephone}`} data-contact-position="hero_number" dir="ltr">{firm.displayTelephone}</a></p>
              <div className={styles.heroEvidence}>
                <p>ممارسة قانونية وترافع منذ <bdi>1992</bdi></p>
                <p>مقر المكتب بالمحمدية · نيابة وترافع أمام كافة محاكم المملكة</p>
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
              <figcaption>مشهد توضيحي مولّد، لا يمثل المكتب أو ملفاً حقيقياً.</figcaption>
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
              <p>يرجى الاتصال لتحديد موعد.</p>
              <a className={styles.textLink} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${firm.address.street}, ${firm.address.city}, Morocco`)}`} target="_blank" rel="noopener noreferrer">العنوان على خرائط Google <ArrowUpLeft size={18} aria-hidden="true" /></a>
              <a className={styles.officePhone} href={`tel:${firm.telephone}`} dir="ltr" data-contact-position="office">{firm.displayTelephone}</a>
            </aside>
          </div>
        </section>

        <section className={`${styles.container} ${styles.processSection}`} aria-labelledby="process-heading">
          <div className={styles.processIntro}><h2 id="process-heading">من الاتصال الأولي<br />إلى مباشرة الإجراءات القانونية.</h2><p>مسار مهني واضح في احترام تام لأخلاقيات المهنة والسر المهني.</p></div>
          <ol className={styles.processList}>
            <li><span aria-hidden="true">1</span><div><h3>عرض عناصر النزاع</h3><p>اتصال هاتفي أو إرسال ملخص موجز بموضوع العقار والنزاع والمركز القانوني.</p></div></li>
            <li><span aria-hidden="true">2</span><div><h3>تحديد الموعد ودراسة الوثائق</h3><p>فحص الرسوم العقارية أو العدلية، الوثائق الثبوتية، والآجال القانونية بالمكتب.</p></div></li>
            <li><span aria-hidden="true">3</span><div><h3>رسم الخطة الإجرائية وتحديد الأتعاب</h3><p>تحديد مسطرة الترافع أو الإجراء التحفظي المناسب والاتفاق على الأتعاب بشفافية.</p></div></li>
          </ol>
        </section>

        <section className={`${styles.container} ${styles.faqSection}`} aria-labelledby="faq-heading">
          <h2 id="faq-heading">قبل التواصل<br />مع المكتب.</h2>
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
