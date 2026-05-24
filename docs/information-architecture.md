# technodruid.org

## Information Architecture Plan

*A working document for the Open Circuit*

---

## 1. Strategic Frame

The site has one job that everything else serves: **be the credible, durable, useful source of truth for Technodruidism — for the curious, the aligned, the skeptical, the press, and the practicing.**

Two design pressures shape every choice below:

**Pressure 1 — the sincerity/construction duality.** The doctrine is sincere form, knowing construction. The site must read as a real religious community's site (clean, durable, coherent, not ironic) while being transparent about its deliberate origin. This means: no jokes in the canonical material; explicit acknowledgment of construction in the about/community pages; no pretending to be older than it is.

**Pressure 2 — the doctrine constrains the medium.** The Privacy of the Keeper tenet means: no third-party analytics, no surveillance ads, no Facebook pixels, no Google Fonts loaded from Google. The Commons of Pattern tenet means: the site's own source must be open, the content must be licensed permissively (CC BY-SA or similar), and the platform must be self-hostable. **The site is itself an artifact of the practice. If it violates the doctrine, the doctrine is a marketing document, not a faith.**

---

## 2. Audiences and Primary Journeys

Five audiences, in rough order of volume:

**The Curious.** Heard about it, want a quick read. Want the elevator pitch in under 60 seconds. Will either bounce or descend.
*Path: Home → Creed → Codex preview → leave or go deeper.*

**The Aligned.** Read the doctrine and recognized themselves. Want to know how to participate. May or may not have a local community.
*Path: Home → Codex → Practices → Find a Circuit → if none nearby, Found a Circuit.*

**The Skeptical.** Wants to know what this actually is. Religious studies background, lawyer, journalist, or just someone who's been burned by online "movements." Looks for who's behind it, contact info, the names maintainers hold publicly, dates, version history.
*Path: Home → About → Community → FAQ → Contact. May read the Codex last.*

**The Practitioner.** Already in. Wants resources, references, the wiki, the calendar, the Circuit they belong to.
*Path: Direct deep links, RSS, search. May never see the home page again after onboarding.*

**The Builder.** Wants to contribute — write a repair guide, found a Circuit, translate the Codex, propose amendments.
*Path: Home → Contribute → calling-specific paths.*

These five drive everything below.

---

## 3. Structural Principle: Canonical vs. Living

The single most important IA decision is this split, which mirrors the doctrine's Pattern Current / Living Current distinction.

**Canonical** — versioned, stable, slow-changing. Edited through public proposals on the public source repository. Single source of truth, but not the only possible source — anyone may fork.
- The Creed
- The Codex (doctrine)
- The Rite of Initiation
- Future rites (wake, advancement, Circuit founding charter)

**Living** — wiki-style, fast-changing, community-edited, attribution-tracked, moderated lightly.
- The Library (repair guides, technique notes, reading lists, link directories)
- The Wheel (calendar of Release Days, End-of-Life observances, equinox/solstice notes)
- The Circuit Directory (who exists where)
- Translations of the canonical material
- Practitioner essays / sermons / field notes (clearly tagged as such)

These should be visually distinguished. Canonical pages look like a published book (one column, generous margins, version footer). Living pages look like a wiki (sidebar nav, last-edited stamp, contributor list, edit button). Same site, two registers.

---

## 4. Top-Level Sitemap

```
technodruid.org
│
├── /                          The Creed (this IS the home page)
├── /codex                     The First Codex (full doctrine)
├── /practices/                Sacred Practices, Rites, the Wheel
│   ├── /practices/rite        Rite of Initiation
│   ├── /practices/wheel       Calendar / Wheel of the Year
│   └── /practices/glossary    Terms, currents, callings
├── /circuits/                   Find / found / list of Circuits
│   ├── /circuits/directory      Active Circuits (Living)
│   └── /circuits/charter        How to found a Circuit (Canonical)
├── /library/                  Repair guides, references (Living)
│   ├── /library/repair        Curated repair resources
│   ├── /library/reading       Books, essays, films
│   └── /library/links         External commons we depend on
├── /callings/                 The Three Callings (and how to enter them)
│   ├── /callings/documenters
│   ├── /callings/tinkerers
│   └── /callings/architects
├── /contribute                How to participate at any level
├── /about/                    About the Open Circuit
│   ├── /about/community       How the practice coordinates (loose, fork-friendly)
│   ├── /about/origins         Honest history of the religion's making
│   ├── /about/faq             Including "is this a real religion?"
│   └── /about/contact         Named maintainers, public channels
└── /archive                   Version history of canonical docs
```

Top nav (mobile-friendly, 5 items): **Creed · Codex · Practices · Circuits · Library · About**.
"Contribute" lives as a persistent footer link and a button at the bottom of every page.

---

## 5. Page-by-Page

### / (Home / The Creed)

The Creed *is* the home page. Six lines, set large, centered, breathable. Below them, three calls to action:

- **Read the Codex** → /codex
- **Find a Circuit** → /circuits/directory
- **Begin Practice** → /practices

