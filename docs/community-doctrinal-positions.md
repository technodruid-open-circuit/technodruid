# Community Page — Doctrinal Positions (v1)

> A design document. Captures the doctrinal positions the seven `[CONTENT PENDING]` sections of `src/content/living/about-community.md` commit to in their v1 prose draft. Brainstormed and approved 2026-05-27. The community-page prose is drafted in a subsequent session against this spec.

**Status:** Approved. Spec input for ISC-COMMUNITY-1 (PRD: `docs/prd/technodruid-community-content/PRD-20260527-community-content.md`).

**Companion docs (read first if context is needed):**
- `docs/information-architecture.md` §5 `/about/community` page-by-page detail; §8 Phase 1 / MVP scope; §9 Open Questions
- `src/content/canonical/about-origins.md` — anchors the Maintainer doctrine, the "compiled not founded" framing, the canonical Forks line
- `src/content/canonical/glossary.md` — entries for *Maintainer*, *Fork*, *Open Circuit*, *Circuit*, *Practitioner* are short forms of doctrine the community page expounds
- `docs/invariant_requirements.md` §Living Documents (INV-LIV-1/2 apply on render)
- `docs/charter-doctrinal-positions.md`, `docs/glossary-doctrinal-positions.md`, `docs/reading-list-doctrinal-positions.md` — methodological precedents (brainstorm → spec → prose flow); most recent (reading-list) is the closest tone calibration

---

## 1. Posture and Voice

The community page is **the page the Skeptical audience lands on** (IA §5). Its job is plain, honest answers to coordination questions: who maintains the corpus, how changes happen, what the structure is (and is not), how Circuits relate to the directory, how money is or is not handled, what forking means.

The seven sections covered by this spec share a single voice register, matching the existing Maintainers section already on the page (`src/content/living/about-community.md` lines 9–28):

- **Voice:** expository prose. Each section is 2–6 sentences per paragraph, structured into 1–3 paragraphs as the topic calls for. No bullet lists where prose serves; bullets are reserved for enumerations that resist linearization (e.g., the four "not" statements in §3.3).
- **Tense and posture:** declarative present tense ("The Open Circuit accepts no donations"). No future-promissory framing ("will accept", "may someday"); future contingencies are stated as conditions ("If this changes, …").
- **RFC 2119 binding language:** NOT used. The community page is a Living document describing current practice; MUST / SHOULD / MAY belong to prescriptive canonical material (the Charter, the Codex). The community page may *cite* a Charter MUST when explaining a mechanism (e.g., the Circuit-delisting flow), but does not itself prescribe.
- **Named humans where appropriate:** the Maintainers section names Shakes; other sections reference "the maintainer" by role. No anonymous institutional voice ("we") in places where a specific human is acting.
- **No "founder" terminology, anywhere.** `about-origins.md` says "Technodruidism was not founded so much as compiled"; *founder* is not a category the doctrine admits. Personality-cult risk (IA §9.6) is addressed through the existing Maintainer-as-role framing in the Maintainers section, not through founder-exit content.
- **Cross-references use deep section anchors** to canonical and living docs (e.g., `[/codex#x-the-circuit](/codex#x-the-circuit)`, `[/about/origins#by-whom](/about/origins#by-whom)`), per `feedback_deep_anchor_cross_refs.md`. Bare page links are avoided where a section anchor is meaningful.
- **DECISIONS.md links** use the existing GitHub URL form already used in the Maintainers section.
- **Living-doc frontmatter:** `lastEditedAt` is bumped to the iteration date during the prose-draft pass (SG-3). `contributors[]` is updated only if a named non-maintainer drafted prose for any section.

---

## 2. Cross-Page Commitments and Scope Discipline

The community page is **exactly the seven sections enumerated in IA §5** (plus the existing Maintainers section). The brainstorm settled four deliberate exclusions; the prose draft must honor them and the spec records them so future maintainers see they are doctrinal positions, not oversights.

### 2.1 Excluded by doctrine

