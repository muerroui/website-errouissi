import type { GuideDefinition } from "@/lib/guide-types";

const landRegistrationLaw = "https://adala.justice.gov.ma/api/uploads/2024/06/25/%D8%A7%D9%84%D8%AA%D8%AD%D9%81%D9%8A%D8%B8%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A-1719327275958.pdf";
const realRightsCode = "https://adala.justice.gov.ma/api/uploads/2024/09/02/%D9%85%D8%AF%D9%88%D9%86%D8%A9%20%D8%A7%D9%84%D8%AD%D9%82%D9%88%D9%82%20%D8%A7%D9%84%D8%B9%D9%8A%D9%86%D9%8A%D8%A9%20%D8%BA%D8%B4%D8%AA%202024-1725270480202.pdf";
const obligationsCode = "https://adala.justice.gov.ma/api/uploads/2024/09/04/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%A7%D9%84%D8%AA%D8%B2%D8%A7%D9%85%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B9%D9%82%D9%88%D8%AF%20%D8%BA%D8%B4%D8%AA%202024%201-1725443715659.pdf";
const penalCode = "https://adala.justice.gov.ma/api/uploads/2024/09/18/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%AC%D9%86%D8%A7%D8%A6%D9%8A%20%D8%B5%D9%8A%D8%BA%D8%A9%20%D8%BA%D8%B4%D8%AA%202024-1726666547280.pdf";
const ancfcc = "https://www.ancfcc.gov.ma/";

export const caveatGuide: GuideDefinition = {
  key: "caveat", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "immobilier",
  relatedGuides: ["immatriculation", "opposition", "sale-others-property"],
  content: {
    fr: {
      slug: "prenotation-titre-foncier-maroc",
      seo: { title: "Prénotation sur titre foncier au Maroc : guide", description: "Prénotation au Maroc : fondement, durée, radiation et pièces à vérifier pour préserver provisoirement un droit sur un titre foncier." },
      category: "Publicité foncière",
      h1: "Prénotation sur un titre foncier au Maroc : protéger provisoirement un droit",
      lead: "La prénotation, appelée التقييد الاحتياطي en arabe, signale provisoirement une prétention sur un immeuble immatriculé. Son effet, sa durée et sa radiation dépendent de son fondement.",
      intro: ["Lorsqu’un droit ne peut pas encore être inscrit définitivement sur un titre foncier, attendre sans analyser la publicité foncière peut exposer le demandeur à des inscriptions ultérieures. La prénotation sert à préserver provisoirement le rang du droit invoqué, dans les limites prévues par la législation foncière.", "Ce mécanisme n’établit pas à lui seul la propriété et ne remplace ni l’action au fond ni la pièce manquante. Il faut rapprocher le certificat de propriété, l’acte, la procédure engagée et toutes les dates utiles avant de choisir le fondement de la demande."],
      takeaways: ["La prénotation concerne un droit prétendu sur un immeuble immatriculé.", "Sa durée n’est pas identique selon qu’elle repose sur un titre, une requête judiciaire ou une ordonnance.", "L’inscription définitive et la radiation exigent un suivi actif du dossier."],
      sections: [
        { id: "role", title: "À quoi sert la prénotation foncière ?", paragraphs: ["La prénotation rend provisoirement visible sur le titre foncier un droit dont l’inscription définitive est différée. Si ce droit est ensuite reconnu et régulièrement inscrit, son rang peut être apprécié en tenant compte de la prénotation, selon les conditions légales applicables.", "Elle doit être distinguée d’une saisie, d’une hypothèque et d’une opposition à une réquisition d’immatriculation. Ces mécanismes n’ont ni le même objet ni la même procédure."], bullets: ["Identifier le droit dont l’inscription est recherchée.", "Vérifier le numéro exact du titre et les inscriptions existantes.", "Déterminer si une instance au fond doit être introduite ou poursuivie."] },
        { id: "grounds", title: "Titre, requête ou ordonnance : choisir le bon fondement", paragraphs: ["Le dahir sur l’immatriculation foncière prévoit plusieurs fondements de prénotation. Le document disponible, la nature du défaut empêchant l’inscription et l’existence d’un litige déterminent la voie utile.", "Chaque fondement obéit à son propre régime. Il serait donc risqué de retenir un délai trouvé en ligne sans vérifier le support de la prénotation, la date de son inscription et les actes accomplis ensuite."], note: "Une prénotation expirée ou mal suivie peut ne plus préserver le rang recherché. Les dates doivent être contrôlées sur les pièces du dossier." },
        { id: "follow-up", title: "Suivre l’inscription, la procédure et la radiation", paragraphs: ["Le suivi porte sur le certificat de propriété, le récépissé, la procédure judiciaire éventuelle et les décisions rendues. Si le droit est reconnu, les formalités nécessaires à l’inscription définitive doivent être accomplies.", "La radiation peut résulter de l’arrivée du terme, d’un consentement ou d’une décision, selon la situation. Avant de demander ou de contester une radiation, il faut vérifier le fondement exact de l’inscription et l’état de l’instance."], bullets: ["Obtenir un certificat de propriété récent.", "Classer requêtes, ordonnances, décisions et preuves de notification.", "Noter séparément les dates d’inscription et les échéances procédurales."] },
      ],
      checklistTitle: "Pièces à réunir pour examiner une prénotation", checklistIntro: "La liste dépend du fondement retenu et de l’état du litige.",
      checklist: ["Certificat de propriété récent et références complètes du titre.", "Acte ou document dont l’inscription définitive est demandée.", "Copie de la requête, ordonnance ou décision invoquée.", "Récépissés de la conservation foncière et notifications reçues.", "Chronologie des ventes, inscriptions et procédures connues."],
      faqTitle: "Questions fréquentes sur la prénotation",
      faqs: [
        { question: "Combien de temps dure une prénotation au Maroc ?", answer: "La durée dépend de son fondement juridique. Une prénotation fondée sur un titre, une requête judiciaire ou une ordonnance ne suit pas nécessairement le même régime. Il faut vérifier l’inscription et les pièces avant de calculer une échéance." },
        { question: "La prénotation empêche-t-elle toute vente du bien ?", answer: "Elle rend la prétention visible et peut affecter le rang des droits ultérieurs, mais son effet exact doit être apprécié avec son fondement et les inscriptions du titre. Elle ne doit pas être présentée comme une interdiction automatique de toute opération." },
        { question: "Comment faire radier une prénotation ?", answer: "La voie dépend du motif de la prénotation, de sa durée et de l’état de la procédure. La radiation peut exiger une pièce justificative, un consentement ou une décision. Le titre et le dossier judiciaire doivent être examinés ensemble." },
        { question: "Une prénotation prouve-t-elle que son bénéficiaire est propriétaire ?", answer: "Non. Elle préserve provisoirement une prétention dans les conditions légales ; elle ne remplace pas la décision ou le document permettant l’inscription définitive du droit." },
      ],
      ctaTitle: "Une prénotation apparaît sur votre titre foncier ?", ctaText: "Le cabinet examine son fondement, ses dates, les actes et la procédure afin d’identifier les démarches adaptées.", serviceLabel: "Droit immobilier",
      sourcesLabel: "Textes et organismes officiels", sources: [{ label: "Ministère de la Justice — dahir sur l’immatriculation foncière (chapitre des prénotations)", url: landRegistrationLaw }, { label: "ANCFCC — services de la conservation foncière", url: ancfcc }],
    },
    ar: {
      slug: "التقييد-الاحتياطي-على-الرسم-العقاري",
      seo: { title: "التقييد الاحتياطي على الرسم العقاري في المغرب: الآجال، السند والتشطيب", description: "دليل مسطرة التقييد الاحتياطي بالمغرب: التقييد بناء على سند أو أمر رئيس المحكمة أو مقال افتتاحي للدعوى، وحفظ الحقوق العينية وفق الفصلين 85 و86 من ظهير 1913." },
      category: "الإشهار العقاري والحماية التحفظية",
      h1: "التقييد الاحتياطي على الرسم العقاري في المغرب: السند، الآجال والتشطيب",
      lead: "يُعد التقييد الاحتياطي تدبيراً تحفظياً جوهرياً يهدف إلى حماية رتبة حق عيني متنازع بشأنه ومنع تفويت العقار للإضرار بالدائن أو المشتري (الفصلان 85 و86 من ظهير 1913 المعدل بالقانون 14.07).",
      intro: [
        "يتيح التقييد الاحتياطي تجميد رتبة الحق العقاري مؤقتاً بالرسم العقاري ريثما يستكمل صاحبه إجراءات تقييده النهائي أو يصدر حكم قضائي حائز لقوة الشيء المقضي به بثبوت حقه.",
        "تختلف آجال التقييد الاحتياطي وشروطه المسطرية جذرياً باختلاف سنده (سند، أمر قضائي ولائي، أو مقال افتتاحي لدعوى في الموضوع)؛ ويترتب على إغفال تمديده أو عدم رفع الدعوى داخل الأجل التشطيب التلقائي عليه وفقدان الحماية القانونية.",
      ],
      takeaways: [
        "التقييد الاحتياطي لا يثبت الملكية بل يحفظ رتبة الحق العيني بأثر رجعي عند الحكم بصحته نهائياً.",
        "تختلف مدة التقييد الاحتياطي بين 10 أيام (بناء على سند)، وشهر (بأمر رئيس المحكمة يمدد إلى 6 أشهر برفع دعوى في الموضوع)، أو طيلة مدة النزاع (بناء على مقال الدعوى بمقتضى تعديل الفصل 86).",
        "التشطيب على التقييد الاحتياطي غير المبرر يتم بأمر استعجالي من رئيس المحكمة بصفته قاضياً للمستعجلات (الفصل 86 مكرر).",
      ],
      sections: [
        { id: "role", title: "الغاية القانونية من التقييد الاحتياطي وأثره الحمائي", paragraphs: ["يهدف التقييد الاحتياطي إلى إشهار النزاع العقاري بالرسم العقاري وجعله حجة في مواجهة الكافة، بحيث تسري آثاره بأثر رجعي إلى تاريخ التقييد المؤقت في حال صدور حكم لصالح المقيد احتياطياً (الفصل 85).", "يحول التقييد الاحتياطي دون تفويت العقار إلى مشترٍ حسن النية يدعي جهله بالنزاع، ويُسقط أي تقييد لاحق يتعارض مع الحق المحفوظ."], bullets: ["حفظ رتبة الحق العيني في مواجهة التصرفات اللاحقة للمالك المقيد.", "إشعار الأغيار والعدول والموثقين بوجود منازعة قضائية حول ملكية العقار.", "إمكانية إيقاف أي إجراء بيع أو رهن يضر بحقوق المدعي."] },
        { id: "grounds", title: "حالات التقييد الاحتياطي وآجاله الصارمة (الفصل 86)", paragraphs: ["الحالة الأولى: بناء على سند (عقد بيع أو تفويت يحمل عيباً شكلياً) وصلاحيته 10 أيام فقط لتصحيح العيب.", "الحالة الثانية: بناء على أمر قضائي يصدره رئيس المحكمة الابتدائية وتستمر صلاحيته شهراً واحداً؛ فإذا رُفعت دعوى في الموضوع داخل هذا الشهر يمتد التقييد إلى 6 أشهر غير قابلة للتمديد.", "الحالة الثالثة: بناء على نسخة من مقال افتتاحي لدعوى في الموضوع ويستمر مفعوله طيلة سريان الدعوى إلى حين صدور حكم نهائي حائز لقوة الشيء المقضي به."], note: "انصرام أجل التقييد الاحتياطي دون تمديده يؤدي إلى تشطيب المحافظ عليه تلقائياً بقوة القانون، ولا يقبل تقييداً جديداً لنفس السبب." },
        { id: "follow-up", title: "إجراءات التقييد النهائي والتشطيب القضائي (الفصل 86 مكرر)", paragraphs: ["عند صدور حكم نهائي يقر بثبوت الحق، يباشر المستفيد تقييد حقه بصفة نهائية بالرسم العقاري بأثر رجعي يرجع إلى تاريخ تضمين التقييد الاحتياطي.", "في المقابل، إذا كان التقييد الاحتياطي تعسفياً أو صادراً دون سند جدي، يحق للمالك المتضرر تقديم مقال استعجالي أمام رئيس المحكمة الابتدائية للتشطيب عليه فوراً طبقاً للفصل 86 مكرر مع المطالبة بالتعويض."], bullets: ["سحب شهادة الملكية للتأكد من تسجيل التقييد الاحتياطي وتاريخه وسنده.", "إشعار المحافظ العقاري بنسخة من مقال الدعوى المسجل بكتابة الضبط.", "مباشرة مسطرة التشطيب الاستعجالي عند ثبوت كيدية التقييد أو فوات أجله."] },
      ],
      checklistTitle: "الوثائق المطلوبة لطلب التقييد الاحتياطي",
      checklistIntro: "يتطلب تقييد الإشعار الاحتياطي تدقيقاً مستندياً مسبقاً لضمان قبوله من طرف المحافظ على الأملاك العقارية.",
      checklist: ["شهادة الملكية العقارية الحديثة والتصميم العقاري للرسم المعني.", "أصل أو نسخة من السند أو العقد المؤسس للحق المتنازع بشأنه.", "نسخة المقال الافتتاحي للدعوى المسجل بصندوق كتابة الضبط ووصل الأداء.", "الأمر القضائي الصادر عن رئيس المحكمة الابتدائية عند الاقتضاء.", "طلب كتابي موجه للمحافظ على الأملاك العقارية مع أداء الرسوم الواجبة."],
      faqTitle: "أسئلة شائعة حول التقييد الاحتياطي بالمغرب",
      faqs: [
        { question: "ما هي المدة القانونية للتقييد الاحتياطي بناءً على أمر رئيس المحكمة؟", answer: "تحدد مدة التقييد الاحتياطي الصادر بأمر من رئيس المحكمة الابتدائية في شهر واحد يبتدئ من تاريخ صدور الأمر؛ ويمدد هذا التقييد لمدة ستة أشهر إذا أثبت المستفيد إقامة دعوى في الموضوع داخل أجل الشهر، ويسقط التقييد بقوة القانون بانصرام مدة الستة أشهر ما لم يصدر حكم قضائي نهائي." },
        { question: "هل يمنع التقييد الاحتياطي بيع العقار أو رهنَه لدى المحافظة العقارية؟", answer: "لا يمنع التقييد الاحتياطي المحافظ من تسجيل تفويتات أو حقوق عينية لاحقة، ولكن هذه التقييدات اللاحقة تعتبر مشروطة ومعلقة على مآل التقييد الاحتياطي؛ فإذا حُكم لصالح صاحب التقييد الاحتياطي، شُطب على كافة التقييدات والتفويتات اللاحقة له بأثر رجعي لتعارضها مع حقه المحفوظ." },
        { question: "كيف يتم التشطيب على تقييد احتياطي كيدي أو منتهي الصلاحية؟", answer: "يتم التشطيب إما تلقائياً من طرف المحافظ عند انصرام أجله القانوني دون تمديد، أو بناءً على أمر قضائي استعجالي يصدره رئيس المحكمة الابتدائية بصفته قاضياً للمستعجلات طبقاً للفصل 86 مكرر إذا تبين أن التقييد مبني على أسباب غير جدية أو وسيلة كيدية لعرقلة المعاملات." },
        { question: "هل يثبت التقييد الاحتياطي الملكية للمقيد؟", answer: "لا، التقييد الاحتياطي إجراء تحفظي مؤقت لحفظ الرتبة ولا ينشئ حق الملكية بذاته؛ وتبقى العبرة بالحكم القضائي الحائز لقوة الشيء المقضي به أو استيفاء العقد الناقل للملكية لكافة شروطه القانونية والتقييد النهائي." },
      ],
      ctaTitle: "هل ترغبون في قيد تقييد احتياطي لحماية عقاركم أو التشطيب على تقييد جائر؟",
      ctaText: "تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لمباشرة المساطر القضائية والتحفظية الكفيلة بحفظ رتبة حقوقكم أمام المحافظة العقارية وقضاء المستعجلات.",
      serviceLabel: "القانون العقاري والتحفيظ",
      sourcesLabel: "النصوص والجهات الرسمية",
      sources: [{ label: "وزارة العدل — ظهير التحفيظ العقاري، باب التقييدات الاحتياطية", url: landRegistrationLaw }, { label: "الوكالة الوطنية للمحافظة العقارية", url: ancfcc }],
    },
  },
};

