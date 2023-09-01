<template>
	<NuxtLayout name="empty" class="Empty" :style="{ backgroundImage: `url(${image})`}">
		<div>
			<div class="logo_bouton">
				<NuxtImg alt="Logo mobilum" src="\logos\logo_transparent.png" />
				<Button theme="slide" to="/accueil"> Entrer </Button>
			</div>
		</div>
	</NuxtLayout>
</template>

<script>
definePageMeta({
	layout: "empty",
});

import BackgroundImg from "/backgroundpages/fond-accueil.jpg";
export default {
	data() {
		return {
			image: BackgroundImg,
		};
	},
};
</script>

<style scoped>
img {
	height : 40%;
}
.Empty {
	background-size: cover;
}

.logo_bouton {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height : 100vh;
}

.slide {
	margin-top: 2rem;
}
</style>
