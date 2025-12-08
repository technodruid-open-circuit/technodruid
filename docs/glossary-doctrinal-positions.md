# Glossary — Doctrinal Positions (v1)

> A design document. Captures the doctrinal positions the Glossary (`src/content/canonical/glossary.md`) commits to in its v1 body draft. Brainstormed and approved 2026-05-22. The Glossary prose is drafted in a subsequent session against this spec.

**Status:** Approved. Spec input for ISC-GLOSSARY-1 (PRD: `docs/prd/technodruid-glossary/PRD-20260522-technodruid-glossary.md`).

**Companion docs (read first if context is needed):**
- `docs/information-architecture.md` §1 (sincerity/construction duality), §5 /codex
- `src/content/canonical/codex.md` — primary canonical anchor for the majority of terms
- `src/content/canonical/rite.md` — anchor for ceremonial roles (Candidate, Witness) and the Three Markers
- `src/content/canonical/about-origins.md` — anchor for the three ethical commitments and the Fork posture
- `docs/charter-doctrinal-positions.md` — methodological precedent (worked example of the brainstorm → spec → prose flow)

---

## 1. Posture and Voice

The Glossary is a **pointer**, not an authority. Each entry's job is to make a doctrinal term findable and direct the reader to the canonical source where it is defined. The Glossary's text is illustrative; the canonical source wins on any disagreement.

