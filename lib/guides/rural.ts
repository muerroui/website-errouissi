import type { GuideDefinition } from "@/lib/guide-types";

const propertyLawPortal = "https://adala.justice.gov.ma/resources/25";
const ancfccProcedure = "https://ancfcc.gov.ma/ProcedureNormale/";
const realRightsCode = "https://adala.justice.gov.ma/api/uploads/2024/03/05/Code%20des%20droits%20r%C3%A9els-1709645301691.pdf";
const civilProcedureCode = "https://adala.justice.gov.ma/api/uploads/2024/02/28/Code%20de%20proc%C3%A9dure%20civile-1709129409071.pdf";

export const agrarianReformGuide: GuideDefinition = {
  key: "agrarianReform", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "foncierRural",
  content: {
    fr: {
      slug: "terres-cooperatives-reforme-agraire-maroc", seo: { title: "Terres des coopératives de la réforme agraire au Maroc", description: "Litiges et affaires relatifs aux terres des coopératives de la réforme agraire au Maroc : statut, exploitation, succession et transmission des droits." }, category: "Foncier rural",
      h1: "Terres des coopératives de la réforme agraire au Maroc", lead: "Accompagnement dans les affaires et litiges relatifs aux terres des coopératives de la réforme agraire, du vivant des bénéficiaires comme après leur décès, notamment en matière de succession et de transmission des droits, dans le respect du régime juridique particulier de ces terres.",
      intro: ["Les terres attribuées dans le cadre de la réforme agraire et regroupées au sein de coopératives agricoles sont soumises à un régime juridique dérogatoire issu du dahir n° 1-72-277 et des textes subséquents.", "Qu’il s’agisse de l’exploitation du vivant du bénéficiaire, de la régularisation de la parcelle, des rapports avec la coopérative ou de la transmission des droits après décès, toute démarche exige une analyse précise du cadre légal applicable afin d’éviter le blocage de la terre."],
      takeaways: ["Les terres des coopératives de la réforme agraire obéissent à un statut juridique dérogatoire au droit commun de la propriété privée.", "Du vivant du bénéficiaire, les conditions d’attribution, d’adhésion et d’exploitation personnelle déterminent la validité des droits.", "Après le décès du bénéficiaire, les règles de succession et de transmission des droits font l’objet de dispositions légales impératives spécifiques."],
      sections: [
        { id: "status", title: "Régime juridique et statut de la parcelle", paragraphs: ["Les parcelles issues de la réforme agraire attribuées aux agriculteurs membres de coopératives agricoles répondent à des règles strictes régissant l’attribution, l’exploitation et la levée des restrictions légales.", "L’identification précise de la parcelle, du numéro de lot, de la coopérative de rattachement et des actes administratifs ou fonciers permet d’apprécier la situation juridique réelle avant toute démarche contentieuse ou gracieuse."], bullets: ["Attribution initiale, arrêté d’attribution et identification du lot.", "Appartenance à la coopérative agricole et état d’apurement des charges.", "Situation auprès de la conservation foncière et mentions au titre foncier."] },
        { id: "beneficiaries", title: "Droits du vivant des bénéficiaires et exploitation", paragraphs: ["Du vivant de l’attributaire, l’exploitation de la terre doit respecter les obligations fixées par les textes régissant la réforme agraire, notamment l’exploitation effective et les règles de gestion coopérative.", "Les litiges peuvent porter sur les limites de la parcelle, les décisions de la coopérative, les contestations d’occupation ou les démarches de régularisation et de libération des restrictions foncières."], note: "Les règles propres aux coopératives de la réforme agraire interdisent les cessions anarchiques et imposent le respect des procédures légales d’apurement." },
        { id: "disputes", title: "Succession, transmission des droits et règlement des litiges", paragraphs: ["Au décès du bénéficiaire, la transmission des droits sur la terre de la coopérative de la réforme agraire ne s’opère pas comme une simple succession ordinaire en indivision. Les textes prévoient des critères particuliers pour la poursuite de l’exploitation ou la dévolution de la parcelle.", "Le cabinet intervient pour examiner les droits des héritiers, prévenir les blocages familiaux, accompagner la transmission des droits dans le respect de la loi et traiter les contestations nées entre cohéritiers ou avec les tiers."], bullets: ["Examen de l’acte d’hérédité et des conditions requises pour la dévolution du lot.", "Règlement des désaccords entre cohéritiers et indemnisation des ayants droit le cas échéant.", "Accompagnement dans les démarches administratives et judiciaires d’attribution et d’inscription."] },
      ],
      checklistTitle: "Éléments à apporter", checklistIntro: "Le dossier doit permettre d’identifier la coopérative, la parcelle, les actes d’attribution et la situation des bénéficiaires ou de leurs héritiers.",
      checklist: ["Arrêté ou décision d’attribution du lot agricole.", "Justificatifs d’adhésion à la coopérative agricole de la réforme agraire.", "Certificat de propriété ou références foncières du titre.", "Acte de décès et acte d’hérédité (en cas de succession).", "Procès-verbaux, correspondances administratives ou décisions de la coopérative."],
      faqTitle: "Questions sur les terres des coopératives de la réforme agraire",
      faqs: [
        { question: "Quel est le régime juridique des terres des coopératives de la réforme agraire ?", answer: "Ces terres sont régies par des dispositions législatives particulières (notamment le dahir n° 1-72-277 et les textes modificatifs) qui encadrent les conditions d’attribution, les obligations envers la coopérative et les règles de transmission des droits." },
        { question: "Comment s’organise la succession après le décès du bénéficiaire ?", answer: "Après le décès de l’attributaire, la loi encadre la transmission de la parcelle pour éviter le morcellement excessif de l’exploitation. Les héritiers doivent faire constater leurs droits et respecter les critères légaux de transmission ou d’attribution." },
        { question: "Le cabinet intervient-il uniquement sur les successions de ces terres ?", answer: "Non. Le cabinet intervient dans les affaires et litiges relatifs aux terres des coopératives de la réforme agraire du vivant des bénéficiaires comme après leur décès, notamment en matière de succession et de transmission des droits." },
      ],
      ctaTitle: "Un litige ou une succession sur une terre de la réforme agraire ?", ctaText: "Le cabinet étudie le statut du lot, les actes de la coopérative et les documents successoraux pour identifier la voie adaptée.", serviceLabel: "Foncier rural et agricole",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "Portail juridique du ministère de la Justice — matière foncière", url: propertyLawPortal }, { label: "Textes législatifs sur l’attribution des terres de la réforme agraire (Dahir n° 1-72-277)", url: propertyLawPortal }],
    },
    ar: {
      slug: "أراضي-تعاونيات-الإصلاح-الزراعي",
      seo: { title: "أراضي تعاونيات الإصلاح الزراعي بالمغرب: النظام القانوني والإرث والنزاعات", description: "دليل أراضي تعاونيات الإصلاح الزراعي بالمغرب: النظام القانوني الخاص، شروط الاستغلال، قضايا الإرث وانتقال الحقوق، وحل النزاعات حال حياة المستفيدين وبعد الوفاة." },
      category: "أراضي تعاونيات الإصلاح الزراعي",
      h1: "أراضي تعاونيات الإصلاح الزراعي بالمغرب: النظام القانوني والمنازعات وانتقال الحقوق",
      lead: "مواكبة القضايا والمنازعات المتعلقة بأراضي تعاونيات الإصلاح الزراعي، سواء خلال حياة المستفيدين أو بعد وفاتهم، بما يشمل قضايا الإرث وانتقال الحقوق، مع مراعاة النظام القانوني الخاص بهذه الأراضي.",
      intro: [
        "تخضع الأراضي الموزعة في إطار الإصلاح الزراعي والمنضوية ضمن تعاونيات فلاحية لنظام تشريعي خاص متميز عن القواعد العامة للملكية العقارية العادية، ولا سيما بمقتضى ظهير 1-72-277 والنصوص القانونية المعدلة والمتممة له.",
        "ويتدخل المكتب في مواكبة الفلاحين والمستفيدين والورثة في كافة الإشكالات والمنازعات الناشئة حول هذه الأراضي، سواء أثناء حياة المستفيدين أو بعد وفاتهم، خصوصاً في ما يرتبط بتسوية وضعية القطع الممنوحة، وقواعد الاستغلال، وانتقال الحقوق والإرث وتفادي النزاعات المعطلة للاستغلال الفلاحي.",
      ],
      takeaways: [
        "تخضع أراضي تعاونيات الإصلاح الزراعي لضوابط تشريعية خاصة تميزها عن الملكيات العقارية الخاصة العادية وعن الشياع العام.",
        "يشمل اختصاص المكتب النزاعات الناشئة خلال حياة المستفيدين (شروط الاستغلال، تسوية الوضعية، والعلاقة بالتعاونية) وكذا بعد وفاتهم.",
        "تخضع قضايا الإرث وانتقال الحقوق في هذه الأراضي لمساطر وشروط قانونية دقيقة تهدف إلى الحفاظ على تماسك الاستغلالية الفلاحية وتسوية حقوق الورثة.",
      ],
      sections: [
        { id: "status", title: "النظام القانوني الخاص بأراضي تعاونيات الإصلاح الزراعي", paragraphs: ["أُسندت هذه الأراضي لفائدة فلاحين مستفيدين انتظموا في إطار تعاونيات الإصلاح الزراعي بمقتضى نصوص قانونية تفرض شروطاً محددة للاستغلال والوفاء بالالتزامات المالية والتنظيمية قبل الوصول إلى تسوية الوضعية والتمليك النهائي.", "يقتضي التعامل مع أي نزاع أو تصرف فحص السند الأصلي للتوزيع، ووضعية القطعة داخل التعاونية، ومطابقة البيانات مع السجلات العقارية بالمحافظة العقارية المختصة."], bullets: ["سند التوزيع ومحاضر التسليم وتحديد رقم القطعة الأرضية.", "وضعية العضوية في التعاونية الفلاحية للإصلاح الزراعي وأداء الالتزامات.", "الرسم العقاري والتقييدات أو الشروط المضمنة به."] },
        { id: "beneficiaries", title: "حقوق المستفيدين ومنازعات الاستغلال حال الحياة", paragraphs: ["يلزم القانون المستفيدين بالاستغلال الفعلي والشخصي للقطعة الفلاحية؛ وتنشأ خلال حياة المستفيد عدة نزاعات قد تتعلق بحدود القطعة، أو المنازعات مع التعاونية أو مع الغير، أو مساطر إسقاط الحق في الاستفادة، أو إجراءات رفع القيود وتسوية الوضعية القانونية.", "يتولى المكتب دراسة السندات القانونية والمحاضر للدفاع عن حقوق المستفيد في استمرارية استغلاله وحماية مركزه القانوني أمام الجهات الإدارية والقضائية."], note: "تمنع النصوص المنظمة لأراضي الإصلاح الزراعي أي تفويتات عشوائية أو مخالفة للضوابط القانونية المشترطة لرفع القيود وتسوية الملكية." },
        { id: "disputes", title: "قضايا الإرث وانتقال الحقوق بعد وفاة المستفيد", paragraphs: ["تكتسي مسألة وفاة المستفيد من أرض الإصلاح الزراعي حساسية خاصة؛ إذ وضع المشرع قواعد خاصة لضبط انتقال الحقوق لفائدة الورثة أو أحدهم وفق شروط ومعايير محددة قانوناً، بما يمنع التجزئة المفرطة للقطعة الفلاحية.", "يواكب المكتب ورثة المستفيد في تسوية الإجراءات الإدارية والقضائية لانتقال الحقوق، وحل النزاعات التي قد تنشب بين الورثة بشأن من تؤول إليه القطعة أو تعويض باقي المستحقين، وتثبيت الحقوق لدى المحافظة العقارية."], bullets: ["إعداد ملف الإراثة وفحص توافر الشروط القانونية لانتقال الاستغلال.", "تسوية حقوق كافة الورثة رضائياً أو عبر المساطر القضائية المختصة.", "استكمال إجراءات التقييد العقاري ونقل الحقوق بصورة نهائية."] },
      ],
      checklistTitle: "الوثائق الأساسية لدراسة ملفات أراضي الإصلاح الزراعي",
      checklistIntro: "لدراسة ملف نزاع أو تسوية متعلق بأرض من أراضي تعاونيات الإصلاح الزراعي، يتعين توفير الوثائق الآتية :",
      checklist: ["سند أو قرار التوزيع الأصلي للقطعة الفلاحية.", "وثائق العضوية في تعاونية الإصلاح الزراعي وإبراء الذمة إن وجد.", "شهادة الملكية أو بيانات الرسم العقاري الصادرة عن المحافظة العقارية.", "رسم الوفاة ورسم الإراثة الشرعي في حال وفاة المستفيد الأصلي.", "كافة المحاضر أو المراسلات أو الإنذارات المتوصل بها بشأن القطعة الفلاحية."],
      faqTitle: "أسئلة شائعة حول أراضي تعاونيات الإصلاح الزراعي",
      faqs: [
        { question: "ما الذي يميز أراضي تعاونيات الإصلاح الزراعي عن الأراضي الفلاحية العادية؟", answer: "تخضع أراضي تعاونيات الإصلاح الزراعي لنظام قانوني خاص محدد بظهير 1-72-277 والنصوص المتممة له، وتخضع لشروط محددة في الاستغلال وعضوية التعاونية، وقواعد خاصة في انتقال الحقوق والتصرف." },
        { question: "كيف تنتقل الحقوق في أرض الإصلاح الزراعي بعد وفاة المستفيد؟", answer: "حدد القانون قواعد خاصة لضبط انتقال الحقوق عند وفاة المستفيد لتفادي تفتيت الاستغلالية الفلاحية، حيث تنتقل الحقوق وفق شروط دقيقة إما إلى أحد الورثة الذي تتوفر فيه الشروط القانونية مع تعويض باقي الورثة، أو وفق الآليات المعتمدة قانوناً لتسوية وضعية التركة." },
        { question: "هل يقتصر تدخل المحامي في هذه الأراضي على قضايا الإرث؟", answer: "لا يقتصر التدخل على قضايا الإرث؛ بل يشمل مواكبة كافة القضايا والمنازعات المتعلقة بأراضي تعاونيات الإصلاح الزراعي سواء خلال حياة المستفيدين (نزاعات الحدود، الاستغلال، العلاقة بالتعاونية، وتسوية الوضعية) أو بعد وفاتهم (انتقال الحقوق وقسمة التركات)." },
      ],
      ctaTitle: "هل تواجهون نزاعاً أو إشكال إرث يتعلق بأرض تابعة لتعاونيات الإصلاح الزراعي؟",
      ctaText: "تواصلوا مع مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لدراسة ملفكم وتحديد المسار القانوني الملائم لحماية حقوقكم واستغلاليتكم.",
      serviceLabel: "العقار الفلاحي وأراضي تعاونيات الإصلاح الزراعي",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "البوابة القانونية لوزارة العدل — المادة العقارية", url: propertyLawPortal }, { label: "النصوص التشريعية المنظمة للإصلاح الزراعي (ظهير 1-72-277 والقوانين المعدلة)", url: propertyLawPortal }],
    },
  },
};

