---
prd_id: PRD-20260522-technodruid-glossary
title: "Technodruid.org — Glossary canonical body draft"
phase: 2
status: COMPLETE
iteration: 3
current_phase: null
last_phase: UPDATE
created: 2026-05-22
updated: 2026-05-23
source_spec: docs/information-architecture.md
invariant_doc: docs/invariant_requirements.md
predecessor_prd: docs/prd/done/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md
verification_summary: "Iter 3: Glossary body draft landed at src/content/canonical/glossary.md (37 entries, deep-anchored See: lines, in-page See also: hyperlinks, no Gloss. prefix per in-flight user feedback). ISC-GLOSSARY-1 SATISFIED. All applicable invariants PASS (INV-CAN-1/2/3, INV-A11Y-1/3, INV-BUILD-1/2/3, INV-PROC-1, INV-NAV-2). pnpm test:ci 25/25. PRD COMPLETE."
failing_criteria: []
unblocked_by: "Predecessor 60-day PRD (now archived in docs/prd/done/): 16/16 buildable milestones satisfied; the present PRD covers ISC-GLOSSARY-1 (formerly ISC-P2-CONTENT-2), one of two content tail milestones extracted from the 60-day PRD by the 2026-05-22 restructure."
split_history: "2026-05-22: extracted from PRD-20260516-technodruid-phase2-60day.md per user request to break the 60-day PRD into smaller chunks. Covers what was ISC-P2-CONTENT-2 (glossary terms)."
---

# Technodruid.org — Glossary PRD

> **Status: ACTIVE** (as of iter 0, 2026-05-22). Predecessor: the Phase 2 60-day PRD reached its functional terminus on 2026-05-22 with 16/16 buildable milestones satisfied. This PRD covers the glossary content tail; sibling PRD covers the reading list (`docs/prd/technodruid-library-reading/`).

## Scope

Populate `src/content/canonical/glossary.md` with real terms, replacing the `[CANONICAL TEXT PENDING]` placeholder body. The scaffold landed at iter 8 of the predecessor PRD (`docs/prd/done/technodruid-phase2-60day/`, SG-7) with `version: "0.1.0"` per the scaffold-honest-semver convention. The canonical `version` bump to `1.0.0` is deferred until the site goes public per `feedback_no_version_bump_prerelease.md`; `amendedAt` updates when the body lands.

## User-input dependencies

The glossary is canonical doctrine. The doctrinal stance the glossary takes on each term shapes how readers interpret the rest of the corpus. The PRD's first iteration brainstorms term selection and definitional voice before any drafting — same workflow that closed ISC-P2-CONTENT-1 for the Charter (`docs/charter-doctrinal-positions.md` is the worked example).

| Input needed | Blocks ISCs |
|---|---|
| Term selection (which doctrinal terms warrant an entry vs. trust the canonical source) | ISC-GLOSSARY-1 |
| Definitional voice (terse declarative à la a dictionary, or longer-form à la an encyclopedia entry) | ISC-GLOSSARY-1 |
| Cross-reference convention (each term → canonical source location, or each term standalone) | ISC-GLOSSARY-1 |

## Carryover

From the predecessor PRD: 16 of 16 buildable milestones already satisfied including ISC-P2-CONTENT-1 (Charter body). The 2 remaining content milestones (CONTENT-2 = this PRD, CONTENT-4 = the sibling reading list PRD) were the only items left when the 60-day PRD was archived.

Build/test floor at restructure time: `pnpm build` 14 pages, 2 baseline warnings (`callings/` + `circuits/` glob-loader, Phase 3 scope); `pnpm check` 0/0/0 across 45 files; `pnpm test:ci` 25/25.

## Key Files

| Path | Action | Tier | Primary ISCs |
|---|---|---|---|
| `src/content/canonical/glossary.md` | Modify (replace `[CANONICAL TEXT PENDING]` body) | Complex (canonical doctrinal content) | ISC-GLOSSARY-1 |

Sibling doc artifacts (created during iter 1 brainstorm, parallel to the Charter pattern):
- `docs/glossary-doctrinal-positions.md` (term-selection + voice positions, brainstormed before drafting)
- `docs/glossary-prose-implementation-plan.md` (per-term draft plan, written before execution)

## ISCs

- [x] **ISC-GLOSSARY-1:** `src/content/canonical/glossary.md` body contains real terms with definitions and cross-references to canonical source where applicable. Replaces ISC-P2-CONTENT-2 from the predecessor 60-day PRD. *(Satisfied iter 3 by drafting against `docs/glossary-doctrinal-positions.md`, with in-flight amendments per user feedback: no `**Gloss.**` prefix; deep-anchored `See:` lines and in-page-anchored `See also:` hyperlinks.)*

## Recommended workflow

The Charter (predecessor ISC-P2-CONTENT-1) was satisfied by a chained workflow that this PRD's first iteration should mirror:

