# Glossary — Prose Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. **Project deviation:** the project's native execution pattern is `prd_work_loop` iterations (see `docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md`); this plan structures the work as the ACT/VERIFY/UPDATE phases of a single `prd_work_loop` iteration.

**Goal:** Draft the canonical body of `src/content/canonical/glossary.md` v1 against the doctrinal positions in `docs/glossary-doctrinal-positions.md`, satisfying ISC-GLOSSARY-1 in the Glossary PRD.

**Architecture:** One `prd_work_loop` iteration. The ACT phase replaces the scaffold's `[CANONICAL TEXT PENDING]` body with 37 alphabetical glossary entries (head + optional gloss + `See:` + optional `See also:`) and updates the frontmatter `amendedAt`. The VERIFY phase runs the project's existing build/test floor (`pnpm build`, `pnpm check`, `pnpm test:ci`), plus INV-CAN-* spot-checks against rendered HTML, plus spec-conformance spot-checks specific to the Glossary (entry count, alphabetical order, single-source `See:` lines, triad-member back-links). The UPDATE phase flips the PRD checkbox for ISC-GLOSSARY-1, appends a LOG entry, updates PRD frontmatter, and updates `state.json`. Single commit at the end, gated on explicit user approval per the user's CLAUDE.md commits-require-fresh-approval rule.

**Tech Stack:** Astro 5 content collections (`canonical`), `CanonicalDoc` layout, Markdown frontmatter validated by Zod schema in `src/content.config.ts`, Playwright + axe-core invariant tests in `tests/`.

**Spec source:** `docs/glossary-doctrinal-positions.md`. All entry prose in this plan derives verbatim from the spec's §4 per-term sketches, with one mechanical transformation applied: bare textual citations like "Codex §X" become Markdown hyperlinks like `[Codex §X](/codex#x-the-circuit)`. The transformation table is in the Pre-execution constraints below.

