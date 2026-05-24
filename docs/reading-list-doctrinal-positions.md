# Reading List — Doctrinal Positions (v1)

> A design document. Captures the doctrinal positions the reading list (`src/content/living/library-reading.md`) commits to in its v1 body draft. Brainstormed and approved 2026-05-27. The per-entry edits are drafted in a subsequent session against this spec.

**Status:** Approved. Spec input for ISC-READING-1 (PRD: `docs/prd/technodruid-library-reading/PRD-20260522-technodruid-library-reading.md`).

**Companion docs (read first if context is needed):**
- `docs/information-architecture.md` §5 `/library/reading` (the IA naming the six works and their authors; two entries name only the author)
- `src/content/living/library-reading.md` (the iter-10 scaffold this spec amends — frontmatter, intro prose, six bulleted entries, "How the list grows" footer)
- `docs/charter-doctrinal-positions.md` — methodological precedent (worked example of the brainstorm → spec → prose flow for canonical content)
- `docs/glossary-doctrinal-positions.md` — methodological precedent for compact-entry catalog content

---

## 1. Posture and Voice

The reading list is a **curated commons-of-pattern artifact**. The list *as a set* carries the doctrinal argument — the choice of these six works over others is the practice declaring what it reads. The per-entry annotation does not repeat that argument.

- **Annotation voice:** neutral, declarative, single-sentence plot summary of what the work is *about*. No doctrinal name-dropping ("anchors Commons of Pattern", "illuminates Mending Before Replacement"). The reader perceives the alignment by reading the curated set; the line under each entry just orients.
- **Length target:** approximately 30 rendered lines for the `## The list` section. Scannable on one screen.
- **Year convention:** original publication year of the named work. For anthologies, the year of the first edition of that anthology — not the year of the oldest essay it collects. See §2.2.
- **Version model:** *living* content, not canonical. `lastEditedAt` bumps on each amendment; no `version` field. `contributors[]` updates only when a person other than the maintainer authors annotations.
- **RFC 2119 binding language:** NOT used. The reading list defines no obligation; it points at works. MUST/SHOULD/MAY belong to the Charter and other prescriptive docs.
- **Sermon-vs-citation resolution:** the scaffold's intro prose calls the list "a sermon" and says each entry "earns its place only when [it] explains why it belongs." The list does that work through *which six* it includes. Each individual annotation can therefore be a restrained citation — the sermon and the citation live at different levels of the artifact.

---

## 2. The Four Doctrinal Positions

### 2.1 Position — Author-only-entry resolution

**Question:** IA §5 names two entries by author only, without a specific work. Which work for each?

**Position:** Canonized as already provisional in the scaffold:

| Author | Canonized work | Year |
|---|---|---|
| Lewis Hyde | *The Gift* | 1983 |
| Ursula M. Franklin | *The Real World of Technology* | 1989 |

Both are already wired with archive.org links in the iter-10 scaffold (`src/content/living/library-reading.md:30–33`). This Position formalizes the provisional pick.

**Reasoning:** *The Gift* is Hyde's foundational work on gift economies versus market exchange — the most-cited Hyde and the one most directly readable as commentary on the practice's posture toward shared patterns. *The Real World of Technology* is the 1989 Massey Lectures where Franklin distinguishes "holistic" from "prescriptive" technologies — foundational vocabulary that the practice's posture toward technology builds on, even when not cited explicitly.

### 2.2 Position — Year convention

**Question:** When an edition is reissued, which year does the entry's `Year` field show?

**Position:** **Original publication year of the named work.** For single-author monographs, this is the year the work first appeared in print. For anthologies, the year of the first edition of *that anthology*, not the year of the oldest essay it collects.

Concrete assignments:

| Work | Year | Notes |
|---|---|---|
| Shop Class as Soulcraft | 2009 | Single-edition. |
| The Right to Repair | 2022 | Single-edition. |
| Free Software, Free Society | 2002 | 1st edition of the Stallman anthology. Not 1985 (GNU Manifesto) — the *named work* is the anthology. The 3rd edition is 2015 and is the version most copies in print today reflect; the year field still shows 2002. |
| The Soul of a New Machine | 1981 | Single-edition. |
| The Gift | 1983 | 2007 reissue exists with new subtitle; year field shows 1983. |
| The Real World of Technology | 1989 | 1999 revised edition adds material; year field shows 1989. Annotation may note the revised edition if useful. |

**Reasoning:** Original-year is the academic citation convention and matches the work's first-appearance signal. Where the canonized edition differs materially (Franklin 1999, Stallman 3rd ed.), the divergence is small enough to handle in annotation prose if needed; the year field stays anchored to the work's appearance.

### 2.3 Position — Annotation voice

**Question:** Each entry's one-line annotation — what voice?

**Position:** **Neutral, single-sentence, declarative plot summary** of what the work is *about*. No doctrinal connection drawn explicitly. No "anchors X commitment." Em-dash separates author/year/annotation from the title.

**Reasoning:** Two reasons. (1) The curation *is* the argument. The set of six is a doctrinal statement; each annotation just orients the reader. Trusting readers to perceive the alignment from the curation is more aligned with the practice's restraint than name-dropping commitments. (2) Annotations written in doctrinal voice age poorly out-of-context — if any line of the reading list is ever quoted elsewhere (a side-bar on another page, an external citation, a syndication), the neutral form survives the move; the doctrinal-voice form looks like proselytizing when separated from its frame.

