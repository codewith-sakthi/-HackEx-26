import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/site";

export function StatsBand() {
  return (
    <section className="relative container-page -mt-8">
      <div className="glass-panel grid grid-cols-2 overflow-hidden rounded-3xl sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className="border-b border-primary/10 last:border-b-0 sm:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0"
          >
            <div className="flex h-full min-h-28 flex-col items-center justify-center px-4 py-6 text-center">
              <div className="font-display text-lg font-bold text-balance sm:text-xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 text-[0.68rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
