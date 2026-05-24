# Community Page — Per-Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. **Project deviation:** the project's native execution pattern is `prd_work_loop` iterations (see `docs/prd/technodruid-community-content/PRD-20260527-community-content.md`); this plan structures the work as the ACT/VERIFY/UPDATE phases of a single `prd_work_loop` iteration — specifically SG-3. Subagents executing isolated tasks should treat each task as a sub-step of that iteration, not as standalone work.

**Goal:** Replace the seven `[CONTENT PENDING — …]` blocks in `src/content/living/about-community.md` with authored prose per `docs/community-doctrinal-positions.md`, bump `lastEditedAt`, and leave `contributors[]` as `[]` (maintainer-authored). Satisfies ISC-COMMUNITY-1.

**Architecture:** One `prd_work_loop` iteration (SG-3). The ACT phase performs eight atomic Edits on `src/content/living/about-community.md`: one `lastEditedAt` frontmatter bump plus seven per-section prose replacements. The VERIFY phase runs `pnpm verify` (check + build + tests) plus spot-checks that the rendered page exposes the `#forks` anchor (load-bearing — `about-origins.md` links to it) and that no `[CONTENT PENDING]` placeholders remain. The UPDATE phase flips the PRD checkbox for ISC-COMMUNITY-1 and appends a LOG entry. Single commit at the end, gated on explicit user approval per the user's CLAUDE.md commits-require-fresh-approval rule.

**Tech Stack:** Astro 5 content collections (`living`), `LivingDoc` layout, Markdown frontmatter validated by Zod schema in `src/content.config.ts`, Playwright + axe-core invariant tests in `tests/`.

**Spec source:** `docs/community-doctrinal-positions.md` (committed in iter 1 of the PRD). All prose derives from §3 (Per-Section Doctrinal Positions) of the spec, refined per the "Decisions resolved by this plan" section below.

---

## Decisions resolved by this plan

The spec committed positions but left exact wording and some cross-reference details to the plan stage. Resolved here:

**Decision 1. Charter MUST-floor section number is §1, not §2.**
The spec used "Charter §2 binding floor" speculatively. The actual Charter (`src/content/canonical/circuits-charter.md`) ordering is: §1 Minimum requirements, §2 Suggested practices, §3 Naming conventions, §4 Directory registration, §5 Holding to the doctrine. The MUST floor is **Charter §1 Minimum requirements**. All prose uses `[Charter §1](/circuits/charter#minimum-requirements)` for the binding floor.

**Decision 2. Cite Charter §4 for listing/delisting operational detail; do not restate timing on the community page.**
The Charter §4 (Directory registration) specifies the listing fields, the dormancy timing (18 months dormant + 6 months to delist), and the re-attestation mechanism in detail. The community page's §Circuit listing flow summarizes at the Skeptical-audience level and cites Charter §4 by deep anchor; it does **not** restate the 18+6-month timing, which would create doctrinal-drift risk if the Charter timing changes.

**Decision 3. Maintainer-initiated delisting follows the Charter §4 framing exactly.**
The spec said "clear-cut violation of the Charter MUST floor" for the maintainer's delisting authority. The Charter §4 actual condition is: *"clear-cut cases of incompatibility with the Codex's core ethical commitments — or with §3's naming rules, where a Circuit refuses to disambiguate after being asked"*. The community-page prose uses the Charter's framing — "Codex's core ethical commitments, or refusal to disambiguate under Charter §3 naming rules" — to prevent doctrinal drift.

**Decision 4. Charter §3 has three naming MUSTs, not one.**
The spec §3.7 implied that the umbrella-name reservation was the only Charter naming MUST. Charter §3 in fact has three: (1) umbrella-name reservation, (2) anti-impersonation, (3) anti-mimicry. The Forks prose links to Charter §3 for the full set and acknowledges Charter §3 binds Circuits in this directory rather than forks running their own — but the substantive point (a fork can name itself anything except in ways that misrepresent its relationship to the Open Circuit) is preserved.

**Decision 5. "Maintainer stewardship" is the Charter's term — use it on the community page.**
Charter §4 names the maintainer's delisting authority as *"stewardship of the file."* The community-page prose adopts that exact framing rather than "enforcement" or "action," to keep the two documents lexically aligned.

