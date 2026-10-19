#!/usr/bin/env bash
set -euo pipefail

app_root="$1"
activate="$2"
archive="$HOME/$3"
test -f "$activate"
test -d "$app_root"
source "$activate"
node -e 'if (Number(process.versions.node.split(".")[0]) !== 22) process.exit(1)'

staging="$(mktemp -d "$app_root/.deploy-XXXXXXXX")"
tar -xzf "$archive" -C "$staging"
test -f "$staging/.next/BUILD_ID"
cd "$app_root"

# cPanel owns node_modules (often a symlink into its Node virtual environment).
# Keep environment files and Passenger configuration on the server.
cp "$staging/package.json" "$staging/package-lock.json" .
# npm install preserves the node_modules link managed by CloudLinux/cPanel.
npm install --include=dev --no-audit --no-fund
cp "$staging/next.config.ts" "$staging/server.js" .
if [ -d public ]; then cp -a "$staging/public/." public/; else mv "$staging/public" public; fi
if [ -d .next ]; then mv .next "$staging/previous-next"; fi
mv "$staging/.next" .next
mkdir -p tmp
touch tmp/restart.txt
printf '%s\n' 'Deployment installed; Passenger will restart on the next request.'
# Retain the staging folder (including previous build) for manual recovery.
