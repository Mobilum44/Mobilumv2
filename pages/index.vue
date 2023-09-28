<template>
	<NuxtLayout name="empty" class="Empty" :style="backgroundStyles('/backgroundpages/fond-accueil.jpg')">
		<div>
			<div class="logo_bouton">
				<NuxtImg
					alt="Logo mobilum"
					width="200"
					src="\logos\logo_transparent.png"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<Button theme="slide" to="/accueil"> Entrer </Button>
				<b>Remettre bien le fond</b>
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
const img = useImage();

definePageMeta({
	layout: "empty",
});

function backgroundStyles(thumbnail: string): { backgroundImage: string } {
	const imgUrl = img(thumbnail, {
		width: 1920,
		quality: 80,
		placeholder: true,
		format: "avif,webp",
	});
	return { backgroundImage: `url('${imgUrl}')` };
}
</script>

<style scoped>
.Empty {
	background-size: cover;
	width: 100%;
}

.logo_bouton {
	display : flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.slide {
	margin-top: 2rem;
}
</style>
