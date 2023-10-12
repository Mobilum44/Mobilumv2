<template>
	<article class="CarteMarches shadow">
		<NuxtLink :to="path">
			<NuxtImg :src="img" :alt="alt" height="500" placeholder loading="lazy" format="avif,webp" />
			<h3>{{ title }}</h3>
			<p>{{ cover_text }}</p>
		</NuxtLink>
	</article>
</template>

<script lang="ts" setup>
defineProps<{
	title: string;
	path?: string;
	img: string;
	cover_text: string;
	alt: string;
}>();
</script>

<style scoped>
.CarteMarches {
	display: flex;
	overflow: hidden;
	position: relative;
	height: 480px;
	width: 100%;
	margin-left: 1.5%;
	margin-bottom: 1.5%;
}
.CarteMarches img {
	object-fit: contain;
	height : 100%;
	object-position: 50% 50%;
	/* Cartes zoomées. A corriger https://image.nuxt.com/usage/nuxt-img#sizes */
}
.CarteMarches h3 {
	width: 60%;
	position: absolute;
	inset: auto auto 30px 30px;
	margin: 0;
	transition: inset 0.3s 0.3s ease-out;
	font-family: "Bebas neue";
	text-transform: uppercase;
	color: white;
}
.CarteMarches:hover h3 {
	inset: auto auto 220px 30px;
	transition: inset 0.3s;
}
.CarteMarches:hover p,
.CarteMarches:hover a {
	opacity: 1;
	transition: opacity 0.3s 0.1s ease-in;
}
.CarteMarches:hover img {
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%) blur(1px);
	transition: all 0.5s ease;
	opacity: 80%;
}

@media only screen and (max-width: 950px) {
	ul {
		display: flex;
		justify-content: center;
	}
	.CarteMarches {
		margin: 1rem;
		width: 90%;
		height: 60vh;
		/* border-radius: 10px; */
		overflow: hidden;
		position: relative;
		color: white;
	}
}
</style>
