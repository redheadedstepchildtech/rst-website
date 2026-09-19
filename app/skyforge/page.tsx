import Link from "next/link";
import {
  ShieldCheck,
  Boxes,
  Cpu,
  Wrench,
  Compass,
  Disc3,
  RefreshCw,
  Shield,
  Radar,
  Atom,
  ArrowRight,
  Rocket,
  BadgeCheck,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "SkyForge RASP — Patented Flying-Saucer Sensing Platform | Redheaded Stepchild Tech",
  description:
    "SkyForge is a patented Rugged Aerial Sensing Platform (RASP): a flying-saucer airframe with enclosed coaxial propulsion and an MgO/TMR Quantum Field Imager for subsurface geophysical mapping where fragile quadcopters fail.",
};

const IMG = {
  hero: "https://static.prod-images.emergentagent.com/jobs/fe0bce13-7382-4bfb-9743-4a4f0838816c/images/765bffefd6fa10d6105778046df255801dc26922c4c88ba8e126fcd34a27422d.jpeg",
  studio: "https://static.prod-images.emergentagent.com/jobs/fe0bce13-7382-4bfb-9743-4a4f0838816c/images/8f669df9000a8ffa30ae3e08b6b01683c600010381d2fb298dc1988dd14b8ce4.jpeg",
  scan: "https://static.prod-images.emergentagent.com/jobs/fe0bce13-7382-4bfb-9743-4a4f0838816c/images/8d9967447fd7a38d4d0cb37f95a6254baafbb75bf4ca2a6806da91b134ae0f3e.jpeg",
};

const raspPillars = [
  { icon: ShieldCheck, title: "Ruggedization", body: "Designed for dust, cold, heat, moisture, vibration, and impact." },
  { icon: Boxes, title: "Modularity", body: "Payloads swap in minutes — no rewiring, no tools marathon." },
  { icon: Cpu, title: "Adaptive Sensing", body: "Onboard intelligence adjusts to terrain, interference, and mission profiles." },
  { icon: Wrench, title: "Field Repairability", body: "Components are accessible, replaceable, and built for real-world conditions." },
  { icon: Compass, title: "Mission Versatility", body: "One platform, many missions — from confined spaces to remote wilderness." },
];

const environments = ["Forests", "Mines", "Industrial sites", "Archaeological digs", "Remote wilderness", "Confined spaces"];

const propulsion = [
  { icon: Disc3, title: "Flying-Saucer Airframe", body: "Circular, enclosed, impact-resistant, and optimized for confined spaces." },
  { icon: RefreshCw, title: "Single-Prop + Tail Rotor", body: "A main lift prop with a stabilizing tail rotor — simple, efficient, rugged." },
  { icon: Atom, title: "Coaxial Counter-Rotating Props", body: "Two props on one axis cancel torque, boost lift, cut complexity, and remove the tail rotor entirely." },
  { icon: Shield, title: "Fully Enclosed Rotor System", body: "No exposed blades. No blade strikes. No field failures." },
];

const qfiBenefits = [
  "Ultra-low noise",
  "High sensitivity",
  "Stable readings in harsh environments",
  "Precise subsurface anomaly detection",
  "Real-time geophysical mapping",
];

const applications = [
  "Mineral exploration",
  "Environmental surveys",
  "Archaeological mapping",
  "Infrastructure assessment",
  "Buried object detection",
  "Fault line identification",
];

const roadmap = [
  { v: "v1.0", title: "SkyForge RASP Core", items: ["Flying-saucer airframe", "Single-prop / coaxial propulsion", "Ruggedized chassis", "QFI magnetics payload", "Modular payload architecture"] },
  { v: "v1.1", title: "Expanded Payload Ecosystem", items: ["Thermal imaging", "Environmental sensors", "Custom payload SDK"] },
  { v: "v2.0", title: "Autonomous Mission Planner", items: ["AI-assisted route generation", "Adaptive sensing profiles", "Real-time anomaly detection"] },
  { v: "v3.0", title: "Multi-Mission Field Deployment", items: ["Advanced geophysical mapping", "Industrial inspection", "Environmental monitoring"] },
];

