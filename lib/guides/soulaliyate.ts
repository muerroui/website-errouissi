import type { GuideDefinition } from "@/lib/guide-types";

const soulaliyateLaw = "https://adala.justice.gov.ma/api/uploads/2024/06/25/%D8%A7%D9%84%D8%AC%D9%85%D8%A7%D8%B9%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%84%D9%8A%D8%A9-1719327339794.pdf";
const interiorMinistry = "https://www.interieur.gov.ma/";
const justicePortal = "https://adala.justice.gov.ma/";

export const soulaliyateGuide: GuideDefinition = {
  key: "soulaliyate",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  serviceKey: "foncierRural",
  relatedGuides: ["agrarianReform", "expropriation", "melkiya", "indivision"],
  content: {
    fr: {
      slug: "terres-soulaliyates-ayants-droit-conseil-tutelle-maroc",
      seo: {
        title: "Terres soulaliyates au Maroc : Ayants droit, baux et recours (Loi 62.17)",
        description: "Guide juridique approfondi sur les terres soulaliyates et d'arazi jmouaa au Maroc : inscription des ayants droit, droits des femmes soulaliyates, baux ruraux et recours devant le Conseil de tutelle.",
      },
      category: "Foncier rural & Terres collectives",
      h1: "Terres soulaliyates au Maroc : Ayants droit, baux ruraux et contentieux de tutelle (Loi 62.17)",
      lead: "Régies par la loi n° 62.17 abrogeant le dahir de 1919, les terres des communautés soulaliyates constituent un patrimoine foncier collectif majeur au Maroc. L'accès à la qualité d'ayant droit, la location des parcelles et la contestation des décisions des Nouabs obéissent à des règles de droit strictes.",
      intro: [
        "Le régime foncier des terres collectives au Maroc a connu une refonte législative historique avec la promulgation de la loi n° 62.17 relative à la tutelle administrative sur les communautés soulaliyates et la gestion de leurs biens, complétée par son décret d'application n° 2.19.973. Ce texte modernise la gouvernance collective tout en réaffirmant le principe fondamental selon lequel les terres collectives demeurent inaliénables, insaisissables et imprescriptibles conformément à l'article 15 de la loi.",
        "L'innovation la plus décisive de la loi 62.17 réside dans l'instauration solennelle de l'égalité entre les hommes et les femmes dans la jouissance des droits collectifs et le partage des fruits ou des parcelles de melkisation. Toutefois, la constitution des listes d'ayants droit par les Nouabs (délégués) donne fréquemment lieu à des omissions, des exclusions arbitraires ou des contestations de baux agricoles, nécessitant la mise en œuvre de recours juridiques rigoureux devant les Conseils de tutelle provincial et central, puis devant le Tribunal administratif.",
      ],
      takeaways: [
        "En vertu de l'article 6 de la loi 62.17, la qualité d'ayant droit appartient désormais sans distinction de sexe à tous les membres de la communauté soulaliyate remplissant les conditions fixées par le statut collectif.",
        "Les terres soulaliyates ne peuvent être ni vendues, ni hypothéquées, ni acquises par prescription acquisitive (houza) ; toute convention sous seing privé prétendant transférer la propriété est nulle d'une nullité absolue.",
        "L'exclusion d'une liste d'ayants droit doit faire l'objet d'une réclamation formelle devant les Nouabs, suivie d'un recours devant le Conseil de tutelle provincial présidé par le Gouverneur, puis d'un pourvoi pour excès de pouvoir devant la justice administrative.",
      ],
      sections: [
        {
          id: "statut-inalienabilite",
          title: "Nature juridique et principe d'inaliénabilité des terres collectives",
          paragraphs: [
            "L'article 15 de la loi n° 62.17 pose un principe d'ordre public intangible : la propriété des biens appartenant aux communautés soulaliyates est collective, inaliénable, insaisissable et imprescriptible. Aucune possession continue, même séculaire, ne peut conférer la propriété privée d'un terrain collectif par la voie de la prescription (التقادم المكسب).",
            "Les seules dérogations légales à ce principe concernent : la cession à l'État, aux collectivités territoriales, aux établissements publics ou pour des projets d'investissement d'utilité publique dûment autorisés ; l'expropriation pour cause d'utilité publique selon la loi 7-81 ; et l'opération de melkisation (تمليك) à titre individuel ou collectif au profit exclusif des ayants droit agricoles telle qu'organisée par les lois 62.17 et 64.17.",
          ],
          bullets: [
            "Nullité d'ordre public de tout acte de cession ou de compromis de vente conclu par un ayant droit isolé.",
            "Impossibilité de consentir une hypothèque bancaire sur le sol soulaliyate.",
            "Obligation d'homologation préalable de l'autorité de tutelle (Ministère de l'Intérieur) pour toute transaction dérogatoire.",
          ],
        },
        {
          id: "ayants-droit-parite",
          title: "Établissement des listes d'ayants droit et parité femmes/hommes",
          paragraphs: [
            "L'article 6 de la loi 62.17 a mis fin aux coutumes locales (orf) qui excluaient traditionnellement les femmes soulaliyates (السلاليات) de la répartition des bénéfices et des attributions de terres. Désormais, tout membre de la communauté, homme ou femme, descendant d'un ayant droit et remplissant les conditions d'âge et de rattachement à la communauté, a le droit d'être inscrit sur la liste officielle.",
            "L'établissement des listes relève de l'assemblée des délégués (نواب الجماعة السلالية). La liste provisoire fait l'objet d'un affichage public obligatoire au siège de l'autorité locale (Caïdat) et de la collectivité. Tout membre omis ou contestant une inscription indue dispose d'un droit de réclamation encadré dans des délais stricts.",
          ],
          note: "La qualité d'ayant droit n'est pas un titre de propriété commerciale négociable : c'est un droit d'usage personnel (حق انتفاع) assujetti au respect de la destination pastorale, agricole ou d'habitat de la parcelle allouée.",
        },
        {
          id: "baux-agricoles",
          title: "Régime des baux, de la location et de l'investissement agricole",
          paragraphs: [
            "Conformément aux articles 19 à 24 de la loi 62.17, la mise en valeur des terres collectives peut s'effectuer par voie de location (كراء الأراضي السلالية). Les baux doivent impérativement être constatés par écrit et conclus par voie de mise en concurrence (appels d'offres ou enchères publiques sous la supervision de l'autorité de tutelle).",
            "Le recours au gré à gré n'est admis qu'à titre exceptionnel pour des projets d'investissement agréés générateurs d'emplois durables ou dans le cadre du partenariat agricole avec l'État. Toute sous-location non autorisée ou cession de droit au bail est strictement interdite et entraîne la résiliation immédiate du contrat sans indemnité.",
          ],
          bullets: [
            "Contrat de bail type approuvé par la Direction des Affaires Rurales du Ministère de l'Intérieur.",
            "Interdiction absolue de changer la vocation naturelle de la parcelle sans accord préalable des autorités compétentes.",
            "Consignation obligatoire des loyers sur le compte de la communauté ouvert auprès de la trésorerie.",
          ],
        },
        {
          id: "recours-conseil-tutelle",
          title: "Voies de recours : Du Conseil de tutelle au Tribunal administratif",
          paragraphs: [
            "En cas de litige portant sur la qualité d'ayant droit, la déchéance d'un droit de jouissance ou la contestation des listes arrêtées par les Nouabs, le justiciable doit suivre la chaîne des recours instituée par les articles 10 à 14 de la loi 62.17.",
            "La contestation est d'abord portée devant le Conseil de tutelle provincial (مجلس الوصاية الإقليمي) présidé par le Gouverneur de province ou de préfecture. Si la décision provinciale demeure contestée, le recours est formé devant le Conseil de tutelle central (مجلس الوصاية المركزي) à Rabat. Les décisions définitives rendues par les organes de tutelle peuvent faire l'objet d'un recours pour excès de pouvoir devant le Tribunal Administratif territorialement compétent pour violation de la loi ou vice de procédure.",
          ],
          bullets: [
            "Réclamation initiale auprès des Nouabs lors de l'enquête publique d'affichage de la liste.",
            "Saisine motivée du Conseil de tutelle provincial par mémoire juridique étayé de pièces d'état civil.",
            "Recours contentieux devant le Tribunal administratif en cas de décision entachée d'arbitraire ou d'erreur manifeste d'appréciation.",
          ],
        },
      ],
      checklistTitle: "Pièces à réunir pour un recours en reconnaissance d'ayant droit",
      checklistIntro: "Pour contester une omission ou une décision d'exclusion devant les instances de tutelle soulaliyate, rassemblez les justificatifs suivants :",
      checklist: [
        "Copie certifiée conforme de la Carte Nationale d'Identité électronique (CNIE).",
        "Extrait d'acte de naissance ou livret de famille établissant la filiation avec l'ayant droit d'origine.",
        "Attestation ou arbre généalogique certifié attestant l'appartenance à la fraction collective (فخذة أو دوار).",
        "Preuve de résidence ou de lien effectif avec la communauté soulaliyate concernée.",
        "Copie de la liste contestée ou de la notification de refus émise par les Nouabs.",
        "Mémoire de réclamation détaillé rédigé par un avocat détaillant les fondements de la loi 62.17.",
      ],
      faqTitle: "Questions fréquentes sur les terres soulaliyates et la loi 62.17",
      faqs: [
        {
          question: "Une femme soulaliyate peut-elle prétendre aux mêmes droits fonciers et financiers qu'un homme ?",
          answer: "Oui. L'article 6 de la loi n° 62.17 a consacré l'égalité absolue entre hommes et femmes membres des communautés soulaliyates. Toute coutume ou décision locale refusant l'inscription d'une femme sur les listes d'ayants droit est illégale et peut être immédiatement annulée par recours administratif et judiciaire.",
        },
        {
          question: "Peut-on acheter un terrain soulaliyate par acte notarié ou sous seing privé ?",
          answer: "Non. L'article 15 de la loi 62.17 interdit formellement la vente des terres collectives. Tout prétendu achat d'une terre soulaliyate conclu sous seing privé ou devant témoin est nul d'une nullité absolue et expose l'acheteur à l'expulsion sans indemnité pour occupation sans titre.",
        },
        {
          question: "Qu'est-ce que la procédure de melkisation (تمليك الأراضي السلالية) ?",
          answer: "La melkisation est l'opération légale par laquelle l'État transfère la pleine propriété privée individuelle de parcelles collectives agricoles aux ayants droit qui les exploitent personnellement, leur permettant d'obtenir un titre foncier individuel auprès de la conservation foncière sous réserve du respect du cahier des charges.",
        },
        {
          question: "Quel est le délai pour contester l'affichage des listes d'ayants droit ?",
          answer: "Le décret n° 2.19.973 fixe un délai de réclamation lors de la période d'affichage public (généralement trente jours). Il est impératif de déposer une réclamation écrite avec accusé de réception dès l'ouverture des délais pour préserver ses droits à recours ultérieur.",
        },
      ],
      ctaTitle: "Un litige sur une terre soulaliyate ou une liste d'ayants droit ?",
      ctaText: "Maître Mohamed Errouissi vous conseille et défend vos droits fonciers devant les conseils de tutelle et les tribunaux administratifs dans tout le Maroc.",
      serviceLabel: "Consulter l'expertise en foncier rural",
      sourcesLabel: "Sources légales officielles",
      sources: [
        { label: "Loi n° 62.17 sur la tutelle des communautés soulaliyates (Adala Justice)", url: soulaliyateLaw },
        { label: "Portail du Ministère de l'Intérieur - Affaires Rurales", url: interiorMinistry },
        { label: "Portail juridique Adala - Ministère de la Justice", url: justicePortal },
      ],
    },
    ar: {
      slug: "الاراضي-السلالية-لوائح-ذوي-الحقوق-مجلس-الوصاية",
      seo: {
        title: "الأراضي السلالية بالمغرب: لوائح ذوي الحقوق ومجلس الوصاية | القانون 62.17",
        description: "دليل قانوني شامل حول الأراضي السلالية وأراضي الجموع بالمغرب: شروط اكتساب صفة ذي حق، حقوق المرأة السلالية، كراء أراضي الجموع، والطعن أمام مجلس الوصاية الإقليمي والمركزي.",
      },
      category: "العقار الفلاحي والأراضي الجماعية",
      h1: "الأراضي السلالية بالمغرب: لوائح ذوي الحقوق، كراء أراضي الجموع والطعن أمام مجلس الوصاية (القانون 62.17)",
      lead: "تعتبر أراضي الجماعات السلالية رصيداً عقارياً جماعياً خاضعاً لقواعد خاصة بموجب القانون رقم 62.17 الذي نسخ ظهير 1919. ويتطلب إثبات صفة ذوي الحقوق، كراء الأراضي الفلاحية، أو المنازعة في قرارات النواب سلوك مساطر إدارية وقضائية دقيقة.",
      intro: [
        "عرف النظام العقاري الجماعي بالمغرب تحولاً تشريعياً جوهرياً بصدور القانون رقم 62.17 بشأن الوصاية الإدارية على الجماعات السلالية وتدبير أملاكها، المصادق عليه بمقتضى الظهير الشريف رقم 1.19.115، ومرسومه التطبيقي رقم 2.19.973. وكرس هذا القانون الطبيعة الحمائية لأراضي الجموع، مؤكداً في مادته 15 أنها أملاك غير قابلة للتفويت، وغير قابلة للحجز، ولا تسقط بالتقادم ولا تكتسب بالحيازة مهما طالت مدتها.",
        "ومن أبرز مستجدات القانون 62.17 تكريس المساواة التامة بين النساء والرجال من أعضاء الجماعة السلالية في الانتفاع والتعويضات والتمليك، قاطعاً مع الأعراف السابقة التي أقصت المرأة السلالية. ومع ذلك، تفرز عملية إعداد لوائح ذوي الحقوق من قبل النواب منازعات متكررة تتعلق بالإقصاء أو الحرمان غير المبرر، ما يقتضي تفعيل آليات التظلم أمام مجالس الوصاية الإقليمية والمركزية والطعن أمام المحاكم الإدارية المختصة.",
      ],
      takeaways: [
        "بمقتضى المادة 6 من القانون 62.17، تثبت صفة ذوي الحقوق لأعضاء الجماعة السلالية ذكوراً وإناثاً على قدم المساواة، شريطة استيفاء المعايير القانونية المعتمدة.",
        "أملاك الجماعات السلالية غير قابلة للتفويت ولا للحجز ولا للتقادم؛ وكل تصرف عرفي يدعي تفويت رقبة الأرض يعد باطلاً بطلاناً مطلقاً بقوة القانون.",
        "يتم الطعن في الإقصاء من لائحة ذوي الحقوق عبر التظلم أمام النواب، ثم استئناف النزاع أمام مجلس الوصاية الإقليمي ومجلس الوصاية المركزي، مع إمكانية ممارسة دعوى الإلغاء أمام المحكمة الإدارية.",
      ],
      sections: [
        {
          id: "statut-inalienabilite",
          title: "الطبيعة القانونية لأملاك الجماعات السلالية ومبدأ عدم القابلية للتفويت",
          paragraphs: [
            "تنص المادة 15 من القانون رقم 62.17 على مبدأ آمر يتمثل في أن أملاك الجماعات السلالية غير قابلة للتفويت، ولا للحجز، ولا تكتسب بالتقادم المكسب (الحيازة). وبالتالي، فإن أي ادعاء بتملك عقار سلالي بالاستناد إلى مجرد مرور الزمن أو عقود استمرار عرفية يعد باطلاً ولا ينتج أي أثر ناقل للملكية في مواجهة الجماعة السلالية.",
            "ولا يمكن خروج العقار السلالي من دائرته الجماعية إلا في الحالات المحددة حصراً بمقتضى القانون، وتتمثل في: الاقتناء من طرف الدولة أو الجماعات الترابية أو المؤسسات العمومية أو لفائدة مشاريع الاستثمار المعتمدة ترخيصاً؛ نزع الملكية للمنفعة العامة وفق القانون 7-81؛ أو مسطرة التمليك الفردي أو الجماعي (الميلكية) المخصصة لذوي الحقوق الفلاحيين بموجب القانونين 62.17 و64.17 في الدوائر السقوية والبورية.",
          ],
          bullets: [
            "البطلان المطلق لكافة عقود البيع العرفية أو التنازلات الصادرة عن ذوي الحقوق بصفة انفرادية.",
            "استحالة رهن أراضي الجموع لدى المؤسسات البنكية كضمانات عينية للديون.",
            "إلزامية مصادقة سلطة الوصاية (وزارة الداخلية - مديرية الشؤون القروية) على أي تصرف استثنائي مأذون به.",
          ],
        },
        {
          id: "ayants-droit-parite",
          title: "إعداد لوائح ذوي الحقوق ومبدأ المناصفة بين النساء والرجال",
          paragraphs: [
            "أنهت المادة 6 من القانون 62.17 التمييز العرفي الذي كان يحرم النساء السلاليات من الاستفادة من مداخيل الأراضي أو حصص الانتفاع. فنصت صراحة على أن أعضاء الجماعات السلالية، ذكوراً وإناثاً، يتمتعون على قدم المساواة بصفة 'ذوي الحقوق'، ويشتركون في الانتفاع الجماعي وتوزيع العائدات وفق معايير موضوعية تحددها سلطة الوصاية.",
            "يتولى نواب الجماعة السلالية (جماعة النواب) إعداد وحصر لائحة ذوي الحقوق الأولية، والتي تخضع لزوماً لمسطرة الإشهار والتعليق بمقر القيادة والجماعة لتمكين كافة المعنيين من الاطلاع عليها ومراقبة بياناتها. ويحق لكل من أُغفل اسمه أو سُجل دون وجه حق تقديم تعرض مكتوب خلال الآجال المقررة.",
          ],
          note: "حق الانتفاع الممنوح لذي الحق هو حق شخصي غير قابل للرهن أو البيع للأغيار، ويرتبط باستغلال الأرض والمحافظة على طابعها الفلاحي أو الرعوي.",
        },
        {
          id: "baux-agricoles",
          title: "النظام القانوني لكراء الأراضي السلالية وتثمين الاستثمار",
          paragraphs: [
            "حددت المواد 19 إلى 24 من القانون 62.17 القواعد الصارمة لكراء أملاك الجماعات السلالية. إذ يجب أن يتم الكراء بموجب عقود كتابية مصادق عليها، وعبر آلية المنافسة وطلب العروض أو المزايدة العلنية تحت إشراف لجان إقليمية مختصة، ضماناً للشفافية وتثمين المداخيل لفائدة أعضاء الجماعة.",
            "ولا يُلجأ إلى المسطرة التفاوضية المباشرة (التراضي) إلا بصفة استثنائية لمشاريع الاستثمار الكبرى المعتمدة أو الشراكات الفلاحية المبرمة في إطار استراتيجيات الدولة التنموية. ويحظر القانون كلياً على المكتري التولية (الكراء من الباطن) أو التنازل عن عقد الكراء للغير تحت طائلة الفسخ الفوري دون تعويض ومصادرة التحسينات.",
          ],
          bullets: [
            "اعتماد دفتر تحملات نموذجي تحدد فيه التزامات المستثمر ونوعية الاستغلال الفلاحي المسموح به.",
            "إلزامية أداء الوجيبة الكرائية وتحويلها مباشرة إلى الحساب الخاص بالجماعة السلالية بالخزينة العامة.",
            "منع تغيير المعالم الطبوغرافية أو الاستعمالات العقارية للأرض دون ترخيص مسبق من سلطة الوصاية.",
          ],
        },
        {
          id: "recours-conseil-tutelle",
          title: "مساطر الطعن: من مجلس الوصاية الإقليمي إلى القضاء الإداري",
          paragraphs: [
            "في حال نشوب نزاع حول إدراج أو استبعاد شخص من لائحة ذوي الحقوق، أو حول توزيع حصص الانتفاع، ألزمت المقتضيات القانونية سلوك مسطرة التظلم والطعن الإداري عبر مستويات متدرجة قبل اللجوء إلى المحاكم.",
            "يُرفع التظلم أولاً أمام نواب الجماعة، وفي حال رفضه أو عدم الاستجابة يُحال النزاع على مجلس الوصاية الإقليمي برئاسة عامل الإقليم أو العمالة. وإذا ظل القرار محل نزاع، يُعرض الطعن على مجلس الوصاية المركزي بالرباط. وتخضع القرارات الصادرة عن مجالس الوصاية لرقابة القضاء الإداري عبر دعوى الإلغاء للشطط في استعمال السلطة أمام المحكمة الإدارية المختصة في حال خرق المقتضيات التشريعية أو عيب التعليل.",
          ],
          bullets: [
            "إيداع التظلم الأولي كتابة خلال فترة تعليق اللائحة مع الحصول على إشعار بالتوصل.",
            "تجهيز مقال الطعن أمام مجلس الوصاية الإقليمي بالوثائق الرسمية المثبتة لنسب وانتماء العارض.",
            "مباشرة دعوى الإلغاء أمام المحكمة الإدارية داخل أجل ستين (60) يوماً من تبليغ القرار النهائي لمجلس الوصاية المركزي.",
          ],
        },
      ],
      checklistTitle: "الوثائق الضرورية لملف إثبات صفة ذي حق أو الطعن أمام مجلس الوصاية",
      checklistIntro: "لمباشرة إجراءات التظلم أو إثبات الانتماء للجماعة السلالية، يتعين تحضير الوثائق التالية:",
      checklist: [
        "نسخة مطابقة للأصل من البطاقة الوطنية للتعريف الإلكترونية (CNIE).",
        "رسم الولادة أو نسخة من الحالة المدنية تثبت صلة القرابة المباشرة بأحد أصول الجماعة السلالية.",
        "شهادة إدارية أو لفيف عدلي يثبت الانتماء إلى الفخذة أو الدوار المكون للجماعة السلالية.",
        "وثائق تثبت الإقامة أو الاستغلال الفعلي للأرض الجماعية في حدود متطلبات العرف المنظم.",
        "نسخة من اللائحة المطعون فيها أو محضر قرار الرفض الصادر عن النواب.",
        "مذكرة طعن قانونية محررة بواسطة محامٍ تبين خرق مقتضيات القانون رقم 62.17.",
      ],
      faqTitle: "الأسئلة الشائعة حول الأراضي السلالية ومساطر الطعن بالمغرب",
      faqs: [
        {
          question: "هل يحق للمرأة السلالية الاستفادة من التعويضات وتمليك الأراضي مثل الرجل؟",
          answer: "نعم بشكل قاطع. كرست المادة 6 من القانون رقم 62.17 المساواة الكاملة بين الجنسين في الانتفاع من أملاك الجماعات السلالية وتوزيع العائدات ومشاريع التمليك، ويُعد أي عرف أو قرار يقضي باستبعاد الإناث باطلاً وقابلاً للإلغاء القضائي.",
        },
        {
          question: "هل يمكن تفويت أو شراء أرض سلالية بعقد عرفي أو توثيقي؟",
          answer: "كلا، يحظر القانون 62.17 في مادته 15 تفويت الأراضي السلالية للأغيار. وتعد جميع المعاملات العرفية المدعية للبيع باطلة بطلاناً مطلقاً، ولا تمنح للمشتري أي حق عيني، بل تعرضه للمتابعة والإفراغ القضائي لاحتلال ملك جماعي بدون سند.",
        },
        {
          question: "ما هو دور مجلس الوصاية المركزي وما هي اختصاصاته؟",
          answer: "مجلس الوصاية المركزي هو هيئة إدارية عليا تتخذ قرارات نهائية في النزاعات المتعلقة بتدبير الأملاك الجماعية والطعون المرفوعة ضد قرارات مجالس الوصاية الإقليمية وتحديد شروط تفويت الأراضي المأذون بها للاستثمار العمومي.",
        },
        {
          question: "ما هو الأجل المحدد للطعن في لائحة ذوي الحقوق بعد تعليقها؟",
          answer: "يحدد المرسوم التطبيقي رقم 2.19.973 أجلاً محدداً (غالباً ثلاثين يوماً) من تاريخ تعليق اللائحة بمقر السلطة المحلية، ويتعين على المعني بالأمر تقديم تعرضه داخل هذا الأجل حتى لا يسقط حقه الإداري في المنازعة.",
        },
      ],
      ctaTitle: "هل تواجه نزاعاً يتعلق بأرض سلالية أو إقصاء من لائحة ذوي الحقوق؟",
      ctaText: "يتولى الأستاذ محمد الرويسي تمثيلكم وإعداد مذكرات الطعن أمام مجالس الوصاية الإقليمية والمركزية والمحاكم الإدارية لحماية حقوقكم العقارية.",
      serviceLabel: "الاطلاع على خدمات العقار الفلاحي والنزاعات الإدارية",
      sourcesLabel: "المصادر والنصوص القانونية الرسمية",
      sources: [
        { label: "القانون رقم 62.17 بشأن الوصاية الإدارية على الجماعات السلالية (بوابة عدالة)", url: soulaliyateLaw },
        { label: "بوابة وزارة الداخلية - مديرية الشؤون القروية", url: interiorMinistry },
        { label: "بوابة عدالة - وزارة العدل المغربية", url: justicePortal },
      ],
    },
  },
};
