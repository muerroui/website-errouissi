# Formulaires immobilier : enregistrement Supabase

Extension locale du 9 octobre 2026, sans publication. Table existante : `public.errouissi_avocat`. Projet : `nhhuzwpqtwvbqmcmtdax`. Les deux campagnes restent `noindex`.

## Parcours

Sur `/ar/ads/immobilier` et `/ads/immobilier`, le clic sur « Continuer sur WhatsApp » valide les champs, appelle `POST /api/immobilier-leads`, attend la confirmation d’enregistrement, puis ouvre le message WhatsApp. La personne doit encore envoyer elle-même le message dans WhatsApp. Une ligne informe de l’enregistrement avant le bouton.

Une erreur ne signifie jamais « enregistré » : les valeurs restent présentes, le message d’erreur reçoit le focus et devient visible sur mobile. La personne peut réessayer ou explicitement ouvrir WhatsApp sans enregistrement. Les boutons WhatsApp directs et appels ne créent pas de ligne Supabase.

Le UUID reste identique lors d’une nouvelle tentative avec les mêmes valeurs. La clé primaire évite les doublons ; une erreur Supabase `23505` est traitée comme une demande déjà enregistrée. Le formulaire bloque les doubles clics pendant l’écriture. Aucun enregistrement à la frappe, aucun stockage local des coordonnées, aucune réception de document.

## Données et sécurité

Colonnes envoyées : `id`, `name`, `phone` (NULL si vide), `topic`, `locale`, `page_path`. `created_at` est fourni par le défaut SQL. La table accepte les NULL selon le DDL de l’utilisateur ; le formulaire conserve sa validation du nom et du sujet. Téléphone facultatif, chiffres arabes/persans normalisés.

Le navigateur appelle uniquement l’API du site. Le serveur envoie un POST REST Supabase avec `return=minimal`. Réponses et événements personnalisés ne contiennent pas de coordonnées ni de message WhatsApp. Aucun événement de conversion Google Ads n’a été ajouté.

RLS et retrait des permissions publiques sont issus du DDL exécuté par l’utilisateur. Le test réel confirme que la clé publique ne lit pas les deux lignes synthétiques. Aucun changement des politiques ou de la structure distante n’a été effectué par cette intégration.

Protections de l’API : origine vérifiée, JSON uniquement, corps limité à 4096 octets, champs autorisés et validés, délai Supabase de 7 secondes, réponse générique sans journalisation des données ni des erreurs privées du fournisseur. Le client attend au plus 10 secondes. Limitation de 8 demandes/minute par empreinte d’adresse réseau, en mémoire **par instance** ; ce n’est pas un quota distribué ni une protection complète contre les robots. Le proxy d’hébergement doit nettoyer les en-têtes d’adresse réseau. Prévoir une protection anti-abus distribuée si nécessaire.

## Configuration serveur

```dotenv
SUPABASE_URL=https://nhhuzwpqtwvbqmcmtdax.supabase.co
SUPABASE_SECRET_KEY=valeur_sb_secret_a_configurer
```

Compatibilité avec `SUPABASE_SERVICE_ROLE_KEY` si la nouvelle variable est absente. Ne pas utiliser de préfixe `NEXT_PUBLIC_` ou `VITE_` pour une clé secrète. Aucune dépendance SDK supplémentaire ; l’écriture passe par `fetch` côté serveur.

La clé legacy fournie a été placée dans `.env.local`, ignoré par Git, uniquement pour la vérification locale. Elle a été partagée dans la conversation : la renouveler et désactiver la clé divulguée avant publication, puis configurer la nouvelle clé dans l’environnement serveur de l’hébergeur. Les clés SMS, Browserless et Maps n’ont pas été utilisées ni recopiées dans le projet.

Ne pas considérer la collecte comme juridiquement validée : les informations de confidentialité, les formalités CNDP et les éventuels transferts de données restent à vérifier avant activation publique. L’offre gratuite Supabase n’inclut pas les sauvegardes automatiques et peut suspendre un projet inactif ; prévoir sauvegarde et contrôle de disponibilité.

## Vérifications

Tests unitaires : `node scripts/test-immobilier-leads.mjs` (réseau entièrement simulé). Ils couvrent les deux langues, téléphone NULL, normalisation, sélection des colonnes, validation, origine, taille, configuration, clés nouvelle/legacy, erreurs, doublons et limitation en mémoire.

Test réel : `node scripts/verify-immobilier-leads-live.mjs`. Deux demandes `TEST ONLY CODEX — SUPABASE INTEGRATION` créées puis supprimées par leurs UUID exacts ; aucune coordonnée réelle lue. Insertion des deux langues, chemin de campagne et NULL confirmés ; nouvelle tentative sans doublon et lecture publique interdite. Zéro ligne de test restante après contrôle.

Test navigateur : `node .impeccable/verify-immobilier-supabase.mjs`, avec `ADS_PREVIEW_ORIGIN=http://localhost:3112`. Supabase, Analytics et WhatsApp sont interceptés ; aucune demande réelle ni message envoyé. Captures `supabase-{ar,fr}-{desktop,mobile,narrow}.png` et états loading/error pour desktop/mobile. Rapport : `supabase-form-checks.json`.

Résultat final : sept groupes de vérifications navigateur passent (les six combinaisons langue/taille et la récupération après limitation), aucune erreur JavaScript. Compilation finale de 57 pages et TypeScript réussis ; validation SEO réussie. Analyse de 120 fichiers client : aucune occurrence de la clé secrète configurée. `.env.local` est confirmé ignoré par Git.

Corrections issues des vérifications : erreur automatiquement centrée et focalisée ; barre mobile masquée pendant le focus de tout le formulaire, y compris le bouton, pour éviter une interception du clic lors de la sortie d’un champ. Le libellé français de présélection est abrégé pour ne pas être tronqué aux petites tailles. Revue visuelle effectuée par l’agent principal, sans nouveau monde, sans modification du système global et sans prétendre à une nouvelle revue indépendante de la surface entière.

Un seul passage du détecteur pour cette extension : sortie tronquée, avertissements visibles sur les fontes et valeurs du système existant. Aucun second passage ; pas de prétention à une attestation exhaustive. Impeccable a guidé les états localisés, l’information avant le clic, la récupération en cas d’erreur et les entrées françaises d’au moins 16 px. Le système global et le raster existant n’ont pas été modifiés.