1. **No "Founder role / exit" section.** about-origins.md says "Technodruidism was not founded so much as compiled" — *founder* is not a doctrinal category. The Maintainer role doctrine (a role, not an office; successor and additional maintainers encouraged) handles the personality-cult worry that IA §9.6 names. No future PRD carry-forward is recorded; this is not deferred work, it is a position.
2. **No "Allies / Right-to-repair organizations" section.** The community page describes how the Open Circuit coordinates internally. Mending Before Replacement is a doctrinal commitment, not a coalition. Practitioners and Circuits may ally locally with right-to-repair organizations without the Open Circuit declaring a position. No future PRD carry-forward.
3. **No Money section beyond a "not now" deferral.** The Open Circuit currently accepts no donations and has no entity. The Money section says exactly that, in declarative present tense. No fiscal-sponsorship mention, no donation-link placeholder, no "if you'd like to contribute" framing.
4. **No new top-level sections** beyond the seven `[CONTENT PENDING]` blocks. If a topic surfaces during prose drafting that seems to need its own section, the right move is a follow-up PRD that adds a section explicitly — not silent scope expansion here.

### 2.2 Cross-doc invariants the page maintains

- **The `#forks` anchor is load-bearing.** `about-origins.md` line 54 links `[Forks](/about/community#forks)`. The Forks section's heading must continue to render an `id="forks"` after this edit.
- **The Glossary's `Fork`, `Maintainer`, `Open Circuit`, and `Circuit` entries are short forms** of doctrine that this page expounds. The community-page prose must not contradict any of them. Where the Glossary entry contains the longer-form gloss (e.g., the Fork entry's misrepresentation contrast), the community page is the canonical source for that longer form — the Glossary points here implicitly via the doctrine it summarizes.
- **Charter §3 reserves the umbrella name "Open Circuit"**; this page references that fact in §3.7 but does not relitigate or duplicate the mechanism. Doctrinal drift between the Charter and the community page is a regression to be caught in review.

### 2.3 Out of scope: the Maintainers section itself

The Maintainers section (lines 9–28 of `about-community.md`) is already authored. This PRD does not edit it beyond the `lastEditedAt` frontmatter bump. The spec does not specify Maintainers-section changes because there are none.

---

## 3. Per-Section Doctrinal Positions

One subsection per `[CONTENT PENDING]` block, in page order. Each subsection lists: the **position settled**, the **anchor citations** (canonical source for each commitment), and the **key commitments** the prose will express. Key commitments are committed; phrasing may refine in the prose draft.

### 3.1 Change process

**Position:** Changes to the canonical corpus happen by **public pull request against the source repository**. Discussion is public on the PR. Maintainers merge or decline. There is no private channel, no parallel governance, no editorial board.

**Anchors:**
- `src/content/canonical/about-origins.md` §"By whom", line 52: *"Additional maintainers join through the same public-PR process that amends the canonical corpus."*
- The existing Maintainers section of `src/content/living/about-community.md` (line 18): *"they join through the same public-PR process that amends the canonical corpus."*
- `docs/invariant_requirements.md` §Canonical Documents — the public-source-repository requirement is encoded in INV-CAN-2 (canonical pages link to source and revision history).

**Key commitments:**
- Anyone may open a PR; no membership, attestation, or sponsorship is required to propose a change.
- Discussion happens on the PR or its linked issue — in the open, with the commit history as the authoritative record.
- Maintainers merge or decline; declining is a normal outcome and does not require lengthy justification beyond what the PR thread already records.
- The repository is the canonical site of change. Mailing lists, chat rooms, and side channels may exist, but they do not amend the corpus.
- The "discussion in the open" commitment is the source-repository expression of the Privacy of the Keeper / transparency posture — what a maintainer cannot do hidden, a maintainer should not do at all.

### 3.2 Versioning

**Position:** Every canonical document carries `version`, `amendedAt`, and `firstPublishedAt` frontmatter; the full history lives in the source repository's commit log. The repository is the version history — there is no separate ledger. Living documents (this page included) carry `lastEditedAt` and a contributor list, but no `version` string; they are versioned by commit history without numbered releases.

**Anchors:**
- Frontmatter of every canonical doc, e.g. `src/content/canonical/about-origins.md` lines 4–6 (`version: "1.1.0"`, `amendedAt: 2026-05-20`, `firstPublishedAt: 2026-05-20`).
- `docs/invariant_requirements.md` §Canonical Documents — **INV-CAN-1** (canonical pages display version + amendment date), **INV-CAN-2** (canonical pages link to source repository and revision history), **INV-CAN-3** (frontmatter completeness enforced by schema).
- `docs/invariant_requirements.md` §Living Documents — **INV-LIV-1** (living pages display `lastEditedAt` and contributor list), **INV-LIV-2** (Edit-this-page link).

