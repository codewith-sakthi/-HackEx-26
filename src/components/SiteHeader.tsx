import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

const nav = [
  { hash: "about", label: "About" },
  { hash: "themes", label: "Themes" },
  { hash: "timeline", label: "Timeline" },
  { hash: "prizes", label: "Prizes" },
  { hash: "sponsors", label: "Sponsors" },
  { hash: "faq", label: "FAQ" },
  { hash: "contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass" : "border border-transparent bg-transparent"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-tint hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/register">Register Now</Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-full p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-3 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-tint hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button asChild variant="hero" className="mt-3 w-full">
            <Link to="/register" onClick={() => setOpen(false)}>
              Register Now
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
