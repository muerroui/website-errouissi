---
name: Cabinet Errouissi
description: Code-led editorial luxury for a bilingual Moroccan law firm.
colors:
  authority-navy: "#0B132B"
  midnight: "#111C36"
  matte-gold: "#C5A059"
  warm-brass: "#D6B66A"
  off-white-paper: "#F3F0E9"
  warm-paper: "#E5DED0"
  slate-950: "#020617"
  slate-600: "#475569"
  slate-300: "#CBD5E1"
  white: "#FFFFFF"
  whatsapp: "#25D366"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 7.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.7rem, 5vw, 4.7rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.2em"
  arabic:
    fontFamily: "Noto Naskh Arabic, Tahoma, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  button: "12px"
  pill: "9999px"
spacing:
  xs: "12px"
  sm: "20px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.matte-gold}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.warm-brass}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.authority-navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "16px 24px"
    height: "56px"
---

# Design System: Cabinet Errouissi

## Overview

**Creative North Star: "The Advocate's Ledger"**

This is a code-led editorial world: a composed legal ledger translated into a high-end digital practice. Authority comes from asymmetric hierarchy, oversized dates and figures, thin rules, disciplined whitespace, and direct language—not decorative legal clichés.

The atmosphere is assured, restrained, and distinctly Moroccan. French and Arabic are equal expressions of the same system; RTL reverses direction without changing hierarchy or dignity.

**Key Characteristics:**

- Asymmetric, line-led editorial compositions with one dominant typographic gesture per section.
- Deep navy and paper surfaces punctuated by rare, matte-gold signals.
- Dates, quantities, and ordered lists function as visual anchors.
- Restrained glass and soft depth support hierarchy without becoming the identity.
- Bilingual FR/AR composition with localized place names and direction-aware motion.

## Colors

The palette pairs institutional navy with tactile paper neutrals; matte gold marks emphasis, action, and provenance.

### Primary

- **Authority Navy:** The principal field for the hero, navigation, footer, and decisive dark actions.
- **Matte Gold:** The scarce accent for primary actions, chronology, fine rules, focus rings, and key numerals.

### Secondary

- **Midnight:** A supporting navy for tonal layering and dark-state variation.
- **Warm Brass:** A warmer hover state for gold actions; never a competing accent.

### Neutral

- **Off-White Paper:** The default editorial canvas.
- **Warm Paper:** A distinct regional/reach surface that adds material warmth.
- **Slate 950:** Maximum-contrast text and dark editorial bands.
- **Slate 600 / Slate 300:** Supporting copy on light / dark grounds.
- **White:** High-contrast headings and actions on navy.

**The Scarce Gold Rule.** Gold identifies action, chronology, or a structural accent; it is never broad ornamental fill except for the final conversion band.

**The Two Papers Rule.** Off-white paper carries core argument; warm paper marks geographic reach or a deliberate change of chapter.

## Typography

**Display Font:** Playfair Display (Georgia fallback)
**Body Font:** Inter (Arial fallback)
**Arabic Font:** Noto Naskh Arabic (Tahoma fallback)

**Character:** Editorial serif headings convey seniority and judgment; the sans-serif body stays contemporary and legible. Arabic switches the entire typographic voice to Noto Naskh Arabic so RTL content feels native, not substituted.

### Hierarchy

- **Display** (600, fluid 2.75–6rem, 0.98–1.02): One dominant hero statement, tightly tracked and allowed to wrap asymmetrically.
- **Headline** (600, fluid 2.7–5.5rem, 0.98–1.04): Section theses with restrained line length, generally 12–15 characters wide.
- **Title** (600, 1.5–1.875rem, tight): Service names and local editorial groupings.
- **Body** (400, 1–1.25rem, 1.6–1.75): Explanatory copy capped around 58–68 characters.
- **Label** (600, 0.65–0.75rem, 0.18–0.22em, uppercase): Eyebrows, navigation metadata, locations, and numbering.

**The Script Integrity Rule.** French/editorial display uses Playfair; Arabic headings and body use Noto Naskh Arabic. Never force Arabic into the Latin display face or uppercase convention.

**The One Loud Line Rule.** Each section gets one dominant statement; supporting copy remains quiet and measure-controlled.

