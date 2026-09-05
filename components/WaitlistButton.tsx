"use client";

import { useState } from "react";
import { BellRing, Loader2, Check } from "lucide-react";

export default function WaitlistButton({ system }: { system: string }) {
  const slug = system.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, system, website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "done") {
    return (
      <span
        className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-400/10 px-4 py-2 font-mono text-xs text-green-400"
        data-testid={`waitlist-done-${slug}`}
      >
        <Check className="h-4 w-4" /> You&apos;re on the list
      </span>
    );
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-ghost text-sm"
        data-testid={`waitlist-open-${slug}`}
      >
        <BellRing className="h-4 w-4" /> Notify me
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xs" data-testid={`waitlist-form-${slug}`}>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label>Company (leave blank)</label>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-line bg-void/60 px-4 py-2 text-sm text-white placeholder-mist/50 outline-none transition-colors focus:border-ion"
          data-testid={`waitlist-email-${slug}`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary shrink-0 px-4 py-2 text-sm disabled:opacity-60"
          data-testid={`waitlist-submit-${slug}`}
        >
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Join"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-crimson" data-testid={`waitlist-error-${slug}`}>{error}</p>
      )}
    </form>
  );
}
