import type { GuideDefinition } from "@/lib/guide-types";

const taxCodePortal = "https://portail.tax.gov.ma/";
const justicePortal = "https://adala.justice.gov.ma/";

export const realEstateTaxGuide: GuideDefinition = {
  key: "realEstateTax",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  serviceKey: "fiscal",
  relatedGuides: ["tax-dispute", "immatriculation", "inheritance", "property-certificate"],
  content: {
    fr: {
      slug: "taxe-profits-immobiliers-tpi-redressement-fiscal-maroc",
      seo: {
        title: "TPI et redressement fiscal immobilier au Maroc : Calcul, exonération et recours (CGI)",
        description: "Guide juridique de la taxe sur les profits immobiliers (TPI) et de la rectification fiscale au Maroc : barèmes du CGI, exonération d'habitation principale, réponse à l'avis de redressement et recours devant la CLT et le tribunal administratif.",
      },
      category: "Fiscalité immobilière et contentieux fiscal",
      h1: "Taxe sur les profits immobiliers (TPI) et redressement fiscal au Maroc : Exonérations, calcul et recours (CGI)",
      lead: "Régie par les articles 61 et suivants du Code Général des Impôts (CGI), la TPI frappe les plus-values réalisées lors des cessions d'immeubles. En cas de notification de redressement pour prix présumé sous-évalué, des règles strictes de procédure contradictoire protègent le vendeur.",
      intro: [
        "Au Maroc, la cession d'un bien immobilier ou de droits réels immobiliers assujettit le vendeur à la taxe sur les profits immobiliers (TPI) au taux de 20 % sur le profit net imposable, assortie d'une cotisation minimale (CM) de 3 % assise sur le prix de cession brut. Bien que le Code Général des Impôts prévoie des exonérations fondamentales — notamment pour l'habitation principale occupée pendant au moins cinq années consécutives (art. 63-II du CGI) —, les contribuables sont fréquemment confrontés à des contrôles a posteriori de l'administration fiscale.",
        "S'appuyant sur le référentiel des prix des transactions immobilières de la Direction Générale des Impôts (DGI), le fisc notifie régulièrement des redressements pour insuffisance de prix déclaré. La contestation de ces rectifications n'est pas une simple négociation informelle : elle obéit à la procédure contradictoire rigoureuse des articles 220 et 221 du CGI, soumise à des délais forclosifs impératifs de 30 jours, puis à la saisine des commissions fiscales (CLT et CNRF) et du Tribunal administratif.",
      ],
      takeaways: [
        "La TPI s'applique au taux de 20 % sur la plus-value nette réévaluée, avec un plancher obligatoire de cotisation minimale de 3 % du prix de cession global (même en cas de vente à perte).",
        "L'exonération totale de la TPI s'applique de plein droit au logement ayant constitué l'habitation principale du cédant pendant au moins cinq (5) années révolues à la date de cession (art. 63-II CGI).",
        "Toute notification de redressement fiscal (avis de rectification des bases d'imposition) doit impérativement faire l'objet d'une réponse motivée dans un délai forclosif de trente (30) jours francs, sous peine d'imposition d'office sans recours possible devant la Commission Locale de Taxation.",
      ],
      sections: [
        {
          id: "assiette-calcul-tpi",
          title: "Assiette taxable, formule de calcul et cotisation minimale (CGI)",
          paragraphs: [
            "Conformément aux articles 61 à 66 du CGI, le profit net imposable est déterminé par la différence entre le prix de cession net des frais et le prix d'acquisition initial réactualisé. Le prix d'acquisition est majoré des frais d'acquisition forfaitaires (ou réels justifiés) et du coût des dépenses d'investissement ou de construction dûment justifiées par factures probantes, puis réévalué selon le coefficient officiel publié annuellement par le Ministère des Finances.",
            "Le taux normal de la TPI est fixé à 20 %. Toutefois, l'article 73 du CGI institue une cotisation minimale obligatoire de 3 % du prix de cession global. Par conséquent, même si la vente génère une moins-value ou une plus-value minime, le vendeur demeure redevable de cette cotisation de 3 %, sauf s'il bénéficie d'une cause légale d'exonération expresse.",
          ],
          bullets: [
            "Taux d'imposition : 20 % sur le profit net imposable réactualisé.",
            "Cotisation minimale : 3 % du prix de cession total quel que soit le profit.",
            "Délai déclaratif : obligation de souscrire la déclaration de profit immobilier dans les 30 jours de l'acte de vente.",
          ],
        },
        {
          id: "cas-exoneration-legale",
          title: "Les cas d'exonération légale de la TPI (Habitation principale et cessions familiales)",
          paragraphs: [
            "L'article 63 du CGI accorde une exonération totale de la TPI dans des hypothèses limitativement énumérées par la loi. La principale concerne l'immeuble ayant constitué l'habitation principale de son propriétaire pendant une durée continue d'au moins cinq (5) années au jour de la cession. Pour les logements à caractère social, ce délai d'occupation minimale est réduit à quatre (4) ans.",
            "Sont également exonérées de la TPI : la première cession d'un logement social dans le cadre des programmes d'accès au logement ; les cessions à titre gratuit ou onéreux d'immeubles intervenant entre ascendants et descendants, entre époux ou entre frères et sœurs ; et les cessions de biens dont le montant total ne dépasse pas le seuil légal de 140 000 dirhams au cours d'une même année civile.",
          ],
          note: "Pour bénéficier de l'exonération d'habitation principale, le contribuable doit fournir un faisceau de preuves : factures d'eau et d'électricité (Lydec, Redal, Amendis, RADEEMA), certificat de résidence fiscal délivré par l'arrondissement et quittances de la taxe d'habitation payée sous son nom.",
        },
        {
          id: "redressement-dgi-procedure",
          title: "Le redressement fiscal a posteriori : Le piège du référentiel DGI",
          paragraphs: [
            "Dans le cadre de son pouvoir de contrôle, l'inspecteur des impôts peut estimer que le prix de cession déclaré dans l'acte notarié est inférieur à la valeur vénale réelle de l'immeuble. L'administration s'appuie alors sur le 'Référentiel commun des prix des transactions immobilières' ou sur des éléments de comparaison dans la même zone géographique pour rehausser unilatéralement la base d'imposition.",
            "Ce rehaussement déclenche l'envoi d'une première notification de rectification des bases d'imposition (الإشعار الأول بتصحيح أسس فرض الضريبة) selon l'article 220 du CGI. Cette lettre recommandée mentionne le prix estimé par le fisc, la méthode de calcul retenue et le montant du rappel de droits assorti des pénalités de retard (15 % et 0,5 % par mois de retard).",
          ],
          bullets: [
            "Réévaluation fréquente basée sur des barèmes théoriques sans visite effective des lieux.",
            "Nécessité de contester la comparabilité des biens retenus par l'inspecteur (état de vétusté, vue, servitudes).",
            "Délai d'action d'une urgence absolue : 30 jours calendaires à compter de la date de réception de l'avis.",
          ],
        },
        {
          id: "recours-clt-tribunal",
          title: "La procédure contradictoire de recours : De la CLT au Tribunal administratif",
          paragraphs: [
            "La contestation d'un redressement fiscal exige le respect rigoureux des étapes de la procédure contradictoire édictée par les articles 220 et 221 du CGI. Le contribuable doit répondre par mémoire motivé dans les 30 jours de la première notification. Si l'inspecteur rejette les observations et adresse une deuxième notification dans un délai de 60 jours, le contribuable dispose d'un nouveau délai de 30 jours pour porter le litige devant la Commission Locale de Taxation (CLT).",
            "La CLT statue sur les questions d'évaluation matérielle et de prix au m². Si la décision de la commission demeure contestée ou si le litige porte sur l'interprétation légale d'une exonération, l'affaire est portée devant la Commission Nationale de Recours Fiscal (CNRF). Enfin, après émission de l'ordre de recettes, l'avocat assigne la Direction Générale des Impôts devant le Tribunal Administratif compétent conformément à l'article 242 du CGI pour faire annuler l'imposition injustifiée.",
          ],
          bullets: [
            "Mémoire en réponse circonstancié rédigé par un avocat avec rapport d'expert immobilier contradictoire.",
            "Saisine obligatoire de la Commission Locale de Taxation (CLT) dans les 30 jours de la 2ème notification.",
            "Recours contentieux devant le Tribunal administratif pour vice de forme ou erreur manifeste d'évaluation.",
          ],
        },
      ],
      checklistTitle: "Dossier à constituer pour contester un redressement fiscal de TPI",
      checklistIntro: "Dès réception d'une notification de redressement de la DGI, réunissez immédiatement ces éléments :",
      checklist: [
        "Copie de la première notification de redressement fiscal et de l'enveloppe portant le cachet de la poste avec date de réception.",
        "Copie certifiée de l'acte authentique d'acquisition d'origine et de l'acte de vente définitif récent.",
        "Factures acquittées des travaux de rénovation, d'extension ou d'aménagement intérieur réalisés sur le bien.",
        "Justificatifs d'habitation continue (quittances de taxe d'habitation, factures d'eau/électricité sur 5 ans).",
        "Rapport d'expertise contradictoire récent attestant de l'état réel du bien (fissures, absence d'ascenseur, vis-à-vis).",
        "Mémoire juridique de contestation déposé avec accusé de réception dans le délai impératif de 30 jours.",
      ],
      faqTitle: "Questions fréquentes sur la TPI et les recours fiscaux au Maroc",
      faqs: [
        {
          question: "Quel est le délai légal pour répondre à une notification de redressement de la DGI ?",
          answer: "Le délai légal est strictement de trente (30) jours francs à compter de la date de réception de la notification (lettre recommandée avec accusé de réception). En cas de non-réponse dans ce délai, le contribuable est déchu de son droit de saisir la Commission Locale de Taxation et l'impôt est mis en recouvrement d'office.",
        },
        {
          question: "L'administration fiscale est-elle liée par le prix mentionné dans l'acte notarié ?",
          answer: "Non. En vertu de son droit de contrôle, l'administration fiscale a le pouvoir de rectifier le prix déclaré si elle estime qu'il ne reflète pas la valeur vénale du marché au jour de la vente. C'est toutefois au fisc de motiver précisément son estimation par des termes de comparaison valables.",
        },
        {
          question: "Comment un MRE (Marocain Résidant à l'Étranger) peut-il prouver l'habitation principale ?",
          answer: "Pour un MRE, la notion d'habitation principale au Maroc est soumise à des critères stricts. La loi n'admet l'exonération que si le bien constitue la résidence principale effective au Maroc de sa famille proche (conjoint ou enfants) ou son lieu de séjour principal prouvé par des éléments matériels et fiscaux constants.",
        },
        {
          question: "La consignation préalable de l'impôt est-elle obligatoire pour saisir le Tribunal administratif ?",
          answer: "L'article 242 du CGI prévoit que le recours judiciaire n'a pas d'effet suspensif automatique sur le recouvrement, sauf si le contribuable dépose une demande de sursis de paiement assortie de garanties financières légales (caution bancaire ou hypothèque) auprès du percepteur compétent.",
        },
      ],
      ctaTitle: "Vous avez reçu un avis de redressement fiscal ou une contestation de TPI ?",
      ctaText: "Maître Mohamed Errouissi intervient d'urgence pour rédiger vos mémoires de contestation, négocier avec la DGI et vous défendre devant les commissions fiscales et le Tribunal administratif.",
      serviceLabel: "Découvrir notre expertise en fiscalité et contentieux fiscal",
      sourcesLabel: "Sources légales officielles",
      sources: [
        { label: "Code Général des Impôts marocain - CGI en vigueur (Portail DGI)", url: taxCodePortal },
        { label: "Portail juridique Adala - Ministère de la Justice", url: justicePortal },
      ],
    },
    ar: {
      slug: "الضريبة-على-الارباح-العقارية-الاعفاء-المراجعة-الضريبية",
      seo: {
        title: "الضريبة على الأرباح العقارية (TPI) بالمغرب: الإعفاء والطعن في المراجعة الضريبية | CGI",
        description: "دليل قانوني وإجرائي شامل حول الضريبة على الأرباح العقارية بالمغرب: أسس الحساب، شروط الإعفاء للسكن الرئيسي، مسطرة المراجعة الضريبية والطعن أمام اللجنة المحلية والقضاء الإداري.",
      },
      category: "الجبايات العقارية والمنازعات الضريبية",
      h1: "الضريبة على الأرباح العقارية (TPI) بالمغرب: شروط الإعفاء، حساب الضريبة والطعن في المراجعة الضريبية (CGI)",
      lead: "تخضع الأرباح الناتجة عن بيع العقارات بالمغرب للضريبة على الأرباح العقارية المقررة في المادة 61 وما يليها من المدونة العامة للضرائب. وفي حال توصل البائع بإشعار بمراجعة الثمن المصرح به، تضمن المساطر التواجهية حقه في الدفاع والطعن.",
      intro: [
        "تفرض المدونة العامة للضرائب بالمغرب (CGI) على كل شخص يقوم بتفويت عقار أو حقوق عينية عقارية أداء الضريبة على الأرباح العقارية (TPI) بنسبة 20% على صافي الربح المحقق، مع أداء حد أدنى لا يقل عن 3% من الثمن الإجمالي للتفويت كواجب أدنى (Cotisation minimale) حتى في حال عدم تحقيق أي ربح أو البيع بخسارة. ورغم أن القانون يقر إعفاءات صريحة، لاسيما عند بيع السكن الرئيسي المشغول لمدة خمس سنوات متواصلة (المادة 63-II من المدونة)، فإن إدارة الضرائب تباشر باستمرار مساطر المراقبة اللاحقة لعقود البيع.",
        "واستناداً إلى الدليل المرجعي لأسعار المعاملات العقارية التابع للمديرية العامة للضرائب (DGI)، يوجه مفتش الضرائب إشعارات بمراجعة أسس فرض الضريبة بدعوى أن الثمن المصرح به في العقد التوثيقي يقل عن القيمة التجارية الحقيقية. ولا تعد المنازعة في هذا التقدير مجرد نقاش ودي، بل تخضع لشكليات المسطرة التواجهية الصارمة المنصوص عليها في المادتين 220 و221 من المدونة، والمقيدة بأجل إسقاط صارم محدد في ثلاثين (30) يوماً تحت طائلة سقوط الحق في الطعن أمام اللجنة المحلية لتقدير الضريبة والقضاء الإداري.",
      ],
      takeaways: [
        "تحتسب الضريبة على الأرباح العقارية بنسبة 20% على صافي الربح الخاضع للضريبة، مع أداء واجب أدنى لا يقل عن 3% من ثمن البيع الإجمالي بغض النظر عن تحقيق ربح من عدمه.",
        "يستفيد المالك من الإعفاء الكلي من الضريبة بقوة القانون إذا كان العقار المبيع مخصصاً لسكناه الرئيسية لمدة لا تقل عن خمس (5) سنوات كاملة إلى تاريخ البيع (المادة 63-II من المدونة العامة للضرائب).",
        "يجب الجواب على أي إشعار بمراجعة وتصحيح أسس فرض الضريبة داخل أجل قانوني صارم لا يتعدى ثلاثين (30) يوماً من تاريخ التوصل، وإلا فرضت الضريبة تلقائياً وسقط الحق في عرض النزاع أمام لجان التحكيم الضريبية.",
      ],
      sections: [
        {
          id: "assiette-calcul-tpi",
          title: "الوعاء الضريبي، طريقة حساب الربح والحد الأدنى للضريبة (CGI)",
          paragraphs: [
            "تحدد المادتان 61 و65 من المدونة العامة للضرائب صافي الربح العقاري الخاضع للضريبة عبر الفرق بين ثمن التفويت الصافي وثمن التملك الأصلي مضافاً إليه مصاريف الاقتناء ونفقات الاستثمار والإصلاحات المنجزة والمثبتة بفواتير قانونية، بعد تحيين هذه المبالغ بضربها في المعامل الرسمي للتحيين الصادر سنوياً بقرار لوزير المالية.",
            "ويحدد السعر العادي للضريبة في 20% من صافي الربح العقاري المحين. ومع ذلك، تلزم المادة 73 من المدونة البائع بأداء 'المساهمة الدنيا' (الحد الأدنى) المحددة في 3% من السعر الإجمالي للعقار حتى وإن بيع العقار بخسارة مادية أو بهامش ربح منعدم، ما لم يكن التفويت مشمولاً بإعفاء تشريعي صريح.",
          ],
          bullets: [
            "النسبة الضريبية العادية: 20% من صافي الربح العقاري المحين.",
            "الواجب الأدنى الإلزامي: 3% من الثمن الإجمالي للبيع بغض النظر عن النتيجة المالية.",
            "أجل الإقرار: إلزامية إيداع الإقرار بالأرباح العقارية لدى قباضة الضرائب داخل 30 يوماً من تاريخ العقد.",
          ],
        },
        {
          id: "cas-exoneration-legale",
          title: "حالات الإعفاء القانوني من الضريبة: السكن الرئيسي والتفويتات العائلية",
          paragraphs: [
            "تمنح المادة 63 من المدونة العامة للضرائب إعفاءً كلياً من أداء الضريبة على الأرباح العقارية في حالات محددة قانوناً على سبيل الحصر. وفي مقدمتها: تفويت العقار المشغول بصفة سكن رئيسي من طرف مالكه لمدة لا تقل عن خمس (5) سنوات متصلة في تاريخ البيع. وبالنسبة للسكن الاجتماعي، يخفض هذا الأجل إلى أربع (4) سنوات.",
            "وتعفى كذلك من الضريبة: التفويتات المجانية أو بعوض العقارية المنجزة بين الأصول والفروع، أو بين الأزواج، أو بين الإخوة والأخوات؛ بالإضافة إلى عمليات التفويت التي لا يتجاوز مبلغها الإجمالي سقف 140.000 درهم خلال السنة المدنية الواحدة.",
          ],
          note: "لإثبات صفة السكن الرئيسي، تشترط إدارة الضرائب الإدلاء بحزمة وثائق متطابقة تشمل: فواتير الماء والكهرباء المنتظمة طيلة 5 سنوات، شهادة السكنى، ووصولات أداء رسم السكن والخدمات الجماعية باسم البائع.",
        },
        {
          id: "redressement-dgi-procedure",
          title: "المراجعة الضريبية بعد البيع ومخاطر الدليل المرجعي للأسعار (DGI)",
          paragraphs: [
            "في إطار ممارسة حق المراقبة والتحقق، يحق لمفتش الضرائب رفض الثمن المصرح به في العقد إذا اعتبره أقل من القيمة التجارية الحقيقية للعقار وقت إبرام المعاملة. وتعتمد الإدارة في هذا الشأن على 'المرجع المشترك لأسعار المعاملات العقارية' أو على عناصر مقارنة محلية لعقارات مماثلة بنفس المنطقة لرفع الوعاء الضريبي جزافياً.",
            "يترتب على هذا التقدير توجيه 'الإشعار الأول بتصحيح أسس فرض الضريبة' برسالة مضمونة مع إشعار بالتوصل طبقاً للمادة 220 من المدونة العامة للضرائب. وتتضمن الرسالة الثمن التقديري المعتمد من المفتشية ومبلغ الفارق الضريبي الواجب أداؤه مضافاً إليه الذعائر والزيادات القانونية عن التأخير (15% زائد 0.5% عن كل شهر تأخير).",
          ],
          bullets: [
            "تطبيق مراجعات تقديرية تستند إلى جداول إحصائية دون معاينة ميدانية فعلية لحالة العقار.",
            "إلزامية منازعة ملاءمة المقارنة (كوجود عيوب في البناء، عدم توفر مصعد، أو إطلالة غير جيدة).",
            "أجل الرد الصارم: ثلاثون (30) يوماً متواصلة من تاريخ تسلم الإشعار البريدي.",
          ],
        },
        {
          id: "recours-clt-tribunal",
          title: "المسطرة التواجهية للطعن: من اللجنة المحلية للضرائب إلى القضاء الإداري",
          paragraphs: [
            "تستوجب منازعة المراجعة الضريبية اتباع مسار المسطرة التواجهية الدقيقة المنصوص عليها في المادتين 220 و221 من المدونة. يتعين على الخاضع للضريبة إيداع جواب معلل داخل 30 يوماً من توصله بالإشعار الأول. وإذا تمسك المفتش بتقديره ووجه إشعاراً ثانياً داخل أجل 60 يوماً، كان للملزم أجل 30 يوماً إضافي لإحالة النزاع على 'اللجنة المحلية لتقدير الضريبة' (CLT).",
            "تبت اللجنة المحلية في مسائل الوقائع وتقدير الأثمان. وإذا ظل القرار مجحفاً، يرفع النزاع أمام 'اللجنة الوطنية للنظر في الطعون المتعلقة بالضريبة' (CNRF). وعقب إصدار جدول الضريبة، يرفع المحامي دعوى إلغاء الرسم الضريبي أمام المحكمة الإدارية المختصة طبقاً للمادة 242 من المدونة العامة للضرائب لإسقاط التقديرات التعسفية المخالفة للقانون.",
          ],
          bullets: [
            "صياغة مذكرة جوابية قانونية بواسطة محامٍ مرفقة بتقرير خبرة تقويمية مضادة للعقار.",
            "إلزامية إحالة النزاع على اللجنة المحلية لتقدير الضريبة داخل أجل 30 يوماً من الإشعار الثاني.",
            "مباشرة دعوى الإلغاء أمام المحكمة الإدارية ضد التقديرات المخالفة للقانون أو المعيبة شكلاً.",
          ],
        },
      ],
      checklistTitle: "الوثائق الضرورية للرد على إشعار المراجعة الضريبية والطعن فيها",
      checklistIntro: "بمجرد التوصل بإشعار تصحيح الضرائب على بيع عقاركم، بادروا فوراً بجمع الوثائق التالية:",
      checklist: [
        "نسخة من الإشعار الأول بالتصحيح مع غلاف التوصل البريدي المتضمن لتاريخ التسليم بدقة.",
        "نسخة مطابقة للأصل من عقد الشراء الأصلي وعقد البيع النهائي موضوع المراجعة.",
        "فواتير مؤداة ومطابقة للقانون تثبت نفقات الإصلاح والبناء والتجهيز المنفذة بالعقار.",
        "إثباتات السكن الرئيسي (وصولات أداء رسم السكن، فواتير استهلاك الماء والكهرباء طيلة 5 سنوات).",
        "تقرير خبرة تقويمية مضادة يبين العيوب الفعلية للعقار المبررة لثمن البيع الحقيقي المعتمد.",
        "مذكرة جوابية قانونية مودعة لدى مصلحة الضرائب مع وصل إشعار بالتوصل داخل أجل 30 يوماً.",
      ],
      faqTitle: "الأسئلة الشائعة حول الضريبة العقارية ومراجعة الأثمان بالمغرب",
      faqs: [
        {
          question: "ما هو الأجل الحاسم للرد على إشعار مراجعة الضريبة العقارية من طرف DGI؟",
          answer: "الأجل القانوني الصارم هو ثلاثون (30) يوماً كاملة من تاريخ تسلم الإشعار البريدي المضمون. وفي حال انصرام هذا الأجل دون جواب كتابي معلل، تسقط حقوق الملزم في المثول أمام اللجنة المحلية وتفرض الضريبة تلقائياً بقرار إداري نهائي.",
        },
        {
          question: "هل تلتزم إدارة الضرائب بالثمن المكتوب في العقد التوثيقي المبرم أمام الموثق؟",
          answer: "كلا، تملك إدارة الضرائب بموجب سلطة المراقبة القانونية حق تصحيح ومراجعة الثمن المصرح به إذا تبين لها أنه يقل عن القيمة التجارية الحقيقية للعقار، لكن يتعين عليها تعليل قرارها وإيراد عناصر مقارنة حقيقية ومماثلة لوضعية العقار.",
        },
        {
          question: "كيف يثبت المقيم بالخارج (MRE) صفة السكن الرئيسي للاستفادة من الإعفاء؟",
          answer: "يشترط القانون لإعفاء السكن الرئيسي للمغاربة المقيمين بالخارج إثبات تخصيص العقار لسكنى أفراد أسرته المباشرين (الزوجة أو الأبناء) أو استقراره الفعلي به عند الإقامة بالمغرب، عبر حزمة أدلة متناسقة بين الإقامة الفعلية واستهلاك الماء والكهرباء والضرائب المحلية.",
        },
        {
          question: "هل يوقف الطعن القضائي أمام المحكمة الإدارية استخلاص الضريبة جبرياً؟",
          answer: "تنص المادة 242 من المدونة العامة للضرائب على أن رفع الدعوى أمام المحكمة الإدارية لا يوقف مسطرة التحصيل الجبري تلقائياً، ما لم يتقدم الخاضع للضريبة بطلب إيقاف الأداء مشفوعاً بضمانات مالية كافية (ضمانة بنكية أو رهن عقاري) لدى القابض المختص.",
        },
      ],
      ctaTitle: "هل توصلتم بإشعار مراجعة ضريبية على بيع عقار أو منازعة في أرباحكم العقارية؟",
      ctaText: "يتدخل الأستاذ محمد الرويسي للدفاع عن حقوقكم، صياغة المذكرات الجوابية، والترافع أمام اللجان الضريبية والمحاكم الإدارية لإسقاط الضرائب غير المستحقة.",
      serviceLabel: "الاطلاع على خدمات المنازعات الضريبية والجبايات العقارية",
      sourcesLabel: "المصادر والنصوص القانونية الرسمية",
      sources: [
        { label: "المدونة العامة للضرائب المغربية في صيغتها الحالية (بوابة الضرائب)", url: taxCodePortal },
        { label: "بوابة عدالة - وزارة العدل المغربية", url: justicePortal },
      ],
    },
  },
};