## Layout

Use a centered 86–90rem content frame with responsive side padding (20px mobile, 32px tablet, 48px desktop). Sections follow a 96px mobile / 128–144px desktop vertical rhythm. Desktop layouts are intentionally asymmetric—typically 0.8/1.2 columns or a dominant content field with a narrow evidence rail—while mobile collapses to a single clear reading order.

Thin, tinted one-pixel rules establish alignment and chapters. The first viewport pairs the dominant headline with the 1992 / +32 evidence anchor; future hero treatments should preserve that relationship without cloning the exact composition. Use logical properties and direction-aware transforms so the same hierarchy survives RTL. No element may introduce horizontal overflow.

**The Evidence Rail Rule.** Narrow columns carry provenance, numbering, or practical facts; primary prose owns the wider column.

## Elevation & Depth

The system is flat by default. Depth appears selectively through translucent navy surfaces, backdrop blur, and broad low-opacity shadows on sticky navigation and conversion controls. Editorial content remains separated by tone, spacing, and rules rather than card stacks.

### Shadow Vocabulary

- **Soft:** A restrained ambient lift for small light surfaces or controls.
- **Luxe:** A broad, deep navy shadow for decisive floating or glass surfaces.
- **Gold:** A warm, low-opacity action glow reserved for gold calls to action.

**The Structural Depth Rule.** Use tonal fields and rules first; shadow is reserved for navigation, actionable controls, and a single elevated evidence surface.

## Shapes

The dominant geometry is rectilinear: full-width bands, sharp editorial rules, and open rows. Controls use gently softened 12px corners for approachability; circular geometry is limited to the mark, language switcher, and floating WhatsApp action. Avoid rounded card grids and decorative blobs.

## Components

### Buttons

- **Shape:** Gently softened rectangle (12px), minimum 48px height; major final actions use 56px.
- **Primary:** Matte gold on authority navy with 24px horizontal padding and a restrained warm shadow.
- **Hover / Focus:** Lift by 2px and warm to brass; focus uses a visible gold outline. Active state returns to the baseline and compresses slightly. All transforms and transitions are removed under reduced motion.
- **Secondary:** Translucent white or transparent with a fine border; hover increases surface and border contrast without introducing a new color.

### Cards / Containers

- **Corner Style:** Editorial containers remain square; do not turn sections or service rows into cards.
- **Background:** Paper, warm paper, navy, or near-black tonal bands.
- **Shadow Strategy:** Only the hero evidence panel uses glass plus pronounced depth.
- **Border:** One-pixel low-opacity rules are the primary separator.
- **Internal Padding:** 28–44px for the elevated evidence panel; section content follows the shared spacing rhythm.

### Navigation

Sticky, compact, and navy with a translucent blur. The identity pairs a circular gold-outlined scale mark with a serif firm name and small location/date metadata. Desktop exposes text links; smaller widths progressively hide secondary links while always retaining the bilingual switcher.

### Service Rows

The signature list uses typographic numbering, a serif title, a muted description, and horizontal rules instead of icon cards. Hover adds a faint gold wash, increases inline padding, and nudges the title in the reading direction. Under reduced motion, all translation and transitions are disabled while the color emphasis remains available.

### Locale Switcher

A compact outlined pill keeps the alternate language visible at every breakpoint. It uses localized labels and correct `hrefLang`; its hover inverts to gold with navy text.

## Do's and Don'ts

### Do:

- **Do** preserve strong semantic headings, legal-firm content, and crawlable text while composing editorially.
- **Do** treat French and Arabic as first-class layouts, using logical spacing, RTL-aware motion, and localized city/country markers.
- **Do** use rules, whitespace, numerals, and restrained tone changes before adding containers.
- **Do** keep contrast, visible focus, minimum touch targets, and reduced-motion fallbacks intact.

### Don't:

- **Don't** substitute generic icon-card grids for numbered service rows.
- **Don't** flood screens with gold, gradients, glass, or shadows; rarity is part of the authority.
- **Don't** center every section or regularize the layout into equal columns.
- **Don't** force Latin casing, direction, typography, or place names onto Arabic content.
- **Don't** introduce horizontal overflow at any viewport.
