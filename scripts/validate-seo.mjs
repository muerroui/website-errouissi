import fs from "node:fs";

const files = [
  "lib/services/immobilier.ts",
  "lib/services/succession.ts",
  "lib/services/foncier-rural.ts",
  "app/[lang]/contact/page.tsx",
];

let failed = false;

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const matches = source.matchAll(/(title|description): "([^"]+)"/g);
  for (const [, kind, value] of matches) {
    const length = [...value].length;
    const limit = kind === "title" ? 59 : 154;
    if (length > limit) {
      failed = true;
      console.error(`${file}: ${kind} is ${length} characters (max ${limit}) — ${value}`);
    }
  }
}

if (failed) process.exit(1);
console.log("SEO metadata lengths are within limits.");
