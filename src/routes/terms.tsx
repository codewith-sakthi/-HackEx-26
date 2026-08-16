import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | HackEx'26" },
      {
        name: "description",
        content:
          "Participation terms, eligibility, intellectual property, conduct and disqualification rules for HackEx'26.",
      },
      { property: "og:title", content: "HackEx'26 Terms & Conditions" },
      { property: "og:description", content: "Participation rules and IP policy for HackEx'26." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Eligibility",
    p: "Open to students enrolled in a recognised Indian institution at the time of the event. A valid college ID is mandatory at check-in.",
  },
  {
    h: "Team composition",
    p: "Teams of 2 to 4 members. The registered leader is the single point of contact and is responsible for all submissions.",
  },
  {
    h: "Intellectual property",
    p: "Teams retain full ownership of everything they build. Organisers and sponsors receive a non-exclusive right to showcase submissions for promotional purposes.",
  },
  {
    h: "Code of conduct",
    p: "Harassment, plagiarism, hardware tampering and misuse of campus facilities lead to immediate disqualification and removal from campus.",
  },
  {
    h: "Submissions",
    p: "All code must be authored during the 32-hour window. Repositories are reviewed for commit history. Pre-built products are disqualified.",
  },
  {
    h: "Changes",
    p: "The organising committee may revise the schedule, themes or prize structure with prior notice on this website and by email.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated 1 January 2026. By registering, your team agrees to the terms below."
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
