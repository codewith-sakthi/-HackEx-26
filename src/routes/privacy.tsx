import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | HackEx'26" },
      {
        name: "description",
        content:
          "How the HackEx'26 organising team collects, uses and protects participant data during registration and the event.",
      },
      { property: "og:title", content: "HackEx'26 Privacy Policy" },
      { property: "og:description", content: "Participant data handling for HackEx'26." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information we collect",
    p: "Registration data (name, college, department, year, email, phone, gender), team and idea details, uploaded documents, and images captured during the event.",
  },
  {
    h: "How we use it",
    p: "To verify eligibility, communicate event updates, evaluate submissions, issue certificates and publish anonymised participation statistics.",
  },
  {
    h: "Sharing",
    p: "Idea abstracts are shared with the jury and assigned mentors under confidentiality. Sponsors receive aggregate statistics only, never personal contact details, unless you opt in.",
  },
  {
    h: "Retention",
    p: "Registration records are retained for two academic years, after which personal identifiers are removed while keeping anonymised statistics.",
  },
  {
    h: "Your rights",
    p: "Write to the organising team to access, correct or delete your data. Requests are actioned within 15 working days.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated 1 January 2026. Plain-language summary of how participant data is handled."
      />
      <section className="mx-auto max-w-3xl px-6 pt-4 pb-24">
        <div className="glass-panel space-y-7 rounded-3xl p-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-lg font-semibold">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
