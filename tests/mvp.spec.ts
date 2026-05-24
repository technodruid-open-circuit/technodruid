import { test, expect } from "@playwright/test";

interface MvpRoute {
	route: string;
	h1: string;
	hasToc?: boolean;
}

const MVP_ROUTES: readonly MvpRoute[] = [
	{ route: "/", h1: "The Creed" },
	{ route: "/codex", h1: "The Codex", hasToc: true },
	{ route: "/practices/rite", h1: "The Rite of the Open Circuit" },
	{ route: "/about/community", h1: "Community" },
	{ route: "/about/origins", h1: "Origins" },
	{ route: "/about/contact", h1: "Contact" },
];

test.describe("ISC-MVP-SMOKE-1 — Six MVP routes return 200 with expected H1, nav, footer", () => {
	for (const { route, h1, hasToc } of MVP_ROUTES) {
		test(`${route} — 200 + h1 "${h1}" + nav + footer${hasToc ? " + TOC" : ""}`, async ({ page }) => {
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

			if (hasToc) {
				const tocLocator = page.locator('main nav[aria-label="Table of contents"]');
				await expect(tocLocator, `${route} TOC nav present`).toHaveCount(1);
			}
		});
	}
});

test.describe("ISC-MVP-SMOKE-1 — Custom 404 page is served for missing routes", () => {
	test("an intentionally-missing path returns 404 and renders the custom 404 content", async ({ page }) => {
		const response = await page.goto("/this-route-does-not-exist-and-never-will/");
		expect(response, "no HTTP response for missing route").not.toBeNull();
		expect(response!.status(), "missing route HTTP status").toBe(404);

		const randomLink = page.locator("main #random-page-link");
		await expect(randomLink, "custom 404 random-page-link present").toHaveCount(1);

		const h1Locator = page.locator("main h1");
		await expect(h1Locator, "404 h1 count (scoped to main)").toHaveCount(1);
		await expect(h1Locator, "404 h1 text").toHaveText("Page not found");
	});
});
