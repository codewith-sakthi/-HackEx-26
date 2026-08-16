import { Reveal } from "@/components/Reveal";

/** Shared page header for inner routes (accounts for the fixed nav bar). */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary-tint px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-base text-balance text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
