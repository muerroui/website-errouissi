import type { GuideDefinition } from "@/lib/guide-types";

const taxDocumentation = "https://www.tax.gov.ma/wps/portal/DGI/Documentation-fiscale";
const familyCode = "https://adala.justice.gov.ma/api/uploads/2024/12/12/DAHIR%20N%C2%B0%201-04-22%20PORTANT%20PROMULGATION%20DE%20LA%20LOI.PDF-1734012188728.pdf";
const civilProcedureCode = "https://adala.justice.gov.ma/api/uploads/2024/02/28/Code%20de%20proc%C3%A9dure%20civile-1709129409071.pdf";

export const taxDisputeGuide: GuideDefinition = {
  key: "tax-dispute", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "fiscal",
  content: {
    fr: {
      slug: "controle-fiscal-contestation-maroc", seo: { title: "Contrôle fiscal et contestation au Maroc", description: "Contrôle fiscal au Maroc : avis, pièces, réponse à la rectification, délais, recours et préparation d’un contentieux fiscal." }, category: "Contentieux fiscal",
      h1: "Contrôle fiscal et contestation au Maroc", lead: "Un contrôle fiscal se prépare à partir des documents comptables, déclarations, notifications et délais propres à la procédure, sans attendre que les échanges deviennent contentieux.",
      intro: ["Une demande d’information, un avis de vérification, une proposition de rectification et un acte de recouvrement ne produisent pas les mêmes effets. La première tâche consiste à qualifier le document reçu et à identifier l’étape de la procédure.", "La réponse doit être cohérente avec les déclarations, la comptabilité, les contrats et les flux réels. Une contestation utile explique les faits, produit les justificatifs et traite séparément chaque point discuté."],
      takeaways: ["La nature du document reçu détermine l’action et le délai à respecter.", "Les pièces doivent être classées par période et rapprochées des montants contestés.", "Le recours administratif ou judiciaire se prépare dès les premiers échanges avec l’administration."],
      sections: [
        { id: "notice", title: "Identifier l’acte fiscal et son délai", paragraphs: ["Chaque courrier doit être lu intégralement : impôt concerné, période vérifiée, motifs, montants, modalités de réponse et voies de recours. La date de réception et le mode de notification doivent être conservés.", "Répondre trop tôt sans pièces ou trop tard après l’expiration d’un délai peut réduire les options. Il faut d’abord établir un calendrier fiable de la procédure."], bullets: ["Conserver l’enveloppe, l’accusé ou la preuve de notification.", "Lister les impôts, exercices et montants concernés.", "Repérer le délai et l’autorité à laquelle répondre."] },
        { id: "evidence", title: "Construire une réponse documentée", paragraphs: ["Une réponse solide relie chaque rectification aux déclarations, écritures, factures, contrats, relevés et explications économiques correspondantes. Les pièces doivent être lisibles et organisées.", "Pour un particulier, un agriculteur ou une entreprise, la documentation pertinente diffère. Il ne faut ni produire des volumes inutiles ni omettre le document qui explique l’opération contestée."], note: "Le droit fiscal évolue régulièrement. Le texte applicable est celui de la période et de la procédure concernées, pas nécessairement la version consultée aujourd’hui." },
        { id: "appeal", title: "Organiser la contestation et les recours", paragraphs: ["Lorsque le désaccord persiste, les réclamations et recours doivent reprendre une chronologie claire, les bases juridiques utiles et les justificatifs. Les points admis et ceux contestés doivent être distingués.", "Le paiement, le recouvrement et la contestation sont des questions liées mais distinctes. Leur articulation doit être vérifiée pour éviter qu’une démarche sur le fond fasse oublier une mesure urgente."], bullets: ["Établir un tableau des chefs de rectification.", "Associer à chacun les faits, arguments et pièces.", "Vérifier séparément les mesures de recouvrement et les garanties éventuelles."] },
      ],
      checklistTitle: "Préparer l’analyse fiscale", checklistIntro: "Le dossier doit permettre de comprendre la procédure, les montants et la réalité des opérations examinées.",
      checklist: ["Avis, notifications, réponses et preuves de réception.", "Déclarations fiscales des périodes concernées.", "Comptabilité, factures, contrats et relevés pertinents.", "Tableau des montants et chefs de rectification.", "Décisions, avis de mise en recouvrement et démarches déjà engagées."],
      faqTitle: "Questions sur le contrôle fiscal",
      faqs: [
        { question: "Que faire à la réception d’un avis de contrôle ?", answer: "Il faut identifier la nature de l’avis, les périodes et impôts concernés, conserver sa preuve de réception puis organiser immédiatement les documents et le calendrier de réponse." },
        { question: "Peut-on contester une rectification fiscale ?", answer: "Une rectification peut être discutée selon la procédure applicable. La réponse doit traiter les motifs, respecter les délais et être accompagnée des justificatifs pertinents." },
        { question: "Une réclamation suspend-elle automatiquement le recouvrement ?", answer: "Il ne faut pas le présumer. Les effets d’une réclamation et les règles relatives au recouvrement doivent être vérifiés séparément selon l’acte et la situation." },
      ],
      ctaTitle: "Vous avez reçu une notification fiscale ?", ctaText: "Le cabinet examine l’acte, les délais, les montants et les justificatifs afin de structurer la réponse ou le recours approprié.", serviceLabel: "Droit fiscal",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "Direction Générale des Impôts — documentation fiscale", url: taxDocumentation }],
    },
    ar: {
      slug: "المراقبة-والمنازعات-الضريبية",
      seo: { title: "المراقبة والمنازعات الضريبية في المغرب: المساطر والآجال والطعون", description: "دليل المراقبة الجبائية بالمغرب: فحص المحاسبة، رسائل التبليغ والتصحيح، أجل 30 يوماً، والطعن أمام اللجان واللجنة الوطنية (CNRF) والمحاكم الإدارية." },
      category: "المنازعات الضريبية والجبائية",
      h1: "المراقبة والمنازعات الضريبية في المغرب: المساطر والآجال والطعون",
      lead: "تخضع مسطرة المراقبة الضريبية للضوابط الصارمة للمدونة العامة للضرائب (CGI)؛ حيث يتعين على الملزم تدقيق أوجه البطلان الشكلي والتقيد بالآجال المسقطة لحقه في الدفاع.",
      intro: [
        "تتوزع المسطرة الجبائية التواجهية بين الفحص المحاسبي بالمقاولة أو فحص مجموع الوضعية الضريبية للأفراد، وتمر عبر توجيه رسائل التبليغ والتصحيح الأولى والثانية المحددة في المادتين 220 و221 من المدونة العامة للضرائب.",
        "يترتب على عدم الرد على الإشعار بالتصحيح داخل أجل 30 يوماً القانوني سقوط حق الملزم وفرض الضريبة تلقائياً بجدول التحصيل؛ مما يوجب بناء دفوع محاسبية وقانونية صلبة منذ المرحلة الإدارية الأولى.",
      ],
      takeaways: [
        "أجل الرد على رسائل التبليغ الضريبي الأولى والثانية هو 30 يوماً صارماً من تاريخ تسلم التبليغ (المادتان 220 و221 من CGI).",
        "المنازعة في تقديرات الإدارة الجزافية تتطلب الإدلاء بدفاتر محاسبية قانونية وفواتير مطابقة للشروط الجبائية.",
        "الطعن أمام اللجنة المحلية لتقدير الضريبة (CLT) واللجنة الوطنية (CNRF) مرحلة إلزامية قبل التوجه إلى المحكمة الإدارية في نزاعات الوعاء.",
      ],
      sections: [
        { id: "notice", title: "تدقيق رسائل التبليغ والتصحيح والآجال المسقطة", paragraphs: ["يلزم فور التوصل بأي إشعار أو رسالة تبليغ بالتصحيح الاحتفاظ بغلاف التبليغ وشهادة التسليم الموقعة مع العون المبلغ لتحديد تاريخ بداية أجل 30 يوماً القانوني بدقة.", "تجب دراسة أسباب التصحيح وسندات إعادة التقدير، والتأكد مما إذا كانت الإدارة قد احترمت الضمانات القانونية للملزم (كأجل 15 يوماً للإشعار بالفحص، ومدة الفحص المقررة في المادة 212)."], bullets: ["حصر تاريخ التوصل الدقيق وحساب أجل 30 يوماً كاملة للرد.", "التأكد من توقيع مفتش الضرائب ذي الاختصاص وبيان الأسس القانونية للتصحيح.", "التحقق من عدم تقادم السنوات الخاضعة للفحص (تقادم 4 سنوات بمقتضى المادة 232)."] },
        { id: "evidence", title: "بناء الدفوع المحاسبية وتفنيد التقدير الجزافي", paragraphs: ["يتعين تقديم مذكرة جوابية تفصيلية تدحض كل نقطة تصحيح على حدة، وتعتمد على القيود المحاسبية، القوائم التركيبية، كشوفات الحسابات البنكية، والاتفاقيات التجارية المبرمة.", "في الضرائب العقارية (TPI)، يتم تفنيد تقييمات مفتش الضرائب عبر المقارنة مع عقارات مجاورة ذات مواصفات متطابقة والطعن في مراجع الأسعار إذا كانت لا تعكس العيوب الواقعية للعقار."], note: "السكوت أو الجواب العام دون وثائق مثبتة يؤدي إلى رفض دفوع الملزم وصدور رسالة التبليغ الثانية بفرض الضريبة بصفة نهائية." },
        { id: "appeal", title: "المساطر أمام اللجان الضريبية والقضاء الإداري", paragraphs: ["إذا استمر الخلاف بعد الجواب على رسالة التبليغ الثانية، يتعين على الملزم طلب إحالة النزاع داخل أجل 30 يوماً على اللجنة المحلية لتقدير الضريبة (CLT) أو اللجنة الوطنية (CNRF) بحسب سقف رقم المعاملات ونوع الضريبة.", "تخضع المقررات الضريبية الصادرة بعد استنفاد مسطرة اللجان للطعن أمام المحكمة الإدارية داخل أجل 60 يوماً من تاريخ التبليغ، للمطالبة بالإلغاء أو إسقاط الزيادات والفوائد."], bullets: ["تقديم طلب الإحالة على اللجنة الضريبية المختصة داخل الأجل القانوني.", "إعداد مذكرة تفصيلية أمام اللجنة الوطنية للنظر في الطعون المتعلقة بالضريبة.", "رفع دعوى قضائية أمام المحكمة الإدارية في حال تعسف الإدارة أو خرق المسطرة."] },
      ],
      checklistTitle: "الوثائق الضرورية لملف المنازعة الضريبية",
      checklistIntro: "ينبغي جمع الملف الوثائقي والمحاسبي بدقة لبناء رد قانوني وتقني مدعم أمام الإدارة واللجان.",
      checklist: ["نسخة من إشعار الفحص ورسائل التبليغ الأولى والثانية وأغلفة التبليغ.", "التصريحات الضريبية والميزانيات والقوائم التركيبية للسنوات المفتوحة.", "نسخ الفواتير والعقود والاتفاقيات والكشوفات البنكية ذات الصلة بالنزاع.", "المذكرات الجوابية السابقة ومحاضر جلسات الاستماع إن وُجدت.", "جداول الضريبة، الإنذارات القانونية، أو إشعارات التحصيل الجبري الصادرة."],
      faqTitle: "أسئلة شائعة حول المراقبة والمنازعات الضريبية بالمغرب",
      faqs: [
        { question: "ما هي الآثار القانونية المترتبة على عدم الرد داخل أجل 30 يوماً على رسالة التصحيح؟", answer: "يترتب على عدم الرد داخل أجل 30 يوماً قبول الملزم الضمني للأسس المقترحة من طرف إدارة الضرائب، ويحق للإدارة فور انصرام الأجل إصدار جداول الضرائب الإضافية والغرامات والزيادات دون تمكينه من الطعن أمام اللجان الضريبية، ولا يبقى أمامه سوى اللجوء إلى القضاء الإداري في إطار مسطرة التظلم المعقدة المقررة في المادة 235 من المدونة العامة للضرائب." },
        { question: "كيف تتم مسطرة الطعن أمام اللجنة الوطنية للنظر في الطعون المتعلقة بالضريبة (CNRF)؟", answer: "تختص اللجنة الوطنية بالنظر في الطعون المتعلقة بفحص محاسبة المنشآت التي يفوق رقم معاملاتها 10 ملايين درهم أو في النزاعات المحالة بعد بت اللجان المحلية؛ ويتعين رفع الطعن إليها داخل أجل 30 يوماً من تاريخ تبليغ مقرر اللجنة المحلية، وتصدر مقررات معللة تقبل الطعن القضائي أمام المحكمة الإدارية." },
        { question: "هل يمكن تقديم ضمانات لإيقاف إجراءات التحصيل الجبري للدين الضريبي المتنازع عليه؟", answer: "نعم، يحق للملزم الذي قدم مطالبة نزاعية أمام الإدارة الضريبية طلب إيقاف أداء الجزء المتنازع عليه طبقاً للمادة 117 من مدونة تحصيل الديون العمومية، شريطة تكوين ضمانة مالية أو كفالة بنكية أو رهن عقاري تغطي أصل الدين موضوع النزاع." },
      ],
      ctaTitle: "هل توصلتم بتبليغ تصحيح ضريبي أو إشعار فحص جبائي؟",
      ctaText: "تواصلوا فوراً مع مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتدقيق الآجال وإعداد الردود القانونية والمحاسبية الكفيلة بحماية حقوقكم المالية.",
      serviceLabel: "المنازعات والتحصيل الضريبي",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "المديرية العامة للضرائب — الوثائق الجبائية", url: taxDocumentation }],
    },
  },
};

