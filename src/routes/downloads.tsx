import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { downloads } from "@/data/site";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Downloads — Rule Book, Brochure & Schedule | HackEx'26" },
      {
        name: "description",
        content:
          "Download the HackEx'26 rule book, brochure, hour-by-hour schedule and the mandatory abstract submission template.",
      },
      { property: "og:title", content: "HackEx'26 Downloads" },
      {
        property: "og:description",
        content: "Rule book, brochure, schedule and abstract template.",
      },
    ],
  }),
  component: DownloadsPage,
});

function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Everything in one place"
        subtitle="Documents are managed from the admin panel — files upload once the backend is connected."
      />

      <section className="mx-auto max-w-4xl px-6 pt-8 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          {downloads.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.07}>
              <article className="glass-panel hover-float flex h-full flex-col rounded-3xl p-8">
                <span className="icon-badge">
                  <FileText className="size-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">{d.title}</h2>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{d.desc}</p>
                <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground">
                  {d.size}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 self-start"
                  onClick={() => toast.info(`${d.title} will be available once files are uploaded.`)}
                >
                  <Download /> Download
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
