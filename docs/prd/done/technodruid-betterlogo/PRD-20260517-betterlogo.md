---
prd_id: PRD-20260517-betterlogo
title: "Technodruid.org — Better Logo"
status: COMPLETE
iteration: 1
current_phase: null
last_phase: UPDATE
created: 2026-05-17
updated: 2026-05-27
source_spec: docs/prd/technodruid-betterlogo/PRD-20260517-betterlogo.md
invariant_doc: docs/invariant_requirements.md
verification_summary: "PRD COMPLETE on 2026-05-27. All 10 ISC-LOGO-* milestones satisfied in a single iteration. Mid-iter user feedback collapsed the original 2-variant API to a single rendering (ISC-LOGO-2 + ISC-LOGO-4 amended in-place). All 27 invariants PASS mechanically: pnpm check 0/0/0 across 56 files; pnpm build 25 pages in 2.67s with no Astro warnings; 51/51 Playwright tests pass in 23.5s (incl. tests/a11y-full.spec.ts axe-clean on / and /404). Header.astro reduced from 78 lines (4-variant block-character pagga) to 56 lines (single shell-prompt wordmark with CSS-only blinking cursor honoring prefers-reduced-motion)."
failing_criteria: []
---

# Technodruid.org — Better Logo PRD

> **Status: COMPLETE (2026-05-27).** Design settled via `superpowers:brainstorming` on 2026-05-27; executed in a single iteration the same day. Ten ISC-LOGO-* milestones satisfied; all 27 invariants pass. Mid-iter scope refinement collapsed the 2-variant API to a single rendering.

## Goal

The current logo is hard to read because it uses block characters to form the logo type. Let's replace it with a text-based logo type that keeps the keeps it easier to read while still capturing the ascii art aesthetic.

## Background — current state

`src/components/Header.astro` exports a four-member `Variant` enum (`main`, `small`, `small_bigger`, `tiny`) and renders each as a multi-line `<pre>` block of Unicode block characters (`░██`, `▄▄`, etc.). The component swaps between a desktop block (`hidden md:inline-block`) and a separate `tiny` mobile block (`inline-block md:hidden`). Two routes consume the component: `src/pages/index.astro:30` and `src/pages/404.astro:16`, both passing `HeaderVariant.small_bigger`. `Variant.main` is dead code; `Variant.small` and `Variant.small_bigger` are near-duplicates.

The site identity is a CRT/terminal aesthetic: self-hosted Fira Mono (`src/styles/global.css:3-25`), phosphor green text (`--color-white: #d4ffb2`) on near-black (`--color-black: #020714`), scanlines (`body::before`), text-shadow glow.

## Background — design decisions (brainstormed 2026-05-27)

| Decision | Resolution |
|---|---|
| Aesthetic direction | Shell-prompt wordmark (plain Fira Mono text + terminal chrome). The character-art letterforms go away; the "ASCII-art aesthetic" is now carried by the prompt glyph and cursor. |
| Prompt grammar | Modern chevron: `❯ technodruid` (fish/starship style — cleaner than `$` or `~/...$`). |
| Cursor | Blinking `▌` after the wordmark. Pure CSS via `steps(2, start)` keyframes. `prefers-reduced-motion: reduce` disables the animation. |
| Wordmark text | `technodruid` (lowercase, no TLD). Matches current Header content. `Technodruid` (the `SITE_TITLE` constant) is kept for `<title>` and aria-label; the rendered wordmark stays lowercase to fit shell-prompt grammar. |
| Sizing | Single rendering — no `Variant` prop. Tailwind responsive font-size scales `text-2xl → md:text-4xl → lg:text-5xl` everywhere. Amended mid-iter-1 (2026-05-27) after visual review: the wordmark is light enough at hero size that a separate compact downstep wasn't needed. The old `tiny` mobile-swap also goes away. |
| Markup | Semantic `<span>`s (no `<pre>`). Chevron and cursor `aria-hidden="true"`; `<a>` carries `aria-label="Technodruid home"`. |
| Color & font | Inherits theme — no new tokens, no new font, no third-party host. |

## Out of scope (deferred)

