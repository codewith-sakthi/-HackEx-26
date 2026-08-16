import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { coordinators, event, socials } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(3, "Add a short subject").max(150),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function ContactSection({ inPage = false }: { inPage?: boolean } = {}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setErrors({});
    e.currentTarget.reset();
    toast.success("Message sent — the organising team will reply within a working day.");
  }

  return (
    <section className={`section-pad relative overflow-hidden ${inPage ? "pt-0" : ""}`}>
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative container-page">
        {inPage ? null : (
          <SectionHeading
            eyebrow={inPage ? undefined : "Contact"}
            title="Talk to the organising team"
            subtitle="Sponsorship enquiries, travel questions or theme clarifications — we're one message away."
          />
        )}

        <div className="mt-6">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="mb-6 text-xl font-semibold tracking-tight">Coordinators</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {coordinators.map((c) => (
                  <div
                    key={c.email}
                    className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30 hover:bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <span className="icon-badge shrink-0">
                        <User className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {c.role}
                        </p>
                        <p className="font-semibold">{c.name}</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Phone className="size-4 shrink-0 text-primary" />
                        <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                          {c.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="size-4 shrink-0 text-primary" />
                        <a href={`mailto:${c.email}`} className="hover:text-primary">
                          {c.email}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass-panel h-full rounded-3xl p-8">
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="icon-badge shrink-0">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Venue</p>
                    <p className="text-sm text-muted-foreground">
                      {event.college}, Komarapalayam, Namakkal — 637303, Tamil Nadu
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="icon-badge shrink-0">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${event.email}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {event.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="icon-badge shrink-0">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">{event.phone}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary/20 px-3.5 py-1.5 text-xs font-semibold transition-colors hover:bg-primary-tint hover:text-primary"
                  >
                    {s.name}
                  </a>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Venue location map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(event.mapsQuery)}&output=embed`}
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="glass-panel h-full rounded-3xl p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Aravind Kumar" maxLength={100} />
                  {errors["name"] ? (
                    <p className="text-xs text-destructive">{errors["name"]}</p>
                  ) : null}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="you@college.edu" maxLength={255} />
                  {errors["email"] ? (
                    <p className="text-xs text-destructive">{errors["email"]}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Sponsorship enquiry" maxLength={150} />
                {errors["subject"] ? (
                  <p className="text-xs text-destructive">{errors["subject"]}</p>
                ) : null}
              </div>

              <div className="mt-4 space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  placeholder="Tell us how we can help…"
                />
                {errors["message"] ? (
                  <p className="text-xs text-destructive">{errors["message"]}</p>
                ) : null}
              </div>

              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto">
                Send message <Send />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
