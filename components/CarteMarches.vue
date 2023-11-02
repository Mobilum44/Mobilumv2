<template>
	<article class="CarteMarches shadow">
		<NuxtLink :to="path">
			<NuxtImg :src="img" :alt="alt" height="500" placeholder loading="lazy" quality="60" format="avif,webp" />
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
}

.CarteMarches p {
	border : solid black;
	color :white;
}


.CarteMarches h3 {
	width: 60%;
	position: absolute;
	inset: auto auto 30px 30px;
	margin: 0;
	font-family: "Bebas neue";
	text-transform: uppercase;
	color: white;
}

.CarteMarches:hover img {
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%) blur(1px);
	/*transition: all 0.5s ease;*/
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