export const indivisionGuide: GuideDefinition = {
  key: "indivision", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "succession",
  content: {
    fr: {
      slug: "sortie-indivision-maroc", seo: { title: "Sortie d’indivision au Maroc : accord ou partage", description: "Sortie d’indivision au Maroc : accord entre indivisaires, partage judiciaire, expertise, licitation et cas des terres agricoles héritées." }, category: "Indivision et succession",
      h1: "Sortie d’indivision au Maroc : accord, partage et licitation", lead: "Lorsqu’un bien appartient à plusieurs personnes, la solution dépend des titres, des quotes-parts, de la possibilité d’un partage matériel et de la position de chaque indivisaire.",
      intro: ["L’indivision apparaît fréquemment après une succession, mais elle peut aussi résulter d’un achat ou d’un autre transfert. Chaque dossier exige d’identifier le bien, l’origine des droits et les quotes-parts avant de rechercher un accord ou un partage judiciaire.", "Pour une ferme ou une terre agricole, diviser matériellement le terrain n’est pas toujours possible ou pertinent. L’accès, la superficie, l’exploitation, les règles foncières et la valeur de l’ensemble doivent être examinés."],
      takeaways: ["La sortie amiable suppose un accord clair sur les biens, les quotes-parts et son exécution.", "Le partage judiciaire peut conduire à une expertise et, si le bien n’est pas commodément partageable, à une licitation.", "Un héritier qui occupe ou exploite seul le bien ne fait pas disparaître les droits des autres."],
      sections: [
        { id: "audit", title: "Établir l’origine et l’étendue de l’indivision", paragraphs: ["Il faut reconstituer comment chaque personne est devenue titulaire d’un droit : succession, acquisition, donation ou jugement. Les actes, le titre foncier et les documents d’hérédité doivent aboutir à une liste cohérente des indivisaires et de leurs quotes-parts.", "Les dettes, améliorations, revenus, occupations et conventions antérieures peuvent aussi influencer la négociation ou les comptes entre les parties."], bullets: ["Identifier tous les biens concernés.", "Établir la qualité et la quote-part de chaque indivisaire.", "Vérifier les inscriptions, charges et procédures en cours."] },
        { id: "agreement", title: "Construire une sortie amiable exécutable", paragraphs: ["Un accord peut prévoir un partage matériel, l’attribution du bien à l’un avec compensation, une vente ou une organisation provisoire de la jouissance. Il doit être juridiquement réalisable et suffisamment précis pour être mis en œuvre.", "Pour un terrain, la faisabilité technique et administrative de la division doit être vérifiée avant de signer. Un simple plan entre les membres de la famille ne suffit pas toujours à rendre le partage opposable."], note: "Une médiation utile ne cherche pas seulement un accord de principe ; elle anticipe les actes, formalités, paiements et délais nécessaires à son exécution." },
        { id: "court", title: "Partage judiciaire et vente par licitation", paragraphs: ["À défaut d’accord, un indivisaire peut envisager une demande en partage. Le tribunal apprécie la situation du bien et peut recourir à une expertise pour examiner sa divisibilité et sa valeur.", "Si un partage permettant à chacun de recevoir ses droits n’est pas possible, la vente par licitation peut être ordonnée selon les conditions de la procédure. Cette perspective doit être expliquée aux héritiers avant d’engager ou de prolonger le conflit."], bullets: ["Préparer les titres et documents d’hérédité.", "Identifier les personnes à appeler à la procédure.", "Documenter la consistance, l’exploitation et la valeur du bien."] },
      ],
      checklistTitle: "Préparer une sortie d’indivision", checklistIntro: "La première analyse doit permettre de savoir qui détient quoi, sur quel bien et avec quelles difficultés pratiques.",
      checklist: ["Titre foncier, actes de propriété ou documents relatifs au bien non immatriculé.", "Acte d’hérédité et documents identifiant tous les héritiers.", "Plans, références cadastrales et éléments sur l’accès ou l’exploitation.", "Conventions, échanges et propositions de partage déjà discutées.", "Justificatifs des dépenses, revenus ou occupations contestés."],
      faqTitle: "Questions sur la sortie d’indivision",
      faqs: [
        { question: "Un seul héritier peut-il bloquer le partage ?", answer: "Un désaccord peut empêcher un partage amiable, mais il n’exclut pas l’étude d’une procédure judiciaire. La solution dépend des droits établis et de la nature du bien." },
        { question: "Une ferme peut-elle être divisée entre les héritiers ?", answer: "Cela dépend de sa configuration, de l’accès, des règles applicables et de la possibilité de créer des lots utilisables. Une expertise technique peut être nécessaire." },
        { question: "Qu’est-ce qu’une vente par licitation ?", answer: "Il s’agit d’une vente ordonnée dans le cadre du partage lorsque le bien ne peut pas être partagé de manière permettant à chacun de recevoir ses droits. Ses modalités dépendent de la procédure applicable." },
      ],
      ctaTitle: "Une indivision empêche l’usage ou la vente du bien ?", ctaText: "Le cabinet examine les droits de chacun, la divisibilité du bien et les possibilités d’accord ou de partage judiciaire.", serviceLabel: "Successions et héritage",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "Ministère de la Justice — Code de procédure civile", url: civilProcedureCode }, { label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }],
    },
    ar: {
      slug: "الخروج-من-الشياع-في-القانون-المغربي",
      seo: { title: "الخروج من الشياع وقسمة العقارات والضيعات بالمغرب: المسطرة الرضائية والقضائية", description: "دليل الخروج من الشياع في القانون المغربي: القسمة الرضائية، دعوى القسمة القضائية، قسمة المهايأة، البيع بالمزاد العلني وفق مدونة الحقوق العينية." },
      category: "تصفية الشياع وقسمة العقارات",
      h1: "الخروج من الشياع وقسمة العقارات والضيعات في المغرب",
      lead: "تنص المادة 27 من مدونة الحقوق العينية على أنه 'لا يجبر أحد على البقاء في الشياع'؛ مما يخول لكل شريك حق المطالبة بقسمة المال المشاع رضاءً أو قضاءً.",
      intro: [
        "تنشأ الملكية الشائعة نتيجة الوفاة وانتقال التركة إلى الورثة، أو نتيجة شراء أو هبة مشتركة. وتفرز حالة الشياع نزاعات معقدة حول تسيير العقار واستغلاله واستيفاء ثماره، مما يستدعي فض الشياع حمايةً للحقوق الاقتصادية للشركاء.",
        "تتوزع مساطر إنهاء الشياع بين القسمة الرضائية الموثقة، وقسمة المهايأة الزمنية أو المكانية لحفظ الاستغلال (المواد 313 إلى 315 من مدونة الحقوق العينية)، ودعوى القسمة القضائية التي تقود إما إلى قسمة عينية عادلة أو إلى التصفية بالبيع بالمزاد العلني.",
      ],
      takeaways: [
        "لكل شريك الحق في طلب الخروج من الشياع في أي وقت، ولا يلزم إجماع الشركاء لرفع دعوى القسمة القضائية (المادة 27).",
        "القسمة العينية هي الأصل؛ ولا يُلجأ إلى البيع بالمزاد العلني إلا إذا تعذرت القسمة العينية أو ألحقت نقصاً كبيراً في قيمة العقار (المادة 317).",
        "قسمة المهايأة تمكن الشركاء من تنظيم الانتفاع الدوري أو المكاني بالعقار المشاع دون تفويته أو بيعه بالمزاد.",
      ],
      sections: [
        { id: "audit", title: "حصر الحقوق الشائعة وسندات الملكية والأنصبة", paragraphs: ["يلزم لتأسيس ملف القسمة حصر الرسوم العقارية أو العدلية وسلسلة التملك، وتحديد هوية كافة الشركاء على الشياع وأنصبتهم المئوية أو الكسرية بدقة.", "تجب معالجة الديون وحقوق الدائنين المقيدة بالرسم العقاري والرهون الرسمية؛ حيث يتعين إدخال الدائنين أصحاب الرهون في الدعوى لضمان عدم الطعن في إجراءات القسمة أو بطلانها."], bullets: ["سحب شهادة عقارية حديثة تبين الشركاء والتقييدات والحجوزات.", "حصر الورثة بموجب رسم الإراثة ومطابقة الحصص الإرثية شرعاً.", "فحص مدى قابلية العقار للقسمة المادية المفرزة وفق ضوابط التعمير أو القوانين الفلاحية."] },
        { id: "agreement", title: "القسمة الرضائية والمخارجة وإسناد الحصص", paragraphs: ["تعتبر القسمة الرضائية السبيل الأمثل والأسرع لتفادي مصاريف القضاء والمزاد؛ وتتم بإجماع كافة الشركاء بموجب محرر رسمي أو ثابت التاريخ يحرره محامٍ مقبول لدى محكمة النقض أو موثق (المادة 4 من مدونة الحقوق العينية).", "يمكن أن تتضمن القسمة إسناد العقار أو الضيعة لأحد الشركاء مقابل أداء معدّل القسمة نقداً للآخرين، أو تفويت العقار المشترك للغير وتوزيع الثمن بينهم بالتراضي."], note: "لا تصح القسمة الرضائية إذا كان بين الشركاء قاصر أو غائب إلا بعد استصدار إذن قضائي من القاضي المكلف بشؤون القاصرين." },
        { id: "court", title: "دعوى القسمة القضائية ومسطرة المزاد العلني", paragraphs: ["تُرفع دعوى القسمة بمقال افتتاحي أمام المحكمة الابتدائية المختصة في مواجهة كافة الشركاء على الشياع دون استثناء تحت طائلة عدم القبول؛ وتأمر المحكمة بإجراء خبرة عقارية طبوغرافية لفرز الأنصبة إلى حصص متساوية.", "إذا أثبت الخبير تعذر القسمة العينية (كنقص القيمة أو صغر المساحة)، تقضي المحكمة بتحديد الثمن الأساسي لافتتاح المزاد وبيعه بالمزاد العلني بواسطة كتابة الضبط وتوزيع المنتوج على الشركاء."], bullets: ["إدخال جميع الشركاء وأصحاب الحقوق العينية والدائنين في مقال الدعوى.", "مناقشة تقرير الخبرة الطبوغرافية واقتراح مشاريع الفرز العيني المناصف.", "تتبع جلسات البيع بالمزاد العلني واستخلاص الحصص من صندوق المحكمة."] },
      ],
      checklistTitle: "الوثائق المطلوبة لرفع دعوى الخروج من الشياع",
      checklistIntro: "يتعين إعداد وثائق الملكية والإراثة بدقة لضمان قبول الدعوى شكلاً أمام المحكمة الابتدائية.",
      checklist: ["شهادة الملكية العقارية الحديثة والتصميم العقاري الرسمي.", "رسم الإراثة أو العقود الناقلة للملكية المثبتة لصفة الشركاء والحصص.", "نسخة من بطاقات التعريف الوطنية وعناوين كافة الشركاء لاستدعائهم قانوناً.", "محاضر المعاينة الميدانية التي تثبت حالة العقار واستغلاله والنزاع القائم.", "مشروع القسمة الرضائية أو المراسلات الموجهة للشركاء إن وجدت."],
      faqTitle: "أسئلة شائعة حول تصفية الشياع وقسمة العقارات بالمغرب",
      faqs: [
        { question: "هل يستطيع أحد الورثة عرقلة بيع أو قسمة عقار موروث على الشياع؟", answer: "لا يملك أي وارث حق عرقلة القسمة؛ فإذا رفض القسمة الرضائية يحق لأي شريك رفع دعوى القسمة القضائية دون الحاجة لموافقة الأغلبية، وتلزم المحكمة الجميع بالقسمة العينية أو البيع الإجباري بالمزاد العلني." },
        { question: "ما هي شروط قسمة المهايأة في العقار المشاع؟", answer: "قسمة المهايأة هي اتفاق على اقتسام منافع العقار المشترك مكانياً (بأن يختص كل شريك بجزء مفرز ينتفع به) أو زمانياً (بأن يتناوب الشركاء على استغلال العقار بكامله لمدد محددة)، ولا تسقط حق الشريك في المطالبة بالقسمة النهائية ما لم يتفق الشركاء على البقاء في المهايأة لمدة محددة لا تتجاوز 5 سنوات قابلة للتجديد (المادة 314)." },
        { question: "كيف تتم مسطرة البيع بالمزاد العلني لعقار مشاع أمام المحكمة؟", answer: "بعد صدور الحكم النهائي بتعذر القسمة العينية والبيع بالمزاد، يُحال الملف على شعبة التنفيذ بالمحكمة لتعيين خبير لتحديد الثمن الافتتاحي وتاريخ جلسة المزايدة، ونشر الإعلانات بالجرائد وتعليقها بالمحكمة والمحافظة، ويُرسى المزاد على أعلى متزايد مع فتح أجل 10 أيام للزيادة بالسدس." },
      ],
      ctaTitle: "هل تعانون من نزاع على الشياع أو ترغبون في تصفية قسمة عقار موروث؟",
      ctaText: "بادروا باستشارة مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتدقيق وثائق الملكية ومباشرة مسطرة القسمة بما يضمن حقوقكم المالية وصيانتها.",
      serviceLabel: "الميراث وتصفية التركات",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "وزارة العدل — قانون المسطرة المدنية", url: civilProcedureCode }, { label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }],
    },
  },
};

