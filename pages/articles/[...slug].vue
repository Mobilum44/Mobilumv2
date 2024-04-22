<template>
	<main class="article">
		<ContentDoc v-slot="{ doc }">
			<div class="article-header">
				<h1>{{ doc.title }}</h1>
				<h2>{{ doc.sub_title }}</h2>
			</div>
			<div v-html="formatText(doc.text)" class="article-body responsive">
			</div>
			<div class="article-carousel wide" v-if="doc.carousel">
				<Carousel :wrap-around="true" snap-align="center" :items-to-show="1">
					<Slide v-for="(item, index) in doc.carousel" :key="index">
						<NuxtImg
							v-if="isImage(item)"
							:src="item"
							:alt="doc.title"
							width="1050"
							height="700"
							quality="100"
							placeholder
							format="avif,webp"
							loading="lazy"
						/>
						<template v-else-if="isYoutube(item)">
							<iframe width="1152" height="648" :src="getEmbeddedUrl(item)" frameborder="0" allowfullscreen></iframe>
						</template>
					</Slide>

					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
			</div>
		</ContentDoc>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useSeoMeta({
	title: "Nos actualités",
});

function formatText(text : string){
	text = text.replace(/\n\n/g, '</p><p><br>');
	text = text.replace(/\n/g, '</p><p>')
	return text;
}

const doc = ref<any>(null);

const isImage = (url: string) => /\.(gif|jpg|jpeg|tiff|png)$/i.test(url);
const isYoutube = (url: string) => /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/i.test(url);

const getEmbeddedUrl = (url: string) => {
	const videoId = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
	if (videoId) {
		return `https://www.youtube.com/embed/${videoId[1]}`;
	} else {
		return ''; 
	}
};
</script>

<style scoped>
h1 {
	color: black;
	border: none;
	border-bottom: solid black 1px;
	text-align: center;
	font-size: 300%;
	margin: 0;
}

h2 {
	color: black;
	border-bottom: solid black 1px;
	text-align: center;
	font-family: "Montserrat";
	font-size: 200%;
	border: 0;
}


.article {
	margin-top: 120px;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.article-header {
	padding: 2rem;
	margin-top: 2rem;
	width: 80%;
	border: solid black 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.article-body {
	text-align: left;
	margin-top: 4%;
	width: 80%;
}

.article-carousel {
	width: 100%;
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.article-carousel img {
	max-width: 100%;
	object-fit: contain;
}

/* ----------------------------------------------------------------------------------
		Gammes
-----------------------------------------------------------------------------------*/

.famille-card img {
	object-fit: cover;
	width: 100%;
	opacity: 1;
	z-index: 99;
}

.famille-card p {
	white-space: normal;
	width: 80%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	text-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

	z-index: 1;
	opacity: 0;

	font-family: "Bebas Neue";
	font-weight: 400;
	font-size: 1.5rem;
	text-decoration: none;
	text-align: center;
	letter-spacing: 1px;
	color: white;
}

.famille-card:hover p {
	opacity: 1;
	transition: all 0.1s ease-in-out;
}

.famille-card:hover img {
	opacity: 0.3;
	transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 950px) {
	.article-header {
		padding: 0.8rem;
		width: 100%;
		text-align: center;
	}

	h1 {
		width: 100%;
		padding: 0;
		margin: 0;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 1.5rem;
		border: none;
	}

	h2 {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}

	.chapeau {
		width: 100%;
	}

	.vicat {
		width: 100%;
	}

	.article-info-ligne {
		width: 100%;
	}

	.responsive {
		flex-direction: column;
		align-items: center;
	}
}
</style>
