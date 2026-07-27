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
- On Vercel, add env vars: RESEND_API_KEY, SENDER_EMAIL, CONTACT_TO_EMAIL (they live in
  `/app/.env.local` which is gitignored and will NOT be pushed).
- Verify domain `redheadedstepchildtech.com` at resend.com/domains, then set
  SENDER_EMAIL=noreply@redheadedstepchildtech.com and CONTACT_TO_EMAIL=admin@redheadedstepchildtech.com
  to deliver to the real inbox (currently sandbox-limited).

## Email / Contact (added 2026-06)
- Resend integration via Next.js Route Handler `app/api/contact/route.ts` (Node `resend` SDK).
- Contact form now POSTs to /api/contact with sending + error states; verified working
  (HTTP 200, email id returned).
- SANDBOX LIMITATION: Resend test mode (from onboarding@resend.dev) only delivers to the
  account owner's email. CONTACT_TO_EMAIL is temporarily set to the owner's verified address
  (monidabusiness@proton.me) so the form works today. Displayed contact email is
  admin@redheadedstepchildtech.com. Domain verification needed to deliver there.
- Branding: generated favicon (`app/icon.jpeg`) + social share image
  (`app/opengraph-image.jpeg` / `twitter-image.jpeg`). Metadata tagline:
  "Boldly go where no software system has gone before."

## Notes / Mocked
- CONTACT FORM IS FRONTEND-ONLY (no submission backend). It does not deliver messages.
