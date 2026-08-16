import { Reveal } from "@/components/Reveal";

/** Consistent eyebrow + title + subtitle block for every section. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary-tint px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-6 text-3xl font-bold text-balance sm:text-4xl lg:text-[2.625rem] lg:leading-[1.1]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
