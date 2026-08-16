import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { timeline } from "@/data/site";

export function TimelineSection({ inPage = false }: { inPage?: boolean } = {}) {
  return (
    <section className={`section-pad relative overflow-hidden ${inPage ? "pt-0" : ""}`}>
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6">
        {inPage ? null : (
          <SectionHeading
            eyebrow={inPage ? undefined : "Timeline"}
            title="From registration to the winner's stage"
            subtitle="Every milestone is mirrored in your leader dashboard with email and in-app reminders."
          />
        )}

        <ol className={`relative ${inPage ? "mt-0" : "mt-16"} ml-4 space-y-8 border-l-2 border-dashed border-primary/25 pl-8 sm:ml-8`}>
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={0.04 * i}>
              <li className="relative">
                <span className="absolute -left-[2.6rem] top-1.5 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-soft text-[0.65rem] font-bold text-primary-foreground shadow-soft">
                  {i + 1}
                </span>
                <div className="glass-panel hover-float rounded-3xl p-6">
                  <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                    {t.date}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
