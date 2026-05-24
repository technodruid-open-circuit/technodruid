# Invariant Requirements — technodruid.org

> Canonical source for invariants. The `prd_work_loop` skill reads this file before any PRD and re-verifies every `INV-*` item on every iteration.

These invariants encode the doctrinal commitments from `docs/information-architecture.md` §1 (sincerity/construction duality) and §7 (technical and doctrinal commitments) as mechanically verifiable rules. If any invariant slips, per the IA, the site is no longer practicing what it preaches.

---

## Doctrine — Privacy of the Keeper

### INV-DOC-1 — No third-party font hosts

No HTML, CSS, or runtime fetch references any of: `fonts.googleapis.com`, `fonts.gstatic.com`, `use.typekit.net`, `fonts.cdnfonts.com`, `fast.fonts.net`, or any other third-party font CDN.

**How to verify:** `pnpm build` then `grep -rE 'fonts\.(googleapis|gstatic)\.com|use\.typekit\.net|fonts\.cdnfonts\.com|fast\.fonts\.net' dist/` returns 0 matches.

### INV-DOC-2 — No surveillance trackers

No HTML or script references any of: `google-analytics.com`, `googletagmanager.com`, `www.google-analytics.com`, `facebook.net`, `connect.facebook.net`, `doubleclick.net`, `hotjar.com`, `fullstory.com`, `mixpanel.com`, `segment.com`, `segment.io`, `mouseflow.com`, `clarity.ms`.

**Exception:** `plausible.io` is the sole permitted third-party tracker per `DECISION-PLAUSIBLE-KEEP` (see `DECISIONS.md`). The exception is scoped to Plausible Cloud's current privacy-preserving model (no cookies, no cross-site tracking, no personal-data collection) and is revisited under that DECISION's `Revisit if:` clause.

**How to verify:** `pnpm build` then `grep -rE 'google-analytics|googletagmanager|facebook\.net|doubleclick|hotjar|fullstory|mixpanel|segment\.(com|io)|mouseflow|clarity\.ms' dist/` returns 0 matches.

### INV-DOC-3 — No third-party comment systems

No reference to `comentario.js`, `disqus.com`, `commento.io`, `hyvor.com`, or comparable external comment loaders.

**How to verify:** `grep -rE 'comentario|disqus|commento|hyvor' src/ public/` returns 0 matches.

### INV-DOC-4 — Self-hosted analytics path (if used)

Any analytics script must be served from a domain owned by the project, OR be `plausible.io` under the explicit `DECISION-PLAUSIBLE` exception above.

### INV-DOC-5 — No anti-archival headers or meta

No `X-Robots-Tag: noarchive`, no `<meta name="robots" content="noarchive">`, no `<meta name="googlebot" content="noarchive">`. The Internet Archive is welcome.

**How to verify:** `grep -rE 'noarchive' dist/` returns 0 matches.

---

## Doctrine — Commons of Pattern

### INV-LIC-1 — Content license is declared on every page

Every rendered page's HTML includes either a visible footer link to the content license (`/license` or external CC BY-SA URL) or a `<link rel="license">` element pointing to the canonical CC BY-SA 4.0 URL.

**How to verify:** for each `*.html` in `dist/`, presence of either the footer license link OR `<link rel="license">`.

### INV-LIC-2 — License files present in repo

`LICENSE-CONTENT` exists at repo root and contains CC BY-SA 4.0 text. A code-license file exists at repo root (UNLICENSE.md, LICENSE, or LICENSE-CODE) and its content matches the license declared in `DECISIONS.md` `DECISION-CODE-LICENSE`.

---

## Canonical Documents

### INV-CAN-1 — Canonical pages declare version + amendment date

Any page rendered with the `CanonicalDoc` layout displays both a `version` string and an `amendedAt` date in its footer.

**How to verify:** for each canonical page in `dist/`, the rendered HTML contains both `data-version=` (or a visible version label) and a `<time>` element bound to the amendedAt date.

### INV-CAN-2 — Canonical pages link to source

