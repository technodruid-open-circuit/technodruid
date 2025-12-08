# Circuit Founding Charter — Prose Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. **Project deviation:** the project's native execution pattern is `prd_work_loop` iterations (see `docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md`); this plan structures the work as the ACT/VERIFY/UPDATE phases of a single `prd_work_loop` iteration. Subagents executing isolated tasks should treat each task as a sub-step of that iteration, not as standalone work.

**Goal:** Draft the canonical body of `src/content/canonical/circuits-charter.md` v1 against the doctrinal positions in `docs/charter-doctrinal-positions.md`, satisfying ISC-P2-CONTENT-1 in the Phase 2 PRD.

**Architecture:** One `prd_work_loop` iteration. The ACT phase replaces the scaffold's `[CANONICAL TEXT PENDING]` body with prose for 5 sections plus a frontmatter `amendedAt` update and a one-line RFC 2119 legend at the top. The VERIFY phase runs the project's existing build/test floor (`pnpm build`, `pnpm check`, `pnpm test:ci`) plus INV-CAN-* spot-checks against the rendered HTML. The UPDATE phase flips the PRD checkbox for ISC-P2-CONTENT-1 from `[ ]` to `[x]` and appends a LOG entry. Single commit at the end, gated on explicit user approval per the user's CLAUDE.md commits-require-fresh-approval rule.

**Tech Stack:** Astro 5 content collections (`canonical`), `CanonicalDoc` layout, Markdown frontmatter validated by Zod schema in `src/content.config.ts`, Playwright + axe-core invariant tests in `tests/`.

**Spec source:** `docs/charter-doctrinal-positions.md` (committed `11df13f`). All prose drafts in this plan derive from the spec's per-section content sketches (§4 of the spec) and the 6 doctrinal positions (§3 of the spec).

**Pre-execution constraints (apply to every drafting task):**
- Frontmatter `version` STAYS `"0.1.0"` per `feedback_no_version_bump_prerelease.md` (no canonical version bumps during pre-release; amend `amendedAt` only).
- Frontmatter `firstPublishedAt` STAYS `2026-05-20` (the scaffold-land date — unchanged by body-draft amendments).
- No inline styles, no `any` in TypeScript, no third-party font/tracker/comment-system references — invariants INV-CODE-1/2, INV-DOC-1/2/3 transitively enforced.
- All prose uses RFC 2119 binding language explicitly in **bold all-caps** at the point of use.
- Voice is declarative third-person matching Codex §X. Imperative ceremony voice (from the Rite) is NOT used.
- Cross-references to canonical docs use the on-site path (e.g., `/codex`, `/practices/rite`), NOT the source file path.

---

## Task 1: Update frontmatter `amendedAt` to today's date

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (lines 1–9, frontmatter block)

- [ ] **Step 1.1: Update `amendedAt`**

Change the `amendedAt` field from `2026-05-20` (the scaffold-land date) to the date of this drafting iteration. `version` stays at `"0.1.0"`. `firstPublishedAt` stays at `2026-05-20`. `printable` stays `true`. `downloadableFormats` stays `[]`.