- Page-h1 vs header-h2 source-order accessibility audit. Header's `<h2>` appears before the page's `<h1>` in source order; this PRD does not change that. Separate concern.
- Logo on social-card / `og:image` assets in `public/`. Static images, untouched.
- Dead-code cleanup beyond what the variant collapse removes.
- Visible "branding lockup" treatment (tagline, version stamp, etc.).

## Key Files

| Path | Action | Tier | Primary ISCs |
|---|---|---|---|
| `src/components/Header.astro` | Modify — replace `<pre>` renderer + drop the `Variant` enum and `variant` prop entirely + add scoped `<style>` block with cursor animation | Standard | ISC-LOGO-1, ISC-LOGO-2, ISC-LOGO-3, ISC-LOGO-5, ISC-LOGO-6, ISC-LOGO-7 |
| `src/layouts/Base.astro` | Modify — drop the `HeaderVariant` import and the `variant` prop pass-through to `<Header />` | Trivial | ISC-LOGO-4 |
| `src/pages/index.astro` | Modify — drop the `HeaderVariant` import and the `variant={...}` prop on `<Layout>` | Trivial | ISC-LOGO-4 |
| `src/pages/404.astro` | Modify — drop the `HeaderVariant` import and the `variant={...}` prop on `<Layout>` | Trivial | ISC-LOGO-4 |
| `tests/a11y-full.spec.ts` *(or new spec)* | Verify only — existing axe-core sweep already covers `/` and `/404`; no new assertions required unless coverage gap is found during VERIFY | Trivial | ISC-LOGO-10 |

## ISCs

### Behaviour

- [x] **ISC-LOGO-1:** `Header.astro` renders `❯ technodruid` (chevron `❯`, single space, wordmark `technodruid`) followed by a cursor element `▌`. Single rendering — no per-variant branches.
- [x] **ISC-LOGO-2:** `Header.astro` exports no `Variant` enum and accepts no `variant` prop. (Amended mid-iter-1: original requirement of exactly `main + compact` collapsed to single rendering after visual review confirmed the wordmark is light enough at hero size to need no downstep.)
- [x] **ISC-LOGO-3:** `Header.astro` contains no figlet-style block-character letter art. Specifically: `grep -P '[\x{2580}-\x{259F}]{2,}' src/components/Header.astro` returns 0 matches (no two adjacent characters from the Unicode Block Elements range U+2580–U+259F). The cursor `▌` (U+258C) is used singly and is allowed.
- [x] **ISC-LOGO-4:** No `HeaderVariant` import or `variant` prop appears in `src/layouts/Base.astro`, `src/pages/index.astro`, or `src/pages/404.astro`. (Amended mid-iter-1 from "pages pass main/compact" — see ISC-LOGO-2 note.)

### Visual & animation

- [x] **ISC-LOGO-5:** The cursor blink is implemented via a CSS `@keyframes` rule inside `Header.astro`'s scoped `<style>`. No `<script>` tag or JS-driven animation is introduced.
- [x] **ISC-LOGO-6:** `Header.astro` contains a `@media (prefers-reduced-motion: reduce) { ... }` rule that sets `animation: none` (or equivalent) on the cursor element. Verified by grep.

### Accessibility

- [x] **ISC-LOGO-7:** The logo's anchor element carries `aria-label="Technodruid home"`. The chevron `<span>` and cursor `<span>` both carry `aria-hidden="true"`. The rendered HTML contains no `<pre>` element inside `<header>`.

### Build & test gates

- [x] **ISC-LOGO-8:** `pnpm build` exits 0 with no warnings on stderr. (Co-satisfies `INV-BUILD-1`.)
- [x] **ISC-LOGO-9:** `pnpm astro check` reports 0 errors, 0 warnings, 0 hints. (Co-satisfies `INV-BUILD-2`.)
- [x] **ISC-LOGO-10:** `pnpm test:ci` passes 100%. Specifically: `tests/a11y-full.spec.ts` reports zero `serious` / `critical` axe-core violations on `/` and `/404`. (Co-satisfies `INV-A11Y-1`.)

## Invariants in jurisdiction