export const melkiyaGuide: GuideDefinition = {
  key: "melkiya", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "immobilier",
  content: {
    fr: {
      slug: "melkiya-terrain-non-titre-maroc", seo: { title: "Melkiya et terrain non titré au Maroc", description: "Melkiya, terrain non immatriculé et titre foncier au Maroc : preuve de propriété, chaîne des actes, possession, vente et litiges." }, category: "Propriété non immatriculée",
      h1: "Melkiya et terrain non titré au Maroc", lead: "Pour un bien non immatriculé, la preuve de la propriété repose sur un ensemble d’actes et de faits qu’il faut rattacher à la même parcelle et à une chaîne de transmission cohérente.",
      intro: ["La Melkiya est couramment invoquée pour établir la propriété d’un immeuble non immatriculé. Elle ne doit pas être assimilée au titre foncier, qui naît de la procédure d’immatriculation et organise la publicité des droits inscrits.", "Avant une vente, une succession ou un litige, il faut vérifier ce que prouve exactement chaque document, l’identité du bien, ses limites et la continuité entre les titulaires successifs."],
      takeaways: ["La Melkiya et le titre foncier sont deux documents de nature différente.", "La chaîne des actes doit conduire sans rupture apparente jusqu’au titulaire actuel.", "La possession et les limites réelles doivent être comparées aux descriptions et plans disponibles."],
      sections: [
        { id: "difference", title: "Melkiya et titre foncier : la différence essentielle", paragraphs: ["Un titre foncier est établi après immatriculation et contient les droits publiés sur le bien. Une Melkiya est un acte utilisé parmi les éléments permettant d’établir la propriété d’un immeuble non immatriculé.", "Cette différence influe sur les vérifications, les formalités de transfert et les voies de contestation. La simple mention « Melkiya » ne renseigne pas, à elle seule, sur la force de toute la chaîne documentaire."], bullets: ["Identifier la nature et la date de chaque acte.", "Vérifier les personnes mentionnées et leur qualité.", "Comparer les limites décrites avec la parcelle occupée."] },
        { id: "transfer", title: "Sécuriser la transmission d’un terrain non titré", paragraphs: ["Il faut reconstituer les transmissions antérieures, vérifier les procurations et successions et rechercher d’éventuelles contradictions entre les actes. L’acheteur doit aussi comprendre les risques liés à l’absence d’un titre foncier.", "Lorsque plusieurs héritiers ou occupants sont concernés, l’accord d’une seule personne ne suffit pas nécessairement. Les droits de chacun et les actes indispensables doivent être déterminés avant l’engagement."], note: "Un prix attractif ou une longue occupation ne corrige pas automatiquement une rupture dans les actes ou un conflit de limites." },
        { id: "disputes", title: "Litiges de possession, limites et double vente", paragraphs: ["Les conflits portent souvent sur l’identité de la parcelle, l’empiètement, la possession, la validité d’un acte ou des ventes concurrentes. La chronologie documentaire et l’état des lieux deviennent alors centraux.", "Selon la situation, des constats, une expertise, une procédure immobilière ou une immatriculation peuvent être envisagés. Le choix dépend de l’objectif poursuivi et des preuves disponibles."], bullets: ["Photographier les limites et repères actuels.", "Réunir les actes originaux et éviter les copies non vérifiables.", "Identifier les voisins, occupants et transactions antérieures."] },
      ],
      checklistTitle: "Vérifier un terrain non immatriculé", checklistIntro: "L’analyse doit relier les documents aux personnes et à la parcelle réellement concernée.",
      checklist: ["Melkiya et actes de transmission successifs.", "Actes d’hérédité, procurations et pièces d’identité utiles.", "Plans, croquis, superficie et description des limites.", "Éléments de possession, constats et quittances disponibles.", "Promesses, actes de vente ou différends antérieurs concernant la parcelle."],
      faqTitle: "Questions sur la Melkiya",
      faqs: [
        { question: "Une Melkiya est-elle un titre foncier ?", answer: "Non. La Melkiya est un acte invoqué pour établir la propriété d’un bien non immatriculé, tandis que le titre foncier résulte de l’immatriculation et contient les droits inscrits." },
        { question: "Peut-on acheter un terrain non titré ?", answer: "Une opération peut être envisagée, mais elle nécessite une vérification renforcée de la propriété, des limites, des transmissions, de la possession et des risques de contestation." },
        { question: "Comment réagir si deux actes portent sur le même terrain ?", answer: "Il faut comparer leur date, leur contenu, les personnes concernées, la chaîne des droits et la parcelle réelle. Une analyse juridique et parfois technique est indispensable avant d’agir." },
      ],
      ctaTitle: "Un doute sur une Melkiya ou un terrain non titré ?", ctaText: "Le cabinet rapproche les actes, la possession, les limites et l’historique des transmissions afin d’évaluer la situation.", serviceLabel: "Droit immobilier",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "Ministère de la Justice — Code des droits réels", url: realRightsCode }, { label: "ANCFCC — procédure d’immatriculation", url: ancfccProcedure }],
    },
    ar: {
      slug: "العقار-غير-المحفظ-ورسم-الملكية",
      seo: { title: "العقار غير المحفظ ورسم الملكية العدلي في القانون المغربي: شروط التملك والنزاعات", description: "دليل العقار غير المحفظ ورسم الملكية بالمغرب: شروط رسم الملكية العدلي، الحيازة المكسبة (المادة 239)، دعاوى الاستحقاق، وإجراءات البيع والتحفيظ." },
      category: "العقار غير المحفظ والملكية العدلية",
      h1: "العقار غير المحفظ ورسم الملكية العدلي في المغرب: القواعد وشروط الإثبات",
      lead: "تخضع العقارات غير المحفظة لأحكام الفقه المالكي ومدونة الحقوق العينية (القانون رقم 39.08)؛ حيث يُعد رسم الملكية العدلي (اللفيف) السند المعتمد لإثبات الملكية ما لم يعارضه سند أقوى.",
      intro: [
        "يختلف العقار غير المحفظ جوهرياً عن العقار المحفظ؛ إذ لا تحميه قاعدة التطهير ولا يستفيد من القوة الثبوتية المطلقة للرسم العقاري. وتعتمد سلامة تملكه على صحة الحيازة المكسبة واستمرار سلسلة التصرفات الشرعية والقانونية.",
        "يتطلب تفويت العقار غير المحفظ أو النزاع بشأنه تدقيقاً صارماً في شروط رسم الملكية (عقد الاستمرار)، وفحص حدود العقار ومعالمه الميدانية، والتحقق من عدم وجود تفويتات متعددة أو نزاعات استحقاق سابقة.",
      ],
      takeaways: [
        "رسم الملكية العدلي قابل للمنازعة والطعن بالاستحقاق والحيازة المكسبة المستوفية للشروط الفقهية والقانونية.",
        "شروط الملك التام المنصوص عليها في المادة 240 من مدونة الحقوق العينية هي أساس ترجيح البينات عند تدافع الحجج.",
        "التحفيظ العقاري هو السبيل الوحيد لإكساب العقار غير المحفظ مناعة مطلقة من النزاعات والطعون المستقبلية.",
      ],
      sections: [
        { id: "difference", title: "الفروق الجوهرية بين رسم الملكية والرسم العقاري", paragraphs: ["الرسم العقاري يطهر العقار ويثبت الملكية بصفة قاطعة ونهائية لا تقبل الطعن؛ في حين يعتبر رسم الملكية العدلي حجة ظاهرية لإثبات الملكية قابلة لإثبات العكس والطعن بالاستحقاق أو الدفع بحيازة شرعية مكسبة أقدم وأقوى.", "تعتمد الرسوم العدلية على شهادة اللفيف العدلي المكون من 12 شاهداً يشهدون بوضع اليد والتصرف للمدة الشرعية، وتخضع لتقدير قضاء الموضوع في ترجيح الحجج عند النزاع."], bullets: ["فحص تاريخ تحرير رسم الملكية واسم القاضي المصادق على خطابي العدلين.", "التأكد من تضمين شروط الحيازة التامة القانونية (المادة 240).", "مطابقة حدود وجيران العقار مع الواقع الميداني الحالي."] },
        { id: "transfer", title: "ضوابط وتوثيق تفويت العقارات غير المحفظة", paragraphs: ["توجب المادة 4 من مدونة الحقوق العينية تحرير كافة المعاملات والتفويتات العقارية بموجب محرر رسمي (عدلي أو توثيقي) أو محرر ثابت التاريخ يحرره محامٍ مقبول لدى محكمة النقض تحت طائلة البطلان المطلق؛ ولم يعد للبيوعات العرفية أي أثر قانوني ناقل للملكية.", "يلزم تتبع سلسلة أصول التملك (أصل التملك، عقود الشراء السابقة، ورسوم الإراثة) لضمان عدم وجود عيب في الرضى أو بيع لملك الغير."], note: "تحرير عقد بيع عرفي لعقار غير محفظ بعد سريان مدونة الحقوق العينية سنة 2011 يُعد باطلاً عديم الأثر ولا ينقل الملكية إطلاقاً." },
        { id: "disputes", title: "دعاوى الاستحقاق والترامي وتدافع الحجج العدلية", paragraphs: ["تعتبر دعوى الاستحقاق الدعوى الأساسية لحماية ملكية العقار غير المحفظ ضد الغاصب أو واضع اليد دون سند؛ حيث تطبق المحكمة قواعد الترجيح الفقهية (ترجيح بينة الإثبات على النفي، وبينة الملك على الحيازة المجردة).", "عند حدوث ترامٍ أو اعتداء مادي على الحيازة، يحق للحائز رفع دعوى استرداد الحيازة أو دعوى منع المعارضة داخل أجل سنة من تاريخ الاعتداء لإرجاع الحالة إلى ما كانت عليه."], bullets: ["إثبات شروط الحيازة المكسبة (10 سنوات بين الأجانب و40 سنة بين الأقارب).", "إجراء معاينات قضائية وخبرات طبوغرافية لمطابقة رسوم الملكية على الميدان.", "المبادرة بتقديم مطلب تحفيظ لتحصين العقار نهائياً بعد حسم النزاع."] },
      ],
      checklistTitle: "الوثائق الضرورية لتدقيق العقار غير المحفظ",
      checklistIntro: "يتعين إعداد أصول الرسوم وسلسلة التملك لتشخيص قوة الحجة وتفادي الطعون بالاستحقاق.",
      checklist: ["أصل رسم الملكية العدلي (اللفيف) المصادق عليه من قاضي التوثيق.", "سلسلة عقود التفويت والشراء والرسوم العدلية المتتابعة.", "رسم الإراثة وفريضة توزيع التركة عند انتقال العقار بالإرث.", "محضر معاينة مع صور فوتوغرافية وتصميم طبوغرافي يبين المعالم والحدود.", "الشهادات الإدارية ووصولات أداء الضرائب والرسوم المحلية المرتبطة بالعقار."],
      faqTitle: "أسئلة شائعة حول العقار غير المحفظ ورسم الملكية",
      faqs: [
        { question: "ما هي شروط الحيازة المكسبة للملكية في العقار غير المحفظ بالمغرب؟", answer: "تنص المادة 240 من مدونة الحقوق العينية على ضرورة توفر شروط الملك التام: أن يكون الحائز واضعاً يده على العقار، وأن يتصرف فيه تصرف المالك في ملكه، وأن ينسبه لنفسه والناس ينسبونه إليه، وألا ينازعه في ذلك منازع، وأن تستمر الحيازة هادئة وعلنية لمدة 10 سنوات كاملة بين غير الأقارب و40 سنة بين الأقارب، دون أن تكون الحيازة مبنية على كراء أو عارية أو إذن." },
        { question: "هل يعتبر البيع العرفي لعقار غير محفظ نافذاً ومنتجاً لآثاره؟", answer: "لا، بمقتضى المادة 4 من القانون رقم 39.08 المتعلق بمدونة الحقوق العينية، يجب أن تُحرر جميع التصرفات العقارية تحت طائلة البطلان بموجب محرر رسمي يحرره عدلان أو موثق، أو محرر ثابت التاريخ يحرره محامٍ مقبول لدى محكمة النقض؛ والبيوعات العرفية المبرمة بعد هذا القانون باطلة بطلاناً مطلقاً ولا يعتد بها أمام المحاكم أو المحافظة العقارية." },
        { question: "كيف تفصل المحكمة عند تعارض رسمين عدليين للملكية لنفس العقار؟", answer: "تطبق المحكمة قواعد ترجيح البينات المعمول بها في الفقه المالكي ومدونة الحقوق العينية؛ فتُرجح البينة التي تشهد بأصل الملك على مجرد الحيازة، والبينة المبيّنة لسبب الملك، والبينة الأقدم تاريخاً إذا تساوت الحجج، وتعتمد على تقرير خبرة طبوغرافية لتطبيق حدود الرسوم ومقارنتها بالواقع." },
      ],
      ctaTitle: "هل لديكم نزاع حول عقار غير محفظ أو ترغبون في تدقيق رسم ملكية؟",
      ctaText: "بادروا بعرض رسومكم العدلية ومستنداتكم على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتقييم صحة الحجج وحماية ملكيتكم العقارية.",
      serviceLabel: "القانون العقاري والملكية العدلية",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "وزارة العدل — مدونة الحقوق العينية", url: realRightsCode }, { label: "الوكالة الوطنية للمحافظة العقارية — مسطرة التحفيظ", url: ancfccProcedure }],
    },
  },
};

