---
prd_id: PRD-20260522-technodruid-library-reading
title: "Technodruid.org — Reading list living-content annotations"
phase: 2
status: COMPLETE
iteration: 3
current_phase: null
last_phase: UPDATE
created: 2026-05-22
updated: 2026-05-27
source_spec: docs/information-architecture.md
invariant_doc: docs/invariant_requirements.md
predecessor_prd: docs/prd/done/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md
verification_summary: "PRD COMPLETE on 2026-05-27. ISC-READING-1 satisfied across 3 iterations (brainstorm → plan → execute). All 27 invariants PASS mechanically: pnpm check 0/0/0 across 56 files; 51/51 Playwright tests pass in 23.5s including /library/reading axe-clean (INV-A11Y-1), one-h1 + no-skipped-levels (INV-A11Y-3), edit-link (INV-LIV-2), no-broken-links (INV-NAV-2), font-host / tracker / comment-system / license checks (INV-DOC-1/2/3, INV-LIC-1), and sitemap (INV-BUILD-3). The 6 anchor slugs render in dist/library/reading/index.html: shop-class-as-soulcraft, the-right-to-repair, free-software-free-society, the-soul-of-a-new-machine, the-gift, the-real-world-of-technology."
failing_criteria: []
unblocked_by: "Predecessor 60-day PRD (now archived in docs/prd/done/): 16/16 buildable milestones satisfied; the present PRD covers ISC-READING-1 (formerly ISC-P2-CONTENT-4), the second of two content tail milestones extracted from the 60-day PRD by the 2026-05-22 restructure."
split_history: "2026-05-22: extracted from PRD-20260516-technodruid-phase2-60day.md per user request to break the 60-day PRD into smaller chunks. Covers what was ISC-P2-CONTENT-4 (reading list per-entry title/author/year/annotation)."
---

# Technodruid.org — Reading list PRD

> **Status: ACTIVE** (as of iter 0, 2026-05-22). Predecessor: the Phase 2 60-day PRD reached its functional terminus on 2026-05-22 with 16/16 buildable milestones satisfied. This PRD covers the reading list content tail; sibling PRD covers the glossary (`docs/prd/technodruid-glossary/`).

## Scope

Populate `src/content/living/library-reading.md` with title/author/year/one-line annotation per entry, replacing the `[PENDING]` placeholders that ship in the iter 10 scaffold. The list is *living* content (not canonical), so the version model is `lastEditedAt` + `contributors[]` rather than `version` + `amendedAt`. The scaffold landed at iter 10 of the predecessor PRD (SG-9) with 6 entries per IA §5; this PRD authors the per-entry detail.

## User-input dependencies

Living content with editorial judgment per entry. Two of the IA §5 entries name an author without a specific work (Lewis Hyde, Ursula Franklin) — the brainstorm step decides which of each author's works to canonize.

| Input needed | Blocks ISCs |
|---|---|
| Author-only entries: which specific work to canonize for Hyde and Franklin | ISC-READING-1 |
| Year convention (publication year of the work, or year of the edition the reading list canonizes) | ISC-READING-1 |
| Annotation voice (one-line "why this matters to the practice" per entry, vs. neutral plot-summary one-liner) | ISC-READING-1 |
| Anchor-per-entry decision (per the iter 10 reflection — when annotations land, optionally lift each entry from a bullet to an `### Title — Author (Year)` heading so the entry gets a deep-link anchor) | ISC-READING-1 |

## Carryover

From the predecessor PRD: 16 of 16 buildable milestones already satisfied. The reading list scaffold lives at `src/content/living/library-reading.md` with 6 entries: Shop Class as Soulcraft (Crawford), The Right to Repair (Perzanowski), Free Software Free Society / Stallman's writings, The Soul of a New Machine (Kidder), Lewis Hyde, Ursula M. Franklin. Each entry currently has the title and author (where IA §5 named one) and `[PENDING]` for year + annotation.

Build/test floor at restructure time: `pnpm build` 14 pages, 2 baseline warnings; `pnpm check` 0/0/0 across 45 files; `pnpm test:ci` 25/25.

## Key Files

| Path | Action | Tier | Primary ISCs |
|---|---|---|---|
| `src/content/living/library-reading.md` | Modify (replace per-entry `[PENDING]` placeholders) | Standard (living content; smaller surface than canonical) | ISC-READING-1 |

Sibling doc artifacts (created during iter 1 brainstorm, parallel to the Charter pattern):
- `docs/reading-list-doctrinal-positions.md` (annotation voice + author-only-entry resolution, brainstormed before drafting)
- `docs/reading-list-implementation-plan.md` (per-entry draft plan)