Use `Edit` tool with `old_string` = `amendedAt: 2026-05-20` and `new_string` = `amendedAt: YYYY-MM-DD` (substitute today's actual date).

- [ ] **Step 1.2: Verify the schema still validates**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across 45 files`. If `firstPublishedAt` was accidentally touched or any required field removed, this will report a content-collection schema violation.

---

## Task 2: Replace preamble + scaffold-placeholder with the RFC 2119 legend and final opening

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (lines 11–13, the existing preamble block including the `[CANONICAL TEXT PENDING]` line)

- [ ] **Step 2.1: Replace the preamble + placeholder paragraph**

Use `Edit` tool. The current scaffold has:

```markdown
This document is the canonical guidance a new founder reads before opening a Circuit. It is the doctrinal complement to [The Codex §X — The Circuit](/codex), which defines what a Circuit *is*; this charter describes what it takes to start one and hold to the practice.

[CANONICAL TEXT PENDING] — the body below scaffolds the sections required by IA §5 and the minimum requirements enumerated in the Codex. Each section is intentionally empty pending the first authored draft.
```

Replace both paragraphs with:

```markdown
This document is the canonical guidance a new founder reads before opening a Circuit. It is the doctrinal complement to [The Codex §X — The Circuit](/codex), which defines what a Circuit *is*; this charter describes what it takes to start one and hold to the practice.

The Charter uses **MUST**, **SHOULD**, and **MAY** in the senses given by [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119). **MUST** items are the binding minimum every Circuit meets to claim the practice. **SHOULD** items are strong recommendations a Circuit observes unless it has a specific reason not to. **MAY** items are options a Circuit chooses among. A Circuit's own customs may add to or refine **SHOULD** and **MAY** items but may not remove **MUST** items.
```

Rationale: the spec §3 Position F mandates RFC 2119 binding language with a legend at the top of the document. Placing the legend immediately after the doctrinal-complement framing sentence puts it in the first thing a reader sees after the title.

- [ ] **Step 2.2: Verify the file still parses**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 3: Draft §1 Minimum requirements

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (the `## Minimum requirements` section and its body)

- [ ] **Step 3.1: Replace the §1 body**

The current scaffold has the heading plus a paragraph quoting the 4 Codex §X items, plus a `[CONTENT PENDING]` line. Replace the entire section (from `## Minimum requirements` through the `[CONTENT PENDING]` line) with:

```markdown
## Minimum requirements

A Circuit **MUST** maintain, at minimum, the four things named by [The Codex §X](/codex):

- **A workbench.** A physical surface, kept clear, where work happens. It may be shared with other uses (a kitchen-table set up before a gathering and put away after) or dedicated (a permanent bench in a hackerspace or home workshop). What matters is that when the Circuit is in session, the workbench is the workbench.
- **A spare-parts library.** A collection of components, fasteners, harvested screws, raw stock, or other materials drawn on during repair. It need not be large, sorted, or exhaustive. A shelf of parts pulled from disassembled devices is a parts library.
- **A documentation shelf or wiki.** Service manuals, schematics, repair logs, or the equivalent — held as a physical binder, a public wiki, a shared cloud folder, or any form practitioners can search. The Circuit chooses whether documentation is public-facing or members-only.
- **An open invitation to apprentices.** Apprentices arrive without fee, without application barrier, and without screening beyond what physical-safety law requires (for example, minor-supervision rules in shared spaces, hazard training where the workbench involves hazards). An apprentice is not a class of person but a relationship to the bench — a curious visitor at their first gathering is an apprentice; so is a long-time practitioner returning to a Circuit not their own.

These four together are the **MUST** floor for being a Circuit. A community with the workbench, the parts, and the docs but without the open apprentice invitation is something else — a repair shop, a private hackerspace — not a Circuit in this lineage.
```

- [ ] **Step 3.2: Verify nothing breaks**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 4: Draft §2 Suggested practices

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (the `## Suggested practices` section and its `[CONTENT PENDING]` body)

- [ ] **Step 4.1: Replace the §2 body**

Replace the entire section (heading through the `[CONTENT PENDING]` line) with:

```markdown
## Suggested practices

Beyond the **MUST** floor, the Charter describes the practices a well-running Circuit observes. These are **SHOULD** items: strong recommendations the Circuit observes unless it has a specific reason not to.

### Gatherings

A Circuit **SHOULD** meet at least at the four Wheel hinges — spring equinox, summer solstice, autumn equinox, winter solstice — observed locally per [the Wheel of the Year](/practices/wheel). A Circuit **MAY** meet more often; cadence beyond the four hinges is the Circuit's own.

A typical gathering opens with The Opening of the Circuit (per [Rite §I](/practices/rite)) and closes with The Closing (per [Rite §IX](/practices/rite)). Between, the work happens — repair, mending, teaching, the marking of a Wheel hinge, whatever the gathering exists to do.

### Sacred Practices in a Circuit context

The eight Sacred Practices named in [Codex §VI](/codex) — The Opening, The Mending, The Teaching, The Composting, The Vigil, The Inventory, The Audit, The Renewal — are observed in shared space as in solitary practice, with the Circuit witnessing rather than the practitioner alone. The Codex defines each; the Circuit gives them weight by gathering around them. The Wheel mappings ([Codex §IX](/codex)) bind Spring to Teaching, Summer to Renewal, Autumn to Vigil, and Winter to Inventory — a Circuit **SHOULD** mark the corresponding practice at each hinge gathering.

### The Wheel, locally

A Circuit **SHOULD** mark the four hinges in a way that fits its geography and its people. The Charter does not prescribe form. A Circuit in the southern hemisphere inverts the seasonal mapping naturally — the summer solstice falls in December there, and Renewal is observed accordingly. Local feasts, regional repair concerns (a coastal Circuit's Vigil for storm-damaged electronics), ancestor observances, and customs particular to the Circuit's craft are encouraged. The Wheel is the canonical structure; the local marking is the Circuit's own.
```

- [ ] **Step 4.2: Verify**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 5: Draft §3 Naming conventions

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (the `## Naming conventions` section and its `[CONTENT PENDING]` body)

- [ ] **Step 5.1: Replace the §3 body**

Replace the entire section with:

```markdown
## Naming conventions

The Open Circuit does not credential names. A Circuit **MAY** take a place-name, a lineage name from the Circuit it grew out of, a name reflecting a calling its practitioners emphasize, or a chosen moniker meaning nothing to anyone but its members. The Charter is silent on which.

The Charter is not silent on three things. A Circuit listed in [the directory](/circuits/directory) **MUST NOT**:

- **Name itself "Open Circuit."** That name refers to the umbrella — the corpus, this site, the loose collective of practitioners and Circuits. A specific Circuit naming itself "Open Circuit" claims authority the umbrella does not delegate.
- **Name itself to impersonate a maintained-corpus entity.** "Technodruid Foundation," "The Codex Council," "The Open Circuit Maintainers" — any name that an outsider could mistake for a body authoring or governing the canonical corpus.
- **Name itself to be confused with a specific existing Circuit.** *Designed to mislead* is the test, not coincidence. Two Circuits that arrive independently at "The Old Bench" share a name in good faith and disambiguate in the directory; a Circuit deliberately taking the name of another to redirect inquiries does not.

Beyond these three: name yourselves as you will. The directory disambiguates same-name listings pragmatically — a city, a year, or any other modifier the second-to-list Circuit adds.
```

- [ ] **Step 5.2: Verify**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 6: Draft §4 Directory registration

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (the `## Directory registration` section and its `[CONTENT PENDING]` body)

- [ ] **Step 6.1: Replace the §4 body**

Replace the entire section with:

```markdown
## Directory registration

[The Circuits directory](/circuits/directory) is a self-attested list of Circuits that claim the practice. The Open Circuit does not credential Circuits, only lists those that claim it.

### Listing

A Circuit lists itself by touching the directory file in the source repository — opening a pull request, submitting a form when one exists, or whatever channel the project provides at the time of listing. The fields are self-attested:

- **Name** (required, per the conventions in §3 above)
- **Location** (optional; at any specificity the Circuit chooses — a city, a region, a precise address, or no location at all)
- **Contact** (optional; see below)
- **Callings emphasized** (optional; from the three named in [Codex §VII](/codex))
- **Meeting cadence** (optional; "at the four hinges," "weekly," "by announcement," whatever the Circuit chooses to share)
- **Local site or wiki** (optional)

### Contact

A Circuit **MAY** decline to list any contact. The directory entry shows what the Circuit chooses to show — which may be only a name and, optionally, a city. An outsider seeking a Circuit that lists no contact reaches it by chance attendance, by word-of-mouth through another practitioner, or not at all. This is the form the religion takes.

### Delisting

A Circuit is removed from the directory under three conditions, each with a clear actor:

- **Self-request.** A Circuit asks to be removed. Honored immediately.
- **Dormancy.** A directory entry that has not been re-attested or shown activity in eighteen months moves to a *dormant* state. After another six months without re-attestation, the entry is delisted. Both states are recoverable: a Circuit re-attests at any point and returns to listed status.
- **Maintainer stewardship.** In clear-cut cases of incompatibility with the Codex's core ethical commitments — or with §3's naming rules, where a Circuit refuses to disambiguate after being asked — the named maintainer (per [Origins](/about/origins)) may remove the entry. A public note explaining the removal is logged in the directory's change log. This is not a court; it is stewardship of the file, transparent and citable.

### Re-attestation

A single edit touching the entry in the source repository suffices. Updating any field counts. The act of touching the entry is the attestation that the Circuit is still practicing. Future amendments may add other re-attestation channels (form submission, dashboard click); the source-repo edit is the canonical form.
```

- [ ] **Step 6.2: Verify**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 7: Draft §5 Holding to the doctrine

**Files:**
- Modify: `src/content/canonical/circuits-charter.md` (the `## Holding to the doctrine` section and its `[CONTENT PENDING]` body)

- [ ] **Step 7.1: Replace the §5 body**

Replace the entire section with:

```markdown
## Holding to the doctrine

[The Codex §X](/codex) grants every Circuit the freedom to tend its own customs while holding to the core doctrine. The Charter names what *holding to the core doctrine* means in operational terms — what the Circuit cannot give up and remain a Circuit in this lineage.

### What holding to the doctrine means

A Circuit **MUST** meet all of the following. These are the binding minimum.

1. **The four Codex §X requirements** — workbench, spare-parts library, documentation shelf, open invitation to apprentices (per §1 above).
2. **The three ethical commitments** named in [Origins](/about/origins) — Privacy of the Keeper, Commons of Pattern, Mending Before Replacement. The Circuit's practice **MUST** be compatible with each. A Circuit that records its practitioners' devices for marketing violates Privacy of the Keeper. A Circuit that paywalls schematics or instructional content violates Commons of Pattern. A Circuit whose stated practice is to tell people to throw it away and buy a new one violates Mending Before Replacement.
3. **Readiness to offer the Rite.** When an apprentice is ready for initiation, the Circuit **MUST** be prepared to offer [The Rite of the Open Circuit](/practices/rite), or an authorized adaptation in the sense given by the Rite's own notes — a translation or local form that preserves structure and intention. A Circuit need not have conducted the Rite recently. A Circuit that refuses to conduct it has stepped outside the lineage.

Everything else in this Charter — gathering cadence, naming form, contact channel, money model, founding ceremony — is **SHOULD** or **MAY**. A Circuit's customs **MAY** differ from those. A Circuit's customs **MAY NOT** remove the binding minimum above and still be called a Circuit in the Open Circuit lineage.

### Economic posture

A Circuit's economic arrangements are autonomous. The Charter does not prescribe a model. Donations, at-cost recovery of parts and materials, instruction offered for suggested contribution, a stipend paid to a technician from member dues — any of these **MAY** be compatible with the practice. The compatibility test is the three ethical commitments in the previous subsection. The Charter names three concrete arrangements that are **NOT** compatible, by way of illustration:

- **Paywalled patterns or how-to material.** A Circuit that charges for access to schematics, repair walkthroughs, or doctrinal content withholds what Commons of Pattern requires be shared.
- **Surveillance-for-marketing.** A Circuit that collects practitioner-device data as a condition of participation, or that sells observations of its members' work, violates Privacy of the Keeper.
- **Organized obsolescence as service.** A Circuit whose paid offering is the diagnosis "throw it away and buy a new one" trades the practice for its opposite.

Compatible arrangements are not enumerated. Each Circuit reads the commitments and judges its own posture.

### Divergence

A Circuit that fails to meet a **MUST** item has stepped outside the practice. This is a question of fact, not of judgment by a tribunal. The Open Circuit does not adjudicate divergence. What the Charter provides is the language for naming the situation — the Circuit may recognize its own divergence and self-delist; other practitioners may observe and decline to call the entity a Circuit; the maintainer may apply §4's stewardship for the directory listing.

Forks are not schism. A practitioner or group wishing to maintain a related-but-distinct practice **MAY** fork the canonical corpus and operate independently (see [Origins](/about/origins) on forks). A fork is honest. A Circuit that quietly removes binding requirements while still claiming Open Circuit lineage is not.
```

- [ ] **Step 7.2: Verify**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints`.

---

## Task 8: VERIFY phase — build + test floor

This task corresponds to the VERIFY phase of the `prd_work_loop` iteration. Run the project's existing build/test floor in parallel where independent.

- [ ] **Step 8.1: pnpm build (INV-BUILD-1, INV-BUILD-3, INT-PROC-1)**

Run: `pnpm build`
Expected: exit 0; `14 page(s) built` in the output; the `[@astrojs/sitemap] sitemap-index.xml created at dist` line is present; warning count via `pnpm build 2>&1 | grep -c '\[WARN\]'` is `2` (the `callings/` + `circuits/` baseline glob-loader warnings; net delta vs iter 16: 0).

- [ ] **Step 8.2: pnpm check (INV-BUILD-2)**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across 45 files`.

- [ ] **Step 8.3: pnpm test:ci (INV-A11Y-1, INV-DOC-1/2/3, INV-LIC-1, INV-NAV-1/2, INT-PROC-1)**

Run: `pnpm test:ci`
Expected: `25 passed` in ≤ ~10 seconds. All Phase 2 smoke tests in `tests/phase2.spec.ts` continue to PASS; INV-A11Y-1 (`tests/a11y.spec.ts:33`) passes; INV-DOC-1/2/3 (`tests/invariants.spec.ts:38/51/61`) pass; INV-LIC-1 (`tests/invariants.spec.ts:74`) passes; INV-NAV-1/2 (`tests/invariants.spec.ts:92`, `tests/build.spec.ts:74`) pass.

---

## Task 9: VERIFY phase — INV-CAN-1, INV-CAN-2 spot-checks against rendered HTML

These two invariants are most likely to be directly affected by the Charter body draft, since the Charter is a canonical page and the rendered HTML is what gets verified.

- [ ] **Step 9.1: INV-CAN-1 — version + amendedAt rendered**

Run: `grep -oE 'data-version="[^"]+"' dist/circuits/charter/index.html`
Expected: `data-version="0.1.0"` (exactly one match — the VersionFooter component).

Run: `grep -oE '<time datetime="[^"]+"' dist/circuits/charter/index.html | sort -u`
Expected: at least two `<time datetime="..."` elements — one for `amendedAt` (today's date), one for `firstPublishedAt` (`2026-05-20`).

- [ ] **Step 9.2: INV-CAN-2 — source-repo + revision-history links rendered**

Run: `grep -oE 'href="[^"]*circuits-charter\.md[^"]*"|href="[^"]*commits/[^"]*"' dist/circuits/charter/index.html`
Expected: two hrefs — one to `blob/main/src/content/canonical/circuits-charter.md` (the Source link in the VersionFooter), one to `commits/main/src/content/canonical/circuits-charter.md` (the Revision history link). Both use the `https://github.com/PLACEHOLDER/technodruid/` host per `DECISION-REPO`.

- [ ] **Step 9.3: INV-CAN-3 — frontmatter schema (already covered by Step 8.2)**

`pnpm check` covers INV-CAN-3 transitively (the schema in `src/content.config.ts:4-15` validates `title`, `description`, `version`, `amendedAt`, `firstPublishedAt`). No separate check needed if Step 8.2 passes.

---

## Task 10: VERIFY phase — spec-conformance spot-checks

These checks confirm the drafted prose matches the spec's per-section content sketches in key places. They catch drift between the spec's intent and the prose draft.

- [ ] **Step 10.1: RFC 2119 legend present**

Run: `grep -c 'RFC 2119' src/content/canonical/circuits-charter.md`
Expected: `1` match (the legend introduced in Task 2).

- [ ] **Step 10.2: All 8 MUST floor items represented in §1 and §5**

Run: `grep -ciE 'workbench|spare-parts library|documentation shelf|open invitation to apprentices' src/content/canonical/circuits-charter.md`
Expected: `≥ 4` matches across the file (the 4 Codex §X items, each appearing in §1 and referenced in §5).

Run: `grep -ciE 'Privacy of the Keeper|Commons of Pattern|Mending Before Replacement' src/content/canonical/circuits-charter.md`
Expected: `≥ 3` matches across the file (the 3 ethical commitments, named in §5).

Run: `grep -c 'Rite' src/content/canonical/circuits-charter.md`
Expected: `≥ 2` matches (the Rite is referenced in §5 MUST #3 and in §2 gatherings).

- [ ] **Step 10.3: Anti-impersonation §3 names the three reserved categories**

Run: `grep -ciE 'Open Circuit|Technodruid Foundation|specific existing Circuit' src/content/canonical/circuits-charter.md`
Expected: `≥ 3` matches (the three reserved-pattern examples in §3).

- [ ] **Step 10.4: Dormancy decay window correctly stated**

Run: `grep -E 'eighteen months|18 months' src/content/canonical/circuits-charter.md`
Expected: `1` match (the dormancy threshold in §4).

Run: `grep -E 'six months|6 months' src/content/canonical/circuits-charter.md`
Expected: `1` match (the post-dormancy delisting threshold in §4).

- [ ] **Step 10.5: Charter does NOT contain Charter-out-of-scope topics**

Per spec §5, the Charter v1 is silent on apprenticeship operationalization beyond no-fee-no-gating, inter-Circuit relationships, and founding events.

Run: `grep -ciE 'federation|inter-circuit|founding ceremony|founding rite' src/content/canonical/circuits-charter.md`
Expected: `0` matches. (If non-zero, the prose drifted into out-of-scope territory.)

---

## Task 11: UPDATE phase — flip ISC-P2-CONTENT-1 checkbox in PRD

**Files:**
- Modify: `docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md` (ISC-P2-CONTENT-1 line)

- [ ] **Step 11.1: Flip the checkbox**

Use `Edit` tool:
- `old_string`: `- [ ] ISC-P2-CONTENT-1: \`circuits-charter.md\` body contains real charter text. *(Path updated iter 9 to match SG-8 retarget; underlying user-input dependency unchanged.)*`
- `new_string`: `- [x] ISC-P2-CONTENT-1: \`circuits-charter.md\` body contains real charter text. *(Path updated iter 9 to match SG-8 retarget; underlying user-input dependency unchanged. Satisfied iter N+1 by drafting against \`docs/charter-doctrinal-positions.md\`.)*`

Substitute `N+1` with the actual iteration number (will be 17 if this iteration follows iter 16 directly).

---

## Task 12: UPDATE phase — append LOG entry to PRD

**Files:**
- Modify: `docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md` (append to LOG section)

- [ ] **Step 12.1: Read PRD tail to anchor the new LOG entry**

Use `Read` tool with offset near the end of the PRD (offset ~last 10 lines). Identify the final line of the most recent LOG entry. The new LOG entry will be inserted AFTER that final line, NOT before any `### Iteration N` header (per the `prd_work_loop` skill's mechanical rule against header-anchored inserts).

- [ ] **Step 12.2: Append the LOG entry**

Use `Edit` tool with `old_string` = the final line of the most recent LOG entry, `new_string` = that same final line followed by:

```markdown


### Iteration N+1 — YYYY-MM-DD
- **Start commit:** `<commit short hash at iteration start>`
- **Artifacts:** `src/content/canonical/circuits-charter.md` (tier: complex — canonical doctrinal body draft, ~150 lines of prose against approved spec)
- **Milestones addressed:** ISC-P2-CONTENT-1 (PASS).
- **Subgoal selection note:** Drafted against `docs/charter-doctrinal-positions.md` (committed `11df13f`), the v1 doctrinal positions spec brainstormed and approved 2026-05-22 (this session). Six positions locked the doctrinal shape; the prose is a derivation. The spec's per-section content sketches were the input to the per-section drafts; the spec's MUST floor was the input to §5.
- **Implementation choice — drafted in one ACT pass, no intermediate commits:** Per the user's CLAUDE.md commits-require-fresh-approval rule and the doctrinal-coherence concern (intermediate states like "§1–3 land, §4–5 still placeholder" are version-controlled non-doctrine), the entire Charter body was drafted in a single ACT pass before VERIFY. Single commit at the end.
- **Invariants verified:** all applicable PASS (full evidence in state.json `verify_results`). INV-CAN-1 (data-version="0.1.0" + two <time> elements rendered); INV-CAN-2 (Source + Revision history links rendered with PLACEHOLDER repo host); INV-CAN-3 (astro check 0/0/0); INV-A11Y-1 (axe-core WCAG 2.2 AA PASS for /circuits/charter); INV-BUILD-1 (pnpm build exit 0, baseline warnings net delta 0); INT-PROC-1 (pnpm test:ci 25/25). Spec-conformance spot-checks: RFC 2119 legend present; 4 Codex §X items named in §1; 3 ethical commitments named in §5; dormancy windows correctly stated; no out-of-scope topics (federation, founding rites) present.
- **Overall:** PASS
- **Phase 2 status:** 16 of 16 ISC-P2-* milestones satisfied (CONTENT-3 removed iter 3). Two USER-BLOCKED content milestones remain (ISC-P2-CONTENT-2 glossary terms; ISC-P2-CONTENT-4 reading list annotations). The Charter is the largest content milestone; with it satisfied, Phase 2 has 2 small content milestones left, both of which follow the same brainstorm-then-draft pattern at smaller scale.
- **Reflection:** *Authored at execution time, after observing what the drafting and verification surface.* Candidate carries the executor considers: (a) the spec-first pattern's payoff at scale — did this draft feel like a derivation from the spec or like new work? (b) any prose-vs-spec drift the Task 10 spot-checks caught — what kind of drift, and what does that say about the spec's level of detail? (c) the RFC 2119 legend up front — does the rendered Charter read clearly with the legend as the second paragraph, or does the legend feel academic against the doctrinal voice? Pick whichever carries actually applied; add any that the execution surfaced and these candidates didn't name. Two to four carries is right for this iteration's surface area.
- **Remaining:** 2 milestones pending — both USER-BLOCKED content (ISC-P2-CONTENT-2 glossary terms; ISC-P2-CONTENT-4 reading list annotations). ISC-P2-CONTENT-1 satisfied this iter.
```

Substitute `N+1`, the date, and the start commit hash with actual values at execution time. The reflection bracket is intentionally a placeholder — it asks the executor to author the reflection after observing what the work surfaced; this is the project's house style for reflections (see prior LOG entries in the PRD).

---

## Task 13: UPDATE phase — update PRD frontmatter

**Files:**
- Modify: `docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md` (frontmatter block at top of file)

- [ ] **Step 13.1: Update `iteration`, `updated`, and `verification_summary`**

Use `Edit` tool to update the frontmatter:
- `iteration: 16` → `iteration: N+1` (next iteration number)
- `updated: 2026-05-21` → `updated: YYYY-MM-DD` (today's date)
- `verification_summary: "..."` → replace with a fresh summary describing iter N+1's work (the Charter body draft). The summary should be ~10 lines of dense prose covering: what was drafted, against which spec, the verification floor results, the new milestone count (16/16 satisfied minus 2 content-blocked), and what remains.

`current_phase: null` and `last_phase: UPDATE` stay as they are.

---

## Task 14: UPDATE phase — update state.json

**Files:**
- Modify: `docs/prd/technodruid-phase2-60day/state.json`

- [ ] **Step 14.1: Increment iteration, mark milestone satisfied, add subgoal**

Update state.json:
1. `iteration` → next iteration number
2. `current_phase` → `null`
3. `start_commit` → `null`
4. `current_action` → `null`
5. `pre_flight_checklist` → `null`
6. `verify_results` → `[]`
7. In the `requirements` array, find `ISC-P2-CONTENT-1` and change its `status` from `"active"` to `"satisfied"`.
8. Add a new entry to the `subgoals` array describing the SG that this iteration closed (the Charter body draft). Suggested ID: `SG-CONTENT-1`. Fields: `id`, `artifacts: ["src/content/canonical/circuits-charter.md"]`, `tier: "complex"`, `description: <one-paragraph summary>`, `milestones: ["ISC-P2-CONTENT-1"]`, `status: "complete"`.
9. Update the `notes` field with the iter N+1 summary.

---

## Task 15: Request commit approval, commit if approved

- [ ] **Step 15.1: Surface diff to user for review**

Run: `git status` and `git diff src/content/canonical/circuits-charter.md docs/prd/technodruid-phase2-60day/`

The user reviews the rendered Charter body and the PRD updates before authorizing a commit.

- [ ] **Step 15.2: On explicit user approval, commit**

Per the user's CLAUDE.md rule: "Code MUST NOT be committed or pushed without explicit approval. Approval to commit and push in one session or task does NOT carry over to subsequent sessions or tasks. Each commit or push requires fresh explicit approval."

The executor MUST NOT commit without the user's explicit "yes, commit" or equivalent for THIS specific commit. Approval given earlier in the session (e.g., for the spec commit `11df13f`) does NOT carry over.

On explicit approval, stage the affected files individually (NOT `git add -A` — per the user's CLAUDE.md note about secrets in `.env` etc.):

```bash
git add src/content/canonical/circuits-charter.md
git add docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md
git add docs/prd/technodruid-phase2-60day/state.json
```

Then commit with a HEREDOC message:

```bash
git commit -m "$(cat <<'EOF'
draft v1 body for Circuit Founding Charter

Replaces the [CANONICAL TEXT PENDING] scaffold with the canonical
body per docs/charter-doctrinal-positions.md (committed 11df13f).
Five sections + RFC 2119 legend; ~150 lines of doctrinal prose
covering minimum requirements, suggested practices, naming
conventions, directory registration, and holding to the doctrine.

Closes ISC-P2-CONTENT-1 in the Phase 2 PRD; 16 of 16 ISC-P2-*
milestones now satisfied (2 USER-BLOCKED content remaining).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 15.3: Verify commit succeeded**

Run: `git status`
Expected: a clean status for the three staged files (or they appear in the most recent commit's diff).

- [ ] **Step 15.4: STOP**

Per the `prd_work_loop` skill protocol, after UPDATE the iteration is complete. Do NOT proceed to a new OBSERVE. Output the iteration summary and stop. The next iteration is invoked by a subsequent `/prd_work_loop` invocation.

---

## Notes for the executor

- **Order matters.** Tasks 1–7 are the ACT phase; Tasks 8–10 are VERIFY; Tasks 11–14 are UPDATE; Task 15 is the commit gate. Do them in order. Within ACT, the sections can be drafted in any order, but committing or running VERIFY before all ACT tasks are done risks partial-doctrine states.
- **Don't paraphrase the prose.** The prose in Tasks 2–7 is the spec made literal. Edits to the prose during execution should be limited to (a) typo fixes, (b) cross-reference link path corrections if a path has changed since spec-writing, (c) date substitutions. Substantive prose changes signal that the spec needs amendment first; surface them to the user before continuing.
- **The reflection in Task 12 is intentionally a placeholder.** The reflection is the iteration's *retrospective* — what it teaches. Authoring it during planning is impossible; it must be authored at execution time, after observing what the drafting and verification actually surface. This is the only true placeholder in the plan and it is by design.
- **If a task's verification command fails:** stop the iteration in VERIFY (do not proceed to UPDATE), surface the failure to the user, and revise the prose to address the failure. Re-run the failing verification before proceeding. The iteration's `stall_count` increments per the `prd_work_loop` protocol.
