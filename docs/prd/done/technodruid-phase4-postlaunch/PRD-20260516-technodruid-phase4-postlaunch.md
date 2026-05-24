---
prd_id: PRD-20260516-technodruid-phase4-postlaunch
title: Technodruid.org Phase 4 — Post-launch revisits (Plausible, Repo, EditPageLink, ActivityPub)
phase: 4
status: COMPLETE
iteration: 2
current_phase: null
last_phase: UPDATE
created: 2026-05-18
updated: 2026-05-27
source_spec: docs/information-architecture.md
invariant_doc: docs/invariant_requirements.md
shared_context: docs/prd/technodruid-phase0-foundation/PRD-20260516-technodruid-phase0-foundation.md
predecessor_prd: docs/prd/technodruid-phase3-6month/PRD-20260516-technodruid-phase3-6month.md
verification_summary: "All 4 Phase-4 ISCs satisfied across 2 iterations. All 27 invariants PASS — including INV-A11Y-1, which Phase 3's DECISION-INV-A11Y-TIMEOUT had deferred. 51/51 Playwright tests pass in 22.8s; pnpm astro check 0/0/0."
failing_criteria: []
unblocked_by: "Site has been live for some period; doctrine slips locked during MVP/Phase-2 need resolution before they harden"
split_history: "2026-05-18: extracted from PRD-20260516-technodruid-site.md per user instruction. Phase 4 Key Files + ISCs scoped here; shared context lives in the Phase 0 PRD."
---

# Technodruid.org — Phase 4 PRD (Post-launch revisits)

> **Status: COMPLETE (2026-05-27).** Phase 4 resolved the deferred decisions that were doctrinally-slippy at MVP launch. All four ISCs satisfied; all 27 invariants pass mechanically. Shared context lives in the Phase 0 PRD at `docs/prd/technodruid-phase0-foundation/PRD-20260516-technodruid-phase0-foundation.md`.

## Scope (Phase 4 only)

Resolve `DECISION-PLAUSIBLE` (self-host or remove), `DECISION-REPO` (GitHub → Forgejo evaluation), wire `EditPageLink` on every living page once the repo URL is final, and add an ActivityPub feasibility entry to `DECISIONS.md` (per IA §7).

DECISION: We will still continue to use hosted Plausible for analytics. Their company aligns with the ethos of the project.

DECISION: We will continue to use github for discoverability. Since All code and content are public, github's surveillance is not a concern.

---

## Key Files

| Path | Action | Tier | Primary ISCs |
|---|---|---|---|
| Self-hosted Plausible OR remove analytics entirely | Decision + change | Standard | ISC-P4-PLAUSIBLE-1 |
| Forgejo evaluation + possibly `src/consts.ts` repo URL change | Decision + change | Standard | ISC-P4-REPO-1 |
| `src/components/EditPageLink.astro` wired into every Living page | Standard | ISC-P4-EDIT-1 |
| ActivityPub feasibility note in `DECISIONS.md` | Trivial | ISC-P4-AP-1 |

---

## Phase 4 — Immutable Success Criteria

- [x] ISC-P4-PLAUSIBLE-1: `DECISION-PLAUSIBLE` resolved: either self-hosted Plausible instance is live and `Plausible.astro` points there, OR Plausible is removed entirely. `DECISIONS.md` updated with the resolution.
- [x] ISC-P4-REPO-1: `DECISION-REPO` resolved: either Forgejo migration complete and `SOURCE_REPO_URL` updated everywhere it appears, OR explicit decision to stay on GitHub documented in `DECISIONS.md`.
- [x] ISC-P4-EDIT-1: Every living page renders an `EditPageLink` that resolves to a real, openable edit URL on the canonical repo.
- [x] ISC-P4-AP-1: `DECISIONS.md` contains an entry on ActivityPub feasibility (per IA §7) — either an adoption plan or a "deferred until X" decision.

---

## Phase-4-specific Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Plausible Cloud doctrine slip becomes permanent | Medium | This PRD's ISC-P4-PLAUSIBLE-1 forces resolution. `DECISIONS.md` `Revisit if:` clause set during MVP locked to "before any Phase 2 content ships publicly." If Phase 2 ships without this resolved, raise severity to High and treat as INV-DOC-2 violation. |
| Source repo URL changes (GitHub → Forgejo) breaking every Edit-page link | Medium | URL is sourced from a single constant in `src/consts.ts`. Phase 4 ISC-P4-REPO-1 is the only place this URL changes — guarantees one-point-of-change. |

