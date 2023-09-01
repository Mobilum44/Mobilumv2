<template>
	<NuxtLayout name="empty" class="Empty" :style="{ backgroundImage: `url(${image})`}">
		<div >
		<div class="logo_bouton">
			<NuxtImg alt="Logo mobilum" src="\logos\logo_transparent.png" />
			<Button theme="slide" to="/accueil"> Entrer </Button>
		</div>
		</div>
	</NuxtLayout>
</template>

<script>
import BackgroundImg from "/backgroundpages/fond-accueil.jpg";
export default {
  data() {
    return {
      image: BackgroundImg,
    };
  }
};
</script>


<style scoped>
img {
	width: 60%;
}

.Empty {
	height: 100%;
	width : 100%;
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