export const agriculturalRegistrationGuide: GuideDefinition = {
  key: "agricultural-registration", publishedAt: "2026-09-26", updatedAt: "2026-09-26", serviceKey: "foncierRural",
  content: {
    fr: {
      slug: "immatriculation-terrain-agricole-maroc", seo: { title: "Immatriculation d’un terrain agricole au Maroc", description: "Immatriculer un terrain agricole au Maroc : statut, Melkiya, bornage, opposition, indivision, coût et documents à préparer." }, category: "Terres agricoles",
      h1: "Immatriculation d’un terrain agricole au Maroc", lead: "Avant de déposer une réquisition, il faut clarifier le statut de la terre, l’origine des droits, les limites exploitées et les personnes susceptibles de les contester.",
      intro: ["Une terre agricole peut relever de situations très différentes : propriété privée immatriculée ou non, indivision successorale, terre des coopératives de la réforme agraire, domaine ou autre régime particulier. La procédure utile dépend d’abord de cette qualification.", "Dans les zones rurales, les actes anciens, les successions non régularisées et les limites matérialisées par des repères variables rendent le bornage particulièrement important."],
      takeaways: ["Le caractère agricole ne détermine pas à lui seul le statut juridique de la terre.", "Les actes et la possession doivent être reliés à des limites identifiables.", "Une indivision ou une opposition doit être anticipée avant que la procédure ne se bloque."],
      sections: [
        { id: "status", title: "Qualifier la terre avant toute démarche", paragraphs: ["La première vérification porte sur la nature du bien et sur les documents qui fondent la propriété ou la jouissance. Une terre des coopératives de la réforme agraire, un terrain privé non immatriculé et une parcelle issue d’une succession ne suivent pas les mêmes règles.", "Il faut aussi rechercher si une procédure, une délimitation administrative, une expropriation ou un titre voisin concerne déjà l’assiette."], bullets: ["Identifier le régime foncier.", "Reconstituer l’origine des droits et successions.", "Repérer les titres, réquisitions ou délimitations proches."] },
        { id: "boundary", title: "Préparer le repérage et le bornage", paragraphs: ["Les limites décrites dans les actes doivent être rapprochées du terrain et des plans disponibles. Les chemins, cours d’eau, arbres ou noms de voisins anciens peuvent avoir changé.", "Le bornage permet de recueillir les observations sur place et de matérialiser l’assiette revendiquée. Les désaccords doivent être notés et documentés avec précision."], note: "Une superficie mentionnée dans un acte ne dispense pas d’identifier la parcelle réelle et ses confrontations." },
        { id: "cost", title: "Frais, délais et difficultés fréquentes", paragraphs: ["Les frais dépendent de la formalité, de la valeur ou de la superficie selon les cas, des opérations techniques et des pièces nécessaires. Les barèmes officiels en vigueur doivent être consultés au moment de la démarche.", "La durée varie notamment selon la publicité, le bornage, les diligences du requérant, les difficultés techniques et les oppositions. Un dossier préparé n’élimine pas tous les délais, mais réduit les incohérences évitables."], bullets: ["Vérifier les tarifs officiels actualisés.", "Prévoir les coûts techniques et documentaires éventuels.", "Conserver chaque récépissé, convocation et preuve de diligence."] },
      ],
      checklistTitle: "Préparer l’immatriculation d’une terre agricole", checklistIntro: "Les pièces doivent expliquer l’origine du droit, la parcelle exacte et les personnes concernées.",
      checklist: ["Melkiya, actes de transmission et documents successoraux.", "Pièces d’identité, procurations et informations sur les copropriétaires.", "Plan, croquis, superficie et repères de limites.", "Éléments relatifs à l’exploitation et à l’accès à la parcelle.", "Informations sur les voisins, oppositions ou procédures antérieures."],
      faqTitle: "Questions sur l’immatriculation agricole",
      faqs: [
        { question: "Combien coûte l’immatriculation d’un terrain agricole ?", answer: "Le montant dépend des droits de conservation, de la situation du bien et des opérations techniques ou documents nécessaires. Il faut consulter les tarifs officiels applicables au dossier au moment du dépôt." },
        { question: "Peut-on immatriculer une terre agricole héritée ?", answer: "Une démarche peut être envisagée après avoir identifié tous les héritiers, les droits transmis, les actes disponibles et la parcelle. Les désaccords et ruptures documentaires doivent être traités." },
        { question: "Que faire si un voisin conteste la limite ?", answer: "Il faut confronter les actes, plans et repères du terrain, consigner précisément le désaccord et évaluer la voie technique, amiable ou contentieuse adaptée à l’état de la procédure." },
      ],
      ctaTitle: "Vous préparez l’immatriculation d’une terre agricole ?", ctaText: "Le cabinet vérifie le statut, les actes, les successions et les limites avant d’orienter la démarche.", serviceLabel: "Foncier rural et agricole",
      sourcesLabel: "Sources institutionnelles", sources: [{ label: "ANCFCC — procédure ordinaire d’immatriculation", url: ancfccProcedure }, { label: "Ministère de la Justice — matière foncière", url: propertyLawPortal }],
    },
    ar: {
      slug: "تحفيظ-أرض-فلاحية-بالمغرب",
      seo: { title: "تحفيظ الأراضي الفلاحية في المغرب: المساطر، التكاليف وحل النزاعات", description: "دليل تحفيظ الأراضي الفلاحية بالمغرب: إيداع المطلب، التحديد الطبوغرافي، تدبير الشياع الإرثي، وحل نزاعات الحدود والتعرضات وفق ظهير التحفيظ العقاري." },
      category: "التحفيظ العقاري الفلاحي",
      h1: "تحفيظ الأراضي الفلاحية في المغرب: المساطر والحدود وتدبير الشياع",
      lead: "يقتضي تحفيظ العقارات الفلاحية في المغرب تشخيصاً دقيقاً للنظام العقاري (ملك خاص، مشاع إرثي، أو أراضٍ تابعة لتعاونيات الإصلاح الزراعي)، ومطابقة الرسوم القديمة مع معالم الأرض الطبوغرافية.",
      intro: [
        "تمثل مسطرة تحفيظ الأرض الفلاحية الضمانة القصوى لحماية الاستغلالية الفلاحية وفتح آفاق الاستثمار والتمويل البنكي؛ غير أنها تصطدم في الميدان بتداخل الحدود، غموض الأنصبة الإرثية، وتدافع الرسوم العدلية القديمة.",
        "تتطلب معالجة ملف التحفيظ الفلاحي تدقيقاً مسبقاً في شروط الحيازة، وإعداد التصاميم الطبوغرافية المحينة، وتتبع عمليات التحديد الميداني بحضور المجاورين لتفادي التعرضات المفاجئة التي قد تعطل المسطرة لسنوات.",
      ],
      takeaways: [
        "التحديد الميداني للأرض الفلاحية هو المحك الحقيقي لتثبيت المعالم والأنصاب وتفادي تداخل الحدود مع الضيعات المجاورة.",
        "تصفية التركات وفحص الرسوم العدلية قبل إيداع مطلب التحفيظ يجنب المطلب نزاعات الشياع والتعرضات العائلية.",
        "الرسم العقاري المؤسس يطهر الأرض الفلاحية نهائياً من كافة دعاوى الاستحقاق والنزاعات التاريخية.",
      ],
      sections: [
        { id: "status", title: "التكييف القانوني للوعاء العقاري الفلاحي", paragraphs: ["يلزم التحقق أولاً من طبيعة الأرض وسندات تملكها: هل هي ملك خاص مستند لرسم ملكية عدلي، أم مشاعة بين ورثة، أم أرض مستفاد منها في إطار تعاونيات الإصلاح الزراعي، أم أرض مسترجعة خاضعة لظهير 1973.", "يحدد هذا التكييف مدى قابلية العقار للتحفيظ والوثائق الإدارية والتراخيص المطلوبة قبل إيداع المطلب لدى المحافظة العقارية المختصة مكانياً."], bullets: ["تشخيص النظام العقاري وسند الملكية الأصلي.", "التأكد من خلو الأرض من أي قيود أو حقوق خاصة تعرقل التحفيظ.", "حصر ورثة المالك المقيد وتصفية الفريضة الإرثية."] },
        { id: "boundary", title: "الإعداد الهندسي والتحديد الميداني للضيعة", paragraphs: ["غالباً ما تصف الرسوم العدلية القديمة الحدود بمعالم طبيعية متغيرة كالأودية، الأشجار، أو ممرات قديمة؛ مما يقتضي الاستعانة بمهندس مساح طبوغرافي محلف لإعداد تصميم طوبوغرافي رسمي.", "يتم إجراء التحديد بحضور المهندس المنتدب من المحافظة العقارية وطالب التحفيظ والمجاورين، وتوضع الأنصاب الثابتة، ويحرر محضر رسمي يثبت المعالم وأي نزاع أو معارضة على الحدود."], note: "حضور طالب التحفيظ ومؤازرته في عملية التحديد الفلاحي يكتسي أهمية بالغة للدفاع عن الحدود وتثبيت الأنصاب قانوناً." },
        { id: "cost", title: "الوجيبات المالية ومواجهة التعرضات الفلاحية", paragraphs: ["تخضع وجيبات التحفيظ لتعريفة محددة وفق المساحة والقيمة المقدرة، بالإضافة إلى مصاريف التحديد والمسح العقاري والجريدة الرسمية.", "عند تسجيل تعرض على مطلب التحفيظ الفلاحي، يسعى المحافظ إلى إجراء صلح؛ فإذا تعذر يُحال النزاع على المحكمة الابتدائية للبت في صحة التعرض وفق قواعد الإثبات وترجيح الحجج."], bullets: ["أداء رسوم المحافظة العقارية وتتبع النشر بالجريدة الرسمية.", "مواجهة التعرضات الكيدية عبر مذكرات جوابية مدعمة بالحجج.", "الترافع أمام قضاء التحفيظ لتأكيد صحة المطلب ورفض التعرضات غير المؤسسة."] },
      ],
      checklistTitle: "الوثائق الضرورية لتحفيظ أرض فلاحية",
      checklistIntro: "يتطلب ملف تحفيظ الأرض الفلاحية إعداداً وثائقياً وهندسياً متكاملاً قبل إيداع المطلب.",
      checklist: ["أصول رسوم الملكية العدلية أو العقود الرسمية المثبتة للتملك وسلسلة التفويتات.", "رسم الإراثة والوكالات الرسمية عند وجود ورثة أو شركاء على الشياع.", "تصميم طبوغرافي رسمي منجز من طرف مهندس مساح طبوغرافي معتمد.", "شهادة إدارية لنفي الصبغة غير الفردية أو الموانع الإدارية متى كان العقار غير محفظ في منطقة قروية.", "بيان مفصل بأسماء وعناوين الملاكين المجاورين من كافة الجهات."],
      faqTitle: "أسئلة شائعة حول تحفيظ الأراضي الفلاحية بالمغرب",
      faqs: [
        { question: "كيف تتم مواجهة نزاع حول حدود أرض فلاحية أثناء التحديد؟", answer: "يقوم المهندس الطبوغرافي المنتدب بتدوين النزاع وتثبيت الأنصاب المتنازع بشأنها بصفة مؤقتة في محضر التحديد، ويسجل التعرض بالرسم؛ ويتعين على طالب التحفيظ تقديم مذكراته وحججه للمحافظ العقاري لحل النزاع ودياً أو إحالته على القضاء للبت في الحدود الدقيقة." },
        { question: "هل يمكن لأحد الشركاء إيداع مطلب تحفيظ لجزء مفرز من أرض مشاعة؟", answer: "لا يجوز لأي شريك تحفيظ جزء مفرز من عقار مشاع إلا بعد إجراء قسمة رضائية أو قضائية تفرز حصته برسم عقاري مستقل؛ وفي غير ذلك يُودع مطلب التحفيظ لمجموع العقار باسم كافة الشركاء على الشياع بحسب أنصبتهم الشرعية." },
        { question: "ما هي الضمانات التي يمنحها الرسم العقاري للمستغل الفلاحي؟", answer: "يمنح الرسم العقاري حماية قانونية مطلقة تمنع أي ترامٍ أو ادعاء بالملكية، ويمكّن الفلاح من رهن العقار للحصول على قروض فلاحية للاستثمار وشراء الآلات وتجهيز شبكات السقي، فضلاً عن الاستفادة من برامج الدعم الفلاحي وصناديق التنمية الفلاحية." },
      ],
      ctaTitle: "هل تستعدون لتحفيظ أرضكم الفلاحية أو تواجهون نزاع تحديد وتعرض؟",
      ctaText: "تفضلوا بعرض رسومكم وتصاميمكم على مكتب الأستاذ عبد الرزاق الرويسي بالمحمدية لتدقيق المسطرة وضمان تأسيس الرسم العقاري دون تعقيدات.",
      serviceLabel: "العقار الفلاحي والتحفيظ",
      sourcesLabel: "المصادر الرسمية",
      sources: [{ label: "الوكالة الوطنية للمحافظة العقارية — المسطرة العادية", url: "https://www.ancfcc.gov.ma/arnos-m%C3%A9tiers/conservation-fonci%C3%A8re-cadastre/procedure-normale/" }, { label: "وزارة العدل — المادة العقارية", url: propertyLawPortal }],
    },
  },
};
