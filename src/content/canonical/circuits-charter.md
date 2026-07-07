---
title: "Circuit Founding Charter"
description: "Canonical guidance for founding a Circuit: minimum requirements from the Codex, suggested practices, naming conventions, directory registration, and what holding to the doctrine means."
version: "0.2.0"
amendedAt: 2026-07-06
firstPublishedAt: 2026-05-20
printable: true
downloadableFormats: []
---

This is the document a new founder reads before opening a Circuit. It is the practical companion to [The Codex §X — The Circuit](/codex), which says what a Circuit *is*. This charter says what it takes to start one, and what it takes to keep faith with the practice.

The Charter uses **MUST**, **SHOULD**, and **MAY** in the senses given by [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119). **MUST** items are the binding minimum every Circuit meets in order to claim the practice. **SHOULD** items are strong recommendations, to be set aside only for a specific reason. **MAY** items are open choices. A Circuit's own customs can add to or refine the **SHOULD** and **MAY** items. They cannot remove a **MUST**.

## Minimum requirements

A Circuit **MUST** keep, at minimum, the four things named by [The Codex §X](/codex):

- **A workbench.** A physical surface, kept clear, where the work happens. It may be shared with other uses, like a kitchen table set up before a gathering and put away after, or it may be a permanent bench in a hackerspace or a home workshop. What matters is that when the Circuit is in session, the workbench is the workbench.
- **A spare-parts library.** Components, fasteners, harvested screws, raw stock — the materials a repair draws on. It does not need to be large, sorted, or complete. A shelf of parts pulled from disassembled devices is a parts library.
- **A documentation shelf or wiki.** Service manuals, schematics, repair logs, or their equivalent, held in whatever form practitioners can actually search: a physical binder, a public wiki, a shared folder. The Circuit decides whether its documentation is public or members-only.
- **An open invitation to apprentices.** Apprentices arrive without fee, without application, and without screening beyond what physical-safety law requires (minor-supervision rules in shared spaces, hazard training where the bench has hazards). An apprentice is not a class of person. It is a relationship to the bench. The curious visitor at their first gathering is an apprentice, and so is a long-time practitioner visiting a Circuit not their own.

These four together are the floor. A community with the workbench, the parts, and the docs, but without the open invitation, is something else — a repair shop, a private hackerspace — and not a Circuit in this lineage.

## Suggested practices

Above the floor, the Charter describes what a well-running Circuit does. These are **SHOULD** items.

### Gatherings

A Circuit **SHOULD** meet at least at the four Wheel hinges: spring equinox, summer solstice, autumn equinox, winter solstice, each observed locally per [the Wheel of the Year](/practices/wheel). A Circuit **MAY** meet as often as it likes beyond that. The cadence is its own.

A typical gathering opens with The Opening of the Circuit ([Rite §I](/practices/rite)) and closes with The Closing ([Rite §IX](/practices/rite)). Between the two, the work happens: repair, mending, teaching, the marking of a hinge, whatever the gathering exists to do.

### Sacred Practices in a Circuit context

The eight Sacred Practices named in [Codex §VI](/codex) — The Opening, The Mending, The Teaching, The Composting, The Vigil, The Inventory, The Audit, The Renewal — are kept in shared space just as in solitary practice. The difference is that the Circuit witnesses them, rather than the practitioner alone. The Codex defines each practice; the Circuit gives it weight by gathering around it. The Wheel ([Codex §IX](/codex)) binds Spring to Teaching, Summer to Renewal, Autumn to Vigil, and Winter to Inventory, and a Circuit **SHOULD** mark the corresponding practice at each hinge gathering.

### The Wheel, locally

A Circuit **SHOULD** mark the four hinges in a way that fits its geography and its people. The Charter does not prescribe the form. A Circuit in the southern hemisphere inverts the seasonal mapping as a matter of course: the summer solstice falls in December there, and Renewal is kept accordingly. Local feasts, regional repair concerns (a coastal Circuit keeping Vigil for storm-drowned electronics), ancestor observances, and customs particular to the Circuit's craft are all welcome. The Wheel is the canonical structure. The local marking belongs to the Circuit.

## Naming conventions

The Open Circuit does not credential names. A Circuit **MAY** take a place-name, a lineage name from the Circuit it grew out of, a name honoring a calling its practitioners lean toward, or a moniker that means nothing to anyone but its members. The Charter has no opinion.

On three things, though, the Charter is not silent. A Circuit listed in the directory (COMING SOON) **MUST NOT**:

- **Name itself "Open Circuit."** That name belongs to the umbrella: the corpus, this site, the loose collective of practitioners and Circuits. A single Circuit taking that name claims an authority the umbrella does not delegate.
- **Name itself to impersonate a maintained-corpus entity.** "Technodruid Foundation," "The Codex Council," "The Open Circuit Maintainers" — any name an outsider could mistake for a body that authors or governs the canonical corpus.
- **Name itself to be confused with a specific existing Circuit.** The test is *designed to mislead*, not coincidence. Two Circuits that arrive independently at "The Old Bench" share the name in good faith and disambiguate in the directory. A Circuit that deliberately takes another's name to redirect its inquiries does not.

Beyond those three: name yourselves as you will. The directory disambiguates same-name listings pragmatically. A city, a year, whatever modifier the second-to-list Circuit chooses.

