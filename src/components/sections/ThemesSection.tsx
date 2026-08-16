import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { themeIcons } from "@/components/theme-icons";
import { themes } from "@/data/site";

export function ThemesSection({ detailed = false, inPage = false }: { detailed?: boolean; inPage?: boolean }) {
  return (
    <section className={`section-pad relative container-page ${inPage ? "pt-0" : ""}`}>
      {inPage ? null : (
        <SectionHeading
          eyebrow={inPage ? undefined : "Themes"}
          title="Five tracks. One weekend to prove your idea."
          subtitle="Pick a track during registration. Sample problem statements are guidance, not constraints — original problems within a theme are always welcome."
        />
      )}

      <div className={`${inPage ? "mt-0" : "mt-16"} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {themes.map((t, i) => {
          const Icon = themeIcons[t.icon] ?? themeIcons["Lightbulb"]!;
          return (
            <Reveal key={t.slug} delay={(i % 3) * 0.07}>
              <article className="glass-panel hover-float group relative h-full overflow-hidden rounded-3xl p-8">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20"
                />
                <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-soft text-primary-foreground shadow-soft">
                  <Icon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-xl font-semibold">{t.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.blurb}
                </p>

                {detailed ? (
                  <div className="relative mt-5">
                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                      Sample problems
                    </p>
                    <ul className="mt-3 space-y-2">
                      {t.problems.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