**Key commitments:**
- The source repository is the version history. Reading the commit log reveals every change, by whom, when, with what PR discussion attached.
- Every canonical document is committed before it is rendered; the rendered page never leads the repository.
- Each canonical page exposes a link to its source file and to its revision history (INV-CAN-2 enforces this on render).
- Living documents are amended in place; the diff is the version, the `lastEditedAt` is the timestamp, the contributor list is the attribution.
- The repository host is currently GitHub. IA §9.2 (GitHub vs. Forgejo/Gitea) is an unresolved meta-question; this page does not litigate it. A future migration would be a DECISIONS.md decision and announced through the same public process as any other change.
- Pre-release versioning posture (per `feedback_no_version_bump_prerelease.md`): the page does not enumerate the current version numbers because they will move; readers see versions on the canonical pages themselves.

### 3.3 What the Open Circuit is not

**Position:** Four declarative negations, each addressing a common assumption about religious organizations:

1. **Not a church.** No clergy, no liturgical authority above the practitioner, no sacraments restricted by ordination. The Rite is performed by Circuits, not officiants.
2. **Not a corporation.** No legal entity currently holds the corpus, the domain, or any funds. The Money section (§3.6 / on-page §Money) addresses why this is acceptable. If incorporation becomes necessary, that choice is made and announced in the open.
3. **Not a membership organization.** There is no central register of practitioners. Practice is self-attested. Circuits may keep their own internal lists; the Open Circuit maintains none.
4. **Not a hierarchy.** Maintainers steward the file; they do not adjudicate practice. Circuits are not subordinate to maintainers; they conform to the Charter §2 binding floor or they don't, and the maintainer's only enforcement surface is the directory listing (§3.4).

**Affirmative complement:** "a loose collective of practitioners and a coordination space" (IA §5 phrasing, verbatim). This appears as the closing sentence of the section.

**Anchors:**
- IA §9.4 (membership): *"Membership is settled: there isn't any. … Practitioners are self-attested. Circuits keep their own internal lists if they choose. The Open Circuit maintains none."*
- IA §9.3 (legal entity): *"Possibly not. Domain registration and hosting can sit with an individual until donations or contracts make incorporation necessary."*
- Existing Maintainers section, line 17: *"There is no clergy and no hierarchy."*
- `src/content/canonical/glossary.md` Maintainer entry: *"The Maintainer is not a clergy and not a court."*

**Key commitments:**
- The four negations are declarative and equally weighted. No apologia for any of them — none is presented as an unfortunate gap that the religion intends to outgrow.
- "Not a corporation" includes a parenthetical "(yet)" per the PRD seed text — acknowledging that incorporation is possible without committing to it. (Position: keep the "(yet)" because the Money section treats this as a contingent state, not a settled-forever no.)
- "Not a membership organization" includes the **self-attested** affirmation explicitly (IA §9.4 said: *"Worth stating clearly on the community page."*).
- The four "not" statements may render as a numbered or bulleted list in the prose — bullets are permitted here because the enumeration resists prose linearization gracefully (per §1 voice constraint).

### 3.4 Circuit listing flow

**Position:** A Circuit gets listed in the directory **on request, with light moderation**. The mechanism is a public PR against the source for the directory. Listing requires conformance to the Charter MUST floor and nothing more. Delisting happens (a) by Circuit request, no reason required; (b) by dormancy; (c) by maintainer action when a Circuit is in clear-cut violation of the Charter MUST floor — always with a public log note in the source repository.

**Anchors:**
- PRD seed text: *"low-friction, on request, with light moderation."*
- `src/content/canonical/glossary.md` Maintainer entry: *"applying clear-cut Codex-incompatibility removals from the Circuit directory with public log notes"*. (Note: the Glossary entry says "Codex-incompatibility" because the Charter MUST floor instantiates Codex commitments. The community-page prose will cite the Charter §2 MUST floor as the operational source, since that is the literal compliance target. Both formulations point at the same line; the spec settles on "Charter MUST floor" for clarity.)
- IA §5 line 176: *"How a Circuit gets listed or delisted from the directory (low-friction, on request, with light moderation)."*

