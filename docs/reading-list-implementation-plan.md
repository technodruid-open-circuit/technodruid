# Reading List — Per-Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. **Project deviation:** the project's native execution pattern is `prd_work_loop` iterations (see `docs/prd/technodruid-library-reading/PRD-20260522-technodruid-library-reading.md`); this plan structures the work as the ACT/VERIFY/UPDATE phases of a single `prd_work_loop` iteration — specifically SG-3. Subagents executing isolated tasks should treat each task as a sub-step of that iteration, not as standalone work.

**Goal:** Replace the six `[PENDING]` year + annotation placeholders in `src/content/living/library-reading.md` with the canonized year (Position 2.2) and final-form annotation (Position 2.3), and add an explicit `<a id="…"></a>` anchor at the start of each bullet (Position 2.4), satisfying ISC-READING-1 in the PRD.

**Architecture:** One `prd_work_loop` iteration (SG-3). The ACT phase does seven atomic Edits on `src/content/living/library-reading.md`: one `lastEditedAt` frontmatter bump plus six per-entry replacements. The VERIFY phase runs `pnpm check && pnpm build && pnpm test:ci` plus spot-checks that the six anchors render in `dist/library/reading/index.html`. The UPDATE phase flips the PRD checkbox for ISC-READING-1 from `[ ]` to `[x]` and appends a LOG entry. Single commit at the end, gated on explicit user approval per the user's CLAUDE.md commits-require-fresh-approval rule.

**Tech Stack:** Astro 5 content collections (`living`), `LivingDoc` layout, Markdown frontmatter validated by Zod schema in `src/content.config.ts`, Playwright + axe-core invariant tests in `tests/`.

**Spec source:** `docs/reading-list-doctrinal-positions.md` (committed `e654943`). All annotations derive from the spec's §3 draft table, refined per the "Decisions resolved by this plan" section below.

---

## Decisions resolved by this plan

The spec deferred several small wording choices to the plan stage. Resolved here:

1. **Drop "(selected writings)" parenthetical for Stallman** and **drop "(selected works)" for Hyde and Franklin.** The spec's Position 2.1 canonized *specific* works (The Gift, The Real World of Technology); the "selected works" parenthetical implied a multi-work survey and is now factually wrong. For Stallman, the parenthetical was accurate (the book IS an anthology) but the annotation conveys it ("Collected essays…"); dropping it removes redundancy and brings all six entries to a uniform "title — Author. Year. Annotation." shape.
2. **Recast all annotations to subjectless form.** The spec §3 draft mixed two voices: 4 annotations started with the author's name ("Lewis Hyde's argument", "Tracy Kidder's reportage", "Ursula Franklin's Massey Lectures", "Richard Stallman's collected essays"); 2 were subjectless ("A philosopher-turned-motorcycle-mechanic's case", "A legal history"). The bullet already prints the author's name immediately before the annotation, so repeating creates double-mention ("Lewis Hyde. 1983. Lewis Hyde's argument…"). All six annotations are recast here to start subjectless.
3. **No "revised 1999 edition" note in the Franklin annotation.** The spec left this open. Adding "(revised 1999 ed.)" to a year-field doctrine that Position 2.2 declared *plain* would muddy the doctrine for a single edge case; the archive.org link's edition is what the reader sees. The Franklin annotation also originally said "Ursula Franklin's 1989 Massey Lectures…" — recast to "Massey Lectures…" since the year field already prints 1989 (don't print the year twice).
4. **Anchor placement at the very start of the bullet, before the bold title.** The spec §2.4 example showed this; codified here as the only valid form. `<a id="slug"></a>` is self-closing-equivalent and renders no visible character in the bullet text.
5. **Restructure The Gift entry's line break.** The scaffold uniquely had "Lewis Hyde" on the title line (because "(selected works)" continued to line 2). With the parenthetical dropped, the entry conforms to the dominant pattern: title (+ link) on line 1, "Author. Year. Annotation." soft-continued on line 2 with 2-space indent.

