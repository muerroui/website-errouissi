# Landings Ads immobilier bilingues — dossier de maintenance

Livraison locale du 9 octobre 2026. L’arabe se trouve à `/ar/ads/immobilier` ; la version française équivalente à `/ads/immobilier`. Configuration des conversions Google Ads reportée. Aucune publication ni campagne lancée.

Prévisualisation de la version finale : `http://localhost:3111/ar/ads/immobilier` et `http://localhost:3111/ads/immobilier`.

## Extension du système existant

Comparaison effectuée avec `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, le contrat `.impeccable/surfaces/app-ar-ads-immobilier-page-tsx.md`, les styles et composants partagés, les métadonnées et la revue indépendante des quinze captures finales. Le monde « Advocate’s Ledger » est conservé ; cette adaptation ne réécrit pas les fichiers du système global.

Résumé du système, en cinq lignes :

1. Palette : bleu nuit `#0B132B`, or mat `#C5A059`, ivoire `#F3F0E9` et papier chaud `#E5DED0` ; les règles « Scarce Gold » et « Two Papers » restent celles du système existant.
2. Typographie : français LTR, titres Playfair Display et texte Inter ; arabe RTL, titres et texte Noto Naskh Arabic, Inter pour les numéros et étapes ; règle « Script Integrity » préservée.
3. Hiérarchie : une proposition dominante par section (« One Loud Line »), composition asymétrique et repères pratiques latéraux (« Evidence Rail »), lignes ouvertes et formulaire rectangulaire.
4. Interactions : boutons adoucis de 12 px, cibles d’au moins 48 px, focus visible, présélection du dossier et focus sur le nom ; mouvement réduit respecté dans les deux langues.
5. Image : même scène de litige immobilier sans humain, visible intégralement sous les premiers contacts, avec une légende déclarant sa génération et son caractère illustratif dans chaque langue.

Les exemples préexistants `+32` et les mentions d’eyebrows dans `DESIGN.md` et le sidecar n’ont pas été repris ni réparés hors périmètre. Les pages utilisent la date stable « depuis 1992 », sans kicker au-dessus des titres. Les tailles responsives et nuances de soutien restent locales à la campagne, sans redéfinir le système global : titre principal arabe de `3.5–5.2rem` sur grand écran et `2.8–3.8rem` sur mobile ; titre français de `3–4.1rem` et `2.5–3.25rem` respectivement. Le texte de base est de `1.125rem` en arabe et `1rem` en français.

## Architecture et contacts

- `app/ar/ads/layout.tsx` et `app/ads/layout.tsx` sont deux root layouts distincts, sans menu du site éditorial. Ils utilisent `components/ads/CampaignLayout.tsx` avec les locales `ar` et `fr` : HTML `ar-MA`/RTL et `fr-MA`/LTR.
- `app/ar/ads/immobilier/page.tsx` et `app/ads/immobilier/page.tsx` sont des composants serveur statiques. Ils partagent `app/ads/immobilier/landing.module.css` ; les ajustements français sont limités à `.page[lang="fr-MA"]`. `ImmobilierLeadForm` et `CampaignAnalytics` constituent les limites client interactives.
- Les liens de langue du pied de page relient les deux URLs de campagne. Offre, six lignes de dossiers, présentation de l’avocat, bureau, trois étapes, FAQ et contacts finaux ont un contenu équivalent ; libellés, erreurs, statuts et composition WhatsApp sont localisés.
- Téléphone réel : `+212523283258`. WhatsApp réel : `212668075213`. Coordonnées partagées via `lib/site.ts`, bureau à Mohammedia.
- `lib/ads-immobilier.ts` conserve les clés de dossiers `property`, `rural`, `inheritance`, `registration`, `lease`, `transaction`. Chaque ligne présélectionne le sujet dans le formulaire et place le focus sur le nom. Le menu propose aussi `other`, traduit dans les deux langues.
- Le formulaire prépare une URL WhatsApp après validation du nom et du sujet ; le téléphone est facultatif. `normalizePhone` convertit les chiffres arabes et persans en chiffres latins pour la validation et le message, dans les deux langues. La personne relit et choisit d’envoyer. Aucun backend de réception n’a été ajouté.
- Le commit utilisateur concurrent `9c33d0c` a retiré le paragraphe `formPrivacy` sous le bouton ; ce changement est conservé et le paragraphe n’est plus rendu. L’introduction du formulaire explique toujours la relecture du message dans WhatsApp avant son envoi.
- Sans JavaScript, les contacts directs restent disponibles ; le formulaire est désactivé pour éviter un GET contenant des données personnelles.
- Sur mobile, les contacts directs précèdent le formulaire ; la barre de contacts fixe est masquée quand un champ ou le menu du formulaire a le focus.

La pratique depuis 1992, le bureau et les coordonnées sont conservés. Aucun taux de réussite « 95 % », réputation supposée ni résultat garanti n’a été ajouté.

## Non-indexation

