import fs from "fs";
import path from "path";
import { chromium } from "playwright-core";
import { servicePages } from "../lib/services";
import { guides } from "../lib/guides";

// Contenu arabe extrait des pages statiques
const homeContentAr = {
  h1: "محامٍ بالمحمدية منذ 1992",
  intro: "أكثر من 32 سنة من الممارسة المهنية في قضايا التحفيظ العقاري، والعقار الفلاحي، وأراضي تعاونيات الإصلاح الزراعي، وتصفية التركات، والمنازعات الجبائية والإدارية بالمغرب.",
  proofTitle: "خبرة قانونية وقضائية تمتد لأكثر من ثلاثة عقود",
  proofText: "يقدم الأستاذ عبد الرزاق الرويسي المشورة القانونية والمؤازرة القضائية للأفراد والشركات والمستغلين الفلاحيين بمنهج تحليلي صارم يراعي خصوصية القواعد الموضوعية والإجرائية لكل ملف.",
  teamTitle: "فريق متكامل يعمل تحت إشرافه المباشر",
  teamText: "يضم المكتب نخبة من المحامين المتعاونين والمساعدين القانونيين المقيدين بهيئة المحامين بالدار البيضاء. وتُعالج كافة القضايا تحت الإشراف والتوجيه المباشر للأستاذ عبد الرزاق الرويسي.",
  servicesTitle: "مجالات ممارسة المكتب واختصاصاته",
  servicesIntro: "الاستشارة القانونية، التفاوض، الوساطة الاتفاقية، التحكيم، والتمثيل والترافع أمام مختلف المحاكم المغربية.",
  services: [
    { title: "القانون العقاري ومساطر التحفيظ", text: "متابعة مطالب التحفيظ، تأسيس الرسوم العقارية، تقييد التصرفات والتشطيبات، دعاوى القسمة وإنهاء الشياع، وحل النزاعات العقارية المعقدة." },
    { title: "تصفية التركات وقسمة المواريث", text: "حصر متروك الهالك، إعداد القسمة الرضائية والقضائية، إنهاء حالة الشياع، وحل النزاعات بين الورثة حول الأصول والعقارات الموروثة." },
    { title: "العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي", text: "رسوم الملكية العدلية (أراضي الملك)، قضايا ومنازعات أراضي تعاونيات الإصلاح الزراعي (حال حياة المستفيدين وبعد وفاتهم)، ونزع الملكية للمنفعة العامة." },
    { title: "القانون الضريبي والمنازعات الجبائية", text: "مؤازرة الملزمين أثناء المراقبة الضريبية، الرد على رسائل التصحيح، الترافع أمام اللجان الضريبية، ومقاضاة الإدارة أمام المحاكم الإدارية." },
    { title: "القانون الإداري والمنازعات العمومية", text: "دعاوى الإلغاء لتجاوز السلطة، دعاوى التعويض والمسؤولية الإدارية للدولة والجماعات الترابية، ومباشرة التظلمات الاستعطافية والرئاسية." },
  ],
  reachTitle: "مكتب محاماة بالمحمدية يباشر القضايا في مختلف محاكم المملكة",
  reachText: "يترافع المكتب ويباشر الإجراءات القضائية خصوصاً في الدار البيضاء، والرباط، وبنسليمان، وفاس، ومراكش، وطنجة، والقنيطرة، ومختلف الدوائر القضائية بالمغرب.",
  finalTitle: "تواصلوا مع المكتب بشأن قضيتكم",
  finalText: "تفضلوا بعرض عناصر ملفكم بإيجاز عبر الهاتف أو واتساب لترتيب موعد استشارة قانونية بمقر المكتب.",
};

