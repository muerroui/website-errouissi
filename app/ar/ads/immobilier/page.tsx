import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpLeft, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { ImmobilierLeadForm } from "@/components/ads/ImmobilierLeadForm";
import { propertyWhatsAppUrl, type PropertyTopic } from "@/lib/ads-immobilier";
import { firm, siteUrl } from "@/lib/site";
import styles from "@/app/ads/immobilier/landing.module.css";

const title = "محامي عقاري بالمغرب | الأستاذ عبد الرزاق الرويسي";
const description = "ملف عقاري أو نزاع حول أرض؟ تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية، ممارسة منذ 1992 في العقار والتحفيظ والأراضي الفلاحية. اتصال أو واتساب.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/ads/immobilier" },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: "/ar/ads/immobilier", siteName: "Cabinet Errouissi", locale: "ar_MA", type: "website" },
};

const issues: { topic: PropertyTopic; title: string; text: string }[] = [
  { topic: "property", title: "نزاع حول ملكية عقار", text: "حقوق الملكية، حدود العقار أو الاستغلال دون اتفاق." },
  { topic: "rural", title: "أرض فلاحية أو عقار قروي", text: "ملفات الأراضي الفلاحية، الملكية والنزاعات العقارية بالمجال القروي." },
  { topic: "inheritance", title: "عقار موروث بين عدة ورثة", text: "الشياع، القسمة والخلافات المتعلقة باستغلال العقار الموروث." },
  { topic: "registration", title: "تحفيظ عقاري أو تعرض", text: "مواكبة ملف التحفيظ ودراسة التعرضات والوثائق المرتبطة به." },
  { topic: "lease", title: "نزاع كراء أو طلب إفراغ", text: "دراسة عقد الكراء، المستحقات والنزاع بين المكري والمكتري." },
  { topic: "transaction", title: "بيع أو شراء عقار", text: "فحص الوضعية القانونية والوثائق قبل اتخاذ القرار." },
];

const faqs = [
  { question: "هل يمكن التواصل بشأن عقار خارج المحمدية؟", answer: "المكتب يوجد بالمحمدية، ويتابع ملفات بالدار البيضاء وبنسليمان والشاوية، وفي مناطق أخرى بالمغرب حسب طبيعة الملف. اتصلوا لعرض موقع العقار وموضوع النزاع وتحديد إمكانية المواكبة." },
  { question: "ما المعلومات المفيدة في أول تواصل؟", answer: "اذكروا موقع العقار، موضوع الخلاف، والمرحلة التي وصل إليها الملف. إذا توصلتم باستدعاء أو إشعار يتضمن أجلاً، اذكروا ذلك عند التواصل. يحدد المكتب لاحقاً الوثائق المناسبة لحالتكم." },
  { question: "هل يلزم توفر جميع الوثائق لطلب موعد؟", answer: "يمكنكم طلب موعد بما يتوفر لديكم من معلومات. عند الاتفاق على الموعد، يوضح المكتب الوثائق التي ينبغي إحضارها، مثل عقد الملكية أو الرسم العقاري أو وثائق الإراثة بحسب موضوع الملف." },
  { question: "كيف تُحدَّد أتعاب المواكبة؟", answer: "تُناقش الأتعاب مباشرة مع المكتب بعد التعرف على طبيعة الملف والعمل المطلوب. التواصل عبر هذه الصفحة لا يشكل اتفاقاً على الأتعاب أو قبولاً للتوكيل، ولا يتضمن وعداً بنتيجة." },
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
              <h1 id="hero-heading">محامي عقاري<br /><span>بالمغرب</span></h1>
              <p className={styles.heroQuestion}>نزاع حول أرض أو عقار؟</p>
              <p className={styles.heroDescription}>من الملكية والتحفيظ إلى الأراضي الفلاحية والعقار الموروث، ابدؤوا بمناقشة ملفكم مع مكتب الأستاذ عبد الرزاق الرويسي.</p>
              <ContactButtons position="hero" />
              <p className={styles.directNumber}>للاتصال مباشرة: <a href={`tel:${firm.telephone}`} data-contact-position="hero_number" dir="ltr">{firm.displayTelephone}</a></p>
              <div className={styles.heroEvidence}>
                <p>ممارسة مهنية منذ <bdi>1992</bdi></p>
                <p>مكتب بالمحمدية · مواكبة بالمغرب حسب الملف</p>
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
              <h2 id="lawyer-heading">خبرة في العقار.<br />ومعرفة بواقع الأرض.</h2>
              <p className={styles.lawyerName}>الأستاذ عبد الرزاق الرويسي</p>
              <p className={styles.lawyerBody}>محامٍ يمارس منذ 1992، مع عناية خاصة بالملفات العقارية القروية، والأراضي الفلاحية، والتحفيظ العقاري والنزاعات المرتبطة بالعقار الموروث.</p>
              <p className={styles.lawyerBody}>تبدأ المواكبة بفهم الوقائع وفحص الوثائق، ثم مناقشة الخيارات المناسبة لملفكم. لا توجد نتيجة مضمونة؛ توجد دراسة قانونية لكل حالة.</p>
              <a href={`tel:${firm.telephone}`} data-contact-position="lawyer" className={styles.textLink}>ناقشوا ملفكم مع المكتب <ArrowLeft size={20} aria-hidden="true" /></a>
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
          <div className={styles.processIntro}><h2 id="process-heading">من أول اتصال<br />إلى فهم أوضح لملفكم.</h2><p>مسار بسيط، دون التزام بالتوكيل بمجرد التواصل.</p></div>
          <ol className={styles.processList}>
            <li><span aria-hidden="true">1</span><div><h3>اعرضوا موضوع الملف</h3><p>اتصلوا أو أرسلوا رسالة موجزة عن العقار والنزاع وموقعه.</p></div></li>
            <li><span aria-hidden="true">2</span><div><h3>حدّدوا موعداً والوثائق اللازمة</h3><p>يناقش المكتب معكم طريقة اللقاء وما ينبغي تحضيره.</p></div></li>
            <li><span aria-hidden="true">3</span><div><h3>ناقشوا الخيارات والأتعاب</h3><p>بعد دراسة الوقائع والوثائق، تُناقش الخطوات الممكنة وشروط المواكبة.</p></div></li>
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
            <div><h2 id="final-heading">ابدؤوا بالحديث<br />عن ملفكم.</h2><p>اذكروا موضوع الملف وموقع العقار. وإذا كان هناك أجل أو استدعاء، أخبروا المكتب به عند التواصل.</p></div>
            <div><ContactButtons position="final" light /><p className={styles.finalNote}>الاتصال أو رسالة واتساب لا يُعدّان قبولاً للتوكيل.</p></div>
          </div>
        </section>
      </main>

      <footer className={`${styles.container} ${styles.footer}`}>
        <div><p>مكتب الأستاذ عبد الرزاق الرويسي</p><span>المحمدية · ممارسة مهنية منذ 1992</span></div>
        <div className={styles.footerLinks}><a href="/ar">الموقع الرئيسي</a><a href="/ads/immobilier" hrefLang="fr-MA" lang="fr">Français</a></div>
        <p className={styles.disclaimer}>محتوى هذه الصفحة للتعريف بخدمات المكتب، ولا يحل محل الاستشارة ودراسة الوثائق. لا تضمن أي مواكبة نتيجة محددة.</p>
      </footer>

      <nav className={styles.mobileContact} aria-label="تواصل سريع مع المكتب"><ContactButtons position="mobile_bar" compact /></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