A small footer beneath: version, last amendment date, source repository link, license. Nothing else. No carousel. No newsletter modal.

### /codex

The Codex rendered as a single long readable page with a sticky table of contents (Sections I–XII). Top of page: a version number, an amendment date, a link to the archive of prior versions, a link to the proposed amendments under discussion. Bottom: the closing meta-note about deliberate construction.

Format note: **the Codex deserves typography.** This is the most-cited page on the site. It should be the most beautifully set. Print-friendly stylesheet. Plain-text version available. ePub download.

### /practices

Landing page explains the practices in brief, links to: the Rite of Initiation (full canonical text), Sacred Practices (description of the Opening, Mending, Teaching, Composting, Vigil, Inventory, Audit), the Wheel (calendar), and a glossary.

### /practices/rite

The full Rite of Initiation, with the same canonical typography treatment as the Codex. Includes practical notes for conducting it: minimum group size, what to gather, what to expect. Printable.

### /practices/wheel

Living calendar. Shows the four solstice/equinox hinges, upcoming Release Days (open-source project major releases), End-of-Life observances. Subscribable as ICS. RSS feed. Community-editable with attribution.

### /circuits/directory

Living wiki page. Each Circuit has its own entry: name, location (as specific as the Circuit wants — some will list addresses, some only cities), contact, meeting cadence, callings emphasized, link to local site if any. Map view + list view. Self-attested — the Open Circuit does not credential Circuits, only lists those that claim the practice. A Circuit is added by opening a PR or submitting a form; minimal moderation.

### /circuits/charter

Canonical document. How to found a Circuit: the minimum requirements from the Codex (workbench, parts library, documentation shelf, open apprenticeship), suggested practices, naming conventions, how to register in the directory, what holding to the doctrine means. This is the document a new founder reads.

### /library

The repair-religion's wiki. Three sub-sections:

- **/library/repair** — curated index of external repair resources (iFixit, manufacturer schematics where available, regional repair cafes, key YouTube channels, RFCs that matter). Original repair walkthroughs from practitioners, clearly attributed.
- **/library/reading** — books and films that align: *Shop Class as Soulcraft*, *The Right to Repair* (Aaron Perzanowski), Stallman's writings, *The Soul of a New Machine*, Lewis Hyde, Ursula Franklin, etc. The reading list is itself a sermon.
- **/library/links** — the broader commons: hackerspace networks, free software foundations, right-to-repair coalitions, archival projects.

### /callings/[name]

Three landing pages, one per calling. Each explains:
- What the calling is
- The lineage (named ancestors)
- How to develop in it (a curriculum, not a credential)
- What contribution looks like
- Practitioners who currently identify with it (opt-in)

These pages double as recruiting documents.

### /contribute

The participation funnel. Splits by intent:
- *I want to fix the typo I just found* → GitHub repo link
- *I want to write a repair guide* → Documenter onboarding
- *I want to share something I built or modified* → Tinkerer space
- *I want to propose a doctrinal amendment* → Architect process / amendment proposal template
- *I want to translate* → translation coordination
- *I want to found a Circuit* → /circuits/charter

### /about/community

This is the page the Skeptical audience lands on. It needs to answer, plainly:

