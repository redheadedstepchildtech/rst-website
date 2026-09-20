"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Rocket, ArrowRight, Radar, Activity, Gauge, Waypoints } from "lucide-react";

const MOTES = [
  { left: "24%", delay: "0s", dur: "8s" },
  { left: "38%", delay: "1.6s", dur: "10s" },
  { left: "52%", delay: "3.1s", dur: "9s" },
  { left: "63%", delay: "0.8s", dur: "11s" },
  { left: "71%", delay: "2.4s", dur: "8.5s" },
  { left: "46%", delay: "4.2s", dur: "10.5s" },
];

export default function SkyForgeCinemagraph({ imageUrl }: { imageUrl: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [signals, setSignals] = useState(1247);

  useEffect(() => {
    const id = setInterval(() => {
      setSignals((s) => s + Math.floor(Math.random() * 4) + 1);
    }, 850);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      if (y > 900) return;
      imgRef.current.style.setProperty("--sf-parallax", `${y * 0.18}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="sf-cinema" data-testid="skyforge-cinemagraph">
      {/* animated base render */}
      <div
        ref={imgRef}
        className="sf-cinema-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: "translateY(var(--sf-parallax, 0px))",
        }}
      />
      {/* scanning + atmosphere layers */}
      <div className="sf-scanzone" />
      <div className="sf-sweep" />
      <div className="sf-fog" />
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="sf-mote"
          style={{ left: m.left, bottom: "18%", animationDelay: m.delay, animationDuration: m.dur }}
        />
      ))}

      {/* readability wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/55 via-void/70 to-void" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-transparent" />

      {/* HUD corner brackets */}
      <div className="sf-hud-bracket left-5 top-24 border-b-0 border-r-0" />
      <div className="sf-hud-bracket right-5 top-24 border-b-0 border-l-0" />
      <div className="sf-hud-bracket bottom-6 left-5 border-t-0 border-r-0" />
      <div className="sf-hud-bracket bottom-6 right-5 border-t-0 border-l-0" />

      {/* content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
        {/* live survey badge */}
        <span
          className="inline-flex items-center gap-2 rounded-full border border-ion/40 bg-void/60 px-4 py-1.5 font-mono text-xs text-ion backdrop-blur"
          data-testid="skyforge-live-badge"
        >
          <span className="live-dot h-2 w-2 rounded-full bg-[#50ffa0]" />
          SURVEY IN PROGRESS · SECTOR MT-07
        </span>

        <h1 className="fade-up mt-6 font-display text-6xl font-bold leading-[1.02] tracking-tight text-white md:text-8xl">
          Sky<span className="text-gradient">Forge</span>{" "}
          <span className="text-3xl text-mist md:text-4xl">RASP</span>
        </h1>
        <p
          className="fade-up mt-6 max-w-2xl text-xl font-semibold leading-relaxed text-white"
          style={{ animationDelay: "0.12s" }}
        >
          A radical departure from conventional drone design.
        </p>
        <p
          className="fade-up mt-4 max-w-2xl text-lg leading-relaxed text-mist"
          style={{ animationDelay: "0.2s" }}
        >
          SkyForge is a next-generation Rugged Aerial Sensing Platform engineered for geophysical
          mapping, environmental monitoring, and field operations in harsh environments. Watch it
          thread the tree line and read the earth beneath it in real time — where fragile
          quadcopters simply can&apos;t go.
        </p>

        {/* live telemetry strip */}
        <div
          className="fade-up mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animationDelay: "0.26s" }}
          data-testid="skyforge-telemetry"
        >
          {[
            { icon: Gauge, label: "ALT AGL", value: "38 m" },
            { icon: Radar, label: "SCAN", value: "MgO / TMR" },
            { icon: Activity, label: "SIGNALS", value: signals.toLocaleString(), live: true },
            { icon: Waypoints, label: "MODE", value: "AUTO-AVOID" },
          ].map((t) => (
            <div key={t.label} className="glass rounded-xl px-3 py-2.5">
              <div className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-mist">
                <t.icon className="h-3 w-3 text-ion" /> {t.label}
              </div>
              <div
                className={`mt-1 font-display text-lg font-semibold ${t.live ? "text-[#50ffa0]" : "text-white"}`}
                data-testid={t.live ? "skyforge-signal-count" : undefined}
              >
                {t.value}
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.34s" }}>
          <Link href="/contact" className="btn-primary" data-testid="skyforge-cta-demo">
            <Rocket className="h-5 w-5" /> Request a demo
          </Link>
          <Link href="/products" className="btn-ghost" data-testid="skyforge-back-systems">
            All systems <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