---

## LOG

> Append-only iteration record. Entries added by the `prd_work_loop` skill's UPDATE phase. Do not edit past entries.

### Iteration 1 — 2026-05-26
- **Start commit:** `9115f6c`
- **Artifacts:** `docs/DECISIONS.md`, `docs/invariant_requirements.md` (tier: trivial)
- **Milestones addressed:** ISC-P4-PLAUSIBLE-1, ISC-P4-REPO-1, ISC-P4-AP-1
- **Invariants verified:** all PASS (INV-A11Y-1 carries Phase-3 PASS-CARRYOVER status; iteration touched no rendered surfaces so underlying state is unchanged)
- **Overall:** PASS
- **Reflection:** Three Phase-4 doctrine resolutions cleanly batched as one trivial-tier iteration. Two unexpected discoveries worth carrying forward: (1) The original PRD body line 29–31 already encoded the user's final decisions (keep Plausible, keep GitHub), so the iteration was less "deciding" and more "ratifying the PRD's already-stated decision in the canonical DECISIONS log." Future PRDs that pre-state decisions in their body should annotate them explicitly so the loop knows the upstream choice is settled. (2) The INV-DOC-2 wording amendment was a corollary of resolving DECISION-PLAUSIBLE; the invariant doc's Maintenance clause requires `Revisit if:` documentation when any INV-* changes, which DECISION-PLAUSIBLE-KEEP supplies. Tightly coupling an invariant amendment with the DECISION that mandates it kept the change atomic and reviewable. (3) An apparent FAIL on INV-LIV-2 for `/about/origins` resolved to PASS once layout was inspected — origins uses CanonicalDoc, not LivingDoc, so INV-LIV-2 has no jurisdiction. The lesson: when a sampled page seems to violate a layout-scoped invariant, check the layout before recording FAIL.
- **Remaining:** 1 milestone pending (ISC-P4-EDIT-1)

### Iteration 2 — 2026-05-27
- **Start commit:** `9115f6c`
- **Artifacts:** `tests/build.spec.ts` (tier: standard) — added one new `test.describe` block + an `import { SOURCE_REPO_URL } from "../src/consts"` line
- **Milestones addressed:** ISC-P4-EDIT-1
- **Invariants verified:** all PASS — including INV-A11Y-1, which Phase 3's DECISION-INV-A11Y-TIMEOUT had deferred. The per-route restructure in `tests/a11y-full.spec.ts` now produces clean per-route timings (1.7–3.8s each) with no aggregate-timeout failures across 23 routes. The DECISION's `Revisit if:` clause "SG-15 lands and INV-A11Y-1 still fails or remains flaky" is met with PASS evidence — the deferral can be retired.
- **Overall:** PASS (51/51 tests pass in 22.8s; `pnpm astro check` 0/0/0)
- **Reflection:** Three insights from this iteration. (1) **Test files are the canonical place to codify invariants.** I initially scoped SG-2 as a 9-file inspection across `src/pages/*`, but per the size check that was too large. Re-scoping to one test-file extension matched the existing `tests/build.spec.ts` and `tests/invariants.spec.ts` patterns and produced a single durable artifact rather than nine spot-checks. Lesson: when verification is the goal, the artifact to write is the verifier, not the surfaces being verified. (2) **A LivingDoc fingerprint string is more robust than a route allowlist.** `Contributors:` is rendered only by `src/layouts/LivingDoc.astro:29`, so any page containing it is LivingDoc-rendered by construction. A new Living page added in a future phase will be picked up by the test automatically without anyone remembering to register it. The alternative — maintaining a route allowlist — would have created a registration burden and a regression hazard. (3) **Discovered durable infrastructure I hadn't known about.** The repo already has `tests/invariants.spec.ts`, `tests/mvp.spec.ts`, `tests/phase2.spec.ts` — a mature invariant-test pattern that pre-dates Phase 4. Several invariants I evidenced in iter 1 via spot-checks (INV-DOC-1, INV-DOC-2, INV-DOC-3, INV-LIC-1, INV-NAV-1, INV-NAV-2, INV-A11Y-3, INV-BUILD-3) already have dedicated mechanical verifiers. For future iterations: read `tests/` before assuming an invariant needs ad-hoc evidence — it may already be codified.
- **Remaining:** 0 milestones pending — Phase 4 complete
