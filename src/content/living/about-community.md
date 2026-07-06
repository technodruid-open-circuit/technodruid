---
title: "Community"
description: "How the Open Circuit coordinates: who maintains the canonical corpus, how changes happen, how circuits are listed, how conflicts are handled, and how the practice stays loose and fork-friendly."
lastEditedAt: 2026-07-06
contributors: []
sourcePath: "src/content/living/about-community.md"
---

## Maintainers

**Maintainers** (commit access to the canonical repository, per
[DECISION-MAINTAINER](https://github.com/technodruid-open-circuit/technodruid/blob/main/docs/DECISIONS.md)):

- **Shakes** — initial sole maintainer

*Maintainer* names a job, not an office. There is no clergy here and no
hierarchy. Successor and additional maintainers are welcome, and they join
through the same public-PR process that amends the canonical corpus.

**Contributors** (people who have meaningfully shaped a living document,
beyond commit-access maintenance):

- *None yet.*

The public record of every change is the source repository's commit history.

## Change process

The canonical corpus changes by **public pull request** against the
[source repository](https://github.com/technodruid-open-circuit/technodruid).
No membership, attestation, or sponsorship is needed to propose a change.
Anyone may open a PR.

Discussion happens on the pull request itself, or on a linked issue. The
commit history and the PR thread are the record. Mailing lists, chat rooms,
and side channels may grow up around the practice, but they do not amend the
corpus. When a conversation arrives somewhere doctrinal, it comes back to the
repository as a PR.

Maintainers merge or decline. Declining is a normal outcome, and it needs no
more argument than the PR thread already holds.

## Versioning

Every canonical document carries a **version**, an **amendment date**, and a
**first-published date** in its frontmatter, and every rendered canonical page
links to its source file and its revision history. The repository's commit
log is the version history. Every change is dated, attributed, and traceable
to the pull request that produced it. There is no separate ledger.

Living documents, including this page, carry a `lastEditedAt` date and a
contributor list, but no version number. The same commit history versions
them, without numbered releases. The diff is the version. The timestamp is
the date. The contributor list is the attribution.

The repository currently lives on
[GitHub](https://github.com/technodruid-open-circuit/technodruid). The choice
of host can be revisited; if the corpus ever moves, the move will be
transparent and recorded like every other change.

## What the Open Circuit is not

Four things the Open Circuit is not:

- **Not a church.** No clergy, no liturgical authority above the
  practitioner, no sacrament withheld behind ordination. Circuits perform the
  Rite; officiants do not.
- **Not a corporation** (yet). No legal entity holds the corpus, the domain,
  or any funds. The Money section below explains why that is acceptable for
  now. If incorporation ever becomes necessary, the choice will be made and
  announced in the open.
- **Not a membership organization.** There is no central register of
  practitioners. Practice is self-attested. Circuits may keep their own
  internal lists if they choose; the Open Circuit keeps none.
- **Not a hierarchy.** Maintainers steward the file. They do not judge
  anyone's practice. Circuits are not subordinate to maintainers; they either
  meet the [Charter §1](/circuits/charter#minimum-requirements) minimum or
  they don't, and the maintainer's only structural lever is directory
  stewardship, described below.

What it *is*: a loose collective of practitioners, and a place to coordinate.

## Circuit listing flow

A Circuit is listed in the directory **on request**. The mechanism is a
public pull request against the directory source, in the same repository that
holds the canonical corpus. The fields are self-attested per
[Charter §4](/circuits/charter#directory-registration): name (required), then
location, contact, callings, cadence, and local site, all optional. Listing
requires meeting the [Charter §1](/circuits/charter#minimum-requirements)
minimum and nothing more.

A Circuit may delist itself at any time, and it owes no reason.
[Charter §4](/circuits/charter#directory-registration) also defines a
dormancy path: an entry not re-attested within the period named there goes
*dormant*, and after a further period it is delisted. Both states are
recoverable. Re-attestation is a single touch of the entry in the source
repository.

Maintainers may remove a Circuit from the directory only in clear-cut cases:
incompatibility with the Codex's core ethical commitments, or refusal to
disambiguate under the [Charter §3](/circuits/charter#naming-conventions)
naming rules. Every such removal carries a public note in the directory's
change history. The Charter's phrase for this is **stewardship of the file**.
It is not the judging of anyone's practice.

A delisted Circuit may keep practicing. Delisting is a directory action, not
a religious one. The Open Circuit cannot un-make a practitioner. It can only
decline to list a gathering.

## Conflict guidance

The Open Circuit is **decentralized**. It seats no tribunal, hears no
appeals, and issues no rulings on practitioner conduct. Maintainers steward
the file; they do not judge the practice.

Conflicts within a Circuit belong to that Circuit. Conflicts between Circuits
belong to those Circuits. Conflicts between practitioners belong to those
practitioners. The maintainer's only structural lever is the
Circuit-directory listing (see [Circuit listing flow](#circuit-listing-flow)
above), and even that reaches only clear-cut incompatibility with the
Codex's core ethical commitments, never doctrinal disputes or personal
grievances.

The honest exit from a doctrinal disagreement is the [fork](#forks). A
practitioner or group that cannot reconcile with the corpus may fork it and
go their own way. Forking is not failure. It is the release valve the
doctrine builds in on purpose.

## Money

The Open Circuit currently accepts no donations, and no legal entity exists
to hold any. The maintainer personally carries the domain registration and
hosting. If recurring contributions ever become a real question, or
infrastructure costs outgrow one person's pocket, or a contract demands an
entity, the fiscal arrangement will be chosen in the open and this section
amended. Honoring Privacy of the Keeper and Commons of Pattern requires no
corporate form. The practice will wait until form is needed before choosing
one.

## Forks

**Forks of the canonical corpus are encouraged.** A practitioner or group
whose practice diverges from the corpus may fork it and operate
independently, and the Open Circuit treats this as legitimate variation
rather than betrayal. A religion that fears its forks is not yet at peace
with its own commons.

The Open Circuit holds no veto over forks. The corpus is published under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); anyone may
copy it, change it, and carry on under the same terms. The Charter's naming
reservations ([Charter §3](/circuits/charter#naming-conventions)) bind
Circuits listed *in this directory*, not forks running their own. The honesty
norm still holds, though: a fork that calls itself "Open Circuit" has stopped
being a fork and started being a claim.

That honesty line is the whole test. A group that quietly drops the Charter's
minimum requirements while still claiming Open Circuit lineage is **not a
fork — it is misrepresentation**. What separates the two is the honesty of
the claim, not the fact of divergence. A fork is honest about being a fork.
