import { Award, Trophy } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { prizes } from "@/data/site";


export function PrizesSection({ inPage = false }: { inPage?: boolean } = {}) {
  return (
    <section className={`section-pad container-page ${inPage ? "pt-0" : ""}`}>
      {inPage ? null : (
        <SectionHeading
          eyebrow={inPage ? undefined : "Prizes"}
          title="₹1 Lakh+ in cash, plus everything that follows"
          subtitle="Cash prizes, internship interviews with partner companies, goodies for every finalist and verifiable certificates for all participants."
        />
      )}

      <div className={`${inPage ? "mt-0" : "mt-16"} grid items-stretch gap-6 lg:grid-cols-3`}>
        {prizes.map((p, i) => (
          <Reveal key={p.rank} delay={i * 0.08}>
            <article
              className={`hover-float relative flex h-full flex-col items-center overflow-hidden rounded-3xl p-8 text-center ${
                p.featured
                  ? "animated-gradient text-primary-foreground shadow-float lg:scale-[1.02]"
                  : "glass-panel"
              }`}
            >
              <span
                className={`inline-flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                  p.featured ? "bg-white/20" : "bg-primary-tint text-primary"
                }`}
              >
                {p.featured ? <Trophy className="size-6" /> : <Award className="size-6" />}
              </span>
              <h3 className="mt-6 text-sm font-semibold tracking-[0.16em] uppercase">{p.rank}</h3>
              <p className="font-display mt-2 text-4xl font-bold">{p.amount}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Certificate for all participants.
        </p>
      </Reveal>

    </section>
  );
}
