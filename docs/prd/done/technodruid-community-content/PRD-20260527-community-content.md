---
prd_id: PRD-20260527-community-content
title: "Technodruid.org — Community page content fill"
status: COMPLETE
iteration: 3
current_phase: null
last_phase: UPDATE
created: 2026-05-27
updated: 2026-05-28
source_spec: docs/information-architecture.md
invariant_doc: docs/invariant_requirements.md
predecessor_carryover: "Phase 3 verification_summary line: 'about-community.md [CONTENT PENDING] sections' — rolled past Phase 4 without resolution. RESOLVED in iter 3."
verification_summary: "Iter 3: Community-page prose draft landed at src/content/living/about-community.md (8 atomic Edits: lastEditedAt bump + 7 [CONTENT PENDING] block replacements per docs/community-implementation-plan.md). ISC-COMMUNITY-1 SATISFIED. All applicable invariants PASS (INV-LIV-1/2, INV-A11Y-1/2/3/4, INV-BUILD-1/2/3, INV-NAV-2/3, INT-PROC-1). pnpm verify 51/51 Playwright tests in 29.1s. Cross-doc invariant verified: about-origins.md href=/about/community#forks resolves to id=forks. PRD COMPLETE."
failing_criteria: []
---

# Technodruid.org — Community page content fill PRD

> **Status: ACTIVE (as of iter 0, 2026-05-27).** Scaffolded after the better-logo PRD closed and a site-completeness audit surfaced this as the biggest remaining user-facing content gap. The community page is a Phase 1 must-have (IA §8); it has been live since MVP with seven sections carrying `[CONTENT PENDING]` placeholders.

## Goal

Replace the seven `[CONTENT PENDING]` blocks in `src/content/living/about-community.md` with authored prose. The page is a Phase 1 must-have per IA §8 and a Living document, so the voice can iterate after publication, but the placeholders need to be retired — they signal "draft" on a page that should signal "this is what the Open Circuit is, today."

## Background — current state

`src/content/living/about-community.md` has authored intro + Maintainers section (lines 1–28), then seven `[CONTENT PENDING — ...]` blocks (lines 30, 34, 38, 42, 46, 50, 54) covering:

1. **Change process** — public proposals on the source repository, discussion in the open, maintainers merge or don't
2. **Versioning** — how the canonical documents are versioned and where the history lives
3. **What the Open Circuit is not** — not a church, not a corporation, not a membership organization, not a hierarchy
4. **Circuit listing flow** — how a Circuit gets listed or delisted from the directory; low-friction, on request, with light moderation
5. **Conflict handling** — religion is decentralized; conflicts addressed within Circuits or between practitioners, not by an Open Circuit court
6. **Donations** — if and when donations are accepted, what they pay for, and what entity holds them
7. **Forks** — anyone may fork the canonical corpus; forks are not schism; they are how a living tradition adapts

Each placeholder already contains a one-line summary of intended doctrine (the bracketed text after the `—`). The author's job is to expand each into prose consistent with the existing voice on the page and on canonical/Codex/Rite.

## User-input dependencies

Each section is a doctrinal authoring decision. The brainstorming step settles voice, scope, and per-section commitments before drafting.

| Input needed | Blocks ISCs |
|---|---|
| Voice register: same expository prose as the Maintainers section, or shorter declarative aphorisms? | ISC-COMMUNITY-1 |
| Donations: deferred ("not now"), explicit recipient (named individual / fiscal sponsor / nonprofit), or "decided when needed"? Touches future legal-entity questions; possibly split-out. | ISC-COMMUNITY-1 |
| Forks: re-state IA §9.7 doctrine ("encouraged") with specific guidance on naming conventions, or just affirm the principle? Overlap with Circuit charter naming guidance. | ISC-COMMUNITY-1 |
| Founder role/exit (IA §9.6): does this belong on /about/community, /about/origins, or its own page? | ISC-COMMUNITY-1 (if community), out-of-scope otherwise |
| Right-to-repair org relationship (IA §9.5): does this belong here at all, or on /about/origins? | Out-of-scope unless added to community |