export const shufaaGuide: GuideDefinition = {
  key: "shufaa", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "immobilier", relatedGuides: ["indivision", "sale-others-property", "ownership-claim"],
  content: {
    fr: {
      slug: "droit-chafaa-preemption-maroc", seo: { title: "Chafaa au Maroc : conditions, délais et procédure", description: "Comprendre la chafaa au Maroc : qualité de copropriétaire, vente d’une quote-part, délais, offre du prix et procédure." }, category: "Copropriété et indivision",
      h1: "Chafaa au Maroc : conditions, délais et procédure", lead: "La chafaa permet, sous conditions, à un copropriétaire indivis de se substituer à l’acquéreur d’une quote-part vendue. Une réaction rapide et documentée est essentielle.",
      intro: ["Le droit de chafaa ne s’applique pas à toute vente immobilière. Il suppose notamment d’identifier le bien, la quote-part cédée, la qualité du demandeur et la nature de l’opération.", "Les délais et formalités varient selon la publicité de la vente et le statut foncier du bien. Avant toute démarche, il faut donc obtenir les actes, vérifier les inscriptions et dater avec précision la notification ou la connaissance de la vente."],
      takeaways: ["La qualité de copropriétaire indivis doit être établie.", "L’acte, le prix et les frais doivent être examinés avant d’agir.", "Les délais sont déterminants et se calculent à partir des faits du dossier."],
      sections: [
        { id: "conditions", title: "Vérifier si le droit de chafaa est ouvert", paragraphs: ["La chafaa vise la cession à titre onéreux d’une quote-part indivise dans les conditions prévues par le Code des droits réels. Il faut contrôler la qualité des parties, l’origine de l’indivision et l’objet exact de la vente.", "Une vente portant sur un lot déjà individualisé, une opération d’une autre nature ou une renonciation valable peuvent modifier l’analyse. Le contenu de l’acte prévaut sur l’intitulé donné par les parties."], bullets: ["Produire le titre ou les actes établissant la quote-part du demandeur.", "Obtenir l’acte de vente et identifier l’acquéreur.", "Vérifier si le bien est immatriculé, en cours d’immatriculation ou non immatriculé."] },
        { id: "deadlines", title: "Calculer le délai à partir de documents fiables", paragraphs: ["Le Code des droits réels organise des délais liés notamment à la notification, à l’inscription ou au dépôt de l’acte et à la connaissance de la vente. Le point de départ ne doit pas être supposé.", "Une date de conversation familiale ou une rumeur sur la vente ne suffit pas toujours à reconstituer la chronologie. Il faut conserver les notifications, certificats, copies d’actes et tout élément établissant la date pertinente."], note: "En matière de chafaa, attendre peut entraîner la perte du droit. Une vérification immédiate est préférable dès la découverte de la vente." },
        { id: "procedure", title: "Préparer l’offre, les frais et la procédure", paragraphs: ["L’exercice de la chafaa implique de tenir compte du prix et des frais prévus par la loi. Une contestation sur le prix apparent, la consistance vendue ou les améliorations alléguées demande une analyse des preuves.", "La démarche doit viser la bonne personne et le bon bien. Pour un immeuble immatriculé, les informations du titre et l’inscription de la vente sont centrales ; pour un bien non immatriculé, les actes et la possession prennent une place particulière."], bullets: ["Établir une chronologie de la vente et de sa découverte.", "Réunir les éléments relatifs au prix et aux frais.", "Ne pas signer une renonciation ou un accord sans en mesurer les effets."] },
      ],
      checklistTitle: "Documents utiles pour une chafaa", checklistIntro: "Ils permettent de vérifier la qualité, l’opération et les délais.", checklist: ["Titre foncier ou actes de propriété et quote-parts.", "Acte de vente ou références permettant de l’obtenir.", "Certificat de propriété récent si le bien est immatriculé.", "Notifications, correspondances et preuves de dates.", "Éléments relatifs au prix, aux frais et aux éventuels travaux."],
      faqTitle: "Questions fréquentes sur la chafaa", faqs: [
        { question: "Qui peut exercer la chafaa au Maroc ?", answer: "La qualité requise dépend de l’indivision et des conditions du Code des droits réels. Elle doit être démontrée par les actes et, pour un immeuble immatriculé, rapprochée des inscriptions foncières." },
        { question: "Quel est le délai pour demander la chafaa ?", answer: "Le calcul dépend notamment de la notification, du statut foncier et de la publicité de la vente. Comme plusieurs points de départ peuvent être discutés, les dates et pièces doivent être vérifiées sans attendre." },
        { question: "Faut-il rembourser le prix à l’acquéreur ?", answer: "L’exercice de la chafaa suppose de prendre en compte le prix et les dépenses légalement pertinentes. Leur montant et leur preuve doivent être contrôlés à partir de l’acte et des justificatifs." },
        { question: "La chafaa est-elle possible entre héritiers ?", answer: "Elle peut être envisagée lorsqu’un héritier, devenu copropriétaire indivis, remplit les conditions et qu’une quote-part a été cédée dans une opération ouvrant ce droit. Chaque acte doit être qualifié précisément." },
      ],
      ctaTitle: "Une quote-part indivise vient d’être vendue ?", ctaText: "Le cabinet vérifie la qualité des parties, l’acte, les inscriptions et les délais avant d’orienter la démarche.", serviceLabel: "Droit immobilier", sourcesLabel: "Texte officiel", sources: [{ label: "Ministère de la Justice — Code des droits réels, articles relatifs à la chafaa", url: realRightsCode }],
    },
    ar: {
      slug: "الشفعة-في-القانون-المغربي",
      seo: { title: "حق الشفعة في القانون المغربي: الشروط، الآجال، وإيداع الثمن (مدونة الحقوق العينية)", description: "دليل الشفعة في مدونة الحقوق العينية بالمغرب: صفة الشريك، أجل 30 يوماً من التبليغ وأجل السنة، إيداع الثمن والمصروفات بصندوق المحكمة (المادتان 304 و306)." },
      category: "تصفية الشياع وحق الشفعة",
      h1: "حق الشفعة في القانون المغربي: القواعد والآجال وإيداع الثمن",
      lead: "تنظم المواد 292 إلى 312 من القانون رقم 39.08 (مدونة الحقوق العينية) حق الشفعة؛ حيث يخول للشريك على الشياع أخذ حصة شريكه المبيعة للغير بأداء الثمن الحقيقي والمصروفات الظاهرة.",
      intro: [
        "تُعد الشفعة وسيلة استثنائية أقرها المشرع لدفع ضرر دخول أجنبي شريكاً على الشياع في العقار المشترك؛ غير أن ممارستها مقيدة بشروط صارمة وآجال مسقطة وإجراءات مالية تحت طائلة سقوط الحق.",
        "يشترط لصحة ممارسة الشفعة إيداع الثمن والمصروفات بصندوق المحكمة داخل أجل 30 يوماً من تاريخ المطالبة بها، ومراعاة آجال السقوط الصارمة (30 يوماً من التبليغ الرسمي أو سنة من تاريخ التقييد بالرسم العقاري).",
      ],
      takeaways: [
        "تسقط الشفعة بانصرام 30 يوماً من تاريخ التبليغ الرسمي للشريك بالبيع، أو بانصرام سنة كاملة من تاريخ التقييد بالرسم العقاري (المادة 304).",
        "يلزم الشفيع وجوباً بإيداع الثمن ومصروفات العقد بصندوق المحكمة داخل 30 يوماً من تاريخ توجيه الإنذار أو رفع الدعوى تحت طائلة سقوط حقه (المادة 306).",
        "لا تجوز الشفعة إلا في الحصة الشائعة المبيعة بعوض؛ ولا تجوز في العقار المفرز أو التفويت بالهبة أو الصدقة.",
      ],
      sections: [
        { id: "conditions", title: "شروط استحقاق حق الشفعة في مدونة الحقوق العينية", paragraphs: ["يشترط في طالب الشفعة (الشفيع) أن يكون شريكاً على الشياع في تاريخ بيع الحصة واستمرار صفته حتى الحكم بها، وألا يكون قد رضي بالبيع أو تنازل صراحة أو ضمناً عن حقه (المادة 293).", "يجب أن يكون التصرف بيعاً معاوضة مالية؛ فلا شفعة في العقار الموهوب أو المتصدق به أو المحكوم به في نزاع استحقاق، ولا تجوز الشفعة إذا كان المشتري شريكاً أصلاً على الشياع إلا في حدود نسب الأنصبة."], bullets: ["ثبوت ملكية الشفيع لحصة شائعة في العقار المحفظ أو غير المحفظ.", "أن يكون المشتري أجنبياً عن الشركاء على الشياع.", "أن يكون البيع تاماً وناجزاً مستوفياً لأركانه القانونية."] },
        { id: "deadlines", title: "آجال السقوط الصارمة لممارسة الشفعة (المادة 304)", paragraphs: ["الحالة الأولى: إذا بلغ المشتري أو الشريك البائع الشريكَ بنسخة من عقد البيع بصفة رسمية، يسقط حق الشفعة بانصرام أجل 30 يوماً من تاريخ التبليغ.", "الحالة الثانية: إذا لم يقع تبليغ رسمي، يسقط حق الشفعة في العقار المحفظ بمضي سنة كاملة من تاريخ تقييد البيع بالرسم العقاري، وفي العقار غير المحفظ بمضي سنة من تاريخ العلم بالبيع مع يمين عدم العلم."], note: "أجل 30 يوماً وأجل السنة هما أجلا سقوط لا يقبلان الوقف أو الانقطاع؛ وفوات الأجل يسقط حق الشفعة بصفة باتة." },
        { id: "procedure", title: "إجراءات إيداع الثمن ورفع دعوى الشفعة (المادة 306)", paragraphs: ["توجب المادة 306 من مدونة الحقوق العينية على الشفيع تقديم طلب الشفعة وإيداع الثمن الحقيقي والمصروفات التعاقدية بصندوق المحكمة داخل أجل 30 يوماً من تاريخ الطلب أو رفع الدعوى؛ وإذا لم يودع المبلغ كاملاً داخل هذا الأجل سقط حقه في الشفعة حتماً.", "إذا صرح المشتري بثمن صوري مبالغ فيه في العقد للتهرب من الشفعة، يحق للشفيع إثبات الصورية عبر القرائن أو الخبرة القضائية لتقييم الثمن الحقيقي يوم البيع."], bullets: ["إيداع الثمن والمصروفات بصندوق المحكمة داخل أجل 30 يوماً الإلزامي.", "تقييد مقال دعوى الشفعة احتياطياً بالرسم العقاري لحفظ الحقوق.", "توجيه مقال الدعوى ضد كل من المشتري والشريك البائع لضمان صحة المسطرة."] },
      ],
      checklistTitle: "الوثائق الضرورية لرفع دعوى الشفعة",
      checklistIntro: "يتعين إعداد وثائق الملكية وإثباتات الثمن والتاريخ لتفادي سقوط الحق في الشفعة.",
      checklist: ["شهادة الملكية العقارية أو رسم الملكية العدلي المثبت لصفة الشفيع على الشياع.", "نسخة من عقد البيع المبرم مع المشتري الأجنبي.", "محضر التبليغ الرسمي أو ما يثبت تاريخ العلم بالبيع.", "وصل إيداع الثمن والمصروفات المسلم من صندوق كتابة ضبط المحكمة.", "المقال الافتتاحي لدعوى الشفعة المؤدى عنه الرسوم القضائية."],
      faqTitle: "أسئلة شائعة حول حق الشفعة في القانون المغربي",
      faqs: [
        { question: "ما هو الأجل المحدد قانوناً لممارسة حق الشفعة بالمغرب؟", answer: "يسقط حق الشفعة بمضي 30 يوماً من تاريخ التوصل بالتبليغ الرسمي بنسخة من عقد البيع وفق المادة 304 من مدونة الحقوق العينية؛ وفي حالة عدم التبليغ يسقط الحق بمضي سنة كاملة من تاريخ تقييد البيع بالرسم العقاري، أو بمضي سنة من تاريخ وضع اليد والشهرة في العقار غير المحفظ." },
        { question: "ما هي عواقب عدم إيداع الثمن داخل أجل 30 يوماً من طلب الشفعة؟", answer: "يترتب على عدم إيداع الثمن ومصروفات العقد الظاهرة بصندوق المحكمة داخل أجل 30 يوماً من تاريخ إبداء الرغبة أو رفع الدعوى سقوط حق الشفعة بصفة قطعية ونهائية بحكم القانون بنص المادة 306، وترفض المحكمة الدعوى شكلاً." },
        { question: "هل تجوز الشفعة إذا بيع العقار المشاع بالهبة أو الصدقة؟", answer: "لا، لا تجوز الشفعة في تفويتات التبرع كالهبة والصدقة والتنازل المجاني والوصية؛ غير أنه إذا ثبت أن عقد الهبة كان صورياً ومقنعاً يخفي في حقيقته بيعاً بعوض مالي للتحايل على الشفيع، يحق للشريك الطعن في الصورية وإثبات البيع للمطالبة بالشفعة بالثمن الحقيقي." },
        { question: "هل تجوز الشفعة بين الورثة الشركاء على الشياع؟", answer: "نعم، تجوز الشفعة بين الورثة الشركاء على الشياع إذا قام أحدهم ببيع حصته الموروثة لأجنبي عن الورثة؛ أما إذا باع الوارث حصته لوارث آخر شريك معه في التركة، فلا تجوز الشفعة لباقي الورثة ضده إلا إذا كان البيع لجميع الشركاء بحسب أنصبتهم." },
      ],
      ctaTitle: "هل بيعت حصة شائعة في عقاركم وترغبون في ممارسة حق الشفعة؟",
      ctaText: "سارعوا بعرض الملف على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتدقيق الآجال وإيداع الثمن بصندوق المحكمة قبل فوات أجل 30 يوماً المسقط للحق.",
      serviceLabel: "القانون العقاري والشفعة",
      sourcesLabel: "النص الرسمي",
      sources: [{ label: "وزارة العدل — مدونة الحقوق العينية، الأحكام المتعلقة بالشفعة", url: realRightsCode }],
    },
  },
};

