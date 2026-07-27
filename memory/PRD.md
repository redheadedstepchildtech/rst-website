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

## Deployment (2026-06)
- Emergent "Publish" FAILS for this app by design: the Emergent deployer expects the
  standard FastAPI (`/app/backend`) + CRA (`/app/frontend`) structure and looks for
  `backend/.env`. This is a pure Next.js app at repo root → NOT compatible with Emergent
  deploy. **Deploy target = Vercel** (native Next.js, supports the Resend API route).
- Fixed a Vercel build blocker: removed the stale `package-lock.json` (out of sync after
  adding lucide-react + resend); repo now uses `yarn.lock`. `next build` passes cleanly.
- Preview environment now serves a PRODUCTION build: `/app/frontend/package.json` launcher
  runs `next build && next start -H 0.0.0.0 -p 3000` (was `next dev`). This fixed a
  Turbopack dev-server hydration failure behind the Emergent preview proxy.
- Added a preview-only FastAPI proxy `/app/backend/server.py` (port 8001) that forwards
  `/api/*` to the Next server on port 3000, because the Emergent preview ingress routes
  `/api/*` to 8001. On Vercel this proxy is irrelevant (Next handles all routing).
- Hardened `app/api/contact/route.ts`: HTML-escape all user inputs (name/email/message),
  email format validation, length caps.

## Deploy steps for the user (Vercel)
1. Save to GitHub (push latest — redesign/email/branding are only local until pushed).
2. vercel.com → Add New Project → import `redheadedstepchildtech/rst-website`.
3. Framework auto-detects Next.js; Root Directory = repo root (leave default `./`).
4. Add env vars: RESEND_API_KEY, SENDER_EMAIL, CONTACT_TO_EMAIL (these are in gitignored
   `.env.local` and are NOT pushed).
5. Deploy.

## Testing
- iteration_3.json: 100% frontend pass through preview URL (pages, nav, Dream Funnel links,
  contact form submit → Resend 200 → success state, reset, SPA nav).

## Next Action Items
- Push to GitHub, then deploy on Vercel (steps above).

## Auto-reply (added 2026-06)
- `app/api/contact/route.ts` sends a branded auto-reply confirmation to the sender when
  `AUTO_REPLY=true`. It is BEST-EFFORT / non-blocking: if Resend rejects it (sandbox or
  unverified domain), it is logged and skipped so the main notification + form success are
  unaffected. Verified in iteration_4 (100%). Auto-reply to real senders activates once the
  domain is verified.
- Env is fully env-driven: RESEND_API_KEY, SENDER_EMAIL, CONTACT_TO_EMAIL, AUTO_REPLY.

## Domain verification -> production email config
- Verify redheadedstepchildtech.com at resend.com/domains (add the DNS records Resend
  provides). Once verified, set on Vercel (and preview .env.local):
  SENDER_EMAIL=noreply@redheadedstepchildtech.com, CONTACT_TO_EMAIL=admin@redheadedstepchildtech.com, AUTO_REPLY=true.

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

## Spam guard (added 2026-06)
- Honeypot field (`website`) hidden off-screen in `app/contact/page.tsx`; `app/api/contact/route.ts`
  silently returns 200 with NO email when it's filled (bot). This is the reliable guard.
- Best-effort in-memory rate limit (5 req / 10 min per IP) in the route. NOTE: process-local,
  so unreliable on serverless/multi-worker (Vercel) — honeypot is the primary defense. For
  robust rate limiting, add Upstash Redis later.
- Verified iteration_5 (100%): real submissions succeed, honeypot hidden, reset works, pages 200.

## Notes / Mocked
- CONTACT FORM IS FRONTEND-ONLY (no submission backend). It does not deliver messages.
