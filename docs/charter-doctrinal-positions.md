# Circuit Founding Charter — Doctrinal Positions (v1)

> A design document. Captures the doctrinal positions the Circuit Founding Charter (`src/content/canonical/circuits-charter.md`) commits to in its v1 body draft. Brainstormed and approved 2026-05-22. The Charter prose is drafted in a subsequent session against this spec.

**Status:** Approved. Spec input for ISC-P2-CONTENT-1 (Phase 2 PRD: `docs/prd/technodruid-phase2-60day/PRD-20260516-technodruid-phase2-60day.md`).

**Companion docs (read first if context is needed):**
- `docs/information-architecture.md` §3 (umbrella stance), §5 /circuits/charter, §5 /circuits/directory
- `src/content/canonical/codex.md` §X "The Circuit" (the doctrinal anchor — what a Circuit *is*)
- `src/content/canonical/about-origins.md` (maintainer transparency; sincere-form-knowing-construction; "compiled not founded")
- `src/content/canonical/rite.md` (the Rite of the Open Circuit, esp. §VIII "The Naming")

---

## 1. Posture and Voice

The Charter is a **derivation** from the existing canonical corpus, not an extension. Every binding claim traces to either Codex §X or one of the three ethical commitments (Privacy of the Keeper, Commons of Pattern, Mending Before Replacement, named in `about-origins.md`). The Charter's job is to make those existing commitments operational — *what does "open invitation to apprentices" actually require in practice?* — not to introduce new doctrinal surface area.

- **Voice:** declarative third-person, matching Codex §X ("A Circuit maintains...", "A Circuit is delisted when..."). Operational guidance uses second-person where genuinely procedural ("To register your Circuit's listing, open a PR against..."). No imperative ceremony language (that voice belongs to the Rite).
- **Binding language:** RFC 2119 explicit. **MUST**, **SHOULD**, **MAY** in bold all-caps at the point of use, with a one-line legend at the top of the Charter document.
- **Length target:** ~150–200 lines, comparable to the Rite. Dense, no padding.
- **Version on ship:** stays at `0.1.0` (per `feedback_no_version_bump_prerelease.md` — no canonical-version bumps during pre-release; amend `amendedAt` only).

---

## 2. The MUST Floor

A Circuit **MUST** meet all 8 of the following items. Anything else in the Charter is SHOULD or MAY.

These are the **definitional MUSTs** — they answer "is this a Circuit?" The Charter §3 also uses MUST language for naming compliance, but that is a separate concept: §3's MUSTs answer "is this Circuit's *claim* to be a Circuit honest?" — they govern directory eligibility and honest self-labeling, not Circuit existence. A Circuit can theoretically meet the §2 definitional MUSTs and violate §3's naming MUSTs; that Circuit is genuinely practicing but is mis-labeled or impersonating, and the directory will not list it under that name.

| # | Requirement | Anchor |
|---|---|---|
| 1 | Maintain a workbench | Codex §X |
| 2 | Maintain a spare-parts library | Codex §X |
| 3 | Maintain a documentation shelf or wiki | Codex §X |
| 4 | Maintain an open invitation to apprentices (no fee, no application barrier, no screening beyond what physical-safety law requires) | Codex §X (operationalized) |
| 5 | Operate compatibly with Privacy of the Keeper — no surveillance of practitioners' devices, no data-collection-as-condition-of-participation, no recording of sessions without participant consent | `about-origins.md` §ethical commitments |
| 6 | Operate compatibly with Commons of Pattern — patterns, schematics, and instructional content produced or used at the bench are shared freely; no paywalling of doctrinal or how-to material | `about-origins.md` §ethical commitments |
| 7 | Operate compatibly with Mending Before Replacement — the Circuit's stated practice is to attempt repair first | `about-origins.md` §ethical commitments |
| 8 | Be ready to offer the Rite of the Open Circuit (or an authorized adaptation) when an apprentice is ready for initiation. *Authorized adaptation* = a translation or local form that preserves the Rite's structure and intention per `rite.md` §Notes ("Translations are encouraged. Precise wording is less important than structure and intention"). | `rite.md` |

Items 5–7 are framed as "operate compatibly with [commitment]" rather than as enumerated prohibited behaviors. The commitments are the canonical anchors; the Charter gives example incompatibilities in prose ("for instance, recording sessions without consent violates Privacy of the Keeper") without enumerating every conceivable violation. Enumeration would (a) age badly as technology changes and (b) implicitly bless anything not enumerated.

