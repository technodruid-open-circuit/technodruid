import { test, expect } from "@playwright/test";
import { access, readdir, readFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SOURCE_REPO_URL } from "../src/consts";

const TESTS_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(TESTS_DIR, "..");
const DIST_DIR = join(PROJECT_ROOT, "dist");

const PHASE_0_PENDING_ROUTES = new Set<string>([
	"/circuits",
	"/circuits/directory",
	// Phase 2 in-flight (remove as each lands):
]);

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

async function pathExists(p: string): Promise<boolean> {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

async function routeResolvesToDistFile(route: string): Promise<boolean> {
	if (route === "/") return pathExists(join(DIST_DIR, "index.html"));
	const trimmed = route.replace(/^\/+/, "").replace(/\/+$/, "");
	const direct = join(DIST_DIR, `${trimmed}.html`);
	const folderIndex = join(DIST_DIR, trimmed, "index.html");
	return (await pathExists(direct)) || (await pathExists(folderIndex));
}

function extractInternalHrefs(html: string): string[] {
	const matches = html.matchAll(/<a\b[^>]*\bhref=["']([^"'#?]+)(?:[#?][^"']*)?["'][^>]*>/gi);
	const hrefs: string[] = [];
	for (const m of matches) {
		const raw = m[1];
		if (raw.startsWith("/") && !raw.startsWith("//")) hrefs.push(raw);
	}
	return hrefs;
}

function extractHeadings(html: string): number[] {
	const levels: number[] = [];
	for (const m of html.matchAll(/<h([1-6])\b[^>]*>/gi)) {
		levels.push(Number(m[1]));
	}
	return levels;
}

test.describe("INV-BUILD-3 — sitemap-index.xml generated after build", () => {
	test("dist/sitemap-index.xml exists", async () => {
		const sitemap = join(DIST_DIR, "sitemap-index.xml");
		expect(await pathExists(sitemap), `${relative(PROJECT_ROOT, sitemap)} missing`).toBe(true);
	});
});

test.describe("INV-NAV-2 — No broken internal links", () => {
	test("every internal anchor href resolves to a dist file or a Phase 0 pending route", async () => {
		const files = await listHtmlFiles(DIST_DIR);
		expect(files.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);

		const STATIC_ASSET_EXTS = new Set([
			".css",
			".js",
			".mjs",
			".cjs",
			".png",
			".jpg",
			".jpeg",
			".webp",
			".gif",
			".svg",
			".ico",
			".avif",
			".woff",
			".woff2",
			".ttf",
			".otf",
			".xml",
			".json",
			".txt",
			".map",
			".pdf",
			".epub",
			".ics",
		]);

		const broken: string[] = [];
		for (const file of files) {
			const html = await readFile(file, "utf-8");
			const hrefs = extractInternalHrefs(html);
			const sourceRel = relative(PROJECT_ROOT, file);
			for (const href of hrefs) {
				if (PHASE_0_PENDING_ROUTES.has(href)) continue;
				const ext = extname(href).toLowerCase();
				if (STATIC_ASSET_EXTS.has(ext)) {
					if (!(await pathExists(join(DIST_DIR, href.replace(/^\/+/, ""))))) {
						broken.push(`${sourceRel}: asset ${href}`);
					}
					continue;
				}
				if (!(await routeResolvesToDistFile(href))) {
					broken.push(`${sourceRel}: route ${href}`);
				}
			}
		}
		expect(broken, `broken internal links:\n${broken.join("\n")}`).toEqual([]);
	});
});

test.describe("INV-A11Y-3 — Exactly one h1 per page; heading levels not skipped", () => {
	test("every dist HTML page has exactly one h1", async () => {
		const files = await listHtmlFiles(DIST_DIR);
		expect(files.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);
		for (const file of files) {
			const html = await readFile(file, "utf-8");
			const h1Count = extractHeadings(html).filter((l) => l === 1).length;
			expect(h1Count, `${relative(PROJECT_ROOT, file)} h1 count`).toBe(1);
		}
	});

	test("every dist HTML page has no skipped heading levels", async () => {
		const files = await listHtmlFiles(DIST_DIR);
		expect(files.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);
		for (const file of files) {
			const html = await readFile(file, "utf-8");
			const levels = extractHeadings(html);
			let previous = 0;
			for (const level of levels) {
				if (previous > 0 && level > previous + 1) {
					throw new Error(`${relative(PROJECT_ROOT, file)} skips from h${previous} to h${level}`);
				}
				previous = level;
			}
		}
	});
});

test.describe("INV-LIV-2 / ISC-P4-EDIT-1 — LivingDoc-rendered pages expose a real, openable EditPageLink", () => {
	test("every LivingDoc-rendered HTML page contains an 'Edit this page' anchor whose URL resolves to a repo path on disk", async () => {
		const files = await listHtmlFiles(DIST_DIR);
		expect(files.length, "dist/ must contain at least one .html file").toBeGreaterThan(0);

		// "Contributors:" is rendered uniquely by src/layouts/LivingDoc.astro and
		// is the strongest fingerprint for "this page is LivingDoc-rendered."
		const livingMarker = "Contributors:";
		const editPrefix = `${SOURCE_REPO_URL}/edit/main/`;
		const editAnchorPattern = /<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>Edit this page<\/a>/i;

		const failures: string[] = [];
		let livingPagesFound = 0;

		for (const file of files) {
			const html = await readFile(file, "utf-8");
			if (!html.includes(livingMarker)) continue;
			livingPagesFound += 1;
			const rel = relative(PROJECT_ROOT, file);

			const match = html.match(editAnchorPattern);
			if (!match) {
				failures.push(`${rel}: no 'Edit this page' anchor`);
				continue;
			}
			const url = match[1];
			if (!url.startsWith(editPrefix)) {
				failures.push(`${rel}: edit URL prefix mismatch (got ${url})`);
				continue;
			}
			const repoRelPath = url.slice(editPrefix.length);
			if (!(await pathExists(join(PROJECT_ROOT, repoRelPath)))) {
				failures.push(`${rel}: edit URL points to non-existent path ${repoRelPath}`);
			}
		}

		expect(livingPagesFound, "expected at least one LivingDoc-rendered page in dist/").toBeGreaterThan(0);
		expect(failures, `EditPageLink failures:\n${failures.join("\n")}`).toEqual([]);
	});
});
