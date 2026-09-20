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

## GO-LIVE STATUS (2026-06) — READY ✅
- Domain redheadedstepchildtech.com VERIFIED in Resend. Production email config live in
  preview: SENDER_EMAIL=noreply@redheadedstepchildtech.com, CONTACT_TO_EMAIL=admin@redheadedstepchildtech.com, AUTO_REPLY=true.
- Live send confirmed: notification to admin@ + auto-reply both send (real Resend id, 0 errors).
- iteration_6.json: 100% final go-live pass — all 4 pages 200, nav/footer, all Dream Funnel
  CTAs (→ dreamfunnel.net, new tab), contact form live-send + validation + reset, honeypot
  hidden, favicon + OG/Twitter meta + tagline present.
- `next build` passes; preview serves the production build (next start).
- FOR VERCEL: set env vars RESEND_API_KEY, SENDER_EMAIL=noreply@redheadedstepchildtech.com,
  CONTACT_TO_EMAIL=admin@redheadedstepchildtech.com, AUTO_REPLY=true (.env.local is gitignored,
  NOT pushed). Then Save to GitHub → import repo on Vercel → deploy.

## Update — Star Trek theme + content (2026-06)
- Star Trek visuals: warp-speed streaks (.warp-lines) + wormhole portals (.wormhole) on hero
  & CTA (hero section uses `isolate` so -z-10 decor layers above page bg). globals.css.
- Brand text now "Redheaded Stepchild Tech" (navbar + footer); email from-name updated too.
- Removed all Helena/Helena Valley refs → "Montana". LOCATION="Montana". Eyebrow now
  "Montana · Sector 001 · EST. 2026".
- Hero H1 → "High-technology tools for the people of Earth."
- "Stories" → "Myrna Stories", status LIVE, external link https://myrnastories.com
  (home systems grid + Systems page). lib/site.ts.
- iteration_7.json: 100% pass (pages, brand, no-Helena, Myrna links new-tab, Dream Funnel
  regression, contact live-send + validation, hero buttons/telemetry visible).
- NOTE: these are in PREVIEW; production (https://ghost-code-1.emergent.host) needs a REDEPLOY.

## Update — renames + waitlist (2026-06)
- Renamed systems: Swapmeet → "Market Place", MORES → "Enterprise Resource System"
  (lib/site.ts; roadmap text on home updated).
- Added early-access WAITLIST capture (`components/WaitlistButton.tsx` + `app/api/waitlist/route.ts`)
  on all non-live systems (Market Place, Enterprise Resource System, Flying Magnetometer),
  on both Home grid and Systems page. Flow: "Notify me" → email → Join → "You're on the list".
  API emails the team + a confirmation to the subscriber via Resend; has honeypot + rate limit.
- iteration_8.json: 100% pass (waitlist e2e home+products, invalid-email blocked, renames,
  Dream Funnel/Myrna links, contact form regression).
- NOTE: in PREVIEW; production (https://ghost-code-1.emergent.host) needs a REDEPLOY.

## Update — SkyForge (patented drone) 2026-06
- Renamed "Flying Magnetometer" → "SkyForge" everywhere; status "PATENTED" (amber badge).
- New dedicated page `/app/app/skyforge/page.tsx` (hero + patent badge + capabilities + use
  cases + CTAs, drone imagery). Added "SkyForge" to navbar + footer.
- System card logic is now three-way: external (Dream Funnel/Myrna → new tab), internal
  (SkyForge → /skyforge via Link), in-build (Market Place/ERS → waitlist). page.tsx + products.
- iteration_9.json: 100% pass (SkyForge page + nav + card links, waitlist/external/contact regress).
- NOTE: in PREVIEW; production needs a REDEPLOY. SkyForge page copy/specs are a first draft
  pending the owner's real content (patent no., specs, photos).

- SkyForge page now uses REAL owner content: "SkyForge RASP" (Rugged Aerial Sensing
  Platform), flying-saucer airframe, single-prop/coaxial enclosed propulsion, MgO/TMR
  Quantum Field Imager (QFI) payload, 5 RASP pillars, roadmap v1.0–v3.0, founder's quote.
  Imagery = 3 AI-generated flying-saucer concept renders (hero/studio/scan) since no stock
  drone photos fit the saucer design.

## Update — SkyForge cinemagraph hero (2026-06)
- Replaced the static SkyForge hero with an animated "in-flight scanning" CINEMAGRAPH
  (owner asked for a video of it flying/avoiding trees; true AI video needs a paid
  fal.ai key + is inconsistent, so we built a reliable CSS cinemagraph instead).
- New client component `components/SkyForgeCinemagraph.tsx`: base render = the FOREST
  scan image (IMG.scan) so the saucer threads the tree line over geophysical scan lines.
  Motion (all CSS, GPU-friendly transform/opacity): Ken Burns drift (.sf-cinema-img),
  radar sweep beam (.sf-sweep), breathing survey glow (.sf-scanzone), drifting fog
  (.sf-fog), rising data motes (.sf-mote), scroll parallax (JS scroll listener).
  Live HUD: "SURVEY IN PROGRESS · SECTOR MT-07" badge + telemetry strip (ALT / SCAN /
  SIGNALS / MODE) where SIGNALS ticks up on a setInterval (cleared on unmount).
  prefers-reduced-motion guard added in globals.css.
- The mountain saucer render (IMG.hero) moved to the QFI section background.
- iteration_10.json: 100% pass (cinemagraph testids render, SIGNALS increments 1247->1255,
  CTAs route to /contact & /products, all below-hero sections, no "Flying Magnetometer"
  legacy text, nav + contact + waitlist regressions clean).
- NOTE: in PREVIEW; production (https://ghost-code-1.emergent.host) needs a REDEPLOY to
  show the cinemagraph.

## Update — SkyForge concept gallery (2026-06)
- Added auto-scrolling "Concept gallery" marquee (data-testid=skyforge-gallery) lower on
  /skyforge (after roadmap, before founder quote). Shows the 3 saucer renders
  (forest survey / alpine RECON-7 / airframe studio) in a seamless CSS marquee
  (.sf-marquee + .sf-marquee-track, 38s loop, pause-on-hover, prefers-reduced-motion off).
  Captioned glass frames, hover zoom. All 3 image URLs verified 200; DOM verified.

## Notes / Mocked
- CONTACT FORM IS FRONTEND-ONLY (no submission backend). It does not deliver messages.
