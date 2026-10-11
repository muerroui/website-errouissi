import type { GuideDefinition } from "@/lib/guide-types";

const landRegistrationLaw = "https://adala.justice.gov.ma/api/uploads/2024/06/25/%D8%A7%D9%84%D8%AA%D8%AD%D9%81%D9%8A%D8%B8%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A-1719327275958.pdf";
const civilProcedureCode = "https://adala.justice.gov.ma/api/uploads/2024/07/04/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%B7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9-1720092144342.pdf";
const ancfccPortal = "https://www.ancfcc.gov.ma/";

export const propertyCertificateGuide: GuideDefinition = {
  key: "property-certificate",
  publishedAt: "2026-10-10",
  updatedAt: "2026-10-10",
  serviceKey: "immobilier",
  relatedGuides: ["immatriculation", "caveat", "conservatory-seizure", "sale-others-property"],
  content: {
    fr: {
      slug: "certificat-propriete-conservation-fonciere-maroc",
      seo: {
        title: "Certificat de propriété et protection du titre foncier au Maroc | ANCFCC & Muhafadati",
        description: "Guide juridique du certificat de propriété au Maroc : mentions légales, détection des charges et saisies, et protection active du titre foncier via le service Muhafadati.",
      },
      category: "Publicité et sécurité foncière",
      h1: "Certificat de propriété et protection du titre foncier au Maroc (Service Muhafadati)",
      lead: "Délivré par l'ANCFCC, le certificat de propriété constitue la radiographie juridique du titre foncier. Sa lecture attentive et l'activation de la surveillance Muhafadati sont indispensables pour sécuriser toute transaction et prémunir le bien contre la spoliation.",
      intro: [
        "Au Maroc, la sécurité juridique d'une opération immobilière repose sur la publicité foncière régie par le dahir du 12 août 1913 sur l'immatriculation foncière, modifié et complété par la loi n° 14-07. Le certificat de propriété délivré par la conservation foncière fait foi de la situation juridique du bien à la date exacte de son émission.",
        "Au-delà de la confirmation du nom du propriétaire, ce document révèle les éventuelles restrictions au droit de disposer : hypothèques, prénotations judiciaires, saisies conservatoires ou clauses d'inaliénabilité. Parallèlement, le déploiement du service numérique « Muhafadati » par l'ANCFCC offre aux propriétaires un outil de veille préventive indispensable pour détecter en temps réel toute tentative d'immatriculation frauduleuse ou de manœuvre sur leur titre.",
      ],
      takeaways: [
        "Le certificat de propriété reflète l'état du titre foncier à la date et heure précises de sa délivrance ; il doit être renouvelé immédiatement avant la signature de tout acte authentique.",
        "La présence de mentions comme 'منع التفويت' (interdiction d'aliéner), une hypothèque ou un commandement de saisie bloque la pleine jouissance ou la vente du bien.",
        "Le service officiel 'Muhafadati' alerte le propriétaire par SMS dès le dépôt de la moindre réquisition ou inscription sur son titre foncier, constituant un rempart anti-spoliation majeur.",
      ],
      sections: [
        {
          id: "valeur-mentions",
          title: "Valeur juridique et mentions essentielles du certificat de propriété",
          paragraphs: [
            "Le certificat de propriété retranscrit fidèlement les énonciations portées sur les livres fonciers. Il identifie la désignation exacte de l'immeuble (nom du bien, numéro de titre foncier, indice cadastral, contenance superficiaire et situation géographique).",
            "Il mentionne l'identité complète du ou des propriétaires inscrits, la nature de leur droit (pleine propriété, usufruit, nue-propriété) et leurs quotes-parts en cas d'indivision, ainsi que l'origine de propriété (achat, donation, succession, partage). Une divergence entre la contenance réelle sur le terrain et la superficie cadastrale mentionnée au certificat exige un contrôle topographique préalable.",
          ],
          bullets: [
            "Vérifier la concordance exacte du numéro de titre et du bureau de conservation compétent.",
            "Contrôler la répartition des parts indivises et l'identité des copropriétaires.",
            "Rapprocher la superficie inscrite du plan cadastral officiel délivré par le service du cadastre.",
          ],
        },
        {
          id: "charges-restrictions",
          title: "Détecter les charges, sûretés et clauses restrictives",
          paragraphs: [
            "L'analyse critique d'un certificat porte principalement sur le relevé des charges et droits réels accessoires. La présence d'une hypothèque conventionnelle ou forcée indique que le bien garantit une créance, souvent bancaire, nécessitant une mainlevée régulière avant vente.",
            "D'autres mentions appellent une vigilance extrême : la prénotation (التقييد الاحتياطي), signalant une action judiciaire en revendication de propriété ; la saisie conservatoire ou exécution (الحجز التحفظي أو التنفيذي) ; ou encore la clause de 'منع التفويت', fréquente sur les logements acquis dans le cadre d'un programme social ou bénéficiant d'aides étatiques soumises à engagement d'habitation.",
          ],
          note: "Un certificat de propriété ne garantit pas l'absence d'actes en cours de traitement déposés le jour même. Seule une consultation directe auprès du conservateur ou le recours à un avocat permet de s'assurer de l'absence de réquisition pendante.",
        },
        {
          id: "service-muhafadati",
          title: "Le service officiel 'Muhafadati' : surveillance active du patrimoine",
          paragraphs: [
            "Mis en place par l'Agence Nationale de la Conservation Foncière (ANCFCC), le service en ligne 'Muhafadati' (محافظتي) permet à tout propriétaire titulaire d'un titre foncier de souscrire gratuitement à un dispositif d'alerte dématérialisé.",
            "Dès qu'une formalité est déposée à la conservation foncière concernant le titre surveillé (dépôt d'un acte de vente, inscription d'une hypothèque, réquisition de bornage, prénotation ou demande de duplicata de titre foncier), un SMS et un courriel d'avertissement sont automatiquement expédiés au titulaire du compte. Ce service est particulièrement stratégique pour les Marocains Résidant à l'Étranger (MRE) et les propriétaires de parcelles rurales non occupées en permanence.",
          ],
          bullets: [
            "Inscription en ligne sur le portail officiel de l'ANCFCC avec pièce d'identité et référence du titre.",
            "Réception d'une notification instantanée dès l'enrôlement d'une formalité au registre des dépôts.",
            "Possibilité de consulter le détail de la formalité initiée et d'intervenir avant son inscription définitive.",
          ],
        },
        {
          id: "reaction-urgence",
          title: "Que faire en cas d'alerte suspecte ou d'anomalie détectée ?",
          paragraphs: [
            "Si un propriétaire reçoit une notification Muhafadati pour une formalité qu'il n'a pas autorisée, ou si un certificat révèle une inscription suspecte, chaque heure compte. Le conservateur sur les propriétés foncières dispose de délais d'instruction avant de valider définitivement une inscription.",
            "L'avocat mandaté peut immédiatement former opposition administrative auprès du conservateur, requérir le blocage provisoire du registre des dépôts, déposer une requête en prénotation conservatoire d'urgence devant le Président du Tribunal et saisir le Procureur du Roi en cas de falsification de procuration ou de manœuvre constitutive de spoliation foncière.",
          ],
          bullets: [
            "Ne pas attendre : le conservateur est tenu d'inscrire les actes réguliers en la forme si aucune opposition légale ne lui est notifiée.",
            "Faire consigner une réquisition d'opposition ou de contestation visée par le conservateur de permanence.",
            "Engager l'action en référé ou au fond pour solliciter la nullité des actes litigieux et la radiation des inscriptions indues.",
          ],
        },
      ],
      checklistTitle: "Vérifications indispensables sur un certificat de propriété",
      checklistIntro: "Avant d'engager des fonds ou de signer un compromis, vérifiez scrupuleusement ces éléments.",
      checklist: [
        "Date et heure de délivrance du certificat (exiger un document de moins de 3 mois, et de moins de 48h au compromis).",
        "Vérification de la concordance de l'identité du vendeur avec sa Carte Nationale d'Identité.",
        "Contrôle de l'absence de prénotation judiciaire (art. 85 du dahir du 12 août 1913).",
        "Contrôle de l'absence de saisie conservatoire (art. 452 du Code de procédure civile) ou de saisie exécution.",
        "Vérification des hypothèques bancaires et obtention préalable d'un engagement de mainlevée chiffré.",
        "Activation confirmée de l'abonnement au service Muhafadati pour la parcelle concernée.",
      ],
      faqTitle: "Questions fréquentes sur le certificat de propriété et Muhafadati",
      faqs: [
        {
          question: "Comment obtenir un certificat de propriété officiel au Maroc ?",
          answer: "Le certificat s'obtient soit directement auprès de la Conservation Foncière dont dépend l'immeuble, soit en ligne via la plateforme dématérialisée de l'ANCFCC. La délivrance donne lieu au paiement de la redevance légale (100 dirhams par certificat unitaire).",
        },
        {
          question: "Quelle est la durée de validité légale d'un certificat de propriété ?",
          answer: "La loi ne fixe pas une date d'expiration stricte, mais en pratique bancaire et notariale, un certificat est considéré comme valable pour une durée de un à trois mois. Toutefois, le titre foncier pouvant évoluer à tout instant, seul un certificat daté du jour de l'opération offre une pleine sécurité.",
        },
        {
          question: "Que signifie la mention 'منع التفويت' sur un certificat de propriété ?",
          answer: "La mention 'منع التفويت' (interdiction d'aliéner) indique que le bien ne peut être vendu, cédé ou hypothéqué sans l'accord de l'entité au profit de laquelle l'interdiction a été inscrite (État, organisme de crédit social, commune, ou clause d'inaliénabilité temporaire dans une donation).",
        },
        {
          question: "Comment le service Muhafadati protège-t-il contre la spoliation foncière ?",
          answer: "En informant le propriétaire par SMS dès qu'une demande (dépôt d'acte, procuration, demande de certificat ou de duplicata) est enregistrée par le bureau d'ordre de la conservation. Cela permet d'intervenir et de stopper la manœuvre avant que le titre ne soit modifié au profit d'un tiers.",
        },
      ],
      ctaTitle: "Vous souhaitez vérifier un bien avant achat ou sécuriser votre titre foncier ?",
      ctaText: "Le cabinet de Maître Errouissi réalise l'audit juridique complet du titre foncier, analyse les inscriptions existantes et met en œuvre les mesures conservatoires nécessaires à la protection de vos intérêts.",
      serviceLabel: "Droit immobilier et foncier",
      sourcesLabel: "Sources officielles",
      sources: [
        { label: "ANCFCC — Portail officiel des services en ligne et certificat de propriété", url: ancfccPortal },
        { label: "Ministère de la Justice — Dahir du 12 août 1913 sur l'immatriculation foncière (Loi 14.07)", url: landRegistrationLaw },
      ],
    },
    ar: {
      slug: "شهادة-الملكية-العقارية-وحماية-الرسم-العقاري",
      seo: {
        title: "شهادة الملكية العقارية بالمغرب: استخراجها، فحص التحملات وخدمة محافظتي",
        description: "دليل شامل حول شهادة الملكية العقارية بالمغرب: كيفية استخراجها من المحافظة، قراءة التحملات والرهون والحجوزات، والتسجيل في خدمة محافظتي للحماية من السطو العقاري.",
      },
      category: "الإشهار والتحفيظ العقاري",
      h1: "شهادة الملكية العقارية وحماية الرسم العقاري في المغرب (خدمة محافظتي)",
      lead: "تُعد شهادة الملكية العقارية الصادرة عن الوكالة الوطنية للمحافظة العقارية المرآة القانونية للرسم العقاري؛ إذ تكشف هوية الملاك والتحملات والرهون والحجوزات والتقييدات الاحتياطية المترتبة على العقار طبقاً لظهير التحفيظ العقاري.",
      intro: [
        "تُشكل شهادة الملكية العقارية الوثيقة المرجعية الأولى التي يُبنى عليها أي تصرف عقاري سليم في القانون المغربي (بيع، شراء، رهن، قسمة، أو إرث). وتستمد هذه الشهادة حجيتها من مقتضيات ظهير 12 غشت 1913 المعدل والمتمم بالقانون رقم 14.07، حيث تعكس بدقة كل ما هو مسجل في السجل العقاري إلى غاية تاريخ وساعة تسليمها.",
        "إن فحص شهادة الملكية لا يقتصر على التأكد من اسم البائع، بل يقتضي تدقيقاً قانونياً متخصصاً في جدول التحملات والتقييدات المانعة للتفويت؛ كالرهون البنكية، والتقييدات الاحتياطية المبنية على دعاوى الاستحقاق، والحجوزات التحفظية أو التنفيذية. وموازاة مع ذلك، وفّرت الوكالة الوطنية للمحافظة العقارية خدمة 'محافظتي' الإلكترونية التي تُعد وسيلة وقائية حاسمة لمراقبة الرسم العقاري عن بُعد والتصدي الفوري لأي محاولة للاستيلاء على العقارات.",
      ],
      takeaways: [
        "شهادة الملكية تعكس الوضعية القانونية للرسم العقاري في تاريخ وساعة استخراجها، ولا بد من تجديدها فوراً قبل إبرام أي وعد بالبيع أو عقد نهائي.",
        "وجود تقييد احتياطي، أو حجز تحفظي، أو شرط 'منع التفويت' بالشهادة يغل يد المالك عن التصرف ويمنع المشتري من تقييد حقه إلى حين رفع المانع قانوناً.",
        "خدمة 'محافظتي' الإلكترونية هي الحارس الرقمي للرسم العقاري؛ إذ تُشعر المالك عبر رسالة نصية (SMS) فور إيداع أي وثيقة أو إجراء لدى المحافظة العقارية.",
      ],
      sections: [
        {
          id: "valeur-mentions",
          title: "القيمة القانونية لشهادة الملكية ومحتوياتها الأساسية",
          paragraphs: [
            "تتضمن شهادة الملكية البيانات الجوهرية التي تعرّف بالملك المحفظ: رقم الرسم العقاري واسم العقار، والموقع الجغرافي والإداري الدقيق، والحدود والمشتملات، والمساحة الكلية المحددة بموجب التصميم الهندسي الطبوغرافي المنجز من طرف المسح العقاري.",
            "كما تُفصّل الشهادة أسماء المالكين المقيدين، وحصصهم الشائعة بدقة (في حالة الملكية المشتركة أو الشياع الإرثي)، وطبيعة حقهم (ملكية تامة، حق رقبة، أو حق انتفاع)، وسند اكتساب الملكية (شراء، هبة، إراثة، مخارجة). ويُعد تطابق هذه البيانات مع وثائق هوية الأطراف وواقع العقار الميداني شرطاً أساسياً لصحة أي معاملة.",
          ],
          bullets: [
            "التأكد من رقم الرسم العقاري التابع للمحافظة المختصة مكانياً وخلوه من أخطاء التر единственный.",
            "التحقق من مجموع الحصص في حالة الشياع للتأكد من عدم وجود نقص في الأنصبة المقيدة.",
            "مقارنة المساحة الواردة في الشهادة مع التصميم الطبوغرافي الرسمي ومعاينة العقار على أرض الواقع.",
          ],
        },
        {
          id: "charges-restrictions",
          title: "كيفية قراءة جدول التحملات والقيود والرهون المسجلة",
          paragraphs: [
            "يحتوي القسم الثاني من شهادة الملكية على 'جدول التحملات العقارية'، وهو الجزء الأكثر خطورة وحساسية في المعاملات العقارية. ويُبين هذا الجدول وجود الرهون الرسمية الاتفاقية لفائدة الأبناك، أو الرهون الجبرية لفائدة الخزينة العامة أو الصندوق الوطني للضمان الاجتماعي.",
            "كما يُسجل بالجدول التقييد الاحتياطي (المنظم بالفصلين 85 و86 من ظهير التحفيظ) الذي يدل على وجود نزاع قضائي معروض على المحكمة بخصوص ملكية العقار أو صحة تفويته، فضلاً عن الحجوزات التحفظية الصادرة عن رؤساء المحاكم (الفصل 452 ق.م.م) وحجوزات التنفيذ، والارتفاقات العقارية، وشرط 'منع التفويت' المقيد لفائدة الدولة أو الجماعات الترابية.",
          ],
          note: "إن إدلاء البائع بشهادة ملكية قديمة يعود تاريخها لأشهر خلت لا يوفر أي أمان تعاقدي؛ فقد يكون العقار قد أُثقل بتقييد احتياطي أو حجز قضائي في اليوم الموالي لاستخراجها.",
        },
        {
          id: "service-muhafadati",
          title: "خدمة 'محافظتي' الإلكترونية: الحماية الاستباقية للرسم العقاري",
          paragraphs: [
            "أطلقت الوكالة الوطنية للمحافظة العقارية والمسح العقاري والخرائطية (ANCFCC) خدمة 'محافظتي' كبوابة رقمية تُمكّن المالكين من تتبع وضعية رسومهم العقارية وتلقي إشعارات فورية عبر الرسائل القصيرة (SMS) والبريد الإلكتروني عند كل تقييد أو معاملة.",
            "فبمجرد إيداع أي طلب لدى مصلحة الإيداع بالمحافظة (طلب شهادة ملكية، إيداع عقد بيع، تقييد رهن، تسجيل إراثة، تقييد احتياطي، أو طلب نظير الرسم العقاري)، يتلقى المالك إشعاراً في حينه، مما يُتيح له رصد أي معاملة مشبوهة أو تدليسية قبل أن تستقر بالرسم العقاري. وتكتسي هذه الخدمة أهمية بالغة واستثنائية بالنسبة لمغاربة العالم (MRE) وأصحاب العقارات الفلاحية الشاسعة.",
          ],
          bullets: [
            "التسجيل عبر البوابة الرقمية الرسمية للمحافظة العقارية برقم البطاقة الوطنية ورقم الرسم العقاري.",
            "التوصل بإشعار فوري عند قيد أي معاملة في سجل الإيداع لدى المحافظة العقارية.",
            "إمكانية الولوج لحساب المالك للاطلاع على رقم وتاريخ المطلب أو السند المودع.",
          ],
        },
        {
          id: "reaction-urgence",
          title: "المسطرة القانونية العاجلة عند التوصل بإشعار مريب من خدمة 'محافظتي'",
          paragraphs: [
            "في حال توصل المالك برسالة من خدمة 'محافظتي' تفيد إيداع وثيقة أو إجراء لم يُباشره هو بنفسه، فإن عامل الوقت يُعد حاسماً قبل تقييد الوثيقة نهائياً في السجل العقاري؛ إذ إن تأسيس الحق أو تقييده يُصعّب مسطرة التشطيب اللاحق.",
            "يجب على المالك أو دفاعه التوجه الفوري إلى المحافظة العقارية لطلب الاطلاع على الوثيقة المودعة، وإيداع تعرض كتابي معلل لوقف إجراءات التقييد، والمبادرة فوراً إلى وضع تقييد احتياطي استعجالي لحفظ الحق، مع تحريك شكاية مستعجلة أمام النيابة العامة في حالة وجود تزوير في الوكالات أو العقود.",
          ],
          bullets: [
            "الاطلاع الفوري على ملف الإيداع لدى المحافظة العقارية والتأكد من هوية المودع وسنده.",
            "تقديم طلب إيقاف التقييد للمحافظ على الأملاك العقارية لعلة النزاع الجدي أو التزوير.",
            "استصدار أمر بالتقييد الاحتياطي من رئيس المحكمة ورفع دعوى بطلان التصرف في الموضوع.",
          ],
        },
      ],
      checklistTitle: "خطوات التحقق المستندي وتأمين العقار",
      checklistIntro: "خطوات جوهرية يتعين اتباعها قبل إتمام أي معاملة عقارية للوقاية من النزاعات والتدليس.",
      checklist: [
        "استخراج شهادة ملكية عقارية حديثة التاريخ (لا تتعدى 24 إلى 48 ساعة قبل توقيع العقد).",
        "التأكد من خلو الشهادة من التقييدات الاحتياطية (الفصل 85) والحجوزات التحفظية والتنفيذية.",
        "فحص شرط 'منع التفويت' والتأكد من سقوط أجله أو الحصول على رفع اليد الرسمي بشأنه.",
        "التأكد من الحصول على شهادة رفع اليد البنكية الرسمية قبل أداء ثمن عقار مثقل برهن.",
        "مطابقة معالم العقار على الأرض مع التصميم العقاري الطبوغرافي المسلم من المسح العقاري.",
        "تفعيل الاشتراك الفوري في خدمة 'محافظتي' لحماية العقار من أي محاولة استيلاء أو تصرف خفي.",
      ],
      faqTitle: "أسئلة شائعة حول شهادة الملكية العقارية وخدمة محافظتي",
      faqs: [
        {
          question: "كيف يمكن استخراج شهادة الملكية العقارية بالمغرب عبر الإنترنت؟",
          answer: "يمكن استخراج شهادة الملكية العقارية رقمياً عبر البوابة الرسمية للوكالة الوطنية للمحافظة العقارية (ancfcc.gov.ma)، عن طريق إدخال رقم الرسم العقاري ورقم المطلب والمحافظة المختصة، وأداء الرسوم القانونية (100 درهم) بواسطة البطاقة البنكية، ويتم تحميل الشهادة الموقعة إلكترونياً والمزودة برمز الاستجابة السريعة (QR Code).",
        },
        {
          question: "ما هي مدة صلاحية شهادة الملكية العقارية في المعاملات؟",
          answer: "لا يحدد القانون أجلاً لانتهاء صلاحية شهادة الملكية؛ إلا أن العرف البنكي والتوثيقي يقصر صلاحيتها على شهر إلى ثلاثة أشهر على الأكثر. ومن الناحية القانونية الوقائية، يُنصح دوماً باستخراج شهادة ملكية بتاريخ يوم إبرام المعاملة لأن السجل العقاري قد يشهد تقييد رهن أو حجز في أي وقت.",
        },
        {
          question: "ماذا يعني وجود عبارة 'منع التفويت' في شهادة الملكية العقارية؟",
          answer: "تعني عبارة 'منع التفويت' أن العقار مقيد بالتزام قانوني أو اتفاقي يمنع مالكه من بيعه أو هبته أو رهنه خلال فترة محددة دون موافقة الجهة المستفيدة (كالخزينة العامة، أو مؤسسات السكن الاقتصادي والاجتماعي إلى غاية انصرام مدة 4 سنوات من السكن الفعلي واسترداد الضريبة على القيمة المضافة).",
        },
        {
          question: "ما التصرف القانوني الفوري عند تلقي إشعار مشبوه من خدمة 'محافظتي'؟",
          answer: "يجب التوجه فوراً وبدون تأخير إلى المحافظة العقارية المعنية وإشعار المحافظ كتابةً بعدم صدور أي تصرف عن المالك، ومطالبته بتعليق مسطرة التقييد إلى حين بت القضاء، وتكليف محامٍ برفع مقال استعجالي أمام رئيس المحكمة لوضع تقييد احتياطي أو إيقاف المعاملة ومتابعة المشتبه بهم جنائياً.",
        },
      ],
      ctaTitle: "هل ترغبون في تدقيق وضعية عقار قبل الشراء أو حماية رسمكم العقاري من المخاطر؟",
      ctaText: "يتولى مكتب الأستاذ عبد الرزاق الرويسي التدقيق القانوني المستندي للشواهد العقارية ومواكبة الإجراءات التحفظية والمستعجلة لحماية ملكيتكم وصيانتها طبقاً لأحكام القانون العقاري المغربي.",
      serviceLabel: "القانون العقاري والتحفيظ",
      sourcesLabel: "المصادر الرسمية",
      sources: [
        { label: "الوكالة الوطنية للمحافظة العقارية — فضاء الخدمات الإلكترونية وشهادة الملكية", url: ancfccPortal },
        { label: "وزارة العدل — ظهير التحفيظ العقاري 12 غشت 1913 المعدل بالقانون 14.07", url: landRegistrationLaw },
      ],
    },
  },
};

