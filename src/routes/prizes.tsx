import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { PrizesSection } from "@/components/sections/PrizesSection";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: "Prizes & Awards | HackEx'26" },
      {
        name: "description",
        content:
          "₹1 Lakh+ prize pool at HackEx'26 — champion, runner up, second runner up plus special awards for innovation, women in tech, UI and social impact.",
      },
      { property: "og:title", content: "HackEx'26 Prizes" },
      {
        property: "og:description",
        content: "Cash prizes, trophies, internship interviews, goodies and certificates.",
      },
    ],
  }),
  component: PrizesPage,
});

function PrizesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prizes"
        title="Rewarded for building something real"
        subtitle="Cash, trophies, internship interviews and certificates that are verifiable online."
      />
      <PrizesSection inPage />
      <CtaBand />
    </>
  );
}
