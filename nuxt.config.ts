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
	],
	css: ["@/assets/styles/main.scss"],
});
