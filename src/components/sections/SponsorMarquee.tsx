import { sponsors } from "@/data/site";

/** Infinite logo marquee. Names stand in until real sponsor logos are uploaded. */
export function SponsorMarquee() {
  const row = [...sponsors, ...sponsors];
  return (
    <section className="overflow-hidden py-16">
      <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
        Powered by industry partners
      </p>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {row.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              className="glass flex h-16 w-44 items-center justify-center rounded-2xl"
            >
              <span className="font-display text-base font-semibold text-foreground/75">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