**Decision 6. In-page anchors use Markdown links to section IDs Astro will generate.**
The Conflict guidance section cites `[Circuit listing flow](#circuit-listing-flow)` and `[fork](#forks)` as in-page hyperlinks. The expected IDs are `circuit-listing-flow` and `forks`, derived from the H2 headings by Astro's GitHub-slugger. Step 9.3 of the VERIFY task confirms these IDs render correctly.

**Decision 7. Section headings stay exactly as the placeholder file already declares them.**
The seven H2 headings in `about-community.md` are: `Change process`, `Versioning`, `What the Open Circuit is not`, `Circuit listing flow`, `Conflict guidance`, `Money`, `Forks`. The plan does not rename any heading. (`Conflict guidance` matches the existing heading; the PRD's bracketed seed text used "Conflict handling" but the file uses "Conflict guidance" and IA §5 also says "Conflict guidance" — no rename.)

**Decision 8. `contributors[]` stays `[]`.**
The maintainer is drafting the prose. Per spec §1 voice constraints and ISC-COMMUNITY-1's text ("`contributors[]` updated if any non-maintainer authored"), the array stays empty. The plan does not add anyone.

If you want to revert any of these to the spec's exact draft phrasing, raise it during plan review — they are plan-level discretion built on Charter-as-canonical-authority, not load-bearing community-page doctrine.

---

## Pre-execution constraints (apply to every task)

- **`lastEditedAt`:** updated to the SG-3 commit date (placeholder `<TODAY>` below — substitute the actual SG-3 iteration date).
- **`contributors`:** stays `[]` (see Decision 8).
- **`title`, `description`, `sourcePath` frontmatter:** unchanged.
- **Maintainers section (lines 9–28 of the scaffold):** unchanged. The plan touches only the seven `[CONTENT PENDING — …]` blocks and the `lastEditedAt` frontmatter line.
- **Voice register:** matches the Maintainers section already on the page — expository prose, 2–6 sentences per paragraph, declarative present tense, no RFC 2119 binding language. Per spec §1.
- **Cross-references use deep section anchors** to canonical docs (e.g., `/circuits/charter#minimum-requirements`) per `feedback_deep_anchor_cross_refs.md`. In-page hyperlinks use `#section-slug` form.
- **No "founder" terminology** anywhere in the prose. Per spec §1 and §4.
- **Invariants in scope for SG-3:** INV-LIV-1 (lastEditedAt + contributors render), INV-LIV-2 (Edit link), INV-A11Y-1 (axe), INV-A11Y-3 (heading hierarchy — page structure preserved: one H1 from frontmatter `title`, all section H2s already present), INV-NAV-2 (no broken internal links — new cross-refs use existing anchors), INV-BUILD-1/2/3 (build + check + sitemap), INT-PROC-1 (no build/check/test failures).

---

## File Structure

Single file modified. No tests added — verification reuses existing `tests/build.spec.ts`, `tests/invariants.spec.ts`, `tests/a11y-full.spec.ts`.

| Path | Action | Lines touched (approx.) |
|---|---|---|
| `src/content/living/about-community.md` | Modify | 1 frontmatter line + 7 placeholder blocks (lines 30, 34, 38, 42, 46, 50, 54 of the current scaffold) |

---

## Task 1: Bump frontmatter `lastEditedAt`

**Files:**
- Modify: `src/content/living/about-community.md` (line 4 of the frontmatter)

- [ ] **Step 1.1: Update `lastEditedAt`**

Use the `Edit` tool:

- `old_string`: `lastEditedAt: 2026-05-21`
- `new_string`: `lastEditedAt: <TODAY>` (substitute the actual SG-3 iteration date, e.g., `2026-05-28`)

- [ ] **Step 1.2: Verify schema validates**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across N files`. If `lastEditedAt` is malformed, Astro reports a content-collection schema violation.

---

## Task 2: Replace §Change process

**Files:**
- Modify: `src/content/living/about-community.md` (line 30 of current scaffold)

- [ ] **Step 2.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — public proposals on the source repository, discussion in the open, maintainers merge or don't.]
  ```
- `new_string`:
  ```
  Changes to the canonical corpus happen by **public pull request** against the [source repository](https://github.com/technodruid-open-circuit/technodruid). No membership, attestation, or sponsorship is required to propose a change — anyone may open a PR.

  Discussion happens on the pull request itself, or on a linked issue. The commit history and the PR thread are the authoritative record. Mailing lists, chat rooms, and side channels may exist around the practice, but they do not amend the corpus; if a conversation leads somewhere doctrinally, it returns to the repository as a PR.

  Maintainers merge or decline. Declining is a normal outcome and need not be argued at length beyond what the PR thread already records.
  ```

Notes:
- Matches spec §3.1 key commitments: anyone may open a PR; discussion in the open; maintainers merge or decline; declining is a normal outcome; repo is the canonical site of change.
- The "side channels … do not amend the corpus" sentence is the operational expression of the Privacy of the Keeper / transparency posture noted in spec §3.1.

---

## Task 3: Replace §Versioning

**Files:**
- Modify: `src/content/living/about-community.md` (line 34 of current scaffold)

- [ ] **Step 3.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — how the canonical documents are versioned and where the history lives.]
  ```
- `new_string`:
  ```
  Every canonical document carries a **version**, an **amendment date**, and a **first-published date** in its frontmatter, and each rendered canonical page exposes a link to its source file and to its revision history. The repository's commit log is the version history — every change is dated, attributed, and traceable to the pull request that produced it. There is no separate ledger.

  Living documents — including this page — carry a `lastEditedAt` and a contributor list, but no version number. They are versioned by the same commit history without numbered releases; the diff is the version, the timestamp is the date, the contributor list is the attribution.

  The repository currently lives on [GitHub](https://github.com/technodruid-open-circuit/technodruid). The choice of host is the kind of question that can be revisited; a future move would be transparent and recorded like every other change to the corpus.
  ```

Notes:
- Matches spec §3.2 key commitments: repo is the version history; canonical docs have version/amendedAt/firstPublishedAt + source + revision-history links (INV-CAN-1/2); living docs have lastEditedAt + contributors but no version string; GitHub is the current host (IA §9.2 unlitigated).
- Does NOT enumerate current version numbers (per `feedback_no_version_bump_prerelease.md` and spec §3.2 last bullet — readers see versions on canonical pages directly).

---

## Task 4: Replace §What the Open Circuit is not

**Files:**
- Modify: `src/content/living/about-community.md` (line 38 of current scaffold)

- [ ] **Step 4.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — not a church, not a corporation (yet), not a membership organization, not a hierarchy. A loose collective of practitioners and a coordination space.]
  ```
- `new_string`:
  ```
  Four things the Open Circuit is not:

  - **Not a church.** No clergy, no liturgical authority above the practitioner, no sacraments restricted by ordination. The Rite is performed by Circuits, not by officiants.
  - **Not a corporation** (yet). No legal entity currently holds the corpus, the domain, or any funds. The Money section below addresses why this is acceptable. If incorporation becomes necessary, that choice is made and announced in the open.
  - **Not a membership organization.** There is no central register of practitioners. Practice is self-attested; Circuits may keep their own internal lists if they choose, and the Open Circuit maintains none.
  - **Not a hierarchy.** Maintainers steward the file; they do not adjudicate practice. Circuits are not subordinate to maintainers; they conform to the [Charter §1](/circuits/charter#minimum-requirements) minimum requirements or they don't, and the maintainer's only structural intervention is directory stewardship (described below).

  What it *is* is a loose collective of practitioners and a coordination space.
  ```

Notes:
- Matches spec §3.3: four declarative negations + affirmative complement. Bullets are permitted here per spec §1 voice constraint ("bullets reserved for enumerations that resist linearization").
- The "(yet)" on "Not a corporation" is preserved per spec §3.3 commitment.
- "**Not a membership organization** — Practice is self-attested" expresses IA §9.4 verbatim posture ("Worth stating clearly on the community page").
- "Charter §1 minimum requirements" uses the corrected section number per Decision 1.
- "directory stewardship" uses the Charter §4 term per Decision 5.

---

## Task 5: Replace §Circuit listing flow

**Files:**
- Modify: `src/content/living/about-community.md` (line 42 of current scaffold)

- [ ] **Step 5.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — how a Circuit gets listed or delisted from the directory; low-friction, on request, with light moderation.]
  ```
- `new_string`:
  ```
  A Circuit gets listed in the directory **on request**. The mechanism is a public pull request against the directory source in the same repository that holds the canonical corpus. The fields are self-attested per [Charter §4](/circuits/charter#directory-registration) — name (required), location, contact, callings, cadence, and local site (all optional). Listing requires conformance to the [Charter §1](/circuits/charter#minimum-requirements) minimum requirements and nothing more.

  A Circuit may delist itself at any time, with no reason given. [Charter §4](/circuits/charter#directory-registration) also defines a dormancy path: an entry that has not been re-attested for the period named there moves to *dormant*, and then, after a further period, to delisted. Both states are recoverable by re-attestation, which is a single touch of the entry in the source repository.

  Maintainers may remove a Circuit from the directory only in clear-cut cases of incompatibility with the Codex's core ethical commitments, or refusal to disambiguate under the [Charter §3](/circuits/charter#naming-conventions) naming rules. Every such removal carries a public log note in the directory's change history. This is **stewardship of the file** — the Charter's term — not adjudication of practice.

  A delisted Circuit may continue practicing. Delisting is a directory action, not a religious one — the Open Circuit cannot un-make a practitioner, only refuse to list a gathering.
  ```

Notes:
- Cites Charter §4 (deep-anchor `#directory-registration`) for the operational detail, per Decision 2; does not restate the 18+6-month dormancy timing.
- Maintainer-initiated removal condition follows Charter §4 framing exactly, per Decision 3.
- Uses "stewardship of the file" per Decision 5.

---

## Task 6: Replace §Conflict guidance

**Files:**
- Modify: `src/content/living/about-community.md` (line 46 of current scaffold)

- [ ] **Step 6.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — the religion is decentralized; conflicts are addressed within Circuits or between practitioners, not by an Open Circuit court.]
  ```
- `new_string`:
  ```
  The Open Circuit is **decentralized**. It holds no tribunal, hears no appeals, and issues no rulings on practitioner conduct. Maintainers are stewards of the file, not adjudicators of practice.

  Conflicts within a Circuit are a Circuit matter. Conflicts between Circuits are between Circuits. Conflicts between practitioners are between practitioners. The only structural intervention available to the maintainer is the Circuit-directory listing (see [Circuit listing flow](#circuit-listing-flow) above), and even that is bounded to clear-cut incompatibility with the Codex's core ethical commitments — not to doctrinal disputes or interpersonal grievances.

  The legitimate exit from doctrinal disagreement is the [fork](#forks). A practitioner or group that cannot reconcile with the corpus may fork it and operate independently. Forking is not failure; it is the release valve the doctrine offers.
  ```

Notes:
- Matches spec §3.5: no tribunal, no appeals, decentralized; legitimate exit is forking; spec deliberately does NOT enumerate what parties should do (would contradict decentralization).
- In-page anchors `#circuit-listing-flow` and `#forks` per Decision 6 — slugs derived from existing H2 headings.

---

## Task 7: Replace §Money

**Files:**
- Modify: `src/content/living/about-community.md` (line 50 of current scaffold)

- [ ] **Step 7.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — if and when donations are accepted, what they pay for, and what entity holds them.]
  ```
- `new_string`:
  ```
  The Open Circuit currently accepts no donations and has no legal entity to hold them. Domain registration and hosting are personally borne by the maintainer. If recurring contributions become a real question, or if infrastructure costs exceed personal absorption, or if contracts require an entity, the fiscal posture is chosen in the open and this section is amended. The Privacy of the Keeper and Commons of Pattern commitments do not require corporate form to honor; the practice waits until form is needed to choose form.
  ```

Notes:
- Single paragraph, 4 sentences. Matches spec §3.6 commitments: declarative current state, who bears costs, condition under which this changes, IA §9.3 closing posture echoed.
- No donation link, no "if you'd like to contribute" framing, no fiscal-sponsorship name-drop. Per spec §3.6.

---

## Task 8: Replace §Forks

**Files:**
- Modify: `src/content/living/about-community.md` (line 54 of current scaffold)

- [ ] **Step 8.1: Replace the placeholder**

Use the `Edit` tool:

- `old_string`:
  ```
  [CONTENT PENDING — anyone may fork the canonical corpus. Forks are not schism; they are how a living tradition adapts.]
  ```
- `new_string`:
  ```
  **Forks of the canonical corpus are encouraged.** A practitioner or group that wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. A religion that fears its forks is not yet at peace with its own commons.

  The Open Circuit holds no veto over forks. The corpus is published under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); anyone may copy it, modify it, and continue under the same terms. The Charter's naming reservations ([Charter §3](/circuits/charter#naming-conventions)) bind Circuits listed *in this directory*, not forks running their own — but the honesty norm prevails: a fork that calls itself "Open Circuit" is no longer a fork, it is a claim.

  The honesty line matters. A Circuit or group that quietly removes Charter minimum-requirements items while continuing to claim Open Circuit lineage is **not a fork — it is misrepresentation**. The line between a fork and a misrepresentation is the honesty of the claim, not the existence of divergence. A fork is honest about being a fork.
  ```

Notes:
- Matches spec §3.7: forks encouraged (first sentence, *encouraged* used verbatim); no veto; CC BY-SA license; Charter §3 naming reservation cited; misrepresentation case named explicitly; honesty-of-claim the operative line.
- The `## Forks` H2 heading is **load-bearing** — `about-origins.md` line 54 links `[Forks](/about/community#forks)`. The Astro slugger renders `## Forks` → `id="forks"`. Do not rename the heading. Step 9.5 of VERIFY confirms the anchor renders.
- Decision 4 distinction: Charter §3 has three naming MUSTs (umbrella reservation, anti-impersonation, anti-mimicry); the prose cites Charter §3 for the full set rather than naming only the umbrella reservation.

---

## Task 9: VERIFY (pre-flight evaluation for SG-3)

This task is the SG-3 iteration's VERIFY phase. It runs after Tasks 1–8 have been applied to the working tree.

**Pre-flight checklist for SG-3** (the work-loop's DECIDE phase builds this; enumerated here for the plan executor):

- INV-LIV-1 — `lastEditedAt` + contributors render on the rendered page
- INV-LIV-2 — Edit link renders on the rendered page (verified by `tests/build.spec.ts` LivingDoc enforcer)
- INV-A11Y-1 — axe-core returns 0 serious/critical violations on /about/community
- INV-A11Y-2 — `<title>` is unique and descriptive (page structure unchanged; title comes from frontmatter)
- INV-A11Y-3 — One H1, no skipped heading levels (page structure preserved: H1 from frontmatter, all H2 section headings already present in scaffold)
- INV-A11Y-4 — Print stylesheet present (unchanged by this iteration)
- INV-BUILD-1 — `pnpm build` exits 0, no warnings beyond baseline
- INV-BUILD-2 — `pnpm astro check` reports 0/0/0
- INV-BUILD-3 — `dist/sitemap-index.xml` exists and references /about/community
- INV-NAV-2 — No broken internal links (new outgoing links: github.com/technodruid-open-circuit/technodruid, /circuits/charter#minimum-requirements, /circuits/charter#directory-registration, /circuits/charter#naming-conventions, creativecommons.org CC BY-SA link, in-page #circuit-listing-flow, in-page #forks)
- INV-NAV-3 — Footer present and consistent (unchanged by this iteration)
- INT-PROC-1 — No build/check/test failures
- ISC-COMMUNITY-1 — All seven `[CONTENT PENDING — …]` blocks replaced; `lastEditedAt` bumped; `contributors[]` updated only if non-maintainer authored (stays `[]` per Decision 8)

- [ ] **Step 9.1: Run the full verify chain**

Run: `pnpm verify`
Expected: `pnpm astro check` 0/0/0; `pnpm build` exits 0 with no warnings beyond baseline (Node `DEP0205` deprecation from a transitive dep is the known baseline noise); `pnpm test:ci` all tests pass.

If any test fails: examine output, fix the underlying issue, re-run. Do not skip to commit on FAIL.

- [ ] **Step 9.2: Confirm no `[CONTENT PENDING]` placeholders remain**

Run: `grep -c '\[CONTENT PENDING' src/content/living/about-community.md`
Expected: `0` matches.

- [ ] **Step 9.3: Spot-check anchor IDs render correctly**

Run: `grep -oE 'id="(change-process|versioning|what-the-open-circuit-is-not|circuit-listing-flow|conflict-guidance|money|forks)"' dist/about/community/index.html | sort -u`
Expected: all seven slugs appear exactly once. (Astro's GitHub-slugger renders these from the H2 headings.)

- [ ] **Step 9.4: Spot-check internal-link targets resolve**

Run: `grep -oE 'href="(/circuits/charter#(minimum-requirements|directory-registration|naming-conventions)|#circuit-listing-flow|#forks)"' dist/about/community/index.html`
Expected: all six href patterns present in the rendered page. Then confirm the four `/circuits/charter#…` targets exist in `dist/circuits/charter/index.html`:

Run: `grep -oE 'id="(minimum-requirements|directory-registration|naming-conventions)"' dist/circuits/charter/index.html | sort -u`
Expected: all three Charter section IDs present.

- [ ] **Step 9.5: Spot-check the `#forks` cross-page link target**

Per cross-doc invariant (spec §2.2): `about-origins.md` line 54 links `[Forks](/about/community#forks)`. After this iteration, that link must still resolve.

Run: `grep -oE 'href="/about/community#forks"' dist/about/origins/index.html`
Expected: at least one match. Then confirm the target ID exists in the community page:

Run: `grep -oE 'id="forks"' dist/about/community/index.html`
Expected: at least one match.

- [ ] **Step 9.6: Spot-check INV-LIV-1 rendered output**

Run: `grep -oE '(Last edited|Contributors)' dist/about/community/index.html | head`
Expected: matches for the LivingDoc layout's last-edited and contributors markers (per `src/layouts/LivingDoc.astro`).

- [ ] **Step 9.7: Record evidence in `state.json`**

Per the work-loop protocol, append each verify result to `state.json` as `{ "id": "<INV-or-ISC-id>", "status": "PASS", "evidence": "<exact citation>" }`. The protocol requires quoted evidence, not bare checkmarks.

---

## Task 10: UPDATE (PRD checkbox + LOG entry)

Per the work-loop protocol's UPDATE phase (executed after VERIFY passes):

- [ ] **Step 10.1: Flip the ISC-COMMUNITY-1 checkbox**

Use the `Edit` tool on `docs/prd/technodruid-community-content/PRD-20260527-community-content.md`:

- `old_string`: `- [ ] **ISC-COMMUNITY-1:**`
- `new_string`: `- [x] **ISC-COMMUNITY-1:**`

- [ ] **Step 10.2: Append the SG-3 LOG entry**

Read the PRD's `## LOG` section to find the last entry (iter 2's final line). Use the `Edit` tool with that last line as `old_string`, placing the new iter-3 entry **after** it in `new_string`. Format per the work-loop protocol's PRD LOG Entry Format template.

- [ ] **Step 10.3: Update PRD frontmatter**

Set `iteration: 3`, `last_phase: UPDATE`, `updated: <TODAY>`, rewrite `verification_summary` to reflect the iter-3 results, clear `failing_criteria: []`, set `status: COMPLETE`.

- [ ] **Step 10.4: Update state.json**

Mark SG-3 `status: "complete"`. Mark ISC-COMMUNITY-1 `status: "satisfied"` in the requirements registry. Increment `iteration` to 3. Clear `current_phase`, `current_action`, `pre_flight_checklist`, `start_commit`, `verify_results`.

---

## Task 11: Commit (gated on user approval)

- [ ] **Step 11.1: Show the staged diff and request approval**

The user's global rule (in `~/.claude/CLAUDE.md`): commits require fresh explicit approval per session/task. Do NOT commit until the user says so.

Run: `git status` and `git diff` to surface the changes; offer the proposed commit message.

- [ ] **Step 11.2: Stage and commit (on approval)**

Recommended commit message (matching the iter-3 style used by reading-list and glossary PRDs):

```
community iter 3: per-section prose
```

Files to stage:
- `src/content/living/about-community.md`
- `docs/prd/technodruid-community-content/PRD-20260527-community-content.md`

`state.json` is gitignored (`.gitignore` rule `docs/prd/**/state.json`) and will not be picked up by `git add`.

- [ ] **Step 11.3: Move the PRD directory to `done/`**

After the commit lands and the PRD shows `status: COMPLETE`, propose moving the PRD directory:

`git mv docs/prd/technodruid-community-content docs/prd/done/technodruid-community-content`

Match the convention used for the recently archived PRDs (glossary, reading-list, betterlogo). This is a separate commit, again gated on user approval.

---

## Self-Review

**1. Spec coverage.** Each of the spec's seven per-section positions has a task that implements it:

- Spec §3.1 (Change process) → Task 2
- Spec §3.2 (Versioning) → Task 3
- Spec §3.3 (What the Open Circuit is not) → Task 4
- Spec §3.4 (Circuit listing flow) → Task 5
- Spec §3.5 (Conflict guidance) → Task 6
- Spec §3.6 (Money) → Task 7
- Spec §3.7 (Forks) → Task 8
- Spec §5 implementation-path step 3 (`lastEditedAt` bump) → Task 1
- Spec §5 implementation-path step 3 (`contributors[]` stays `[]` for maintainer-authored) → Decision 8 + Pre-execution constraints
- Spec §2.2 cross-doc invariant (`#forks` anchor load-bearing) → Step 9.5
- Spec §1 voice constraints (expository, no founder, no RFC 2119 binding) → Pre-execution constraints + verified by reading the prose drafts
- Spec §4 Out-of-Scope (founder, R2R, money beyond "not now", no new sections) → Honored by writing exactly the seven sections enumerated; nothing added

No gaps identified.

**2. Placeholder scan.** No `TBD`, `TODO`, `implement later`, or vague handwaves. The only intentional placeholder is `<TODAY>` for the SG-3 commit date in Task 1 and Task 10 — the executor substitutes it at iteration time. This pattern matches the reading-list and glossary plans.

**3. Type consistency.** All seven section headings in Tasks 2–8 match the existing H2 headings exactly (no rename — Decision 7). All four Charter deep anchors (`#minimum-requirements`, `#directory-registration`, `#naming-conventions`, plus the unused `#suggested-practices` not cited) match the Charter file's actual H2 headings (verified during plan-writing). The `#forks` and `#circuit-listing-flow` in-page anchors match Astro's expected slug output from the H2 headings used in this same file.

**4. Decision consistency.** The eight "Decisions resolved by this plan" are applied uniformly:
- Decision 1 (Charter §1 not §2) applied in Tasks 4 and 5.
- Decision 2 (cite Charter §4, don't restate timing) applied in Task 5.
- Decision 3 (Charter §4 framing for maintainer delisting) applied in Tasks 5 and 6.
- Decision 4 (Charter §3 has three naming MUSTs) applied in Task 8.
- Decision 5 (Charter's "stewardship" term) applied in Tasks 4, 5, 6.
- Decision 6 (in-page anchor slugs from H2 headings) applied in Task 6 and verified in Step 9.3.
- Decision 7 (no heading renames) applied across Tasks 2–8 (prose replaces only the `[CONTENT PENDING — …]` line, leaves the H2 heading untouched).
- Decision 8 (`contributors[]` stays `[]`) applied in Pre-execution constraints; Task 1 does not touch the contributors field.

No issues found.

---

## Execution handoff

This plan is consumed by **SG-3 of the PRD work loop**, not by a standalone subagent or inline-executing-plans session. The work loop's next `/prd_work_loop` invocation will:

1. Read `state.json`, find SG-3 pending, advance to OBSERVE → ORIENT → DECIDE.
2. The DECIDE pre-flight checklist matches the items listed in Task 9 (above).
3. ACT executes Tasks 1–8 of this plan, producing the modified `src/content/living/about-community.md`.
4. VERIFY runs Task 9's steps (`pnpm verify` plus the spot-checks).
5. UPDATE runs Task 10's steps (flip checkbox, append LOG, update frontmatter, update state.json).
6. The user is then asked for commit approval per Task 11.

If the work-loop iteration stalls (`stall_count` reaches 3), the protocol stops and reports the failure to the user. Otherwise, this is a single iteration: ACT + VERIFY + UPDATE in one `/prd_work_loop` invocation.