## ISCs

- [x] **ISC-READING-1:** Each `src/content/living/library-reading.md` entry contains title, author, year, and a one-line annotation. The contributor list updates if the annotations are authored by a named person other than the maintainer. Replaces ISC-P2-CONTENT-4 from the predecessor 60-day PRD.

## Recommended workflow

Same chained workflow that closed ISC-P2-CONTENT-1 (Charter) and is recommended for ISC-GLOSSARY-1:

1. **`superpowers:brainstorming`** — surface the 4 user-input dependencies above one at a time via AskUserQuestion. Land in `docs/reading-list-doctrinal-positions.md`.
2. **`superpowers:writing-plans`** — produce per-entry draft plan in `docs/reading-list-implementation-plan.md`.
3. **`superpowers:executing-plans`** — ACT through the entries; VERIFY against INV-LIV-1/2 and INV-A11Y-* via test:ci; UPDATE; commit gated on fresh approval.

This PRD is smaller than the glossary PRD because the surface is more bounded (6 entries vs. ~15+ glossary terms) and the doctrinal stakes are lower (living content can be amended freely with `lastEditedAt` bumps, not the more weighty canonical `version` model).

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

### Iteration 1 — 2026-05-27
- **Start commit:** `9ead883`
- **Artifacts:** `docs/reading-list-doctrinal-positions.md` (tier: trivial) — design spec produced via `superpowers:brainstorming`
- **Milestones addressed:** none directly. SG-1 is a precursor; ISC-READING-1 is carried by SG-3.
- **Invariants verified:** INT-PROC-1 PASS (`pnpm check` 0/0/0 across 56 files; `git status` shows only the new `docs/*.md` artifact, no `src/` changes — Astro build tree unaffected). The other 26 `INV-*` items have no jurisdiction over a `docs/*.md` doctrinal doc.
- **Overall:** PASS
- **Reflection:** Three things worth carrying forward. (1) **Reading two doctrinal-doc precedents before drafting compressed the spec's structure.** `docs/charter-doctrinal-positions.md` (6 positions) and `docs/glossary-doctrinal-positions.md` (different shape — per-entry schema) gave the form a worked range. The reading list landed at 4 positions, deliberately less elaborate than the Charter and more compact than the Glossary — a shape that fits the doctrinal stakes of *living* content rather than copy-pasting either precedent. (2) **The brainstorming skill defaults the spec to `docs/superpowers/specs/...`; the PRD pre-named `docs/reading-list-doctrinal-positions.md`.** The skill recognizes user-preference overrides, but only because the PRD body explicitly named the path. PRDs that want a sibling-doc location should keep prescribing it explicitly — otherwise the skill's default kicks in and the artifact lands inconsistently with the project's documentation convention. (3) **The Q3 answer surfaced a better doctrinal framing than the question pre-loaded.** I framed Q3 with the scaffold's "sermon" wording assuming the user would pick the "why-this-matters" voice; they picked neutral plot summary instead. The reconciliation that emerged — **the curation IS the sermon; the annotation is the citation** — is more elegant than either of the question's framings and is now durable in §1 of the spec. Lesson: don't pre-judge `AskUserQuestion` answers; the user's choice may reveal a better synthesis than the question's framing assumed.
- **Remaining:** 1 milestone pending (ISC-READING-1). Next: SG-2 (`writing-plans` → `docs/reading-list-implementation-plan.md`), then SG-3 (per-entry content edits → `src/content/living/library-reading.md`).

