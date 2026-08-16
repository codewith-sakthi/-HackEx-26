import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { SponsorsSection } from "@/components/sections/SponsorsSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HackEx'26 | Techno Debuggers Club" },
      {
        name: "description",
        content:
          "About HackEx'26, the Techno Debuggers Club and the Department of CSE at Excel Engineering College — plus our sponsors.",
      },
      { property: "og:title", content: "About HackEx'26" },
      {
        property: "og:description",
        content: "Who runs HackEx'26, our industry partners and the community behind the event.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A hackathon with a department behind it"
        subtitle="HackEx'26 is student-run, faculty-backed and industry-judged — here is the team and our partners."
      />
      <AboutSection inPage />

      <div className="container-page pt-20">
        <SectionHeading
          eyebrow="Sponsors"
          title="Partners who back student builders"
          subtitle="Industry partners powering a 500+ participant national hackathon."
        />
      </div>
      <SponsorsSection inPage />

      <CtaBand />
    </>
  );
}
