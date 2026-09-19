import Link from "next/link";
import { Radio, Rocket, Phone, Mail, MapPin } from "lucide-react";
import { DREAM_FUNNEL_URL, PHONE, EMAIL, LOCATION } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-crimson/50 bg-crimson/10">
                <Radio className="h-5 w-5 text-crimson" />
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-white">
                Redheaded Stepchild <span className="text-crimson">Tech</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              A small Montana software lab building dignity-first, high-technology
              tools for people the world overlooked. Clean systems. Real impact.
            </p>
            <a
              href={DREAM_FUNNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 text-sm"
              data-testid="footer-dreamfunnel"
            >
              <Rocket className="h-4 w-4" /> Launch Dream Funnel
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="eyebrow mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-mist">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/products" className="hover:text-white">Systems</Link></li>
              <li><Link href="/skyforge" className="hover:text-white">SkyForge</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-4">Comms</h4>
            <ul className="space-y-3 text-sm text-mist">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-ion" /> {PHONE}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-ion" /> {EMAIL}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ion" /> {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-mist md:flex-row">
          <p className="font-mono">© 2026 Redheaded Stepchild Tech™ · All systems reserved</p>
          <p className="font-mono">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400 live-dot align-middle" />
            All systems nominal · Montana
          </p>
        </div>
      </div>
    </footer>
  );
}
