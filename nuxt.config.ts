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
		'nuxt-gtag',
	],

	gtag: {
		id: 'G-386609275'
	  },
  
	css: ["@/assets/styles/main.scss"],
	runtimeConfig: {
		public: {
			siteUrl: "https://www.mobilum-france.com/",
		},
	},
});