export const dispossessionGuide: GuideDefinition = {
  key: "dispossession", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "foncierRural", relatedGuides: ["encroachment", "ownership-claim", "melkiya"],
  content: {
    fr: {
      slug: "depossession-occupation-terrain-maroc", seo: { title: "Dépossession d’un terrain au Maroc : que faire ?", description: "Occupation ou dépossession d’un terrain au Maroc : preuves de possession, constat, article 570, action civile et démarches à examiner." }, category: "Occupation et possession",
      h1: "Dépossession et occupation d’un terrain au Maroc : preuves et recours", lead: "Lorsqu’une personne est évincée d’un terrain, il faut distinguer immédiatement la possession, la propriété, les circonstances de l’entrée et l’urgence de préserver les preuves.",
      intro: ["Une clôture déplacée, une culture arrachée, une construction ou l’installation d’un tiers peut révéler des situations juridiques différentes. Employer seulement le mot « occupation » ne permet pas de choisir entre constat, plainte, action possessoire ou action fondée sur la propriété.", "L’article 570 du Code pénal vise l’enlèvement d’un immeuble de la possession d’autrui dans les conditions qu’il fixe. Sa qualification ne découle pas automatiquement d’un conflit de limites ou d’un désaccord familial : les faits et les éléments constitutifs doivent être établis."],
      takeaways: ["La possession et la propriété sont deux questions distinctes.", "Les lieux, les dates et les circonstances de l’éviction doivent être documentés rapidement.", "La voie pénale éventuelle ne remplace pas nécessairement le traitement civil ou foncier du conflit."],
      sections: [
        { id: "qualify", title: "Qualifier l’atteinte avant de choisir la procédure", paragraphs: ["Il faut déterminer qui occupait effectivement le terrain, depuis quand, de quelle manière et comment la situation a changé. La violence, les menaces, la fraude, l’absence du possesseur ou un simple désaccord de bornage ne conduisent pas nécessairement à la même qualification.", "Dans une indivision familiale, l’usage par un cohéritier doit aussi être distingué de l’entrée d’un tiers. Les droits de chacun et l’existence d’un partage antérieur peuvent modifier l’analyse."], bullets: ["Identifier la parcelle et ses limites réelles.", "Dater le dernier état paisible de possession et le changement constaté.", "Recueillir les identités des occupants, voisins et témoins sans provoquer d’affrontement."] },
        { id: "evidence", title: "Préserver les preuves sans aggraver le conflit", paragraphs: ["Les actes, certificats, plans et documents successoraux éclairent les droits. Les photographies datées, procès-verbaux, sommations, factures d’exploitation et témoignages peuvent éclairer la possession et la chronologie.", "Il est déconseillé de reprendre le terrain par la force ou de détruire les installations. Une telle réaction peut créer un nouveau contentieux et altérer les preuves utiles."], note: "En cas de tensions ou de risque pour les personnes, la sécurité prime. Les faits urgents doivent être signalés aux autorités compétentes." },
        { id: "routes", title: "Articuler les voies pénale, civile et foncière", paragraphs: ["Une plainte fondée sur l’article 570 exige l’examen de ses conditions propres. Parallèlement ou alternativement, une demande civile peut viser la possession, la cessation d’un trouble, la restitution ou la reconnaissance d’un droit, selon les faits.", "Pour un terrain immatriculé, le titre et les inscriptions sont essentiels. Pour un terrain non immatriculé ou rural, la chaîne des actes, la possession, les limites et l’éventuelle procédure d’immatriculation doivent être reconstituées."], bullets: ["Éviter de multiplier des demandes contradictoires.", "Coordonner la preuve technique des limites avec l’argumentation juridique.", "Suivre séparément les délais et décisions de chaque procédure."] },
      ],
      checklistTitle: "Dossier de première urgence", checklistIntro: "L’objectif est d’identifier le terrain et de figer la chronologie.", checklist: ["Titre foncier, Melkiya, actes et pièces successorales.", "Plans, coordonnées, repères et photographies datées.", "Constats, plaintes, sommations et correspondances.", "Preuves d’exploitation, d’entretien ou d’occupation antérieure.", "Identité des personnes présentes et chronologie détaillée des faits."],
      faqTitle: "Questions sur la dépossession d’un terrain", faqs: [
        { question: "Que faire si quelqu’un occupe mon terrain au Maroc ?", answer: "Il faut d’abord identifier la parcelle, préserver les preuves de vos droits et de la possession, puis qualifier le mode d’entrée. La démarche appropriée dépend du titre, des faits, de l’urgence et des personnes concernées." },
        { question: "Puis-je reprendre mon terrain moi-même ?", answer: "Une reprise par la force peut exposer les personnes et compliquer le dossier. Il est préférable de faire constater la situation et d’utiliser la voie légale adaptée." },
        { question: "L’article 570 s’applique-t-il à toute occupation ?", answer: "Non. Ce texte comporte des conditions qui doivent être caractérisées. Un litige de propriété, de limites ou entre coindivisaires ne devient pas automatiquement une infraction pénale." },
        { question: "Un titre foncier suffit-il pour obtenir l’évacuation ?", answer: "Le titre est déterminant pour les droits inscrits, mais la demande, l’identité de l’occupant, son éventuel titre et les circonstances doivent aussi être examinés." },
      ],
      ctaTitle: "Votre terrain vient d’être occupé ou clôturé ?", ctaText: "Le cabinet analyse les droits, la possession, les limites et l’urgence afin d’organiser les preuves et la procédure.", serviceLabel: "Foncier rural et agricole", sourcesLabel: "Textes officiels", sources: [{ label: "Ministère de la Justice — Code pénal, article 570", url: penalCode }, { label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }],
    },
    ar: {
      slug: "انتزاع-عقار-من-حيازة-الغير",
      seo: { title: "انتزاع عقار من حيازة الغير والترامي في القانون المغربي (الفصل 570 ق.ج ودعاوى الحيازة)", description: "دليل جريمة انتزاع عقار من حيازة الغير بالمغرب: شروط الفصل 570 من القانون الجنائي، دعاوى استرداد الحيازة المدنية، المعاينة، وإرجاع الحالة إلى ما كانت عليه." },
      category: "حماية الحيازة والجنح العقارية",
      h1: "انتزاع عقار من حيازة الغير في القانون المغربي: الإجراءات الجنائية والمدنية",
      lead: "يُعاقب الفصل 570 من القانون الجنائي بالحبس من شهر إلى ستة أشهر وغرامة كل من انتزع عقاراً من حيازة غيره خلسة أو بالتدليس أو باستعمال العنف والتهديد؛ بالتوازي مع دعاوى الحيازة المدنية المستعجلة.",
      intro: [
        "تتعرض الحيازة العقارية الهادئة لاعتداءات مادية مفاجئة تتمثل في كسر الأقفال، إقامة أسيجة، جرف الأغراس، أو وضع اليد بالقوة والترامي على العقار.",
        "يخول القانون للمتضرر مسارين متكاملين: مسار جنحي زجري أمام النيابة العامة وقضاء الحكم لتحريك المتابعة الجنائية واسترجاع الحيازة، ومسار مدني عقاري استعجالي لاسترداد الحيازة ووقف الأعمال الضارة وفق مدونة الحقوق العينية.",
      ],
      takeaways: [
        "تقوم جريمة انتزاع عقار (الفصل 570 ق.ج) على ثبوت الحيازة الهادئة الفعلية للمشتكي وانتزاعها بالعنف أو التدليس أو الخلسة.",
        "دعوى استرداد الحيازة المدنية يجب أن تُرفع داخل أجل سنة واحدة من تاريخ فقدان الحيازة أو بدء الاعتداء (المادة 166 من مدونة الحقوق العينية).",
        "يحق للنيابة العامة وقاضي التحقيق والمحكمة الأمر بإرجاع الحالة إلى ما كانت عليه وتخلية العقار فوراً.",
      ],
      sections: [
        { id: "qualify", title: "عناصر قيام جريمة انتزاع حيازة عقار (الفصل 570 ق.ج)", paragraphs: ["تتطلب المتابعة الجنائية إثبات عنصرين أساسيين: أولاً، ثبوت الحيازة المادية الفعلية والاستغلال الهادئ للمشتكي قبل الاعتداء؛ وثانياً، قيام المعتدي بانتزاع العقار بإحدى الوسائل المنصوص عليها حصراً: الخلسة، التدليس، العنف، التهديد، أو استغلال غياب الحائز.", "لا يشترط الفصل 570 إثبات ملكية المشتكي للعقار؛ فالحماية الجنائية مقررة للحيازة المادية في ذاتها ضد الاعتداء المباغت ولو كان المعتدي يملك سند ملكية ينازع به."], bullets: ["تحرير شكاية موجهة لوكيل الملك بالمحكمة الابتدائية المختصة.", "إثبات واقعة الاعتداء والكسر أو التهديد بشهادة الشهود والمعاينة المفوضية.", "المطالبة الصريحة بإرجاع الحالة إلى ما كانت عليه فوراً."] },
        { id: "evidence", title: "التوثيق الفوري للاعتداء وحفظ الأدلة", paragraphs: ["يلزم فور اكتشاف الترامي انتداب مفوض قضائي لإجراء معاينة استعجالية وتوصيف الاعتداء (تغيير الأقفال، جرف الأشجار، البناء) والتقاط صور فوتوغرافية تؤرخ الواقعة بدقة.", "تُجمع كافة وثائق إثبات الحيازة السابقة: فواتير الماء والكهرباء، وصولات الحرث والجني، رخص الاستغلال، والشهادات الإدارية؛ لتأكيد أقدمية وضع اليد قبل تاريخ الاعتداء."], note: "يمنع القانون استرداد الحيازة بالقوة الذاتية؛ إذ إن استعمال العنف المضاد قد يعرض المشتكي للمتابعة الجنائية بتبادل العنف والترامي." },
        { id: "routes", title: "تنسيق المسار المدني الاستعجالي والمتابعة الجنائية", paragraphs: ["يحق للحائز رفع دعوى استرداد الحيازة أمام القاضي الاستعجالي أو قاضي الموضوع بالمحكمة الابتدائية طبقاً للمادة 166 من مدونة الحقوق العينية داخل أجل سنة من تاريخ الاعتداء لإصدار حكم مشمول بالنفاذ المعجل بإخلاء المعتدي.", "عند الإدانة الجنائية بمقتضى الفصل 570، تقضي المحكمة الزجرية وجوباً برد الحيازة للمجني عليه والحكم بتعويضات مدنية جابرة للضرر اللاحق بالمزروعات والمنشآت."], bullets: ["رفع دعوى استرداد الحيازة المدنية داخل أجل سنة المسقط للدعوى.", "تنصيب المشتكي طرفاً مدنياً للمطالبة بالتعويض عن التعطيل والإتلاف.", "تنفيذ أمر إرجاع الحالة بواسطة القوة العمومية تحت إشراف النيابة العامة."] },
      ],
      checklistTitle: "الوثائق الضرورية لملف انتزاع الحيازة والترامي",
      checklistIntro: "يتطلب التحرك القضائي توثيقاً سريعاً للحيازة السابقة وواقعة الاعتداء المادي.",
      checklist: ["محضر معاينة واستجواب منجز بواسطة مفوض قضائي يثبت واقعة الترامي.", "الوثائق المثبتة للحيازة السابقة والاستغلال الفعلي (فواتير، شهادات، صور).", "الرسوم العقارية أو العدلية الدالة على سند الحيازة والملكية.", "نسخة الشكاية الموجهة للنيابة العامة مع مراجع محضر الشرطة أو الدرك الملكي.", "المقال الاستعجالي الرامي لاسترداد الحيازة وإرجاع الحالة."],
      faqTitle: "أسئلة شائعة حول انتزاع العقار والترامي بالمغرب",
      faqs: [
        { question: "هل يحق لمالك العقار انتزاع حيازته بالقوة إذا كان غيره واضعاً يده عليه؟", answer: "لا، يجرم القانون الجنائي المغربي في الفصل 570 أي استيلاء على العقار بالقوة أو الخلسة حتى ولو كان المعتدي هو المالك الشرعي للعقار في الرسوم؛ فالقانون يحمي الحيازة الفعلية الهادئة ويفرض سلوك المساطر القضائية الإخلائية، وأي انتزاع مادي بالقوة يعتبر جنحة يعاقب عليها بالحبس." },
        { question: "ما هو الأجل المحدد لرفع دعوى استرداد الحيازة أمام القضاء المدني؟", answer: "تنص المادة 166 من مدونة الحقوق العينية على أنه يجب رفع دعوى استرداد الحيازة داخل أجل سنة واحدة من تاريخ انتزاعها من يد الحائز أو من تاريخ علمه بفقدانها إذا كان الانتزاع خلسة؛ وفوات أجل السنة يسقط دعوى الحيازة ولا يبقى أمام المتضرر سوى رفع دعوى الاستحقاق في الموضوع." },
        { question: "كيف تأمر النيابة العامة بإرجاع الحالة إلى ما كانت عليه في قضايا الترامي؟", answer: "يخول قانون المسطرة الجنائية لوكيل الملك وقاضي التحقيق صلاحية الأمر بإرجاع الحالة إلى ما كانت عليه وتجريد المعتدي من الحيازة إذا توفرت أدلة قاطعة على ثبوت الحيازة الهادئة السابقة للمشتكي وثبوت واقعة الانتزاع بالوسائل الجنائية، ويتم تنفيذ القرار بمؤازرة القوة العمومية." },
      ],
      ctaTitle: "هل تعرض عقاركم أو أرضكم الفلاحية لانتزاع الحيازة أو الترامي؟",
      ctaText: "بادروا بالاتصال بمكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لمباشرة إجراءات الشكاية الجنائية ودعاوى استرداد الحيازة العاجلة لصيانة أراضيكم.",
      serviceLabel: "العقار الفلاحي وحماية الحيازة",
      sourcesLabel: "النصوص الرسمية",
      sources: [{ label: "وزارة العدل — القانون الجنائي، الفصل 570", url: penalCode }, { label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }],
    },
  },
};