### Iteration 2 — 2026-05-27
- **Start commit:** `e654943`
- **Artifacts:** `docs/reading-list-implementation-plan.md` (tier: trivial) — implementation plan produced via `superpowers:writing-plans`, 231 lines, 10 tasks
- **Milestones addressed:** none directly. SG-2 is a precursor; ISC-READING-1 is carried by SG-3.
- **Invariants verified:** INT-PROC-1 PASS (`pnpm check` 0/0/0 across 56 files; `git status` shows only the new `docs/*.md` artifact, no `src/` changes — Astro build tree unaffected). The other 26 `INV-*` items have no jurisdiction over a `docs/*.md` planning doc.
- **Overall:** PASS
- **Reflection:** Three insights worth carrying forward. (1) **The writing-plans skill auto-scaled appropriately to the work.** I worried the skill might over-fit (Charter plan was 493L, Glossary 692L for much larger drafting jobs); the reading-list plan came in at 231L for a 6-bullet content edit — proportional. The plan's "Decisions resolved by this plan" header section absorbed wording-polish discussion that would otherwise have surfaced mid-execution. Trust the skill's scaling unless there's positive evidence of mismatch. (2) **The plan stage is the *second* pass over the spec — format/voice inconsistencies surface here that the brainstorm stage missed.** Working through the spec's draft annotations against the bullet structure exposed two real issues: (a) 4 of 6 annotations started with the author's name, creating "Lewis Hyde. 1983. Lewis Hyde's argument…" double-mention with the bullet's author field; (b) the Franklin annotation said "Ursula Franklin's 1989 Massey Lectures…" which double-prints the year. Recasting all 6 to subjectless form is a small but real polish the brainstorm missed. Lesson: brainstorm settles doctrine; plan settles surface form. Both passes are necessary. (3) **The `<TODAY>` placeholder pattern in plan task steps is a clean abstraction.** Used in Task 1 (`lastEditedAt`) and Task 9.3 (frontmatter `updated`) — executor substitutes at iteration time without losing the structural marker. Alternative (hard-coding the plan's drafting date) would age the plan if SG-3 runs on a different day. Worth carrying forward: any per-iteration timestamp in a plan should be a named placeholder, not a literal date.
- **Remaining:** 1 milestone pending (ISC-READING-1). Next: SG-3 (per-entry content edits → `src/content/living/library-reading.md`) — executes the 10-task plan, satisfies ISC-READING-1, PRD becomes COMPLETE.

### Iteration 3 — 2026-05-27
- **Start commit:** `9f53113`
- **Artifacts:** `src/content/living/library-reading.md` (tier: standard) — 7 Edits per the 10-task plan: 1 frontmatter `lastEditedAt` bump (2026-05-25 → 2026-05-27) + 6 entry replacements (each adding `<a id="…">` anchor, year, and subjectless one-line annotation, dropping `(selected works)` / `(selected writings)` parentheticals where applicable)
- **Milestones addressed:** ISC-READING-1
- **Invariants verified:** all PASS across the full 27-invariant set (mechanically — 51/51 Playwright tests in 23.5s, including `tests/a11y-full.spec.ts` route `/library/reading/` axe-clean in 2.0s with the new `<a id>` anchors). `pnpm check` 0/0/0 across 56 files. `pnpm build` Complete, sitemap regenerated. INV-CAN-1/2/3 vacuous (jurisdiction is CanonicalDoc, not LivingDoc); INV-DOC-NAME vacuous (no TS edited). Spot-checks: `grep '\[PENDING\]' src/content/living/library-reading.md` → 0 matches; `grep -oE 'id="(shop-class-as-soulcraft\|the-right-to-repair\|free-software-free-society\|the-soul-of-a-new-machine\|the-gift\|the-real-world-of-technology)"' dist/library/reading/index.html` → all 6 unique slugs render.
- **Overall:** PASS — ISC-READING-1 satisfied; PRD status → COMPLETE
- **Reflection:** Four insights from the full 3-iteration arc. (1) **The brainstorm-plan-execute triad mapped cleanly onto SG-1/SG-2/SG-3 with empty `milestones: []` on the precursor subgoals.** This pattern (only the terminal SG carries the ISC) prevents the work-loop's UPDATE phase from falsely flagging FAIL when a precursor iteration completes without satisfying the milestone. Worth recommending in `prd_work_loop` documentation for any PRD whose workflow uses brainstorming/writing-plans as precursors. (2) **Per-iteration evidence accumulates differently across complexity tiers.** Iters 1–2 (trivial, `docs/*.md`) had a 1-item pre-flight (INT-PROC-1 only); iter 3 (standard, `src/content/*.md`) had a 28-item pre-flight including all 27 invariants — but most resolved as either "test #N passed" or "N/A vacuous." The 28-item pre-flight took only marginally more effort than the 1-item version because the heavy mechanical work was already encoded in `tests/`. Lesson: a mature test suite makes wide pre-flights cheap. (3) **`<TODAY>` placeholder pattern (introduced in iter 2's plan) cleanly resolved during execution.** Substituted in Task 1 (lastEditedAt → 2026-05-27) without confusion. The plan stays usable as an artifact even after execution — re-reading it tomorrow, future-me would understand which date is the plan's drafting date vs. which is the iteration's substitution. (4) **Wording polishes the plan introduced** (subjectless annotations, dropping selected-works parentheticals, removing year-duplication in Franklin) **all rendered cleanly**. No follow-up needed; the rendered page shows the 6 entries with consistent voice. The spec → plan refinement loop is a real value, not ceremony.
- **Remaining:** 0 milestones pending — PRD COMPLETE.
