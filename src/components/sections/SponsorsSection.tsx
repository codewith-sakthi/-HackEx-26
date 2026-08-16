import { Handshake } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { event, sponsors } from "@/data/site";

/**
 * Partners / Sponsors.
 * Shows a "coming soon" placeholder while `sponsors` in src/data/site.ts is empty.
 * Add entries to that array (name + tier) and the grid renders automatically.
 */
export function SponsorsSection({ inPage = false }: { inPage?: boolean } = {}) {
  return (
    <section className={`section-pad container-page ${inPage ? "pt-0" : ""}`}>
      {inPage ? null : (
        <SectionHeading
          eyebrow="Partners"
          title="Powered by people who back builders"
          subtitle="Sponsorship slots for HackEx'26 are open. Partner with us to reach hundreds of student engineers."
        />
      )}

      {sponsors.length === 0 ? (
        <Reveal>
          <div className="glass-panel mt-12 flex flex-col items-center gap-4 rounded-3xl px-8 py-16 text-center">
            <span className="icon-badge">
              <Handshake className="size-6" />
            </span>
            <p className="text-xl font-semibold">Sponsors coming soon</p>
            <p className="max-w-xl text-sm text-muted-foreground">
              Our partner line-up will be announced shortly. For sponsorship enquiries, write to{" "}
              <a className="text-primary underline underline-offset-4" href={`mailto:${event.email}`}>
                {event.email}
              </a>
              .
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 0.06}>
              <div className="glass-panel hover-float flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-8 text-center">
                <p className="text-lg font-semibold">{s.name}</p>
                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {s.tier}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