Any `CanonicalDoc`-rendered page contains a link to the canonical source repository (the file's location in version control) AND a link to the page's revision history.

**How to verify:** grep each canonical page's HTML for the configured source-repo base URL.

### INV-CAN-3 — Canonical content frontmatter completeness

Every entry in the `canonical` content collection has frontmatter fields: `title`, `description`, `version`, `amendedAt`, `firstPublishedAt`. Schema enforces this; `astro check` is the verifier.

---

## Living Documents

### INV-LIV-1 — Living pages declare last-edited and contributors

Any page rendered with the `LivingDoc` layout displays `lastEditedAt` and a contributor list (may be a single entry).

### INV-LIV-2 — Living pages expose an edit link

Any `LivingDoc`-rendered page has a visible "Edit this page" link constructed from the page's source file path and the configured source-repo base URL.

---

## Accessibility

### INV-A11Y-1 — WCAG 2.2 AA: zero axe-core violations

Playwright + `@axe-core/playwright` returns zero violations of severity `serious` or `critical` on every page in the route inventory.

### INV-A11Y-2 — Every page has a unique, descriptive `<title>`

No two pages share the same `<title>` element. No page title is empty or equal to the bare site name.

### INV-A11Y-3 — One `<h1>` per page; heading levels not skipped

Each page has exactly one `<h1>` and never jumps from `<h1>` to `<h3>` without `<h2>`.

### INV-A11Y-4 — Print stylesheet present

Every page's CSS includes a `@media print` block (directly or via imported stylesheet).

**How to verify:** `grep -r '@media print' src/styles/` returns at least one match AND each layout imports a stylesheet that contains one.

---

## Build & Code Quality

### INV-BUILD-1 — `pnpm build` exits 0 with zero warnings

`pnpm build` produces exit code 0. Astro reports zero warnings (stderr is empty of warning lines).

### INV-BUILD-2 — `pnpm astro check` passes

`pnpm astro check` reports zero errors, zero warnings, zero hints.

### INV-BUILD-3 — Sitemap is generated

`dist/sitemap-index.xml` exists after build and references at least one sitemap file containing all canonical and living pages.

### INV-CODE-1 — No inline colors / fonts / spacing

No `style="color:`, `style="font-family:`, `style="background:`, `style="margin:`, or `style="padding:` literals in `src/`. Visual properties live in Tailwind theme tokens or component-level CSS.

**Exception:** dynamic style values bound to props (e.g., `style={\`max-width: ${width}ch\`}`) are permitted when the value comes from a typed prop, not a literal.

**How to verify:** `grep -rE 'style="(color|font-family|background|margin|padding):' src/` returns 0 matches (excluding dynamic bindings).

### INV-CODE-2 — No `any` in TypeScript

`grep -rE ': any\b|<any>|as any' src/` returns 0 matches in `.ts` and `.astro` files. Use `unknown` and narrow.

### INV-CODE-3 — Content collection schemas typed in `src/content.config.ts`

The single source of truth for content schema lives in `src/content.config.ts`. No ad-hoc Zod schemas duplicated in pages or components.

### INV-DOC-NAME — Identifier-derivable JSDoc forbidden

For any TypeScript file with JSDoc blocks: each sentence must convey information not derivable from the identifier name, type signature, `export` keyword, or call site. Apply this litmus test during ACT. (See `prd_work_loop` ACT phase.)

---

## Navigation & Linking

### INV-NAV-1 — Top nav matches IA §4

`NavBar.astro` renders, in order: Creed (`/`), Codex (`/codex`), Practices (`/practices`), Circuits (`/circuits`), Library (`/library`), About (`/about`). No other top-level entries. "Contribute" is a footer link only.

### INV-NAV-2 — No broken internal links

For each `<a href="/...">` in the built site, the target path exists in `dist/`. Build-time link-checker passes.

### INV-NAV-3 — Footer present and consistent across all pages

`Footer.astro` is rendered on every page (canonical and living) and contains: license link (CC BY-SA 4.0 with `rel="license"`), source repository link, "Contribute" link. The license link is the canonical statement of rights — no separate `©` line, no "All Rights Reserved" (per `DECISION-FOOTER-COPYRIGHT`, amended 2026-05-17).

**How to verify:** for each `*.html` in `dist/`, presence of the license link AND absence of any `©` / `&copy;` / `&#169;` substring within `<footer>`.

---

## Process

### INT-PROC-1 — No build failures between iterations.

An iteration is not complete if there is a build failure or a typecheck failure.

---

## Maintenance

These invariants are subject to amendment under the same public-PR process as the IA itself. Adding, weakening, or removing an `INV-*` entry requires updating `DECISIONS.md` with the rationale and a `Revisit if:` clause.
