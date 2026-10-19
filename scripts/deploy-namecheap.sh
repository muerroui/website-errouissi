#!/usr/bin/env bash
set -euo pipefail

app_root="$1"
activate="$2"
archive="$HOME/$3"
test -f "$activate"
test -d "$app_root"
# CloudLinux's activation script reads optional variables that may be unset.
set +u
source "$activate"
set -u
node -e 'const major = Number(process.versions.node.split(".")[0]); if (major < 20) process.exit(1); console.log("Using Node " + process.version)'

staging="$(mktemp -d "$app_root/.deploy-XXXXXXXX")"
tar -xzf "$archive" -C "$staging"
test -f "$staging/.next/BUILD_ID"
cd "$app_root"

# cPanel owns node_modules (often a symlink into its Node virtual environment).
# Keep environment files and Passenger configuration on the server.
cp "$staging/package.json" "$staging/package-lock.json" .
# npm install preserves the node_modules link managed by CloudLinux/cPanel.
npm install --include=dev --no-audit --no-fund
for item in app components lib proxy.ts tsconfig.json next.config.ts server.js app.js; do
  if [ -e "$staging/$item" ]; then
    rm -rf "$item"
    cp -r "$staging/$item" .
  fi
done
if [ -d public ]; then cp -a "$staging/public/." public/; else mv "$staging/public" public; fi
if [ -d .next ]; then mv .next "$staging/previous-next"; fi
mv "$staging/.next" .next
if [ ! -f .next/server/preview-props.json ] && [ -f .next/prerender-manifest.json ]; then
  node -e "const p='.next/server/preview-props.json',m='.next/prerender-manifest.json';const j=JSON.parse(require('fs').readFileSync(m));require('fs').writeFileSync(p,JSON.stringify(j.preview||{}));"
fi
mkdir -p tmp
touch tmp/restart.txt
printf '%s\n' 'Deployment installed; Passenger will restart on the next request.'
# Retain the staging folder (including previous build) for manual recovery.
