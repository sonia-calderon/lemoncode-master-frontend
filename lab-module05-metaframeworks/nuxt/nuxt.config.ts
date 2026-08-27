// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			siteName: "Rurall",
			apiBaseUrl: "http://localhost:3001",
		},
	},
	modules: ["@nuxt/fonts", "@nuxt/image"],

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

	routeRules: {
		"/houses/1": { prerender: true },
		"/houses/2": { prerender: true },
		"/houses/3": { prerender: true },
		"/houses/4": { prerender: true },
		"/houses/5": { prerender: true },
		"/houses/6": { prerender: true },
	},
});
