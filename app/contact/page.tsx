"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Rocket, CheckCircle2, Loader2 } from "lucide-react";
import { PHONE, EMAIL, LOCATION, DREAM_FUNNEL_URL, IMG } from "@/lib/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{ backgroundImage: `url(${IMG.nebulaBlue})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/70 to-void" />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 md:pt-28">
          <span className="eyebrow fade-up">// open a channel</span>
          <h1 className="fade-up mt-4 max-w-3xl font-display text-5xl font-bold leading-tight text-white md:text-6xl" style={{ animationDelay: "0.1s" }}>
            Contact mission control
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-lg text-mist" style={{ animationDelay: "0.2s" }}>
            If you need to reach us, you're not a bother — you're the reason this exists.
            Question, idea, or something not working? We're here.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Comms panel */}
          <div className="glass h-fit rounded-2xl p-8" data-testid="contact-info">
            <span className="eyebrow">// direct comms</span>
            <div className="mt-6 space-y-6">
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="flex items-center gap-4 group" data-testid="contact-phone">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                  <Phone className="h-5 w-5 text-ion" />
                </span>
                <span>
                  <span className="block eyebrow text-[0.6rem]">Phone</span>
                  <span className="font-mono text-white group-hover:text-ion">{PHONE}</span>
                </span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group" data-testid="contact-email">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                  <Mail className="h-5 w-5 text-ion" />
                </span>
                <span>
                  <span className="block eyebrow text-[0.6rem]">Email</span>
                  <span className="font-mono text-white group-hover:text-ion">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-ion/30 bg-ion/10">
                  <MapPin className="h-5 w-5 text-ion" />
                </span>
                <span>
                  <span className="block eyebrow text-[0.6rem]">Location</span>
                  <span className="font-mono text-white">{LOCATION}</span>
                </span>
              </div>
            </div>

            <a
              href={DREAM_FUNNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full justify-center text-sm"
              data-testid="contact-dreamfunnel"
            >
              <Rocket className="h-4 w-4" /> Visit Dream Funnel
            </a>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8" data-testid="contact-form-panel">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center" data-testid="contact-success">
                <CheckCircle2 className="h-14 w-14 text-green-400" />
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">Message received</h3>
                <p className="mt-2 max-w-sm text-sm text-mist">
                  Thanks for reaching out, {form.name || "friend"}. We read every message —
                  we'll be in touch soon.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-ghost mt-8 text-sm"
                  data-testid="contact-reset"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} data-testid="contact-form">
                <div>
                  <label className="eyebrow mb-2 block text-[0.6rem]">Name (optional)</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-white placeholder-mist/50 outline-none transition-colors focus:border-ion"
                    placeholder="Your name"
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-[0.6rem]">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-white placeholder-mist/50 outline-none transition-colors focus:border-ion"
                    placeholder="you@example.com"
                    data-testid="contact-input-email"
                  />
                </div>
                <div>
                  <label className="eyebrow mb-2 block text-[0.6rem]">What&apos;s going on?</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="h-36 w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-white placeholder-mist/50 outline-none transition-colors focus:border-ion"
                    placeholder="Tell us what's happening..."
                    data-testid="contact-input-message"
                  />
                </div>
                {error && (
                  <div
                    className="rounded-xl border border-crimson/40 bg-crimson/10 px-4 py-3 text-sm text-crimson"
                    data-testid="contact-error"
                  >
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  data-testid="contact-submit"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send message
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-mist">
                  We read every message. Thank you for trusting us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
