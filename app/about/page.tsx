import Link from "next/link";
import { Rocket, ArrowRight, Check } from "lucide-react";
import { IMG, DREAM_FUNNEL_URL, PHONE } from "@/lib/site";

export const metadata = {
  title: "About — Redheaded Stepchild Tech",
  description: "Who we are: a small Montana software lab building dignity-first tools.",
};

const beliefs = [
  "Software should be simple, not overwhelming.",
  "People deserve tools that respect their time and dignity.",
  "Real-world problems matter more than buzzwords.",
  "Small teams can build big things when they care.",
];

const values = [
  {
    title: "We've seen the gaps",
    body: "Crisis systems that confuse people. Government tools that break. Donation platforms that bury stories. We've lived through all of it — and decided to build something better.",
  },
  {
    title: "We build with purpose",
    body: "Every system starts with a real person in mind — someone who needs help, clarity, or a tool that actually works. We don't build for corporations. We build for people.",
  },
  {
    title: "Small team, real impact",
    body: "We're not a giant company. We're a small, focused team that moves fast, listens closely, and solves real problems without layers of bureaucracy.",
  },
  {
    title: "Montana roots",
    body: "Based in Helena Valley — a place where people help each other and tools are built to last. Our work reflects that same honest, practical spirit.",
  },
];

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-35"
          style={{ backgroundImage: `url(${IMG.milkyway})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/70 to-void" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-28">
          <span className="eyebrow fade-up">// crew manifest</span>
          <h1 className="fade-up mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-white md:text-6xl" style={{ animationDelay: "0.1s" }}>
            Built by people who've lived through broken systems.
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-mist" style={{ animationDelay: "0.2s" }}>
            Redheaded Stepchild Tech is a small, independent software lab based in Montana.
            We build because we've been there. We fix things because we know what it's like
            when nobody else will.
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <span className="eyebrow">// what we believe</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              A short list we refuse to compromise on.
            </h2>
          </div>
          <ul className="space-y-4">
            {beliefs.map((b) => (
              <li key={b} className="glass flex items-start gap-4 rounded-xl p-5">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-crimson/15">
                  <Check className="h-4 w-4 text-crimson" />
                </span>
                <span className="text-mist">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="glass panel-hover rounded-2xl p-8" data-testid={`value-${v.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              <h3 className="font-display text-xl font-semibold text-white">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="glass rounded-2xl p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-white">Want to connect?</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-mist">
            Call mission control at <span className="font-mono text-ion">{PHONE}</span>, or
            take a look at our live flagship platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={DREAM_FUNNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="about-cta-dreamfunnel">
              <Rocket className="h-5 w-5" /> Visit Dream Funnel
            </a>
            <Link href="/contact" className="btn-ghost" data-testid="about-cta-contact">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