If you want to revert any of these to the spec's exact draft phrasing, raise it during plan review — they're plan-level discretion, not load-bearing doctrine.

---

## Pre-execution constraints (apply to every task)

- **Frontmatter `lastEditedAt`:** updated to the SG-3 commit date (placeholder `<TODAY>` below — substitute the actual SG-3 iteration date).
- **Frontmatter `contributors`:** stays `[]`. Per ISC-READING-1's text ("Contributors list updates if annotations are authored by a named person other than maintainer"), and per spec §2.1 + §4 step 4 — the maintainer is drafting these annotations, so the list stays empty.
- **`title`, `description`, `sourcePath` frontmatter:** unchanged.
- **Intro prose (lines 9–19 of the scaffold), "## How the list grows" section (lines 36–40 + footer):** unchanged. The plan touches the entries only.
- **Invariants in scope for SG-3:** INV-LIV-1 (lastEditedAt + contributors rendered), INV-LIV-2 (edit link), INV-A11Y-1 (axe), INV-A11Y-3 (heading hierarchy — page structure unchanged so this holds), INV-NAV-2 (no broken internal links — anchors are *targets*, not new outgoing links), INV-BUILD-1/2/3 (build + check + sitemap), INT-PROC-1 (no build/check/test failures).

---

## File Structure

Single file modified. Single file created (none). No tests added in this iteration — verification reuses existing `tests/build.spec.ts`, `tests/invariants.spec.ts`, `tests/a11y-full.spec.ts`.

| Path | Action | Lines touched (approx.) |
|---|---|---|
| `src/content/living/library-reading.md` | Modify | 1 frontmatter line + 11 entry lines (lines 23–33 of current scaffold) |

---

## Task 1: Bump frontmatter `lastEditedAt`

**Files:**
- Modify: `src/content/living/library-reading.md` (line 4 of the frontmatter)

- [ ] **Step 1.1: Update `lastEditedAt`**

Use the `Edit` tool:

- `old_string`: `lastEditedAt: 2026-05-25`
- `new_string`: `lastEditedAt: <TODAY>` (substitute the actual SG-3 iteration date, e.g., `2026-05-27`)

- [ ] **Step 1.2: Verify schema validates**

Run: `pnpm check`
Expected: `0 errors / 0 warnings / 0 hints across N files`. If `lastEditedAt` is malformed (e.g., not ISO-8601), Astro will report a content-collection schema violation.

---

## Task 2: Replace entry 1 — Shop Class as Soulcraft (2009)

**Files:**
- Modify: `src/content/living/library-reading.md` (lines 23–24 of current scaffold)