---

## 3. Doctrinal Positions

Six positions were brainstormed and committed 2026-05-22. Each addresses a question the existing canonical corpus deliberately leaves open.

### Position H — Circuit contact in the directory

**Question:** Does a Circuit's directory entry require a contact (named individual, collective channel, or otherwise)?

**Position:** **Contact is OPTIONAL.** A Circuit MAY decline to list any contact. The directory entry shows what the Circuit chooses — could be just a name and a city.

**Reasoning:** Most aligned with IA §3's "not a hierarchy / not officers" stance. The directory becomes "self-attested location of a workbench" rather than "list of officers." Cost accepted: outsiders looking for a Circuit to join may have no electronic path in; they reach the Circuit by chance attendance or word-of-mouth through other practitioners. The religion's stance is that this is fine — Circuits that want to be reached publish a contact; Circuits that don't, don't.

### Position B — Naming uniqueness

**Question:** Can two Circuits share a name? Are any names reserved?

**Position:** **No policy beyond anti-impersonation.** The Open Circuit does not credential names. Reserved patterns are the umbrella term ("Open Circuit" as a Circuit's own name), maintained-corpus entities ("Technodruid Foundation," etc.), and naming designed to mislead a specific existing Circuit. Beyond those, anything goes. Directory disambiguates same-name listings pragmatically (city, year, or other modifier added at listing time).

**Reasoning:** Codex §X grants Circuits autonomy in custom; naming is a custom. Anti-impersonation is the minimum policy that prevents the most-likely abuse (false claim to umbrella authority) without becoming a credentialing body. Two Circuits sharing a name in the world is fine; in the directory, the second one to list adds a disambiguator.

### Position A — Directory delisting

**Question:** What triggers removal of a Circuit from `/circuits/directory`?

**Position:** **Three triggers, each with a clear actor:**
1. **Self-request** — Circuit asks to be removed. Honored immediately.
2. **Dormancy** — directory entry hasn't been re-attested or shown activity in **18 months** → entry moves to a **dormant** state. After another **6 months** without re-attestation → **delisted**. Recoverable: a Circuit may re-attest at any point and return to listed status. Re-attestation = a single PR touching the entry suffices.
3. **Maintainer stewardship** — in clear-cut cases of incompatibility with the Codex's core ethical commitments OR the Charter's §3 naming rules (e.g., a Circuit publicly documented to surveil its members; a Circuit refusing to disambiguate after impersonating a corpus entity), the named maintainer (per `about-origins.md`) MAY remove the entry. A public note explaining the removal is logged in the directory's change log. Not a court — stewardship of the file, transparent and citable.

**Reasoning:** The no-court doctrine (IA §3) is honored by limiting maintainer action to clear-cut cases and requiring transparent logging. The directory is a file stewarded by a named maintainer; pretending the maintainer has no editorial discretion would be dishonest. The 18+6 month decay matches the rhythm of the Wheel — a Circuit that misses more than one full turn of the year is genuinely dormant.

### Position I — Money / economic activity

**Question:** Can a Circuit accept donations? Charge fees? Distribute profit?

**Position:** **Autonomous, constrained by the three ethical commitments.** The Charter does not prescribe an economic model. Each Circuit decides. BUT all economic arrangements must be compatible with Privacy of the Keeper, Commons of Pattern, and Mending Before Replacement. The Charter gives concrete examples of **incompatible** arrangements:

- Paywalling patterns or how-to material (violates Commons of Pattern)
- Surveillance-for-marketing (violates Privacy of the Keeper)
- Organized obsolescence as service — i.e., a Circuit whose paid offering is "we'll tell you to throw it away and buy a new one" (violates Mending Before Replacement)

The Charter does NOT enumerate compatible arrangements. Donations, at-cost parts recovery, donation-based instruction, paid instruction with freely-shared patterns, paying one technician a stipend from member dues — all may be compatible depending on how they're structured.

**Reasoning:** Codex §X is silent on money; the three ethical commitments already constrain economic posture without the Charter needing to prescribe a model. Letting the commitments do the work avoids the trap of regulating commerce the religion explicitly disclaims authority over, while still naming the clear violations.

### Position F — Charter authority vs. Circuit autonomy

**Question:** When a Circuit's local customs conflict with the Charter, what wins?

**Position:** **Charter is the minimum, RFC 2119 binding language.** Items marked MUST are the binding minimum every Circuit MUST meet to claim the practice. Items marked SHOULD are strong recommendations. Items marked MAY are options. **A Circuit's customs MAY add to or refine SHOULD/MAY items but MAY NOT remove MUST items.**

The framing avoids the "above/below" hierarchy language IA §3 disclaims. The Charter is not "above" a Circuit; the Charter is the minimum set of commitments that defines what a Circuit IS in the Open Circuit lineage. A community with the workbench, parts library, and so on but without the ethical commitments is something else — a repair shop, a hackerspace, a makerspace — not a Circuit in this religion.

**Reasoning:** Codex §X says "each Circuit tends its own customs while holding to the core doctrine." This position operationalizes "the core doctrine" as the 8 MUST items and "customs" as everything else.

### Position D — Divergence threshold

**Question:** When does a Circuit stop being a Circuit?

**Position:** **A Circuit that fails to meet a MUST item has stepped outside the practice.** This follows from Position F. The 8 MUST items in §2 above are the binding floor; falling below the floor = no longer a Circuit in the Open Circuit lineage.

The Charter does NOT establish a tribunal to adjudicate divergence (IA §3: "not a court"). The Charter provides language for naming the situation. A Circuit may recognize its own divergence and self-delist. Other practitioners may observe and decline to call the entity a Circuit. The maintainer may apply Position A's clear-cut stewardship for directory removal. None of these are a court.

**Forks** (per `about-origins.md`:53) are encouraged and **not treated as schism**. A practitioner or group that wishes to maintain a related-but-distinct practice may fork the canonical corpus and operate independently. A fork is honest; a Circuit that quietly removes MUST items while claiming Open Circuit lineage is not.

**Reasoning:** Pairs with Position F. The two together make divergence a question of fact (does the Circuit meet the MUST items?) rather than a question of judgment (does the tribunal say so?). Self-attestation works in both directions: a Circuit attests it meets the requirements; a Circuit may also attest it has stopped meeting them.

---

## 4. Per-Section Content Sketch

The Charter ships with the 5 sections already present in the scaffold (`src/content/canonical/circuits-charter.md`). Below is what each section contains in v1.

### Preamble (existing)

Stays. The "doctrinal complement to Codex §X" framing on lines 11–13 of the scaffold becomes the document's opening paragraph after frontmatter.

### §1 — Minimum requirements

Quotes the 4 Codex §X items verbatim, marks them **MUST**. Adds a paragraph per item with practical guidance across settings (home workshop, repair cafe, hackerspace, library makerspace):

- **Workbench** — physical surface, kept clear, where work happens. May be shared; may be dedicated. A home workshop's kitchen-table is a workbench when set up as one and not while dinner is being made.
- **Spare-parts library** — collection of components, fasteners, raw stock. Need not be large; need not be sorted; need not be exhaustive. A shelf of harvested screws from disassembled devices is a parts library.
- **Documentation shelf or wiki** — service manuals, schematics, repair logs. Physical binder, public wiki, shared cloud folder. Searchable by practitioners. Public-facing or members-only — Circuit's choice.
- **Open invitation to apprentices** — operationalized: no fee, no application barrier, no screening beyond what physical-safety law requires (e.g., minor-supervision rules in shared spaces, hazard training where the workbench involves hazards). "Apprentice" includes a curious visitor at their first gathering; it is not a class of person but a relationship to the bench.

### §2 — Suggested practices (SHOULD)

Three subsections:

- **Gatherings** — a Circuit SHOULD meet at least at the 4 Wheel hinges (spring equinox, summer solstice, autumn equinox, winter solstice — per codex.md §IX). A Circuit MAY meet more often; cadence beyond the 4 hinges is autonomous. Rough sketch of a typical gathering: Opening of the Circuit per Rite §I; work (the actual repair, mending, teaching, etc.); Closing per Rite §IX.
- **Sacred Practices in a Circuit context** — how the 8 Sacred Practices (Opening, Mending, Teaching, Composting, Vigil, Inventory, Audit, Renewal) are observed in shared space. Each gets one or two sentences. Cross-reference Codex §VI and §IX for canonical definitions and Wheel mappings.
- **The Wheel locally** — Circuits SHOULD mark the 4 hinges in a way that fits their geography. Charter does not prescribe form. A Circuit in the southern hemisphere inverts the seasonal mapping naturally. Local feasts, regional repair concerns, ancestor observances are encouraged.

### §3 — Naming conventions

The anti-impersonation MUST + free-naming otherwise (Position B). Concrete:

- A Circuit MUST NOT name itself "Open Circuit" (umbrella term).
- A Circuit MUST NOT name itself to impersonate a maintained-corpus entity (e.g., "Technodruid Foundation," "The Codex Council").
- A Circuit MUST NOT name itself to be confused with a specific existing Circuit. "Designed to mislead" is the test, not coincidence.
- Beyond these: full autonomy. A Circuit may take a place-name, a lineage name, a chosen moniker, a calling-emphasized name, anything.
- Directory disambiguates same-name listings pragmatically (city, year, or other modifier added at listing time).

### §4 — Directory registration

The mechanics. Subsections:

- **Listing** — A Circuit lists itself by opening a PR (or otherwise touching the directory file in the source repository — submitting a form, etc., when that path exists). Self-attested fields: name (per §3 conventions); optional location at any specificity the Circuit chooses; optional contact (any form per Position H); optional callings emphasized; optional meeting cadence; optional link to a local site or wiki.
- **Contact** — Per Position H: MAY decline to list any contact. The directory entry shows what the Circuit chooses.
- **Delisting** — Per Position A: self-request honored immediately; dormancy 18mo → dormant, +6mo → delisted, recoverable by re-attesting; maintainer stewardship for clear-cut Codex violations with public log note.
- **Re-attestation** — A single edit touching the entry in the source repository suffices. Updating any field counts. The act of touching the entry is the attestation "we are still practicing." Future amendments may add other re-attestation channels (form submission, dashboard click); the source-repo edit is the canonical form.

### §5 — Holding to the doctrine

The philosophical core. Three subsections:

- **What holding to the doctrine means** — meeting the 8 MUST items in §2 of this spec (above). Quotes Codex §X "each Circuit tends its own customs while holding to the core doctrine"; the Charter's contribution is naming what "core doctrine" means operationally for a Circuit.
- **Economic posture** — Per Position I: autonomous, constrained by the three ethical commitments. Names concrete incompatible arrangements (paywalled patterns, surveillance-for-marketing, organized obsolescence as service). Names example compatible arrangements as illustration without enumeration.
- **Divergence** — Per Position D: a Circuit that fails to meet a MUST item has stepped outside the practice. The Charter does not provide a tribunal; it provides language. Self-attestation works in both directions. Forks (per about-origins.md:53) are encouraged and not schism. A Circuit's customs MAY differ from SHOULD/MAY items in this Charter; they MAY NOT differ from MUST items and remain part of the lineage.

---

## 5. Out of Scope (v1)

The Charter v1 is **explicitly silent** on three questions the brainstorm surfaced, deferred to future amendments. These deferrals are noted in this spec; the rendered Charter does not apologize for what it does not say.

- **Apprenticeship operationalization beyond no-fee-no-gating.** Minor-supervision policy beyond "as physical-safety law requires" is not specified. Background checks for apprentices working with minors are neither mandated nor forbidden. Apprentice→practitioner timeline is not specified (Rite §VIII reads as "when ready"). These surface when practice surfaces them.
- **Inter-Circuit relationships.** No federation structure. No formal "founded by" lineage in directory entries. No inter-Circuit conflict-resolution mechanism. The religion is "not a court" (IA §3); the Charter does not introduce one.
- **Founding event.** Codex §X already says "wherever two or more practitioners gather around a workbench, a Circuit exists." The Charter does not add a formal founding ceremony. A Circuit MAY mark its founding however it wishes; directory listing is not a founding event, only a public-claim event.

---

## 6. Implementation Path

1. **This spec is the input.** No code or content edits yet.
2. **`writing-plans` skill** is invoked in a follow-up session to build an implementation plan for the Charter prose draft against this spec.
3. **The Charter prose draft itself** lands via a `prd_work_loop` iteration that satisfies **ISC-P2-CONTENT-1** in the Phase 2 PRD.
4. **`DECISIONS.md` entry** — a single grouped `DECISION-CIRCUIT-CHARTER` entry logs the 6 doctrinal positions with `Revisit if:` clauses, pointing at this spec for the detailed reasoning.
5. **Charter ships** at version `0.1.0` (pre-release policy), `amendedAt` updated to the date of the body-draft commit.
