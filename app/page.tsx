import Link from "next/link";
import {
  Rocket,
  Boxes,
  ShieldCheck,
  BookOpen,
  Radar,
  ArrowRight,
  ExternalLink,
  Compass,
  Zap,
  HeartHandshake,
  Mountain,
  Satellite,
  Sparkles,
} from "lucide-react";
import { SYSTEMS, IMG, DREAM_FUNNEL_URL } from "@/lib/site";

const sysIcons: Record<string, React.ElementType> = {
  Rocket,
  Boxes,
  ShieldCheck,
  BookOpen,
  Radar,
};

const statusStyle: Record<string, string> = {
  LIVE: "text-green-400 border-green-400/40 bg-green-400/10",
  "IN BUILD": "text-amber border-amber/40 bg-amber/10",
  PLANNED: "text-ion border-ion/40 bg-ion/10",
};

const features = [
  {
    icon: Compass,
    title: "Dignity-First Design",
    body: "Every system starts with one question — how do we make this easier for the person using it? Not the company. The person.",
  },
  {
    icon: Zap,
    title: "Replace Clunky Systems",
    body: "We rebuild outdated tools — donation platforms, procurement, community exchanges — into clean, modern, Montana-built solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Real-World Problems",
    body: "Our systems come from lived experience — crisis, broken government tools, and communities that need better options.",
  },
  {
    icon: Satellite,
    title: "High-Tech, Human-Scale",
    body: "Drones, magnetometers, and AI advocates — advanced engineering aimed squarely at helping ordinary people.",
  },
  {
    icon: Mountain,
    title: "Montana Built",
    body: "Based in Helena Valley. We build with the honesty, grit, and practicality Montana is known for.",
  },
  {
    icon: Sparkles,
    title: "Small Team, Big Impact",
    body: "We're not a corporation. We're a small shop that moves fast, listens closely, and ships tools that work.",
  },
];

const telemetry = [
  { label: "Systems in orbit", value: "05" },
  { label: "Base of operations", value: "MT" },
  { label: "Corporate layers", value: "00" },
  { label: "Mission uptime", value: "100%" },
];

const roadmap = [
  {
    phase: "RST 1.0",
    title: "The Foundation",
    body: "Dream Funnel, Swapmeet, MORES, Stories, and the Flying Magnetometer. Clean interfaces, simple workflows, tools built for real people.",
  },
  {
    phase: "RST 2.0",
    title: "The Form Filler Outer",
    body: "A talking cyber pal that helps people fill out forms and navigate confusing systems with clarity and confidence. No more overwhelm.",
  },
  {
    phase: "RST 3.0",
    title: "The Advocate",
    body: "A full digital advocate that stands beside people navigating housing, medical, legal, and crisis situations. Real support, when it matters.",
  },
];

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `url(${IMG.earthNight})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/60 via-void/80 to-void" />

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
          <div className="fade-up flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 live-dot" />
            <span className="eyebrow">Helena Valley · Montana · EST. 2026</span>
          </div>

          <h1
            className="fade-up mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            High-technology tools for the
            <span className="text-gradient"> people the world overlooked.</span>
          </h1>

          <p
            className="fade-up mt-8 max-w-2xl text-lg leading-relaxed text-mist"
            style={{ animationDelay: "0.28s" }}
          >
            Most systems today are built backwards — complicated first, people second.
            Redheaded Stepchild Tech flips that. We engineer clean, dignity-first systems
            that respect your time and actually solve the problems you face.
          </p>

          <div
            className="fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={DREAM_FUNNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="hero-dreamfunnel"
            >
              <Rocket className="h-5 w-5" /> Launch Dream Funnel
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
            <Link href="/products" className="btn-ghost" data-testid="hero-explore">
              Explore our systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Telemetry strip */}
          <div
            className="fade-up mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-4"
            style={{ animationDelay: "0.55s" }}
            data-testid="telemetry-strip"
          >
            {telemetry.map((t) => (
              <div key={t.label} className="glass px-6 py-6">
                <div className="font-display text-3xl font-bold text-white">{t.value}</div>
                <div className="eyebrow mt-2 text-[0.6rem]">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY RST ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">// why rst</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Engineered around the person, not the bureaucracy.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass panel-hover rounded-2xl p-7"
              data-testid={`feature-${f.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                <f.icon className="h-6 w-6 text-ion" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SYSTEMS ---------------- */}
      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 -z-10 opacity-25"
          style={{
            backgroundImage: `url(${IMG.nebulaBlue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-void/80" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">// active payload</span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                Our systems
              </h2>
            </div>
            <p className="max-w-sm text-sm text-mist">
              Each one replaces something broken with something better. Clean engineering,
              real-world impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SYSTEMS.map((s) => {
              const Icon = sysIcons[s.icon] ?? Boxes;
              const Card = (
                <div className="glass panel-hover flex h-full flex-col rounded-2xl p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-crimson/30 bg-crimson/10">
                      <Icon className="h-6 w-6 text-crimson" />
                    </span>
                    <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] ${statusStyle[s.status]}`}>
                      {s.status}
                    </span>
                  </div>
                  <div className="mt-5 font-mono text-xs text-ion">{s.code}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{s.blurb}</p>
                  {s.external && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-crimson">
                      Launch system <ExternalLink className="h-4 w-4" />
                    </span>
                  )}
                </div>
              );
              return s.href ? (
                <a
                  key={s.code}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  data-testid={`system-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                >
                  {Card}
                </a>
              ) : (
                <div key={s.code} data-testid={`system-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  {Card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- ROADMAP ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">// flight plan</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            The future of RST
          </h2>
          <p className="mt-4 text-mist">
            We're just getting started. Here's where the mission is heading.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map((r, i) => (
            <div key={r.phase} className="glass panel-hover relative rounded-2xl p-7">
              <span className="font-mono text-6xl font-bold text-white/5">
                0{i + 1}
              </span>
              <div className="-mt-8">
                <span className="eyebrow text-crimson">{r.phase}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-line">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url(${IMG.galaxy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
          <div className="relative px-8 py-20 md:px-16">
            <span className="eyebrow">// ready for launch</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Building dignity-first tools for people who've been overlooked.
            </h2>
            <p className="mt-5 max-w-xl text-mist">
              Start with Dream Funnel — our live donation and support platform — or reach
              out and tell us what's broken. We'll help you fix it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={DREAM_FUNNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                data-testid="cta-dreamfunnel"
              >
                <Rocket className="h-5 w-5" /> Visit Dreamfunnel.net
                <ExternalLink className="h-4 w-4 opacity-70" />
              </a>
              <Link href="/contact" className="btn-ghost" data-testid="cta-contact">
                Contact mission control <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
