# Redheaded Stepchild Tech (RST) — Marketing Site

## Original Problem / Context
User imported their Next.js site (`rst-website`, GitHub: redheadedstepchildtech/rst-website)
after thinking it was "lost" (it was pushed to `rst-website`, not the near-empty
`redheadedstepchildtech-site` repo). They then asked to modernize it into a high-tech /
NASA-style themed site, fix all mistakes, restructure the layout, and add a link to
Dream Funnel (https://dreamfunnel.net).

## Tech Stack
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4 (theme via `@theme` in globals.css)
- lucide-react icons
- Fonts: Chakra Petch (display), Manrope (body), JetBrains Mono (labels)
- No backend / DB — static marketing site
- Runs at repo root `/app`; supervisor `frontend` launches it via `/app/frontend/package.json`
  launcher script (`next dev -H 0.0.0.0 -p 3000`). `/app/frontend` is gitignored.

## What's Been Implemented (2026-06)
- Fixed structural bugs: NavBar/Footer were imported but never rendered in layout;
  broken/duplicated section nesting in home page; dead Tailwind colors (v3 config not
  read by v4) replaced with working `@theme` tokens.
- Full dark "mission control" / NASA redesign: starfield + grid overlays, glass panels,
  gradient text, micro-animations, space imagery (Unsplash: earth-at-night, nebula, galaxy, milky way).
- Pages: Home (hero + telemetry strip + features + systems grid + roadmap + CTA),
  Systems/Products (manifest list w/ status badges), About (beliefs + values), Contact
  (comms panel + working client-side form with success state).
- Dream Funnel (https://dreamfunnel.net) links added in navbar, hero, systems card,
  home CTA, footer, products CTA, about CTA, and contact panel — all `target=_blank`.
- Responsive nav with mobile menu. data-testid attributes on all interactive elements.

## Verified
- All routes return HTTP 200 (/, /about, /products, /contact).
- Visual QA via screenshots: home, products, contact confirmed on-theme and correct.

## Next Action Items
- Push the redesign to GitHub (`Save to GitHub`) so Vercel auto-deploys the new version.
- (Optional) Wire the contact form to a real backend/email (currently client-side only —
  shows a success state but does not send/store the message).
- (Optional) Add real Dream Funnel screenshots/logo, favicon, and OG/social meta images.
- (Optional) Rotate the GitHub token embedded in the git remote URL for security.

## Notes / Mocked
- CONTACT FORM IS FRONTEND-ONLY (no submission backend). It does not deliver messages.
