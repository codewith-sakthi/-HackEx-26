import { motion } from "motion/react";
import { Compass, Flag, Target } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { event } from "@/data/site";

const pillars = [
  {
    icon: Compass,
    title: "Vision",
    body: "To nurture a generation of engineers who solve real national problems with technology, empathy and craft.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "Give every student a stage, a mentor and a deadline — the three ingredients that turn ideas into working products.",
  },
  {
    icon: Flag,
    title: "Objectives",
    body: "Foster innovation culture, strengthen industry-academia links and build a portfolio-worthy prototype in 32 hours.",
  },
];

const cards = [
  {
    title: "About the Hackathon",
    body: `${event.name} is a 32-hour national level hackathon bringing together 500+ student builders from across India. Teams of 2–4 pick a theme, ship a working prototype on campus, and defend it before an industry jury. Registration is free, food and workspace are on us, and every finalist walks away with a certificate that means something.`,
  },
  {
    title: `About ${event.club}`,
    body: "Techno Debuggers is the flagship student technology club of the CSE department. We run weekly coding sprints, open-source contribution drives, CTF nights and industry masterclasses — and HackEx is our biggest annual production, entirely student-led from sponsorship to stage.",
  },
  {
    title: "About the Department of CSE",
    body: `The ${event.department} at ${event.college} is an autonomous, NBA-accredited department with strong placement outcomes, dedicated AI, IoT and cyber security labs, and a faculty team that actively publishes and mentors student research.`,
  },
];

const words = ["BUILD.", "THINK.", "INNOVATE."];

function AnimatedTagline() {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        {words.map((w, i) => (
          <motion.span
            key={w}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-text font-display text-2xl font-bold tracking-[0.12em] sm:text-4xl"
          >
            {w}
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-4 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase sm:text-sm"
      >
        Innovate today, impact tomorrow.
      </motion.p>
    </div>
  );
}

export function AboutSection({ inPage = false }: { inPage?: boolean } = {}) {
  return (
    <section className={`section-pad container-page ${inPage ? "pt-0" : ""}`}>
      {inPage ? null : (
        <SectionHeading
          eyebrow={inPage ? undefined : "About"}
          title="Built by students, judged by the industry"
          subtitle="A national stage hosted on an autonomous campus, run with the standards of a professional product conference."
        />
      )}

      <div className={inPage ? "mt-0" : "mt-16"}>
        <AnimatedTagline />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="hover-float h-full rounded-3xl border border-border bg-card p-8">
              <span className="icon-badge">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-justify text-muted-foreground">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="glass-panel hover-float h-full rounded-3xl p-8">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-justify text-muted-foreground">
                {c.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
