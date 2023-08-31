<template>
	<NuxtLayout name="empty" class="Empty">
		<div class="logo_bouton">
			<NuxtImg alt="Logo mobilum" src="\photospages\logos/logo_transparent.png" />
			<Button theme="slide" to="/accueil"> Entrer </Button>
		</div>
	</NuxtLayout>
</template>

<style scoped>
img {
	width: 60%;
}

.Empty {
	background: url("../assets/img/fond-accueil.jpg") center center no-repeat;
	background-size: cover;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo_bouton {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.slide {
	margin-top: 2rem;
}
</style>
