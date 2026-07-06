# technodruid.org

Source for **technodruid.org**, the self-hosted home of Technodruidism. The site draws a line between **Canonical** content (versioned, slow-changing, set in book typography) and **Living** content (wiki-style, fast-changing, stamped with its last edit), and it is built to be durable, archivable, and respectful of the reader's privacy.

Built with [Astro](https://astro.build/) as a static site.

## Documents

- **[`docs/information-architecture.md`](docs/information-architecture.md)** — the authoritative Information Architecture: what pages exist, what voice each speaks in, and what the navigation looks like.
- **[`docs/invariant_requirements.md`](docs/invariant_requirements.md)** — the mechanically-verifiable invariants the site must always satisfy: no third-party fonts, no trackers, a license declared on every page, an accessibility floor, and so on.
- **[`docs/DECISIONS.md`](docs/DECISIONS.md)** — an append-only log of locked design and policy decisions, with the reasoning behind each.
- **[`docs/prd/`](docs/prd/)** — the Product Requirement Documents tracking the implementation phases.

## Contributing

Where to go depends on what you want to do:

| Intent | Where to go |
|---|---|
| Fix a typo or small error | Edit the file in this repository and open a PR |
| Propose an amendment to Canonical content (Creed, Codex, Rite, Charter, Glossary, Origins) | Open an issue or PR; amendments require explicit version bump per the Canonical doctrine (see IA §3) |
| Add or edit a Living page (community, FAQ, reading list, etc.) | Edit-on-repo links on each Living page in production; PRs welcome |
| Add a repair guide, calling material, or library entry | Open a PR against the relevant content collection |
| Found a Circuit | See `/circuits/charter` once published; until then, see IA §5 |

Forks are encouraged (see DECISION-FORK-POLICY in `docs/DECISIONS.md`).

## Licenses

This project ships **two** licenses because code and content are licensed differently:

- **Code** — [MIT](LICENSE). The build tooling, layouts, components, scripts, and configuration.
- **Content** — [CC BY-SA 4.0](LICENSE-CONTENT). Everything in `src/content/` and the rendered text of the site: the Creed, the Codex, the Rite, the glossary entries, the Wheel-of-Year entries, the Circuit Founding Charter, the About pages, and all other site copy.

Both licenses use the copyright holder `Technodruid contributors`. The dual-license arrangement is recorded in `docs/DECISIONS.md` (DECISION-CODE-LICENSE) and `docs/information-architecture.md` §7.

## Local development

```sh
pnpm install
pnpm dev          # local dev server (default http://localhost:4321)
pnpm build        # production build into ./dist
pnpm preview      # preview the built site
```

Test scripts (`pnpm test`, `pnpm check`, `pnpm verify`) land in a later PRD iteration (SG-22).
