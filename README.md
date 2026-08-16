# HackEx'26 — National Level Hackathon Website

Techno Debuggers Club · Department of Computer Science and Engineering · Excel Engineering College (Autonomous)

Built with TanStack Start, React, TypeScript, Tailwind CSS, Motion (Framer Motion) and Lucide icons.

---

## 1. Where everything lives

| What you want to change | File |
| --- | --- |
| Event name, dates, venue, email, phone, countdown | `src/data/site.ts` → `event` |
| Stat tiles (prize pool, team size, duration…) | `src/data/site.ts` → `stats` |
| Themes / tracks + sample problems | `src/data/site.ts` → `themes` |
| Timeline milestones | `src/data/site.ts` → `timeline` |
| Prize amounts | `src/data/site.ts` → `prizes` |
| FAQ questions | `src/data/site.ts` → `faqs` |
| Sponsors / partners | `src/data/site.ts` → `sponsors` |
| Downloads (rule book, brochure…) | `src/data/site.ts` → `downloads` |
| Social links | `src/data/site.ts` → `socials` |
| Coordinator names / phones / emails | `src/data/site.ts` → `coordinators` |
| Colors, fonts, glass effects | `src/styles.css` |
| Logo image | `src/assets/hackex-logo.png.asset.json`, favicon at `public/favicon.png` |
| Hero background art | `src/assets/hero-tech-blue.jpg` |
| Nav / footer links | `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx` |
| Registration form fields | `src/routes/register.tsx` |

**Rule of thumb: 90% of routine edits are in `src/data/site.ts`.** Change the text between quotes, save, and the site updates instantly.

---

## 2. Common edits, step by step

### Change the hackathon date & countdown

`src/data/site.ts`:

```ts
export const event = {
  startsAt: "2026-09-25T09:00:00+05:30", // countdown target — keep this exact format
  venue: "Excel Engineering College, Komarapalayam",
  email: "hackex26@excelcolleges.com",
  phone: "+91 98765 43210",
};
```

`startsAt` format: `YYYY-MM-DDTHH:MM:SS+05:30` (last part is the India timezone — don't remove it).

The date shown in the hero badge is separate text — update it in
`src/components/sections/Hero.tsx` (search for `September 2026`).
The registration-closing line lives in `src/components/sections/CtaBand.tsx`.

### Change timeline dates

`src/data/site.ts` → `timeline`. Each entry:

```ts
{
  date: "25 Sep 2026 · 9:00 AM",
  title: "Hackathon Day 1",
  body: "Inauguration, problem briefing and the 32-hour build clock starts.",
},
```

Add, remove or reorder entries freely — the vertical timeline redraws itself.

### Add sponsors (currently showing "Coming soon")

`src/data/site.ts`:

```ts
export const sponsors: { name: string; tier: string }[] = [
  { name: "Zoho", tier: "Title" },
  { name: "Freshworks", tier: "Platinum" },
];
```

- Empty array → the site automatically shows the **"Sponsors coming soon"** placeholder card.
- Any entries → the placeholder disappears and a sponsor grid renders.
- `tier` is free text: Title / Platinum / Gold / Silver / Community.

### Edit prizes

```ts
export const prizes = [
  { rank: "Champion", amount: "₹50,000", perks: [], featured: true },
];
```

`featured: true` makes the card larger/highlighted. The
"Certificate for all participants" line is in `src/components/sections/PrizesSection.tsx`.

### Edit themes / tracks

```ts
{
  slug: "healthcare",          // unique, lowercase, no spaces
  title: "Healthcare",
  icon: "HeartPulse",          // any icon name registered in src/components/theme-icons.ts
  blurb: "One-line description.",
  problems: ["Sample problem 1", "Sample problem 2"],
  tech: [],                    // not displayed anymore
}
```

To use a new icon, add it to `src/components/theme-icons.ts` first (Lucide icon names).

### Edit FAQs

```ts
{ q: "Question text?", a: "Answer text." },
```

### Edit coordinators shown in Contact

```ts
{
  role: "Faculty Coordinator",
  name: "Dr. A. Sample Faculty",
  phone: "+91 98765 12345",
  email: "faculty.coord@excelcolleges.com",
},
```

### Change colors

`src/styles.css`, inside `:root`. The main brand tokens:

```css
--primary: <electric blue>;
--primary-soft: <lighter blue>;
```

Never hardcode colors in components — always use tokens like `text-primary`,
`bg-primary/10` so light/dark mode keeps working.

### Replace the logo

1. Put the new image in `src/assets/`.
2. Update the import in `src/components/BrandMark.tsx` and `src/components/sections/Hero.tsx`.
3. Replace `public/favicon.png` for the browser tab icon.

---

## 3. Page structure

The site is a single scrolling page (`src/routes/index.tsx`) with anchor sections:

`#about` · `#themes` · `#timeline` · `#prizes` · `#sponsors` · `#faq` · `#contact`

Standalone routes also exist: `/about`, `/themes`, `/timeline`, `/prizes`, `/faq`,
`/contact`, `/register`, `/downloads`, `/privacy`, `/terms`.

Each section component lives in `src/components/sections/` and accepts an
`inPage` prop that hides its duplicate heading when used on its own page.

---

## 4. SEO / page titles

Every route sets its own title and description in the `head()` block at the top of
the route file (e.g. `src/routes/index.tsx`). Update those when the event details change.

---

## 5. Running locally

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build
```

## 6. Editing without code

Open the project in [Lovable](https://lovable.dev) and describe the change in
plain English — e.g. "change the hackathon date to 25–26 September" — and it will
be applied for you.