export const conservatorySeizureGuide: GuideDefinition = {
  key: "conservatory-seizure",
  publishedAt: "2026-10-10",
  updatedAt: "2026-10-10",
  serviceKey: "immobilier",
  relatedGuides: ["caveat", "immatriculation", "property-certificate", "ownership-claim"],
  content: {
    fr: {
      slug: "saisie-conservatoire-immobiliere-mainlevee-maroc",
      seo: {
        title: "Saisie conservatoire sur bien immobilier au Maroc : conditions et procédure de mainlevée",
        description: "Comprendre la saisie conservatoire immobilière au Maroc : fondement juridique (art. 452 CPC), effets sur le titre foncier, contestation et procédure de mainlevée en justice.",
      },
      category: "Voies d'exécution et sûretés réelles",
      h1: "Saisie conservatoire sur un bien immobilier au Maroc : effets et procédure de mainlevée",
      lead: "Mesure d'urgence régie par les articles 452 et suivants du Code de procédure civile marocain, la saisie conservatoire immobilise le bien entre les mains du débiteur pour garantir le recouvrement d'une créance. Le propriétaire peut toutefois en contester la régularité et en obtenir la mainlevée en justice.",
      intro: [
        "Dans le contentieux civil et commercial au Maroc, la saisie conservatoire sur un immeuble constitue l'une des mesures les plus redoutables pour garantir l'exécution future d'une obligation pécuniaire. Prévue par les articles 452 à 458 du Code de procédure civile, elle est ordonnée par le Président du Tribunal de Première Instance sur simple requête d'un créancier justifiant d'une créance paraissant fondée en son principe.",
        "Dès son inscription sur les livres fonciers par le conservateur de la propriété foncière, le bien devient juridiquement indisponible : toute vente, donation, constitution d'hypothèque ou aliénation devient inopposable au créancier saisissant. Cependant, cette mesure ne doit pas être dévoyée à des fins de pression abusive. Le débiteur ou tiers propriétaire dispose de recours juridiques précis — notamment l'action en rétractation ou en mainlevée en référé — pour faire lever le blocage.",
      ],
      takeaways: [
        "La saisie conservatoire rend l'immeuble indisponible et empêche toute aliénation dès sa mention sur le titre foncier auprès de l'ANCFCC.",
        "Elle ne confère pas de droit réel sur le bien et ne vaut pas vente forcée ; elle a pour seul objet de préserver le gage général du créancier.",
        "Le débiteur peut obtenir la mainlevée en justice en démontrant l'absence d'urgence ou de créance sérieuse, ou en consignant le montant de la créance à la caisse du tribunal.",
      ],
      sections: [
        {
          id: "conditions-saisie",
          title: "Conditions juridiques d'obtention de la saisie conservatoire immobilière",
          paragraphs: [
            "Conformément à l'article 452 du Code de procédure civile, la saisie conservatoire ne peut être autorisée que si le requérant justifie d'une créance paraissant fondée en son principe et d'un risque réel dans son recouvrement (insolvabilité imminente, manœuvres d'organisation de disparition du patrimoine).",
            "La mesure est sollicitée par voie de requête unilatérale déposée devant le Président du Tribunal de Première Instance statuant dans le cadre de l'article 148 du CPC. Le juge apprécie souverainement le péril sans préjuger du fond du litige, et rend une ordonnance sur requête exécutoire sur minute nonobstant toute opposition ou pourvoi.",
          ],
          bullets: [
            "Justification d'un titre, commencement de preuve par écrit ou créance incontestable en son principe.",
            "Caractérisation du péril et de l'urgence menaçant le recouvrement de la dette.",
            "Dépôt d'une requête unilatérale chiffrée avec désignation précise du titre foncier de l'immeuble ciblé.",
          ],
        },
        {
          id: "effets-titre-foncier",
          title: "Effets de l'inscription de la saisie sur le titre foncier",
          paragraphs: [
            "L'ordonnance portant saisie conservatoire est notifiée à la conservation foncière compétente et au débiteur conformément à l'article 455 du CPC. Le conservateur porte mention immédiate de la saisie sur le registre foncier et sur le certificat de propriété.",
            "À compter de cette inscription, le débiteur conserve la jouissance et l'administration matérielle du bien, mais perd le pouvoir d'en disposer valablement au détriment du saisissant. Tout acte translatif de propriété ou constitution de droit réel inscrit postérieurement est réputé inopposable de plein droit au créancier saisissant.",
          ],
          note: "La saisie conservatoire n'équivaut pas à une saisie exécution (الحجز التنفيذي) : elle ne permet pas d'engager directement la vente aux enchères publiques de l'immeuble tant qu'un jugement définitif au fond condamnant au paiement n'a pas été obtenu.",
        },
        {
          id: "voies-mainlevee",
          title: "Les voies de contestation : référé-rétractation et mainlevée judiciaire",
          paragraphs: [
            "Lorsqu'une saisie conservatoire est pratiquée de manière infondée, disproportionnée ou abusive, le propriétaire de l'immeuble peut saisir le Président du Tribunal statuant en référé (articles 148 et 149 du CPC) d'une demande de rétractation ou de mainlevée de l'ordonnance.",
            "Le juge des référés peut ordonner la mainlevée immédiate de la saisie s'il constate le défaut manifeste de créance sérieuse, le caractère abusif de la mesure, le paiement préalable de la dette, ou la nullité formelle des actes d'exécution. En cas de préjudice causé par une saisie téméraire, le propriétaire est fondé à réclamer des dommages-intérêts.",
          ],
          bullets: [
            "Démontrer l'absence de fondement sérieux de la créance ou l'inexistence du péril.",
            "Faire constater les vices de procédure entachant l'ordonnance ou sa notification.",
            "Assigner le créancier devant le juge des référés pour obtenir une ordonnance de mainlevée exécutoire sur minute.",
          ],
        },
        {
          id: "consignation-garantie",
          title: "Mainlevée par substitution de garantie ou consignation",
          paragraphs: [
            "Si un propriétaire souhaite impérativement vendre ou hypothéquer son bien alors qu'un litige est pendant, il peut recourir à la procédure de cantonnement ou de substitution de garantie régie par le CPC.",
            "Cette démarche consiste à consigner le montant exact de la créance litigieuse (principal et frais) entre les mains du greffe du tribunal ou à fournir une caution bancaire irrévocable agréée. Le juge ordonne alors la mainlevée intégrale de la saisie sur le titre foncier, la sûreté étant reportée sur les sommes consignées sans préjudice pour le créancier.",
          ],
          bullets: [
            "Permet de débloquer immédiatement la vente d'un bien sans attendre l'issue d'un long procès au fond.",
            "Radiation de la saisie opérée par le conservateur foncier sur présentation de l'ordonnance de substitution et de la quittance de consignation.",
          ],
        },
      ],
      checklistTitle: "Pièces à réunir pour contester ou lever une saisie conservatoire",
      checklistIntro: "Dossier indispensable pour introduire une requête en rétractation ou en mainlevée.",
      checklist: [
        "Copie intégrale de l'ordonnance portant saisie conservatoire et du procès-verbal de notification.",
        "Certificat de propriété récent mentionnant l'inscription de la saisie conservatoire.",
        "Preuves de paiement, quittances, factures ou contestations écrites démontrant l'inexistence de la dette.",
        "Reçu de consignation de la somme à la caisse du tribunal ou cautionnement bancaire (en cas de substitution).",
        "Historique des correspondances et actes de la procédure au fond pendante.",
      ],
      faqTitle: "Questions fréquentes sur la saisie conservatoire immobilière",
      faqs: [
        {
          question: "La saisie conservatoire entraîne-t-elle la vente forcée immédiate du bien ?",
          answer: "Non. La saisie conservatoire est une simple mesure de blocage temporaire visant à empêcher le débiteur d'organiser son insolvabilité. Pour vendre l'immeuble aux enchères publiques, le créancier doit obligatoirement obtenir un titre exécutoire au fond (jugement définitif) et convertir la saisie conservatoire en saisie exécution (art. 455 CPC).",
        },
        {
          question: "Comment faire radier une saisie conservatoire auprès de la Conservation Foncière ?",
          answer: "La radiation peut s'effectuer soit à l'amiable, sur présentation d'une attestation de mainlevée délivrée par le créancier saisissant, soit par voie judiciaire, en présentant au conservateur une ordonnance de mainlevée ou de rétractation devenue définitive rendue par le juge compétent.",
        },
        {
          question: "Quels sont les délais pour obtenir la mainlevée d'une saisie conservatoire en référé ?",
          answer: "La procédure de référé étant une procédure d'extrême urgence, une ordonnance de mainlevée ou de rétractation peut être obtenue en quelques jours à quelques semaines selon le calendrier des audiences du tribunal et la réactivité des parties.",
        },
        {
          question: "Quelle est la différence entre saisie conservatoire et prénotation ?",
          answer: "La prénotation (art. 85 du dahir sur l'immatriculation foncière) protège un droit réel sur l'immeuble lui-même (revendication de propriété, promesse de vente non respectée), tandis que la saisie conservatoire (art. 452 CPC) protège une créance de somme d'argent personnelle qui n'est pas nécessairement liée au bien immobilier saisi.",
        },
      ],
      ctaTitle: "Votre bien immobilier fait l'objet d'une saisie conservatoire ou vous souhaitez recouvrer une créance ?",
      ctaText: "Le cabinet de Maître Errouissi intervient d'urgence devant le Président du Tribunal de Première Instance pour former tierce opposition, obtenir la rétractation ou la mainlevée de la saisie, ou au contraire sécuriser les créances de ses clients.",
      serviceLabel: "Droit immobilier et voies d'exécution",
      sourcesLabel: "Sources officielles",
      sources: [
        { label: "Ministère de la Justice — Code de procédure civile marocain (Articles 452 à 458)", url: civilProcedureCode },
        { label: "ANCFCC — Réglementation des inscriptions et radiations sur titres fonciers", url: ancfccPortal },
      ],
    },
    ar: {
      slug: "الحجز-التحفظي-على-العقار-ورفعه-بالمغرب",
      seo: {
        title: "الحجز التحفظي على العقار في القانون المغربي: الشروط، الآثار ومسطرة الرفع",
        description: "دليل مسطرة الحجز التحفظي على العقار بالمغرب: الشروط القانونية (الفصل 452 ق.م.م)، أثره على الرسم العقاري، ومسطرة الرجوع فيه أو رفعه استعجالاً أمام رئيس المحكمة.",
      },
      category: "طرق التنفيذ والضمانات العينية",
      h1: "الحجز التحفظي على العقار ومسطرة رفعه في القانون المغربي",
      lead: "يُعتبر الحجز التحفظي على العقار إجراءً قضائياً عاجلاً يهدف إلى وضع العقار تحت يد القضاء لمنع المدين من التصرف فيه أو تهريبه إضراراً بالدائن (الفصل 452 وما بعده من قانون المسطرة المدنية)، مع إمكانية المالك في استصدار أمر برفع الحجز عند انتفاء شروطه.",
      intro: [
        "يُعد الحجز التحفظي العقاري أحد أخطر التدابير الوقائية وأكثرها تأثيراً في النزاعات المدنية والتجارية بالمغرب. وقد نظمه المشرع المغربي بمقتضى الفصول 452 إلى 458 من قانون المسطرة المدنية، حيث يمنح رئيس المحكمة الابتدائية صلاحية إصدار أمر بإيقاع الحجز بناءً على عريضة يقدمها الدائن متى أثبت مديونية مبررة في ظاهرها ومخاوف جدية من ضياع دينه.",
        "وبمجرد تقييد أمر الحجز بالرسم العقاري من طرف المحافظ، يُغل يد المالك عن تفويت العقار أو ترتيب أي حق عيني عليه كبيع أو رهن أو هبة. غير أن هذا الإجراء الوقائي كثيراً ما يُستعمل بصفة تعسفية أو كيدية للضغط على المالكين دون وجه حق؛ وهو ما يخول للمحجوز عليه سلوك مساطر قضائية عاجلة لرفع الحجز أو الرجوع فيه استعجالاً أمام قاضي المستعجلات أو إيداع ضمانة مالية كافية لفك الرسم العقاري.",
      ],
      takeaways: [
        "الحجز التحفظي يُغل يد المالك عن تفويت العقار أو ترتيب أي حق عيني عليه ابتداءً من تاريخ تقييده بالرسم العقاري لدى المحافظة العقارية.",
        "الحجز التحفظي لا يُمثل بيعاً جبرياً للعقار بل تدبيراً وقائياً لتجميد الملك وحماية الضمان العام للدائن ريثما يصدر حكم نهائي في الموضوع.",
        "يحق للمحجوز عليه استصدار أمر برفع الحجز استعجالاً عند ثبوت كيدية الطلب أو غياب الاستعجال، أو عبر إيداع مبلغ الدين بصندوق المحكمة.",
      ],
      sections: [
        {
          id: "conditions-saisie",
          title: "الشروط القانونية لإيقاع الحجز التحفظي على العقار (الفصل 452 ق.م.م)",
          paragraphs: [
            "ينص الفصل 452 من قانون المسطرة المدنية على أنه لا يجوز إيقاع الحجز التحفظي إلا إذا كان الدائن يستند إلى دين ثابت في ظاهره ومبرر بالوثائق، مع وجود مبررات معقولة تدعو للخشية من إعسار المدين أو تهريبه لأمواله.",
            "ويُقدّم الطلب في شكل مقال على عريضة إلى رئيس المحكمة الابتدائية المختصة مكانياً (الفصل 148 ق.م.م). ويبت الرئيس في الطلب دون استدعاء المدين أو الاستماع إليه بصفته جهة ولائية تقديرية؛ فإذا بدت له المديونية جدية أصدر أمراً بإيقاع الحجز التحفظي على العقار المعين بالطلب ينفذ على الأصل.",
          ],
          bullets: [
            "إثبات وجود دين محقق ومبرر بحجج وسندات رسمية أو تجارية ثابتة.",
            "بيان حالة الاستعجال والخطر المحدق بالضمان العام لاستيفاء الدين.",
            "تحديد رقم ومراجع الرسم العقاري المستهدف بالحجز بدقة متناهية.",
          ],
        },
        {
          id: "effets-titre-foncier",
          title: "آثار تقييد الحجز التحفظي بالرسم العقاري لدى المحافظة",
          paragraphs: [
            "يُبلغ أمر الحجز التحفظي فور صدوره إلى المحافظ على الأملاك العقارية لتضمينه بالرسم العقاري المعني، كما يُبلغ إلى المدين المحجوز عليه وفقاً لمقتضيات الفصل 455 من قانون المسطرة المدنية.",
            "يترتب على هذا التقييد منع المالك من التصرف في العقار تفويتاً أو نقلاً أو رهناً؛ إذ يرفض المحافظ تقييد أي عقد بيع أو رهن لاحق لتاريخ تضمين الحجز، وتُعتبر جميع التصرفات التي يبرمها المدين باطلة وعديمة الأثر في مواجهة الدائن الحاجز. ومع ذلك، يحتفظ المدين بحق حيازة واستغلال العقار وسكنه ما لم يصدر قرار قضائي بخلاف ذلك.",
          ],
          note: "الحجز التحفظي لا ينقل الملكية ولا يفتح مسطرة السمسرة العلنية؛ إذ لا يمكن بيع العقار بالمزاد إلا بتحويل الحجز التحفظي إلى حجز تنفيذي بعد استصدار حكم قطعي بالدين حائز لقوة الشيء المقضي به ونهائي.",
        },
        {
          id: "voies-mainlevee",
          title: "مسطرة الرجوع في أمر الحجز ورفعه قضائياً (الفصلان 148 و149 ق.م.م)",
          paragraphs: [
            "عندما يصدر أمر الحجز التحفظي بناءً على ادعاءات كيدية، أو وثائق باطلة، أو دين تم أداؤه بالكامل، فإن المالك لا يبقى عاجزاً عن الدفاع عن ممتلكاته؛ بل يحق له الرجوع إلى رئيس المحكمة الابتدائية بصفته قاضياً للأمور المستعجلة لطلب الرجوع في الأمر ورفع الحجز فوراً.",
            "وتُرفع الدعوى الاستعجالية بمقال افتتاحي يُستدعى له الدائن الحاجز لمناقشة مدى جدية الدين وقيام حالة الاستعجال من عدمها. فإذا ثبت للقاضي الاستعجالي عدم جدية الدين أو انتفاء حالة الخطر أو سبقية الوفاء بالدين، أصدر حكماً برفع الحجز التحفظي مع النفاذ المعجل، ويتحمل الحاجز مسؤولية التعويض عن الأضرار الناجمة عن الحجز التعسفي.",
          ],
          bullets: [
            "إثبات انعدام المديونية أو أدائها بالكامل بموجب وصولات إبراء رسمية.",
            "إثبات عدم مشروعية السند المعتمد في استصدار الحجز التحفظي أو كيديته.",
            "استصدار أمر قضائي نهائي بالرفع وتوجيهه للمحافظ العقاري لمباشرة التشطيب.",
          ],
        },
        {
          id: "consignation-garantie",
          title: "رفع الحجز التحفظي مقابل إيداع ضمانة مالية أو كفالة بنكية",
          paragraphs: [
            "في الحالات التي يكون فيها المالك مرتبطاً بموعد بيع عاجل أو رهن بنكي ولا يستطيع انتظار مآل النزاع القضائي حول جوهر الدين، أتاح له المشرع مسطرة استبدال الحجز (تحويل الضمانة).",
            "وتتمثل هذه المسطرة في إيداع المبلغ المطالب به مع صوائره بصندوق المحكمة كتابة الضبط، أو تقديم كفالة بنكية رسمية غير قابلة للإلغاء تضمن الوفاء. وبناءً على ذلك، يُصدر رئيس المحكمة أمراً استعجالياً برفع الحجز التحفظي عن العقار فوراً ونقله إلى المبالغ المودعة؛ مما يُحرر الرسم العقاري ويتيح إتمام المعاملات بيسر تام.",
          ],
          bullets: [
            "إيداع مبلغ الدين المالي المتنازع عليه بصندوق كتابة ضبط المحكمة الابتدائية.",
            "تقديم مقال لرئيس المحكمة لطلب رفع الحجز فوراً بناءً على وصل الإيداع.",
            "تسليم نسخة الأمر القضائي للمحافظ العقاري للتشطيب النهائي على قيد الحجز.",
          ],
        },
      ],
      checklistTitle: "الوثائق المطلوبة لرفع الحجز التحفظي العقاري بالمحكمة",
      checklistIntro: "مستندات حاسمة يتعين إعدادها لإعداد مقال الرجوع في الحجز ورفعه استعجالاً.",
      checklist: [
        "نسخة من الأمر القضائي الولائي الصادر بإيقاع الحجز التحفظي على العقار.",
        "شهادة ملكية عقارية حديثة تُثبت تقييد الحجز وتاريخه بسجل الإيداع.",
        "محضر تبليغ أمر الحجز أو نسخة الإشعار الموجه من كتابة الضبط أو المحافظة.",
        "الوثائق الدامغة على بطلان الدين أو سبقية أدائه (مخالصات، شيكات مقاصة، أو أحكام سابقة).",
        "وصل إيداع المبالغ بصندوق المحكمة أو شهادة الكفالة البنكية في حالة طلب الرفع مقابل ضمانة.",
      ],
      faqTitle: "أسئلة شائعة حول الحجز التحفظي على العقار بالمغرب",
      faqs: [
        {
          question: "هل يؤدي الحجز التحفظي إلى بيع العقار بالمزاد العلني مباشرة؟",
          answer: "لا. الحجز التحفظي هو مجرد إجراء وقائي لتجميد التصرف في العقار وحفظ الضمان العام؛ ولا يتحول إلى بيع بالمزاد العلني إلا بعد تحويله إلى حجز تنفيذي بناءً على حكم قطعي بالدين حائز لقوة الشيء المقضي به (الفصل 455 من ق.م.م).",
        },
        {
          question: "كيف يرفع المالك الحجز التحفظي التعسفي أو الكيدي عن عقاره؟",
          answer: "يحق للمالك المحجوز عليه رفع مقال استعجالي أمام رئيس المحكمة الابتدائية بصفته قاضياً للأمور المستعجلة لإلغاء الأمر الولائي ورفع الحجز (الفصل 148 و149 ق.م.م)؛ شريطة إثبات عدم جدية الدين، أو انعدام حالة الاستعجال، أو سبقية الوفاء، أو إيداع مبلغ يغطي أصل الدين بصندوق المحكمة.",
        },
        {
          question: "ما الفرق بين الحجز التحفظي والتقييد الاحتياطي على الرسم العقاري؟",
          answer: "التقييد الاحتياطي (الفصل 85 من ظهير التحفيظ) يتعلق بحق عيني على العقار نفسه (كنزاع حول ملكية العقار أو بطلان عقد بيعه)، بينما الحجز التحفظي (الفصل 452 ق.م.م) يضمن ديناً مالياً شخصياً في ذمة المالك أياً كان مصدر هذا الدين.",
        },
        {
          question: "هل يمكن بيع عقار مثقل بحجز تحفظي بالمغرب؟",
          answer: "يرفض المحافظ على الأملاك العقارية تقييد أي عقد بيع أو رهن يرد على عقار محفظ مثقل بحجز تحفظي؛ ما لم يتم رفع الحجز مسبقاً بحكم قضائي، أو إدلاء المشتري والبائع بإشهاد رفع اليد مسلم من الدائن الحاجز، أو إيداع الثمن لدى كتابة الضبط لفك الحجز.",
        },
      ],
      ctaTitle: "هل تم إيقاع حجز تحفظي على عقاركم أو ترغبون في ضمان دين مالي بحجز عقاري؟",
      ctaText: "يتولى مكتب الأستاذ عبد الرزاق الرويسي دراسة ملفات الحجز العقاري ومباشرة المساطر الاستعجالية أمام رئيس المحكمة المختصة لرفع الحجوزات غير المبررة أو تأمين حقوق الدائنين.",
      serviceLabel: "القانون العقاري والتحفيظ",
      sourcesLabel: "المصادر الرسمية",
      sources: [
        { label: "وزارة العدل — قانون المسطرة المدنية المغربي (الفصول 452 إلى 458)", url: civilProcedureCode },
        { label: "الوكالة الوطنية للمحافظة العقارية — مساطر تقييد ورفع الحجوزات العقارية", url: ancfccPortal },
      ],
    },
  },
};
