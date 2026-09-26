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
      slug: "المراقبة-والمنازعات-الضريبية", seo: { title: "المراقبة والمنازعات الضريبية في المغرب", description: "المراقبة الضريبية بالمغرب: الإشعار والوثائق والجواب عن التصحيح والآجال والطعون وإعداد المنازعة الضريبية." }, category: "المنازعات الضريبية",
      h1: "المراقبة والمنازعات الضريبية في المغرب", lead: "تُعد المراقبة الضريبية انطلاقاً من المحاسبة والتصريحات والتبليغات والآجال الخاصة بكل مسطرة، قبل انتقال الخلاف إلى مرحلة المنازعة.",
      intro: ["لا تترتب الآثار نفسها عن طلب المعلومات وإشعار الفحص ورسالة التصحيح وإجراء التحصيل. لذلك تبدأ المعالجة بتحديد طبيعة الوثيقة والمرحلة التي بلغتها المسطرة.", "ينبغي أن ينسجم الجواب مع التصريحات والمحاسبة والعقود والعمليات الفعلية. وتقوم المنازعة الجدية على شرح الوقائع وتقديم الإثباتات والرد على كل نقطة بصورة مستقلة."],
      takeaways: ["تحدد طبيعة الوثيقة الإجراء والأجل الواجب احترامه.", "ترتب الوثائق بحسب الفترة وتُربط بالمبالغ محل الخلاف.", "يبدأ إعداد الطعن الإداري أو القضائي منذ أول تبادل مع الإدارة."],
      sections: [
        { id: "notice", title: "تحديد طبيعة الإجراء والأجل", paragraphs: ["تُقرأ المراسلة كاملة لتحديد الضريبة والفترة والأسباب والمبالغ وكيفية الجواب وطرق الطعن. كما يجب حفظ تاريخ التوصل ووسيلة التبليغ.", "قد يؤدي الجواب دون وثائق أو بعد فوات الأجل إلى تضييق الخيارات. لذلك يُعد أولاً جدول زمني دقيق للمسطرة."], bullets: ["الاحتفاظ بالظرف أو الإشعار أو دليل التبليغ.", "حصر الضرائب والسنوات والمبالغ المعنية.", "تحديد الأجل والجهة الواجب مراسلتها."] },
        { id: "evidence", title: "إعداد جواب مؤيد بالوثائق", paragraphs: ["يربط الجواب كل تصحيح بالتصريحات والقيود والفواتير والعقود والكشوف والتفسير الاقتصادي للعملية. وينبغي أن تكون الوثائق واضحة ومرتبة.", "تختلف الوثائق المفيدة بالنسبة إلى الفرد أو الفلاح أو المقاولة. فلا ينبغي إغراق الملف بعناصر غير لازمة أو إغفال الوثيقة التي تفسر العملية المتنازع بشأنها."], note: "يتغير القانون الضريبي بانتظام، والعبرة بالنص المطبق على الفترة والمسطرة المعنيتين، وليس بالضرورة بالنص المحين فقط." },
        { id: "appeal", title: "تنظيم المنازعة وطرق الطعن", paragraphs: ["عند استمرار الخلاف، ينبغي أن تعرض التظلمات والطعون تسلسلاً واضحاً للوقائع والأسس القانونية والوثائق. كما تميز بين النقط المقبولة وتلك المتنازع بشأنها.", "يظل الأداء والتحصيل والطعن مسائل مترابطة لكنها مستقلة. وينبغي فحصها معاً حتى لا يؤدي النقاش في الجوهر إلى إغفال إجراء مستعجل."], bullets: ["إعداد جدول بكل عناصر التصحيح.", "ربط كل عنصر بالوقائع والحجج والوثائق.", "فحص إجراءات التحصيل والضمانات المحتملة بصورة مستقلة."] },
      ],
      checklistTitle: "إعداد الملف الضريبي", checklistIntro: "ينبغي أن تسمح الوثائق بفهم المسطرة والمبالغ والعمليات التي خضعت للفحص.",
      checklist: ["الإشعارات والتبليغات والأجوبة وأدلة التوصل.", "التصريحات الضريبية للفترات المعنية.", "المحاسبة والفواتير والعقود والكشوف المفيدة.", "جدول المبالغ وعناصر التصحيح.", "القرارات وأوامر التحصيل والإجراءات المتخذة سابقاً."],
      faqTitle: "أسئلة حول المراقبة الضريبية",
      faqs: [
        { question: "ماذا أفعل عند التوصل بإشعار بالمراقبة؟", answer: "يجب تحديد نوع الإشعار والضرائب والفترات المعنية والاحتفاظ بدليل التوصل، ثم تنظيم الوثائق وجدول الآجال دون تأخير." },
        { question: "هل يمكن الاعتراض على التصحيح الضريبي؟", answer: "يمكن مناقشة التصحيح وفق المسطرة المطبقة، على أن يتناول الجواب الأسباب ويحترم الآجال ويرفق بالوثائق المؤيدة." },
        { question: "هل يوقف التظلم التحصيل تلقائياً؟", answer: "لا ينبغي افتراض ذلك. يجب فحص أثر التظلم وقواعد التحصيل بصورة مستقلة بحسب طبيعة الإجراء ووضعية الملف." },
      ],
      ctaTitle: "هل توصلتم بتبليغ ضريبي؟", ctaText: "يفحص المكتب الوثيقة والآجال والمبالغ والإثباتات لتنظيم الجواب أو الطعن المناسب.", serviceLabel: "القانون الضريبي",
      sourcesLabel: "المصادر الرسمية", sources: [{ label: "المديرية العامة للضرائب — الوثائق الجبائية", url: taxDocumentation }],
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
      slug: "الإرث-وتصفية-التركة-في-المغرب", seo: { title: "الإرث وتصفية التركة في المغرب", description: "دليل الإرث بالمغرب: رسم الإراثة وجرد أموال التركة وديونها وتصفيتها وقسمة العقارات والأراضي الفلاحية والنزاع بين الورثة." }, category: "الميراث والتركات",
      h1: "الإرث وتصفية التركة في المغرب", lead: "لا تقتصر تسوية التركة على حساب الأنصبة، بل تقتضي تحديد الورثة وجرد الأموال والديون والمحافظة عليها قبل نقلها أو قسمتها.",
      intro: ["تبدأ بعد الوفاة مرحلة يتعين فيها تحديد الأموال والحقوق والديون. وتنظم مدونة الأسرة جوانب من تصفية التركة، بينما تؤطر القواعد المسطرية الجرد والقسمة القضائية.", "إذا اشتملت التركة على أراض فلاحية أو عقارات غير محفظة أو أملاك يستغلها بعض الورثة وحدهم، وجب معالجة المسائل الإرثية والعقارية بصورة مترابطة."],
      takeaways: ["يثبت رسم الإراثة صفة الورثة، لكنه لا يتضمن وحده جرداً كاملاً للتركة.", "تُفحص ديون التركة وتكاليفها قبل القسمة النهائية.", "تتوقف قسمة العقار على وثائقه وقابليته للقسمة وحقوق جميع الورثة."],
      sections: [
        { id: "identify", title: "تحديد الورثة والمحافظة على أموال التركة", paragraphs: ["تُجمع وثائق الحالة المدنية ورسم الإراثة، ثم يتم البحث عن العقارات والحسابات والديون والحقوق والدعاوى الجارية. وقد يلزم اتخاذ تدابير للمحافظة على الأموال إذا كانت معرضة للتبديد أو التلف.", "لا تخول صفة الوارث لشخص واحد الاستئثار بمال من أموال التركة أو إقصاء باقي الورثة من المعلومات والقرارات التي تهمهم."], bullets: ["إعداد لائحة الورثة وبيانات الاتصال بهم.", "جرد الأموال المنقولة والعقارات.", "تحديد الديون والتكاليف وإجراءات الحفظ المستعجلة."] },
        { id: "liquidate", title: "حصر التركة وتصفيتها قبل القسمة", paragraphs: ["تهدف التصفية إلى تحديد مكونات التركة ومعالجة العمليات التي تسبق القسمة. لذلك تُطابق الوثائق البنكية والضريبية والتعاقدية والعقارية.", "يمكن للورثة تنظيم الإجراءات باتفاقهم. وعند تعذر الاتفاق، يمكن دراسة اللجوء إلى المحكمة وتعيين مصف أو إجراء جرد أو خبرة بحسب الملف."], note: "لا تحل الأنصبة النظرية وحدها نزاع الملكية أو الديون أو الاستغلال أو اختلاف قيمة العقارات." },
        { id: "property", title: "قسمة العقارات والأراضي الفلاحية", paragraphs: ["ينبغي فحص الرسم العقاري أو وثائق الملكية والتقييدات والحدود والاستغلال بالنسبة إلى كل عقار. وقد يتطلب العقار غير المحفظ أو الضيعة الفلاحية تحريات إضافية.", "يمكن إجراء قسمة رضائية إذا ثبتت الحقوق وكان الاتفاق قابلاً للتنفيذ. وعند تعذر ذلك، قد تستلزم القسمة القضائية خبرة، وقد تنتهي ببيع العقار غير القابل للقسمة بالمزاد."], bullets: ["فحص القابلية المادية والقانونية للقسمة.", "المحافظة على المسالك وقابلية استغلال الأجزاء.", "توثيق المداخيل والمصاريف والاستغلال منذ الوفاة."] },
        { id: "conflict", title: "معالجة التعطيل بين الورثة", paragraphs: ["قد يكون سبب النزاع غياب وارث أو استغلالاً منفرداً أو خلافاً حول البيع أو منازعة في ملكية أحد العقارات. لذلك ينبغي فصل الخلاف العائلي عن المسألة القانونية التي تعطل التسوية.", "يمكن أن ينجح التفاوض أو الوساطة إذا كانت الحقوق والقيم وخطوات التنفيذ واضحة. وعند استمرار التعطيل، يجب توجيه الطلب القضائي إلى الصعوبة الفعلية." ] },
      ],
      checklistTitle: "إعداد ملف التركة", checklistIntro: "يساعد ترتيب الوثائق على الجرد والتفاوض بين الورثة واختيار المسطرة المناسبة.",
      checklist: ["رسم الوفاة ورسم الإراثة ووثائق هوية الورثة.", "الرسوم العقارية ورسوم الملكية والعقود والتصاميم.", "الكشوف والديون والحقوق والوثائق الضريبية المتوفرة.", "المراسلات والاتفاقات أو الدعاوى السابقة.", "معطيات الاستغلال والمداخيل المتعلقة بأموال التركة."],
      faqTitle: "أسئلة حول الإرث وتصفية التركة",
      faqs: [
        { question: "هل يكفي رسم الإراثة لقسمة الأموال؟", answer: "يثبت رسم الإراثة صفة الورثة، لكن يجب بعد ذلك تحديد الأموال والديون والوثائق والإجراءات اللازمة لإجراء قسمة صحيحة وقابلة للتنفيذ." },
        { question: "ماذا نفعل إذا كان وارث يستغل المنزل أو الضيعة وحده؟", answer: "ينبغي إثبات حقوق الجميع وتوثيق الاستغلال والبحث عن تنظيم رضائي أو إجراء قضائي مناسب. ولا يلغي الاستغلال المنفرد حقوق باقي الورثة." },
        { question: "كيف تُقسم أرض فلاحية بين عدة ورثة؟", answer: "يجب فحص الرسوم والمساحة والمسالك والنظام العقاري والقابلية للقسمة. وعند تعذر إنشاء أجزاء قابلة للاستغلال، تُبحث حلول رضائية أو قضائية أخرى." },
        { question: "كم تبلغ تكلفة مسطرة التركة؟", answer: "تختلف التكلفة بحسب عدد الأموال والورثة والعقود والخبرات والصعوبات العقارية والمسطرة، ولا يمكن تقديرها بجدية إلا بعد فحص الملف." },
      ],
      ctaTitle: "هل ما زالت التركة عالقة؟", ctaText: "يفحص المكتب صفة الورثة والأموال والديون والصعوبات العقارية لتنظيم تسوية رضائية أو المسطرة المناسبة.", serviceLabel: "الميراث والتركات",
      sourcesLabel: "المصادر الرسمية", sources: [{ label: "وزارة العدل — مدونة الأسرة", url: familyCode }, { label: "وزارة العدل — قانون المسطرة المدنية", url: civilProcedureCode }],
    },
  },
};
