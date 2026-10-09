# Landing Ads immobilier — dossier de maintenance

Livraison locale du 9 octobre 2026. Route : `/ads/immobilier`. Aucune publication ni campagne lancée.

## Extension du système existant

Comparaison effectuée avec `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, le contrat de surface, les sources de la page et les neuf captures finales. Le monde « Advocate’s Ledger » est conservé ; aucun fichier de design global n’a été réécrit.

Résumé du système, en cinq lignes :

1. Palette : bleu nuit `#0B132B`, or mat `#C5A059`, ivoire `#F3F0E9` et papier chaud `#E5DED0`.
2. Typographie : Noto Naskh Arabic pour le texte et les titres ; Inter uniquement pour les numéros de téléphone et les étapes chiffrées.
3. Hiérarchie : une proposition dominante par section, mise en page asymétrique, lignes éditoriales ouvertes et formulaire rectangulaire.
4. Interactions : boutons adoucis de 12 px, focus visible, sélection de dossier qui prépare le formulaire, mouvement réduit respecté.
5. Image : scène de litige immobilier sans humain, visible intégralement, sous les premiers contacts et explicitement déclarée illustrative.

Les exemples préexistants `+32` et les mentions d’eyebrows du sidecar n’ont pas été repris ni réparés hors périmètre. La page utilise la date stable « depuis 1992 », sans kicker au-dessus des titres. Les tailles arabes responsives et nuances de soutien restent locales à la campagne, sans redéfinir le système global.

## Architecture et contacts

- `app/ads/layout.tsx` est un root layout distinct : arabe `ar-MA`, RTL, sans menu complet du site éditorial.
- `app/ads/immobilier/page.tsx` reste un composant serveur statique. `ImmobilierLeadForm` et `CampaignAnalytics` constituent les limites client interactives.
- Téléphone réel : `+212523283258`. WhatsApp réel : `212668075213`. Coordonnées partagées via `lib/site.ts`, bureau à Mohammedia.
- Le formulaire prépare une URL WhatsApp après validation du nom et du sujet ; le téléphone est facultatif et accepte les chiffres arabes/persans. La personne relit et choisit d’envoyer. Aucun backend de réception n’a été ajouté.
- Sans JavaScript, les contacts directs restent disponibles ; le formulaire est désactivé pour éviter un GET contenant des données personnelles.

## Non-indexation

`noindex, follow` est présent dans le HTML compilé aux trois tailles contrôlées, y compris avec paramètres de campagne. Canonique : `https://errouissi.ma/ads/immobilier`. Les pages éditoriales et leur indexation ne sont pas modifiées. La route de campagne n’a pas été ajoutée au sitemap. Ne pas bloquer son crawl dans robots.txt : les robots doivent pouvoir lire la directive de non-indexation.

## Mesure des contacts

Les propriétés GA4 déjà présentes dans le site, `G-QKRLHX88W9` et `G-Q8VVZ5F10M`, sont reprises. Les événements `phone_click` et `whatsapp_click` mesurent une intention de contact, pas un appel abouti, une conversation reçue ou un rendez-vous.

Les événements personnalisés n’incluent ni nom, ni numéro saisi, ni contenu/URL du message WhatsApp. Aucun identifiant Google Ads `AW-…` ou libellé de conversion n’a été inventé. Leur raccordement et la mesure des demandes réellement reçues restent distincts de cette réalisation.

## Visuel final et provenance

Asset : `public/images/ads/litige-immobilier-avocat-maroc.webp`, 1200 × 800, 103 044 octets. Génération via l’outil intégré, puis compression WebP. Le composant Next Image fournit dimensions, `sizes` responsive et chargement différé.

Prompt exact : `.impeccable/immobilier-litige-image-prompt.txt`. Provenance : fichier `.webp.json` voisin ; le moteur utilise son fallback sidecar pour WebP. Scan : un raster, aucune provenance manquante.

Les deux interprétations rejetées par l’utilisateur (paysage agricole puis maquette immobilière) ont été retirées de `public`. Leurs originaux restent conservés dans les images générées de Codex, sans référence dans la page finale.

## Vérification et revue

Compilation de production réussie. TypeScript et validation SEO réussis. Vérification navigateur : 1440 px, 390 px, 320 px ; aucun débordement ni erreur JavaScript. Quatorze assertions couvrent non-indexation, illustration, contraste, contacts, formulaire, chiffres arabes, téléphone facultatif, absence de données saisies dans les événements personnalisés, fallback sans JS, mouvement réduit et FAQ. Aucun appel ni message réel n’a été envoyé lors des tests.

Rapport : `.impeccable/review/ads-immobilier-checks.json`. Captures : trois pages complètes, trois premiers écrans, trois détails du visuel. Un seul passage du détecteur mécanique ; voir `ads-immobilier-detector-notes.md` pour ses limites et les décisions.

Revue indépendante finale, sur la version avec le visuel de litige : **disposition: ship**, aucun correctif matériel demandé. La revue couvre la surface entière et ses neuf captures. Documentation achevée directement par l’agent principal après indisponibilité de l’agent de documentation ; ce remplacement ne concerne pas la revue indépendante, qui a abouti.

Rejouer les contrôles sous PowerShell :

```powershell
npm run typecheck
npm run seo:validate
npm run build
npm run start -- --port 3110
# Dans une seconde session, avec Edge installé :
$env:ADS_PREVIEW_ORIGIN = 'http://localhost:3110'
node .impeccable/verify-ads-immobilier.mjs
```

Les tests interceptent Analytics et WhatsApp pour éviter toute émission vers les comptes réels.
