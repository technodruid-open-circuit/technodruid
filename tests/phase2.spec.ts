import { test, expect } from "@playwright/test";

interface Phase2Route {
	route: string;
	h1: string;
}

const PHASE_2_ROUTES: readonly Phase2Route[] = [
	{ route: "/practices", h1: "Practices" },
	{ route: "/practices/wheel", h1: "Wheel of the Year" },
	{ route: "/practices/glossary", h1: "Glossary" },
	{ route: "/circuits/charter", h1: "Circuit Founding Charter" },
	{ route: "/library/reading", h1: "Reading" },
	{ route: "/contribute", h1: "Contribute" },
];

test.describe("ISC-P2-SMOKE-1 — Six Phase 2 HTML routes return 200 with expected H1, nav, footer", () => {
	for (const { route, h1 } of PHASE_2_ROUTES) {
		test(`${route} — 200 + h1 "${h1}" + nav + footer`, async ({ page }) => {
			const response = await page.goto(route);
			expect(response, `no HTTP response for ${route}`).not.toBeNull();
			expect(response!.status(), `${route} HTTP status`).toBe(200);

			const h1Locator = page.locator("main h1");
			await expect(h1Locator, `${route} h1 count (scoped to main)`).toHaveCount(1);
			await expect(h1Locator, `${route} h1 text`).toHaveText(h1);

			const navLocator = page.locator("header .internal-links");
			await expect(navLocator, `${route} nav (.internal-links) present`).toHaveCount(1);

			const footerLocator = page.locator("body > main > footer");
			await expect(footerLocator, `${route} page footer present`).toHaveCount(1);
		});
	}
});

test.describe("ISC-P2-SMOKE-1 — /practices/wheel.ics returns a valid RFC 5545 ICS feed", () => {
	test("ICS endpoint serves text/calendar with VCALENDAR + 4 VEVENTs (RFC 5545 §3)", async ({
		request,
	}) => {
		const response = await request.get("/practices/wheel.ics");
		expect(response.status(), "ICS HTTP status").toBe(200);

		const contentType = response.headers()["content-type"] ?? "";
		expect(contentType, "ICS Content-Type").toContain("text/calendar");

		const body = await response.text();

		expect(body.startsWith("BEGIN:VCALENDAR"), "ICS starts with BEGIN:VCALENDAR").toBe(true);
		expect(body.trimEnd().endsWith("END:VCALENDAR"), "ICS ends with END:VCALENDAR").toBe(true);

		const crlfCount = (body.match(/\r\n/g) ?? []).length;
		const bareLfCount = (body.match(/(?<!\r)\n/g) ?? []).length;
		expect(crlfCount, "ICS has CRLF line endings (RFC 5545 §3.1)").toBeGreaterThan(0);
		expect(bareLfCount, "ICS has no bare LF line endings (RFC 5545 §3.1)").toBe(0);

		expect(body, "ICS declares VERSION:2.0").toMatch(/^VERSION:2\.0$/m);
		expect(body, "ICS declares PRODID").toMatch(/^PRODID:/m);

		const beginEventCount = (body.match(/^BEGIN:VEVENT$/gm) ?? []).length;
		const endEventCount = (body.match(/^END:VEVENT$/gm) ?? []).length;
		expect(beginEventCount, "ICS BEGIN:VEVENT count").toBe(4);
		expect(endEventCount, "ICS END:VEVENT count").toBe(4);

		expect((body.match(/^UID:/gm) ?? []).length, "ICS UID count (required per VEVENT)").toBe(4);
		expect(
			(body.match(/^DTSTAMP:/gm) ?? []).length,
			"ICS DTSTAMP count (required per VEVENT)",
		).toBe(4);
		expect(
			(body.match(/^DTSTART(;[^:]+)?:/gm) ?? []).length,
			"ICS DTSTART count (required per VEVENT)",
		).toBe(4);
		expect((body.match(/^SUMMARY:/gm) ?? []).length, "ICS SUMMARY count").toBe(4);

		for (const summary of [
			"Spring Equinox",
			"Summer Solstice",
			"Autumn Equinox",
			"Winter Solstice",
		]) {
			expect(body, `ICS contains SUMMARY:${summary}`).toContain(`SUMMARY:${summary}`);
		}

		const dtstartDates = [...body.matchAll(/^DTSTART;VALUE=DATE:(\d{8})$/gm)].map((m) => m[1]);
		expect(dtstartDates.length, "ICS DTSTART;VALUE=DATE count").toBe(4);
		for (const date of dtstartDates) {
			expect(date, "ICS DTSTART date is YYYYMMDD").toMatch(/^\d{8}$/);
		}
	});
});

test.describe("ISC-P2-SMOKE-1 — /wheel.rss.xml returns a valid RSS 2.0 feed (date desc)", () => {
	test("RSS endpoint serves XML with rss[version=2.0] + 4 items in date-descending order", async ({
		request,
	}) => {
		const response = await request.get("/wheel.rss.xml");
		expect(response.status(), "RSS HTTP status").toBe(200);

		const contentType = response.headers()["content-type"] ?? "";
		expect(contentType, "RSS Content-Type is XML").toMatch(/xml/);

		const body = await response.text();

		expect(body, "RSS starts with XML declaration").toMatch(/^<\?xml\s/);
		expect(body, "RSS declares version=\"2.0\"").toMatch(/<rss[^>]*\bversion="2\.0"/);
		expect(body, "RSS contains <channel>").toContain("<channel>");

		const itemCount = (body.match(/<item>/g) ?? []).length;
		expect(itemCount, "RSS <item> count").toBe(4);

		const titles = [...body.matchAll(/<item>[\s\S]*?<title>([^<]+)<\/title>/g)].map((m) => m[1]);
		expect(titles, "RSS item titles").toEqual([
			"Winter Solstice",
			"Autumn Equinox",
			"Summer Solstice",
			"Spring Equinox",
		]);

		const pubDates = [...body.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((m) =>
			Date.parse(m[1]),
		);
		expect(pubDates.length, "RSS <pubDate> count").toBe(4);
		for (let i = 1; i < pubDates.length; i++) {
			expect(
				pubDates[i - 1],
				`RSS pubDate ${i - 1} (${pubDates[i - 1]}) must be >= pubDate ${i} (${pubDates[i]})`,
			).toBeGreaterThanOrEqual(pubDates[i]);
		}

		const guidCount = (body.match(/<guid\b/g) ?? []).length;
		expect(guidCount, "RSS <guid> count (one per item)").toBe(4);
	});
});
