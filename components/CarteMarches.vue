<template>
	<article class="CarteMarches shadow">
		<NuxtLink :to="path">
			<NuxtImg :src="img" :alt="alt" width="300" height="400" placeholder loading="lazy" format="avif,webp" />
			<h3>{{ title }}</h3>
		</NuxtLink>
	</article>
</template>

<script lang="ts" setup>
defineProps<{
	title: string;
	path?: string;
	img: string;
	alt: string;
}>();
</script>

<style scoped>
.CarteMarches {
	display: flex;
	width: fit-content;
	overflow : hidden;
	position : relative;
	height : 500px;
	margin-left : 1.5%;
	margin-bottom : 1.5%;

}

/* ---------------------------------------------------------------------
			Style initial qui a été pété
----------------------------------------------------------------------*/
/*

.CarteMarches {
	margin: 1rem;
	width: 20vw;
	height: 60vh;
	/* border-radius: 10px;
	overflow: hidden;
	position: relative;
	color: white;
	background-color: black;
}
.CarteMarches img {
	position: absolute;
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 1;
	transition: opacity 0.2s ease-out;
}
.CarteMarches h3 {
	position: absolute;
	inset: auto auto 30px 30px;
	margin: 0;
	transition: inset 0.3s 0.3s ease-out;
	font-family: "Bebas neue";
	text-transform: uppercase;
}
.CarteMarches p,
.CarteMarches a {
	position: absolute;
	opacity: 0;
	max-width: 80%;
	transition: opacity 0.3s ease-out;
	color: white;
}
.CarteMarches p {
	inset: auto auto 80px 30px;
}
.CarteMarches a {
	inset: auto auto 40px 30px;
	color: inherit;
	text-decoration: none;
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
		/* border-radius: 10px;
		overflow: hidden;
		position: relative;
		color: white;
	}
}

*/
</style>
