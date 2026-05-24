import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const canonical = defineCollection({
	loader: glob({ base: "./src/content/canonical", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		version: z.string(),
		amendedAt: z.coerce.date(),
		firstPublishedAt: z.coerce.date(),
		printable: z.boolean().default(true),
		downloadableFormats: z.array(z.enum(["pdf", "epub", "txt"])).default([]),
	}),
});

const living = defineCollection({
	loader: glob({ base: "./src/content/living", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lastEditedAt: z.coerce.date(),
		contributors: z.array(z.string()).default([]),
		sourcePath: z.string().optional(),
	}),
});

const wheelEvents = defineCollection({
	loader: glob({ base: "./src/content/wheel", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		kind: z.enum(["founding", "release", "eol", "solstice", "equinox"]),
		date: z.coerce.date(),
		description: z.string(),
		link: z.string().optional(),
	}),
});

const circuits = defineCollection({
	loader: glob({ base: "./src/content/circuits", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		name: z.string(),
		location: z.string(),
		contact: z.string(),
		cadence: z.string(),
		callings: z.array(z.enum(["documenters", "tinkerers", "architects"])),
		localSite: z.string().optional(),
		addedAt: z.coerce.date().optional(),
		// "example" marks placeholder Circuits seeded before real Circuits register.
		kind: z.enum(["example", "real"]).default("real"),
	}),
});

const callings = defineCollection({
	loader: glob({ base: "./src/content/callings", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lineage: z.array(z.string()).default([]),
		curriculum: z.string(),
		lastEditedAt: z.coerce.date(),
		contributors: z.array(z.string()).default([]),
		sourcePath: z.string().optional(),
	}),
});

export const collections = { canonical, living, wheelEvents, circuits, callings };