1. **`superpowers:brainstorming`** — surface doctrinal positions (which terms; what voice; what cross-reference convention; how the canonical version bumps), one position per AskUserQuestion. Approved positions land in `docs/glossary-doctrinal-positions.md`.
2. **`superpowers:writing-plans`** — produce `docs/glossary-prose-implementation-plan.md`: per-term draft tasks + VERIFY phase + UPDATE phase + commit gate.
3. **`superpowers:executing-plans`** — single ACT pass through the term drafts; VERIFY against the project's invariant pre-flight; UPDATE the PRD checkbox + LOG entry + state.json; commit gated on fresh approval.

Term-selection seed (candidates surfaced during the Charter brainstorm — to be confirmed or amended in this PRD's iter 1):

- *Open Circuit* — the umbrella term for the religion; the loose collective and corpus
- *Circuit* — the basic congregational unit (gathering around a workbench)
- *Practitioner* — someone initiated via the Rite
- *Apprentice* — relationship to the bench, pre-initiation
- *Candidate*, *Witness* — Rite roles
- *Maintainer* — corpus-stewardship role (compiler, not author)
- *The Three Currents* — Material, Pattern, Living
- *The Three Markers* — Rite §II objects
- *Sacred Practices* — the 8 named in Codex §VI
- *The Three Callings* — Documenter, Tinkerer, Architect (Codex §VII)
- *The Wheel*, *the four hinges*
- *Privacy of the Keeper, Commons of Pattern, Mending Before Replacement* — the 3 ethical commitments

The seed is illustrative, not binding; the iter 1 brainstorm decides term inclusion.

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

### Iteration 1 — 2026-05-23
- **Start commit:** `27bb00f`
- **Artifacts:** `docs/glossary-doctrinal-positions.md` (tier: standard)
- **Milestones addressed:** none directly (this iteration produces the spec input for ISC-GLOSSARY-1; the body draft lands in a later iteration per the PRD's recommended workflow)
- **Invariants verified:** INV-PROC-1 PASS (`pnpm build` exit 0, 14 pages built, 2 baseline warnings only — matching the PRD-noted Phase 3 scope baseline)
- **Overall:** PASS
- **Reflection:** Brainstorm + spec landed in a single iteration, mirroring the Charter pattern (predecessor ISC-P2-CONTENT-1). Five doctrinal positions surfaced via AskUserQuestion (voice → hybrid terse-head + optional gloss; term scope → doctrinal-vocabulary completeness; cross-ref → Pointer/canonical-authoritative; ordering → strict alphabetical; named-grouping handling → meta-entry + member entries with bidirectional `See also` links). Two non-obvious things emerged. (1) The "one primary `See:` anchor" rule had to be enforced in self-review: several Sacred Practice entries initially carried both their Codex §VI defining anchor and their Codex §IX Wheel-hinge anchor — the Wheel anchor moved into the gloss. The Pointer convention's "single source" is load-bearing: it is what prevents the Glossary from drifting into a parallel canon. (2) The "named-grouping" position generalizes the user's "triad" choice — Sacred Practices is an octad and the Wheel has four hinges, neither of which is a triad, but the same meta-entry + member-entry mechanic applies. The Wheel's hinges got an explicit exception (no individual entries for spring equinox / summer solstice / etc.) because those are generic astronomical terms with no Open-Circuit-coined name.
- **Remaining:** 1 milestone pending (ISC-GLOSSARY-1). Next subgoal: SG-2 — write `docs/glossary-prose-implementation-plan.md` via the `superpowers:writing-plans` skill, then SG-3 — replace the `[CANONICAL TEXT PENDING]` body in `src/content/canonical/glossary.md`.

### Iteration 2 — 2026-05-23
- **Start commit:** `27bb00f`
- **Artifacts:** `docs/glossary-prose-implementation-plan.md` (tier: standard, ~687 lines, 13 tasks, 27 checkbox steps)
- **Milestones addressed:** none directly (this iteration produces the per-task plan input for SG-3; the body draft satisfying ISC-GLOSSARY-1 lands in iter 3)
- **Invariants verified:** INV-PROC-1 PASS (`pnpm build` exit 0, 14 pages built in 3.61s, 2 baseline warnings only — net delta 0 vs iter 1)
- **Overall:** PASS
- **Reflection:** Mirrors the Charter precedent (`docs/charter-prose-implementation-plan.md`, 493 lines / 15 tasks). The glossary plan came out longer (687 lines) because Task 2 embeds the entire 37-entry body verbatim — there is only one ACT task (replace `[CANONICAL TEXT PENDING]`) whereas the Charter had 7 ACT tasks (one per Charter section). This is the cost-and-benefit of the doctrinal-positions-spec being granular at the per-entry level: the implementation plan has very few execution-time decisions to make, but is correspondingly larger. Two design choices worth recording. (1) The hyperlink transformation from bare spec citations ("Codex §X") to rendered Markdown links (`[Codex §X](/codex)`) is captured as a site-path table in the Pre-execution constraints, so the executor pastes pre-transformed prose rather than transforming at execution time — eliminates a class of error and makes Task 8's spec-conformance checks meaningful. (2) The DECISIONS.md entry named in spec §6 step 4 is intentionally not a plan task, mirroring the Charter precedent (Charter spec also named `DECISION-CIRCUIT-CHARTER` but the Charter prose plan also omitted it; the DECISIONS update is a separate doctrinal-stewardship action the user can take when ready). If the user wants DECISIONS coverage enforced in plans, the Charter+Glossary precedent should be revised.
- **Remaining:** 1 milestone pending (ISC-GLOSSARY-1). Next subgoal: SG-3 — execute the plan to draft the Glossary body. Recommended sub-skill per the plan header: `superpowers:executing-plans` or `superpowers:subagent-driven-development`.

### Iteration 3 — 2026-05-23
- **Start commit:** `27bb00f`
- **Artifacts:** `src/content/canonical/glossary.md` (tier: complex — canonical doctrinal body draft; 37 entries; final rendered length ~330 lines including frontmatter). Companion in-flight amendments to spec (`docs/glossary-doctrinal-positions.md`) and plan (`docs/glossary-prose-implementation-plan.md`) to keep doctrine coherent.
- **Milestones addressed:** ISC-GLOSSARY-1 (PASS).
- **Subgoal selection note:** Executed `docs/glossary-prose-implementation-plan.md`. The plan's Task 2 (single ACT pass replacing `[CANONICAL TEXT PENDING]`) produced the body; Task 1 set `amendedAt: 2026-05-23`. Three in-flight amendments before VERIFY closed: (1) added an `## Terms` H2 between the intro paragraph and the first H3 entry — caught by INV-A11Y-3 which flagged the rendered page's H1→H3 skip; (2) removed the `**Gloss.**` prefix from all gloss paragraphs per user feedback ("I don't like the 'Gloss.' prefix that is everywhere"); (3) reworked `See:` lines to use deep section anchors (e.g., `/codex#vi-sacred-practices`) and `See also:` lines to use in-page glossary hyperlinks (`[Documenter](#documenter)`) per user clarification ("The See: sections should link to the entries in the glossary"; via AskUserQuestion → "Both — deep-anchor See: AND in-page See also:"). Spec and plan were amended to match so the corpus stays coherent and future executions don't regress.
- **Invariants verified:** all PASS. INV-CAN-1 (`data-version="0.1.0"` + two `<time>` elements rendered: `2026-05-20T00:00:00.000Z` firstPublishedAt, `2026-05-23T00:00:00.000Z` amendedAt); INV-CAN-2 (Source + Revision history links rendered with PLACEHOLDER repo host); INV-CAN-3 (`pnpm check` 0/0/0); INV-A11Y-1 (axe-core WCAG 2.2 AA PASS for /practices/glossary, 19.8s); INV-A11Y-3 (H1→H2→H3 hierarchy after `## Terms` fix); INV-BUILD-1 (`pnpm build` exit 0, 14 pages built, 2 baseline warnings net delta 0); INV-BUILD-2 (check 0/0/0); INV-BUILD-3 (`sitemap-index.xml` generated); INV-PROC-1 (build+check+tests all green); INV-NAV-2 (no broken internal links — all deep anchors verified against `dist/<page>/index.html` IDs). `pnpm test:ci` 25/25. Spec-conformance: 37 entries; strictly alphabetical (diff-sort empty); all `See:` lines single-source (grep semicolon → 0); all triad/grouping members link back to their meta-entries; all 8 Sacred Practice members link to Sacred Practices meta-entry; all 6 meta-entries present (Three Callings, Three Currents, Three Ethical Commitments, Three Markers, Sacred Practices, The Wheel); no out-of-scope entries.
- **Overall:** PASS
- **PRD status:** 1 of 1 ISC-GLOSSARY-1 milestone satisfied. PRD ready to mark COMPLETE.
- **Reflection:** Three lessons recorded as memory entries this session — that's unusually high for a single iteration and suggests the spec/plan caught one whole class of issue (doctrinal coherence) while leaving another whole class (presentation aesthetics + navigation precision) for the executor to discover. (1) **Spec was complete with respect to doctrine, silent on accessibility invariants.** The H3-per-entry / "no section headers within the list" combination set up the H1→H3 skip; only the rendering surfaced it. Mitigation: the spec now documents the `## Terms` H2 requirement explicitly; future entry-format specs in this project should run a heading-hierarchy check during the brainstorm. (2) **`**Gloss.**` prefix was visual repetition I should have caught.** I chose the prefix from the worked example in the brainstorm's voice question. The user's preview-selection signaled approval of the format but didn't reflect the cumulative-repetition feel — 22 identical prefixes in one page reads differently than a single example. Saved as `feedback_no_gloss_prefix.md`. (3) **The Pointer convention is satisfied either by page-level or section-level anchors; the user wanted section-level.** The spec said "primary canonical source" without specifying granularity. Section-level is strictly better for navigation; saved as `feedback_deep_anchor_cross_refs.md` along with the See-also-hyperlink convention. The plan's site-path table now documents the deep-anchor mapping verified against the rendered HTML IDs. The Charter precedent did not deep-anchor — that's a deviation from the Charter pattern this PRD introduced.
- **Remaining:** 0 milestones pending. PRD status → COMPLETE.
