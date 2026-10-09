# Mechanical detector — single run

Command: `impeccable detect --json app/ads/immobilier/page.tsx app/ads/layout.tsx app/ads/immobilier/landing.module.css components/ads/ImmobilierLeadForm.tsx components/ads/CampaignAnalytics.tsx`.

The console response was truncated (12,372 tokens / 996 lines). No second run was made. Visible warning findings: six `overused-font` instances for Inter used exclusively on telephone numbers and ordered step numerals; one `layout-transition` for animated row padding. Remaining visible findings are advisory `design-system-font-size` and `design-system-color` entries for Arabic responsive type sizes and supporting state/rule colors.

- Layout-transition addressed: row feedback now uses a transform on the inner content rather than padding animation, with reduced-motion override.
- Inter retained intentionally: the incumbent DESIGN.md explicitly specifies it; Arabic display/body remain Noto Naskh Arabic. Telephone numerals are LTR.
- Advisory type/state shades remain local to this campaign and do not justify a global DESIGN.md rewrite. The finish reviewer should assess their consistency and contrast against the captures and source.

This note is not a claim that the truncated output had no further findings. It records the findings actually visible to the builder; the independent review checks the whole surface's craft floor.
