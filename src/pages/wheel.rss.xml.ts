import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_TITLE } from "../consts";

const MONTH_SLUGS = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december",
] as const;

export async function GET(context: APIContext) {
	const events = await getCollection("wheelEvents");
	const sorted = [...events].sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);

	return rss({
		title: `${SITE_TITLE} — Wheel of the Year`,
		description: "The Technodruidic year and its observances.",
		site: context.site ?? "https://technodruid.org",
		items: sorted.map((event) => {
			const monthSlug = MONTH_SLUGS[event.data.date.getUTCMonth()];
			return {
				title: event.data.title,
				pubDate: event.data.date,
				description: event.data.description,
				link: `/practices/wheel#month-${monthSlug}-heading`,
			};
		}),
	});
}
