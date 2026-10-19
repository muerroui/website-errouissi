# GitHub Actions → Namecheap

Le workflow `.github/workflows/deploy-namecheap.yml` compile sur GitHub, envoie
une archive par SSH et demande le redémarrage de Passenger. Il s'exécute à chaque
push sur `main`, ou manuellement dans Actions. Une courte interruption est
possible pendant le remplacement des dépendances et du build.

## Configuration initiale dans cPanel

Créer une application dans **Setup Node.js App** :

- Node.js **22**, mode **Production**.
- Application root : `errouissi` (hors de `public_html`).
- Application URL : domaine final, chemin `/`.
- Startup file : `server.js`.
- Variables : `NODE_ENV=production`, `SUPABASE_URL`, `SUPABASE_SECRET_KEY`.

Le chemin attendu est `/home/errotbjg/errouissi`. Copier le chemin du fichier
`activate` affiché par cPanel. Le workflow suppose
`/home/errotbjg/nodevenv/errouissi/22/bin/activate` : vérifier cette valeur.

## Clé SSH

Dans **SSH Access → Manage SSH Keys**, autoriser la clé publique destinée à
GitHub Actions. Générer une clé dédiée sans phrase de passe est le plus simple
pour ce workflow, qui ne gère pas les clés chiffrées. Ne jamais partager la clé
privée dans le chat ou la committer.

La clé privée va dans un secret GitHub Actions, et la clé publique reste autorisée
sur Namecheap. Une clé créée sur le serveur peut fonctionner dans ce sens aussi,
si sa clé publique est autorisée et sa clé privée transférée au secret GitHub.

## Configuration GitHub

Dans **Settings → Secrets and variables → Actions → Secrets** :

| Secret | Valeur |
|---|---|
| `NAMECHEAP_SSH_PRIVATE_KEY` | Clé privée complète, avec les lignes BEGIN/END, sans phrase de passe |
| `NAMECHEAP_SSH_KNOWN_HOSTS` | Ligne known_hosts vérifiée pour `[68.65.122.243]:21098` |

Pour récupérer les clés publiques du serveur depuis ton ordinateur :

```bash
ssh-keyscan -p 21098 68.65.122.243 > namecheap-known-hosts
ssh-keygen -lf namecheap-known-hosts
```

Comparer les empreintes avec celles confirmées par Namecheap avant de copier
le contenu de `namecheap-known-hosts` dans le secret. L'empreinte de ta clé
utilisateur affichée lors de sa génération n'est pas celle du serveur.

Dans **Variables**, si les valeurs diffèrent des valeurs par défaut :

| Variable | Défaut |
|---|---|
| `NAMECHEAP_APP_ROOT` | `/home/errotbjg/errouissi` |
| `NAMECHEAP_NODE_ACTIVATE` | `/home/errotbjg/nodevenv/errouissi/22/bin/activate` |
| `NEXT_PUBLIC_SITE_URL` | `https://errouissi.ma` |

Les secrets Supabase restent dans cPanel. L'archive contient seulement le build,
les assets publics, les manifests npm, la configuration Next et le serveur.

## Premier déploiement

Committer et pousser les fichiers de déploiement sur `main`, puis consulter
**Actions → Deploy to Namecheap**. Après le premier déploiement, démarrer
l'application dans cPanel si elle était arrêtée. Tester `/fr`, `/ar`, les assets
et les formulaires, et vérifier les enregistrements dans Supabase.

Les dossiers `.deploy-*` sont conservés sur le serveur, avec le build précédent.
Les nettoyer manuellement après validation pour éviter de remplir le disque.
Ce déploiement remplace aussi les dépendances partagées : la conservation du
build précédent ne constitue pas un rollback automatique complet.

## Secrets déjà exposés

Renouveler tout mot de passe ou clé Supabase partagé. `.env.example` contenait
une clé de service : sa suppression du fichier ne la supprime pas de l'historique
Git. Si des fichiers `.env` ont déjà été suivis, les retirer de l'index ;
`.gitignore` ne retire pas les fichiers déjà suivis.
