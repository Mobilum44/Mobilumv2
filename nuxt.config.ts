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
			formToken: "a493b551-6709-4239-a5d0-22886b29442e",
		},
	},
});