const contactContentAr = {
  h1: "الاتصال بمكتب المحاماة بالمحمدية",
  lead: "يمكنكم عرض عناصر قضيتكم بإيجاز وحجز موعد للاستشارة مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء ممارس منذ سنة 1992 ومقبول لدى محكمة النقض.",
  address: "127 شارع فلسطين، الطابق الأول، فوق مقهى مونتريال، المحمدية 28830",
  hours: "من الاثنين إلى السبت، من 09:00 إلى 19:30",
  access: "موقف سيارات بالمكان وولوج ميسر لذوي الحركية المحدودة",
  area: "المحمدية، الدار البيضاء، الرباط، وكافة الدوائر القضائية ومحاكم المملكة",
  prepareTitle: "إعداد ملف الاستشارة القانونية الأولى",
  prepareIntro: "يُرجى إعداد عناصر الملف مسبقاً لتمكين المكتب من دراسة الوقائع بدقة، وتحديد درجات الاستعجال والإجراءات التحفظية اللازمة.",
  prepare: [
    { title: "عرض التسلسل الزمني للوقائع", text: "بيان تواريخ النزاع بدقة، أسماء وصفات الأطراف المعنية، والمطالب أو الأهداف القانونية المنشودة." },
    { title: "حصر الوثائق والمستندات الثبوتية", text: "شهادات الملكية العقارية، عقود التفويت والصلح، الرسوم العدلية، الأحكام والقرارات القضائية، والمراسلات الرسمية ذات الصلة." },
    { title: "بيان الآجال القانونية والإجراءات الجارية", text: "الإشارة فوراً إلى أي استدعاء لجلسة، تبليغ إنذار، إشعار ضريبي، أو أجل قانوني وشيك لتفادي سقوط الحقوق أو فوات مواعيد الطعن." },
  ],
  mapTitle: "مقر المكتب في قلب المحمدية",
  mapText: "يقع مقر المكتب بشارع فلسطين، الطابق الأول (فوق مقهى مونتريال)، بموقع استراتيجي يسهل الوصول إليه من المحمدية ومحور الدار البيضاء–الرباط، مع توفر مرآب للسيارات.",
  faqTitle: "الأسئلة الشائعة حول الاستشارة وحجز المواعيد",
  faqs: [
    { question: "كيف يتم حجز موعد استشارة لدى المكتب؟", answer: "يمكنكم الاتصال مباشرة بالرقم 05 23 28 32 58 أو المراسلة عبر واتساب، مع بيان موضوع النزاع وأي آجال قانونية وشيكة لتحديد موعد ملائم لدراسة الملف." },
    { question: "ما الوثائق والمستندات الواجب إحضارها للاستشارة الأولى؟", answer: "يتعين إحضار أصول أو نسخ من الرسوم والعقود الرسمية أو العرفية، الشواهد العقارية، القرارات أو الأحكام القضائية، وكافة المراسلات والإنذارات المتعلقة بالنزاع لتشخيص الموقف بدقة." },
    { question: "هل يمارس المكتب ويترافع أمام محاكم الدار البيضاء وباقي المدن؟", answer: "نعم. يقع مقر المكتب بالمحمدية التابعة ترابياً لهيئة المحامين بالدار البيضاء، ويمارس مهام النيابة والترافع أمام المحاكم الابتدائية ومحاكم الاستئناف والمحاكم التجارية والإدارية بالدار البيضاء، الرباط، ومحكمة النقض وكافة محاكم المملكة." },
    { question: "كيف يتم تحديد الأتعاب القانونية ومصاريف الدعوى؟", answer: "تُحدد الأتعاب بالاتفاق وفقاً لأحكام القانون رقم 28.08 المنظم لمهنة المحاماة، بناءً على طبيعة النزاع، تعقيد الإجراءات، الجهد المستغرق، والمصالح المتنازع عليها، بكل شفافية ووضوح." },
    { question: "هل مقر المكتب مهيأ وميسر لذوي الحركية المحدودة؟", answer: "نعم، مدخل العمارة مهيأ وميسر، مع توفر أماكن لركن السيارات بمحيط المقر. ويُفضل إشعار المكتب مسبقاً لتيسير الاستقبال على أفضل وجه." },
  ],
};

