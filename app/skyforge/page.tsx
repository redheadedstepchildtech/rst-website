import Link from "next/link";
import {
  Radar,
  Plane,
  Layers,
  ShieldCheck,
  Wallet,
  Cpu,
  BadgeCheck,
  Mountain,
  Landmark,
  Leaf,
  Zap,
  ArrowRight,
  Rocket,
} from "lucide-react";
import { DREAM_FUNNEL_URL } from "@/lib/site";

export const metadata = {
  title: "SkyForge — Patented Drone Magnetometer | Redheaded Stepchild Tech",
  description:
    "SkyForge is a patented drone-borne magnetometer that maps subsurface magnetic anomalies from the air — rugged, autonomous, and genuinely affordable.",
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1584598416417-84bd357908ef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  drone: "https://images.unsplash.com/photo-1488263590619-bc1fff43b6c1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  terrain: "https://images.unsplash.com/photo-1576767810583-046a1f7da256?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
};

const capabilities = [
  { icon: Radar, title: "Drone-Borne Magnetometer", body: "A precision magnetometer engineered to fly — capturing clean, high-resolution magnetic data from the air." },
  { icon: Plane, title: "Autonomous Survey Flight", body: "Pre-planned, repeatable flight paths cover terrain that's dangerous, remote, or impossible to survey on foot." },
  { icon: Layers, title: "Subsurface Anomaly Mapping", body: "Detects and maps magnetic anomalies hidden beneath the surface — no digging required." },
  { icon: ShieldCheck, title: "Rugged & Field-Ready", body: "Built for the backcountry: wind, cold, dust, and long days far from the nearest road." },
  { icon: Wallet, title: "Genuinely Affordable", body: "Enterprise-grade geophysics without the enterprise price tag — accessible to small crews and researchers." },
  { icon: Cpu, title: "Real-Time Geophysical Software", body: "Turns raw magnetic readings into readable maps and models on the spot, in the field." },
];

const useCases = [
  { icon: Mountain, title: "Mineral Exploration", body: "Locate ore bodies and geological structures faster and cheaper than traditional ground surveys." },
  { icon: Landmark, title: "Archaeology & Heritage", body: "Reveal buried features and sites without disturbing a single grain of soil." },
  { icon: Leaf, title: "Environmental & Utility", body: "Map buried infrastructure, pipelines, and environmental hazards from a safe distance." },
  { icon: Zap, title: "UXO & Buried Metal", body: "Detect unexploded ordnance and ferrous objects across wide, hard-to-reach areas." },
];

const stats = [
  { k: "U.S. Patent", v: "Granted" },
  { k: "Platform", v: "Airborne" },
  { k: "Reads", v: "Subsurface" },
  { k: "Build", v: "Field-ready" },
];

export default function SkyForgePage() {
  return (
    <div data-testid="skyforge-page">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-45"
          style={{ backgroundImage: `url(${IMG.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/70 via-void/85 to-void" />
        <div className="warp-lines absolute inset-0 -z-10" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/50 bg-amber/10 px-4 py-1.5 font-mono text-xs text-amber" data-testid="skyforge-patent-badge">
            <BadgeCheck className="h-4 w-4" /> U.S. PATENT GRANTED
          </span>
          <h1 className="fade-up mt-6 max-w-4xl font-display text-6xl font-bold leading-[1.02] tracking-tight text-white md:text-8xl">
            Sky<span className="text-gradient">Forge</span>
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-xl leading-relaxed text-mist" style={{ animationDelay: "0.15s" }}>
            The drone that sees beneath the surface. A patented airborne magnetometer that maps
            the invisible — magnetic anomalies buried deep underground — from hundreds of feet in the air.
          </p>
          <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <Link href="/contact" className="btn-primary" data-testid="skyforge-cta-demo">
              <Rocket className="h-5 w-5" /> Request a demo
            </Link>
            <Link href="/products" className="btn-ghost" data-testid="skyforge-back-systems">
              All systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-4" style={{ animationDelay: "0.45s" }}>
            {stats.map((s) => (
              <div key={s.k} className="glass px-6 py-6">
                <div className="font-display text-2xl font-bold text-white">{s.v}</div>
                <div className="eyebrow mt-2 text-[0.6rem]">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">// the breakthrough</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
              Geophysics that flies.
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Traditional magnetic surveys mean crews walking grids for days, dragging equipment across
              rough ground. SkyForge puts a precision magnetometer in the air — mounting custom hardware
              to an autonomous drone and feeding readings into geophysical software that maps subsurface
              anomalies in real time.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              The result is faster, safer, and dramatically cheaper surveys — a genuine revelation in what
              a drone can do, and now protected by a granted U.S. patent.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img src={IMG.drone} alt="SkyForge survey drone in flight over mountainous terrain" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: `url(${IMG.terrain})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 -z-10 bg-void/85" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">// capabilities</span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">What SkyForge does</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="glass panel-hover rounded-2xl p-7" data-testid={`skyforge-cap-${c.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                  <c.icon className="h-6 w-6 text-ion" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">// in the field</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">Where it earns its keep</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title} className="glass panel-hover rounded-2xl p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-crimson/30 bg-crimson/10">
                <u.icon className="h-6 w-6 text-crimson" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{u.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="glass rounded-3xl p-10 text-center md:p-16">
          <span className="eyebrow">// take flight</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Want to see SkyForge survey your site?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-mist">
            Reach out for a demo, spec sheet, or to talk through a survey. We'd love to show you what
            it can find.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary" data-testid="skyforge-cta-contact">
              <Rocket className="h-5 w-5" /> Request a demo
            </Link>
            <a href={DREAM_FUNNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost" data-testid="skyforge-cta-dreamfunnel">
              Explore Dream Funnel <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
