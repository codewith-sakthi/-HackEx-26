import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="container-page pb-24">
      <Reveal>
        <div className="animated-gradient relative overflow-hidden rounded-4xl px-8 py-16 text-center shadow-float">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgba(255,255,255,0.35),transparent_70%)]"
          />
          <h2 className="relative text-3xl font-bold text-balance text-primary-foreground sm:text-5xl">
            Your team. 32 hours. One shot.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Registration is free and closes on 10 September 2026. Only the team leader needs an
            account.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="xl" variant="secondary">
              <Link to="/register">
                Register your team <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="ghost"
              className="text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
            >
              <Link to="/downloads">Download rule book</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
