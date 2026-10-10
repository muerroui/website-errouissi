# Audit SEO complet — errouissi.ma

Date d'audit : 27 septembre 2026  
Périmètre : site public, rendu local, 34 URL FR/AR, SEO technique, contenu/YMYL, données structurées, performance, SEO local et visibilité de marque.

## Synthèse exécutive

**Score de santé SEO : 77/100.** Le socle technique est nettement meilleur que la visibilité actuelle : le site est crawlable, rapide, bilingue et correctement structuré, mais il vient d'être lancé et aucune URL de `errouissi.ma` n'est encore apparue dans les contrôles d'indexation publics. La priorité n'est donc pas de produire vingt nouvelles pages. Elle est de faire reconnaître rapidement le nouveau domaine comme l'entité officielle du cabinet.

| Axe | Score | Diagnostic |
|---|---:|---|
| Technique et indexabilité | 87/100 | 34/34 URL en 200, SSR, canonicals, hreflang et sitemap corrects. |
| Contenu et on-page | 73/100 | Pages services et guides solides, mais preuves humaines et information originale insuffisantes pour un secteur YMYL. |
| E-E-A-T juridique | 56/100 | Expérience annoncée, mais absence de page profil, de biographie visible et de justificatifs vérifiables. |
| SEO local | 62/100 | Bon NAP interne ; forte incohérence des annuaires et ancien domaine Canva encore dominant. |
| Performance laboratoire | 90/100 | LCP sous 1,8 s sur les pages testées et CLS très faible ; aucune donnée CrUX terrain disponible. |
| GEO / citations IA | 60/100 | Sources officielles et structure claire, mais auteur peu identifiable et peu de passages réellement originaux/citables. |
| Images et preuve visuelle | 20/100 | Aucune image de contenu sur les 34 pages auditées. |

## Bloquants et risques prioritaires

### P0 — Découverte et indexation du nouveau domaine

Les recherches publiques `site:errouissi.ma` n'ont retourné aucune page pendant l'audit, ce qui est fréquent le jour d'un lancement mais doit être surveillé immédiatement. Le crawl technique a néanmoins confirmé 34 URL publiques en HTTP 200, ainsi qu'un `robots.txt` ouvert et un sitemap valide.

Actions : créer une propriété Domaine et une propriété Préfixe d'URL dans Google Search Console, soumettre `https://errouissi.ma/sitemap.xml`, puis inspecter un petit nombre de pages stratégiques. Ne pas utiliser l'API d'indexation Google pour des pages juridiques ordinaires : elle n'est pas destinée à ce cas.

### P0 — Entité locale dispersée

Les sources externes ne décrivent pas encore une entité unique :

- Panthera Numbers affiche encore l'ancien Canva et classe le cabinet comme « Expert-comptable » ; cette catégorie peut être une erreur de l'agrégateur et doit être vérifiée dans la vraie fiche Google.
- AfricaBizInfo et des annuaires arabophones pointent encore vers Canva.
- Annuaire Gratuit affiche le code postal 28800, des horaires 09:00–19:00 et une fermeture le samedi.
- Telecontact utilise une autre forme du nom et de l'adresse.
- l'ancien site Canva est encore indexé sur la marque.

Le NAP de référence doit être validé avant correction : nom officiel, `127 Boulevard de Palestine, 1er étage, Mohammédia 28830`, `05 23 28 32 58`, lundi–samedi 09:00–19:30. Vérifier aussi tout numéro mobile divergent avant de demander sa suppression.

### P0 — Allégation professionnelle non documentée

La page d'accueil affirme que le cabinet réunit « une dizaine d'avocats collaborateurs inscrits au barreau », avec l'équivalent arabe. Cette information n'était pas incluse dans les données source initiales du projet. Pour un cabinet juridique, elle doit être confirmée et prouvable ; sinon elle doit être retirée. C'est un risque de confiance plus important qu'une optimisation de mot-clé.

### P1 — Preuves E-E-A-T insuffisantes

