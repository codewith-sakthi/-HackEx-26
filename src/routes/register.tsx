import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { themes } from "@/data/site";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register Your Team | HackEx'26" },
      {
        name: "description",
        content:
          "Free team registration for HackEx'26. Only the team leader creates an account — add 1 to 3 members, pick a theme and submit your idea.",
      },
      { property: "og:title", content: "Register for HackEx'26" },
      {
        property: "og:description",
        content: "Free registration. Teams of 2 to 4. Only the leader needs an account.",
      },
    ],
  }),
  component: RegisterPage,
});

const steps = [
  { id: 1, label: "Leader Details" },
  { id: 2, label: "Team & Idea" },
  { id: 3, label: "Team Members" },
  { id: 4, label: "Declaration" },
] as const;

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year", "PG"];
const genders = ["Male", "Female", "Other", "Prefer not to say"];

type Member = {
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  gender: string;
  college: string;
  linkedin: string;
};

const emptyMember: Member = {
  name: "",
  email: "",
  phone: "",
  department: "",
  year: "",
  gender: "",
  college: "",
  linkedin: "",
};

function Field({
  id,
  label,
  ...rest
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </div>
  );
}

function Picker({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((o) => (
            <SelectItem key={o.value} value={o.value}>
              {o.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [theme, setTheme] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  
  const [members, setMembers] = useState<Member[]>([{ ...emptyMember }]);
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const progress = (step / steps.length) * 100;

  function next() {
    setStep((s) => Math.min(steps.length, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    if (!accepted) {
      toast.error("Please accept the rules and code of conduct to continue.");
      return;
    }
    setSubmitted(true);
    toast.success("Registration draft saved. Connect the backend to make it permanent.");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Registration"
          title="Draft captured"
          subtitle="This flow is fully built on the front end. Enable the backend to persist teams, send OTP verification and email the acknowledgement PDF."
        />
        <section className="mx-auto max-w-2xl px-6 pt-4 pb-24 text-center">
          <Reveal>
            <div className="glass-panel rounded-3xl p-10">
              <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-soft text-primary-foreground">
                <Check className="size-8" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold">Team registration complete</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                A confirmation mail with your team ID and acknowledgement receipt will be sent to
                the leader's email once the backend is live.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
              >
                Register another team
              </Button>
            </div>
          </Reveal>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Register your team"
        subtitle="Free entry. Only the team leader creates an account — members are added below."
      />

      <section className="mx-auto max-w-4xl px-6 pt-6 pb-24">
        {/* Stepper */}
        <Reveal>
          <div className="glass-panel rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {steps.map((s) => (
                <div key={s.id} className="flex items-center gap-2">
                  <span
                    className={`flex size-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      step >= s.id
                        ? "bg-gradient-to-br from-primary to-primary-soft text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.id ? <Check className="size-4" /> : s.id}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      step >= s.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="animated-gradient h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Reveal>

        <div className="glass-panel mt-5 rounded-3xl p-8">
          {step === 1 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="l-name" label="Full name" placeholder="Aravind Kumar" />
              <Field id="l-college" label="College" placeholder="Excel Engineering College" />
              <Field id="l-dept" label="Department" placeholder="Computer Science and Engineering" />
              <Picker
                label="Year of study"
                value={year}
                onChange={setYear}
                placeholder="Select year"
                options={years.map((y) => ({ value: y, label: y }))}
              />
              <Field id="l-phone" label="Phone" type="tel" placeholder="+91 98765 43210" />
              <Field id="l-email" label="Email" type="email" placeholder="you@college.edu" />
              <Picker
                label="Gender"
                value={gender}
                onChange={setGender}
                placeholder="Select"
                options={genders.map((g) => ({ value: g, label: g }))}
              />
              <Field id="l-linkedin" label="LinkedIn" placeholder="linkedin.com/in/username" />
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="t-name" label="Team name" placeholder="Null Pointers" />
              <Picker
                label="Theme"
                value={theme}
                onChange={setTheme}
                placeholder="Select a theme"
                options={themes.map((t) => ({ value: t.slug, label: t.title }))}
              />
              <div className="sm:col-span-2">
                <Field id="i-title" label="Idea title" placeholder="On-device retinopathy screening" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="i-desc">Idea description</Label>
                <Textarea id="i-desc" rows={5} maxLength={1500} placeholder="What are you building and for whom?" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="i-problem">Problem statement</Label>
                <Textarea id="i-problem" rows={3} maxLength={800} />
              </div>
              <div className="sm:col-span-2">
                <Field
                  id="i-abstract"
                  label="Abstract submission (PDF only, max 10 MB)"
                  type="file"
                  accept="application/pdf,.pdf"
                />
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <div className="flex items-start gap-3 rounded-2xl bg-primary-tint p-4 text-sm text-secondary-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  The leader occupies member slot 1 automatically. Add 1 to 3 more members — total
                  team size must be between 2 and 4.
                </p>
              </div>

              {members.map((m, idx) => (
                <div key={idx} className="mt-5 rounded-2xl border border-border p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Member {idx + 2}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMembers(members.filter((_, i) => i !== idx))}
                      disabled={members.length <= 1}
                    >
                      Remove
                    </Button>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field
                      id={`m${idx}-name`}
                      label="Name"
                      value={m.name}
                      onChange={(e) =>
                        setMembers(
                          members.map((x, i) => (i === idx ? { ...x, name: e.target.value } : x)),
                        )
                      }
                    />
                    <Field
                      id={`m${idx}-email`}
                      label="Email"
                      type="email"
                      value={m.email}
                      onChange={(e) =>
                        setMembers(
                          members.map((x, i) => (i === idx ? { ...x, email: e.target.value } : x)),
                        )
                      }
                    />
                    <Field id={`m${idx}-phone`} label="Phone" type="tel" />
                    <Field id={`m${idx}-dept`} label="Department" />
                    <Field id={`m${idx}-year`} label="Year" placeholder="3rd Year" />
                    <Field id={`m${idx}-gender`} label="Gender" />
                    <Field id={`m${idx}-college`} label="College" />
                    <Field id={`m${idx}-linkedin`} label="LinkedIn" />
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                className="mt-5"
                disabled={members.length >= 3}
                onClick={() => setMembers([...members, { ...emptyMember }])}
              >
                Add member
              </Button>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Declaration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All information provided is accurate and verifiable.</li>
                <li>• All hackathon code will be written during the 32-hour window.</li>
                <li>• We agree to the code of conduct and the jury's decision as final.</li>
                <li>• We consent to photographs and recordings being used for event promotion.</li>
              </ul>
              <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4">
                <Checkbox
                  checked={accepted}
                  onCheckedChange={(v) => setAccepted(v === true)}
                  className="mt-0.5"
                />
                <span className="text-sm">
                  I accept the HackEx'26 rules, code of conduct and privacy policy on behalf of my
                  team.
                </span>
              </label>
            </div>
          ) : null}

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button variant="ghost" onClick={back} disabled={step === 1}>
              <ArrowLeft /> Back
            </Button>
            {step < steps.length ? (
              <Button variant="hero" size="lg" onClick={next}>
                Continue <ArrowRight />
              </Button>
            ) : (
              <Button variant="hero" size="lg" onClick={submit}>
                Submit registration <Check />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
