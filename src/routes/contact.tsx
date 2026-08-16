import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact the HackEx'26 Team" },
      {
        name: "description",
        content:
          "Reach the HackEx'26 organising team at Excel Engineering College — venue map, email, phone, social links and a contact form.",
      },
      { property: "og:title", content: "Contact HackEx'26" },
      {
        property: "og:description",
        content: "Sponsorship, travel and theme queries — we reply within a working day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're on campus and online"
        subtitle="Drop us a note, call the student coordinators, or plan your route with the map below."
      />
      <ContactSection inPage />
    </>
  );
}