Les guides déclarent Maître Abderrazak Errouissi comme auteur dans le JSON-LD, mais n'affichent pas de signature, de biographie ou de lien vers un profil professionnel détaillé. Il n'existe pas non plus de portrait authentique, photo du cabinet ou page dédiée à l'avocat dans le sitemap.

Recommandation : créer une page profil factuelle et vérifiable, puis afficher sur chaque guide l'auteur, le relecteur, la date de mise à jour et un lien vers ce profil. Ne publier que le barreau, les diplômes, affiliations et expériences pouvant être documentés.

## Audit technique

### Ce qui fonctionne

- 34 URL du sitemap répondent en 200.
- `/` redirige en 308 vers `/fr` ; HTTP et `www` redirigent vers HTTPS non-www.
- Une URL inexistante renvoie une vraie 404.
- Toutes les pages ont une canonical auto-référente, un seul H1, aucun `noindex`, et un couple `lang`/`dir` correct.
- Les alternates `fr-MA`, `ar-MA` et `x-default` sont complets et réciproques.
- Le contenu, les métadonnées et le JSON-LD sont présents dans le HTML initial rendu côté serveur.
- Le `robots.txt` autorise le crawl et référence le sitemap.
- Le sitemap XML est valide et comporte 34 URL.
- Les pages services/contact contiennent `LegalService`/`LocalBusiness` et `FAQPage` ; les guides ajoutent `Article` et `BreadcrumbList`.

### Corrections techniques

1. Employer un `@id` d'entité invariant tel que `https://errouissi.ma/#cabinet` au lieu de créer `/fr#cabinet` et `/ar#cabinet`.
2. Vérifier le déploiement : le code local contient `sameAs` Facebook/LinkedIn, alors que la version publique auditée ne l'exposait pas toujours. Ajouter aussi `geo`, `image` et un logo seulement avec des valeurs réelles.
3. Remplacer le `lastmod` identique généré au build pour chaque URL par la vraie date de modification du contenu. `changefreq` et `priority` ne doivent pas être considérés comme des leviers Google.
4. Réduire la redirection de l'alias Netlify vers la page canonique à un seul saut.
5. Ajouter une CSP adaptée, `frame-ancestors` ou `X-Frame-Options`, `Referrer-Policy` et `Permissions-Policy`. C'est surtout une amélioration de sécurité et de confiance, pas un hack de classement.

### Métadonnées

Six titres français dépassent 60 caractères une fois le suffixe de marque ajouté :

- titre foncier / conservation foncière ;
- opposition à l'immatriculation ;
- terres des coopératives de la réforme agraire ;
- sortie d'indivision ;
- immatriculation d'un terrain agricole ;
- héritage et liquidation d'une succession.

Il faut raccourcir ces titres sans sacrifier la requête principale. Exemples : « Titre foncier au Maroc : guide pratique | Errouissi » et « Succession au Maroc : héritage et partage | Errouissi ».

### Performances

Mesures laboratoire mobiles, sans données CrUX :

| Page | LCP | CLS | TTFB | Poids | JavaScript |
|---|---:|---:|---:|---:|---:|
| Accueil FR | 1,756 s | 0,0037 | 443 ms | 269 Ko | 142 Ko |
| Guide principal | 1,504 s | 0,0344 | 744 ms | 277 Ko | similaire |

Ces résultats sont bons. L'INP n'a pas pu être mesuré et PageSpeed/CrUX n'étaient pas disponibles ; aucune conclusion terrain ne doit être inventée.

## Audit contenu, intention et E-E-A-T

### Forces

- Les pages de service correspondent bien à une intention transactionnelle locale.
- Les guides répondent à une intention informationnelle et citent des sources officielles comme l'ANCFCC, le SGG, le ministère de la Justice ou la DGI.
- Le guide sur le titre foncier et la page foncier rural sont les actifs éditoriaux les plus forts.
- Les versions arabe et française sont distinctes, avec un bon support RTL/LTR.
- Les CTA téléphone et WhatsApp sont visibles et adaptés au mobile.

