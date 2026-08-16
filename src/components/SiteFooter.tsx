import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { event, socials } from "@/data/site";

const quick = [
  { hash: "about", label: "About" },
  { hash: "themes", label: "Themes" },
  { hash: "timeline", label: "Timeline" },
  { hash: "prizes", label: "Prizes" },
] as const;

const more = [
  { hash: "sponsors", label: "Sponsors" },
  { hash: "faq", label: "FAQ" },
  { hash: "contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mesh-bg border-t border-border/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark size="lg" />

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {event.tagline} · {event.subline}. Organised by the {event.club}, {event.department}.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {quick.map((l) => (
              <li key={l.hash}>
                <Link to="/" hash={l.hash} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {more.map((l) => (
              <li key={l.hash}>
                <Link to="/" hash={l.hash} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}

          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.14em] uppercase">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{event.college}, Komarapalayam, Namakkal — 637303</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${event.email}`} className="hover:text-primary">
                {event.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${event.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {event.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {event.club} · {event.college}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
