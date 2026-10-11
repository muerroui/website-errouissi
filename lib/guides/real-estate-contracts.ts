import type { GuideDefinition } from "@/lib/guide-types";

const obligationsContractCode = "https://adala.justice.gov.ma/api/uploads/2024/07/04/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D8%A7%D9%84%D8%AA%D8%B2%D8%A7%D9%85%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%B9%D9%82%D9%88%D8%AF-1720092043690.pdf";
const civilProcedureCode = "https://adala.justice.gov.ma/api/uploads/2024/07/04/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%B7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D9%86%D9%8A%D8%A9-1720092144342.pdf";
const realRightsCode = "https://adala.justice.gov.ma/api/uploads/2024/07/04/%D9%85%D8%AF%D9%88%D9%86%D8%A9%20%D8%A7%D9%84%D8%AD%D9%82%D9%88%D9%82%20%D8%A7%D9%84%D8%B9%D9%8A%D9%86%D9%8A%D8%A9-1720092196656.pdf";
const justicePortal = "https://adala.justice.gov.ma/";

export const preliminarySaleGuide: GuideDefinition = {
  key: "preliminarySale",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  serviceKey: "immobilier",
  relatedGuides: ["property-certificate", "caveat", "immatriculation", "sale-others-property"],
  content: {
    fr: {
      slug: "compromis-vente-immobilier-retractation-acompte-maroc",
      seo: {
        title: "Compromis de vente au Maroc : Rétractation, acompte et résolution (DOC)",
        description: "Guide juridique du compromis et de la promesse de vente au Maroc : valeur légale, clauses suspensives, sort de l'acompte (Arboun), rétractation et action en vente forcée.",
      },
      category: "Contrats et transactions immobilières",
      h1: "Le compromis de vente immobilier au Maroc : Rétractation, acompte (Arboun) et résolution judiciaire",
      lead: "Étape charnière de toute transaction immobilière, le compromis ou promesse synallagmatique de vente lie juridiquement les parties selon le DOC. En cas de défaillance, de refus de réitérer l'acte ou de litige sur l'acompte versé, des règles strictes régissent la rupture contractuelle.",
      intro: [
        "En droit marocain, la promesse de vente est gouvernée par le Dahir formant Code des Obligations et Contrats (DOC), notamment ses articles 14, 230 et 259, ainsi que les dispositions spécifiques relatives aux arrhes et acomptes (articles 288 à 290). Dès lors que les parties se sont accordées sur la chose, le prix et les conditions essentielles, le compromis vaut vente sous réserve de la réalisation des conditions suspensives prévues.",
        "Trop souvent perçu comme un simple accord informel, le compromis de vente crée des obligations synallagmatiques contraignantes. La défaillance de l'une des parties (refus de signer l'acte authentique, non-obtention d'un financement bancaire, ou découverte de charges foncières dissimulées) ouvre la voie à des recours juridiques précis : la rétractation encadrée, la restitution de l'acompte ou, à l'inverse, l'action en réalisation forcée de la vente devant le tribunal de première instance.",
      ],
      takeaways: [
        "Conformément à l'article 230 du DOC, le compromis de vente tient lieu de loi entre les parties ; aucune rétractation unilatérale n'est admissible sans motif légal ou clause libératoire expresse.",
        "Le sort de l'acompte versé dépend de sa qualification juridique : s'il s'agit d'arrhes (عربون - art. 288-290 DOC), la partie qui refuse d'exécuter doit abandonner son versement ou en restituer le double ; s'il s'agit d'un acompte sur prix, il engage à la vente forcée.",
        "L'acquéreur diligent confronté au refus de vendre peut consigner le solde du prix et assigner le vendeur en réalisation forcée de la vente (دعوى إتمام البيع), avec inscription d'une prénotation conservatoire sur le titre foncier.",
      ],
      sections: [
        {
          id: "valeur-juridique-doc",
          title: "Nature juridique et force obligatoire du compromis de vente",
          paragraphs: [
            "Le compromis de vente constitue une convention par laquelle le vendeur promet de vendre un bien déterminé à un prix convenu, et l'acquéreur promet de l'acquérir. Selon la jurisprudence constante de la Cour de cassation marocaine, la promesse synallagmatique de vente produit des effets juridiques obligatoires dès sa signature régulière, engageant la responsabilité contractuelle des signataires.",
            "L'acte doit comporter des mentions impératives pour être opposable : désignation complète du bien et numéro du titre foncier, prix ferme en dirhams et modalités de paiement, délai impératif de réitération par acte notarié ou d'avocat agréé (article 4 de la loi 39.08), et inventaire exhaustif des conditions suspensives convenues.",
          ],
          bullets: [
            "Application du principe d'intangibilité des conventions (article 230 du DOC).",
            "Exigence d'un acte écrit précis mentionnant la situation hypothécaire du bien.",
            "Fixation d'une date butoir pour la signature de l'acte authentique définitif.",
          ],
        },
        {
          id: "acompte-vs-arrhes",
          title: "Le sort financier de l'acompte : Arrhes (عربون) ou avance sur prix ?",
          paragraphs: [
            "La distinction entre les arrhes (العربون) et le simple acompte est capitale en cas de litige. Les articles 288 à 290 du DOC régissent les arrhes : si le contrat prévoit expressément la faculté de dédit contre abandon des arrhes, l'acquéreur qui renonce perd la somme versée, tandis que le vendeur qui se désiste doit rembourser le double de la somme reçue.",
            "En revanche, si la somme versée est qualifiée d'acompte sur le prix sans clause de dédit, elle constitue un commencement d'exécution ferme de la vente. Dans ce cas, aucune des parties ne peut se délier unilatéralement en abandonnant la somme ; la partie lésée peut exiger l'exécution intégrale de la vente et des dommages-intérêts selon l'article 259 du DOC.",
          ],
          note: "En pratique notariale et judiciaire, il est impératif de consigner les fonds d'acompte auprès du compte séquestre du rédacteur d'acte plutôt que de les verser directement entre les mains du vendeur.",
        },
        {
          id: "conditions-suspensives",
          title: "Conditions suspensives légitimes : Prêt bancaire et purge des charges",
          paragraphs: [
            "Une condition suspensive suspend l'efficacité de la vente à la survenance d'un événement futur et incertain. La plus fréquente concerne l'obtention d'un crédit immobilier : en application des principes généraux du droit de la consommation (loi 31-08), lorsque le prêt est refusé par la banque sans faute ni négligence de l'emprunteur, le compromis devient caduc de plein droit.",
            "Dans cette hypothèse, l'acquéreur a droit à la restitution intégrale et immédiate de l'intégralité des sommes versées en acompte, sans aucune déduction de pénalité. D'autres conditions suspensives protègent l'acheteur : l'obtention d'un certificat de propriété vierge de toute saisie ou prénotation, et la délivrance des autorisations administratives nécessaires (quitus fiscal, permis d'habiter).",
          ],
          bullets: [
            "Obligation pour l'acquéreur de justifier des démarches de demande de prêt dans les délais impartis.",
            "Restitution intégrale du séquestre en cas de refus bancaire non fautif prouvé par attestation écrite.",
            "Caducité automatique du compromis si la condition suspensive ne se réalise pas dans le délai convenu.",
          ],
        },
        {
          id: "mise-en-demeure-action-forcee",
          title: "Mise en demeure et action en réalisation forcée de la vente",
          paragraphs: [
            "Si l'une des parties refuse arbitrairement de régulariser la vente à l'échéance fixée, la partie demanderesse doit impérativement lui notifier une mise en demeure formelle par huissier de justice (مفوض قضائي), lui impartissant un délai précis pour se présenter chez le rédacteur d'acte et signer l'acte définitif.",
            "Face à un vendeur récalcitrant, l'acquéreur peut consigner le solde du prix d'achat à la caisse du tribunal de première instance et engager une action en réalisation forcée de la vente (دعوى إتمام البيع). Le jugement rendu tiendra lieu d'acte de vente authentique et sera directement transcrit sur les livres fonciers par le conservateur de la propriété foncière. Pour neutraliser toute tentative de vente à un tiers durant le procès, l'avocat sollicitera sans délai une prénotation judiciaire sur requête (art. 85 du dahir du 12 août 1913).",
          ],
          bullets: [
            "Constat de carence dressé par l'huissier ou le notaire en cas de défaut de comparution.",
            "Consignation préalable du reliquat du prix à la caisse du tribunal pour prouver la solvabilité.",
            "Requête urgente en prénotation sur le titre foncier pour bloquer toute aliénation frauduleuse.",
          ],
        },
      ],
      checklistTitle: "Vérifications indispensables avant de signer un compromis de vente",
      checklistIntro: "Pour prémunir vos intérêts et sécuriser les fonds engagés, vérifiez impérativement ces points :",
      checklist: [
        "Vérifier la délivrance d'un certificat de propriété de moins de 48 heures attestant de l'absence de saisie ou hypothèque non purgée.",
        "Confier la rédaction à un professionnel habilité (notaire ou avocat agréé près la Cour de cassation - art. 4 loi 39.08).",
        "Préciser formellement la qualification des fonds versés (acompte ou arrhes avec régime du dédit).",
        "Insérer une condition suspensive d'obtention de prêt bancaire avec mention du montant, du taux et de la durée.",
        "Consigner impérativement les fonds d'acompte sur un compte séquestre professionnel.",
        "Fixer une date butoir de signature et prévoir une clause pénale claire pour sanctionner le retard fautif.",
      ],
      faqTitle: "Questions fréquentes sur le compromis de vente et la rétractation au Maroc",
      faqs: [
        {
          question: "L'acheteur peut-il récupérer son acompte si sa banque refuse le prêt ?",
          answer: "Oui, à condition qu'une condition suspensive d'octroi de prêt ait été expressément insérée dans le compromis et que l'acheteur démontre avoir accompli les démarches de demande de crédit dans les délais impartis. En cas de refus bancaire prouvé, la totalité de l'acompte doit lui être restituée sans frais.",
        },
        {
          question: "Que faire si le vendeur refuse de signer l'acte définitif après avoir touché l'acompte ?",
          answer: "L'acheteur doit faire signifier une sommation par huissier de justice au vendeur pour le sommer de comparaître à une date précise. En cas de refus ou d'absence, l'acheteur peut consigner le solde du prix et assigner le vendeur en réalisation forcée de la vente devant le tribunal, avec inscription d'une prénotation sur le titre foncier.",
        },
        {
          question: "Quelle est la valeur d'un compromis de vente sous seing privé non enregistré ?",
          answer: "Entre les parties, le contrat sous seing privé crée des obligations contractuelles selon le DOC. Toutefois, pour les immeubles immatriculés, l'article 4 du Code des Droits Réels exige la forme authentique ou un acte rédigé par un avocat agréé pour pouvoir opérer une inscription directe sur le titre foncier.",
        },
        {
          question: "Le juge peut-il modifier le montant de la clause pénale prévue au compromis ?",
          answer: "Oui. En vertu de l'article 264 du DOC, le juge dispose du pouvoir d'appréciation pour réduire ou augmenter les dommages-intérêts convenus dans une clause pénale s'il les estime manifestement excessifs ou dérisoires par rapport au préjudice réellement subi.",
        },
      ],
      ctaTitle: "Un litige autour d'un compromis de vente ou d'un acompte bloqué ?",
      ctaText: "Maître Mohamed Errouissi vous conseille, rédige vos actes et engage les recours judiciaires en réalisation forcée ou résolution de vente immobilière.",
      serviceLabel: "Découvrir nos services en droit immobilier",
      sourcesLabel: "Sources légales officielles",
      sources: [
        { label: "Dahir formant Code des Obligations et Contrats (DOC - Adala Justice)", url: obligationsContractCode },
        { label: "Loi n° 39.08 portant Code des Droits Réels (Adala Justice)", url: realRightsCode },
        { label: "Portail juridique Adala - Ministère de la Justice", url: justicePortal },
      ],
    },
    ar: {
      slug: "الوعد-بالبيع-العقاري-التراجع-استرجاع-العربون",
      seo: {
        title: "الوعد بالبيع العقاري في القانون المغربي: التراجع واسترجاع العربون | DOC",
        description: "دليل قانوني مفصل حول عقد الوعد بالبيع العقاري بالمغرب: القوة الإلزامية، الشروط الواقفة، مصير العربون والتسبيق، مسطرة التراجع، ودعوى إتمام إجراءات البيع بالمحكمة.",
      },
      category: "العقود والمعاملات العقارية",
      h1: "الوعد بالبيع العقاري في القانون المغربي: شروط التراجع، استرجاع العربون ودعوى إتمام البيع",
      lead: "يشكل عقد الوعد بالبيع محطة حاسمة في المعاملات العقارية بالمغرب، حيث يُلزم طرفيه بمقتضى قانون الالتزامات والعقود. وعند إخلال أحد الأطراف أو امتناعه عن إبرام البيع النهائي، يخضع النزاع لمساطر فسخ العقد أو إتمام البيع قضاءً.",
      intro: [
        "يخضع عقد الوعد بالبيع في التشريع المغربي للمبادئ العامة المقررة في ظهير الالتزامات والعقود (DOC)، ولا سيما الفصول 14 و230 و259، بالإضافة إلى المقتضيات المنظمة للعربون في الفصول 288 إلى 290. ويعد الوعد التبادلي بالبيع عقداً ملزماً للجانبين يرتب التزامات قانونية تامة بمجرد تراضي الطرفين على المبيع والثمن والشروط الجوهرية.",
        "وكثيراً ما يعتقد أحد الأطراف خطأً أن الوعد بالبيع مجرد اتفاق تمهيدي يجوز التحلل منه بسهولة؛ غير أن الفصل 230 من ق.ل.ع يقرر أن الاتفاقات المنشأة على وجه صحيح تقوم مقام القانون بالنسبة إلى منشئيها. وفي حال تراجع البائع أو نكول المشتري، تبرز إشكاليات استرجاع العربون، تحقق الشروط الواقفة كالحصول على القرض البنكي، أو اللجوء إلى قضاء المحكمة الابتدائية لإجباره على إتمام البيع مع التقييد الاحتياطي على الرسم العقاري.",
      ],
      takeaways: [
        "بموجب الفصل 230 من قانون الالتزامات والعقود، يعد عقد الوعد بالبيع ملزماً للطرفين؛ ولا يجوز التراجع الانفرادي عنه إلا بوجود شرط فاسخ صريح أو استحالة قانونية مشروعة.",
        "يحدد التكييف الدقيق للمبلغ المدفوع مصيره القانوني: فإذا وُصف بكونه 'عربوناً' خاضعاً لخيار العدول (الفصول 288-290 ق.ل.ع) يفقده من نكل ويلتزم البائع برده مضاعفاً، أما إذا كان 'تسبيقاً على الثمن' فيلزم الطرفين بإتمام البيع جبراً.",
        "يحق للمشتري عند امتناع البائع عن إبرام العقد النهائي إيداع باقي الثمن بصندوق المحكمة ورفع دعوى إتمام إجراءات البيع مع تقييد مقال الدعوى احتياطياً بالرسم العقاري.",
      ],
      sections: [
        {
          id: "valeur-juridique-doc",
          title: "القوة الإلزامية لعقد الوعد بالبيع والشروط الجوهرية لصحته",
          paragraphs: [
            "يعد الوعد بالبيع اتفاقاً يتعهد بموجبه الواعد ببيع عقار معين بثمن محدد، في حين يتعهد الموعود له بشرائه داخل أجل مسمى. واستقر قضاء محكمة النقض المغربية على أن الوعد التبادلي بالبيع ينتج كافة آثاره القانونية الملزمة، ويرتب المسؤولية العقدية في حال الإخلال غير المبرر ببنوده.",
            "ولكي يحظى العقد بالحماية القانونية الكاملة، يجب أن يتضمن بيانات إلزامية واضحة: التعيين الدقيق للعقار ورقم رسمه العقاري ومساحته، الثمن الإجمالي بالدرهم وكيفية أدائه، الأجل المحدد لتحرير العقد النهائي لدى موثق أو محامٍ مقبول لدى محكمة النقض (المادة 4 من مدونة الحقوق العينية)، وحصر الشروط الواقفة المتفق عليها.",
          ],
          bullets: [
            "خضوع العقد لمبدأ القوة القاهرة للالتزامات التعاقدية (الفصل 230 من ق.ل.ع).",
            "اشتراط تعيين العقار تعييناً نافياً للجهالة وتبيان وضعيته بالتحفيظ العقاري.",
            "تحديد أجل صريح لإبرام العقد النهائي يعتبر انصرامه بداية لتحقق الإخلال العقدي.",
          ],
        },
        {
          id: "acompte-vs-arrhes",
          title: "المصير المالي للمبالغ المدفوعة: العربون القانوني أم التسبيق على الثمن؟",
          paragraphs: [
            "يعد التمييز بين 'العربون' (Arboun) و'التسبيق' (Acompte) من أدق النقاط في المنازعات العقارية. ينظم الفصول 288 إلى 290 من ق.ل.ع أحكام العربون؛ فإذا اتفق الأطراف صراحة على أن المبلغ المؤدى هو عربون مع احتفاظ كل طرف بحق العدول، فإن المشتري الذي يتراجع يفقد مبلغه، بينما يلزم البائع الذي يرفض البيع برد ضعف العربون للطرف الآخر.",
            "أما إذا كُيِّف المبلغ في العقد باعتباره جزءاً من الثمن (تسبيقاً) دون التنصيص على خيار العدول، فإنه يعتبر بدءاً في تنفيذ العقد نهائياً. وفي هذه الحالة، لا يملك أي طرف التحلل من التزامه بمجرد التنازل عن المبلغ، بل يحق للطرف المتضرر إجبار الطرف المخل على تنفيذ البيع والمطالبة بالتعويض عن الضرر طبقاً للفصل 259 من ق.ل.ع.",
          ],
          note: "يُنصح دائماً بإيداع مبالغ التسبيق أو العربون في حساب الودائع التابع لمحرر العقد (الموثق أو المحامي) وتفادي تسليمها نقداً أو مباشرة للبائع تجنباً لصعوبات الاسترجاع.",
        },
        {
          id: "conditions-suspensives",
          title: "الشروط الواقفة المشروعة: شرط القرض البنكي ومطابقة العقار",
          paragraphs: [
            "الشرط الواقف هو التزام يعلق نفاذ عقد البيع على تحقق واقعة مستقبلية وغير محققة. وأشهر هذه الشروط في الممارسة العملية هو شرط الحصول على قرض عقاري؛ فبموجب المبادئ العامة لحماية المستهلك والقواعد العقدية، إذا رفضت الأبناك منح القرض للمشتري دون تقصير أو تهاون منه، سقط عقد الوعد بالبيع بقوة القانون.",
            "وعند سقوط العقد لعدم تحقق الشرط الواقف، يستحق المشتري استرجاع كامل المبالغ المؤداة كعربون أو تسبيق دون أي اقتطاع أو تعويض للبائع. وتتضمن الشروط الواقفة المشروعة أيضاً: سلامة الرسم العقاري من أي حجز أو تقييد احتياطي مفاجئ، واستخراج شهادة الإبراء الضريبي ورخصة السكن في المباني الجديدة.",
          ],
          bullets: [
            "إلزامية إثبات المشتري لتقديم طلبات القرض داخل الأجل المتفق عليه وبحسن نية.",
            "استرجاع الوديعة كاملة بمجرد الإدلاء بشهادة الرفض البنكي الصادرة عن المؤسسة المالية.",
            "انفساخ العقد تلقائياً ودون حاجة لحكم قضائي عند استحالة تحقق الشرط الواقف غير المنسوب للمشتري.",
          ],
        },
        {
          id: "mise-en-demeure-action-forcee",
          title: "مسطرة الإنذار ودعوى إتمام إجراءات البيع بالمحكمة الابتدائية",
          paragraphs: [
            "عند حلول الأجل المحدد وامتناع أحد الطرفين عن الحضور لتوقيع العقد النهائي، يلزم القانون الطرف الحريص على البيع بتوجيه إنذار عقاري رسمي بواسطة مفوض قضائي، يحدد فيه يوماً وساعة محددين للحضور بمكتب محرر العقد قصد توقيع العقد النهائي وأداء باقي الثمن.",
            "فإذا تمادى البائع في رفضه، يحق للمشتري إيداع باقي ثمن البيع بصندوق المحكمة الابتدائية ورفع 'دعوى إتمام إجراءات البيع'. ويقوم الحكم النهائي الصادر في هذه الدعوى مقام عقد البيع التوثيقي، ويأمر المحافظ العقاري بالتشطيب على اسم البائع وتقييد المشتري مالكاً رسمياً. ولحماية العقار من التفويت للغير أثناء سريان الخصومة، يبادر محامي المشتري فوراً إلى استصدار أمر بتقييد مقال الدعوى احتياطياً على الرسم العقاري طبقاً للفصل 85 من ظهير التحفيظ العقاري.",
          ],
          bullets: [
            "تحرير محضر امتناع أو غياب بواسطة المفوض القضائي لإثبات إخلال الطرف الممتنع.",
            "إيداع باقي الثمن بصندوق المحكمة لإثبات الجاهزية والوفاء بالالتزام المقابل.",
            "استصدار أمر استعجالي بالتقييد الاحتياطي لمنع البائع من تفويت العقار لمشترٍ ثانٍ.",
          ],
        },
      ],
      checklistTitle: "إجراءات احترازية واجبة قبل التوقيع على عقد الوعد بالبيع",
      checklistIntro: "لضمان سلامة استثماركم العقاري وتفادي ضياع العربون، تأكدوا من النقاط التالية:",
      checklist: [
        "الحصول على شهادة ملكية عقارية حديثة (أقل من 48 ساعة) للتأكد من خلو الرسم من الحجوزات والرهون.",
        "تحرير العقد لدى مهني مختص ومؤهل قانوناً (موثق أو محامٍ مقبول لدى محكمة النقض).",
        "تحديد الطبيعة القانونية للمبلغ المدفوع بدقة (عربون مع حق العدول أو تسبيق ملزم).",
        "إدراج شرط واقف صريح يتعلق بالحصول على القرض البنكي وتحديد سقفه الزمني.",
        "إيداع مبالغ التسبيق في حساب الودائع الرسمي لمحرر العقد وتفادي الأداء النقدي المباشر.",
        "تضمين العقد شرطاً جزائياً متوازناً يحدد التعويض المستحق في حال النكول غير المبرر.",
      ],
      faqTitle: "الأسئلة الشائعة حول الوعد بالبيع والتراجع عن الشراء بالمغرب",
      faqs: [
        {
          question: "هل يسترجع المشتري العربون إذا رفض البنك منحه القرض العقاري؟",
          answer: "نعم، شريطة أن يكون عقد الوعد بالبيع قد نص صراحة على شرط واقف يقضي بتعليق البيع على الحصول على القرض، وأن يدلي المشتري بشهادة رفض رسمية تثبت تقديمه للطلب داخل الأجل بحسن نية.",
        },
        {
          question: "ما هو الإجراء المتبع إذا رفض البائع توقيع العقد النهائي بعد تسلمه التسبيق؟",
          answer: "يجب أولاً توجيه إنذار رسمي له بواسطة مفوض قضائي لتحديد موعد إبرام العقد. وإذا أصر على الرفض، يتم إيداع باقي الثمن بصندوق المحكمة ورفع دعوى إتمام البيع مع تقييد مقال الدعوى احتياطياً بالرسم العقاري لمنع التصرف فيه.",
        },
        {
          question: "هل لعقد الوعد بالبيع العرفي غير المسجل حجية قانونية؟",
          answer: "يرتب العقد العرفي التزامات شخصية بين طرفيه استناداً لقانون الالتزامات والعقود. غير أن المادة 4 من مدونة الحقوق العينية تشترط في العقارات المحفظة المحررات الرسمية أو الثابتة التاريخ من محامٍ مقبول للتسجيل المباشر بالرسم العقاري.",
        },
        {
          question: "هل يحق للقاضي تخفيض مبلغ الشرط الجزائي المنصوص عليه في الوعد بالبيع؟",
          answer: "نعم، يمنح الفصل 264 من قانون الالتزامات والعقود للقاضي سلطة تقديرية لتعديل مبلغ التعويض الاتفاقي (الشرط الجزائي) بالزيادة أو النقصان إذا ثبت أنه مبالغ فيه أو مجحف بشكل لا يتناسب مع الضرر الفعلي.",
        },
      ],
      ctaTitle: "هل تواجه نزاعاً تعاقدياً حول وعد بالبيع أو تجميداً للعربون العقاري؟",
      ctaText: "يتولى الأستاذ محمد الرويسي مواكبتكم في صياغة العقود وتوجيه الإنذارات ومباشرة دعاوى إتمام البيع أو الفسخ واسترجاع التعويضات.",
      serviceLabel: "الاطلاع على خدمات المنازعات العقارية",
      sourcesLabel: "المصادر والنصوص القانونية الرسمية",
      sources: [
        { label: "ظهير الالتزامات والعقود المغربي (بوابة عدالة)", url: obligationsContractCode },
        { label: "القانون رقم 39.08 بمثابة مدونة الحقوق العينية (بوابة عدالة)", url: realRightsCode },
        { label: "بوابة عدالة - وزارة العدل المغربية", url: justicePortal },
      ],
    },
  },
};

