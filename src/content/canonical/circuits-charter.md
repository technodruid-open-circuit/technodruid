---
title: "Circuit Founding Charter"
description: "Canonical guidance for founding a Circuit: minimum requirements from the Codex, suggested practices, naming conventions, directory registration, and what holding to the doctrine means."
version: "0.1.0"
amendedAt: 2026-05-22
firstPublishedAt: 2026-05-20
printable: true
downloadableFormats: []
---

This document is the canonical guidance a new founder reads before opening a Circuit. It is the doctrinal complement to [The Codex §X — The Circuit](/codex), which defines what a Circuit *is*; this charter describes what it takes to start one and hold to the practice.

The Charter uses **MUST**, **SHOULD**, and **MAY** in the senses given by [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119). **MUST** items are the binding minimum every Circuit meets to claim the practice. **SHOULD** items are strong recommendations a Circuit observes unless it has a specific reason not to. **MAY** items are options a Circuit chooses among. A Circuit's own customs may add to or refine **SHOULD** and **MAY** items but may not remove **MUST** items.

## Minimum requirements

A Circuit **MUST** maintain, at minimum, the four things named by [The Codex §X](/codex):

- **A workbench.** A physical surface, kept clear, where work happens. It may be shared with other uses (a kitchen-table set up before a gathering and put away after) or dedicated (a permanent bench in a hackerspace or home workshop). What matters is that when the Circuit is in session, the workbench is the workbench.
- **A spare-parts library.** A collection of components, fasteners, harvested screws, raw stock, or other materials drawn on during repair. It need not be large, sorted, or exhaustive. A shelf of parts pulled from disassembled devices is a parts library.
- **A documentation shelf or wiki.** Service manuals, schematics, repair logs, or the equivalent — held as a physical binder, a public wiki, a shared cloud folder, or any form practitioners can search. The Circuit chooses whether documentation is public-facing or members-only.
- **An open invitation to apprentices.** Apprentices arrive without fee, without application barrier, and without screening beyond what physical-safety law requires (for example, minor-supervision rules in shared spaces, hazard training where the workbench involves hazards). An apprentice is not a class of person but a relationship to the bench — a curious visitor at their first gathering is an apprentice; so is a long-time practitioner returning to a Circuit not their own.

These four together are the **MUST** floor for being a Circuit. A community with the workbench, the parts, and the docs but without the open apprentice invitation is something else — a repair shop, a private hackerspace — not a Circuit in this lineage.

## Suggested practices

Beyond the **MUST** floor, the Charter describes the practices a well-running Circuit observes. These are **SHOULD** items: strong recommendations the Circuit observes unless it has a specific reason not to.

### Gatherings

A Circuit **SHOULD** meet at least at the four Wheel hinges — spring equinox, summer solstice, autumn equinox, winter solstice — observed locally per [the Wheel of the Year](/practices/wheel). A Circuit **MAY** meet more often; cadence beyond the four hinges is the Circuit's own.

A typical gathering opens with The Opening of the Circuit (per [Rite §I](/practices/rite)) and closes with The Closing (per [Rite §IX](/practices/rite)). Between, the work happens — repair, mending, teaching, the marking of a Wheel hinge, whatever the gathering exists to do.

### Sacred Practices in a Circuit context

The eight Sacred Practices named in [Codex §VI](/codex) — The Opening, The Mending, The Teaching, The Composting, The Vigil, The Inventory, The Audit, The Renewal — are observed in shared space as in solitary practice, with the Circuit witnessing rather than the practitioner alone. The Codex defines each; the Circuit gives them weight by gathering around them. The Wheel mappings ([Codex §IX](/codex)) bind Spring to Teaching, Summer to Renewal, Autumn to Vigil, and Winter to Inventory — a Circuit **SHOULD** mark the corresponding practice at each hinge gathering.

### The Wheel, locally