Chaque page définit `robots: { index: false, follow: true }` et sa propre canonique ; les deux root layouts portent aussi la directive de non-indexation. Les rapports confirment `noindex, follow` dans le HTML compilé aux trois tailles contrôlées, y compris avec paramètres de campagne.

| Langue | Route | Canonique |
| --- | --- | --- |
| Arabe | `/ar/ads/immobilier` | `https://errouissi.ma/ar/ads/immobilier` |
| Français | `/ads/immobilier` | `https://errouissi.ma/ads/immobilier` |

Les deux campagnes sont absentes du sitemap. Les six routes éditoriales françaises et arabes contrôlées répondent toujours 200 et restent indexables. Ne pas bloquer le crawl des campagnes dans robots.txt : les robots doivent pouvoir lire la directive de non-indexation.

## Mesure des contacts

Les propriétés GA4 déjà présentes dans le site, `G-QKRLHX88W9` et `G-Q8VVZ5F10M`, sont reprises. Les événements `phone_click` et `whatsapp_click` mesurent une intention de contact, pas un appel abouti, une conversation reçue ou un rendez-vous.

Les événements personnalisés portent `page_language` (`ar-MA` ou `fr-MA`) et `campaign_page` (`immobilier_ar` ou `immobilier_fr`), ainsi que le chemin de page et la position du contact. Ils n’incluent ni nom, ni numéro saisi, ni contenu/URL du message WhatsApp. Le suivi est limité aux deux chemins de campagne.

Aucun identifiant Google Ads `AW-…`, libellé ou configuration de conversion n’a été ajouté. La configuration du compte et la mesure des demandes réellement reçues sont reportées conformément à la demande ; elles ne font pas partie de cette livraison.

## Visuel final et provenance

Asset partagé : `public/images/ads/litige-immobilier-avocat-maroc.webp`, 1200 × 800, 103 044 octets. Visuel existant généré via l’outil intégré puis compressé en WebP, réutilisé dans les deux langues. Le composant Next Image fournit dimensions, `sizes` responsive et chargement différé ; les légendes sont localisées.

Prompt exact : `.impeccable/immobilier-litige-image-prompt.txt`. Provenance : fichier `.webp.json` voisin ; le moteur utilise son fallback sidecar pour WebP. Scan : un raster, aucune provenance manquante.

Aucun nouvel asset n’a été généré ni retiré pendant cette extension bilingue.

## Vérification et revue

Compilation finale de production réussie : 56 pages. TypeScript et `seo:validate` réussis. Les rapports navigateur comprennent quatorze contrôles arabes et douze groupes de contrôles français, soit 26 au total, sans erreur JavaScript. Les deux langues ont été contrôlées à 1440 px, 390 px et 320 px, sans débordement horizontal.

La couverture comprend non-indexation et canoniques, illustration, contrastes échantillonnés, instrumentation des contacts, validation et focus, présélection du dossier, chiffres arabes/persans, téléphone facultatif, absence de données saisies dans les événements personnalisés, contacts sans JS, mouvement réduit, FAQ native, liens de langue, sitemap et routes éditoriales. Aucun appel, message WhatsApp ou événement vers les comptes Analytics réels n’a été émis : les destinations sont interceptées lors des tests.

Rapports : [contrôles arabes](ads-immobilier-checks.json) et [contrôles français](ads-immobilier-fr-checks.json). Captures finales : neuf arabes (trois pages complètes, trois premiers écrans, trois détails du visuel) et six françaises (trois pages complètes et trois premiers écrans). Les captures arabes ont été rafraîchies contre le build final après le retrait utilisateur du paragraphe `formPrivacy` ; toutes montrent donc le formulaire final.

Un seul passage du détecteur mécanique sur l’extension bilingue ; sa sortie a été tronquée. [Les notes du détecteur](ads-immobilier-bilingual-detector-notes.md) décrivent les résultats visibles et cette limite : elles ne constituent pas une attestation exhaustive d’absence de défaut.

[Revue indépendante finale de la surface bilingue](ads-immobilier-bilingual-finish-review.md) : **disposition: ship**, aucun correctif matériel demandé. La revue porte sur les quinze captures finales valides et la surface entière. Cette documentation est mise à jour par l’agent de documentation indépendant après ce verdict ; le système global est préservé.

Rejouer les contrôles sous PowerShell :

```powershell
npm run typecheck
npm run seo:validate
npm run build
npm run start -- --port 3111
# Dans une seconde session, avec Edge installé :
$env:ADS_PREVIEW_ORIGIN = 'http://localhost:3111'
node .impeccable/verify-ads-immobilier.mjs
node .impeccable/verify-ads-immobilier-fr.mjs
# Pour rafraîchir uniquement les six captures françaises contre le build final :
node .impeccable/capture-ads-immobilier-fr.mjs
```

Ces commandes sont des instructions de maintenance ; elles n’ont pas été relancées pendant la mise à jour documentaire. Les scripts de vérification interceptent Analytics, les appels et WhatsApp pour éviter toute émission vers les comptes réels. La prévisualisation demeure locale, sans publication ni lancement de campagne.
