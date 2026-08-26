// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			sitename: "Rurall - Casas Rurales",
			apiBaseUrl: "http://localhost:3001",
			picturesBaseUrl: "http://localhost:3001",
		},
	},
	modules: ["@nuxt/fonts"],

	css: ["normalize.css", "~/assets/css/globals.css"],

	app: {
		head: {
			htmlAttrs: {
				lang: "es",
			},
			link: [
				{
					rel: "icon",
					href: "/favicon.ico",
					sizes: "any",
				},
			],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
