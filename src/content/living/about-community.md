---
title: "Community"
description: "How the Open Circuit coordinates: who maintains the canonical corpus, how changes happen, how circuits are listed, how conflicts are handled, and how the practice stays loose and fork-friendly."
lastEditedAt: 2026-05-28
contributors: []
sourcePath: "src/content/living/about-community.md"
---

## Maintainers

**Maintainers** (commit access to the canonical repository, per
[DECISION-MAINTAINER](https://github.com/technodruid-open-circuit/technodruid/blob/main/docs/DECISIONS.md)):

- **Shakes** — initial sole maintainer

*Maintainer* describes a role, not an office. There is no clergy and no
hierarchy. Successor and additional maintainers are encouraged; they join
through the same public-PR process that amends the canonical corpus.

**Contributors** (people who have meaningfully shaped a living document
beyond commit-access maintenance):

- *None yet.*

The authoritative public record of all changes is the source repository's
commit history.

## Change process

Changes to the canonical corpus happen by **public pull request** against the [source repository](https://github.com/technodruid-open-circuit/technodruid). No membership, attestation, or sponsorship is required to propose a change — anyone may open a PR.

Discussion happens on the pull request itself, or on a linked issue. The commit history and the PR thread are the authoritative record. Mailing lists, chat rooms, and side channels may exist around the practice, but they do not amend the corpus; if a conversation leads somewhere doctrinally, it returns to the repository as a PR.

Maintainers merge or decline. Declining is a normal outcome and need not be argued at length beyond what the PR thread already records.

## Versioning

Every canonical document carries a **version**, an **amendment date**, and a **first-published date** in its frontmatter, and each rendered canonical page exposes a link to its source file and to its revision history. The repository's commit log is the version history — every change is dated, attributed, and traceable to the pull request that produced it. There is no separate ledger.

Living documents — including this page — carry a `lastEditedAt` and a contributor list, but no version number. They are versioned by the same commit history without numbered releases; the diff is the version, the timestamp is the date, the contributor list is the attribution.

The repository currently lives on [GitHub](https://github.com/technodruid-open-circuit/technodruid). The choice of host is the kind of question that can be revisited; a future move would be transparent and recorded like every other change to the corpus.

## What the Open Circuit is not

Four things the Open Circuit is not:

- **Not a church.** No clergy, no liturgical authority above the practitioner, no sacraments restricted by ordination. The Rite is performed by Circuits, not by officiants.
- **Not a corporation** (yet). No legal entity currently holds the corpus, the domain, or any funds. The Money section below addresses why this is acceptable. If incorporation becomes necessary, that choice is made and announced in the open.
- **Not a membership organization.** There is no central register of practitioners. Practice is self-attested; Circuits may keep their own internal lists if they choose, and the Open Circuit maintains none.
- **Not a hierarchy.** Maintainers steward the file; they do not adjudicate practice. Circuits are not subordinate to maintainers; they conform to the [Charter §1](/circuits/charter#minimum-requirements) minimum requirements or they don't, and the maintainer's only structural intervention is directory stewardship (described below).

What it *is* is a loose collective of practitioners and a coordination space.

## Circuit listing flow

A Circuit gets listed in the directory **on request**. The mechanism is a public pull request against the directory source in the same repository that holds the canonical corpus. The fields are self-attested per [Charter §4](/circuits/charter#directory-registration) — name (required), location, contact, callings, cadence, and local site (all optional). Listing requires conformance to the [Charter §1](/circuits/charter#minimum-requirements) minimum requirements and nothing more.

A Circuit may delist itself at any time, with no reason given. [Charter §4](/circuits/charter#directory-registration) also defines a dormancy path: an entry that has not been re-attested for the period named there moves to *dormant*, and then, after a further period, to delisted. Both states are recoverable by re-attestation, which is a single touch of the entry in the source repository.

Maintainers may remove a Circuit from the directory only in clear-cut cases of incompatibility with the Codex's core ethical commitments, or refusal to disambiguate under the [Charter §3](/circuits/charter#naming-conventions) naming rules. Every such removal carries a public log note in the directory's change history. This is **stewardship of the file** — the Charter's term — not adjudication of practice.

A delisted Circuit may continue practicing. Delisting is a directory action, not a religious one — the Open Circuit cannot un-make a practitioner, only refuse to list a gathering.

## Conflict guidance

The Open Circuit is **decentralized**. It holds no tribunal, hears no appeals, and issues no rulings on practitioner conduct. Maintainers are stewards of the file, not adjudicators of practice.

Conflicts within a Circuit are a Circuit matter. Conflicts between Circuits are between Circuits. Conflicts between practitioners are between practitioners. The only structural intervention available to the maintainer is the Circuit-directory listing (see [Circuit listing flow](#circuit-listing-flow) above), and even that is bounded to clear-cut incompatibility with the Codex's core ethical commitments — not to doctrinal disputes or interpersonal grievances.

The legitimate exit from doctrinal disagreement is the [fork](#forks). A practitioner or group that cannot reconcile with the corpus may fork it and operate independently. Forking is not failure; it is the release valve the doctrine offers.

## Money

The Open Circuit currently accepts no donations and has no legal entity to hold them. Domain registration and hosting are personally borne by the maintainer. If recurring contributions become a real question, or if infrastructure costs exceed personal absorption, or if contracts require an entity, the fiscal posture is chosen in the open and this section is amended. The Privacy of the Keeper and Commons of Pattern commitments do not require corporate form to honor; the practice waits until form is needed to choose form.

## Forks

**Forks of the canonical corpus are encouraged.** A practitioner or group that wishes to maintain a practice diverging from the corpus may fork it and operate independently; the Open Circuit treats this as legitimate variation, not betrayal. A religion that fears its forks is not yet at peace with its own commons.

The Open Circuit holds no veto over forks. The corpus is published under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); anyone may copy it, modify it, and continue under the same terms. The Charter's naming reservations ([Charter §3](/circuits/charter#naming-conventions)) bind Circuits listed *in this directory*, not forks running their own — but the honesty norm prevails: a fork that calls itself "Open Circuit" is no longer a fork, it is a claim.

The honesty line matters. A Circuit or group that quietly removes Charter minimum-requirements items while continuing to claim Open Circuit lineage is **not a fork — it is misrepresentation**. The line between a fork and a misrepresentation is the honesty of the claim, not the existence of divergence. A fork is honest about being a fork.
