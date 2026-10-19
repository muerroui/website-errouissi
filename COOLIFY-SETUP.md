# 🚀 Guide Déploiement Coolify VPS — Cabinet Errouissi

Ce guide résume la nouvelle infrastructure moderne et conteneurisée sur ton VPS, remplaçant définitivement l'hébergement mutualisé Namecheap/cPanel.

---

## 1. Informations Serveur VPS & Coolify

- **Adresse IP du VPS** : `162.35.31.73`
- **Interface Coolify** : [http://162.35.31.73:8000](http://162.35.31.73:8000)
- **Status** : En ligne et actif (Docker + Traefik + Coolify v4)
- **RAM disponible** : ~1.8 Go physique + 3 Go Swap (sécurité pour les builds Docker)

---

## 2. Première Connexion à Coolify (Configuration Rapide en 2 min)

1. Ouvre ton navigateur sur : **[http://162.35.31.73:8000](http://162.35.31.73:8000)**.
2. Crée ton compte **Administrateur** (nom, email, mot de passe). *Le premier inscrit devient le propriétaire du serveur.*
3. Tu arriveras directement sur le Dashboard Coolify.

---

## 3. Ajouter l'Application dans Coolify

1. Dans Coolify, clique sur **Projects** -> Clique sur le projet par défaut (ou crée "Errouissi").
2. Clique sur **+ New Resource** -> Sélectionne **Public Repository** ou **Private Repository (GitLab / GitHub)**.
3. Renseigne l'URL de ton dépôt (GitLab ou GitHub) et la branche `main`.
4. Pour le **Build Pack**, Coolify détectera automatiquement le fichier **Dockerfile** à la racine.
5. Dans les paramètres de l'application :
   - **Domains** : `https://errouissi.ma, https://www.errouissi.ma`
     *(Coolify gère automatiquement les certificats SSL Let's Encrypt avec renouvellement automatique 0 config via Traefik).*
   - **Port** : `3000`

---

## 4. Variables d'Environnement (Environment Variables)

Dans l'onglet **Environment Variables** de ton application dans Coolify, ajoute :

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
HOSTNAME=0.0.0.0
NEXT_PUBLIC_SITE_URL=https://errouissi.ma
SUPABASE_URL=https://nhhuzwpqtwvbqmcmtdax.supabase.co
SUPABASE_SECRET_KEY=ton_service_role_key
```

*(Note : Pas besoin de guillemets pour les valeurs dans Coolify).*

---

## 5. Déploiement Automatique via GitHub Actions

Le workflow `.github/workflows/deploy-coolify.yml` a été configuré :

1. Dans Coolify, va sur ton application -> Onglet **Webhooks**.
2. Copie l'URL du **Deploy Webhook** (ex: `http://162.35.31.73:8000/api/v1/deploy?uuid=...`).
3. Dans ton dépôt GitHub :
   - Va dans **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
   - Nom : `COOLIFY_WEBHOOK_URL`
   - Valeur : L'URL copiée depuis Coolify.
4. À chaque `git push` sur `main`, GitHub Actions valide le code (`typecheck` et `lint`) puis ordonne à Coolify de déployer !

*(Tu peux aussi laisser Coolify écouter directement GitHub si tu as connecté la GitHub App dans Coolify).*

---

## 6. Basculer le Domaine (DNS)

Chez ton registrar de domaine (Namecheap ou prestataire DNS) :
- Modifie l'enregistrement **A** pour `@` (ou `errouissi.ma`) -> pointe vers **`162.35.31.73`**.
- Modifie l'enregistrement **CNAME** ou **A** pour `www` -> pointe vers **`162.35.31.73`**.

Dès que le DNS est propagé, Traefik sur Coolify générera automatiquement le cadenas vert SSL HTTPS !
