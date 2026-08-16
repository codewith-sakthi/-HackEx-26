import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { TimelineSection } from "@/components/sections/TimelineSection";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Event Timeline | HackEx'26" },
      {
        name: "description",
        content:
          "HackEx'26 schedule — registration, idea submission, shortlisting, hackathon day, mentoring, evaluation, final pitch and winner announcement.",
      },
      { property: "og:title", content: "HackEx'26 Timeline" },
      {
        property: "og:description",
        content: "Every milestone from registration to the winner announcement on 26 September 2026.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Timeline"
        title="Nine milestones, zero surprises"
        subtitle="Mark your calendar. Every date below is mirrored as a reminder in the leader dashboard."
      />
      <TimelineSection inPage />
      <CtaBand />
    </>
  );
}