export const encroachmentGuide: GuideDefinition = {
  key: "encroachment", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "foncierRural", relatedGuides: ["dispossession", "ownership-claim", "immatriculation"],
  content: {
    fr: {
      slug: "empietement-terrain-autrui-maroc", seo: { title: "Empiètement sur un terrain au Maroc : recours", description: "Bornage déplacé, construction ou empiètement au Maroc : preuves, plans, expertise, mise en demeure et actions à examiner." }, category: "Limites et empiètement",
      h1: "Empiètement sur le terrain d’autrui au Maroc : protéger sa propriété", lead: "Un mur, une clôture, une plantation ou une construction qui dépasse une limite exige de prouver à la fois le droit invoqué et l’emplacement exact de cette limite.",
      intro: ["Les litiges d’empiètement naissent souvent d’une discordance entre les actes, les plans et les repères visibles sur place. En zone rurale, les anciennes confrontations et les limites naturelles peuvent avoir changé.", "Avant d’accuser un voisin d’avoir pris une partie du terrain, il faut localiser juridiquement et techniquement la bande contestée. Le constat décrit l’état des lieux ; il ne remplace pas toujours le travail topographique ni la preuve du droit."],
      takeaways: ["L’identité de la parcelle et la limite exacte doivent être établies.", "Un constat et une expertise n’ont pas la même fonction.", "La solution peut être amiable, technique ou judiciaire selon les titres et l’occupation."],
      sections: [
        { id: "verify", title: "Comparer titres, plans et situation réelle", paragraphs: ["Pour un bien immatriculé, le titre foncier, le plan et les opérations cadastrales constituent le point de départ. Pour un terrain non immatriculé, l’analyse relie les actes, les confrontations, la possession et les relevés disponibles.", "Une différence de superficie ne permet pas seule d’identifier l’empiètement. Il faut rattacher les mesures à la parcelle exacte et contrôler les références des propriétés voisines."], bullets: ["Obtenir les documents fonciers récents.", "Conserver les anciens plans et procès-verbaux de bornage.", "Repérer les modifications physiques et leur date approximative."] },
        { id: "prove", title: "Faire constater puis mesurer utilement", paragraphs: ["Des photographies et un constat peuvent préserver l’apparence des lieux à une date donnée. Une opération technique peut ensuite comparer les limites documentaires avec les ouvrages, cultures ou clôtures présents.", "L’expert ne tranche pas à lui seul la propriété. Sa mission, les documents communiqués et la possibilité pour chaque partie de présenter ses observations sont essentiels à la valeur de l’analyse."], note: "Ne déplacez pas vous-même les bornes ou la clôture contestée avant d’avoir documenté la situation et évalué les conséquences." },
        { id: "resolve", title: "Négocier ou saisir la juridiction compétente", paragraphs: ["Si les documents permettent une solution claire, un accord précis peut fixer la limite, les travaux et les formalités foncières nécessaires. Un simple arrangement oral risque toutefois de déplacer le conflit sans le résoudre.", "À défaut d’accord, les demandes judiciaires possibles dépendent du statut du bien, des droits invoqués, de l’ouvrage réalisé et du préjudice. Il faut formuler des demandes cohérentes avec la preuve technique."], bullets: ["Adresser une mise en demeure adaptée lorsque cela est utile.", "Chiffrer et justifier le préjudice allégué.", "Prévoir l’exécution pratique et les formalités après l’accord ou le jugement."] },
      ],
      checklistTitle: "Préparer un dossier d’empiètement", checklistIntro: "Réunissez ce qui permet d’identifier la limite avant et après la modification.", checklist: ["Titre foncier ou actes de propriété des parcelles concernées.", "Plans cadastraux, croquis et procès-verbaux de bornage.", "Photographies anciennes et récentes avec dates disponibles.", "Constats, échanges avec le voisin et autorisations de construire éventuelles.", "Coordonnées des personnes connaissant l’ancienne limite."],
      faqTitle: "Questions sur l’empiètement", faqs: [
        { question: "Comment prouver qu’un voisin empiète sur mon terrain ?", answer: "Il faut rapprocher les droits et plans de la situation réelle. Un constat préserve l’état visible ; une mesure ou expertise peut localiser la limite et l’ouvrage contesté." },
        { question: "Puis-je démolir le mur construit sur mon terrain ?", answer: "Une démolition unilatérale peut créer des risques juridiques et matériels. Il faut d’abord établir la limite et utiliser la démarche amiable ou judiciaire adaptée." },
        { question: "Le cadastre prouve-t-il toujours la propriété ?", answer: "La portée d’un plan dépend du statut du bien et des documents auxquels il se rattache. Il doit être analysé avec le titre ou les actes et les opérations de bornage." },
        { question: "Un accord avec le voisin suffit-il ?", answer: "Un accord peut résoudre le conflit s’il décrit précisément la limite, les travaux et les formalités. Sa forme et sa publicité doivent être adaptées au statut foncier du bien." },
      ],
      ctaTitle: "Une limite ou une construction empiète sur votre terrain ?", ctaText: "Le cabinet rapproche les titres, les plans et les constatations pour définir une stratégie cohérente.", serviceLabel: "Foncier rural et agricole", sourcesLabel: "Sources officielles", sources: [{ label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }, { label: "ANCFCC — conservation foncière et cadastre", url: ancfcc }],
    },
    ar: {
      slug: "الترامي-على-ملك-الغير-في-المغرب",
      seo: { title: "الترامي على حدود العقار وتجاوز الأسيجة في القانون المغربي: دعاوى منع المعارضة والخبرة", description: "دليل منازعات الترامي وتداخل حدود العقارات بالمغرب: دعوى منع المعارضة، إزالة البناء والمنشآت المتعدية، الخبرة الطبوغرافية القضائية وقواعد مدونة الحقوق العينية." },
      category: "نزاعات الحدود والترامي",
      h1: "الترامي وتداخل حدود العقارات في القانون المغربي: الحماية والخبرة وإزالة التعدي",
      lead: "تخضع منازعات تداخل الحدود والترامي على أجزاء من العقارات لمقتضيات مدونة الحقوق العينية وظهير التحفيظ العقاري؛ حيث يلتزم كل مالك باحترام حدود ملكه وعدم إحداث أي منشآت فوق ملك جاره.",
      intro: [
        "تنشأ نزاعات الحدود في العقارات الفلاحية والحضرية نتيجة زحف الأسيجة، إقامة أسوار مخالفة للتصاميم، اندثار الأنصاب التاريخية، أو البناء فوق جزء من ملك الجار بحسن نية أو سوء نية.",
        "يتطلب حسم النزاع تدقيقاً مشتركاً بين الخبرة الطبوغرافية وتطبيق الرسوم الهندسية؛ حيث تختلف الحلول القانونية بين الحكم بهدم المنشآت المتعدية وإرجاع الحالة، أو شراء الجزء المعتدى عليه بالتعويض العادل إذا كان البناء بحسن نية طبقاً للمادة 237 من مدونة الحقوق العينية.",
      ],
      takeaways: [
        "تطبيق الرسوم العقارية والتصاميم الطبوغرافية عبر خبير محلف هو الوسيلة الحصرية لفض نزاعات الترامي وتداخل الحدود.",
        "إذا بنى الجار بحسن نية وتجاوز الحد دون علم، خُيّر المتضرر بين طلب إزالة البناء أو إلزام الجار بشراء القطعة بقيمتها العادلة (المادة 237).",
        "دعوى منع المعارضة ووقف الأعمال الضارة ترفع أمام القضاء الاستعجالي لإيقاف ورش البناء قبل اكتمال التعدي.",
      ],
      sections: [
        { id: "verify", title: "مطابقة التصاميم العقارية ومعاينة التعدي الميداني", paragraphs: ["في العقار المحفظ، يُعتبر التصميم العقاري الصادر عن المحافظة العقارية حجة قاطعة ومطابقة للرسم العقاري؛ ويلزم انتداب مهندس مساح طبوغرافي لمطابقة الإحداثيات الطبوغرافية (Coordonnées Lambert) مع موقع السور أو البناء المحدث.", "في العقار غير المحفظ، تتم دراسة الرسوم العدلية ومقارنة المعالم والحدود المنصوص عليها في عقود الطرفين ومحاضر الجوار."], bullets: ["الحصول على التصميم العقاري الرسمي والبيان المساحي من المحافظة.", "إنجاز محضر معاينة بواسطة مفوض قضائي يثبت إقامة المنشأة أو السور بالصور.", "طلب وقف أشغال البناء المتعدية أمام قضاء المستعجلات فوراً."] },
        { id: "prove", title: "الخبرة القضائية الطبوغرافية وتحديد نطاق الترامي", paragraphs: ["تأمر المحكمة بندب خبير مساح طبوغرافي معتمد للوقوف على عين المكان وتطبيق الرسوم والتصاميم العقارية ومقارنة الحدود المشتركة وتحديد المساحة المتعدى عليها بالسنتيمتر المربع.", "تعتبر خلاصات الخبرة القضائية الطبوغرافية أساس الحكم الفاصل في النزاع؛ ويحق للمحامي مناقشة تقرير الخبرة وتوجيه استفسارات فنية للخبير لضمان الدقة."], note: "إزالة أو نقل أنصاب التحفيظ المثبتة من طرف المحافظة العقارية يُعد جريمة يعاقب عليها الفصل 606 من القانون الجنائي." },
        { id: "resolve", title: "الآثار القانونية للتعدي ودعاوى الهدم والتعويض", paragraphs: ["إذا ثبت أن الجار أقام البناء أو السياج بسوء نية وهو يعلم تجاوزه لحدوده، قضت المحكمة وجوباً بهدم المنشآت المحدثة وإخلاء الجزء المعتدى عليه على نفقته وإرجاع الحالة إلى ما كانت عليه، مع أداء تعويض عن الحرمان من الاستغلال.", "أما إذا كان التعدي طفيفاً وبحسن نية تامة، فيحق للمحكمة إعمال المادة 237 من مدونة الحقوق العينية بإلزام الباني بشراء الجزء المشغول من الأرض بقيمته الحقيقية بالإضافة إلى تعويض الضرر اللاحق بالباقي."], bullets: ["المطالبة القضائية بهدم المنشآت المتعدية ورفع الترامي.", "المطالبة بالتعويض المالي عن الحرمان من الانتفاع والاستغلال.", "تقييد الحكم القضائي بالسجل العقاري لتصحيح الحدود والبيانات."] },
      ],
      checklistTitle: "الوثائق الضرورية لملف نزاع الحدود والترامي",
      checklistIntro: "يتطلب ملف الترامي إعداداً هندسياً وقضائياً دقيقاً قبل رفع الدعوى.",
      checklist: ["الرسم العقاري والتصميم العقاري الطبوغرافي الرسمي للعقار.", "محضر المعاينة المفوضية والصور الفوتوغرافية للمنشأة المتعدية.", "تقرير الخبرة الطبوغرافية المنجز من طرف مهندس مساح محلف.", "رخصة البناء وتصاميم ورش الجار للتدقيق في المخالفات المرتكبة.", "الإنذار الموجه للجار لوقف الأشغال والامتناع عن التعدي."],
      faqTitle: "أسئلة شائعة حول الترامي وتداخل الحدود العقارية",
      faqs: [
        { question: "كيف أتصرف فور شروع الجار في البناء أو إقامة سياج داخل أرضي؟", answer: "يجب المبادرة فوراً بإنجاز محضر معاينة بواسطة مفوض قضائي، ورفع دعوى استعجالية أمام رئيس المحكمة الابتدائية لوقف أشغال البناء مؤقتاً لدرء الضرر المحدق، ثم رفع دعوى الموضوع في منع المعارضة وهدم ما تم بناؤه وإرجاع الحالة إلى ما كانت عليه." },
        { question: "هل تلزم المحكمة بهدم البناء المتعدي دائماً؟", answer: "إذا ثبت سوء نية الباني وتعمده الترامي يُحكم بالهدم وجوباً؛ أما إذا كان البناء قد تم بحسن نية دون علم، وتجاوز حده بمسافة يسيرة لا تضر بباقي العقار، فإن المادة 237 من مدونة الحقوق العينية تمنح للمحكمة خيار إلزام الجار الباني بشراء المساحة المتعدى عليها بقيمتها الحقيقية مع تعويض الضرر تجنباً لهدم المنشآت المكلفة." },
        { question: "ما عقوبة نقل أنصاب التحديد أو تغيير معالم الحدود الفلاحية؟", answer: "يعاقب الفصل 606 من القانون الجنائي بالحبس من سنة إلى خمس سنوات وغرامة مالية كل من أزال أو نقل أو كسر أنصاب التحديد أو الحدود الفاصلة بين الأملاك العقارية بقصد نزع الحيازة أو تغيير معالم الملكية، فضلاً عن إلزامه مدنياً بإعادة الأنصاب إلى مواقعها الأصلية على نفقته." },
      ],
      ctaTitle: "هل ينازعكم الجار في حدود عقاركم أو تجاوز سياجه داخل أرضكم؟",
      ctaText: "تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لمباشرة مساطر المعاينة والخبرة الطبوغرافية وإلزام المعتدي باحترام الحدود القانونية.",
      serviceLabel: "العقار الفلاحي ونزاعات الحدود",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }, { label: "الوكالة الوطنية للمحافظة العقارية والمسح العقاري", url: ancfcc }],
    },
  },
};