export const judicialAuctionGuide: GuideDefinition = {
  key: "judicialAuction",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  serviceKey: "immobilier",
  relatedGuides: ["conservatory-seizure", "indivision", "ownership-claim", "property-certificate"],
  content: {
    fr: {
      slug: "vente-encheres-judiciaires-suspension-saisie-maroc",
      seo: {
        title: "Vente aux enchères judiciaires au Maroc : Procédure, suspension et saisie (CPC)",
        description: "Guide juridique de la vente aux enchères d'un bien immobilier saisi au Maroc : cahier des charges, surenchère du dixième, motifs d'arrêt et difficulté d'exécution.",
      },
      category: "Voies d'exécution et procédures judiciaires",
      h1: "Vente aux enchères judiciaires d'un bien immobilier au Maroc : Procédure, suspension et contestation",
      lead: "Phase ultime de la saisie immobilière ou du partage judiciaire d'indivision, la vente aux enchères publiques au tribunal obéit aux articles 469 à 487 du Code de procédure civile. Face à une vente imminente, des recours légaux d'urgence permettent de solliciter l'arrêt des poursuites.",
      intro: [
        "La vente aux enchères publiques (البيع بالمزاد العلني) devant le tribunal de première instance constitue l'aboutissement de deux procédures distinctes : soit l'exécution forcée d'une créance impayée par voie de saisie immobilière (الحجز العقاري التنفيذي) initiée par un établissement bancaire ou un créancier titulaire d'un titre exécutoire ; soit la licitation ordonnée dans le cadre d'une action en sortie d'indivision successorale lorsque le partage en nature est impossible (article 316 du Code des Droits Réels).",
        "Pour le débiteur saisi ou le copropriétaire indivis, l'imminence de l'adjudication représente un risque patrimonial majeur de cession sous-évaluée. Le Code de procédure civile marocain encadre rigoureusement les formalités préparatoires (cahier des charges, publicité légale, mise à prix) et ouvre des voies d'intervention d'urgence : la contestation pour difficulté d'exécution (صعوبة التنفيذ - art. 149 et 436 CPC), la revendication de propriété par un tiers (art. 482 CPC), ou la surenchère du dixième post-adjudication.",
      ],
      takeaways: [
        "La vente aux enchères immobilière exige un titre exécutoire régulier (jugement passé en force de chose jugée ou acte notarié revêtu de la formule exécutoire) et une sommation de payer restée sans effet (art. 469 CPC).",
        "Le débiteur peut saisir en référé d'urgence le Président du Tribunal pour solliciter la suspension de la vente en soulevant une difficulté d'exécution (صعوبة في التنفيذ - art. 149 et 436 du CPC) en cas de vice de procédure substantiel ou de paiement intervenu.",
        "Un tiers affirmant détenir la propriété de tout ou partie du bien saisi peut former une action en distraction (دعوى الاستحقاق الفرعية - art. 482 du CPC) qui suspend obligatoirement les enchères jusqu'au jugement sur le fond.",
      ],
      sections: [
        {
          id: "titre-executoire-saisie",
          title: "Conditions préalables : Titre exécutoire, commandement et saisie",
          paragraphs: [
            "En vertu de l'article 469 du Code de procédure civile, la saisie immobilière ne peut être engagée qu'en vertu d'un titre exécutoire constatant une créance liquide, certaine et exigible. Les poursuites sont précédées de la signification d'un commandement de payer par huissier de justice (إنذار عقاري). À défaut de règlement dans les délais impartis, l'huissier dresse un procès-verbal de saisie immobilière.",
            "Le commandement valant saisie est immédiatement déposé à la conservation foncière pour inscription sur le titre foncier. À compter de cette inscription, le bien devient juridiquement indisponible : le propriétaire saisi ne peut plus ni le vendre, ni l'hypothéquer, ni consentir de bail de longue durée portant préjudice aux créanciers saisissants.",
          ],
          bullets: [
            "Contrôle de la régularité et de l'exigibilité du titre exécutoire poursuivi.",
            "Notification préalable du commandement de payer au débiteur saisi.",
            "Indisponibilité du titre foncier dès mention de la saisie au registre foncier.",
          ],
        },
        {
          id: "cahier-charges-publicite",
          title: "Cahier des charges, fixation de la mise à prix et publicité légale",
          paragraphs: [
            "Conformément aux articles 473 et suivants du CPC, le greffier ou l'agent d'exécution établit un cahier des charges (دفتر التحملات) déposé au greffe du tribunal. Ce document récapitule la description détaillée du bien, l'origine de propriété, les servitudes et baux en cours, ainsi que la mise à prix fixée par le tribunal, généralement sur la base d'un rapport d'expertise topographique et d'évaluation foncière.",
            "La date de l'audience d'adjudication fait l'objet d'une publicité légale impérative au moins trente (30) jours avant la vente : affichage au tableau des annonces du tribunal, apposition d'affiches sur l'immeuble saisi et publication dans un journal d'annonces légales. L'inobservation de ces délais et formalités de publicité constitue un vice substantiel justifiant le report de la vente.",
          ],
          note: "Tout intéressé a le droit de consulter le cahier des charges au greffe du tribunal pour prendre connaissance des conditions de la vente et des charges grevant le bien.",
        },
        {
          id: "motifs-suspension-difficulte",
          title: "Comment suspendre la vente aux enchères ? (Difficulté d'exécution)",
          paragraphs: [
            "Face à la programmation d'une vente aux enchères, le débiteur saisi n'est pas démuni. L'avocat peut introduire en extrême urgence une demande de sursis à exécution ou une requête en difficulté d'exécution (صعوبة في التنفيذ) devant le Président du Tribunal en sa qualité de juge des référés / juge de l'exécution, sur le fondement des articles 149 et 436 du CPC.",
            "Les motifs sérieux de suspension admis par la jurisprudence comprennent : le paiement intégral ou partiel intervenu de la créance, la compensation légale, la nullité de la signification du commandement, l'existence d'un litige au fond pendant devant la juridiction compétente sur la validité du titre, ou la sous-évaluation flagrante du bien par rapport au prix réel du marché justifiant une contre-expertise.",
          ],
          bullets: [
            "Saisine d'urgence du juge des référés avant l'ouverture de l'audience d'adjudication.",
            "Invocation d'une contestation sérieuse relative à l'extinction ou au montant de la dette.",
            "Demande de sursis pour permettre une vente amiable à des conditions plus avantageuses.",
          ],
        },
        {
          id: "deroulement-surenchere",
          title: "Déroulement de l'audience d'adjudication et surenchère du dixième",
          paragraphs: [
            "L'audience d'adjudication se déroule publiquement dans la salle d'audience du tribunal sous la présidence du magistrat délégué ou du greffier en chef. Tout enchérisseur doit préalablement consigner un cautionnement provisoire (souvent équivalent à 10 % de la mise à prix). Les enchères sont portées verbalement et l'adjudication est prononcée au profit du plus offrant après extinction de trois bougies ou trois cris successifs.",
            "Toutefois, l'adjudication n'est pas immédiatement définitive. En vertu de l'article 479 du Code de procédure civile, toute personne peut, dans les dix (10) jours suivant l'adjudication, former une surenchère du dixième (المزايدة بالعشر) au greffe du tribunal, en s'engageant à offrir le prix d'adjudication majoré d'au moins un dixième. Cette démarche ouvre obligatoirement une nouvelle audience d'enchères publiques sur la nouvelle mise à prix réévaluée.",
          ],
          bullets: [
            "Obligation de consigner le prix intégral et les frais de justice dans les délais légaux.",
            "Délai impératif de 10 jours pour former la surenchère du dixième par déclaration au greffe.",
            "Délivrance du jugement d'adjudication purgeant les hypothèques inscrites sur le titre foncier.",
          ],
        },
      ],
      checklistTitle: "Vérifications et démarches en cas de menace de vente aux enchères",
      checklistIntro: "Si votre bien immobilier fait l'objet d'un avis de vente aux enchères au tribunal, agissez immédiatement selon ces étapes :",
      checklist: [
        "Retirer immédiatement copie intégrale du dossier d'exécution et du cahier des charges au greffe du tribunal.",
        "Vérifier la régularité de la notification du commandement de payer et le décompte exact de la créance.",
        "Contrôler la validité des formalités de publicité légale et le respect du délai de 30 jours avant audience.",
        "Mandater un avocat pour déposer une assignation en difficulté d'exécution (صعوبة التنفيذ) devant le juge des référés.",
        "Examiner l'opportunité d'une action en nullité de la saisie ou d'une demande de contre-expertise d'évaluation.",
        "Explorer la possibilité d'un protocole d'accord transactionnel ou d'un rachat de créance avant adjudication.",
      ],
      faqTitle: "Questions fréquentes sur la vente aux enchères judiciaires au Maroc",
      faqs: [
        {
          question: "Peut-on arrêter une vente aux enchères au tribunal le jour même de l'audience ?",
          answer: "Oui, à condition de justifier d'un motif légal sérieux (justificatif de règlement intégral, ordonnance de suspension rendue par le juge des référés pour difficulté d'exécution, ou recevabilité d'une action en distraction formée par un tiers propriétaire).",
        },
        {
          question: "Qu'est-ce que la surenchère du dixième (المزايدة بالعشر) ?",
          answer: "L'article 479 du CPC permet à quiconque, dans les 10 jours suivant la vente aux enchères, de contester l'adjudication en offrant de racheter le bien à un prix supérieur d'au moins 10 % au prix adjugé, ce qui annule la première adjudication et relance de nouvelles enchères.",
        },
        {
          question: "Un copropriétaire peut-il empêcher la vente aux enchères d'un bien en indivision ?",
          answer: "En cas d'action en partage, le copropriétaire peut solliciter le partage en nature si le bien est divisible sans perte de valeur, ou proposer de racheter la part de ses cohéritiers au prix de l'expertise avant que le tribunal n'ordonne la vente par licitation publique.",
        },
        {
          question: "L'ancien propriétaire est-il expulsé automatiquement après la vente aux enchères ?",
          answer: "Le jugement d'adjudication confère à l'acquéreur un titre de propriété opposable. Si l'ancien propriétaire refuse de libérer les lieux volontairement, l'adjudicataire doit poursuivre son expulsion par voie d'exécution forcée avec recours éventuel à la force publique.",
        },
      ],
      ctaTitle: "Votre bien immobilier est menacé de vente aux enchères judiciaires ?",
      ctaText: "Maître Mohamed Errouissi intervient d'urgence devant le juge de l'exécution pour introduire les recours en suspension et protéger vos droits patrimoniaux.",
      serviceLabel: "Consulter nos services en voies d'exécution et litiges",
      sourcesLabel: "Sources légales officielles",
      sources: [
        { label: "Code de Procédure Civile marocain (Articles 469 à 487 - Adala Justice)", url: civilProcedureCode },
        { label: "Code des Droits Réels - Loi n° 39.08 (Adala Justice)", url: realRightsCode },
        { label: "Portail juridique Adala - Ministère de la Justice", url: justicePortal },
      ],
    },
    ar: {
      slug: "البيع-بالمزاد-العلني-للعقار-وقف-البيع-صعوبة-التنفيذ",
      seo: {
        title: "البيع بالمزاد العلني للعقار بالمحكمة بالمغرب: إجراءات وقف البيع وصعوبة التنفيذ",
        description: "دليل قانوني وإجرائي حول بيع العقار بالمزاد العلني بالمحكمة الابتدائية بالمغرب: دفتر التحملات، المزايدة بالعشر، دعوى الاستحقاق الفرعية، ومساطر وقف البيع بصعوبة التنفيذ.",
      },
      category: "طرق التنفيذ والمنازعات القضائية",
      h1: "البيع بالمزاد العلني للعقار بالمحكمة بالمغرب: إجراءات المزايدة، حالات وقف البيع والطعن بصعوبة التنفيذ",
      lead: "يمثل البيع بالمزاد العلني بالمحكمة المرحلة النهائية لمسطرة الحجز العقاري التنفيذي أو تصفية التركات وقسمة الشياع. وفي مواجهة خطر بيع العقار بثمن بخس، يتيح قانون المسطرة المدنية آليات قانونية استعجالية لطلب وقف إجراءات البيع.",
      intro: [
        "يعد البيع بالمزاد العلني بالمحكمة الابتدائية مآلاً لمسطرتين قضائيتين رئيستين: إما تنفيذاً جبرياً لدين مالي مستحق عبر مسطرة الحجز العقاري التنفيذي التي تباشرها المؤسسات البنكية أو الدائنون الحاملون لسند تنفيذي وفق الفصول 469 إلى 487 من قانون المسطرة المدنية؛ وإما تنفيذاً لحكم قضائي ببيع العقار بالمزاد لتعذر قسمته عيناً بين الورثة أو الشركاء في الشياع طبقاً للمادة 316 من مدونة الحقوق العينية.",
        "وبالنسبة للمدين المحجوز عليه أو الشريك على الشياع، ينطوي المزاد على خطر داهم يتمثل في بيع أصوله العقارية بأقل من قيمتها السوقية الحقيقية. وقد أخضع المشرع المغربي إجراءات الإعداد للبيع لشكليات دقيقة (إعداد دفتر التحملات، الإشهار القانوني، تحديد الثمن الأساسي)، كما فتح المجال لمساطر استعجالية لوقف إجراءات المزايدة، أبرزها: إثارة صعوبة التنفيذ الوقتية (الفصلان 149 و436 من ق.م.م)، دعوى الاستحقاق الفرعية من طرف الغير، أو ممارسة مسطرة المزايدة بالعشر بعد جلسة البيع.",
      ],
      takeaways: [
        "لا تباشر مسطرة الحجز العقاري المؤدي للبيع إلا استناداً إلى سند تنفيذي رسمي حائز لقوة الشيء المقضي به، وبعد توجيه إنذار عقاري رسمي بالأداء دون جدوى (الفصل 469 من ق.م.م).",
        "يحق للمدين استصدار أمر استعجالي من رئيس المحكمة بوقف إجراءات البيع بالمزاد عبر دعوى 'صعوبة في التنفيذ' (الفصلان 149 و436 من ق.م.م) عند وجود عيب مسطري جوهري أو وفاء بالدين.",
        "إذا كان العقار المحجوز مملوكاً للغير وليس للمدين، يحق لهذا الأخير رفع 'دعوى الاستحقاق الفرعية' (الفصل 482 من ق.م.م) التي توقف وجوباً مسطرة المزايدة إلى حين البت في جوهر الملكية.",
      ],
      sections: [
        {
          id: "titre-executoire-saisie",
          title: "الشروط القبلية للحجز العقاري: السند التنفيذي والإنذار العقاري",
          paragraphs: [
            "ينص الفصل 469 من قانون المسطرة المدنية على أنه لا يمكن مباشرة الحجز العقاري إلا بمقتضى سند تنفيذي يثبت ديناً محقق الوجود ومعين المقدار وحال الأداء. وتبدأ الإجراءات بتبليغ إنذار عقاري رسمي للمدين بواسطة مفوض قضائي يمنحه أجلاً للوفاء، وفي حال عدم الأداء، يحرر المفوض محضر حجز عقاري تنفيذي.",
            "يُودع محضر الحجز العقاري فوراً لدى المحافظة العقارية قصد تقييده بالرسم العقاري. وبمجرد تقييد الحجز، يصبح العقار غير قابل للتصرف فيه نظامياً؛ إذ يمتنع على المالك المحجوز عليه بيعه أو رهنه أو إبرام عقود كراء طويلة الأمد تلحق ضرراً بحقوق الدائنين الحاجزين.",
          ],
          bullets: [
            "التأكد من سلامة السند التنفيذي وتضمينه الصيغة التنفيذية وفق القانون.",
            "مراقبة صحة تبليغ الإنذار العقاري وشهادة التسليم المرفقة به.",
            "تجميد التصرف في الرسم العقاري بمجرد إدراج إشارة الحجز التنفيذي بسجلات المحافظة.",
          ],
        },
        {
          id: "cahier-charges-publicite",
          title: "دفتر التحملات، تحديد الثمن الافتتاحي ومسطرة الإشهار القانوني",
          paragraphs: [
            "يحرر عون التنفيذ أو رئيس كتابة الضبط 'دفتر التحملات' (Cahier des charges) ويودعه بكتابة ضبط المحكمة الابتدائية وفقاً للفصلين 473 و474 من ق.م.م. ويتضمن هذا الدفتر بياناً مفصلاً للعقار ومشتملاته، أصل الملكية، الارتفاقات والكراء الجاري، والثمن الأساسي للمزايدة المحدد بناءً على تقرير خبرة تقويمية قضائية منجزة من طرف خبير معتمد.",
            "ويخضع تاريخ جلسة المزايدة العلنية لإشهار قانوني إلزامي قبل موعد البيع بثلاثين (30) يوماً على الأقل: عبر التعليق بلوحة إعلانات المحكمة، وتعليق إعلان بباب العقار المحجوز، والنشر في جريدة مرخص لها بنشر الإعلانات القانونية. ويعد إغفال أي من هذه الإجراءات أو خرق أجل 30 يوماً عيباً جوهرياً يوجب تأخير البيع وبطلان المزايدة.",
          ],
          note: "يحق لكافة المعنيين والعموم الاطلاع على دفتر التحملات بكتابة الضبط للوقوف على شروط البيع والتحملات المثقل بها العقار قبل دخول جلسة المزاد.",
        },
        {
          id: "motifs-suspension-difficulte",
          title: "كيفية وقف البيع بالمزاد العلني: إثارة صعوبة التنفيذ القضائية",
          paragraphs: [
            "لا يقف المدين المحجوز عليه مكتوف الأيدي أمام تعليق إعلانات المزاد على عقاره؛ إذ يمكن لمحاميه ممارسة مسطرة استعجالية أمام رئيس المحكمة الابتدائية بصفته قاضياً للمستعجلات / قاضي التنفيذ، لإثارة 'صعوبة في التنفيذ' وقتية استناداً إلى الفصلين 149 و436 من قانون المسطرة المدنية للمطالبة بوقف إجراءات البيع فوراً.",
            "وتشمل الأسباب الجدية لوقف البيع المقبولة قضائياً: إثبات الوفاء الكلي أو الجزئي بالدين، المقاصة القانونية، بطلان مسطرة تبليغ الإنذار العقاري، وجود دعوى جوهرية رائجة أمام قضاء الموضوع تطعن في صحة السند التنفيذي، أو إثبات الغبن الفاحش والتقويم البخس للعقار في تقرير الخبرة لطلب إعادة التقويم وفق السعر الحقيقي بالسوق.",
          ],
          bullets: [
            "تقديم مقال استعجالي بصعوبة التنفيذ قبل موعد انعقاد جلسة المزايدة.",
            "إثبات وجود منازعة جدية حول استحقاق الدين أو خرق شكليات الإشهار والتبليغ.",
            "طلب مهلة لتسوية النزاع حبياً أو الترخيص ببيع رضائي يحقق ثمناً أفضل للمدين.",
          ],
        },
        {
          id: "deroulement-surenchere",
          title: "جلسة المزايدة العلنية ومسطرة المزايدة بالعشر بعد الرسو",
          paragraphs: [
            "تنعقد جلسة المزايدة علنياً بقاعة الجلسات بالمحكمة برئاسة القاضي المنتدب للتنفيذ أو رئيس كتابة الضبط. ويشترط في كل متزايد تقديم ضمانة أو كفالة مالية مسبقة بصندوق المحكمة (تحدد غالباً في 10% من الثمن الافتتاحي). وترفع العطاءات شفوياً ويرسو المزاد على صاحب العرض الأعلى بعد إطفاء ثلاثة شموع أو بعد النداء المتتالي ثلاث مرات دون مزايد أعلى.",
            "غير أن رسو المزاد لا يكتسي طابعاً نهائياً فورياً؛ إذ تجيز المادة 479 من قانون المسطرة المدنية لأي شخص، داخل أجل عشرة (10) أيام الموالية لجلسة البيع، تقديم تصريح بكتابة الضبط بـ'المزايدة بالعشر' (Surenchère du dixième)، متعهداً بالزيادة عن ثمن الرسو بمقدار العشر (1/10) على الأقل مع إيداع الكفالة. وتلزم هذه المسطرة المحكمة بإلغاء الرسو الأول وإعادة فتح مزايدة علنية جديدة بالثمن المرفوع.",
          ],
          bullets: [
            "إلزامية أداء الراسي عليه المزاد للثمن كاملاً وصوائر التنفيذ داخل الأجل المحدد.",
            "سقوط الحق في المزايدة بالعشر بانصرام أجل العشرة أيام الموالية لجلسة الرسو.",
            "تطهير العقار من كافة الرهون الرسمية والحجوزات المقيدة بمجرد تسجيل محضر رسو المزاد بالرسم العقاري.",
          ],
        },
      ],
      checklistTitle: "خطوات عاجلة للتعامل مع إعلان بيع عقاركم بالمزاد العلني",
      checklistIntro: "إذا تم تبليغكم بإجراءات بيع عقاركم بالمزاد أو نشر إعلان المزايدة، اتخذوا هذه الإجراءات فوراً:",
      checklist: [
        "سحب نسخة كاملة وفورية من ملف التنفيذ ودفتر التحملات من كتابة ضبط المحكمة.",
        "التأكد من صحة تبليغات الإنذار العقاري وحساب الفوائد والديون الفعلية دون زيادة غير قانونية.",
        "فحص سلامة إجراءات النشر والإشهار بالجريدة واحترام أجل 30 يوماً القانوني.",
        "توكيل محامٍ لرفع دعوى صعوبة في التنفيذ أمام قاضي المستعجلات لطلب إيقاف إجراءات البيع.",
        "دراسة إمكانية الطعن في تقرير الخبرة لرفع الثمن الافتتاحي وإعادة تقويم العقار بقيمته الحقيقية.",
        "التفاوض مع الدائن الحاجز للوصول إلى اتفاق تسوية وجدولة للدين قبل انطلاق جلسة المزاد.",
      ],
      faqTitle: "الأسئلة الشائعة حول بيع العقار بالمزاد العلني وإيقافه بالمغرب",
      faqs: [
        {
          question: "هل يمكن إيقاف بيع العقار بالمزاد العلني في نفس يوم الجلسة؟",
          answer: "نعم، إذا صدر أمر قضائي استعجالي من رئيس المحكمة بوقف التنفيذ لوجود صعوبة وقتية جدية، أو إذا أدلى المدين بوصل إيداع كامل الدين وصوائره بصندوق المحكمة قبل افتتاح المزايدة.",
        },
        {
          question: "ما هي مسطرة المزايدة بالعشر وما هي شروطها؟",
          answer: "تنص المادة 479 من ق.م.م على أنه يمكن لأي شخص خلال 10 أيام التالية لرسو المزاد أن يتقدم بطلب شراء العقار بزيادة 10% عن الثمن الذي رسا به المزاد، مما يؤدي قانوناً إلى إلغاء البيع الأول وإجراء مزايدة ثانية جديدة.",
        },
        {
          question: "هل يحق لأحد الورثة منع بيع عقار التركة بالمزاد العلني؟",
          answer: "يحق للوارث أو الشريك على الشياع المطالبة بالقسمة العينية إذا كان العقار قابلاً للقسمة دون نقص في قيمته، أو ممارسة حق الشفعة وشراء حصص باقي الشركاء رضائياً بالثمن المقوم قبل صدور حكم البيع بالمزاد.",
        },
        {
          question: "ما هو مصير الساكن أو المكتري بعد رسو المزاد على مشترٍ جديد؟",
          answer: "يمنح محضر رسو المزاد للمشتري سند ملكية رسمي. فإذا كان العقار مشمولاً بعقد كراء صحيح سابق للحجز وثابت التاريخ، استمر الكراء في مواجهة المشتري؛ أما إذا كان الشاغل هو المدين نفسه دون سند، فيباشر المشتري مسطرة إفراغه جبراً بواسطة القوة العمومية.",
        },
      ],
      ctaTitle: "هل عقاركم مهدد بالبيع بالمزاد العلني بالمحكمة الابتدائية؟",
      ctaText: "يتدخل الأستاذ محمد الرويسي بصفة استعجالية أمام مؤسسة قاضي التنفيذ والمحاكم الابتدائية لتقديم طلبات وقف البيع وحماية حقوقكم المالية والعقارية.",
      serviceLabel: "الاطلاع على خدمات طرق التنفيذ والمنازعات العقارية",
      sourcesLabel: "المصادر والنصوص القانونية الرسمية",
      sources: [
        { label: "قانون المسطرة المدنية المغربي - الفصول 469 إلى 487 (بوابة عدالة)", url: civilProcedureCode },
        { label: "مدونة الحقوق العينية - القانون رقم 39.08 (بوابة عدالة)", url: realRightsCode },
        { label: "بوابة عدالة - وزارة العدل المغربية", url: justicePortal },
      ],
    },
  },
};
