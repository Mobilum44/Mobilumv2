<template>
	<NuxtLayout name="empty" class="Empty" :style="backgroundStyles('/backgroundpages/fond-accueil.jpg')">
		<div>
			<div class="logo_bouton">
				<NuxtImg
					alt="Logo mobilum"
					width="200"
					src="/logos/logo_transparent.png"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<Button theme="slide" to="/accueil"> Entrer </Button>
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
		width: 2200,
		quality: 70,
		placeholder: true,
		format: "avif,webp",
	});
	return { backgroundImage: `url('${imgUrl}')` };
}
</script>

<style>
.Empty {
	background-size: cover;
	background-position: bottom;
	background-repeat: no-repeat;
	width: 100%;
}

.logo_bouton {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
</style>