export const saleOthersPropertyGuide: GuideDefinition = {
  key: "sale-others-property", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "immobilier", relatedGuides: ["caveat", "ownership-claim", "melkiya"],
  content: {
    fr: {
      slug: "vente-bien-autrui-maroc", seo: { title: "Vente du bien d’autrui au Maroc : droits et recours", description: "Un bien a été vendu par une personne non propriétaire ? Vérifications, effets du contrat, titre foncier, bonne foi et recours au Maroc." }, category: "Vente et propriété",
      h1: "Vente du bien d’autrui au Maroc : vérifications et recours", lead: "Lorsqu’une personne vend un immeuble ou une quote-part qui ne lui appartient pas, les effets ne se déduisent pas d’une formule unique : le contrat, le statut du bien et les inscriptions doivent être examinés.",
      intro: ["Le conflit peut naître d’une fausse qualité de propriétaire, d’une succession non réglée, d’un mandat dépassé, d’une double vente ou d’une erreur sur la parcelle. Il faut identifier ce qui a réellement été vendu et par qui.", "Pour un immeuble immatriculé, la publicité foncière joue un rôle central. Pour un bien non immatriculé, la chaîne des actes, la possession et les règles contractuelles doivent être analysées ensemble."],
      takeaways: ["Vérifier l’identité du vendeur et l’étendue exacte de ses droits.", "Distinguer la validité du contrat, son opposabilité et la responsabilité des parties.", "Agir sur la base du titre, des actes et des dates, pas sur une simple copie isolée."],
      sections: [
        { id: "detect", title: "Identifier la vente et le droit qui manquait au vendeur", paragraphs: ["Un vendeur peut être totalement étranger au bien, ne détenir qu’une quote-part ou agir sans pouvoir suffisant. La réponse dépend de cette situation et de la rédaction du contrat.", "Dans une succession, un héritier ne peut pas être traité comme propriétaire exclusif de tous les biens indivis. Il faut déterminer les droits transmis et l’objet exact de l’acte."], bullets: ["Contrôler identité, capacité et procuration du vendeur.", "Comparer la désignation du bien dans tous les actes.", "Vérifier titres, réquisitions, inscriptions et successions." ] },
        { id: "effects", title: "Distinguer contrat, transfert du droit et dommages", paragraphs: ["Le Code des obligations et des contrats encadre la vente de la chose d’autrui et ses conséquences. L’analyse peut concerner l’efficacité du transfert, les possibilités de confirmation ou d’acquisition ultérieure du droit, ainsi que les restitutions et dommages éventuels.", "La bonne ou mauvaise foi des personnes, la connaissance du conflit et les inscriptions réalisées peuvent influencer certaines demandes. Aucun résultat ne doit être affirmé avant lecture de l’acte complet."], note: "La formule « vente nulle automatiquement » est souvent trop simplificatrice : le régime applicable et les demandes doivent être qualifiés à partir du dossier." },
        { id: "protect", title: "Protéger le propriétaire et sécuriser la position de l’acquéreur", paragraphs: ["Le propriétaire doit réunir ses preuves, surveiller la situation foncière et évaluer rapidement les mesures conservatoires ou judiciaires utiles. L’acquéreur doit vérifier les garanties du vendeur et les demandes possibles liées au prix payé.", "Si l’acte concerne une parcelle rurale ou non immatriculée, l’identification du terrain et la chaîne de transmission deviennent déterminantes. Une expertise peut être nécessaire si deux actes semblent viser la même assiette."], bullets: ["Obtenir un état foncier récent lorsqu’il existe.", "Conserver preuves de paiement et échanges précontractuels.", "Éviter une nouvelle cession avant clarification de la situation." ] },
      ],
      checklistTitle: "Documents à faire examiner", checklistIntro: "Le dossier doit permettre de comparer le droit du vendeur et l’engagement pris.", checklist: ["Contrat contesté et annexes.", "Titre foncier, certificat ou actes de propriété antérieurs.", "Procurations et documents successoraux.", "Preuves de paiement, messages et mises en demeure.", "Plans et éléments identifiant précisément le bien."],
      faqTitle: "Questions sur la vente du bien d’autrui", faqs: [
        { question: "La vente du bien d’autrui est-elle toujours nulle au Maroc ?", answer: "Ses effets doivent être appréciés selon le Code des obligations et des contrats, la situation du véritable titulaire, le contenu de l’acte et le statut foncier. Une réponse automatique sans examen du dossier serait imprudente." },
        { question: "Que peut faire le véritable propriétaire ?", answer: "Il peut faire vérifier ses preuves, les inscriptions et l’acte contesté afin de choisir les demandes propres à protéger ou faire reconnaître son droit. L’urgence dépend notamment des opérations déjà publiées." },
        { question: "L’acheteur de bonne foi est-il automatiquement propriétaire ?", answer: "La bonne foi ne suffit pas à elle seule pour conclure. Ses effets dépendent du statut du bien, de la publicité foncière, des actes et des règles applicables." },
        { question: "Que faire en cas de double vente du même terrain ?", answer: "Il faut comparer les actes, leurs dates, leurs auteurs, la parcelle concernée et les formalités de publicité. La priorité ne peut pas être déduite du seul ordre des signatures." },
      ],
      ctaTitle: "Un bien a été vendu sans l’accord de son propriétaire ?", ctaText: "Le cabinet examine la chaîne des droits, le contrat, les inscriptions et les paiements avant de définir les demandes possibles.", serviceLabel: "Droit immobilier", sourcesLabel: "Textes officiels", sources: [{ label: "Ministère de la Justice — Code des obligations et des contrats", url: obligationsCode }, { label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }, { label: "Ministère de la Justice — dahir sur l’immatriculation foncière", url: landRegistrationLaw }],
    },
    ar: {
      slug: "بيع-ملك-الغير-في-القانون-المغربي",
      seo: { title: "بيع ملك الغير في القانون المغربي: بطلان التصرف وحقوق المالك والمشتري", description: "دليل بيع ملك الغير في قانون الالتزامات والعقود ومدونة الحقوق العينية بالمغرب: شروط الإبطال (الفصل 485 ق.ل.ع)، حقوق المالك الحقيقي، وضمانات المشتري." },
      category: "التفويتات العقارية وبطلان العقود",
      h1: "بيع ملك الغير في القانون المغربي: شروط البطلان ودعاوى الاسترداد",
      lead: "ينص الفصل 485 من قانون الالتزامات والعقود على أن 'بيع ملك الغير يقع صحيحاً إذا أقره المالك، أو إذا كسب البائع فيما بعد ملكية الشيء'؛ ويكون باطلاً وقابلاً للإبطال في مواجهة المالك الحقيقي.",
      intro: [
        "يتكرر بيع ملك الغير في المعاملات العقارية نتيجة تزوير الوكالات، أو تفويت وارث لكامل عقارات التركة المشاعة دون موافقة باقي الورثة، أو بيع عقارات محفظة باستعمال وثائق باطلة.",
        "يمنح القانون المغربي للمالك الحقيقي حق المطالبة بإبطال البيع والتشطيب على تقييده بالرسم العقاري واسترداد الحيازة، كما يضمن للمشتري حسن النية الرجوع على البائع باسترداد الثمن والتعويض عن الخسائر وثمار العقار.",
      ],
      takeaways: [
        "بيع ملك الغير لا ينفذ في حق المالك الحقيقي ويبقى باطلاً ما لم يقره صراحة أو ضمناً (الفصل 485 من ق.ل.ع).",
        "في العقار المحفظ، لا يحمي حسن النية المشتري إذا بُني تسجيله على تزوير أو تدليس صريح وفق التعديل الأخير للفصل 2 من مدونة الحقوق العينية (القانون 69.16).",
        "يحق للمشتري المغبون الرجوع على البائع بدعوى الضمان لاسترداد الثمن والمصروفات والتعويض الشامل.",
      ],
      sections: [
        { id: "detect", title: "صور بيع ملك الغير والتكييف القانوني للتفويت", paragraphs: ["تتعدد صور بيع ملك الغير: بيع عقار من طرف شخص أجنبي تماماً، أو بيع شريك على الشياع لكامل العقار متجاوزاً حصته (المادة 4 من مدونة الحقوق العينية)، أو بيع وكيل لعقار بعقد وكالة منتهية أو مزورة.", "لا ينتج العقد أي أثر ناقل للملكية في مواجهة المالك الحقيقي الذي لم يوقع العقد ولم يفوض البائع؛ ويحق له رفع دعوى بطلان العقد ودعوى الاستحقاق."], bullets: ["التدقيق في وكالات البيع وسلسلة الرسوم العقارية السابقة.", "التحقق من موافقة وإمضاء كافة الشركاء على الشياع في البيوعات المشاعة.", "مقارنة تاريخ البيع بتاريخ تأسيس الرسم العقاري أو انتقال الملكية."] },
        { id: "effects", title: "حماية المالك الحقيقي والطعن في التقييدات المزورة (القانون 69.16)", paragraphs: ["عدل القانون رقم 69.16 المادة 2 من مدونة الحقوق العينية ليقر بأن التقييدات الباطلة الناتجة عن تزوير أو تدليس لا تكسب المشتري حسن النية أي حق عيني، وتخضع للإلغاء والتشطيب متى رُفعت الدعوى داخل أجل 4 سنوات من تاريخ التقييد.", "يحق للمالك الحقيقي استصدار أمر بإجراء تقييد احتياطي فوري على الرسم العقاري لمنع إعادة تفويت العقار لأطراف أخرى ريثما يصدر حكم البطلان."], note: "رفع دعوى بطلان تسجيل بيع ملك الغير بالرسم العقاري داخل أجل 4 سنوات من التقييد يحمي المالك الحقيقي حتى ضد المشتري حسن النية." },
        { id: "protect", title: "حقوق وضمانات المشتري حسن النية ضد البائع", paragraphs: ["إذا حُكم بإبطال البيع واسترداد المالك لعقاره، يحق للمشتري حسن النية بمقتضى الفصلين 534 و538 من ق.ل.ع إلزام البائع برد كامل الثمن ومصروفات العقد، والفوائد القانونية، والتعويض عن زيادة قيمة العقار ونفقات التحسينات المحدثة.", "إذا ثبت علم البائع بعدم ملكيته وسوء نيته، يتابع جنائياً بتهمة النصب والاحتيال والتصرف في أموال غير قابلة للتفويت طبقاً للفصل 540 من القانون الجنائي."], bullets: ["رفع دعوى استرداد الثمن والتعويض عن الضرر ضد البائع الغاصب.", "تقديم شكاية جنحية بالنصب عند ثبوت التدليس وسوء النية الجنائية.", "إجراء حجوزات تحفظية على أموال البائع لضمان استرداد المبالغ المؤداة."] },
      ],
      checklistTitle: "الوثائق الضرورية لمنازعات بيع ملك الغير",
      checklistIntro: "يتعين إعداد وثائق الملكية والعقد المشوب بالبطلان بدقة لتأسيس دعاوى الإبطال والاسترداد.",
      checklist: ["شهادة الملكية العقارية التي تثبت صفة المالك الحقيقي وتاريخ التفويت المطعون فيه.", "نسخة من عقد البيع المطعون فيه بالبطلان ومرفقاته والوكالات المعتمدة.", "ما يثبت عدم صدور أي إقرار أو توكيل من المالك الحقيقي للبائع.", "نسخ الشكايات والمحاضر الجنائية في حال وجود تزوير أو نصب.", "المقال الرامي إلى إبطال البيع والتشطيب على التقييد بالرسم العقاري."],
      faqTitle: "أسئلة شائعة حول بيع ملك الغير في القانون المغربي",
      faqs: [
        { question: "هل يسري بيع ملك الغير في حق المالك الحقيقي إذا كان المشتري حسن النية؟", answer: "لا يسري بيع ملك الغير إطلاقاً في حق المالك الحقيقي؛ وبعد تعديل المادة 2 من مدونة الحقوق العينية بالقانون 69.16، فإن إبطال التقييد المزور أو التدليسي يرجع العقار للمالك الحقيقي ويشطب على اسم المشتري حتى لو ادعى حسن النية، شريطة أن يرفع المالك دعواه داخل أجل 4 سنوات من تاريخ التقييد بالرسم العقاري." },
        { question: "ما هي الحقوق المخولة للمشتري الذي انتُزع منه العقار بعد إبطال بيع ملك الغير؟", answer: "يخول القانون للمشتري الرجوع على البائع بدعوى الضمان لاسترداد كامل الثمن المدفوع، مصاريف العقد والرسوم القضائية، والتعويض عن كافة الخسائر بما فيها قيمة المنشآت والتحسينات التي أحدثها في العقار وفارق ارتفاع أسعار العقارات طبقاً للفصل 538 من ق.ل.ع." },
        { question: "ما هو حكم تفويت أحد الشركاء على الشياع لكامل العقار دون إذن باقي الورثة؟", answer: "يقع هذا التفويت صحيحاً ونافذاً في حدود الحصة الشائعة التي يملكها الشريك البائع فقط، ويعتبر بيعاً لملك الغير بالنسبة لحصص باقي الشركاء وغير نافذ في حقهم، ويحق لباقي الشركاء إبطاله جزئياً أو ممارسة حق الشفعة في الحصة المبيعة واسترداد ملكهم المشاع." },
      ],
      ctaTitle: "هل فُوّت عقاركم بغير إذنكم أو اشتريتم عقاراً اتضح أنه ملك للغير؟",
      ctaText: "بادروا بعرض العقود والشهادات العقارية على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لمباشرة دعاوى الإبطال واسترداد الأموال وصيانة الحقوق.",
      serviceLabel: "القانون العقاري وإبطال العقود",
      sourcesLabel: "النصوص الرسمية",
      sources: [{ label: "وزارة العدل — قانون الالتزامات والعقود", url: obligationsCode }, { label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }, { label: "وزارة العدل — ظهير التحفيظ العقاري", url: landRegistrationLaw }],
    },
  },
};