### Faiblesses

- L'accueil reste court et ne présente ni portrait, ni preuve vérifiable, ni lien éditorial fort vers les guides.
- Tous les guides suivent un gabarit similaire et offrent peu d'« information gain » : observations de pratique, chronologies, tableaux de décision ou mini-cas anonymisés.
- Le guide fiscal est plus faible et porte sur un sujet mouvant ; il nécessite des sources précises, datées et une vraie politique de mise à jour.
- Les services renvoient peu vers les guides et les guides se relient peu entre eux. Le maillage est largement à sens unique.
- Le slogan « plus de 32 ans » est périmé : depuis janvier 1992, il faut préférer partout la formulation durable « depuis 1992 ».
- Aucune page visible de mentions légales/confidentialité n'a été identifiée dans le sitemap. À traiter selon les données réellement collectées et les outils analytics utilisés.

## Audit local

Le site possède déjà une bonne base locale : adresse, horaires, carte, téléphone, WhatsApp, zones desservies et schéma `LegalService`. Le problème se trouve surtout hors du site.

Priorités :

1. revendiquer et compléter la fiche Google Business Profile avec la catégorie principale exacte « Avocat » disponible au Maroc ;
2. remplacer Canva par `https://errouissi.ma/fr` sur GBP, LinkedIn, Facebook et tous les annuaires ;
3. corriger le NAP et les horaires après validation du cabinet ;
4. publier des photos réelles de façade, accès, bureau et portrait ;
5. répondre aux avis sans confirmer publiquement la relation avocat-client ni la nature d'un dossier ;
6. demander progressivement des avis authentiques, sans récompense, filtrage ni texte imposé.

## Architecture et maillage recommandés

Ajouter des blocs « Guides associés » contextualisés :

- Immobilier → titre foncier, opposition, Melkiya, immatriculation.
- Foncier rural → terres collectives, terrain agricole, expropriation, sortie d'indivision.
- Successions → héritage et liquidation, sortie d'indivision.
- Fiscal → contrôle fiscal et contestation.
- Administratif → expropriation et recours.

Chaque guide doit aussi proposer deux contenus voisins et revenir vers sa page service. Les ancres doivent être naturelles, descriptives et différentes en FR et en AR.

## Le meilleur levier rapide : « entity reset local »

Le levier propre le plus rapide consiste à consolider en quelques jours toutes les entités déjà connues de Google :

1. une seule identité NAP ;
2. `errouissi.ma` déclaré comme site officiel partout ;
3. catégorie GBP exacte ;
4. sitemap et pages prioritaires soumis dans GSC/Bing ;
5. ancien Canva transformé temporairement en page de transition vers le nouveau site, puis retiré après migration des liens ;
6. profil professionnel et auteur vérifiable ;
7. avis et photographies authentiques.

Ce n'est pas une garantie de première position, mais c'est le moyen le plus rapide de réduire l'ambiguïté de marque et de déclencher la découverte du nouveau domaine sans enfreindre les règles de Google.

## Ce qu'il ne faut pas faire

- Créer des dizaines de pages ville quasi identiques.
- Acheter des backlinks ou des avis.
- Changer artificiellement les dates des guides.
- Répéter les mots-clés au détriment de la clarté juridique.
- Attendre un bond de visibilité du seul balisage FAQ : Google limite fortement les résultats enrichis FAQ pour les sites commerciaux.
- Promettre une première place ou un délai fixe.

## Limites de l'audit

L'audit ne disposait pas des données privées Google Search Console, Google Business Profile, GA4, CrUX ou d'une géogrille Maps. L'accès Ubersuggest MCP a rencontré une erreur de transport lors de cette session ; les recommandations de requêtes s'appuient sur la stratégie déjà recherchée et sur l'intention observée, mais aucun volume n'a été présenté comme fraîchement vérifié. Les positions exactes devront être mesurées après connexion de GSC/GBP.
