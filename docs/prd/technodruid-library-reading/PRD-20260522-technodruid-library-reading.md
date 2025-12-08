---
prd_id: PRD-20260522-technodruid-library-reading
title: "Technodruid.org — Reading list living-content annotations"
phase: 2
status: ACTIVE
iteration: 0
current_phase: null
last_phase: null
created: 2026-05-22
updated: 2026-05-22
source_spec: docs/information-architecture.md
invariant_doc: docs/invariant_requirements.md
predecessor_prd: docs/prd/done/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md
verification_summary: "Not yet started. Iter 0 = PRD scaffold."
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

- [ ] **ISC-READING-1:** Each `src/content/living/library-reading.md` entry contains title, author, year, and a one-line annotation. The contributor list updates if the annotations are authored by a named person other than the maintainer. Replaces ISC-P2-CONTENT-4 from the predecessor 60-day PRD.

## Recommended workflow

Same chained workflow that closed ISC-P2-CONTENT-1 (Charter) and is recommended for ISC-GLOSSARY-1:

1. **`superpowers:brainstorming`** — surface the 4 user-input dependencies above one at a time via AskUserQuestion. Land in `docs/reading-list-doctrinal-positions.md`.
2. **`superpowers:writing-plans`** — produce per-entry draft plan in `docs/reading-list-implementation-plan.md`.
3. **`superpowers:executing-plans`** — ACT through the entries; VERIFY against INV-LIV-1/2 and INV-A11Y-* via test:ci; UPDATE; commit gated on fresh approval.

This PRD is smaller than the glossary PRD because the surface is more bounded (6 entries vs. ~15+ glossary terms) and the doctrinal stakes are lower (living content can be amended freely with `lastEditedAt` bumps, not the more weighty canonical `version` model).

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

*(empty — first iteration begins when the user invokes the brainstorm workflow)*
