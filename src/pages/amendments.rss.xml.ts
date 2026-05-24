import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_TITLE } from "../consts";

// Canonical entry id → rendered route. The route is owned by individual src/pages/*
// files (e.g., src/pages/codex.astro calls getEntry("canonical", "codex")), not by
// the content collection schema. A shared `route` field on every entry would be the
// canonical fix but is out of scope here; see /archive for the parallel
// commits-link case which sidesteps the issue by only linking to the commit log.
const CANONICAL_ROUTES: Record<string, string> = {
	creed: "/",
	codex: "/codex",
	rite: "/practices/rite",
	glossary: "/practices/glossary",
	"circuits-charter": "/circuits/charter",
	"about-origins": "/about/origins",
};

export async function GET(context: APIContext) {
	const entries = await getCollection("canonical");
	const sorted = [...entries].sort(
		(a, b) => b.data.amendedAt.getTime() - a.data.amendedAt.getTime(),
	);

	return rss({
		title: `${SITE_TITLE} — Canonical Amendments`,
		description:
			"Amendments to the canonical documents. Each item announces a canonical entry at its current version and the date of its most recent amendment.",
		site: context.site ?? "https://technodruid.org",
		items: sorted.map((entry) => ({
			title: `${entry.data.title} — v${entry.data.version}`,
			pubDate: entry.data.amendedAt,
			description: entry.data.description,
			link: CANONICAL_ROUTES[entry.id] ?? `/archive#${entry.id}`,
		})),
	});
}
