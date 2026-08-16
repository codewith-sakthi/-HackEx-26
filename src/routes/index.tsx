import { createFileRoute } from "@tanstack/react-router";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { PrizesSection } from "@/components/sections/PrizesSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { ThemesSection } from "@/components/sections/ThemesSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HackEx'26 — National Level Hackathon | 32 Hours of Innovation" },
      {
        name: "description",
        content:
          "Join HackEx'26, a free 32-hour national level hackathon with ₹1 Lakh+ prizes, hosted by Techno Debuggers Club at Excel Engineering College.",
      },
      { property: "og:title", content: "HackEx'26 — National Level Hackathon" },
      {
        property: "og:description",
        content: "32 hours non stop innovation. Free entry, ₹1 Lakh+ prize pool, 12 themes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBand />
      <div id="about" className="scroll-mt-28">
        <AboutSection />
      </div>
      <div id="themes" className="scroll-mt-28">
        <ThemesSection />
      </div>
      <div id="timeline" className="scroll-mt-28">
        <TimelineSection />
      </div>
      <div id="prizes" className="scroll-mt-28">
        <PrizesSection />
      </div>
      <div id="sponsors" className="scroll-mt-28">
        <SponsorsSection />
      </div>
      <div id="faq" className="scroll-mt-28">
        <FaqSection />
      </div>
      <div id="contact" className="scroll-mt-28">
        <ContactSection />
      </div>
      <CtaBand />
    </>
  );
}
