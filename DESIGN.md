# Design — Fernando Ortiz / Portfolio

This document is the design source of truth for `src/app/page.tsx` and any components
built for this site. Everything below is extracted from the repository itself — real
copy, real tokens, real components. **Nothing here is invented, and nothing is
placeholder.** If the repo does not contain a value, the design does not prescribe it;
the site shows only what the repo proves, plus structure.

---

## 1. Source of truth — what the repo actually contains

The repo is a fresh `create-next-app` scaffold (`df49b40` — "Start new project
'portfolio'") with `src/app/page.tsx` still holding the default Next.js boilerplate.
That boilerplate is **to be replaced**; it is not content.

The only real, product-level content in the repo:

- **Name (owner):** Fernando Ortiz — from `src/app/layout.tsx` metadata `title`
  `"Fernando Ortiz - Portfolio"`.
- **Value proposition (verbatim):**
  > "I'm a passionate web developer specializing in creating modern and responsive
  > web applications."
- **Invitation (verbatim):**
  > "Feel free to reach out for collaborations or inquiries."
- **Section vocabulary (verbatim, from the same description):** the site must let
  visitors "Explore my projects, skills, and experience."

**Vocabulary the design is allowed to reuse:** *portfolio, passionate web
developer, modern and responsive web applications, projects, skills, experience,
collaborations, inquiries.*

**What the repo does NOT contain** (so the design shows structure, not copy):
specific project names, project descriptions, dates, employers, or a list of
personal skills beyond the toolchain proven by `package.json`. Those sections are
designed below as containers; the owner supplies the entries.

---

## 2. Proven toolchain (from `package.json`, `components.json`, lockfile)

- Next.js 15.5.22 (App Router, Turbopack) + React 19.1.0 + TypeScript 5
- Tailwind CSS 4 (via `@tailwindcss/postcss`, `@import "tailwindcss"`)
- shadcn/ui, registry style **`base-nova`** (`components.json`), `baseColor: neutral`
- Base UI primitives (`@base-ui/react`) — Button, and future interactive components
- `class-variance-authority` + `clsx` + `tailwind-merge` → the `cn()` helper at
  `src/lib/utils.ts`
- Icons: `lucide-react`
- Theming: `next-themes`, `attribute="class"`, `defaultTheme="system"`, `enableSystem`
- Motion: `tw-animate-css`, `tailwind-animations`
- Fonts via `next/font/google`: **Outfit** (weights 400/500/600/700), variable
  `--font-outfit`, applied to `<body>` (`layout.tsx`)

---

## 3. Color system — inherited from `src/app/globals.css`

All colors are **OKLCH**. The design language is a **monochromatic, cool blue-violet
family (hue 260–270)** with **exactly two saturated accents** — amber and blue — that
only exist as `--chart-*` tokens.

### Light

| Token | Value | Role |
|---|---|---|
| `--background` | `oklch(0.98 0.03 260)` | cool near-white canvas |
| `--foreground` | `oklch(0.06 0.01 270)` | near-black blue-black text |
| `--card` | `oklch(0.99 0.02 260)` | surface, one step off canvas |
| `--muted` / `--muted-foreground` | `oklch(0.97 0 0)` / `oklch(0.44 0 0)` | secondary text |
| `--secondary` / `--accent` | `oklch(0.94 0 0)` | neutral gray fills |
| `--border` | `oklch(0.92 0 0)` | hairlines |
| `--ring` | `oklch(0.06 0.01 270)` | focus ring (== foreground) |
| `--primary` | `oklch(0.06 0.01 270)` | == foreground: high-contrast black button |
| `--chart-1` | `oklch(0.81 0.17 75.35)` | **amber** — accent A |
| `--chart-2` | `oklch(0.55 0.22 264.53)` | **saturated blue** — accent B |

### Dark

| Token | Value |
|---|---|
| `--background` | `oklch(0.04 0.005 270)` |
| `--foreground` | `oklch(0.88 0.04 260)` |
| `--card` | `oklch(0.14 0.005 270)` |
| `--popover` | `oklch(0.18 0.005 270)` |
| `--secondary` | `oklch(0.25 0 0)` |
| `--muted` / `--muted-foreground` | `oklch(0.23 0 0)` / `oklch(0.72 0 0)` |
| `--accent` | `oklch(0.32 0 0)` |
| `--border` / `--input` | `oklch(0.26 0 0)` / `oklch(0.32 0 0)` |
| `--ring` | `oklch(0.72 0 0)` |
| `--primary` | `oklch(0.88 0.04 260)` == foreground |
| `--chart-1` | `oklch(0.81 0.17 75.35)` (unchanged amber) |
| `--chart-2` | `oklch(0.58 0.21 260.84)` |

### Usage rules

- The page is grayscale/blue-violet by default: `bg-background`, `text-foreground`,
  surfaces from `card`/`muted`/`secondary`, hairlines from `border`.
- **Amber (`chart-1`) and blue (`chart-2`) are the only allowed chromatic accents.**
  Use them sparingly — a marker, an active state, a highlight — never as fills for
  large areas.
- `primary` == `foreground`. Use `bg-primary text-primary-foreground` for the
  dominant action; it reads as a solid black/white button, not a "brand color".
- Contrast is safe because hue is constant and only lightness/chroma move.

---

## 4. Typography

- **Brand/sans font:** **Outfit** — the only font actually loaded and applied. Use it
  for everything. Weights on hand: **400, 500, 600, 700**.
- `globals.css` declares `--font-sans: Geist`, `--font-mono: Geist Mono`,
  `--font-serif: Georgia`. Outfit is applied by the `<body>` class and overrides for
  reading text; resolve headings through `font-heading` (see note below).
- No custom type scale is declared in the repo — inherit Tailwind v4's default scale
  (`text-sm` body, `text-base`, headings via `font-semibold`/`font-bold` + text sizes).
- `CardTitle` uses the `font-heading` utility (`card.tsx:41`), but `globals.css`
  defines **no** `--font-heading` token. **Design decision:** map `--font-heading` to
  Outfit so `CardTitle` and all headings render in the brand font. This fixes a real
  gap in the repo rather than inventing a new typeface.
- Monospace (`font-mono`, Geist Mono) is available for technical/label use — e.g.
  path names, tags, code-like metadata.
- Headings should use `font-semibold`/`font-bold` with `tracking-tight` (the one
  tracking pattern already used in the scaffold: `tracking-[-.01em]`).

---

## 5. Space, radius, elevation

- **Spacing:** Tailwind default `--spacing: 0.25rem` (4px). Use the standard
  4/8/12/16/24/32 ladder. The scaffold already uses `gap-4`, `gap-[32px]`, `p-8`,
  `sm:p-20`, `pb-20` — match that rhythm.
- **Radius:** `--radius: 0.5rem`. Derived: `sm = 0.25rem`, `md = 0.375rem`,
  `lg = 0.5rem`, `xl = 0.75rem`. Buttons `rounded-lg`, Cards `rounded-xl`.
- **Elevation — the signature:** shadows are **near-flat**. Every token starts with
  the same tight layer `0 1px 2px hsl(0 0% 0% / 0.18)` plus a second layer whose blur
  scales (`2 → 4 → 6 → 8px`). Vertical offset stays at `1px` throughout
  (`--shadow-x: 0`, `--shadow-y: 1`). Consequence: **depth comes from borders, rings,
  and color, not big drop shadows.** Prefer `ring-1 ring-foreground/10` (the Card
  recipe) and `bg-muted`/`bg-card` layering over `shadow-*`. Reserve `shadow-md`
  upward for true overlays (menus, mobile nav).

---

## 6. Component system — inherited from `src/components/ui`

Reuse these existing recipes; do not re-derive them.

### `Button` (`button.tsx`)
- Base: `rounded-lg`, `text-sm font-medium`, `transition-all`, focus ring
  `ring-3 ring-ring/50`, `active:translate-y-px`.
- Sizes: `xs` h-6 · `sm` h-7 · `default` h-8 · `lg` h-9 · icon variants.
- Variants: `default` (solid primary), `outline` (border + bg-background),
  `secondary` (gray fill), `ghost`, `destructive`, `link`.
- Icons go inside buttons via lucide with `size-4` default.

### `Card` family (`card.tsx`)
- Root: `rounded-xl`, `ring-1 ring-foreground/10`, `bg-card`,
  `--card-spacing` = 16px (12px at `size="sm"`), images bleed to the rounded edge.
- `CardTitle`: `font-heading text-base leading-snug font-medium` (→ Outfit).
- `CardDescription`: `text-sm text-muted-foreground`.
- `CardAction`: top-right action slot. `CardFooter`: `border-t bg-muted/50`.
- `Card` is the natural container for the **Projects** grid.

---

## 7. Page structure — the product's native shape

The product is a *portfolio*. Its native shape is already named in the real copy:
**projects, skills, experience** — wrapped by an identity and an invitation
(**collaborations / inquiries**). Build the page in that order:

1. **Hero / identity** — "Fernando Ortiz", the verbatim value proposition
   ("passionate web developer specializing in modern and responsive web
   applications"), and the verbatim invitation ("Feel free to reach out for
   collaborations or inquiries"). CTA = existing `Button` → contact anchor.
2. **Projects** — a catalog. The native container is the `Card` grid (2–3 across,
   stacking on mobile). Each card: title, short description, tags, action.
   *Entries supplied by the owner — the repo contains none yet.*
3. **Skills** — tags of the proven toolchain from `package.json` (Next.js, React,
   TypeScript, Tailwind CSS, shadcn/ui, Base UI, lucide-react) as the *only* skills
   shown without owner input. Rendered as `font-mono` chips (matches the technical
   label role of monospace). Owner may add more.
4. **Experience** — a timeline (the natural shape of chronological experience).
   *Entries supplied by the owner.*
5. **Contact** — the invitation lives here. Anchor target for the hero CTA.

Layout constraints:
- Full-bleed section rhythm: `max-w` content column, generous vertical padding
  matching the scaffold's `p-8 / sm:p-20`, `gap-16`.
- Sticky top nav with section anchors (Projects / Skills / Experience / Contact) +
  theme toggle (lucide `Sun`/`Moon`, `next-themes` class strategy).
- Footer: name + repo link (`github.com/Fernando-Dev24/portfolio`, from `git remote`).

---

## 8. Theming

- `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`
  (already wired in `layout.tsx` + `theme-provider.tsx`). `.dark` variant in
  `globals.css` (`@custom-variant dark`).
- The oklch token pairs above make the flip automatic — no per-section overrides
  should be needed.

---

## 9. Motion, icons, accessibility

- **Motion:** `tw-animate-css` and `tailwind-animations` are installed and imported
  at the top of `globals.css`. Use their built-in utilities for scroll reveals /
  hover micro-interactions. Keep motion subtle — the palette is quiet, motion should
  be too. Respect `prefers-reduced-motion`.
- **Icons:** `lucide-react` only. Already the icon library in `components.json`.
- **Accessibility:**
  - `primary` == `foreground` gives AA+ contrast by construction (light: near-black
    on near-white; dark: near-white on near-black). Preserve it — never put
    `muted-foreground` on `muted` for critical text.
  - Buttons ship focus rings (`ring-3 ring-ring/50`) — keep them.
  - Theme toggle needs `aria-label`; dark-mode `suppressHydrationWarning` already set.
  - Semantic sections (`header`, `main`, `section`, `footer`) + `aria-labelledby`
    per section heading.

---

## 10. Non-negotiables

1. **Only repo-sourced copy.** The four verbatim fragments from `layout.tsx`
   (name, value proposition, invitation, section vocabulary) are the site's entire
   voice until the owner supplies more. No invented project names, no invented
   employers, no invented dates.
2. **Only repo-sourced values.** Colors, radius, shadows, spacing, fonts: use the
   tokens above as-is. `chart-1` amber and `chart-2` blue are the sole chromatic
   accents. No new hues.
3. **Reuse the existing system.** Build with `Button`, `Card`, `cn()`, and the
   installed motion/animation utilities. Extend `components.json`-style components
   via shadcn rather than hand-rolling primitives.
4. **The shape is the content.** Structure follows the real copy: hero → projects →
   skills → experience → contact. No generic agency-template sections (testimonials,
   stats, blog) — the repo contains no evidence for them.