export const ownershipClaimGuide: GuideDefinition = {
  key: "ownership-claim", publishedAt: "2026-09-27", updatedAt: "2026-09-27", serviceKey: "foncierRural", relatedGuides: ["melkiya", "sale-others-property", "encroachment"],
  content: {
    fr: {
      slug: "action-revendication-propriete-maroc", seo: { title: "Action en revendication de propriété au Maroc", description: "Revendiquer un terrain au Maroc : identifier le bien, prouver la propriété, répondre aux actes adverses et préparer l’expertise." }, category: "Preuve de la propriété",
      h1: "Action en revendication de propriété au Maroc : preuves et préparation", lead: "Revendiquer un immeuble suppose d’établir son droit sur une parcelle précisément identifiée et de répondre aux actes et à la possession invoqués par l’adversaire.",
      intro: ["Dire « ce terrain m’appartient » ne suffit pas devant une contestation. Le demandeur doit relier ses titres, successions ou autres modes d’acquisition au terrain effectivement occupé.", "La stratégie diffère entre immeuble immatriculé, terrain en cours d’immatriculation et bien non immatriculé. Il faut aussi distinguer une revendication de propriété d’une demande uniquement fondée sur la possession ou sur un contrat."],
      takeaways: ["La parcelle revendiquée doit être identifiable sans ambiguïté.", "La chaîne des droits doit être reconstituée jusqu’au demandeur.", "Les pièces adverses et la possession doivent être analysées, pas ignorées."],
      sections: [
        { id: "identify", title: "Identifier le bien objet de la revendication", paragraphs: ["Les noms locaux, les anciennes confrontations et les superficies approximatives peuvent désigner des terrains différents. Plans, limites, accès, références voisines et opérations de bornage permettent de rattacher les actes au terrain.", "Si la demande porte sur une partie seulement, cette emprise doit être localisée. Une expertise mal préparée ne peut pas compenser une désignation incohérente dans les actes."], bullets: ["Comparer toutes les désignations et superficies.", "Repérer les parcelles et titres voisins.", "Documenter les limites et l’occupation actuelle." ] },
        { id: "rights", title: "Reconstituer l’origine et la continuité des droits", paragraphs: ["La preuve peut impliquer des actes de propriété, ventes, donations, successions, décisions ou inscriptions. Il faut montrer comment le droit est passé jusqu’à la personne qui agit.", "Une rupture dans les actes, une différence de nom ou une succession non liquidée doit être expliquée. Les documents doivent aussi être confrontés à ceux produits par la partie adverse."], note: "La force probante de chaque document dépend du régime du bien et du contexte. Une Melkiya et un titre foncier ne produisent pas les mêmes effets." },
        { id: "litigation", title: "Formuler la demande et préparer l’expertise", paragraphs: ["La juridiction, les parties à appeler et les demandes dépendent du statut du bien et de la nature du conflit. Une demande mal définie peut laisser subsister une difficulté d’exécution même après jugement.", "Lorsque les limites ou l’identité de la parcelle sont contestées, l’expertise doit recevoir des documents complets et une mission utile. Les observations faites pendant les opérations doivent être cohérentes avec les actes invoqués."], bullets: ["Identifier tous les détenteurs et titulaires concernés.", "Présenter une chronologie lisible des droits et de l’occupation.", "Préparer les points techniques à soumettre à l’expert." ] },
      ],
      checklistTitle: "Constituer le dossier de propriété", checklistIntro: "Classez les pièces par origine du droit, identification du terrain et occupation.", checklist: ["Titre foncier, Melkiya et actes de transmission.", "Actes de succession, procurations et décisions antérieures.", "Plans, procès-verbaux, photographies et repères de limites.", "Pièces de l’adversaire déjà communiquées.", "Preuves d’exploitation, d’entretien et chronologie de la possession."],
      faqTitle: "Questions sur la revendication de propriété", faqs: [
        { question: "Quels documents prouvent la propriété d’un terrain au Maroc ?", answer: "Ils dépendent du statut du terrain : titre et inscriptions pour un immeuble immatriculé, ou ensemble d’actes, transmissions et éléments pertinents pour un bien non immatriculé. Les documents doivent correspondre à la parcelle réelle." },
        { question: "Peut-on revendiquer une partie seulement d’un terrain ?", answer: "La demande peut concerner une emprise déterminée, mais cette partie doit être localisée précisément et reliée aux droits invoqués. Les plans et mesures sont alors essentiels." },
        { question: "La possession suffit-elle pour gagner une action en propriété ?", answer: "La possession peut avoir une importance juridique, surtout selon le statut du bien, mais elle ne doit pas être isolée des actes, de sa durée, de ses caractères et des moyens adverses." },
        { question: "Pourquoi une expertise foncière est-elle ordonnée ?", answer: "Elle peut aider à identifier la parcelle, comparer les plans et matérialiser les limites. Elle éclaire les faits techniques mais ne remplace pas l’appréciation juridique du tribunal." },
      ],
      ctaTitle: "Votre propriété est contestée ?", ctaText: "Le cabinet reconstitue les droits, identifie la parcelle et prépare les questions juridiques et techniques du dossier.", serviceLabel: "Foncier rural et agricole", sourcesLabel: "Textes et organisme officiels", sources: [{ label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }, { label: "Ministère de la Justice — dahir sur l’immatriculation foncière", url: landRegistrationLaw }, { label: "ANCFCC — conservation foncière et cadastre", url: ancfcc }],
    },
    ar: {
      slug: "دعوى-الاستحقاق-في-القانون-المغربي",
      seo: { title: "دعوى الاستحقاق العقارية في القانون المغربي: إثبات الملكية وترجيح الحجج", description: "دليل دعوى الاستحقاق العقاري بالمغرب: شروط الملك التام، قواعد ترجيح البينات والرسوم العدلية، والخبرة القضائية طبقاً لمدونة الحقوق العينية (المادة 241)." },
      category: "إثبات الملكية العقارية",
      h1: "دعوى الاستحقاق العقارية في القانون المغربي: القواعد وشروط الإثبات وترجيح الرسوم",
      lead: "تُعد دعوى الاستحقاق العقارية الدعوى العينية الأساسية التي يمارسها المالك غير الحائز ضد واضع اليد لاسترداد عقاره غير المحفظ والاعتراف بملكيته الشرعية والقانونية.",
      intro: [
        "تنشأ دعوى الاستحقاق عند قيام نزاع جوهري حول أصل الملكية في العقارات غير المحفظة أو في طور التحفيظ، وتخضع لأحكام الفقه المالكي المقننة في المواد 239 إلى 243 من القانون رقم 39.08 (مدونة الحقوق العينية).",
        "يتحمل المدعي في دعوى الاستحقاق عبء إثبات تملكه بإدلاء رسم ملكية عدلي أو استمرار صحيح مستوفٍ لشروط الملك التام؛ وتخضع حجج الطرفين لقواعد الترجيح الفقهية الصارمة تحت رقابة محكمة النقض.",
      ],
      takeaways: [
        "المدعي في دعوى الاستحقاق ملزم بإثبات الملك وأصله؛ والحائز معفى من الإثبات حتى يدلي المدعي بحجة تامة (المادة 239).",
        "ترجح بينة إثبات الملك التام والناقل للملكية على بينة الحيازة المجردة غير المقترنة بأصل التملك.",
        "في العقار المحفظ، يغني الرسم العقاري عن دعوى الاستحقاق لتمتعه بالحجية المطلقة وقوة الإثبات التطهيرية.",
      ],
      sections: [
        { id: "identify", title: "تحديد الوعاء العقاري وتطابق الحدود والمساحة", paragraphs: ["يشترط لقبول دعوى الاستحقاق تحديد العقار المدعى فيه تحديداً نافياً للجهالة ببيان اسمه، موقعه، مساحته، وحدوده الأربعة بالتدقيق، ومطابقتها التامة مع العقار الذي يضع المدعى عليه يده عليه.", "تأمر المحكمة بإجراء معاينة قضائية أو ندب خبير طبوغرافي للوقوف على عين المكان لتطبيق حدود رسم الملكية على أرض الواقع والتأكد من انطباق السند على العقار المتنازع بشأنه."], bullets: ["بيان موقع العقار وإحداثياته وحدوده المجاورة بدقة.", "مطابقة الرسم العدلي أو العقد مع واقع العقار الميداني.", "إثبات صفة واضع اليد وسبب احتلاله للعقار دون وجه حق."] },
        { id: "rights", title: "شروط رسم الملكية وإثبات شروط الملك التام (المادة 240)", paragraphs: ["يشترط في الحجة المدلى بها أن تثبت عناصر الملك التام الستة: واضعاً يده، متصرفاً، تصرف المالك في ملكه، هادئاً، علنياً، دون منازع، منسوباً لأصل الملك، ومستوفياً لمدة الحيازة المكسبة (10 سنوات بين الأجانب و40 سنة بين الأقارب).", "إذا أثبت المدعي ملكية مورثه، تعين عليه الإدلاء برسم إراثة وفريضة شرعية تثبت صفته وأيلولة العقار إليه بالإرث."], note: "البينة التي لا تذكر سبب الملك أو تشهد بمجرد الحيازة دون نسبة العقار لأصل ملكه تعتبر بينة ناقصة تسقط أمام البينة التامة." },
        { id: "litigation", title: "قواعد ترجيح الحجج عند تدافع البينات (المادة 241)", paragraphs: ["تطبق المحكمة قواعد الترجيح المنصوص عليها في المادة 241 من مدونة الحقوق العينية: تُرجح بينة التفويت الناقلة للملك على بينة الاستمرار، وتُرجح البينة الأقدم تاريخاً عند التساوي، وتُرجح البينة التي تشهد بأصل الملك على بينة الحيازة المجردة.", "عند عجز الطرفين عن الإدلاء برسم تملك قاطع، يُرجح جانب الحائز بيمينه استصحاباً للأصل."], bullets: ["إثبات أسبقية الحيازة وسلامة سند التملك الشرعي.", "مناقشة شهادات اللفيف المدلى بها والطعن في عيوبها ومخالفاتها الفقهية.", "المطالبة بإرجاع العقار وثماره ومحصولاته الناتجة طيلة مدة الغصب."] },
      ],
      checklistTitle: "الوثائق الأساسية لإقامة دعوى الاستحقاق العقارية",
      checklistIntro: "يتطلب تأسيس دعوى الاستحقاق تدقيقاً وثائقياً صارماً في شروط رسم الملكية وسلسلة التملك.",
      checklist: ["أصل رسم الملكية العدلي أو عقد الشراء التوثيقي المستوفي للشروط الشرعية.", "رسم الإراثة العدلي وسلسلة عقود التفويتات القديمة.", "تقرير معاينة منجز بواسطة مفوض قضائي يثبت حيازة المدعى عليه ورفضه التخلي.", "تصميم طبوغرافي منجز من طرف مهندس مساح يحدد مساحة العقار وحدوده.", "المذكرات الجوابية وتقارير الخبرات السابقة إن وُجدت."],
      faqTitle: "أسئلة شائعة حول دعوى الاستحقاق العقاري بالمغرب",
      faqs: [
        { question: "من يتحمل عبء الإثبات في دعوى الاستحقاق العقارية؟", answer: "يتحمل المدعي عبء الإثبات كاملاً طبقاً لقاعدة 'البينة على من ادعى واليمين على من أنكر'؛ وعليه الإدلاء برسم ملكية تام يثبت تملكه للعقار استناداً إلى سند صحيح أو حيازة مكسبة قانونية؛ أما المدعى عليه الحائز فموقفه سلبي ومحمي بقرينة الحيازة ولا يطالب بإثبات تملكه إلا بعد أن يدلي المدعي بحجة معتبرة شرعاً وقانوناً." },
        { question: "كيف تفصل المحكمة عند تعارض رسمين عدليين للملكية متكافئين في القوة؟", answer: "تطبق المحكمة قواعد ترجيح البينات المقررة في المادة 241 من مدونة الحقوق العينية؛ فتُرجح البينة التي تشهد بسبب الملك (كالشراء أو المعاوضة) على بينة الاستمرار المجردة، وتُرجح البينة التي تشهد بالملك القديم على الحادث، وإذا تساوت الرسوم في القوة والتاريخ وتناقضت الشهادات يُرجح جانب الحائز المقترن بيمينه الشرعي." },
        { question: "هل تجوز دعوى الاستحقاق ضد عقار محفظ برسم عقاري نهائي؟", answer: "لا، لا تجوز إقامة دعوى الاستحقاق في مواجهة عقار محفظ مؤسس برسم عقاري نهائي نظراً لحجيته المطلقة والتطهيرية المقررة بالفصل 62 من ظهير التحفيظ العقاري؛ وينحصر نطاق دعوى الاستحقاق في العقارات غير المحفظة أو تلك التي لا زالت في طور التحفيظ عبر مسطرة التعرض على مطلب التحفيظ." },
      ],
      ctaTitle: "هل ينازعكم شخص في ملكية أرضكم أو ترغبون في استرداد عقار مستولى عليه؟",
      ctaText: "تفضلوا بعرض رسومكم ومستنداتكم على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لبناء خطة الترافع وترجيح حججكم أمام القضاء العقاري.",
      serviceLabel: "القانون العقاري وإثبات الملكية",
      sourcesLabel: "النصوص والجهات الرسمية",
      sources: [{ label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }, { label: "وزارة العدل — ظهير التحفيظ العقاري", url: landRegistrationLaw }, { label: "الوكالة الوطنية للمحافظة العقارية والمسح العقاري", url: ancfcc }],
    },
  },
};
