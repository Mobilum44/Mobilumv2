<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
	titleTemplate(title) {
		return title ? `${title} - Mobilum` : "Mobilum";
	},
});

useSeoMeta({
	themeColor: "#1a949d",
	ogSiteName: "Mobilum",
	ogLocale: "fr_FR",
	ogType: "website",
	twitterCard: "summary",
	ogImage: "/logos/logo_transparent.png",
	twitterImage: "/logos/logo_transparent.png",
	ogImageAlt: "Logo Mobilum",
	twitterImageAlt: "Logo Mobilum",
	ogImageHeight: "600",
	ogImageWidth: "1100",
	twitterImageHeight: "600",
	twitterImageWidth: "1100",
	description:
		"Entreprise experte dans la fabrication de mobilier urbain en béton fibré. Collections réalisées avec des designers pour tous projets d&#039;aménagement urbain.",
	ogDescription:
		"Entreprise experte dans la fabrication de mobilier urbain en béton fibré. Collections réalisées avec des designers pour tous projets d&#039;aménagement urbain.",
	twitterDescription:
		"Entreprise experte dans la fabrication de mobilier urbain en béton fibré. Collections réalisées avec des designers pour tous projets d&#039;aménagement urbain.",
});
</script>
