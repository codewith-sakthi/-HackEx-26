import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FaqSection({ inPage = false }: { inPage?: boolean } = {}) {
  return (
    <section className={`section-pad mx-auto max-w-3xl px-6 ${inPage ? "pt-0" : ""}`}>
      {inPage ? null : (
        <SectionHeading
          eyebrow={inPage ? undefined : "FAQ"}
          title="Everything you'd ask before signing up"
          subtitle="Still unsure? Write to the organising team and we'll reply within a working day."
        />
      )}

      <Reveal className={inPage ? "mt-0" : "mt-16"}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="glass-panel rounded-2xl border-none px-6"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