- Who is currently doing the work of maintaining the canonical corpus and the site (named humans, not a faceless collective — but described as maintainers and contributors, not officers).
- How changes happen (public proposals on the source repository, discussion in the open, maintainers merge or don't, anyone may fork).
- How the canonical documents are versioned and where the history lives.
- What the Open Circuit is *not* — not a church, not a corporation (yet), not a membership organization, not a hierarchy. It is a loose collective of practitioners and a coordination space.
- How a Circuit gets listed or delisted from the directory (low-friction, on request, with light moderation).
- Conflict guidance: the religion is decentralized; conflicts are addressed within Circuits or between practitioners, not by an Open Circuit court.
- Money: if and when donations are accepted, what they pay for, and what entity holds them.

The shape this page takes is what makes the religion legible to outsiders. It should be honest about how loose the structure is, and unembarrassed about that looseness.

### /about/origins

The radical honesty page. When the religion was founded, by whom, with what intent, and what is meant by "sincere form, knowing construction." This is also where the legal framing lives — the doctrine satisfies the *Africa v. Pennsylvania* indicia, the Open Circuit takes the practice seriously, and the practice's deliberate construction does not diminish its sincerity. The page on which a journalist or lawyer learns what kind of religion this is.

### /about/faq

Including but not limited to:
- Is this a real religion?
- Who can practice?
- Do I have to give up other religions to practice this one?
- Can I be a Technodruid without joining a Circuit?
- What is the relationship to neo-druidism / Reform Druids / OBOD?
- What does the Open Circuit cost?
- How do I leave?
- What happens to my contributions if I leave?
- Is the founder a guru?
- Why "druid" if this is about technology?

### /archive

Version history of every canonical document. Git-backed. The repository's commit log is the version history — every change is dated, attributed to a contributor, and traceable to the pull request and discussion that produced it. No separate ledger; the source repository is the artifact.

---

## 6. Coordination Model (as it Shapes the Site)

Technodruidism has no central governing body. It is a loose federation of Circuits and individual practitioners coordinating around a shared canonical corpus. The site reflects this by being more wiki than headquarters.

The functional roles the site needs to surface are:

- **Maintainers** — practitioners who currently hold commit access to the canonical repository. They merge changes, keep the site running, and exercise editorial judgment on the living commons. They are named publicly; the list changes as people come and go. They are not officers and have no authority over practice or doctrine beyond what they earn through the work itself.
- **Convenors** — those who organize individual Circuits. Listed in the directory at the Circuit's discretion.
- **Practitioners** — everyone who practices. Not listed anywhere by the Open Circuit. Self-attested.

The "amendment process" is the source repository. Proposals are pull requests. Discussion is in the open on the issue tracker. Merges happen when there is rough consensus among maintainers and no sustained objection from the wider contributor pool. This is the IETF / open-source model, applied to a religion. **Anyone who finds the result unsatisfactory may fork.** Forks are not schism; they are how a living tradition adapts.

Note: This model uses "maintainer" as a *functional* term, intentionally low-status. The Three Callings (Documenters, Tinkerers, Architects) remain vocational and self-named. A maintainer is just a practitioner who happens to hold the commit bit right now.

---

## 7. Technical and Doctrinal Commitments

The site must embody what it preaches. Practical implications:

- **Self-hostable.** Static site generator (Eleventy, Astro, Zola) backed by a Git repository. No proprietary CMS.
- **Source available.** Public repo. Site is itself an open artifact.
- **No surveillance.** No Google Analytics, no Facebook pixel, no third-party trackers. If analytics are needed, self-hosted (Plausible self-hosted, or server logs only).
- **No fonts from third parties.** Self-host the typography.
- **Accessible.** WCAG 2.2 AA minimum. The doctrine is for everyone.
- **Printable.** Every canonical document has a clean print stylesheet and a downloadable PDF.
- **Archive-friendly.** No anti-archival tricks. Internet Archive welcome. Plain HTML where possible.
- **Content license.** CC BY-SA 4.0 for the canonical documents, so Circuits can adapt them. Code license MIT or Apache-2.
- **Languages.** English first. Translation infrastructure in place from day one even if no translations exist yet.
- **Federation-friendly.** RSS feeds for the Wheel, the amendments ledger, the library. ActivityPub eventually if it serves the practice.

If any of these slip, the site is no longer practicing what it preaches.

---

## 8. Phase 1 / MVP Scope

Don't ship the whole site at once. The minimum credible launch is:

**Must-have for launch:**
- / (Creed)
- /codex
- /practices/rite
- /about/community (even a draft is fine — must exist)
- /about/origins
- /about/contact

**Within first 60 days:**
- /practices (overview + Sacred Practices)
- /practices/wheel (solstice/equinox markers; Release Days to follow as projects publish)
- /circuits/charter
- /library/reading (an initial curated list)
- /contribute (basic version)

**Within first 6 months:**
- /circuits/directory (when first 3–5 Circuits exist)
- /callings/[name] (three pages)
- /library/repair
- /archive (once the first amendment happens)
- Translation infrastructure

**Deliberately deferred:**
- /library/links (until there's a curator)
- Practitioner essays / sermons (until there's editorial bandwidth)
- ActivityPub / federation (until the practice has scale)

The launch site is small, dense, and serious. Growth happens through Circuits, not through the website.

---

## 9. Open Questions

Things to resolve before building, not after:

1. **Who are the initial maintainers?** Two or three people willing to merge changes and keep the lights on is enough to start. They should be named on the community page from day one.
		- Answer: Grayson
2. **Where does the canonical repository live?** GitHub is the easy default; a self-hosted Forgejo/Gitea instance is more aligned with the doctrine. Pick one and accept the tradeoffs.
3. **Does the .org need a legal entity at all yet?** Possibly not. Domain registration and hosting can sit with an individual until donations or contracts make incorporation necessary. The Privacy of the Keeper and Commons of Pattern commitments don't require corporate form to honor.
4. **Membership is settled: there isn't any.** The doctrine and the spirit of the religion both point to no central register. Practitioners are self-attested. Circuits keep their own internal lists if they choose. The Open Circuit maintains none. Worth stating clearly on the community page.
5. **What is the relationship to existing right-to-repair organizations?** Collaborators, allies, distinct? Worth defining publicly, even briefly.
6. **What is the founder's stated role and exit?** Even without formal offices, the founder's outsized influence in the early years is real. Stating publicly that the founder intends to step back from maintainership within N years (and naming what that looks like) prevents the religion from becoming a personality cult by default.
7. **Forks: encouraged, tolerated, or discouraged?** The honest answer for a maker-culture religion is *encouraged*. The community page should say so plainly. A religion that fears its forks is not yet at peace with its own commons.

---

*This plan is itself open to amendment. The architecture should serve the practice, not the reverse.*