const guidesIndexContentAr = {
  h1: "الإحاطة بالأحكام القانونية والمساطر القضائية قبل مباشرة الإجراءات",
  lead: "دراسات ومذكرات توجيهية عملية في منازعات التحفيظ، أراضي تعاونيات الإصلاح الزراعي والأراضي المشاعة، التركات، القضاء الإداري والتحصيل الضريبي بالمغرب.",
  note: "تتضمن هذه الأدلة مبادئ توجيهية وإضاءات قانونية عامة؛ ولا تغني عن فحص وثائق الملكية، الرسوم العدلية، وتحديد الآجال القانونية الخاصة بكل نازلة.",
};

const adsContentAr = {
  h1: "محامٍ في قضايا العقار والتحفيظ بالمغرب — نزاع حول ملكية عقار، تحفيظ، أو أرض فلاحية؟",
  lead: "من قضايا التحفيظ والتعرضات إلى قسمة التركات وتصفية الأراضي الفلاحية، ابدؤوا بدراسة ملفكم مع مكتب الأستاذ عبد الرزاق الرويسي، محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض.",
  issuesTitle: "ما موضوع ملفكم العقاري؟",
  issuesIntro: "اختاروا الحالة الأقرب لملفكم لتهيئة الرسالة. لكل عقار وثائقه، ولكل نزاع تفاصيله.",
  issues: [
    { title: "نزاع حول ملكية عقارية أو استحقاق", text: "دعاوى الاستحقاق، الترامي، نزاعات الحدود، ومنازعات الحيازة والاستغلال دون سند." },
    { title: "أراضٍ فلاحية وعقارات قروية", text: "تصفية الوضعية القانونية للملكيات الفلاحية، الرسوم العدلية، وأراضي تعاونيات الإصلاح الزراعي." },
    { title: "عقارات شائعة وتركات متنازع عليها", text: "تصفية التركات، قسمة العقارات المشاعة قضائياً أو رضائياً، وإسناد الاستغلال." },
    { title: "مساطر التحفيظ العقاري والتعرضات", text: "مؤازرة طالبي التحفيظ أو المتعرضين، والتقييدات الاحتياطية أمام المحافظة العقارية وقضاء التحفيظ." },
    { title: "منازعات الأكرية السكنية والمهنية والتجارية", text: "دعاوى الإفراغ، استيفاء الوجيبة الكرائية، ومساطر القانون 49.16 والقانون 67.12." },
    { title: "تدقيق المعاملات والبيوعات العقارية", text: "فحص الشواهد العقارية وسلسلة البيوع قبل التعاقد والتحقق من سلامة الوضعية القانونية." },
  ],
  lawyerTitle: "خبرة في المادة العقارية. وإلمام بميدان النزاع. — الأستاذ عبد الرزاق الرويسي",
  lawyerText: "محامٍ بهيئة الدار البيضاء مقبول لدى محكمة النقض ممارس منذ 1992، راكم تجربة رصينة في معالجة النزاعات العقارية المعقدة، قضايا التحفيظ، الأراضي الفلاحية، وقسمة التركات. ترتكز مؤازرة المكتب على تشخيص دقيق للوثائق والرسوم وتحديد المسطرة القضائية أو التحفظية الأنسب لضمان حقوقكم وصيانتها طبقاً لأحكام القانون.",
  processTitle: "من الاتصال الأولي إلى مباشرة الإجراءات القانونية",
  processIntro: "مسار مهني واضح في احترام تام لأخلاقيات المهنة والسر المهني.",
  process: [
    { title: "1. عرض عناصر النزاع", text: "اتصال هاتفي أو إرسال ملخص موجز بموضوع العقار والنزاع والمركز القانوني." },
    { title: "2. تحديد الموعد ودراسة الوثائق", text: "فحص الرسوم العقارية أو العدلية، الوثائق الثبوتية، والآجال القانونية بالمكتب." },
    { title: "3. رسم الخطة الإجرائية وتحديد الأتعاب", text: "تحديد مسطرة الترافع أو الإجراء التحفظي المناسب والاتفاق على الأتعاب بشفافية." },
  ],
  faqsTitle: "قبل التواصل مع المكتب (الأسئلة الشائعة)",
  faqs: [
    { question: "هل ينوب المكتب في النزاعات العقارية خارج دائرة المحمدية؟", answer: "نعم. ينوب المكتب ويترافع أمام المحاكم الابتدائية ومحاكم الاستئناف بالدار البيضاء والرباط، وكافة محاكم المملكة ومحكمة النقض، خاصة في النزاعات العقارية المعقدة وقضايا التحفيظ." },
    { question: "ما هي المعطيات الضرورية خلال التواصل الأول؟", answer: "يُستحسن بيان طبيعة العقار (محفظ، في طور التحفيظ، أو غير محفظ)، موضوع النزاع، وأي استدعاء لجلسة أو إنذار أو تبليغ توصلتم به لتدارك أي أجل قانوني وشيك." },
    { question: "هل يلزم توفير كافة الوثائق قبل حجز الموعد؟", answer: "يكفي حصر المعطيات الأساسية، على أن تُحضر في الموعد وثائق الملكية المتوفرة (رسم عقاري، شهادة ملكية، رسم ملكية عدلي، عقد بيع، أو إراثة) للتدقيق القانوني المباشر." },
    { question: "كيف يتم تحديد أتعاب الملف العقاري؟", answer: "تُحدد الأتعاب بالاتفاق وفقاً لتعقيد المسطرة، حجم الوثائق، والمصالح المتنازع عليها، مع توثيق نطاق الإنابة طبقاً لقانون المحاماة." },
  ],
  disclaimer: "تقدم هذه الصفحة معطيات تعريفية بخدمات المكتب ولا تغني عن الاستشارة القانونية المباشرة ودراسة الوثائق. ولا يشكل أي إجراء ضماناً مسبقاً لنتيجة قضائية محددة.",
};