export const inheritanceGuide: GuideDefinition = {
  key: "inheritance", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "succession",
  content: {
    fr: {
      slug: "heritage-succession-maroc", seo: { title: "Héritage et liquidation d’une succession au Maroc", description: "Succession au Maroc : acte d’hérédité, inventaire, dettes, liquidation, partage des immeubles et gestion d’un conflit entre héritiers." }, category: "Successions",
      h1: "Héritage et liquidation d’une succession au Maroc", lead: "Régler une succession ne consiste pas uniquement à calculer des parts : il faut identifier les héritiers, inventorier l’actif et le passif, préserver les biens puis organiser leur transmission ou leur partage.",
      intro: ["Le décès ouvre une période pendant laquelle les biens, créances et dettes doivent être identifiés. Le Code de la famille encadre notamment la liquidation de la succession, tandis que les règles procédurales organisent l’inventaire et le partage judiciaire.", "Lorsque la succession comprend des terres agricoles, des biens non immatriculés ou des immeubles occupés par certains héritiers, les questions successorales et foncières doivent être traitées ensemble."],
      takeaways: ["L’acte d’hérédité identifie les héritiers mais ne dresse pas, à lui seul, l’inventaire complet de la succession.", "Les dettes et charges de la succession doivent être examinées avant le partage définitif.", "Le partage d’un bien immobilier dépend de ses titres, de sa divisibilité et des droits de tous les héritiers."],
      sections: [
        { id: "identify", title: "Identifier les héritiers et préserver la succession", paragraphs: ["Il faut réunir les actes d’état civil et le document établissant la qualité d’héritier, puis rechercher les biens, comptes, créances, dettes et procédures en cours. Des mesures de préservation peuvent être nécessaires lorsqu’un bien risque d’être dissipé ou dégradé.", "La qualité d’héritier ne permet pas à une personne de s’approprier seule un bien successoral ou d’écarter les autres de l’information et des décisions qui les concernent."], bullets: ["Établir la liste des héritiers et leurs coordonnées.", "Recenser les biens mobiliers et immobiliers.", "Identifier les dettes, charges et actes urgents de conservation."] },
        { id: "liquidate", title: "Inventorier et liquider avant de partager", paragraphs: ["La liquidation vise à établir ce qui compose réellement la succession et à traiter les opérations qui doivent précéder le partage. Les documents bancaires, fiscaux, contractuels et fonciers doivent être rapprochés.", "Lorsque les héritiers s’accordent, ils peuvent organiser les opérations nécessaires. À défaut, le recours au tribunal et, selon le dossier, à un liquidateur, un inventaire ou une expertise peut être envisagé."], note: "La répartition théorique des parts ne règle pas les questions de propriété contestée, de dette, d’occupation ou de valeur des biens." },
        { id: "property", title: "Partager des immeubles et terres agricoles", paragraphs: ["Pour chaque immeuble, il faut vérifier le titre foncier ou les documents de propriété, les inscriptions, les limites et les occupations. Un terrain non immatriculé ou une exploitation agricole peut nécessiter des vérifications supplémentaires.", "Le partage peut être amiable si tous les droits sont établis et l’accord exécutable. À défaut, le partage judiciaire peut conduire à une expertise et, pour un bien non partageable, à une vente par licitation."], bullets: ["Évaluer la divisibilité matérielle et juridique.", "Préserver l’accès et la viabilité des éventuels lots.", "Documenter les revenus, dépenses et occupations depuis le décès."] },
        { id: "conflict", title: "Traiter un blocage entre héritiers", paragraphs: ["Un conflit peut venir d’un héritier absent, d’une occupation exclusive, d’un désaccord sur la vente ou d’une contestation de propriété. Il faut distinguer le problème relationnel de la question juridique qui empêche le règlement.", "Une négociation ou une médiation peut aboutir si les droits, les valeurs et les étapes d’exécution sont clairs. Lorsque le blocage persiste, les demandes judiciaires doivent être ciblées sur la difficulté réelle." ] },
      ],
      checklistTitle: "Préparer un dossier de succession", checklistIntro: "Un dossier ordonné facilite l’inventaire, la discussion entre héritiers et le choix de la procédure.",
      checklist: ["Acte de décès, acte d’hérédité et pièces d’identité des héritiers.", "Titres fonciers, actes de propriété, contrats et plans.", "Relevés, créances, dettes et documents fiscaux disponibles.", "Correspondances, accords ou procédures déjà engagées.", "Éléments relatifs à l’occupation, l’exploitation et aux revenus des biens."],
      faqTitle: "Questions sur la succession au Maroc",
      faqs: [
        { question: "L’acte d’hérédité suffit-il pour partager les biens ?", answer: "Il établit la qualité des héritiers, mais il faut encore identifier l’actif, les dettes, les titres et les opérations nécessaires avant un partage valable et exécutable." },
        { question: "Que faire lorsqu’un héritier occupe seul la maison ou la ferme ?", answer: "Il faut établir les droits de tous, documenter l’occupation et rechercher une organisation amiable ou une mesure judiciaire adaptée. L’occupation exclusive ne fait pas disparaître les droits des autres héritiers." },
        { question: "Comment partager une terre agricole entre plusieurs héritiers ?", answer: "Il faut vérifier les titres, la superficie, les accès, le régime foncier et la divisibilité. Si une division viable est impossible, d’autres solutions amiables ou judiciaires doivent être étudiées." },
        { question: "Combien coûte une procédure de succession ?", answer: "Le coût dépend du nombre de biens et d’héritiers, des actes, des expertises, des difficultés foncières et de la procédure. Une estimation sérieuse nécessite l’examen préalable du dossier." },
      ],
      ctaTitle: "Une succession reste bloquée ?", ctaText: "Le cabinet examine les héritiers, les biens, les dettes et les difficultés foncières afin d’organiser une solution amiable ou la procédure utile.", serviceLabel: "Successions et héritage",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "Ministère de la Justice — Code de la famille", url: familyCode }, { label: "Ministère de la Justice — Code de procédure civile", url: civilProcedureCode }],
    },
    ar: {
      slug: "الإرث-وتصفية-التركة-في-المغرب",
      seo: { title: "الإرث وتصفية التركات في القانون المغربي: الحصر والديون والقسمة", description: "دليل تصفية التركات والإرث بالمغرب: حصر التركة، أداء الديون والوصايا (المادة 322 مدونة الأسرة)، تصفية العقارات، وحل النزاعات بين الورثة." },
      category: "تصفية التركات وقضايا الإرث",
      h1: "الإرث وتصفية التركات في المغرب: من الحصر الشرعي إلى القسمة والتنفيذ",
      lead: "تخضع تصفية التركات لقواعد الشريعة الإسلامية ومدونة الأسرة (المادة 321 وما بعدها)؛ حيث تمر عبر مراحل إلزامية تبدأ بتجهيز الميت وأداء الديون وتنفيذ الوصايا قبل قسمة الصافي بين الورثة.",
      intro: [
        "تتعلق بالتركة حقوق مرتبة بنص المادة 322 من مدونة الأسرة: الحقوق العينية التبعية، نفقات تجهيز الميت بالمعروف، ديون الميت، الوصية الصحيحة النافذة في حدود الثلث، ثم الفرائض الإرثية. ولا تجوز قسمة أي عقار أو مال قبل تصفية هذه الالتزامات.",
        "تتعقد ملفات التركات عند اشتمالها على أصول عقارية غير محفظة، استغلاليات فلاحية، حصص في شركات تجارية، أو استئثار أحد الورثة بالإدارة والغلة دون محاسبة، مما يستدعي تدخلاً قانونياً لحصر التركة وتعيين مصفٍ قضائي متى اقتضت المصلحة.",
      ],
      takeaways: [
        "تصفية ديون التركة وتنفيذ الوصايا مقدم وجوباً على توزيع الأنصبة الإرثية على الورثة (المادة 322 من مدونة الأسرة).",
        "يحق لكل وارث طلب إجراء جرد قضائي لأموال التركة وتعيين مصفٍ قضائي في حال وجود نزاع أو مخاوف من تبديد الأصول.",
        "تخضع قسمة العقارات الموروثة لمدونة الحقوق العينية؛ ولا يجبر أي وارث على البقاء في الشياع.",
      ],
      sections: [
        { id: "identify", title: "حصر الورثة والتدابير التحفظية لحماية أموال التركة", paragraphs: ["يبدأ ضبط التركة بتحرير رسم الإراثة العدلي لإثبات صفة الورثة وحصصهم الإرثية فرضاً وتعصيباً، وحصر كافة الحسابات البنكية، الخزائن، الرسوم العقارية، والسجلات التجارية التابعة للهالك.", "يحق لأي وارث التقدم بطلب استعجالي لرئيس المحكمة الابتدائية لوضع الأختام على منقولات التركة ومحلاتها، أو الأمر بإجراء حراسة قضائية على الأصول المدرة للدخل لمنع الاستيلاء عليها أو إخفاء وثائقها."], bullets: ["تحرير رسم الإراثة العدلي وحصر الورثة القاصرين والغياب.", "استصدار أوامر قضائية بالكشف عن الحسابات والودائع البنكية للهالك.", "تقييد إيداع رسم الإراثة بالرسوم العقارية لحفظ الحقوق العينية للورثة."] },
        { id: "liquidate", title: "تصفية ديون التركة والوصايا وتعيين المصفّي القضائي", paragraphs: ["تنص المادة 322 من مدونة الأسرة على استيفاء الديون العينية والشخصية من أموال التركة قبل توزيع الأنصبة؛ ويتحمل الورثة الديون في حدود ما آل إليهم من أموال فقط دون أن تمتد إلى ذممهم المالية الخاصة.", "إذا اختلف الورثة حول إدارة التركة أو ديونها، يجوز للمحكمة بناءً على طلب أحدهم تعيين مصفٍ للتركة يتولى جرد الحقوق والالتزامات وأداء الديون تمهيداً للقسمة (المواد 324 إلى 372 من مدونة الأسرة)."], note: "الديون الموثقة برسم رسمي أو حكم نهائي تستوفى مباشرة من التركة؛ وإذا استغرق الدين مجموع التركة فلا شيء للورثة." },
        { id: "property", title: "قسمة العقارات الموروثة والضيعات الفلاحية", paragraphs: ["تخضع قسمة العقارات لقواعد مدونة الحقوق العينية؛ فإذا كانت العقارات قابلة للفرز العيني دون ضرر أو نقصان فاحش في القيمة يتم إعداد مشروع قسمة عينية مع أداء معدلات القسمة النقدية لجبر التفاوت بين الحصص.", "في الأراضي الفلاحية، يتم تطبيق قواعد قسمة المهايأة أو إسناد الاستغلال لواحد من الورثة مع تعويض الباقين، لتفادي تفتيت الضيعة بما يخالف القوانين المنظمة للحد الأدنى للاستغلال."], bullets: ["فحص الرسوم العقارية والتصاميم الطبوغرافية للعقارات الموروثة.", "الطعن في تقارير الخبرة التي تقيم العقارات بأقل من قيمتها التجارية.", "تنفيذ حكم القسمة ونقل الملكيات الفردية بالمحافظة العقارية."] },
        { id: "conflict", title: "دعاوى المحاسبة ومواجهة الاستئثار بأموال التركة", paragraphs: ["يُعتبر الوارث الحائز أو المسير لأملاك التركة وكيلاً عن باقي الورثة وملزماً بتقديم حساب مفصل عن المداخيل، الأكرية، والغلات الفلاحية طيلة مدة تسييره؛ ويحق لباقي الورثة رفع دعوى المحاسبة وإلزامه بأداء نصيبهم.", "يحق للورثة الطعن في التصرفات الصادرة عن المورث خلال مرض الموت (التفويتات المحابية أو الهبات المقنعة) وتطبيق مقتضيات الفصل 344 من ق.ل.ع والمادة 344 من مدونة الأسرة لإرجاع الأموال إلى وعاء التركة."] },
      ],
      checklistTitle: "الوثائق الأساسية لملف تصفية التركة والقسمة",
      checklistIntro: "يتطلب ملف التركة إعداداً شرعياً ومستندياً دقيقاً لتفادي تداخل الحقوق والنزاعات العائلية.",
      checklist: ["شهادة الوفاة ورسم الإراثة العدلي وفريضة توزيع التركة.", "شواهد الملكية العقارية أو رسوم الملكية العدلية لكافة أصول التركة.", "عقود الشركات، السجلات التجارية، وكشوفات الحسابات البنكية.", "سندات الديون والالتزامات وفواتير مصاريف التجهيز والجنازة.", "محاضر المعاينة واستجواب الورثة الحائزين للأملاك إن وُجدت."],
      faqTitle: "أسئلة شائعة حول الإرث وتصفية التركات بالمغرب",
      faqs: [
        { question: "ما هو الترتيب الشرعي والقانوني للحقوق المتعلقة بالتركة قبل توزيعها؟", answer: "حدد الفصل 322 من مدونة الأسرة الترتيب الإلزامي للحقوق كالآتي: أولاً، الحقوق المتعلقة بعين التركة كالحقوق العينية والرهون؛ ثانياً، نفقات تجهيز الميت ومؤونة دفنه بالمعروف؛ ثالثاً، ديون الميت سواء كانت لله أو للعباد؛ رابعاً، الوصية الصحيحة النافذة في حدود ثلث ما تبقى من التركة؛ وخامساً، توزيع الباقي على الورثة بحسب فرائضهم وأنصبتهم الشرعية." },
        { question: "هل يلزم الورثة بأداء ديون مورثهم من أموالهم الخاصة؟", answer: "لا تبرأ ذمة التركة إلا بأداء ديونها، لكن مسؤولية الورثة عن ديون المورث مسؤولية عينية تنحصر في حدود ما انتقل إليهم من أموال وموجودات التركة فقط (قاعدة 'لا تركة إلا بعد سداد الديون')؛ فإذا استغرقت الديون مجموع أموال التركة لا يُلزم الورثة بأداء الفارق من أموالهم الشخصية إطلاقاً." },
        { question: "كيف يتم التعامل مع الوارث الذي يستولي على مداخيل التركة ويرفض القسمة؟", answer: "يحق لباقي الورثة إقامة دعوى المحاسبة واسترداد نصيبهم في الغلة ومداخيل الكراء والاستغلال، مع المطالبة بتعويض عن الحرمان من الانتفاع؛ كما يحق لهم رفع دعوى القسمة القضائية لإنهاء الشياع والبيع بالمزاد العلني وتوزيع العائدات، واستصدار أمر قضائي بتعيين حارس قضائي على العقارات حتى الفصل النهائي في الدعوى." },
      ],
      ctaTitle: "هل لديكم تركة عالقة أو نزاع بين الورثة حول حصر الأموال وقسمتها؟",
      ctaText: "بادروا بعرض ملف الإراثة والوثائق العقارية على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتدقيق الحصر الشرعي والقانوني ومباشرة إجراءات القسمة الرضائية أو القضائية.",
      serviceLabel: "الميراث وتصفية التركات",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "وزارة العدل — مدونة الأسرة", url: familyCode }, { label: "وزارة العدل — قانون المسطرة المدنية", url: civilProcedureCode }],
    },
  },
};