- [ ] **Step 2.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **[Shop Class as Soulcraft](https://archive.org/details/shop-class-as-soulcraft)** —
    Matthew B. Crawford. Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="shop-class-as-soulcraft"></a>**[Shop Class as Soulcraft](https://archive.org/details/shop-class-as-soulcraft)** —
    Matthew B. Crawford. 2009. A philosopher-turned-motorcycle-mechanic's case for the manual trades as morally and intellectually serious work.
  ```

---

## Task 3: Replace entry 2 — The Right to Repair (2022)

**Files:**
- Modify: `src/content/living/library-reading.md` (line 25 of current scaffold)

- [ ] **Step 3.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **The Right to Repair** — Aaron Perzanowski. Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="the-right-to-repair"></a>**The Right to Repair** — Aaron Perzanowski. 2022. A legal history of how manufacturers came to control post-sale ownership, and what right-to-repair movements are trying to reclaim.
  ```

---

## Task 4: Replace entry 3 — Free Software, Free Society (2002)

**Files:**
- Modify: `src/content/living/library-reading.md` (lines 26–27 of current scaffold)

- [ ] **Step 4.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **[Free Software, Free Society](https://archive.org/details/free-software-free-society-selected-essays-of-richard-m.-stallman-3rd-edition)**
    — Richard M. Stallman (selected writings). Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="free-software-free-society"></a>**[Free Software, Free Society](https://archive.org/details/free-software-free-society-selected-essays-of-richard-m.-stallman-3rd-edition)**
    — Richard M. Stallman. 2002. Collected essays on the four freedoms and the philosophy behind the GNU project.
  ```

Notes:
- The "(selected writings)" parenthetical is dropped per Decision 1 above.
- The annotation is recast to subjectless form per Decision 2; "Collected essays" carries the anthology nature that the dropped parenthetical previously signaled.

---

## Task 5: Replace entry 4 — The Soul of a New Machine (1981)

**Files:**
- Modify: `src/content/living/library-reading.md` (lines 28–29 of current scaffold)

- [ ] **Step 5.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **[The Soul of a New Machine](https://archive.org/details/soulofnewmachine0000kidd)** —
    Tracy Kidder. Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="the-soul-of-a-new-machine"></a>**[The Soul of a New Machine](https://archive.org/details/soulofnewmachine0000kidd)** —
    Tracy Kidder. 1981. Reportage on the small Data General team that built the Eagle minicomputer through eighteen-hour days and steady burnout.
  ```

Notes:
- The spec §3 said "Tracy Kidder's reportage…" — recast to "Reportage…" per Decision 2 (no author-name repetition, since "Tracy Kidder" is already printed on the same line).

---

## Task 6: Replace entry 5 — The Gift (1983)

**Files:**
- Modify: `src/content/living/library-reading.md` (lines 30–31 of current scaffold)

- [ ] **Step 6.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **[The Gift](https://archive.org/details/giftcreativityar0000hyde)** — Lewis Hyde
    (selected works). Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="the-gift"></a>**[The Gift](https://archive.org/details/giftcreativityar0000hyde)** —
    Lewis Hyde. 1983. An argument that art operates in a gift economy distinct from market exchange, and what is lost when commodity logic absorbs creative labor.
  ```

Notes:
- The scaffold uniquely had "Lewis Hyde" on the title line (because "(selected works)" continued to line 2). With the parenthetical dropped per Decision 1, the entry is restructured per Decision 5 to match the dominant pattern: title + link on line 1, "Author. Year. Annotation." soft-continued on line 2 with 2-space indent.
- The spec §3 said "Lewis Hyde's argument…" — recast to "An argument…" per Decision 2.

---

## Task 7: Replace entry 6 — The Real World of Technology (1989)

**Files:**
- Modify: `src/content/living/library-reading.md` (lines 32–33 of current scaffold)

- [ ] **Step 7.1: Replace the entry**

Use the `Edit` tool:

- `old_string`:
  ```
  - **[The Real World of Technology](https://archive.org/details/the-real-world-of-technology)**
    — Ursula M. Franklin (selected works). Year `[PENDING]`. Annotation `[PENDING]`.
  ```
- `new_string`:
  ```
  - <a id="the-real-world-of-technology"></a>**[The Real World of Technology](https://archive.org/details/the-real-world-of-technology)** —
    Ursula M. Franklin. 1989. Massey Lectures distinguishing "holistic" from "prescriptive" technologies and tracing how the latter reshape social relations.
  ```

Notes:
- The "(selected works)" parenthetical is dropped per Decision 1.
- The em-dash is moved to end of line 1 to match the dominant pattern (Shop Class, Soul of a New Machine).
- The spec §3 said "Ursula Franklin's 1989 Massey Lectures…" — recast to "Massey Lectures…" per Decision 3 (no year repetition; the year field already prints 1989).

---

## Task 8: VERIFY (pre-flight evaluation for SG-3)

This task is the SG-3 iteration's VERIFY phase. It runs after all 7 edit tasks above have been applied to the working tree.

**Pre-flight checklist for SG-3** (built by the work-loop's DECIDE phase, but enumerated here for the plan executor):

- INV-LIV-1 — lastEditedAt + contributors render on the rendered page
- INV-LIV-2 — Edit link renders on the rendered page (verified by `tests/build.spec.ts` LivingDoc enforcer)
- INV-A11Y-1 — axe-core returns 0 serious/critical violations on /library/reading
- INV-A11Y-3 — One H1, no skipped heading levels (page structure unchanged from scaffold; H1 from frontmatter `title`, H2 `## The list`, H2 `## How the list grows`)
- INV-BUILD-1 — `pnpm build` exits 0, no warnings
- INV-BUILD-2 — `pnpm check` reports 0/0/0
- INV-BUILD-3 — `dist/sitemap-index.xml` exists and references /library/reading
- INV-NAV-2 — No broken internal links (the new anchors are id-targets, not new outgoing hrefs; no existing pages link to these anchors yet — INV-NAV-2 is unaffected)
- INT-PROC-1 — No build/check/test failures
- ISC-READING-1 — All six entries have title, author, year, one-line annotation; contributors[] updated if non-maintainer authored

- [ ] **Step 8.1: Run the full verify chain**

Run: `pnpm verify`
Expected: `pnpm check` 0/0/0; `pnpm build` exits 0 with no warnings; `pnpm test:ci` all tests pass.

If any test fails, examine output, fix the underlying issue, re-run. Do not skip to commit on FAIL.

- [ ] **Step 8.2: Spot-check the rendered anchors**

Run: `grep -oE 'id="(shop-class-as-soulcraft|the-right-to-repair|free-software-free-society|the-soul-of-a-new-machine|the-gift|the-real-world-of-technology)"' dist/library/reading/index.html | sort -u`
Expected: all six slugs appear exactly once.

- [ ] **Step 8.3: Spot-check INV-LIV-1 rendered output**

Run: `grep -oE '(lastEditedAt|Contributors:|Last edited)' dist/library/reading/index.html | head`
Expected: at least one match for "Last edited" (or whatever exact string the LivingDoc layout renders) and "Contributors:" (the layout marker per `src/layouts/LivingDoc.astro:29`).

- [ ] **Step 8.4: Confirm no `[PENDING]` placeholders remain**

Run: `grep -c '\[PENDING\]' src/content/living/library-reading.md`
Expected: `0` matches.

- [ ] **Step 8.5: Record evidence in `state.json`**

Per the work-loop protocol, append each verify result to `state.json` as `{ "id": "<INV-or-ISC-id>", "status": "PASS", "evidence": "<exact citation>" }`. The protocol requires quoted evidence, not bare checkmarks.

---

## Task 9: UPDATE (PRD checkbox + LOG entry)

Per the work-loop protocol's UPDATE phase (executed after VERIFY passes):

- [ ] **Step 9.1: Flip the ISC-READING-1 checkbox**

Use the `Edit` tool on `docs/prd/technodruid-library-reading/PRD-20260522-technodruid-library-reading.md`:

- `old_string`: `- [ ] **ISC-READING-1:**`
- `new_string`: `- [x] **ISC-READING-1:**`

- [ ] **Step 9.2: Append the SG-3 LOG entry**

Read the PRD's `## LOG` section to find the last entry (iter 2's final line). Use `Edit` tool with that last line as `old_string`, placing the new iter-3 entry **after** it in `new_string`. Format per the work-loop protocol's PRD LOG Entry Format template.

- [ ] **Step 9.3: Update PRD frontmatter**

Set `iteration: 3`, `last_phase: UPDATE`, `updated: <TODAY>`, rewrite `verification_summary` to reflect the iter-3 results.

- [ ] **Step 9.4: Update state.json**

Mark SG-3 `status: "complete"`. Mark ISC-READING-1 `status: "satisfied"` in the requirements registry. Increment `iteration` to 3. Clear `current_phase`, `current_action`, `pre_flight_checklist`, `start_commit`, `verify_results`. Update `prd_status` to `"COMPLETE"` since ISC-READING-1 is the only milestone.

---

## Task 10: Commit (gated on user approval)

- [ ] **Step 10.1: Show the staged diff and request approval**

The user's global rule (in `~/.claude/CLAUDE.md`): commits require fresh explicit approval per session/task. Do NOT commit until the user says so.

Run: `git status` and `git diff` to surface the changes; offer the proposed commit message.

- [ ] **Step 10.2: Stage and commit (on approval)**

Recommended commit message (matching iter-1 style):

```
reading list iter 3: per-entry annotations
```

Files to stage: `src/content/living/library-reading.md`, `docs/prd/technodruid-library-reading/PRD-20260522-technodruid-library-reading.md`.

`state.json` is gitignored (`.gitignore:27`) and will not be picked up by `git add`.

- [ ] **Step 10.3: Move the PRD directory to `done/`**

After the commit lands and the PRD shows `status: COMPLETE`, propose moving the PRD directory:

`git mv docs/prd/technodruid-library-reading docs/prd/done/technodruid-library-reading`

Match the convention used for the Phase 4 PRD archive (commit `9ead883`). This is a separate commit, again gated on user approval.

---

## Self-Review

**1. Spec coverage:** Each of the spec's 4 doctrinal positions is implemented somewhere in the plan:
- Position 2.1 (Hyde = The Gift, Franklin = Real World of Technology) → Tasks 6 and 7.
- Position 2.2 (original publication year) → Year values in Tasks 2–7.
- Position 2.3 (neutral plot summary, recast subjectless per Decision 2) → Annotation values in Tasks 2–7.
- Position 2.4 (bullets with `<a id>` anchors, slugs as listed) → Anchor additions in Tasks 2–7.
- Spec §4 implementation path step 3 (`lastEditedAt` bump) → Task 1.
- Spec §4 implementation path step 4 (`contributors[]` stays empty for maintainer-authored) → Pre-execution constraints.
- Spec §5 Out-of-Scope (intro prose unchanged, "How the list grows" footer unchanged) → Pre-execution constraints.

No gaps identified.

**2. Placeholder scan:** No `TBD`, `TODO`, `implement later`, or vague handwaves. The only intentional placeholder is `<TODAY>` for the SG-3 commit date, which is by design — the executor substitutes it at iteration time.

**3. Type consistency:** All six slugs in Tasks 2–7 match the spec §2.4 list exactly. All six titles match the scaffold's exact titles (no capitalization drift). All six archive.org URLs are copied verbatim from the scaffold.

**4. Decision consistency:** The five "Decisions resolved by this plan" are applied uniformly across Tasks 2–7. Decision 1 (drop parentheticals) affects Tasks 4, 6, 7. Decision 2 (subjectless annotations) affects Tasks 4, 5, 6, 7 (Tasks 2 and 3 were already subjectless in the spec). Decision 3 (no Franklin revised-ed. note) affects Task 7. Decision 4 (anchor placement) is uniform across all six. Decision 5 (Gift restructure) affects Task 6 specifically.

No issues found.

---

## Execution handoff

This plan is consumed by **SG-3 of the PRD work loop**, not by a subagent or inline-executing-plans session. The work-loop's next invocation will:

1. OBSERVE — read this plan + the spec + the scaffold.
2. ORIENT — confirm SG-3 is the next subgoal; pre-flight checklist already enumerated in Task 8.
3. DECIDE — write `current_phase: ACT`, mark SG-3 `in_progress`.
4. ACT — execute Tasks 1–7 (the seven Edits).
5. VERIFY — execute Task 8.
6. UPDATE — execute Task 9.
7. The user invokes `git commit` separately (Task 10) per the fresh-approval rule.
8. Optionally, archive the PRD per Task 10.3.

If the user prefers to execute outside the work loop (e.g., via `superpowers:executing-plans` for batch execution), the plan is structurally compatible — but the work-loop's evidence/STATE bookkeeping is the canonical path for this project.
