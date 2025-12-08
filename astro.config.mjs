// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://technodruid.org",
	markdown: {
		shikiConfig: {
			theme: "github-dark-high-contrast",
		},
	},
	image: {
		responsiveStyles: true,
	},
	integrations: [mdx(), sitemap(), icon()],

	vite: {
		plugins: [tailwindcss()],
	},
});
