export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxt/image",
		"@nuxtjs/robots",
		"@nuxt/content",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					"Bebas Neue": {
						wght: [400],
					},
					Montserrat: {
						wght: [400, 500, 600, 700],
					},
				},
			},
		],
		"nuxt-simple-sitemap",
		"vue3-carousel-nuxt",
		"nuxt-gtag",
	],

	gtag: {
		id: "G-QRKPE667BJ",
	},

	css: ["@/assets/styles/main.scss"],
	runtimeConfig: {
		public: {
			siteUrl: "https://www.mobilum-france.com/",
			formToken: "d28b4532-34cc-42fa-b97e-1b15769c0b13",
		},
	},
});