## Out of scope (deferred)

- Authoring or amending any canonical document (Creed, Codex, Rite, Charter). Living-doc edits only.
- Public commitment to a specific founder-exit timeline beyond what the brainstorm settles. The IA §9.6 question may be deferred to its own PRD if the brainstorm reveals it deserves longer treatment.
- Adding new sections to `/about/community` beyond the seven `[CONTENT PENDING]` blocks. If a brainstorm-surfaced doctrine requires a new section, surface it and decide explicitly whether to add or defer.
- IA §9.5 (right-to-repair org relationship) — may belong on `/about/origins` instead; out of this PRD unless the brainstorm finds it has to live on community.

## Key Files

| Path | Action | Tier | Primary ISCs |
|---|---|---|---|
| `docs/community-doctrinal-positions.md` | New — doctrinal positions doc produced by `superpowers:brainstorming` (parallel to `docs/reading-list-doctrinal-positions.md` and `docs/glossary-doctrinal-positions.md`) | Trivial (docs/*.md) | precursor to ISC-COMMUNITY-1 |
| `docs/community-implementation-plan.md` | New — per-section draft plan produced by `superpowers:writing-plans` | Trivial (docs/*.md) | precursor to ISC-COMMUNITY-1 |
| `src/content/living/about-community.md` | Modify — replace 7 `[CONTENT PENDING]` blocks with authored prose; update `lastEditedAt`; add named non-maintainer contributors if applicable | Standard | ISC-COMMUNITY-1 |

## ISCs

- [x] **ISC-COMMUNITY-1:** Each of the seven `[CONTENT PENDING — ...]` blocks in `src/content/living/about-community.md` is replaced with authored prose. The page's `lastEditedAt` frontmatter is bumped to the iteration date. If any section is authored by a named non-maintainer, the `contributors[]` frontmatter is updated to include them.

## Invariants in jurisdiction

Standard 27-INV re-verification per work loop protocol. Items most likely to fail-loud if a regression slips: `INV-LIV-1` (the page is `LivingDoc`-rendered; lastEditedAt + contributors required), `INV-LIV-2` (Edit link), `INV-A11Y-1`, `INV-A11Y-3`, `INV-BUILD-1`, `INV-BUILD-2`, `INV-DOC-NAME` (vacuous unless TS is touched), `INT-PROC-1`.

## Recommended workflow

Same chained workflow that closed the reading list and glossary PRDs:

1. **`superpowers:brainstorming`** — settle voice + per-section doctrinal positions one section at a time via AskUserQuestion or browser companion. Land in `docs/community-doctrinal-positions.md`. Decide explicitly whether Donations is split off into its own PRD.
2. **`superpowers:writing-plans`** — produce the per-section draft plan in `docs/community-implementation-plan.md`.
3. **`prd_work_loop` execute** — modify `src/content/living/about-community.md`, run `pnpm verify`, UPDATE marks ISC-COMMUNITY-1 satisfied.

Each step is one `/prd_work_loop` invocation per the "one invocation = one iteration" rule.

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

### Iteration 1 — 2026-05-27
- **Start commit:** `27c68dc`
- **Artifacts:** `docs/community-doctrinal-positions.md` (tier: standard, ~203 lines)
- **Milestones addressed:** none directly (this iteration produces the spec input for ISC-COMMUNITY-1; the body draft lands in SG-3 per the PRD's recommended workflow)
- **Invariants verified:** INV-BUILD-1 PASS (`pnpm build` exit 0, 25 pages built in 3.18s, only stderr line is Node `DEP0205` deprecation from transitive dep — baseline, net warning delta 0); INV-BUILD-2 PASS (`pnpm astro check` 0/0/0 across 56 files); INT-PROC-1 PASS (build green, check green, docs-only artifact). Other 24 invariants vacuously not-applicable to a `docs/*.md` design document (no rendered HTML, no TS, no canonical-/living-doc frontmatter).
- **Overall:** PASS
- **Reflection:** Five clarifying questions surfaced two strong "drop entirely" decisions (founder topic; right-to-repair org relationships) — both grounded in existing canonical material rather than novel choices. about-origins.md already says "Technodruidism was not founded so much as compiled", so dropping founder-exit content was a crystallization of existing doctrine, not a deferral. The most useful spec-time discovery was terminology drift in §3.4 (Circuit listing flow): the Glossary's *Maintainer* entry says "Codex-incompatibility" for delisting authority while the operational source is the Charter §2 MUST floor. The spec settled on "Charter MUST floor" and called out the Glossary's alternate phrasing explicitly, so the iter-3 prose draft picks one without re-deciding mid-pass. The §3.7 (Forks) section was also surfaced as load-bearing — about-origins.md links `[Forks](/about/community#forks)` and the Glossary's *Fork* entry imports the same doctrine in shortened form, so the community page is the long-form canonical surface for content multiple other pages summarize; the spec pins the `#forks` anchor as a cross-doc invariant. Scope discipline showed up as a useful tool: §2.1 records four deliberate exclusions (Founder / R2R / Money beyond "not now" / new sections) as doctrinal positions rather than oversights, so a future maintainer reading the spec sees the negative space and understands it's intentional.
- **Remaining:** 1 milestone pending (ISC-COMMUNITY-1). Next subgoal: SG-2 — write `docs/community-implementation-plan.md` via the `superpowers:writing-plans` skill, then SG-3 — replace the 7 `[CONTENT PENDING]` blocks in `src/content/living/about-community.md` per the plan.

### Iteration 2 — 2026-05-28
- **Start commit:** `27c68dc`
- **Artifacts:** `docs/community-implementation-plan.md` (tier: standard, ~463 lines, 11 tasks, 18 step-level checkboxes, paste-ready prose for all seven sections + lastEditedAt bump)
- **Milestones addressed:** none directly (this iteration produces the per-section prose + executor steps for SG-3; ISC-COMMUNITY-1 satisfied by SG-3)
- **Invariants verified:** INV-BUILD-1 PASS (`pnpm build` exit 0, only stderr line is Node `DEP0205` deprecation from transitive dep — baseline, net warning delta 0 vs iter 1); INV-BUILD-2 PASS (`pnpm astro check` 0/0/0 across 56 files); INT-PROC-1 PASS (build green, check green, docs-only artifact). Other 24 invariants vacuously not-applicable to a `docs/*.md` plan document.
- **Overall:** PASS
- **Reflection:** The plan-writing pass caught two non-trivial spec→canonical drifts the iter-1 brainstorm missed. (1) **Charter MUST-floor section number.** The spec said "Charter §2 binding floor" speculatively; the actual Charter (`src/content/canonical/circuits-charter.md`) ordering is §1 Minimum requirements (MUST floor), §2 Suggested practices, §3 Naming conventions, §4 Directory registration. The MUST floor is §1, not §2. (2) **Maintainer-delisting authority is broader than "MUST-floor violation."** The Charter §4 actual condition is *"clear-cut cases of incompatibility with the Codex's core ethical commitments — or with §3's naming rules, where a Circuit refuses to disambiguate."* The spec's narrower "MUST-floor violation" framing would have understated the maintainer's delisting scope; the plan corrects to the Charter's actual condition. Both fixes belong to the plan layer — they preserve the spec's doctrinal commitments (decentralization, stewardship-not-court) while aligning the operational citations with the source-of-truth document. A third discovery: Charter §3 has *three* naming MUSTs (umbrella reservation, anti-impersonation, anti-mimicry), not one — so the Forks section links Charter §3 for the full set rather than implying only the umbrella reservation. A fourth: Charter §4 specifies dormancy timing (18 months + 6 months); the community page deliberately does NOT restate this, citing Charter §4 by deep anchor instead — "summarize and cite" as a doctrinal-drift-prevention pattern that should generalize across this corpus. The plan now has 8 "Decisions resolved by this plan" (vs the reading-list precedent's 5); the larger count reflects how much canonical material the community page must summarize rather than duplicate, not extra discretionary choices.
- **Remaining:** 1 milestone pending (ISC-COMMUNITY-1). Next subgoal: SG-3 — execute Tasks 1–10 of `docs/community-implementation-plan.md`: bump `lastEditedAt`, replace the seven `[CONTENT PENDING]` blocks with the paste-ready prose, run `pnpm verify`, flip the PRD checkbox, append the iter-3 LOG entry. Single commit at end, gated on user approval per Task 11.

### Iteration 3 — 2026-05-28
- **Start commit:** `27c68dc`
- **Artifacts:** `src/content/living/about-community.md` (tier: standard — Living-doc prose draft; 8 atomic Edits: 1 frontmatter `lastEditedAt` bump + 7 `[CONTENT PENDING]` block replacements per `docs/community-implementation-plan.md` Tasks 1–8).
- **Milestones addressed:** ISC-COMMUNITY-1 (PASS).
- **Invariants verified:** all PASS. **INV-LIV-1** (rendered HTML contains both "Last edited" and "Contributors" markers from LivingDoc layout); **INV-LIV-2** (Playwright `tests/build.spec.ts:156` LivingDoc EditPageLink enforcer, 124ms); **INV-A11Y-1** (Playwright `tests/a11y-full.spec.ts:43` route `/about/community/` passes WCAG 2.2 AA in 3.6s); **INV-A11Y-2** (`<title>` `"Community"` unchanged, unique); **INV-A11Y-3** (one h1 + no skipped levels across all dist HTML, tests 29+30); **INV-A11Y-4** (print stylesheet unchanged); **INV-BUILD-1** (`pnpm build` exit 0, 25 pages built in 4.40s, net warning delta 0 vs iter 2 — baseline Node `DEP0205` only); **INV-BUILD-2** (check 0/0/0 within `pnpm verify`); **INV-BUILD-3** (`dist/sitemap-index.xml` generated, build-spec test 27); **INV-NAV-2** (build-spec broken-link test 28 PASS in 1.3s; spot-check: 5 new outgoing internal href patterns render — three `/circuits/charter#…` deep anchors + two in-page anchors — and all three Charter target IDs exist in `dist/circuits/charter/index.html`); **INV-NAV-3** (MVP smoke test 40: `/about/community` 200 + h1 "Community" + nav + footer in 979ms); **INT-PROC-1** (`pnpm verify` exit 0: check + build + 51/51 Playwright tests in 29.1s). **Cross-doc invariant verified explicitly per spec §2.2:** `about-origins.md` `href="/about/community#forks"` resolves to the community page's `id="forks"` (both grep'd in `dist/`).
- **Overall:** PASS
- **PRD status:** 1 of 1 ISC-COMMUNITY-1 milestone satisfied. PRD ready to mark COMPLETE.
- **Reflection:** Three observations from a clean execution. (1) **The plan absorbed the doctrinal weight.** This iteration was mechanically straightforward — eight atomic Edits, run `pnpm verify`, flip the checkbox — precisely because iter 1 settled the positions and iter 2 caught the Charter §1-vs-§2 and Charter-§4-broader-condition drifts before they reached the prose. The brainstorm → plan → execute sequencing protects iter 3 from doctrinal decisions; the executor doesn't re-decide, only types. (2) **The cross-doc invariant (`about-origins.md → /about/community#forks`) was verified explicitly per spec §2.2.** Pinning it in the spec, carrying it into the plan's Step 9.5, and grep'ing both endpoints in `dist/` is the chain. The Playwright suite's `INV-NAV-2` broken-link check catches it automatically too — the build-spec test passed in 1.3s — but the explicit spot-check is the documentation that future maintainers see when they wonder why the `#forks` anchor is load-bearing. (3) **Net warning delta tracking continues to be useful baseline guard.** The Node `DEP0205` deprecation from a transitive dep is the same line on every build since iter 1; logging "net warning delta 0" rather than "no warnings" is honest about the baseline noise without false alarming on each iteration. This pattern should generalize when the toolchain inherits more transitive deprecations.
- **Remaining:** 0 milestones pending. PRD status → COMPLETE.