export default function SkyForgePage() {
  return (
    <div data-testid="skyforge-page">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-55" style={{ backgroundImage: `url(${IMG.hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/60 via-void/85 to-void" />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/50 bg-amber/10 px-4 py-1.5 font-mono text-xs text-amber" data-testid="skyforge-patent-badge">
            <BadgeCheck className="h-4 w-4" /> PATENTED · RUGGED AERIAL SENSING PLATFORM
          </span>
          <h1 className="fade-up mt-6 font-display text-6xl font-bold leading-[1.02] tracking-tight text-white md:text-8xl">
            Sky<span className="text-gradient">Forge</span> <span className="text-3xl text-mist md:text-4xl">RASP</span>
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white" style={{ animationDelay: "0.12s" }}>
            A radical departure from conventional drone design.
          </p>
          <p className="fade-up mt-4 max-w-2xl text-lg leading-relaxed text-mist" style={{ animationDelay: "0.2s" }}>
            SkyForge is a next-generation Rugged Aerial Sensing Platform engineered for geophysical
            mapping, environmental monitoring, and field operations in harsh environments. Unlike
            fragile quadcopters, it uses a flying-saucer airframe with single-prop or dual
            counter-rotating propulsion — delivering unmatched stability, efficiency, and ruggedness.
          </p>
          <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.32s" }}>
            <Link href="/contact" className="btn-primary" data-testid="skyforge-cta-demo">
              <Rocket className="h-5 w-5" /> Request a demo
            </Link>
            <Link href="/products" className="btn-ghost" data-testid="skyforge-back-systems">
              All systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NOT A TOY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass rounded-3xl p-10 text-center md:p-14">
          <p className="font-display text-3xl font-bold text-white md:text-4xl">
            This is not a toy drone.
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-gradient md:text-3xl">
            It&apos;s a field-ready sensing platform.
          </p>
        </div>
      </section>

      {/* WHAT RASP MEANS */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">// what RASP means</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">A platform, not a drone</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {raspPillars.map((p) => (
            <div key={p.title} className="glass panel-hover rounded-2xl p-7" data-testid={`rasp-${p.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                <p.icon className="h-6 w-6 text-ion" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{p.body}</p>
            </div>
          ))}
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display text-xl font-semibold text-white">Operates where others can&apos;t</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {environments.map((e) => (
                <span key={e} className="rounded-full border border-line bg-void/50 px-3 py-1 font-mono text-xs text-mist">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPULSION */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="eyebrow">// radical propulsion</span>
              <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                The flying-saucer advantage
              </h2>
              <p className="mt-5 leading-relaxed text-mist">
                SkyForge&apos;s propulsion is a radical departure from the fragile four-prop layout used
                by commercial drones — and it&apos;s central to our patented claims.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {propulsion.map((p) => (
                  <div key={p.title} data-testid={`prop-${p.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-crimson/30 bg-crimson/10">
                        <p.icon className="h-5 w-5 text-crimson" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-3xl border border-line lg:order-2">
              <img src={IMG.studio} alt="SkyForge flying-saucer RASP — enclosed coaxial rotor and modular payload" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* QFI PAYLOAD */}
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: `url(${IMG.scan})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 -z-10 bg-void/85" />
        <div className="mx-auto max-w-7xl px-6">
          <span className="eyebrow">// the payload</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white md:text-5xl">
            MgO Magnetics + Quantum Field Imager
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-mist">
            SkyForge&apos;s magnetics payload uses MgO-based TMR (Tunnel MagnetoResistance) sensors —
            a field-grade geophysical instrument, not a hobby magnetometer, integrated into a rugged
            aerial platform. SkyForge + QFI = a flying geophysics lab.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
                <Radar className="h-5 w-5 text-ion" /> QFI delivers
              </h3>
              <ul className="mt-4 space-y-2">
                {qfiBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-mist">
                    <span className="h-1.5 w-1.5 rounded-full bg-ion" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-white">
                <Compass className="h-5 w-5 text-crimson" /> Applications
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {applications.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-mist">
                    <span className="h-1.5 w-1.5 rounded-full bg-crimson" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">// flight plan</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">Roadmap</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r) => (
            <div key={r.v} className="glass panel-hover rounded-2xl p-7">
              <span className="eyebrow text-crimson">{r.v}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{r.title}</h3>
              <ul className="mt-4 space-y-2">
                {r.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-mist">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-ion" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="glass rounded-3xl p-10 md:p-14">
          <Quote className="h-10 w-10 text-crimson" />
          <blockquote className="mt-6 font-display text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            &ldquo;SkyForge exists because the world doesn&apos;t need another fragile quadcopter. It
            needs a flying-saucer-class workhorse — a single-prop or coaxial rotor system that can
            survive the mission, not just the marketing brochure. Redheaded Stepchild Tech builds
            systems for the people who work in the cold, the dirt, the chaos. SkyForge is for them.&rdquo;
          </blockquote>
          <p className="mt-6 font-mono text-sm text-ion">— Founder, Redheaded Stepchild Tech</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="glass rounded-3xl p-10 text-center md:p-16">
          <span className="eyebrow">// take flight</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            Want SkyForge on your next survey?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-mist">
            Reach out for a demo, a spec sheet, or to talk through a mission. We&apos;d love to show you
            what it can find.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary" data-testid="skyforge-cta-contact">
              <Rocket className="h-5 w-5" /> Request a demo
            </Link>
            <Link href="/products" className="btn-ghost" data-testid="skyforge-cta-systems">
              Explore all systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
