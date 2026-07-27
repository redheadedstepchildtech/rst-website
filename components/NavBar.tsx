"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Radio, Rocket, Menu, X } from "lucide-react";
import { DREAM_FUNNEL_URL, PHONE } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Systems" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 glass border-b"
      data-testid="site-navbar"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" data-testid="nav-logo">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-crimson/50 bg-crimson/10">
            <Radio className="h-5 w-5 text-crimson" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-wide text-white">
              RST<span className="text-crimson"> TECH</span>
            </span>
            <span className="eyebrow text-[0.6rem]">// mission control</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex" data-testid="nav-links">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-mist hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="font-mono text-sm text-ion hover:text-white"
            data-testid="nav-phone"
          >
            {PHONE}
          </a>
          <a
            href={DREAM_FUNNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
            data-testid="nav-dreamfunnel"
          >
            <Rocket className="h-4 w-4" /> Dream Funnel
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line px-6 py-4 md:hidden" data-testid="nav-mobile-menu">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-mist hover:bg-white/5 hover:text-white"
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={DREAM_FUNNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center text-sm"
              data-testid="nav-mobile-dreamfunnel"
            >
              <Rocket className="h-4 w-4" /> Launch Dream Funnel
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
