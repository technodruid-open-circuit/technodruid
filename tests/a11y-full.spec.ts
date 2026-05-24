import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readdirSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const TESTS_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(TESTS_DIR, "..");
const DIST_DIR = join(PROJECT_ROOT, "dist");

// Synchronous walk so the route inventory is known at Playwright test-load
// time; this is what lets each route become its own test() with its own 30s
// budget rather than sharing one aggregate timeout (DECISION-INV-A11Y-TIMEOUT).
function listHtmlFilesSync(dir: string): string[] {
	const out: string[] = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...listHtmlFilesSync(full));
		} else if (extname(entry.name) === ".html") {
			out.push(full);
		}
	}
	return out;
}

function distFileToRoute(absHtmlPath: string): string {
	const rel = relative(DIST_DIR, absHtmlPath).split(/[\\/]/).join("/");
	if (rel === "index.html") return "/";
	if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"index.html".length);
	return "/" + rel.replace(/\.html$/, "");
}

const files = listHtmlFilesSync(DIST_DIR);
const routes = files.map(distFileToRoute).sort();

test.describe("INV-A11Y-1 — Zero axe-core serious/critical violations on every route (WCAG 2.2 AA)", () => {
	test("route inventory is non-empty", () => {
		expect(routes.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);
	});

	for (const route of routes) {
		test(`route ${route} passes WCAG 2.2 AA`, async ({ page }) => {
			await page.goto(route);
			const results = await new AxeBuilder({ page })
				.withTags(["wcag2a", "wcag2aa", "wcag22aa"])
				.analyze();
			const blocking = results.violations.filter(
				(v) => v.impact === "serious" || v.impact === "critical",
			);
			const summary = blocking
				.map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.helpUrl}`)
				.join("\n");
			expect(blocking, `axe-core serious/critical violations on ${route}:\n${summary}`).toEqual([]);
		});
	}
});