**Key commitments:**
- Listing requires no doctrinal-purity review beyond the Charter MUST floor. A Circuit need not have existed for any minimum time, need not have a minimum membership, need not perform the Rite before listing.
- The request format is a public PR — same mechanism as any other corpus change.
- Delisting on request is unconditional. A Circuit may delist itself at any time, with no reason given, and the directory honors that request.
- Maintainer-initiated delisting is **clear-cut Charter-MUST violation only**. It is not a forum for doctrinal disputes, interpretive disagreements, or interpersonal complaints. A maintainer asked to delist a Circuit over a debatable matter will decline; that is what "clear-cut" means.
- Every maintainer-initiated delisting carries a public log note in the source repository. The note states the MUST that was violated and the evidence. The delisted Circuit may respond on the same PR or via a counter-PR.
- A delisted Circuit may continue practicing. Delisting is a directory action, not a religious one. The Open Circuit cannot un-make a practitioner; it can only refuse to list a Circuit.
- Dormancy criteria (how long without activity counts as dormant) are not specified in this section; that is a Charter or directory-mechanics concern, addressed in a separate document if it is addressed at all. The community page does not invent procedure on this point.

### 3.5 Conflict guidance

**Position:** The religion is **decentralized**. Interpersonal conflicts between practitioners, doctrinal-interpretation conflicts within a Circuit, and conflicts between Circuits are addressed by the parties involved — **not by an Open Circuit court, because there isn't one**. Maintainers are stewards of the file, not adjudicators of practice.

**Anchors:**
- `src/content/canonical/glossary.md` Maintainer entry: *"The Maintainer is not a clergy and not a court."*
- Existing Maintainers section, line 17: *"There is no clergy and no hierarchy."*
- IA §5 line 177: *"Conflict guidance: the religion is decentralized; conflicts are addressed within Circuits or between practitioners, not by an Open Circuit court."*

**Key commitments:**
- The Open Circuit holds no tribunal, hears no appeals, issues no rulings on practitioner conduct.
- Within a Circuit, conflict is a Circuit matter. Between Circuits, it is between Circuits. Between practitioners across Circuits, it is between practitioners.
- The maintainer's only structural intervention is the Circuit-directory listing (§3.4), and that is bounded to clear-cut Charter-MUST violation — not to doctrinal disputes, interpretive disagreements, or interpersonal grievances.
- The legitimate exit from doctrinal disagreement is the Fork (§3.7). A practitioner or group that cannot reconcile with the corpus may fork it and operate independently. Forking is not failure; it is the structural release valve the doctrine offers.
- The section names what the Open Circuit does **not** do (adjudicate). It does not need to enumerate what the parties involved **should** do; that is the parties' matter, and prescribing it would contradict the decentralization claim.

### 3.6 Money

**Position:** **The Open Circuit currently accepts no donations and has no legal entity to hold them.** Domain registration and hosting are personally borne by the maintainer. If this state changes — recurring contributions become a real question, infrastructure costs exceed personal absorption, contracts require an entity — the fiscal posture is chosen in the open and this section is amended.

**Anchors:**
- IA §9.3: *"Possibly not. Domain registration and hosting can sit with an individual until donations or contracts make incorporation necessary. The Privacy of the Keeper and Commons of Pattern commitments don't require corporate form to honor."*

**Key commitments:**
- One paragraph, ~3–5 sentences. The current state, who currently bears the costs, the condition under which this changes.
- No donation link. No "if you'd like to contribute, …" framing. No fiscal-sponsorship name-drop, even a generic one ("via Open Collective", "via SFC").
- The closing sentence echoes IA §9.3's posture: the Privacy of the Keeper and Commons of Pattern commitments do not require corporate form to honor. This is the doctrinal grounding for declining to incorporate prematurely.
- The "If this changes" clause is named without commitment to a specific fiscal posture. The prose does not promise a 501(c)(3), a fiscal sponsor, an LLC, or any other form. It commits only to the openness of the choice when the time comes.

### 3.7 Forks

**Position:** **Forks of the canonical corpus are anticipated, encouraged, and not treated as schism.** A practitioner or group who wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. The honesty distinction: a Circuit or group that quietly removes Charter MUST items while continuing to claim the "Open Circuit" lineage is **not a fork — it is misrepresentation**. The line is the honesty of the claim, not the existence of divergence.