A Circuit **SHOULD** mark the four hinges in a way that fits its geography and its people. The Charter does not prescribe form. A Circuit in the southern hemisphere inverts the seasonal mapping naturally — the summer solstice falls in December there, and Renewal is observed accordingly. Local feasts, regional repair concerns (a coastal Circuit's Vigil for storm-damaged electronics), ancestor observances, and customs particular to the Circuit's craft are encouraged. The Wheel is the canonical structure; the local marking is the Circuit's own.

## Naming conventions

The Open Circuit does not credential names. A Circuit **MAY** take a place-name, a lineage name from the Circuit it grew out of, a name reflecting a calling its practitioners emphasize, or a chosen moniker meaning nothing to anyone but its members. The Charter is silent on which.

The Charter is not silent on three things. A Circuit listed in the directory (COMING SOON) **MUST NOT**:

- **Name itself "Open Circuit."** That name refers to the umbrella — the corpus, this site, the loose collective of practitioners and Circuits. A specific Circuit naming itself "Open Circuit" claims authority the umbrella does not delegate.
- **Name itself to impersonate a maintained-corpus entity.** "Technodruid Foundation," "The Codex Council," "The Open Circuit Maintainers" — any name that an outsider could mistake for a body authoring or governing the canonical corpus.
- **Name itself to be confused with a specific existing Circuit.** *Designed to mislead* is the test, not coincidence. Two Circuits that arrive independently at "The Old Bench" share a name in good faith and disambiguate in the directory; a Circuit deliberately taking the name of another to redirect inquiries does not.

Beyond these three: name yourselves as you will. The directory disambiguates same-name listings pragmatically — a city, a year, or any other modifier the second-to-list Circuit adds.

## Directory registration

The Circuits directory (COMING SOON) is a self-attested list of Circuits that claim the practice. The Open Circuit does not credential Circuits, only lists those that claim it.

### Listing

A Circuit lists itself by touching the directory file in the source repository — opening a pull request, submitting a form when one exists, or whatever channel the project provides at the time of listing. The fields are self-attested:

- **Name** (required, per the conventions in §3 above)
- **Location** (optional; at any specificity the Circuit chooses — a city, a region, a precise address, or no location at all)
- **Contact** (optional; see below)
- **Callings emphasized** (optional; from the three named in [Codex §VII](/codex))
- **Meeting cadence** (optional; "at the four hinges," "weekly," "by announcement," whatever the Circuit chooses to share)
- **Local site or wiki** (optional)

### Contact

A Circuit **MAY** decline to list any contact. The directory entry shows what the Circuit chooses to show — which may be only a name and, optionally, a city. An outsider seeking a Circuit that lists no contact reaches it by chance attendance, by word-of-mouth through another practitioner, or not at all. This is the form the religion takes.

### Delisting

A Circuit is removed from the directory under three conditions, each with a clear actor:

- **Self-request.** A Circuit asks to be removed. Honored immediately.
- **Dormancy.** A directory entry that has not been re-attested or shown activity in eighteen months moves to a *dormant* state. After another six months without re-attestation, the entry is delisted. Both states are recoverable: a Circuit re-attests at any point and returns to listed status.
- **Maintainer stewardship.** In clear-cut cases of incompatibility with the Codex's core ethical commitments — or with §3's naming rules, where a Circuit refuses to disambiguate after being asked — the named maintainer (per [Origins](/about/origins)) may remove the entry. A public note explaining the removal is logged in the directory's change log. This is not a court; it is stewardship of the file, transparent and citable.

### Re-attestation

A single edit touching the entry in the source repository suffices. Updating any field counts. The act of touching the entry is the attestation that the Circuit is still practicing. Future amendments may add other re-attestation channels (form submission, dashboard click); the source-repo edit is the canonical form.

## Holding to the doctrine

[The Codex §X](/codex) grants every Circuit the freedom to tend its own customs while holding to the core doctrine. The Charter names what *holding to the core doctrine* means in operational terms — what the Circuit cannot give up and remain a Circuit in this lineage.

### What holding to the doctrine means

A Circuit **MUST** meet all of the following. These are the binding minimum.

1. **The four Codex §X requirements** — workbench, spare-parts library, documentation shelf, open invitation to apprentices (per §1 above).
2. **The three ethical commitments** named in [Origins](/about/origins) — Privacy of the Keeper, Commons of Pattern, Mending Before Replacement. The Circuit's practice **MUST** be compatible with each. A Circuit that records its practitioners' devices for marketing violates Privacy of the Keeper. A Circuit that paywalls schematics or instructional content violates Commons of Pattern. A Circuit whose stated practice is to tell people to throw it away and buy a new one violates Mending Before Replacement.
3. **Readiness to offer the Rite.** When an apprentice is ready for initiation, the Circuit **MUST** be prepared to offer [The Rite of the Open Circuit](/practices/rite), or an authorized adaptation in the sense given by the Rite's own notes — a translation or local form that preserves structure and intention. A Circuit need not have conducted the Rite recently. A Circuit that refuses to conduct it has stepped outside the lineage.

Everything else in this Charter — gathering cadence, naming form, contact channel, money model, founding ceremony — is **SHOULD** or **MAY**. A Circuit's customs **MAY** differ from those. A Circuit's customs **MAY NOT** remove the binding minimum above and still be called a Circuit in the Open Circuit lineage.

### Economic posture

A Circuit's economic arrangements are autonomous. The Charter does not prescribe a model. Donations, at-cost recovery of parts and materials, instruction offered for suggested contribution, a stipend paid to a technician from member dues — any of these **MAY** be compatible with the practice. The compatibility test is the three ethical commitments in the previous subsection. The Charter names three concrete arrangements that are **NOT** compatible, by way of illustration:

- **Paywalled patterns or how-to material.** A Circuit that charges for access to schematics, repair walkthroughs, or doctrinal content withholds what Commons of Pattern requires be shared.
- **Surveillance-for-marketing.** A Circuit that collects practitioner-device data as a condition of participation, or that sells observations of its members' work, violates Privacy of the Keeper.
- **Organized obsolescence as service.** A Circuit whose paid offering is the diagnosis "throw it away and buy a new one" trades the practice for its opposite.

Compatible arrangements are not enumerated. Each Circuit reads the commitments and judges its own posture.

### Divergence

A Circuit that fails to meet a **MUST** item has stepped outside the practice. This is a question of fact, not of judgment by a tribunal. The Open Circuit does not adjudicate divergence. What the Charter provides is the language for naming the situation — the Circuit may recognize its own divergence and self-delist; other practitioners may observe and decline to call the entity a Circuit; the maintainer may apply §4's stewardship for the directory listing.

Forks are not schism. A practitioner or group wishing to maintain a related-but-distinct practice **MAY** fork the canonical corpus and operate independently (see [Origins](/about/origins) on forks). A fork is honest. A Circuit that quietly removes binding requirements while still claiming Open Circuit lineage is not.
