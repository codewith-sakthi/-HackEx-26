import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | HackEx'26" },
      {
        name: "description",
        content:
          "Eligibility, team size, registration fee, accommodation, evaluation criteria and certificates — everything you need to know about HackEx'26.",
      },
      { property: "og:title", content: "HackEx'26 FAQ" },
      {
        property: "og:description",
        content: "Answers on eligibility, team size, accommodation and evaluation.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="If something is still unclear, the organising team replies within one working day."
      />
      <FaqSection inPage />
    </>
  );
}