The reading list page's *intro prose* (`src/content/living/library-reading.md:9–19`) carries the doctrinal posture — the "sermon" framing, the "earns its place" framing. The entries themselves stay neutral.

### 2.4 Position — Entry structure

**Question:** Keep bullets, or lift entries to `### Title — Author (Year)` H3 headings for deep-link anchors?

**Position:** **Bullets, with an explicit `<a id="slug"></a>` anchor at the start of each bullet.** Preserves the compact list form; makes each entry externally cite-able.

Form per entry:

```markdown
- <a id="the-gift"></a>**[The Gift](https://archive.org/details/giftcreativityar0000hyde)** —
  Lewis Hyde. 1983. [Annotation sentence.]
```

The six anchor slugs (author-chosen, kebab-case, derived directly from the title):

| Entry | Slug |
|---|---|
| Shop Class as Soulcraft | `shop-class-as-soulcraft` |
| The Right to Repair | `the-right-to-repair` |
| Free Software, Free Society | `free-software-free-society` |
| The Soul of a New Machine | `the-soul-of-a-new-machine` |
| The Gift | `the-gift` |
| The Real World of Technology | `the-real-world-of-technology` |

A reader linking to a specific entry from elsewhere in the corpus uses `/library/reading#<slug>`.

**Reasoning:** H3 promotion would auto-generate the anchor but at the cost of vertical density — six H3 sections for a six-entry list inflates the rendered page substantially. Bullets keep the page scannable. The cost of the explicit-anchor approach (hand-maintained slugs, raw HTML in a markdown content file) is acceptable at six entries. **Revisit if:** the list grows past approximately 15 entries — at that scale, H3 promotion becomes the better trade and this Position would be amended.

---

## 3. Per-Entry Annotation Drafts

The annotation sentences below are *draft* prose for review. Final wording is decided in the implementation plan (SG-2) and committed by the executed content edit (SG-3). Inclusion here makes the voice concrete.

| Entry | Year | Draft annotation |
|---|---|---|
| Shop Class as Soulcraft | 2009 | A philosopher-turned-motorcycle-mechanic's case for the manual trades as morally and intellectually serious work. |
| The Right to Repair | 2022 | A legal history of how manufacturers came to control post-sale ownership, and what right-to-repair movements are trying to reclaim. |
| Free Software, Free Society | 2002 | Richard Stallman's collected essays on the four freedoms and the philosophy behind the GNU project. |
| The Soul of a New Machine | 1981 | Tracy Kidder's reportage on the small Data General team that built the Eagle minicomputer through eighteen-hour days and steady burnout. |
| The Gift | 1983 | Lewis Hyde's argument that art operates in a gift economy distinct from market exchange, and what is lost when commodity logic absorbs creative labor. |
| The Real World of Technology | 1989 | Ursula Franklin's Massey Lectures distinguishing "holistic" from "prescriptive" technologies and tracing how the latter reshape social relations. |

Each annotation is one sentence. None names a doctrinal commitment by name. Crawford's annotation does the closest doctrinal work ("morally and intellectually serious") but stays inside a description of the book's own thesis, not a claim about the practice.

---

## 4. Implementation Path

1. **This spec is the input.** No content edits to the reading list yet — SG-1 of the PRD work loop produces *this document*, nothing else.
2. **`writing-plans` skill** (SG-2 of the work loop) builds a per-entry implementation plan against this spec. Lands at `docs/reading-list-implementation-plan.md`. The plan resolves per-entry annotation final wording, decides any edge cases this spec left abstract (e.g., whether Franklin's 1999 revised edition gets a note), and orders the edits.
3. **The per-entry edit** (SG-3 of the work loop) is one `prd_work_loop` iteration that:
   - Replaces all six `[PENDING]` year + annotation placeholders in `src/content/living/library-reading.md`.
   - Adds `<a id="…"></a>` anchors per Position 2.4 at the start of each bullet.
   - Bumps `lastEditedAt` to the commit date.
   - Updates `contributors[]` only if a person other than the maintainer authored annotations.
   - Satisfies ISC-READING-1.
4. **No `DECISIONS.md` entry.** The four positions in this spec govern *living* content, not canonical. The spec doc itself is the durable record. If a later phase wants to lift any one of these to a real `DECISION-*` entry (e.g., to formalize the ~15-entry H3-promotion threshold from Position 2.4), that is a separate amendment with its own `Revisit if:` clause.

---

## 5. Out of Scope (v1)

- **No new entries** beyond the six in the iter-10 scaffold. Additions follow the existing "How the list grows" amendment process at `src/content/living/library-reading.md:36–40`.
- **No new external links** beyond what is already in the scaffold. Five of the six entries have archive.org links; one (*The Right to Repair*, Perzanowski) does not, because no streamable/borrowable archive.org copy currently exists for that work. The scaffold's posture — link to archive.org where a copy exists; leave the title unlinked otherwise — is preserved.
- **Intro prose unchanged.** The opening paragraph (`src/content/living/library-reading.md:9–19`) and the "How the list grows" footer stay as written. This brainstorm fills the per-entry `[PENDING]` gaps; it does not rewrite the surrounding prose.
- **No companion-list edits.** `/library/repair` and `/library/links` are mentioned in the footer but are separate Living pages outside this PRD's scope.
