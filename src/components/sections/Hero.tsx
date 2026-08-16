import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, BookOpen, Download, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import heroArt from "@/assets/hero-tech-blue.jpg";
import hackexLogo from "@/assets/hackex-logo.png.asset.json";
import { Countdown } from "@/components/Countdown";
import { ParticleField } from "@/components/ParticleField";
import { Button } from "@/components/ui/button";
import { event } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);
  const logoX = useTransform(sx, (v) => (v - 0.5) * 26);
  const logoY = useTransform(sy, (v) => (v - 0.5) * 16);
  const artX = useTransform(sx, (v) => (v - 0.5) * -40);

  const [logoSrc, setLogoSrc] = useState<string>("/hackex-logo.png");

  useEffect(() => {
    let fallbackSvg: HTMLImageElement | null = null;
    const tryUrl = hackexLogo?.url;
    if (!tryUrl) return; // keep server-rendered png until client verifies asset

    const tester = new Image();
    tester.onload = () => setLogoSrc(tryUrl);
    tester.onerror = () => {
      // fall back to local png
      setLogoSrc('/hackex-logo.png');
    };
    tester.src = tryUrl;

    return () => {
      tester.onload = null;
      tester.onerror = null;
      // nothing else to clean up
    };
  }, [hackexLogo?.url]);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Animated background layers */}
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <motion.img
        src={heroArt}
        alt=""
        aria-hidden
        width={1600}
        height={1000}
        style={{ x: artX }}
        className="pointer-events-none absolute inset-x-0 bottom-[-18%] h-[70%] w-full scale-110 object-cover opacity-[0.18] [mask-image:linear-gradient(to_bottom,transparent,black_35%,transparent)]"
      />
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full" />
      {/* Cursor-following spotlight */}
      <motion.div
        aria-hidden
        style={{ left: spotX, top: spotY }}
        className="pointer-events-none absolute -ml-64 -mt-64 h-128 w-128 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-primary/12 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-20 top-24 h-80 w-80 rounded-full bg-primary-soft/20 blur-3xl"
      />

      <div className="relative container-page">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase"
          >
            <Sparkles className="size-4 text-primary" />
            {event.tagline} · 25–26 September 2026
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-6 max-w-3xl text-sm font-semibold tracking-[0.18em] uppercase sm:text-base"
          >
            <span className="gradient-text">Technodebuggers Club</span>
            <span className="text-foreground/60"> and </span>
            <span className="gradient-text">Department of Computer Science and Engineering</span>
            <span className="mt-4 block">
              <span className="inline-flex items-center gap-2 mx-auto rounded-full bg-gradient-to-r from-primary/8 to-primary/6 px-3 py-1 sm:px-6 sm:py-2">
                <Sparkles className="size-4 text-primary" />
                <span className="text-[10px] sm:text-sm font-semibold tracking-[0.12em] sm:tracking-[0.18em] text-primary gradient-text">
                  Jointly Organised
                </span>
              </span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: logoX, y: logoY }}
            className="mt-8 flex justify-center"
          >
            <img
              src={logoSrc}
              alt="HackEx'26 — National Level Hackathon logo"
              width={1200}
              height={430}
              className="h-24 w-auto sm:h-36 lg:h-44"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base text-balance text-muted-foreground sm:text-lg"
          >
            {event.subline}. Build with the sharpest student engineers in the country — free
            entry, ₹1 Lakh+ in prizes and mentors who ship for a living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/register">
                Register Now <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/themes">Explore Themes</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
          >
            <Button asChild variant="ghost" size="sm">
              <Link to="/downloads">
                <Download /> Brochure
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/downloads">
                <BookOpen /> Rule Book
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mx-auto mt-12 w-full max-w-xl px-4"
          >
            <p className="mb-3 text-center text-xs sm:text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Hacking begins in
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <div role="status" aria-live="polite">
                  <Countdown target={event.startsAt} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