The 27-item `INV-*` registry in `docs/invariant_requirements.md` is re-verified each iteration per the work loop protocol. Items most likely to fail-loud if a regression slips: `INV-A11Y-1`, `INV-A11Y-3`, `INV-CODE-1`, `INV-CODE-2`, `INV-DOC-1`, `INV-BUILD-1`, `INV-BUILD-2`, `INT-PROC-1`. Items vacuous for this PRD (no jurisdiction): `INV-CAN-*`, `INV-LIV-*`, `INV-LIC-*`, `INV-NAV-*`, `INV-DOC-NAME` (no TS files edited).

## Recommended workflow

Single execution iteration. Brainstorm has settled all design decisions; no `writing-plans` step is required for a 3-file change. Direct execution sequence:

1. **Iter 1 (`prd_work_loop` ACT/VERIFY)** — modify `Header.astro`, `Base.astro`, `index.astro`, `404.astro`. Run `pnpm verify` (`pnpm check && pnpm build && pnpm test:ci`) as the VERIFY phase. UPDATE marks all 10 ISCs satisfied. PRD → COMPLETE.

If a regression surfaces in the axe-core sweep or build, decompose into a follow-up iteration that adds a Playwright assertion specifically for the logo's rendered text (`/❯ technodruid/`) and ARIA labels.

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

### Iteration 1 — 2026-05-27
- **Start commit:** `9e8aace`
- **Artifacts:** `src/components/Header.astro`, `src/layouts/Base.astro`, `src/pages/index.astro`, `src/pages/404.astro` (tier: complex — atomic build-constrained 4-file change; ISC-LOGO-2 and ISC-LOGO-4 amended mid-iter after user feedback)
- **Milestones addressed:** ISC-LOGO-1, ISC-LOGO-2, ISC-LOGO-3, ISC-LOGO-4, ISC-LOGO-5, ISC-LOGO-6, ISC-LOGO-7, ISC-LOGO-8, ISC-LOGO-9, ISC-LOGO-10
- **Invariants verified:** all 27 PASS (51/51 Playwright tests in 23.5s; `pnpm check` 0/0/0 across 56 files; `pnpm build` 25 pages in 2.67s; spot-greps for INV-CODE-1/2, INV-DOC-NAME on changed files all 0-match)
- **Overall:** PASS — PRD status → COMPLETE
- **Reflection:** Four insights from a one-iteration arc that nevertheless taught several things. **(1) The pre-flight checklist caught a Unicode trap that the PRD's self-review pass had already pre-empted.** ISC-LOGO-3's verification grep `[\x{2580}-\x{259F}]{2,}` deliberately allows the cursor `▌` (U+258C) singly while forbidding adjacent block glyphs — the kind of subtle character-class boundary that a naïve `grep '█|▌'` would have falsely failed. Worth carrying forward: when a verification regex is checking a Unicode RANGE, make sure the "permitted" characters in that range are non-adjacent and the regex requires adjacency, not mere presence. **(2) Mid-iteration scope simplification from the user is a legitimate within-iteration move, not a new iteration.** The user observed the rendered output and asked to drop the variant API entirely; this affected ISC-LOGO-2 and ISC-LOGO-4 wording but reduced — not expanded — scope. Per the work loop's "subgoals may be split mid-work as complexity is discovered" rule, the right move was to amend the ISC wording in-place and re-verify, not to open iter 2. Closing iter 1 with the obsolete 2-variant impl would have doubled PR overhead for a smaller diff. **(3) Build-interlocked atomic changes legitimately violate the 6-ISC subgoal cap.** SG-1 carried all 10 ISCs because splitting Header.astro from its consumers would have broken INV-BUILD-2 (TypeScript references to removed enum members). The skill's per-subgoal cap is a heuristic; when files form an atomic-build-constrained set, the cap yields to the build constraint. **(4) The plumbing layer is easy to miss.** Initial OBSERVE saw the Key Files table list 3 files; ACT discovered `src/layouts/Base.astro` was a 4th file passing `variant` through. The PRD's Key Files was amended in the same UPDATE that closed the iter. Lesson: when removing a prop, grep for both the type import AND every site that passes the prop — Base.astro's pass-through was invisible until I tried to compile.
- **Remaining:** 0 milestones pending — PRD COMPLETE.
