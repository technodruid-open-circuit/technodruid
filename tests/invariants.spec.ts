import { test, expect } from "@playwright/test";
import { readdir, readFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const TESTS_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(TESTS_DIR, "..");
const DIST_DIR = join(PROJECT_ROOT, "dist");

async function listHtmlFiles(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true });
	const files: string[] = [];
	for (const entry of entries) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await listHtmlFiles(full)));
		} else if (extname(entry.name) === ".html") {
			files.push(full);
		}
	}
	return files;
}

async function readAllHtml(): Promise<Array<{ path: string; content: string }>> {
	const files = await listHtmlFiles(DIST_DIR);
	expect(files.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);
	return Promise.all(
		files.map(async (path) => ({
			path: relative(PROJECT_ROOT, path),
			content: await readFile(path, "utf-8"),
		})),
	);
}

test.describe("INV-DOC-1 — No third-party font hosts in built site", () => {
	const FORBIDDEN_FONT_HOSTS =
		/fonts\.(googleapis|gstatic)\.com|use\.typekit\.net|fonts\.cdnfonts\.com|fast\.fonts\.net/;
	test("no rendered HTML references a third-party font host", async () => {
		const pages = await readAllHtml();
		for (const { path, content } of pages) {
			expect(content, `${path} references a third-party font host`).not.toMatch(
				FORBIDDEN_FONT_HOSTS,
			);
		}
	});
});

test.describe("INV-DOC-2 — No surveillance trackers (plausible.io exception)", () => {
	const FORBIDDEN_TRACKERS =
		/google-analytics|googletagmanager|facebook\.net|doubleclick|hotjar|fullstory|mixpanel|segment\.(com|io)|mouseflow|clarity\.ms/;
	test("no rendered HTML references a forbidden surveillance tracker", async () => {
		const pages = await readAllHtml();
		for (const { path, content } of pages) {
			expect(content, `${path} references a forbidden tracker`).not.toMatch(FORBIDDEN_TRACKERS);
		}
	});
});

test.describe("INV-DOC-3 — No third-party comment systems", () => {
	const FORBIDDEN_COMMENTS = /comentario|disqus|commento|hyvor/;
	test("no rendered HTML references a third-party comment system", async () => {
		const pages = await readAllHtml();
		for (const { path, content } of pages) {
			expect(content, `${path} references a forbidden comment system`).not.toMatch(
				FORBIDDEN_COMMENTS,
			);
		}
	});
});

test.describe("INV-LIC-1 — Content license declared on every rendered page", () => {
	const LICENSE_REL = /<(?:link|a)[^>]*rel=["'][^"']*\blicense\b[^"']*["']/i;
	const CC_BY_SA_4 = /creativecommons\.org\/licenses\/by-sa\/4\.0/i;
	test("every rendered HTML page declares a content license", async () => {
		const pages = await readAllHtml();
		for (const { path, content } of pages) {
			const hasLicense = LICENSE_REL.test(content) || CC_BY_SA_4.test(content);
			expect(hasLicense, `${path} has no content license link`).toBe(true);
		}
	});
});

test.describe("INV-NAV-1 — Top nav matches IA §4 (Creed, Codex, Practices, Circuits, Library, About)", () => {
	const NAV_LABELS_IN_ORDER = [
		"Creed",
		"Codex",
		"Practices",
		"Circuits",
		"Library",
		"About",
	] as const;
	test("home page's nav surface contains six IA §4 labels in order (case-insensitive)", async () => {
		const homePath = join(DIST_DIR, "index.html");
		const content = await readFile(homePath, "utf-8");
		const lowered = content.toLowerCase();
		let cursor = 0;
		for (const label of NAV_LABELS_IN_ORDER) {
			const idx = lowered.indexOf(label.toLowerCase(), cursor);
			expect(
				idx,
				`nav label "${label}" missing or out of order in ${relative(PROJECT_ROOT, homePath)}`,
			).toBeGreaterThanOrEqual(0);
			cursor = idx + label.length;
		}
	});
});
