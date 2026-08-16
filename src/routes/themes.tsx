import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ThemesSection } from "@/components/sections/ThemesSection";

export const Route = createFileRoute("/themes")({
  head: () => ({
    meta: [
      { title: "Hackathon Themes | HackEx'26" },
      {
        name: "description",
        content:
          "Twelve HackEx'26 tracks — Healthcare AI, Industry 4.0, EdTech, FinTech, Cyber Security, Agriculture, IoT, Robotics and more, with sample problem statements.",
      },
      { property: "og:title", content: "HackEx'26 Themes" },
      {
        property: "og:description",
        content: "12 tracks with sample problem statements and suggested technology stacks.",
      },
    ],
  }),
  component: ThemesPage,
});

function ThemesPage() {
  return (
    <>
      <PageHero
        eyebrow="Themes"
        title="Choose your battlefield"
        subtitle="Each track ships with sample problem statements and a suggested stack — bring your own problem if it fits the theme."
      />
      <ThemesSection inPage detailed />
      <CtaBand />
    </>
  );
}