function escapeHtml(text: string | undefined): string {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

type ArabicDocumentSection = {
  badgeTitle: string; // Ex: "[ صفحة الموقع : الرئيسية ]"
  contentHtml: string;
};

function buildArabicSections(): ArabicDocumentSection[] {
  const sections: ArabicDocumentSection[] = [];

  // 1. الصفحة الرئيسية
  sections.push({
    badgeTitle: "[ صفحة الموقع : الصفحة الرئيسية ]",
    contentHtml: `
      <h1>${escapeHtml(homeContentAr.h1)}</h1>
      <p class="lead">${escapeHtml(homeContentAr.intro)}</p>

      <h2>${escapeHtml(homeContentAr.proofTitle)}</h2>
      <p>${escapeHtml(homeContentAr.proofText)}</p>

      <h2>${escapeHtml(homeContentAr.teamTitle)}</h2>
      <p>${escapeHtml(homeContentAr.teamText)}</p>

      <h2>${escapeHtml(homeContentAr.servicesTitle)}</h2>
      <p>${escapeHtml(homeContentAr.servicesIntro)}</p>

      <ul>
        ${homeContentAr.services.map((s) => `<li><strong>${escapeHtml(s.title)}</strong> : ${escapeHtml(s.text)}</li>`).join("")}
      </ul>

      <h2>${escapeHtml(homeContentAr.reachTitle)}</h2>
      <p>${escapeHtml(homeContentAr.reachText)}</p>

      <h2>${escapeHtml(homeContentAr.finalTitle)}</h2>
      <p>${escapeHtml(homeContentAr.finalText)}</p>
    `,
  });

  // 2. صفحة الاتصال
  sections.push({
    badgeTitle: "[ صفحة الموقع : الاتصال بالمكتب وحجز موعد ]",
    contentHtml: `
      <h1>${escapeHtml(contactContentAr.h1)}</h1>
      <p class="lead">${escapeHtml(contactContentAr.lead)}</p>

      <p><strong>العنوان :</strong> ${escapeHtml(contactContentAr.address)}</p>
      <p><strong>أوقات العمل :</strong> ${escapeHtml(contactContentAr.hours)}</p>
      <p><strong>الولوج :</strong> ${escapeHtml(contactContentAr.access)}</p>
      <p><strong>نطاق الترافع :</strong> ${escapeHtml(contactContentAr.area)}</p>

      <h2>${escapeHtml(contactContentAr.prepareTitle)}</h2>
      <p>${escapeHtml(contactContentAr.prepareIntro)}</p>

      <ul>
        ${contactContentAr.prepare.map((p) => `<li><strong>${escapeHtml(p.title)}</strong> : ${escapeHtml(p.text)}</li>`).join("")}
      </ul>

      <h2>${escapeHtml(contactContentAr.mapTitle)}</h2>
      <p>${escapeHtml(contactContentAr.mapText)}</p>

      <h2>${escapeHtml(contactContentAr.faqTitle)}</h2>
      ${contactContentAr.faqs
        .map(
          (f) => `
        <div class="faq">
          <p><strong>${escapeHtml(f.question)}</strong></p>
          <p>${escapeHtml(f.answer)}</p>
        </div>
      `
        )
        .join("")}
    `,
  });

  // 3. صفحات مجالات الاختصاص الخمسة
  const servicesList = Object.values(servicePages);
  servicesList.forEach((service, index) => {
    const sc = service.content.ar;
    sections.push({
      badgeTitle: `[ صفحة الاختصاص ${index + 1} من 5 : ${sc.h1} ]`,
      contentHtml: `
        <h1>${escapeHtml(sc.h1)}</h1>
        <p class="lead">${escapeHtml(sc.lead)}</p>

        ${sc.summary.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}

        <h2>${escapeHtml(sc.servicesTitle)}</h2>
        <p>${escapeHtml(sc.servicesIntro)}</p>

        <ul>
          ${sc.services.map((s) => `<li><strong>${escapeHtml(s.title)}</strong> : ${escapeHtml(s.text)}</li>`).join("")}
        </ul>

        <h2>${escapeHtml(sc.processTitle)}</h2>
        <p>${escapeHtml(sc.processIntro)}</p>

        <ol>
          ${sc.process.map((p) => `<li><strong>${escapeHtml(p.title)}</strong> : ${escapeHtml(p.text)}</li>`).join("")}
        </ol>

        <h2>${escapeHtml(sc.faqTitle)}</h2>
        <p>${escapeHtml(sc.faqIntro)}</p>

        ${sc.faqs
          .map(
            (f) => `
          <div class="faq">
            <p><strong>${escapeHtml(f.question)}</strong></p>
            <p>${escapeHtml(f.answer)}</p>
          </div>
        `
          )
          .join("")}

        <h2>${escapeHtml(sc.ctaTitle)}</h2>
        <p>${escapeHtml(sc.ctaText)}</p>
      `,
    });
  });

  // 4. صفحة فهرس الأدلة
  sections.push({
    badgeTitle: "[ صفحة الموقع : فهرس الأدلة القانونية والتوجيهية ]",
    contentHtml: `
      <h1>${escapeHtml(guidesIndexContentAr.h1)}</h1>
      <p class="lead">${escapeHtml(guidesIndexContentAr.lead)}</p>
      <p>${escapeHtml(guidesIndexContentAr.note)}</p>
    `,
  });

  // 5. الأدلة القانونية الـ 15
  const guidesList = Object.values(guides);
  guidesList.forEach((guide, index) => {
    const gc = guide.content.ar;
    sections.push({
      badgeTitle: `[ دليل قانوني ${String(index + 1).padStart(2, "0")} من 15 : ${gc.h1} ]`,
      contentHtml: `
        <h1>${escapeHtml(gc.h1)}</h1>
        <p class="lead">${escapeHtml(gc.lead)}</p>

        ${gc.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}

        <h2>النقاط الرئيسية</h2>
        <ul>
          ${gc.takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
        </ul>

        ${gc.sections
          .map(
            (sec) => `
          <h2>${escapeHtml(sec.title)}</h2>
          ${sec.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
          ${sec.bullets && sec.bullets.length > 0 ? `<ul>${sec.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>` : ""}
          ${sec.note ? `<p><em>${escapeHtml(sec.note)}</em></p>` : ""}
        `
          )
          .join("")}

        <h2>${escapeHtml(gc.checklistTitle)}</h2>
        <p>${escapeHtml(gc.checklistIntro)}</p>
        <ul>
          ${gc.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>

        <h2>${escapeHtml(gc.faqTitle)}</h2>
        ${gc.faqs
          .map(
            (f) => `
          <div class="faq">
            <p><strong>${escapeHtml(f.question)}</strong></p>
            <p>${escapeHtml(f.answer)}</p>
          </div>
        `
          )
          .join("")}

        <h2>${escapeHtml(gc.ctaTitle)}</h2>
        <p>${escapeHtml(gc.ctaText)}</p>
      `,
    });
  });

  // 6. صفحة حملة إعلانات غوغل
  sections.push({
    badgeTitle: "[ صفحة إعلانات غوغل : النزاعات العقارية والأراضي الفلاحية ]",
    contentHtml: `
      <h1>${escapeHtml(adsContentAr.h1)}</h1>
      <p class="lead">${escapeHtml(adsContentAr.lead)}</p>

      <h2>${escapeHtml(adsContentAr.issuesTitle)}</h2>
      <p>${escapeHtml(adsContentAr.issuesIntro)}</p>
      <ul>
        ${adsContentAr.issues.map((iss) => `<li><strong>${escapeHtml(iss.title)}</strong> : ${escapeHtml(iss.text)}</li>`).join("")}
      </ul>

      <h2>${escapeHtml(adsContentAr.lawyerTitle)}</h2>
      <p>${escapeHtml(adsContentAr.lawyerText)}</p>

      <h2>${escapeHtml(adsContentAr.processTitle)}</h2>
      <p>${escapeHtml(adsContentAr.processIntro)}</p>
      <ul>
        ${adsContentAr.process.map((p) => `<li><strong>${escapeHtml(p.title)}</strong> : ${escapeHtml(p.text)}</li>`).join("")}
      </ul>

      <h2>${escapeHtml(adsContentAr.faqsTitle)}</h2>
      ${adsContentAr.faqs
        .map(
          (faq) => `
        <div class="faq">
          <p><strong>${escapeHtml(faq.question)}</strong></p>
          <p>${escapeHtml(faq.answer)}</p>
        </div>
      `
        )
        .join("")}

      <h2>التنبيه القانوني</h2>
      <p><em>${escapeHtml(adsContentAr.disclaimer)}</em></p>
    `,
  });

  return sections;
}

function buildArabicHtmlDocument(sections: ArabicDocumentSection[]): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <title>محتوى الموقع بالكامل باللغة العربية للمراجعة والتصحيح</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      background: #ffffff;
      color: #000000;
      font-family: 'Traditional Arabic', 'Amiri', 'Segoe UI', Tahoma, Arial, sans-serif;
      font-size: 10pt; /* TAILLE RÉDUITE PAR 25-30% */
      line-height: 1.85; /* INTERLIGNE RÉDUIT PAR 25-30% */
      margin: 0;
      padding: 0;
    }

    /* CHAQUE PAGE OU GUIDE COMMENCE SUR UNE NOUVELLE PAGE PDF */
    .site-page {
      page-break-before: always;
      break-before: page;
      padding: 20px 28px;
    }
    .site-page:first-of-type {
      page-break-before: avoid;
      break-before: avoid;
    }

    /* BANDEAU CLAIR IDENTIFIANT LA PAGE OU LE GUIDE */
    .page-badge-banner {
      display: inline-block;
      font-size: 11pt;
      font-weight: bold;
      border: 1.5px solid #000000;
      padding: 4px 14px;
      margin-bottom: 12px;
      background: #f4f4f4;
      line-height: 1.5;
    }

    h1 {
      font-size: 15pt;
      line-height: 1.35;
      margin: 0 0 12px 0;
      border-bottom: 1.5px solid #000000;
      padding-bottom: 5px;
      page-break-after: avoid;
      break-after: avoid;
    }
    h2 {
      font-size: 12pt;
      line-height: 1.35;
      margin: 18px 0 8px 0;
      border-bottom: 1px solid #777777;
      padding-bottom: 3px;
      page-break-after: avoid;
      break-after: avoid;
    }
    p {
      margin: 0 0 12px 0;
      line-height: 1.85;
    }
    .lead {
      font-size: 11pt;
      font-weight: bold;
    }
    ul, ol {
      margin: 6px 20px 14px 0;
      padding: 0;
    }
    li {
      margin-bottom: 8px;
      line-height: 1.85;
    }
    .faq {
      margin-bottom: 14px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    @page {
      size: A4 portrait;
      margin: 18mm 16mm;
    }
    @media print {
      body {
        font-size: 10pt;
      }
      .site-page {
        page-break-before: always;
        break-before: page;
        padding: 0;
      }
      .site-page:first-of-type {
        page-break-before: avoid;
        break-before: avoid;
      }
    }
  </style>
</head>
<body>
  ${sections
    .map(
      (sec) => `
    <article class="site-page" dir="rtl">
      <div class="page-badge-banner">${escapeHtml(sec.badgeTitle)}</div>
      ${sec.contentHtml}
    </article>
  `
    )
    .join("")}
</body>
</html>
`;
}

async function main() {
  const outputDir = path.resolve(__dirname, "../documents_correction_avocat");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  console.log("1. Préparation du contenu complet en arabe avec bandeau de titre par page/guide...");
  const sections = buildArabicSections();
  console.log(`   ✓ ${sections.length} pages et guides extraits en arabe.`);

  const htmlContent = buildArabicHtmlDocument(sections);
  const htmlPath = path.join(outputDir, "CONTENU_ARABE_COMPLET.html");
  const pdfPath = path.join(outputDir, "CONTENU_ARABE_COMPLET.pdf");

  fs.writeFileSync(htmlPath, htmlContent, "utf-8");
  console.log(`   ✓ Fichier HTML généré : ${htmlPath}`);

  console.log("2. Génération du PDF unique consolidé en arabe...");
  const executablePath = "C:\\Users\\muerroui\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win64\\chrome.exe";
  const browser = await chromium.launch({
    executablePath: fs.existsSync(executablePath) ? executablePath : undefined,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "load" });

  try {
    await page.pdf({
      path: pdfPath,
      format: "A4",
      margin: { top: "18mm", bottom: "18mm", left: "16mm", right: "16mm" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 8pt; color: #666; width: 100%; text-align: right; padding-right: 16mm; font-family: sans-serif; direction: rtl;">
          مكتب الأستاذ عبد الرزاق الرويسي — محتوى الموقع للمراجعة والتصحيح
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 8pt; color: #666; width: 100%; text-align: center; font-family: sans-serif;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>
      `,
    });
    console.log(`   ✓ PDF créé avec succès : ${pdfPath}`);
  } catch (err: any) {
    console.error("   ⚠️ Erreur lors de la création du PDF :", err?.message);
    throw err;
  }

  await page.close();
  await browser.close();

  // Nettoyage éventuel du dossier des pdf individuels pour ne pas encombrer
  const individualDir = path.join(outputDir, "pdf_individuels_par_page");
  if (fs.existsSync(individualDir)) {
    fs.rmSync(individualDir, { recursive: true, force: true });
    console.log("   ✓ Nettoyage du dossier des PDF individuels effectué.");
  }

  console.log("\nDOCUMENT PDF ARABE GÉNÉRÉ AVEC SUCCÈS !");
}

main().catch((err) => {
  console.error("Erreur :", err);
  process.exit(1);
});