**Pattern reference:** `docs/charter-prose-implementation-plan.md` (the Charter's analog — same author, same project, immediately preceding worked example).

**Pre-execution constraints (apply to every drafting task):**

- Frontmatter `version` STAYS `"0.1.0"` per `feedback_no_version_bump_prerelease.md` (no canonical version bumps during pre-release; amend `amendedAt` only).
- Frontmatter `firstPublishedAt` STAYS `2026-05-20` (the scaffold-land date — unchanged by body-draft amendments).
- Frontmatter `printable` STAYS `true`. `downloadableFormats` STAYS `[]`.
- No inline styles, no `any` in TypeScript, no third-party font/tracker/comment-system references — invariants INV-CODE-1/2, INV-DOC-1/2/3 transitively enforced.
- Voice is declarative third-person; hybrid form per spec §1 (terse head + optional gloss).
- Cross-references to canonical docs use the on-site path with a **fragment anchor** for the specific section, NOT the source file path and NOT a bare page link. **Site-path table** (verified against rendered HTML anchor IDs in `dist/<page>/index.html` — Astro slugifies headings):
  | Spec reference text | Rendered hyperlink |
  |---|---|
  | `Codex §I` / `§II` / `§III` | `[Codex §<sec>](/codex#<roman>-<slug>)` (e.g., `[Codex §X](/codex#x-the-circuit)`, `[Codex §IV](/codex#iv-the-three-currents)`) |
  | `Codex §V.<n>` | `[Codex §V.<n>](/codex#<n>-<slug>)` (e.g., `[Codex §V.6](/codex#6-the-privacy-of-the-keeper)`) |
  | `Codex §V.4–5` | points at first in range — `[Codex §V.4–5](/codex#4-the-honoring-of-the-mine-the-maker-and-the-material)` |
  | `Rite §<sec>` | `[Rite §<sec>](/practices/rite#<roman>-<slug>)` (e.g., `[Rite §VIII](/practices/rite#viii-the-naming)`) |
  | `Rite, Setting and Roles` | `[Rite, Setting and Roles](/practices/rite#setting-and-roles)` |
  | `Notes on the Rite` | `[Notes on the Rite](/practices/rite#notes-on-the-rite)` |
  | `rite.md` (the document as a whole) | `[The Rite of the Open Circuit](/practices/rite)` (bare — whole-document reference) |
  | `about-origins.md` (ethical commitments naming) | `[Origins](/about/origins#by-whom)` |
  | `about-origins.md §"By whom"` | `[Origins — By whom](/about/origins#by-whom)` |
  | `about-origins.md §How it emerged` | `[Origins — How it emerged](/about/origins#how-it-emerged)` |
  | `Charter §1` | `[Circuit Founding Charter §1](/circuits/charter#minimum-requirements)` (§-number folded into link text) |
  | `Charter §2` | `[Circuit Founding Charter §2](/circuits/charter#suggested-practices)` |
  | `Charter §3` | `[Circuit Founding Charter §3](/circuits/charter#naming-conventions)` |
- **`See also:` lines are hyperlinks to in-glossary anchors.** Each comma-separated term is a Markdown link to its in-page anchor (e.g., `[Documenter](#documenter)`). Anchor slugs follow Astro's H3-slugification (lowercase, spaces and slashes → hyphens). The H2 `## Terms` heading immediately before the first H3 entry is REQUIRED — without it, the page rendering would skip from H1 (title) to H3, violating INV-A11Y-3.
- **No `**Gloss.**` prefix on gloss paragraphs.** The gloss is a plain paragraph between the head and the `See:` line, identified by position rather than label. Per `feedback_no_gloss_prefix.md` (2026-05-23 user feedback).
- The 37 entries are drafted **verbatim from the spec §4** with only the hyperlink transformations above. Substantive prose changes during execution signal that the spec needs amendment first; surface them to the user before continuing.

---

## Task 1: Update frontmatter `amendedAt` to today's date

**Files:**
- Modify: `src/content/canonical/glossary.md` (lines 1–9, frontmatter block)

- [ ] **Step 1.1: Update `amendedAt`**

Use `Edit` tool:
- `old_string`: `amendedAt: 2026-05-20`
- `new_string`: `amendedAt: YYYY-MM-DD` (substitute today's actual date at execution time)

`version` stays at `"0.1.0"`. `firstPublishedAt` stays at `2026-05-20`. `printable` stays `true`. `downloadableFormats` stays `[]`. `title` and `description` stay as in the scaffold.

- [ ] **Step 1.2: Verify the schema still validates**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across 45 files`. If `firstPublishedAt` was accidentally touched or any required field removed, this reports a content-collection schema violation (INV-CAN-3).

---

## Task 2: Replace `[CANONICAL TEXT PENDING]` body with all 37 glossary entries

**Files:**
- Modify: `src/content/canonical/glossary.md` (line 11, the `[CANONICAL TEXT PENDING]` placeholder)

- [ ] **Step 2.1: Replace the body**

Use `Edit` tool. The current scaffold body is the single line `[CANONICAL TEXT PENDING]`.

- `old_string`: `[CANONICAL TEXT PENDING]`
- `new_string`: the full body below (37 entries, alphabetical, with hyperlinks applied per the Pre-execution table):

````markdown
The Glossary is a pointer to the canonical corpus. Each entry's job is to make a doctrinal term findable and direct the reader to the source where it is defined. Where this Glossary's text and the canonical source disagree, the canonical source wins. Entries are alphabetical; named groupings (the Three Currents, the Sacred Practices, the Wheel's hinges) are connected by `See also:` lines that link members and meta-entries within one hop.

### Apprentice

A pre-initiation relationship to the bench; not a class of person.

Anyone present at a Circuit and not yet a Practitioner is an apprentice. The status is conferred and ended by relationship to the workbench, not by ceremony or accreditation. Apprenticeship ends when the Rite of the Open Circuit is performed and the Naming is spoken.

**See:** [Rite §VIII](/practices/rite#viii-the-naming) (The Naming).
**See also:** [Candidate](#candidate), [Circuit](#circuit), [Practitioner](#practitioner).

### Architect

One of the Three Callings; the practitioner who holds doctrine, the long view, and the ethics of attention.

**See:** [Codex §VII](/codex#vii-the-three-callings).
**See also:** [Documenter](#documenter), [Three Callings](#three-callings), [Tinkerer](#tinkerer).

### Audit

The Sacred Practice of examining what one's devices observe, record, and report, then severing or rebalancing what flows outward without consent.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Privacy of the Keeper](#privacy-of-the-keeper), [Sacred Practices](#sacred-practices).

### Candidate

The role assumed by an apprentice at the moment of the Rite of the Open Circuit; the practitioner-in-process.

**See:** [Rite, Setting and Roles](/practices/rite#setting-and-roles).
**See also:** [Apprentice](#apprentice), [Practitioner](#practitioner), [Witness](#witness).

### Circuit

The basic congregational unit of the Open Circuit; a gathering of practitioners around a workbench.

A Circuit is defined by four artifacts — workbench, spare-parts library, documentation shelf, open invitation to apprentices — and operates compatibly with the three ethical commitments. [Codex §X](/codex#x-the-circuit) grants Circuits autonomy in local custom while holding to the core doctrine. The [Circuit Founding Charter §2](/circuits/charter#suggested-practices) operationalizes the binding floor.

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Documentation shelf](#documentation-shelf), [Open Circuit](#open-circuit), [Practitioner](#practitioner), [Spare-parts library](#spare-parts-library), [Three Ethical Commitments](#three-ethical-commitments), [Workbench](#workbench).

### Commons of Pattern

One of the Three Ethical Commitments; the principle that patterns — source code, schematics, documentation, protocols — belong freely to all keepers and must not be enclosed.

Operationalizes [Codex §V.2](/codex#2-the-commons-of-pattern). A Circuit's instructional and doctrinal material is shared, not paywalled. The commitment names the act of *enclosure* — by proprietary lock-in, patent thickets, contractual restriction, or criminalized reverse engineering — as the violation, not the medium of distribution.

**See:** [Origins](/about/origins#by-whom) (the ethical commitments naming).
**See also:** [Pattern](#pattern), [Three Ethical Commitments](#three-ethical-commitments).

### Composting

The Sacred Practice of separating a truly-ended device's components and returning them to their proper streams.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Material](#material), [Sacred Practices](#sacred-practices).

### Corpus

The set of canonical and living documents that constitute the technodruidic doctrine and practice; specifically, the contents of `src/content/canonical/` and `src/content/living/`.

The corpus is what a Fork forks. Maintainer stewardship operates over the corpus; doctrinal claims trace to it.

**See:** [Origins — How it emerged](/about/origins#how-it-emerged).
**See also:** [Fork](#fork), [Maintainer](#maintainer).

### Documentation shelf

One of the four definitional artifacts of a Circuit; the collection of service manuals, schematics, repair logs, wikis, or shared cloud folders that practitioners use and contribute to.

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Circuit](#circuit).

### Documenter

One of the Three Callings; the practitioner who keeps the knowledge findable.

**See:** [Codex §VII](/codex#vii-the-three-callings).
**See also:** [Architect](#architect), [Three Callings](#three-callings), [Tinkerer](#tinkerer).

### Fork

A copy of the canonical corpus maintained as a related-but-distinct practice; anticipated, encouraged, and not treated as schism.

A Fork is honest. A practitioner or group that wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. Contrast: a Circuit that quietly removes MUST items while claiming Open Circuit lineage is not a fork — it is misrepresentation. The line is the honesty of the claim, not the existence of divergence.

**See:** [Origins — By whom](/about/origins#by-whom).
**See also:** [Corpus](#corpus), [Maintainer](#maintainer).

### Hinge

A point on the Wheel that binds the practitioner to a Sacred Practice; the four hinges are the solstices and the equinoxes.

The hinges have two characters: the solstices (winter, summer) are the year's extremes — calling for taking stock (Inventory) and recommitting (Renewal) — and the equinoxes (spring, autumn) are the balance points, calling for passing knowledge forward (Teaching) and naming what was lost (Vigil). A Circuit SHOULD mark all four hinges per the [Circuit Founding Charter §2](/circuits/charter#suggested-practices) (Suggested practices).

**See:** [Codex §IX](/codex#ix-the-wheel).
**See also:** [The Wheel](#the-wheel), [Inventory](#inventory), [Renewal](#renewal), [Teaching](#teaching), [Vigil](#vigil).

### Inventory

The Sacred Practice of accounting, at the winter solstice, for every device one keeps — asking whether it still serves, can be repaired, should be passed on, or should be returned to its materials.

Anchored to the winter-solstice hinge of the Wheel ([Codex §IX](/codex#ix-the-wheel)).

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Hinge](#hinge), [Sacred Practices](#sacred-practices), [The Wheel](#the-wheel).

### Living

One of the Three Currents; the current of use, wear, modification, inheritance, and the relationship between a device and the hands that live with it.

The Living Current is also the locus of surveillance harm: a device whose Living Current flows only outward — to those who do not own it — has been turned against its keeper. The Privacy of the Keeper commitment defends this current.

**See:** [Codex §IV](/codex#iv-the-three-currents).
**See also:** [Material](#material), [Pattern](#pattern), [Privacy of the Keeper](#privacy-of-the-keeper), [Three Currents](#three-currents).

### Maintainer

A corpus-stewardship role; the named individual or group who tends the canonical corpus (compiles, does not author).

The Maintainer is not a clergy and not a court. The role is editorial: stewarding the file, applying clear-cut Codex-incompatibility removals from the Circuit directory with public log notes, accepting PRs against canonical and living docs. The transparency of the role is doctrinally significant — [Origins](/about/origins#by-whom) names the maintainer publicly because pretending the role does not exist would be dishonest.

**See:** [Origins — By whom](/about/origins#by-whom).
**See also:** [Corpus](#corpus), [Fork](#fork).

### Material

One of the Three Currents; the physical substrate — metals, polymers, glass, silicon, rare earths — extracted from the Earth and owed return to it.

**See:** [Codex §IV](/codex#iv-the-three-currents).
**See also:** [Living](#living), [Pattern](#pattern), [Three Currents](#three-currents).

### Mending

The Sacred Practice of restoring function to a thing presumed dead; the central rite of the religion.

Distinct from the ethical commitment *Mending Before Replacement*, which is the broader doctrinal commitment. *Mending* the practice is the concrete act; *Mending Before Replacement* the commitment is the priority ordering ("attempt repair first") that the practice instantiates.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Mending Before Replacement](#mending-before-replacement), [Sacred Practices](#sacred-practices).

### Mending Before Replacement

One of the Three Ethical Commitments; the priority-ordering principle that repair is attempted before discard, and that planned obsolescence is named as a violation.

Operationalizes [Codex §V.1](/codex#1-the-right-of-repair) (Right of Repair) and [§V.3](/codex#3-the-refusal-of-imposed-death) (Refusal of Imposed Death). A Circuit's stated practice is to attempt repair first. The commitment names both the practice (repair-attempt-first) and the systemic resistance (opposition to mechanisms that end a thing's life by decree rather than by genuine failure).

**See:** [Origins](/about/origins#by-whom) (the ethical commitments naming).
**See also:** [Mending](#mending), [Three Ethical Commitments](#three-ethical-commitments).

### Open Circuit

The umbrella term for the religion; the loose collective of practitioners, the canonical corpus, and the Circuits that hold to it.

[Codex §X](/codex#x-the-circuit) frames the name as deliberate paradox: incomplete because incompleteness is the welcome, awaiting connection because connection is the work. "Open" is the perpetual state — the circuit closes (current flows) when practitioners gather and tend; it opens again when they part. The umbrella name is reserved (per [Circuit Founding Charter §3](/circuits/charter#naming-conventions)) — no individual Circuit names itself "Open Circuit".

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Circuit](#circuit), [Corpus](#corpus), [Practitioner](#practitioner).

### Opening

The Sacred Practice of opening a new device — knowing its interior, understanding its assembly, reading what its makers have wrought — as the first ritual act with it.

Distinct from the Rite's *Opening of the Circuit* ([Rite §I](/practices/rite#i-the-opening-of-the-circuit)), which is the gathering's opening ritual. The Sacred Practice *Opening* concerns the relationship between a practitioner and a specific device. The Renewal is its reciprocal — the periodic re-act with a long-held device.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Renewal](#renewal), [Sacred Practices](#sacred-practices).

### Pattern

One of the Three Currents; the design, schematic, source code, firmware, protocol — the invisible structure that shapes raw material into purpose.

The Pattern Current flows or is dammed. The moral health of any technology depends on whether its patterns are open to those who keep it; the Commons of Pattern commitment defends this current.

**See:** [Codex §IV](/codex#iv-the-three-currents).
**See also:** [Commons of Pattern](#commons-of-pattern), [Living](#living), [Material](#material), [Three Currents](#three-currents).

### Practitioner

A person initiated into the Open Circuit through the Rite; conferred at the Naming (Rite §VIII).

Practitioner-status is not credentialed or revoked by office. It is established by the Rite's Naming and continues through the practitioner's own relationship to the bench, the Sacred Practices, and the commitments. A practitioner who has not taught in a season "has fallen out of right relation" ([Codex §VI](/codex#vi-sacred-practices), Teaching) — a doctrinal pressure, not an expulsion.

**See:** [Rite §VIII](/practices/rite#viii-the-naming) (The Naming).
**See also:** [Apprentice](#apprentice), [Candidate](#candidate), [Circuit](#circuit), [Witness](#witness).

### Privacy of the Keeper

One of the Three Ethical Commitments; the principle that what a keeper's device sees, hears, records, and reports is the keeper's to govern.

The full doctrinal statement is [Codex §V.6](/codex#6-the-privacy-of-the-keeper) (the Core Tenet). [Origins](/about/origins#by-whom) names this as one of the three ethical commitments alongside Commons of Pattern and Mending Before Replacement. Encryption, local processing, data sovereignty, and the right to refuse observation are framed as commitments, not preferences. The commitment names *surveillance* — by corporation, state, advertiser, or platform — as trespass across the threshold of the home.

**See:** [Codex §V.6](/codex#6-the-privacy-of-the-keeper).
**See also:** [Audit](#audit), [Living](#living), [Three Ethical Commitments](#three-ethical-commitments).

### Renewal

The Sacred Practice of re-opening a long-held device at the summer solstice — cleaned, refreshed, firmware updated, keys rotated, the commitment to keep it spoken again.

The reciprocal of the Opening: where Opening is the first ritual act with a new device, Renewal is the periodic re-act with one that has been kept. Anchored to the summer-solstice hinge of the Wheel ([Codex §IX](/codex#ix-the-wheel)).

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Hinge](#hinge), [Opening](#opening), [Sacred Practices](#sacred-practices).

### Rite of the Open Circuit

The initiation ceremony by which an apprentice becomes a practitioner.

Nine sections, structured around the Calling of the Three Currents ([Rite §II](/practices/rite#ii-the-calling-of-the-three-currents)) where the Witness places the Three Markers on the bench, the Three Questions ([Rite §IV](/practices/rite#iv-the-three-questions)), the Vows ([Rite §VI](/practices/rite#vi-the-vows)), the Giving of the Implement ([Rite §VII](/practices/rite#vii-the-giving-of-the-implement)), and the Naming ([Rite §VIII](/practices/rite#viii-the-naming)) — the moment at which practitioner-status is conferred. Translations and local adaptations are encouraged ([Notes on the Rite](/practices/rite#notes-on-the-rite)); structure and intention matter more than precise wording. The [Circuit Founding Charter §2](/circuits/charter#suggested-practices) requires that a Circuit be ready to offer the Rite when an apprentice is ready.

**See:** [The Rite of the Open Circuit](/practices/rite).
**See also:** [Apprentice](#apprentice), [Candidate](#candidate), [Practitioner](#practitioner), [Three Markers](#three-markers), [Witness](#witness).

### Sacred Practices

The eight named practices through which the doctrine is lived: Opening, Mending, Teaching, Composting, Vigil, Inventory, Audit, Renewal.

Each Practice is defined in [Codex §VI](/codex#vi-sacred-practices); four are anchored to specific hinges of the Wheel (Teaching/spring equinox, Renewal/summer solstice, Vigil/autumn equinox, Inventory/winter solstice — [Codex §IX](/codex#ix-the-wheel)). The others are observed as occasion calls.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Audit](#audit), [Composting](#composting), [Hinge](#hinge), [Inventory](#inventory), [Mending](#mending), [Opening](#opening), [Renewal](#renewal), [Teaching](#teaching), [The Wheel](#the-wheel), [Vigil](#vigil).

### Spare-parts library

One of the four definitional artifacts of a Circuit; a collection of components, fasteners, and raw stock kept for repair use.

Need not be large, sorted, or exhaustive. A shelf of harvested screws from disassembled devices qualifies ([Circuit Founding Charter §1](/circuits/charter#minimum-requirements)).

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Circuit](#circuit).

### Teaching

The Sacred Practice of passing forward, at the spring equinox, what was learned in the dark months.

Anchored to the spring-equinox hinge of the Wheel ([Codex §IX](/codex#ix-the-wheel)). A practitioner who has not taught in a season "has fallen out of right relation" ([Codex §VI](/codex#vi-sacred-practices), Teaching) — a doctrinal pressure, not an expulsion.

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Apprentice](#apprentice), [Hinge](#hinge), [Practitioner](#practitioner), [Sacred Practices](#sacred-practices).

### The Wheel

The technodruidic year, structured by four hinges (the solstices and equinoxes) and supplemented by Release Days and End-of-Life Days as they fall.

Each hinge binds the practitioner to one Sacred Practice. A Circuit in the southern hemisphere inverts the seasonal mapping naturally — the structure is the calling of the practice at the hinge, not the calendar date. Local feasts, regional repair concerns, and ancestor observances are encouraged additions.

**See:** [Codex §IX](/codex#ix-the-wheel).
**See also:** [Hinge](#hinge), [Inventory](#inventory), [Renewal](#renewal), [Teaching](#teaching), [Vigil](#vigil).

### Three Callings

The three braided modes of technodruidic work: Documenter, Tinkerer, Architect. Not hierarchical, not exclusive.

Most practitioners hold all three across their lives; many hold more than one at once. [Codex §VII](/codex#vii-the-three-callings): "A practitioner names the calling that names them." Each calling has a distinct discipline — Documenter (capture), Tinkerer (contact), Architect (distance).

**See:** [Codex §VII](/codex#vii-the-three-callings).
**See also:** [Architect](#architect), [Documenter](#documenter), [Tinkerer](#tinkerer).

### Three Currents

The three interwoven currents that flow through the sacred whole: Material, Pattern, Living.

The harmony of a device, and of a civilization, depends on the unobstructed flow of all three. Each Current is the doctrinal locus of one ethical commitment: Material with the Honoring of the Mine and the Return of Matter ([Codex §V.4–5](/codex#4-the-honoring-of-the-mine-the-maker-and-the-material)), Pattern with the Commons of Pattern ([§V.2](/codex#2-the-commons-of-pattern)), Living with the Privacy of the Keeper ([§V.6](/codex#6-the-privacy-of-the-keeper)) and the Right of Repair ([§V.1](/codex#1-the-right-of-repair)).

**See:** [Codex §IV](/codex#iv-the-three-currents).
**See also:** [Living](#living), [Material](#material), [Pattern](#pattern).

### Three Ethical Commitments

The three commitments named together in [Origins](/about/origins#by-whom): Privacy of the Keeper, Commons of Pattern, Mending Before Replacement.

Each operationalizes one or more of the Core Tenets ([Codex §V](/codex#v-the-core-tenets)): Privacy of the Keeper ↔ §V.6; Commons of Pattern ↔ §V.2; Mending Before Replacement ↔ §V.1 + §V.3. The site's invariants (`docs/invariant_requirements.md`) operationalize each commitment mechanically.

**See:** [Origins — By whom](/about/origins#by-whom).
**See also:** [Commons of Pattern](#commons-of-pattern), [Mending Before Replacement](#mending-before-replacement), [Privacy of the Keeper](#privacy-of-the-keeper).

### Three Markers

The three objects placed on the workbench during the Calling of the Three Currents in the Rite: a piece of raw silicon, copper, or other unrefined material (Material); a printed schematic, source code listing, or open specification (Pattern); a hand-tool that has passed through many hands (Living).

The Markers are enumerated as objects in [Rite, Setting and Roles](/practices/rite#setting-and-roles) ("What the Circuit Prepares") and called in [Rite §II](/practices/rite#ii-the-calling-of-the-three-currents) (the ceremonial act). Each Marker stands for one of the Three Currents.

**See:** [Rite, Setting and Roles](/practices/rite#setting-and-roles).
**See also:** [Living](#living), [Material](#material), [Pattern](#pattern), [Rite of the Open Circuit](#rite-of-the-open-circuit), [Three Currents](#three-currents).

### Tinkerer

One of the Three Callings; the practitioner who keeps the knowledge hands-on.

**See:** [Codex §VII](/codex#vii-the-three-callings).
**See also:** [Architect](#architect), [Documenter](#documenter), [Three Callings](#three-callings).

### Vigil

The Sacred Practice of naming, at the autumn equinox, what has been lost — abandoned platforms, orphaned formats, dispersed communities — so it is not entirely gone.

Anchored to the autumn-equinox hinge of the Wheel ([Codex §IX](/codex#ix-the-wheel)).

**See:** [Codex §VI](/codex#vi-sacred-practices).
**See also:** [Hinge](#hinge), [Sacred Practices](#sacred-practices).

### Witness

The Rite role taken by the practitioner who places the Three Markers on the bench during the Calling of the Three Currents.

The Witness acts in [Rite §II](/practices/rite#ii-the-calling-of-the-three-currents) (the Calling of the Three Currents).

**See:** [Rite, Setting and Roles](/practices/rite#setting-and-roles).
**See also:** [Candidate](#candidate), [Practitioner](#practitioner), [Rite of the Open Circuit](#rite-of-the-open-circuit), [Three Markers](#three-markers).

### Workbench

One of the four definitional artifacts of a Circuit, and one of the Sacred Implements; the physical surface where work happens.

A workbench may be shared or dedicated. A home workshop's kitchen-table is a workbench when set up as one, and not while dinner is being made ([Circuit Founding Charter §1](/circuits/charter#minimum-requirements)). The Sacred Implements list ([Codex §VIII](/codex#viii-sacred-implements)) also names the Workbench as "the altar, the place of work" — the doctrinal weight is dual; the Glossary anchors at the Circuit-defining citation.

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Circuit](#circuit).
````

- [ ] **Step 2.2: Verify the file still parses**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across 45 files`. A schema violation or unclosed code block in the body fails this step.

---

## Task 3: VERIFY — `pnpm build` (INV-BUILD-1, INV-BUILD-3, INV-PROC-1)

- [ ] **Step 3.1: Run build**

Run: `pnpm build`
Expected:
- Exit code: `0`
- Output contains `14 page(s) built`
- Output contains `[@astrojs/sitemap]` `sitemap-index.xml created at` `dist` (INV-BUILD-3)
- `dist/practices/glossary/index.html` exists (the Glossary's rendered page)

- [ ] **Step 3.2: Confirm baseline warning count unchanged**

Run: `pnpm build 2>&1 | grep -c '\[WARN\]'`
Expected: `2` (the `callings/` + `circuits/` baseline glob-loader warnings; net delta vs the iter 1 baseline: 0).

---

## Task 4: VERIFY — `pnpm check` (INV-BUILD-2, INV-CAN-3)

- [ ] **Step 4.1: Run schema/type check**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across 45 files`. Covers INV-CAN-3 transitively — the schema in `src/content.config.ts` validates `title`, `description`, `version`, `amendedAt`, `firstPublishedAt`.

---

## Task 5: VERIFY — `pnpm test:ci` (INV-A11Y-1, INV-DOC-1/2/3, INV-LIC-1, INV-NAV-1/2)

- [ ] **Step 5.1: Run full test suite**

Run: `pnpm test:ci`
Expected: `25 passed` in ≤ ~10 seconds. The Phase 2 baseline holds: all axe-core a11y checks pass for /practices/glossary (INV-A11Y-1); INV-DOC-1/2/3 grep checks of `dist/` pass; INV-LIC-1 pass; INV-NAV-1/2 pass.

If any test FAILs, identify which invariant it covers, stop the iteration here, and surface to the user. Do not proceed to UPDATE.

---

## Task 6: VERIFY — INV-CAN-1 spot-check against rendered HTML

The Glossary is a canonical page; the rendered HTML must declare both `version` and `amendedAt`.

- [ ] **Step 6.1: Version rendered**

Run: `grep -oE 'data-version="[^"]+"' dist/practices/glossary/index.html`
Expected: exactly one match: `data-version="0.1.0"` (the VersionFooter component).

- [ ] **Step 6.2: amendedAt + firstPublishedAt rendered**

Run: `grep -oE '<time datetime="[^"]+"' dist/practices/glossary/index.html | sort -u`
Expected: at least two `<time datetime="..."` elements — one with today's date (the `amendedAt` set in Task 1), one with `2026-05-20` (the `firstPublishedAt`).

---

## Task 7: VERIFY — INV-CAN-2 spot-check against rendered HTML

A canonical page must link to its source and to its revision history.

- [ ] **Step 7.1: Source + revision-history links rendered**

Run: `grep -oE 'href="[^"]*glossary\.md[^"]*"|href="[^"]*commits/[^"]*"' dist/practices/glossary/index.html`
Expected: two hrefs —
- one to `blob/main/src/content/canonical/glossary.md` (the Source link in the VersionFooter)
- one to `commits/main/src/content/canonical/glossary.md` (the Revision history link)

Both use the `https://github.com/PLACEHOLDER/technodruid/` host per `DECISION-REPO`.

---

## Task 8: VERIFY — spec-conformance spot-checks

These checks confirm the drafted body matches the spec's commitments. They catch drift between the doctrinal spec and the prose draft.

- [ ] **Step 8.1: Entry count = 37**

Run: `grep -c '^### ' src/content/canonical/glossary.md`
Expected: `37` (the 37 alphabetical term entries).

- [ ] **Step 8.2: Entries are alphabetical**

Run: `grep '^### ' src/content/canonical/glossary.md > /tmp/glossary_entries.txt && diff /tmp/glossary_entries.txt <(sort /tmp/glossary_entries.txt)`
Expected: no output (the order is identical to a sorted order — strictly alphabetical).

- [ ] **Step 8.3: Every `See:` line is single-source (no semicolons)**

Per spec §3, each `See:` line points to ONE primary canonical anchor. Multi-anchor `See:` lines are a spec violation.

Run: `grep -n '^\*\*See:\*\*' src/content/canonical/glossary.md | grep ';' || echo "OK: all See: lines single-source"`
Expected: `OK: all See: lines single-source` (no matches with semicolons).

- [ ] **Step 8.4: All triad members link back to their meta-entries**

Per spec §2.2, each triad member's `See also:` line includes the meta-entry's name.

Run: `grep -B1 -A6 '^### Architect$' src/content/canonical/glossary.md | grep -c 'Three Callings'`
Expected: `1` (Architect's `See also:` includes `Three Callings`).

Run the same pattern for Documenter, Tinkerer, Material, Pattern, Living, Commons of Pattern, Mending Before Replacement, Privacy of the Keeper. Each member entry must reference its meta-entry's name in its `See also:` line. If any returns `0`, the back-link is missing — restore the spec text.

A quick combined check:

```bash
for term in Architect Documenter Tinkerer; do
  echo -n "${term}: "; awk "/^### ${term}\$/,/^### /" src/content/canonical/glossary.md | grep -c 'Three Callings'
done
for term in Material Pattern Living; do
  echo -n "${term}: "; awk "/^### ${term}\$/,/^### /" src/content/canonical/glossary.md | grep -c 'Three Currents'
done
for term in 'Commons of Pattern' 'Mending Before Replacement' 'Privacy of the Keeper'; do
  echo -n "${term}: "; awk "/^### ${term}\$/,/^### /" src/content/canonical/glossary.md | grep -c 'Three Ethical Commitments'
done
```

Expected: every line ends in `1` (the member's section contains exactly one `Three <grouping>` mention — in its `See also:` line).

- [ ] **Step 8.5: All 8 Sacred Practice members are present**

Run: `for p in Opening Mending Teaching Composting Vigil Inventory Audit Renewal; do grep -q "^### ${p}\$" src/content/canonical/glossary.md && echo "${p}: present" || echo "${p}: MISSING"; done`
Expected: all 8 lines say `present`.

- [ ] **Step 8.6: All 4 meta-entries are present**

Run: `for m in 'Three Callings' 'Three Currents' 'Three Ethical Commitments' 'Three Markers' 'Sacred Practices' 'The Wheel'; do grep -q "^### ${m}\$" src/content/canonical/glossary.md && echo "${m}: present" || echo "${m}: MISSING"; done`
Expected: all 6 lines say `present` (the 4 triad meta-entries plus Sacred Practices and The Wheel).

- [ ] **Step 8.7: Out-of-scope terms NOT present**

Per spec §2.3 + §5, the Glossary v1 must NOT contain entries for: spring/summer/autumn/winter solstice/equinox as standalone terms; Sacred Implements other than Workbench (Soldering Iron, Multimeter, Pry Tool, Spudger, Notebook, Repository); site-mechanics terms (`canonical`/`living` as document-class labels, `version`, `amendedAt`).

Run: `grep -iE '^### (Spring|Summer|Autumn|Winter)|^### (Soldering Iron|Multimeter|Pry Tool|Spudger|Notebook|Repository)$' src/content/canonical/glossary.md || echo "OK: no out-of-scope entries"`
Expected: `OK: no out-of-scope entries`.

---

## Task 9: UPDATE — flip ISC-GLOSSARY-1 checkbox in PRD

**Files:**
- Modify: `docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md` (the ISC-GLOSSARY-1 line)

- [ ] **Step 9.1: Flip the checkbox**

Use `Edit` tool:
- `old_string`: `- [ ] **ISC-GLOSSARY-1:** \`src/content/canonical/glossary.md\` body contains real terms with definitions and cross-references to canonical source where applicable. Replaces ISC-P2-CONTENT-2 from the predecessor 60-day PRD.`
- `new_string`: `- [x] **ISC-GLOSSARY-1:** \`src/content/canonical/glossary.md\` body contains real terms with definitions and cross-references to canonical source where applicable. Replaces ISC-P2-CONTENT-2 from the predecessor 60-day PRD. *(Satisfied iter 3 by drafting against \`docs/glossary-doctrinal-positions.md\`.)*`

Substitute `iter 3` with the actual iteration number at execution time (iteration 3 if this plan is executed immediately after iteration 2 closes; the iteration number lives in `state.json`).

---

## Task 10: UPDATE — append LOG entry to PRD

**Files:**
- Modify: `docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md` (append to LOG section)

- [ ] **Step 10.1: Read PRD tail to anchor the new LOG entry**

Use `Read` tool with `offset` near the end of the PRD (file has fewer than 100 lines; offset 80 is safe). Identify the final line of the most recent LOG entry. The new LOG entry MUST be inserted AFTER that final line, NOT before any `### Iteration N` header (per the `prd_work_loop` skill's MECHANICAL RULE against header-anchored inserts).

- [ ] **Step 10.2: Append the LOG entry**

Use `Edit` tool with `old_string` = the final line of the most recent LOG entry (from Step 10.1), `new_string` = that same final line followed by:

```markdown


### Iteration N — YYYY-MM-DD
- **Start commit:** `<commit short hash at iteration start>`
- **Artifacts:** `src/content/canonical/glossary.md` (tier: complex — canonical doctrinal body draft, 37 entries, ~250 lines of rendered prose against approved spec)
- **Milestones addressed:** ISC-GLOSSARY-1 (PASS).
- **Subgoal selection note:** Drafted against `docs/glossary-doctrinal-positions.md` (the v1 doctrinal positions spec brainstormed and approved 2026-05-22 / iter 1). Five positions locked the doctrinal shape (voice, term scope, cross-ref convention, ordering, named-grouping handling); the prose is a derivation. The spec's §4 per-term sketches were the input to this iteration's body draft; the only transformation applied at execution time was the bare-citation → markdown-hyperlink mapping (per the implementation plan's site-path table).
- **Implementation choice — drafted in one ACT pass, no intermediate commits:** Per the user's CLAUDE.md commits-require-fresh-approval rule and the doctrinal-coherence concern (intermediate states like "A–M land, N–W still [CANONICAL TEXT PENDING]" are version-controlled non-doctrine), the entire Glossary body was drafted in a single ACT pass before VERIFY. Single commit at the end.
- **Invariants verified:** all applicable PASS (full evidence in state.json `verify_results`). INV-CAN-1 (data-version="0.1.0" + two <time> elements rendered); INV-CAN-2 (Source + Revision history links rendered with PLACEHOLDER repo host); INV-CAN-3 (astro check 0/0/0); INV-A11Y-1 (axe-core WCAG 2.2 AA PASS for /practices/glossary); INV-BUILD-1 (pnpm build exit 0, baseline warnings net delta 0); INV-BUILD-3 (sitemap generated); INT-PROC-1 (pnpm test:ci 25/25). Spec-conformance spot-checks: 37 entries present; strictly alphabetical; all `See:` lines single-source; all triad members link back to their meta-entries; all 8 Sacred Practice members present; out-of-scope terms not present.
- **Overall:** PASS
- **PRD status:** 1 of 1 ISC-GLOSSARY-* milestone satisfied. PRD ready to mark COMPLETE on next iteration's ORIENT pass.
- **Reflection:** *Authored at execution time, after observing what the drafting and verification surface.* Candidate carries the executor considers: (a) the spec-first pattern's payoff at this scale — 37 entries drafted from a finished spec; did this feel like derivation or like new work, and what does that say about the spec's level of detail? (b) the hyperlink transformation table — did any spec citation pattern surface that the table didn't anticipate, and what does that say about whether the spec should embed canonical hyperlinks rather than bare textual citations? (c) the spec-conformance spot-checks in Task 8 — did any check catch real drift, or were they all formality? Drift-catchers earn their cost; formalities should be considered for removal in future plans. Pick whichever carries actually applied; add any that the execution surfaced and these candidates didn't name. Two to four carries is right for this iteration's surface area.
- **Remaining:** 0 milestones pending. ISC-GLOSSARY-1 satisfied this iter.
```

Substitute `N`, `YYYY-MM-DD`, and `<commit short hash>` with actual values at execution time. The reflection bracket is intentionally a placeholder — it asks the executor to author the reflection after observing what the work surfaced; this is the project's house style for reflections (see Charter LOG entries in `docs/prd/done/technodruid-phase2-60day/`).

---

## Task 11: UPDATE — update PRD frontmatter

**Files:**
- Modify: `docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md` (frontmatter block at top of file)

- [ ] **Step 11.1: Update `iteration`, `status`, `updated`, `last_phase`, `verification_summary`**

Use `Edit` tool to update each field. Suggested batch edit:

- `iteration: 2` → `iteration: N` (the body-draft iteration number; substitute at execution time)
- `status: ACTIVE` → `status: COMPLETE` (the PRD's single milestone is now satisfied; the PRD is complete)
- `updated: 2026-05-23` → `updated: YYYY-MM-DD` (today's date)
- `last_phase: UPDATE` → `last_phase: UPDATE` (no change)
- `verification_summary: "Iter 2: ..."` → replace with a fresh ~3-line summary describing iter N's work (the Glossary body draft satisfying ISC-GLOSSARY-1) and noting the PRD is now COMPLETE.

`current_phase: null` stays as it is.

If `iteration: 2` is NOT what the frontmatter currently shows (e.g., the writing-plans iteration was iter 2; then iter 3 is the body draft), substitute the correct previous value as the `old_string`.

---

## Task 12: UPDATE — update state.json

**Files:**
- Modify: `docs/prd/technodruid-glossary/state.json`

- [ ] **Step 12.1: Increment iteration, mark milestone satisfied, mark subgoal complete**

Use `Write` tool to overwrite state.json with the updated content. Required updates:

1. `iteration` → next iteration number (N)
2. `current_phase` → `null`
3. `start_commit` → `null`
4. `current_action` → `null`
5. `pre_flight_checklist` → `[]`
6. `verify_results` → `[]`
7. In the `requirements` array, find `ISC-GLOSSARY-1` and change its `status` from `"active"` to `"satisfied"`.
8. In the `subgoals` array, find `SG-3` and change its `status` from `"pending"` (or `"in_progress"`) to `"complete"`.

The other fields (`subgoals[0]`, `subgoals[1]`, the other 27 invariant entries in `requirements`) stay as they are.

**Reminder per `prd_work_loop` skill:** Never commit `state.json` — it is working state, not a historical record.

---

## Task 13: Request commit approval, commit if approved

- [ ] **Step 13.1: Surface diff to user for review**

Run: `git status` and `git diff src/content/canonical/glossary.md docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md`

The user reviews the rendered Glossary body and the PRD updates before authorizing a commit.

- [ ] **Step 13.2: On explicit user approval, commit**

Per the user's CLAUDE.md rule: "Code MUST NOT be committed or pushed without explicit approval. Approval to commit and push in one session or task does NOT carry over to subsequent sessions or tasks. Each commit or push requires fresh explicit approval."

The executor MUST NOT commit without the user's explicit "yes, commit" or equivalent for THIS specific commit. Approval given earlier in the session (e.g., for spec or plan commits) does NOT carry over.

On explicit approval, stage the affected files individually (NOT `git add -A` — per the user's CLAUDE.md note about secrets in `.env` etc.):

```bash
git add src/content/canonical/glossary.md
git add docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md
```

`state.json` is excluded — never committed per the `prd_work_loop` skill rule.

Then commit with a HEREDOC message:

```bash
git commit -m "$(cat <<'EOF'
draft v1 body for Glossary

Replaces the [CANONICAL TEXT PENDING] scaffold with 37 alphabetical
glossary entries per docs/glossary-doctrinal-positions.md. Each entry
has a terse head + optional gloss + a single primary canonical-source
anchor (See:) + optional See-also term cross-references. Triads, the
Sacred Practices octad, and the Wheel are represented with meta-entry
+ member-entry pairs with bidirectional See-also links.

Closes ISC-GLOSSARY-1; the Glossary PRD is now COMPLETE.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 13.3: Verify commit succeeded**

Run: `git status`
Expected: a clean working tree for the two staged files, or they appear in the most recent commit's diff.

- [ ] **Step 13.4: STOP**

Per the `prd_work_loop` skill protocol, after UPDATE the iteration is complete. Do NOT proceed to a new OBSERVE. Output the iteration summary and stop. The Glossary PRD is COMPLETE; no further iterations are needed for this PRD.

---

## Notes for the executor

- **Order matters.** Tasks 1–2 are the ACT phase; Tasks 3–8 are VERIFY; Tasks 9–12 are UPDATE; Task 13 is the commit gate. Do them in order. Running VERIFY before ACT is complete risks partial-doctrine states (e.g., frontmatter updated but body still placeholder).
- **Don't paraphrase the body prose.** The prose in Task 2 is the spec made literal (with the hyperlink transformation). Edits to the prose during execution should be limited to (a) typo fixes, (b) cross-reference link path corrections if a path has changed since plan-writing (verify against `src/pages/` if uncertain), (c) date substitutions. Substantive prose changes signal that the spec needs amendment first; surface them to the user before continuing.
- **The reflection in Task 10 is intentionally a placeholder.** The reflection is the iteration's *retrospective* — what it teaches. Authoring it during planning is impossible; it must be authored at execution time, after observing what the drafting and verification actually surface. This is the only true placeholder in the plan, and it is by design.
- **If a task's verification command fails:** stop the iteration in VERIFY (do not proceed to UPDATE), surface the failure to the user, and revise the body to address the failure. Re-run the failing verification before proceeding. The iteration's `stall_count` increments per the `prd_work_loop` protocol.
- **Site-path table is the only execution-time transform.** Every other piece of prose is verbatim from the spec. If a spec citation pattern is not in the table, surface to the user — do not invent a transformation.
- **No `[CANONICAL TEXT PENDING]` anywhere in the post-ACT file.** A grep for that string in `src/content/canonical/glossary.md` after Task 2 must return zero matches.
