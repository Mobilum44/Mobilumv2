<template>
	<ContentDoc v-slot="{ doc }">
		<section class="page_top content-produits">
			<div class="title">
				<h1 class="h1_title">
					{{ doc.title }}
				</h1>
				<p>{{ doc.designer }}</p>
			</div>
		</section>
		<section class="sub__section">
			<div class="gallery">
				<div v-for="(img, i) in doc.carousel" :key="i">
					<NuxtImg :src="img" width="1100" height="800" placeholder format="avif,webp" loading="lazy" />
				</div>
				<carousel :img="doc.carousel" />
			</div>
		</section>

		<!-- Contenu conditionnel : https://vuejs.org/guide/essentials/conditional.html -->
		<!-- <div v-if="doc.dureeDuProjet">
				<h1>Durée du projet</h1>
				<p>{{ doc.dureeDuProjet }}</p>
			</div> -->

		<div class="sub__section sub__section__content general">
			<div class="general-filaire" v-for="(img, i) in doc.filaire" :key="i">
				<NuxtImg :src="img" height="300px" />
			</div>

			<div class="general-infos">
				<!--- Mettre bien en forme le document, et nettoyer un peu le code-->
				<h2 class="general-titre">Caractéristiques</h2>
				<p>
					<em>Matériau :</em> : {{ doc.materiau }}<br />
					<em>Poids</em> : {{ doc.poids }}kg<br />
					<em>Dimensions</em> : {{ doc.dimensions }}mm <br />
					<em>Format :</em> {{ doc.format }}
				</p>
				<p class="description">
					{{ doc.description }}
				</p>
			</div>
		</div>

		<section class="sub__section">
			<h2>Nos finitions</h2>
			<div class="sub__section__content">
				<div class="sub__finitions">
					<p class="strong">Couleurs naturelles</p>
					<div class="type">
						<div class="type__finition">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-gris-fonce.jpg"
								width="200vw"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Gris foncé<br />(BCV Brut)</p>
						</div>
						<div class="type__finition">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-blanc.jpg"
								width="200vw"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Blanc</p>
						</div>
					</div>
				</div>

				<div class="sub__finitions">
					<p class="strong">Teinté dans la masse</p>
					<div class="type">
						<div class="type__finition">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-taupe.jpg"
								width="200vw"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Taupe</p>
						</div>
						<div class="type__finition">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-rose.jpg"
								width="200vw"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Rose pastel</p>
						</div>
						<div class="type__finition">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-bleu.jpg"
								width="200vw"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Bleu pastel</p>
						</div>
					</div>
				</div>

				<div class="sub__finitions">
					<p class="strong">Peinture polyuréthane</p>
					<div class="type">Tous les RAL sont possibles. Consultez-nous pour discuter de votre projet.</div>
				</div>
			</div>
		</section>

		<section class="sub__section">
			<h2>Dans la même gamme...</h2>
			<ul>
				<li v-for="relatedProduct in relatedProducts" :key="relatedProduct._id">
					<NuxtLink :to="relatedProduct._path">
						<NuxtImg
							:src="relatedProduct.cover_image"
							:alt="relatedProduct.title"
							width="200"
							fit="cover"
							format="avif,webp"
							placeholder
							loading="lazy"
						/>
						<p>{{ relatedProduct.title }}</p>
					</NuxtLink>
				</li>
			</ul>
		</section>
	</ContentDoc>
</template>

<script lang="ts" setup>
import { Product } from "@/assets/types";

const route = useRoute();
const { data: currentProduct } = useAsyncData("product", () => queryContent(route.fullPath).findOne() as Promise<Product>);
const { data: relatedProducts } = await useAsyncData(
	"relatedProducts",
	() =>
		queryContent("/produit")
			.where({ gamme: currentProduct.value!.gamme })
			.only(["_path", "title", "cover_image", "_id"])
			.without(currentProduct.value!._id)
			.limit(3)
			.find() as Promise<Product[]>,
);
</script>

<style scoped>
.content-produits {
	margin-top: 17vh;
}
.return {
	height: 0;
	overflow: hidden;
	border: none;
}
/*-----------------------------------------------------------------
		Zone titre
	---------------------------------------------------------------*/
.page_top {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.title {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title,
p {
	margin: 0;
	padding: 0;
}

.h1_title {
	border-bottom: solid black 1px;
	text-align: center;
}

h1 {
	font-weight: 200;
	text-transform: none;
	text-align: center;
	border: none;
	color: black;
	padding: 0;
	margin: 0;
	margin-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
		Zone filaire
	---------------------------------------------------------------*/
.general {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
}

.general-titre {
	padding-left: 0;
	margin-left: 0;
}
.general-filaire {
	height: 80%;
}

.general-infos {
	width: 65%;
}

/*-----------------------------------------------------------------
		Zone galerie
	---------------------------------------------------------------*/
.gallery {
	margin-top: 4rem;
}
/*-----------------------------------------------------------------
		Sections générales
	---------------------------------------------------------------*/
.sub__section {
	width: 80%;
}

.strong {
	font-family: montserrat;
}
.sub__section__content {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.description {
	margin-top: 2rem;
}

.sub__finitions {
	margin-top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 33%;
}
.type {
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;
	align-items: flex-start;
}

.type__finition {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.color_square {
	height: 10vh;
	width: 10vh;
}
/* ------------------------------------------------------------------------------------------
RESPONSIVE TELEPHONES
--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	.return {
		height: 2rem;
		overflow: hidden;
		border: solid black 1px;
	}

	.gallery {
		margin: 0;
	}

	.sub__section__content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sub__section__content p {
		padding-top: 2rem;
	}
}
</style>
