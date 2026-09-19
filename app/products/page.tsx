import Link from "next/link";
import {
  Rocket,
  Boxes,
  ShieldCheck,
  BookOpen,
  Radar,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { SYSTEMS, IMG, DREAM_FUNNEL_URL } from "@/lib/site";
import WaitlistButton from "@/components/WaitlistButton";

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
  PATENTED: "text-amber border-amber/50 bg-amber/15",
};

export const metadata = {
  title: "Systems — Redheaded Stepchild Tech",
  description: "The systems and platforms engineered by Redheaded Stepchild Tech.",
};

export default function ProductsPage() {
  return (
    <div data-testid="products-page">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ backgroundImage: `url(${IMG.galaxy})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/70 to-void" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:pt-28">
          <span className="eyebrow fade-up">// payload manifest</span>
          <h1 className="fade-up mt-4 max-w-4xl font-display text-5xl font-bold leading-tight text-white md:text-6xl" style={{ animationDelay: "0.1s" }}>
            Systems &amp; platforms
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg text-mist" style={{ animationDelay: "0.2s" }}>
            We build modern, dignity-first systems that replace old, clunky, outdated tools.
            Every platform is designed to solve real-world problems with clarity, speed, and
            compassion — without the corporate nonsense.
          </p>
        </div>
      </section>

      {/* Systems list */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-6">
          {SYSTEMS.map((s) => {
            const Icon = sysIcons[s.icon] ?? Boxes;
            return (
              <div
                key={s.code}
                className="glass panel-hover grid gap-6 rounded-2xl p-8 md:grid-cols-[auto_1fr_auto] md:items-center"
                data-testid={`product-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <span className="grid h-16 w-16 place-items-center rounded-2xl border border-crimson/30 bg-crimson/10">
                  <Icon className="h-8 w-8 text-crimson" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-ion">{s.code}</span>
                    <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] ${statusStyle[s.status]}`}>
                      {s.status}
                    </span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">{s.name}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">{s.blurb}</p>
                </div>
                {s.external && s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                    data-testid={`product-launch-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    Launch <ExternalLink className="h-4 w-4" />
                  </a>
                ) : s.href ? (
                  <Link
                    href={s.href}
                    className="btn-ghost text-sm"
                    data-testid={`product-learn-${s.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <WaitlistButton system={s.name} />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 glass rounded-2xl p-10 text-center">
          <h3 className="font-display text-2xl font-semibold text-white">
            Dream Funnel is live right now.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-mist">
            Our flagship dignity-first donation platform is up and helping people today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={DREAM_FUNNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="products-cta-dreamfunnel"
            >
              <Rocket className="h-5 w-5" /> Visit Dreamfunnel.net
            </a>
            <Link href="/contact" className="btn-ghost" data-testid="products-cta-contact">
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