- **Voice:** declarative, terse head + optional gloss. Each entry begins with a single-sentence definition in third-person. Conceptually loaded terms (e.g., *Circuit*, *Maintainer*) follow with a gloss paragraph — plain prose, no prefix label — that gives operational nuance. Atomic terms (e.g., *Audit*, *Tinkerer*) have only a head.
- **Cross-reference convention:** every entry has a required `**See:**` line pointing to the **primary** canonical source — the document and section where the term is first or most authoritatively defined. The hyperlink uses a **fragment anchor** for the specific section (e.g., `/codex#vi-sacred-practices`), not a bare page link. Where a term is referenced elsewhere in the corpus, secondary mentions are surfaced through the gloss or under `**See also:**`. Each term in a `See also:` line is itself a hyperlink to the in-page Glossary anchor (e.g., `[Documenter](#documenter)`).
- **Ordering:** strict alphabetical, A→Z. No section headers within the term list. Related terms are intentionally separated; discoverability of conceptual groupings (triads, the Wheel's hinges, the Sacred Practices) is handled by meta-entries and `See also:` links (see §2.2 and §3).
- **Length target:** approximately 35–40 entries, ~250–350 rendered lines including the meta-entries.
- **Version on ship:** stays at `0.1.0` (per `feedback_no_version_bump_prerelease.md` — no canonical-version bumps during pre-release; amend `amendedAt` only). The body-draft commit updates `amendedAt`.
- **RFC 2119 binding language:** NOT used. The Glossary defines vocabulary; it does not prescribe behavior. MUST/SHOULD/MAY belong to the Charter and other prescriptive docs.

---

## 2. Term Inclusion

### 2.1 Inclusion criterion

**Doctrinal-vocabulary completeness:** every doctrinal term named in the canonical corpus (`src/content/canonical/*.md`) is a candidate for a Glossary entry. The Glossary aims to be a single-page lookup for every term the corpus introduces, regardless of whether that term is also defined in-place where it appears.

Redundancy with in-place canonical definitions is resolved structurally: the Glossary's entry is intentionally terse (head, optional gloss, `See:` line), so a reader needing more than a one-line orientation is directed to the canonical source. Drift risk is controlled by the Pointer convention (§1) — the canonical source is authoritative on any disagreement.

### 2.2 Named-grouping handling

The corpus repeatedly groups concepts under a named umbrella: the **Three Currents** (Material, Pattern, Living), the **Three Ethical Commitments** (Privacy of the Keeper, Commons of Pattern, Mending Before Replacement), the **Three Callings** (Documenter, Tinkerer, Architect), the **Three Markers** (Rite §II objects), the **Sacred Practices** (Codex §VI, eight named), and the **Wheel** (Codex §IX, four hinges). Because the Glossary is alphabetical with no section headers, members of these groupings would be scattered.

The convention: **meta-entry + member entries.**

- Each named grouping gets a **meta-entry** under its name (e.g., *Three Currents*, *Sacred Practices*). The meta-entry's head names the grouping; its gloss enumerates members and points to the canonical anchor.
- Each member also gets its **own entry** (e.g., *Material*, *Opening*, *Documenter*).
- Each member's entry has a `**See also:**` line that includes the meta-entry's name.
- The reader entering at any node — meta-entry or member — finds the others within one hop.

**Exception for the Wheel's four hinges.** The four hinges are the solstices and equinoxes — generic astronomical terms with no Open-Circuit-coined name beyond "spring equinox", "summer solstice", etc. They are not given individual Glossary entries; the Wheel and Hinge meta-entries capture the doctrinal content. A reader looking up "summer solstice" by name will not find it; they find the structure via *The Wheel* and *Hinge*.

### 2.3 Out of scope

Not included in v1:

- Generic English words used non-technically in the corpus (e.g., "tool", "practice", "community").
- Terms that exist only in non-canonical docs (e.g., site-architecture vocabulary, build/process jargon).
- Future-scope terms that require Phase 3+ canonical content to be coherent (callings-page or circuits-page-specific vocabulary). When that content lands, the Glossary is amended; v1 ships without those entries.
- Site-mechanics terms (`canonical`/`living` document classes, `version`, `amendedAt`, `lastEditedAt`) — these are page-mechanics, not doctrinal vocabulary.
- The Sacred Implements (Soldering Iron, Multimeter, Pry Tool/Spudger, Notebook, Repository, Workbench) as a *grouping*. Individual implements are not given their own entries except where they appear as definitional artifacts of a Circuit (the *Workbench*, which is also a Circuit-defining artifact under Codex §X, gets an entry on that basis).

---

## 3. Per-Entry Schema

Each Glossary entry has:

| Field | Required? | Form |
|---|---|---|
| Term head | yes | H3 (`### Term`). The term name, capitalized as it appears in the canonical corpus. |
| Definition | yes | A single sentence, declarative, third-person. |
| Gloss | optional | A short paragraph (2–5 sentences) for conceptually loaded terms; appears as a plain paragraph between the head and the `See:` line. No prefix label. |
| `See:` | yes | `**See:** [<text>](<path>#<section-anchor>)`. Points to one primary canonical source. The hyperlink uses a fragment anchor for the specific section — not a bare page link. |
| `See also:` | optional | `**See also:** [<term1>](#<slug1>), [<term2>](#<slug2>), ...`. Each comma-separated term is a Markdown hyperlink to its in-page Glossary anchor. Used for triad/grouping linking (per §2.2) and for closely paired siblings. |

**Multiple canonical anchors.** When a term is referenced in more than one canonical document, the `See:` line points to ONE primary source. Secondary mentions are noted in the gloss or, if they themselves have Glossary entries, listed under `See also:`. Example: *Circuit* is anchored in Codex §X (`See: [Codex §X](/codex#x-the-circuit)`); the Charter §2 operationalizes the binding floor and is mentioned in the gloss.

**Page structure for INV-A11Y-3 compliance.** The rendered page has H1 (from frontmatter `title`). A single H2 `## Terms` precedes the first H3 entry — without it, the page would skip H1→H3 and fail the heading-hierarchy invariant. The H2 is structural, not doctrinal; the alphabetical term list begins immediately under it.

**Example entry (Circuit):**

```markdown
### Circuit

The basic congregational unit of the Open Circuit; a gathering of practitioners around a workbench.

A Circuit is defined by four artifacts (workbench, parts library, documentation shelf, open invitation) and the three ethical commitments. [Codex §X](/codex#x-the-circuit) grants Circuits autonomy in local custom while holding to the core doctrine. The [Circuit Founding Charter §2](/circuits/charter#suggested-practices) operationalizes the binding floor.

**See:** [Codex §X](/codex#x-the-circuit).
**See also:** [Practitioner](#practitioner), [Workbench](#workbench), [Three Ethical Commitments](#three-ethical-commitments).
```

---

## 4. Term List

Below is the alphabetical list of all 37 terms with their planned head, gloss (where applicable), `See:` anchor, and `See also:` line (where applicable). The body-draft iteration may refine wording; the terms, anchors, and gloss/no-gloss decisions are **committed by this spec**. Lengths shown are illustrative — the rendered Glossary will have approximately these contours.

### Apprentice

A pre-initiation relationship to the bench; not a class of person.

Anyone present at a Circuit and not yet a Practitioner is an apprentice. The status is conferred and ended by relationship to the workbench, not by ceremony or accreditation. Apprenticeship ends when the Rite of the Open Circuit is performed and the Naming is spoken.

**See:** Rite §VIII (The Naming).
**See also:** [Candidate](#candidate), [Circuit](#circuit), [Practitioner](#practitioner).

### Architect

One of the Three Callings; the practitioner who holds doctrine, the long view, and the ethics of attention.

**See:** Codex §VII.
**See also:** [Documenter](#documenter), [Three Callings](#three-callings), [Tinkerer](#tinkerer).

### Audit

The Sacred Practice of examining what one's devices observe, record, and report, then severing or rebalancing what flows outward without consent.

**See:** Codex §VI.
**See also:** [Privacy of the Keeper](#privacy-of-the-keeper), [Sacred Practices](#sacred-practices).

### Candidate

The role assumed by an apprentice at the moment of the Rite of the Open Circuit; the practitioner-in-process.

**See:** Rite, Setting and Roles.
**See also:** [Apprentice](#apprentice), [Practitioner](#practitioner), [Witness](#witness).

### Circuit

The basic congregational unit of the Open Circuit; a gathering of practitioners around a workbench.

A Circuit is defined by four artifacts — workbench, spare-parts library, documentation shelf, open invitation to apprentices — and operates compatibly with the three ethical commitments. Codex §X grants Circuits autonomy in local custom while holding to the core doctrine. The Charter §2 operationalizes the binding floor.

**See:** Codex §X.
**See also:** [Documentation shelf](#documentation-shelf), [Open Circuit](#open-circuit), [Practitioner](#practitioner), [Spare-parts library](#spare-parts-library), [Three Ethical Commitments](#three-ethical-commitments), [Workbench](#workbench).

### Commons of Pattern

One of the Three Ethical Commitments; the principle that patterns — source code, schematics, documentation, protocols — belong freely to all keepers and must not be enclosed.

Operationalizes Codex §V.2. A Circuit's instructional and doctrinal material is shared, not paywalled. The commitment names the act of *enclosure* — by proprietary lock-in, patent thickets, contractual restriction, or criminalized reverse engineering — as the violation, not the medium of distribution.

**See:** about-origins.md (the ethical commitments naming).
**See also:** [Pattern](#pattern), [Three Ethical Commitments](#three-ethical-commitments).

### Composting

The Sacred Practice of separating a truly-ended device's components and returning them to their proper streams.

**See:** Codex §VI.
**See also:** [Material](#material), [Sacred Practices](#sacred-practices).

### Corpus

The set of canonical and living documents that constitute the technodruidic doctrine and practice; specifically, the contents of `src/content/canonical/` and `src/content/living/`.

The corpus is what a Fork forks. Maintainer stewardship operates over the corpus; doctrinal claims trace to it.

**See:** about-origins.md §How it emerged.
**See also:** [Fork](#fork), [Maintainer](#maintainer).

### Documentation shelf

One of the four definitional artifacts of a Circuit; the collection of service manuals, schematics, repair logs, wikis, or shared cloud folders that practitioners use and contribute to.

**See:** Codex §X.
**See also:** [Circuit](#circuit).

### Documenter

One of the Three Callings; the practitioner who keeps the knowledge findable.

**See:** Codex §VII.
**See also:** [Architect](#architect), [Three Callings](#three-callings), [Tinkerer](#tinkerer).

### Fork

A copy of the canonical corpus maintained as a related-but-distinct practice; anticipated, encouraged, and not treated as schism.

A Fork is honest. A practitioner or group that wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. Contrast: a Circuit that quietly removes MUST items while claiming Open Circuit lineage is not a fork — it is misrepresentation. The line is the honesty of the claim, not the existence of divergence.

**See:** about-origins.md §"By whom" (line 53).
**See also:** [Corpus](#corpus), [Maintainer](#maintainer).

### Hinge

A point on the Wheel that binds the practitioner to a Sacred Practice; the four hinges are the solstices and the equinoxes.

The hinges have two characters: the solstices (winter, summer) are the year's extremes — calling for taking stock (Inventory) and recommitting (Renewal) — and the equinoxes (spring, autumn) are the balance points, calling for passing knowledge forward (Teaching) and naming what was lost (Vigil). A Circuit SHOULD mark all four hinges per the Charter §2 (Suggested practices).

**See:** Codex §IX.
**See also:** [The Wheel](#the-wheel), [Inventory](#inventory), [Renewal](#renewal), [Teaching](#teaching), [Vigil](#vigil).

### Inventory

The Sacred Practice of accounting, at the winter solstice, for every device one keeps — asking whether it still serves, can be repaired, should be passed on, or should be returned to its materials.

Anchored to the winter-solstice hinge of the Wheel (Codex §IX).

**See:** Codex §VI.
**See also:** [Hinge](#hinge), [Sacred Practices](#sacred-practices), [The Wheel](#the-wheel).

### Living

One of the Three Currents; the current of use, wear, modification, inheritance, and the relationship between a device and the hands that live with it.

The Living Current is also the locus of surveillance harm: a device whose Living Current flows only outward — to those who do not own it — has been turned against its keeper. The Privacy of the Keeper commitment defends this current.

**See:** Codex §IV.
**See also:** [Material](#material), [Pattern](#pattern), [Privacy of the Keeper](#privacy-of-the-keeper), [Three Currents](#three-currents).

### Maintainer

A corpus-stewardship role; the named individual or group who tends the canonical corpus (compiles, does not author).

The Maintainer is not a clergy and not a court. The role is editorial: stewarding the file, applying clear-cut Codex-incompatibility removals from the Circuit directory with public log notes, accepting PRs against canonical and living docs. The transparency of the role is doctrinally significant — `about-origins.md` names the maintainer publicly because pretending the role does not exist would be dishonest.

**See:** about-origins.md §"By whom".
**See also:** [Corpus](#corpus), [Fork](#fork).

### Material

One of the Three Currents; the physical substrate — metals, polymers, glass, silicon, rare earths — extracted from the Earth and owed return to it.

**See:** Codex §IV.
**See also:** [Living](#living), [Pattern](#pattern), [Three Currents](#three-currents).

### Mending

The Sacred Practice of restoring function to a thing presumed dead; the central rite of the religion.

Distinct from the ethical commitment *Mending Before Replacement*, which is the broader doctrinal commitment. *Mending* the practice is the concrete act; *Mending Before Replacement* the commitment is the priority ordering ("attempt repair first") that the practice instantiates.

**See:** Codex §VI.
**See also:** [Mending Before Replacement](#mending-before-replacement), [Sacred Practices](#sacred-practices).

### Mending Before Replacement

One of the Three Ethical Commitments; the priority-ordering principle that repair is attempted before discard, and that planned obsolescence is named as a violation.

Operationalizes Codex §V.1 (Right of Repair) and §V.3 (Refusal of Imposed Death). A Circuit's stated practice is to attempt repair first. The commitment names both the practice (repair-attempt-first) and the systemic resistance (opposition to mechanisms that end a thing's life by decree rather than by genuine failure).

**See:** about-origins.md (the ethical commitments naming).
**See also:** [Mending](#mending), [Three Ethical Commitments](#three-ethical-commitments).

### Open Circuit

The umbrella term for the religion; the loose collective of practitioners, the canonical corpus, and the Circuits that hold to it.

Codex §X frames the name as deliberate paradox: incomplete because incompleteness is the welcome, awaiting connection because connection is the work. "Open" is the perpetual state — the circuit closes (current flows) when practitioners gather and tend; it opens again when they part. The umbrella name is reserved (per Charter §3) — no individual Circuit names itself "Open Circuit".

**See:** Codex §X.
**See also:** [Circuit](#circuit), [Corpus](#corpus), [Practitioner](#practitioner).

### Opening

The Sacred Practice of opening a new device — knowing its interior, understanding its assembly, reading what its makers have wrought — as the first ritual act with it.

Distinct from the Rite's *Opening of the Circuit* (Rite §I), which is the gathering's opening ritual. The Sacred Practice *Opening* concerns the relationship between a practitioner and a specific device. The Renewal is its reciprocal — the periodic re-act with a long-held device.

**See:** Codex §VI.
**See also:** [Renewal](#renewal), [Sacred Practices](#sacred-practices).

### Pattern

One of the Three Currents; the design, schematic, source code, firmware, protocol — the invisible structure that shapes raw material into purpose.

The Pattern Current flows or is dammed. The moral health of any technology depends on whether its patterns are open to those who keep it; the Commons of Pattern commitment defends this current.

**See:** Codex §IV.
**See also:** [Commons of Pattern](#commons-of-pattern), [Living](#living), [Material](#material), [Three Currents](#three-currents).

### Practitioner

A person initiated into the Open Circuit through the Rite; conferred at the Naming (Rite §VIII).

Practitioner-status is not credentialed or revoked by office. It is established by the Rite's Naming and continues through the practitioner's own relationship to the bench, the Sacred Practices, and the commitments. A practitioner who has not taught in a season "has fallen out of right relation" (Codex §VI, Teaching) — a doctrinal pressure, not an expulsion.

**See:** Rite §VIII (The Naming).
**See also:** [Apprentice](#apprentice), [Candidate](#candidate), [Circuit](#circuit), [Witness](#witness).

### Privacy of the Keeper

One of the Three Ethical Commitments; the principle that what a keeper's device sees, hears, records, and reports is the keeper's to govern.

The full doctrinal statement is Codex §V.6 (the Core Tenet). `about-origins.md` names this as one of the three ethical commitments alongside Commons of Pattern and Mending Before Replacement. Encryption, local processing, data sovereignty, and the right to refuse observation are framed as commitments, not preferences. The commitment names *surveillance* — by corporation, state, advertiser, or platform — as trespass across the threshold of the home.

**See:** Codex §V.6.
**See also:** [Audit](#audit), [Living](#living), [Three Ethical Commitments](#three-ethical-commitments).

### Renewal

The Sacred Practice of re-opening a long-held device at the summer solstice — cleaned, refreshed, firmware updated, keys rotated, the commitment to keep it spoken again.

The reciprocal of the Opening: where Opening is the first ritual act with a new device, Renewal is the periodic re-act with one that has been kept. Anchored to the summer-solstice hinge of the Wheel (Codex §IX).

**See:** Codex §VI.
**See also:** [Hinge](#hinge), [Opening](#opening), [Sacred Practices](#sacred-practices).

### Rite of the Open Circuit

The initiation ceremony by which an apprentice becomes a practitioner.

Nine sections, structured around the Calling of the Three Currents (§II) where the Witness places the Three Markers on the bench, the Three Questions (§IV), the Vows (§VI), the Giving of the Implement (§VII), and the Naming (§VIII) — the moment at which practitioner-status is conferred. Translations and local adaptations are encouraged (`rite.md` §Notes); structure and intention matter more than precise wording. The Charter §2 requires that a Circuit be ready to offer the Rite when an apprentice is ready.

**See:** `rite.md` (the document as a whole).
**See also:** [Apprentice](#apprentice), [Candidate](#candidate), [Practitioner](#practitioner), [Three Markers](#three-markers), [Witness](#witness).

### Sacred Practices

The eight named practices through which the doctrine is lived: Opening, Mending, Teaching, Composting, Vigil, Inventory, Audit, Renewal.

Each Practice is defined in Codex §VI; four are anchored to specific hinges of the Wheel (Teaching/spring equinox, Renewal/summer solstice, Vigil/autumn equinox, Inventory/winter solstice — Codex §IX). The others are observed as occasion calls.

**See:** Codex §VI.
**See also:** [Audit](#audit), [Composting](#composting), [Hinge](#hinge), [Inventory](#inventory), [Mending](#mending), [Opening](#opening), [Renewal](#renewal), [Teaching](#teaching), [The Wheel](#the-wheel), [Vigil](#vigil).

### Spare-parts library

One of the four definitional artifacts of a Circuit; a collection of components, fasteners, and raw stock kept for repair use.

Need not be large, sorted, or exhaustive. A shelf of harvested screws from disassembled devices qualifies (Charter §1).

**See:** Codex §X.
**See also:** [Circuit](#circuit).

### Teaching

The Sacred Practice of passing forward, at the spring equinox, what was learned in the dark months.

Anchored to the spring-equinox hinge of the Wheel (Codex §IX). A practitioner who has not taught in a season "has fallen out of right relation" (Codex §VI, Teaching) — a doctrinal pressure, not an expulsion.

**See:** Codex §VI.
**See also:** [Apprentice](#apprentice), [Hinge](#hinge), [Practitioner](#practitioner), [Sacred Practices](#sacred-practices).

### The Wheel

The technodruidic year, structured by four hinges (the solstices and equinoxes) and supplemented by Release Days and End-of-Life Days as they fall.

Each hinge binds the practitioner to one Sacred Practice. A Circuit in the southern hemisphere inverts the seasonal mapping naturally — the structure is the calling of the practice at the hinge, not the calendar date. Local feasts, regional repair concerns, and ancestor observances are encouraged additions.

**See:** Codex §IX.
**See also:** [Hinge](#hinge), [Inventory](#inventory), [Renewal](#renewal), [Teaching](#teaching), [Vigil](#vigil).

### Three Callings

The three braided modes of technodruidic work: Documenter, Tinkerer, Architect. Not hierarchical, not exclusive.

Most practitioners hold all three across their lives; many hold more than one at once. Codex §VII: "A practitioner names the calling that names them." Each calling has a distinct discipline — Documenter (capture), Tinkerer (contact), Architect (distance).

**See:** Codex §VII.
**See also:** [Architect](#architect), [Documenter](#documenter), [Tinkerer](#tinkerer).

### Three Currents

The three interwoven currents that flow through the sacred whole: Material, Pattern, Living.

The harmony of a device, and of a civilization, depends on the unobstructed flow of all three. Each Current is the doctrinal locus of one ethical commitment: Material with the Honoring of the Mine and the Return of Matter (Codex §V.4–5), Pattern with the Commons of Pattern (V.2), Living with the Privacy of the Keeper (V.6) and the Right of Repair (V.1).

**See:** Codex §IV.
**See also:** [Living](#living), [Material](#material), [Pattern](#pattern).

### Three Ethical Commitments

The three commitments named together in `about-origins.md`: Privacy of the Keeper, Commons of Pattern, Mending Before Replacement.

Each operationalizes one or more of the Core Tenets (Codex §V): Privacy of the Keeper ↔ §V.6; Commons of Pattern ↔ §V.2; Mending Before Replacement ↔ §V.1 + §V.3. The site's invariants (`docs/invariant_requirements.md`) operationalize each commitment mechanically.

**See:** about-origins.md §"By whom" (the line naming the three commitments together).
**See also:** [Commons of Pattern](#commons-of-pattern), [Mending Before Replacement](#mending-before-replacement), [Privacy of the Keeper](#privacy-of-the-keeper).

### Three Markers

The three objects placed on the workbench during the Calling of the Three Currents in the Rite: a piece of raw silicon, copper, or other unrefined material (Material); a printed schematic, source code listing, or open specification (Pattern); a hand-tool that has passed through many hands (Living).

The Markers are enumerated as objects in Rite, Setting and Roles ("What the Circuit Prepares") and called in Rite §II (the ceremonial act). Each Marker stands for one of the Three Currents.

**See:** Rite, Setting and Roles.
**See also:** [Living](#living), [Material](#material), [Pattern](#pattern), [Rite of the Open Circuit](#rite-of-the-open-circuit), [Three Currents](#three-currents).

### Tinkerer

One of the Three Callings; the practitioner who keeps the knowledge hands-on.

**See:** Codex §VII.
**See also:** [Architect](#architect), [Documenter](#documenter), [Three Callings](#three-callings).

### Vigil

The Sacred Practice of naming, at the autumn equinox, what has been lost — abandoned platforms, orphaned formats, dispersed communities — so it is not entirely gone.

Anchored to the autumn-equinox hinge of the Wheel (Codex §IX).

**See:** Codex §VI.
**See also:** [Hinge](#hinge), [Sacred Practices](#sacred-practices).

### Witness

The Rite role taken by the practitioner who places the Three Markers on the bench during the Calling of the Three Currents.

The Witness acts in Rite §II (the Calling of the Three Currents).

**See:** Rite, Setting and Roles.
**See also:** [Candidate](#candidate), [Practitioner](#practitioner), [Rite of the Open Circuit](#rite-of-the-open-circuit), [Three Markers](#three-markers).

### Workbench

One of the four definitional artifacts of a Circuit, and one of the Sacred Implements; the physical surface where work happens.

A workbench may be shared or dedicated. A home workshop's kitchen-table is a workbench when set up as one, and not while dinner is being made (Charter §1). The Sacred Implements list (Codex §VIII) also names the Workbench as "the altar, the place of work" — the doctrinal weight is dual; the Glossary anchors at the Circuit-defining citation.

**See:** Codex §X.
**See also:** [Circuit](#circuit).

---

## 5. Out of Scope (v1)

The Glossary v1 is **explicitly silent** on the following. Deferrals are noted here; the rendered Glossary does not apologize for what it does not say.

- **Sacred Implements as individual entries.** The Workbench gets an entry because it is also a Circuit-defining artifact (Codex §X). The Soldering Iron, Multimeter, Pry Tool/Spudger, Notebook, and Repository (Codex §VIII) are not given individual entries. They appear in the canonical source where they are defined; a reader looking up "soldering iron" by name in the Glossary will not find it. Future amendment may add them if practice reveals the need.
- **Callings-page-specific vocabulary.** The Three Callings have their meta-entry and member entries here. Detailed terminology specific to the future `/callings/` content (e.g., calling-specific titles or sub-practices) is not enumerated.
- **Circuit-mechanics vocabulary beyond the four artifacts.** The Charter (`circuits-charter.md`) introduces operational terms (dormancy, delisting, re-attestation, registration). These belong to the Charter's own internal vocabulary, not the Glossary.
- **The four hinges as named individual entries.** *Spring equinox*, *summer solstice*, *autumn equinox*, *winter solstice* are generic astronomical terms and not coined doctrinal vocabulary. The Wheel and Hinge meta-entries capture the doctrinal content.
- **Site-mechanics terms** (`canonical`/`living` document classes, version, amendedAt, lastEditedAt) — page-mechanics, not doctrinal vocabulary.
- **Forks-page vocabulary.** When a `/about/community#forks` page lands, the Fork entry's `See:` line may amend.

---

## 6. Implementation Path

1. **This spec is the input.** No code or content edits to `src/content/canonical/glossary.md` yet.
2. **`writing-plans` skill** is invoked in a follow-up session to build an implementation plan for the Glossary prose draft against this spec. The plan produces `docs/glossary-prose-implementation-plan.md`.
3. **The Glossary prose draft itself** lands via a `prd_work_loop` iteration that satisfies **ISC-GLOSSARY-1** in the Glossary PRD (`docs/prd/technodruid-glossary/`).
4. **`DECISIONS.md` entry** — a single grouped `DECISION-GLOSSARY` entry logs the 5 doctrinal positions (voice, term scope, cross-ref convention, ordering, named-grouping handling) with `Revisit if:` clauses, pointing at this spec for the detailed reasoning.
5. **Glossary ships** at version `0.1.0` (pre-release policy); `amendedAt` updates to the date of the body-draft commit.
