# technodruid.org

Source for **technodruid.org** — a self-hosted, doctrinally-aligned site for Technodruidism. The site distinguishes **Canonical** content (versioned, slow-changing, book-typography) from **Living** content (wiki-style, fast-changing, last-edited stamp), and is built to be durable, archivable, and respectful of the reader's privacy.

Built with [Astro](https://astro.build/) as a static site.

## Documents

- **[`docs/information-architecture.md`](docs/information-architecture.md)** — the authoritative Information Architecture. What pages exist, what register they speak in, what the navigation looks like.
- **[`docs/invariant_requirements.md`](docs/invariant_requirements.md)** — the mechanically-verifiable invariants the site must always satisfy (no third-party fonts, no trackers, license declared on every page, accessibility floor, etc.).
- **[`docs/DECISIONS.md`](docs/DECISIONS.md)** — append-only log of locked design and policy decisions with reasoning.
- **[`docs/prd/`](docs/prd/)** — Product Requirement Documents tracking the implementation phases.

## Contributing

Contribution intent determines the path:

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
- **Content** — [CC BY-SA 4.0](LICENSE-CONTENT). Everything in `src/content/` and the rendered text of the site: the Creed, the Codex, the Rite, glossary entries, Wheel-of-Year entries, the Grove charter, About pages, and all other site copy.

Both licenses use the copyright holder `Technodruid contributors`. The dual-license arrangement is recorded in `docs/DECISIONS.md` (DECISION-CODE-LICENSE) and `docs/information-architecture.md` §7.

## Local development

```sh
pnpm install
pnpm dev          # local dev server (default http://localhost:4321)
pnpm build        # production build into ./dist
pnpm preview      # preview the built site
```

Test scripts (`pnpm test`, `pnpm check`, `pnpm verify`) land in a later PRD iteration (SG-22).