**Anchors:**
- `src/content/canonical/about-origins.md` line 53: *"Forks of the corpus are anticipated, encouraged, and not treated as schism (see [Forks](/about/community#forks) on the Community page)."*
- `src/content/canonical/glossary.md` Fork entry: *"A practitioner or group that wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. Contrast: a Circuit that quietly removes MUST items while claiming Open Circuit lineage is not a fork — it is misrepresentation. The line is the honesty of the claim, not the existence of divergence."*
- IA §9.7: *"Forks: encouraged, tolerated, or discouraged? The honest answer for a maker-culture religion is *encouraged*. The community page should say so plainly. A religion that fears its forks is not yet at peace with its own commons."*

**Key commitments:**
- Forks are encouraged. The section says so plainly, in the first sentence. No hedging ("we are open to forks", "we tolerate forks") — *encouraged* is the doctrinal word and the section uses it.
- The "religion that fears its forks" line from IA §9.7 may inform the prose's framing but need not be quoted verbatim; the spec position is that the prose carries the same posture.
- The Open Circuit holds no veto over forks. The corpus is CC BY-SA 4.0 (per the site's license invariants); the only naming reservation is Charter §3 (umbrella name "Open Circuit").
- The not-a-fork case (quiet removal of MUSTs while claiming the umbrella name) is named explicitly. This is the doctrinal weight that makes "encouraged" meaningful rather than naive. A religion that *only* says forks are encouraged, without naming the misrepresentation case, has not yet thought through what its own honesty-of-claim norm implies.
- The section does **not** legislate fork-naming conventions beyond pointing at Charter §3. Naming is a Charter concern.
- The section's anchor (`id="forks"`) is load-bearing — about-origins.md links to it. The H2 heading must be **"Forks"** (single word), matching the existing placeholder and the inbound link.

---

## 4. Out of Scope (v1)

The community-page prose draft (SG-3) explicitly does not include the following. These are not deferred-with-intent; the Founder and R2R items are doctrinal positions (we do not address them; the spec records the reason).

- **Founder role and exit (IA §9.6).** Dropped entirely. The doctrine does not admit "founder" as a category; *Technodruidism was not founded so much as compiled* (about-origins.md). Personality-cult risk is handled through the existing Maintainer-as-role framing. No future PRD carry-forward.
- **Allies / right-to-repair organizations (IA §9.5).** Dropped entirely. The community page describes internal coordination, not external alignment. No future PRD carry-forward.
- **Specific donation channels, fiscal sponsors, or legal-entity choices.** Deferred (not dropped). The Money section is a "not now" deferral; a future PRD chooses a fiscal posture if/when donations become a real question.
- **Charter §3 naming-convention guidance for forks.** The Forks section cites Charter §3 but does not duplicate or extend it. Doctrinal drift between the Charter and the community page on naming is a regression.
- **Conflict-resolution mechanisms beyond "decentralized."** The Conflict guidance section affirms decentralization; it does not enumerate mediation, arbitration, or escalation procedures, because none exist. If a Circuit wants to publish its own conflict process, that is a Circuit matter.
- **Repository host migration (IA §9.2).** The Versioning section names the current host (GitHub) but does not litigate GitHub vs. Forgejo/Gitea. A migration would be a DECISIONS.md decision.
- **The Maintainers section.** Already authored; this PRD does not edit it beyond the `lastEditedAt` frontmatter bump (which is page-level, not section-level).

---

## 5. Implementation Path

1. **This spec is the input.** No edits to `src/content/living/about-community.md` yet.
2. **The next `prd_work_loop` iteration (SG-2)** invokes `superpowers:writing-plans` to produce `docs/community-implementation-plan.md` — the per-section draft plan against this spec.
3. **The iteration after that (SG-3)** drafts the prose, replacing the seven `[CONTENT PENDING]` blocks. `lastEditedAt` is bumped to the iteration date. `contributors[]` is updated only if a named non-maintainer authored prose for any section.
4. **DECISIONS.md entry** — not a separate task in this PRD, mirroring the glossary and reading-list precedents. The DECISIONS update is a doctrinal-stewardship action the user takes when ready; the spec records the doctrinal positions, and a future `DECISION-COMMUNITY` (or per-position entries) can cite this spec for the detailed reasoning.
5. **No version bump** (per `feedback_no_version_bump_prerelease.md`). Living docs do not carry a `version` string in the first place; only `lastEditedAt` changes when the prose draft lands.