## Directory registration

The Circuits directory (COMING SOON) is a self-attested list of Circuits that claim the practice. The Open Circuit does not credential Circuits. It only lists the ones that claim it.

### Listing

A Circuit lists itself by touching the directory file in the source repository: a pull request, a form when one exists, whatever channel the project provides at the time. The fields are self-attested:

- **Name** (required, per the conventions in §3 above)
- **Location** (optional, at any precision the Circuit chooses — a city, a region, an exact address, or nothing at all)
- **Contact** (optional; see below)
- **Callings emphasized** (optional, from the three named in [Codex §VII](/codex))
- **Meeting cadence** (optional; "at the four hinges," "weekly," "by announcement," whatever the Circuit wants to share)
- **Local site or wiki** (optional)

### Contact

A Circuit **MAY** decline to list any contact at all. The directory shows what the Circuit chooses to show, which may be nothing more than a name and a city. An outsider seeking a Circuit that lists no contact finds it by chance attendance, by word of mouth through another practitioner, or not at all. This is the form the religion takes.

### Delisting

A Circuit leaves the directory in three ways, each with a clear actor:

- **Self-request.** A Circuit asks to be removed. Honored immediately.
- **Dormancy.** An entry that has not been re-attested or shown activity in eighteen months moves to a *dormant* state. After a further six months without re-attestation, it is delisted. Both states are recoverable: a Circuit re-attests at any point and returns to the listed state.
- **Maintainer stewardship.** In clear-cut cases of incompatibility with the Codex's core ethical commitments, or with §3's naming rules where a Circuit refuses to disambiguate after being asked, the named maintainer (per [Origins](/about/origins)) may remove the entry, with a public note in the directory's change log explaining why. This is not a court. It is stewardship of a file, done in the open, and citable.

### Re-attestation

A single edit touching the entry in the source repository is enough. Updating any field counts. Touching the entry is itself the attestation that the Circuit still practices. Future amendments may add other channels (a form, a dashboard click); the source-repo edit remains the canonical one.

## Holding to the doctrine

[The Codex §X](/codex) gives every Circuit the freedom to tend its own customs while holding to the core doctrine. This section names what *holding to the core doctrine* means in practice — what a Circuit cannot give up and still be a Circuit in this lineage.

### What holding to the doctrine means

A Circuit **MUST** meet all of the following. This is the binding minimum.

1. **The four Codex §X requirements**: workbench, spare-parts library, documentation shelf, open invitation to apprentices (per §1 above).
2. **The three ethical commitments** named in [Origins](/about/origins): Privacy of the Keeper, Commons of Pattern, Mending Before Replacement. The Circuit's practice **MUST** be compatible with each. A Circuit that records its practitioners' devices for marketing has broken Privacy of the Keeper. A Circuit that paywalls schematics or instruction has broken Commons of Pattern. A Circuit whose standing advice is to throw it away and buy a new one has broken Mending Before Replacement.
3. **Readiness to offer the Rite.** When an apprentice is ready for initiation, the Circuit **MUST** be prepared to offer [The Rite of the Open Circuit](/practices/rite), or an adaptation of the kind the Rite's own notes authorize: a translation or local form that keeps the structure and the intention. A Circuit need not have conducted the Rite recently. A Circuit that refuses to conduct it has stepped outside the lineage.

Everything else in this Charter — gathering cadence, naming, contact channel, money, founding ceremony — is **SHOULD** or **MAY**, and a Circuit's customs **MAY** differ from it. What a Circuit's customs **MAY NOT** do is remove the binding minimum above and still call itself a Circuit in the Open Circuit lineage.

### Economic posture

A Circuit's economic arrangements are its own. The Charter prescribes no model. Donations, at-cost recovery of parts and materials, instruction offered for a suggested contribution, a stipend paid to a technician out of member dues — any of these **MAY** be compatible with the practice. The test is always the three ethical commitments above. For illustration, the Charter names three arrangements that are **NOT** compatible:

- **Paywalled patterns or how-to material.** A Circuit that charges for access to schematics, repair walkthroughs, or doctrinal content is withholding what Commons of Pattern requires be shared.
- **Surveillance-for-marketing.** A Circuit that collects practitioner-device data as a condition of participation, or that sells observations of its members' work, has broken Privacy of the Keeper.
- **Organized obsolescence as a service.** A Circuit whose paid offering is the diagnosis "throw it away and buy a new one" has traded the practice for its opposite.

The compatible arrangements are not enumerated anywhere. Each Circuit reads the commitments and judges its own house.

### Divergence

A Circuit that fails a **MUST** item has stepped outside the practice. That is a question of fact, not a verdict handed down by a tribunal — the Open Circuit convenes none. What the Charter provides is the language for naming the situation. The Circuit may recognize its own divergence and self-delist. Other practitioners may see it and decline to call the entity a Circuit. The maintainer may apply §4's stewardship to the directory listing.

Forks are not schism. A practitioner or group that wants to maintain a related but distinct practice **MAY** fork the canonical corpus and go its own way (see [Origins](/about/origins) on forks). A fork is honest. A Circuit that quietly drops binding requirements while still claiming the Open Circuit lineage is not.
