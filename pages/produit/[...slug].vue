<template>
	<ContentDoc v-slot="{ doc }">
		<section class="page_top content-produits">
			<div class="title">
				<h1>
					{{ doc.title }}
				</h1>
				<p>{{ doc.designer }}</p>
			</div>
		</section>

		<section class="sub-section-carousel">
			<Carousel
				:wrap-around="true"
				snap-align="center"
				:items-to-show="1"
				:touchDrag="doc.carousel.length > 1"
				:mouseDrag="doc.carousel.length > 1"
			>
				<Slide v-for="(img, i) in doc.carousel" :key="i">
					<NuxtImg
						:src="img.image"
						sizes="100vw sm:80vw md:600px lg:800px xl:1000px xxl:1200px"
						quality="80"
						placeholder
						format="avif,webp"
						loading="lazy"
					/>
				</Slide>

				<template #addons="{ slidesCount }">
					<Navigation v-if="slidesCount > 1" />
					<Pagination v-if="slidesCount > 1" />
				</template>
			</Carousel>
		</section>

		<div class="sub-section general responsive">
			<div class="general-filaire" v-for="(img, i) in doc.filaire" :key="i">
				<NuxtImg
					:src="img.image"
					:alt="img.image_title || 'Filaire produit Mobilum'"
					placeholder
					format="avif,webp"
					loading="lazy"
					height="300"
				/>
			</div>

			<div class="general-infos">
				<!--- Mettre bien en forme le document, et nettoyer un peu le code-->
				<h2 class="general-titre">Caractéristiques</h2>
				<p>
					<em>Matériau :</em> {{ doc.materiau }} <br />
					<em>Poids :</em> {{ doc.poids }}kg<br />
					<em>Dimensions :</em> {{ doc.dimensions }}mm <br />
					<em>Format :</em> {{ doc.format }}
				</p>

				<div v-if="doc.motifs" class="general-motifs responsive">
					<div class="general-content"><em>Finitions : </em></div>
					<div class="general-content responsive-row">
						<div class="content">
							<NuxtImg
								src="/produits/motif-lisse.jpg"
								alt="surface lisse mobilier BFUP Mobilum"
								fit="cover"
								height="50"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Lisse</p>
						</div>
						<div v-if="doc.motif_vegetal" class="content">
							<NuxtImg
								src="/produits/motif-vegetal-filaire-2.jpg"
								alt="motif mobilier BFUP mobilum"
								fit="cover"
								height="50"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Végétal</p>
						</div>

						<div v-if="doc.motif_window" class="content">
							<NuxtImg
								src="/produits/motif-window-filaire.jpg"
								alt="Couleurs RAL des boites aux lettres Mobilum"
								fit="cover"
								height="50"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Window</p>
						</div>
					</div>

					<p class="general-description">
						{{ doc.description }}
					</p>
				</div>
			</div>
		</div>

		<section class="sub-section">
			<h2>Nos finitions</h2>

			<div class="sub-section-content responsive">
				<div class="content">
					<p class="strong">Couleurs naturelles</p>

					<div class="type">
						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-gris-fonce.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Gris foncé</p>
						</div>

						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-gris-clair2.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Gris clair</p>
						</div>

						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-blanc.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Blanc</p>
						</div>
					</div>
				</div>

				<div class="content">
					<p class="strong">Teinté dans la masse</p>
					<ul>
						<li class="list-element">Taupe</li>
						<li class="list-element">Rose pastel</li>
						<li class="list-element">Bleu pastel</li>
					</ul>
					<!-----------
					<div class="type">
						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-taupe.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Taupe</p>
						</div>
						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-rose.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Rose pastel</p>
						</div>
						<div class="type-color">
							<NuxtImg
								class="color_square"
								alt="couleur du BFUP Mobilum"
								src="/photospages/couleur-bfup-bleu.jpg"
								width="50"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>Bleu pastel</p>
						</div>
					</div> ------------>
				</div>

				<div class="content">
					<p class="strong">Peinture polyuréthane</p>
					<div class="type">Tous les RAL sont possibles. Consultez-nous pour discuter de votre projet.</div>
				</div>
			</div>
			<p class="strong">Possibilité d'envoi de plaques échantillons</p>
		</section>

		<section class="sub-section">
			<div v-if="doc.portes">
				<h2>Les portes</h2>
				<div class="sub-section-content responsive">
					<div class="content">
						<NuxtImg
							src="/produits/porte-hook-bois.jpg"
							alt="Porte hook en bois douglas"
							fit="cover"
							height="200"
							format="avif,webp"
							placeholder
							loading="lazy"
						/>
						<p>Bois</p>
					</div>

					<div class="content">
						<NuxtImg
							src="/produits/porte-hook-alu-compo.jpg"
							alt="Porte hook en alu composite avec motifs"
							fit="cover"
							height="200"
							format="avif,webp"
							placeholder
							loading="lazy"
						/>
						<p>Alu Composite</p>
					</div>

					<div class="content">
						<p class="strong">
							Possibilité de personnaliser les portes en alu composite. Contactez-nous pour en savoir
							plus.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section v-if="doc.bal" class="sub-section">
			<h2>Option</h2>
			<div class="content">
				<NuxtImg
					src="/produits/boite-aux-lettres-renz.jpg"
					alt="Couleurs RAL des boites aux lettres Mobilum"
					fit="cover"
					height="100"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<p>Avec ou sans boite aux lettres, colori au choix : nous consulter</p>
			</div>
		</section>

		<!----
		<section v-if="doc.personnalisation" class="sub-section">
			<h2>Personnalisation</h2>
			<p>
				Mettre petit texte (humain / commercial) pour inciter les clients intéressés à nous contacter (trouver
				une jolie tournure)
			</p>
		</section>
		-->

		<section class="sub-section famille" v-if="relatedProducts && relatedProducts.length">
			<h2>Dans la même gamme...</h2>

			<div class="scroll">
				<ul class="famille-produit responsive">
					<li class="famille-card" v-for="relatedProduct in relatedProducts" :key="relatedProduct._id">
						<NuxtLink :to="relatedProduct._path">
							<NuxtImg
								:src="relatedProduct.cover_image"
								:alt="relatedProduct.title"
								width="200px"
								height="200px"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>{{ relatedProduct.title }}</p>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</section>
	</ContentDoc>
</template>

<script lang="ts" setup>
import { Product } from "@/assets/types";
import variant from "variant.js";

const config = useRuntimeConfig();
const route = useRoute();

const { data: currentProduct } = await useAsyncData(
	"currentProduct",
	() => queryContent(route.fullPath).findOne() as Promise<Product>,
);
const { data: relatedProducts } = await useAsyncData(
	"relatedProducts",
	() =>
		queryContent("/produit/")
			.where({ gamme: currentProduct.value?.gamme || "", title: { $ne: currentProduct.value?.title || "" } })
			.only(["_path", "title", "cover_image", "_id"])
			.limit(5)
			.find() as Promise<Product[]>,
);

const description = () => {
	const space = (length: number) => Array.from({ length }, (_) => ".").join("");
	let description = "";

	if (currentProduct.value?.designer) {
		description += `${variant.format("Designer", "bold sans")} ${space(35 - "Designer".length)} ${
			currentProduct.value?.designer
		}\n`;
	}
	if (currentProduct.value?.collection) {
		description += `${variant.format("Collection", "bold sans")} ${space(35 - "Collection".length)} ${
			currentProduct.value?.collection
		}\n`;
	}
	if (currentProduct.value?.category) {
		description += `${variant.format("Catégorie", "bold sans")} ${space(35 - "Catégorie".length)} ${
			currentProduct.value?.category
		}\n`;
	}
	if (currentProduct.value?.sub_category) {
		description += `${variant.format("Sous-catégorie", "bold sans")} ${space(31 - "Sous-catégorie".length)} ${
			currentProduct.value?.category
		}\n`;
	}
	if (currentProduct.value?.gamme) {
		description += `${variant.format("Gamme", "bold sans")} ${space(35 - "Gamme".length)} ${
			currentProduct.value?.gamme
		}\n`;
	}
	if (currentProduct.value?.materiau) {
		description += `\n${currentProduct.value?.materiau}`;
	}
	return description;
};

useSeoMeta({
	ogUrl: `${config.public.siteUrl}${route.fullPath}`,
	ogDescription: description(),
	description: description(),
	twitterDescription: description(),
	ogImage: currentProduct.value?.cover_image,
	twitterImage: currentProduct.value?.cover_image,
	ogImageAlt: currentProduct.value?.title,
	twitterImageAlt: currentProduct.value?.title,
	ogImageHeight: "600",
	ogImageWidth: "1100",
	twitterImageHeight: "600",
	twitterImageWidth: "1100",
	twitterCard: "summary_large_image",
});
</script>

<style scoped>
.strong {
	font-family: montserrat;
	font-weight: 600;
	color: #1a949d;
	margin-bottom: 1rem;
}

h2 {
	border-bottom: solid black 1px;
	margin-top: 3rem;
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

h1 {
	font-weight: 200;
	text-transform: none;
	text-align: center;
	border-bottom: solid black 1px;
	color: black;
	padding: 0;
	margin: 0;
	margin-top: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 1rem;
}

/*-----------------------------------------------------------------
		Sections générales
	---------------------------------------------------------------*/
.content-produits {
	margin-top: 120px;
}
.sub-section {
	width: 80%;
	margin-top: 2rem;
}

.sub-section-carousel {
	width: 90%;
	margin-top: 2rem;
}

@media screen and (max-width: 950px) {
	.sub-section-carousel {
		width: 100%;
	}
}

.sub-section > p {
	margin-top: 2rem;
	text-align: center;
}

.sub-section-content {
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

/*-----------------------------------------------------------------
		Zone caractéristiques
	---------------------------------------------------------------*/
.general {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	margin-top: 3rem;
}

.general-titre {
	padding-left: 0;
	margin-left: 0;
}

.general-motifs {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 3rem;
}

.general-motifs .content {
	margin-right: 3rem;
}
.general-filaire {
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.general-filaire img {
	object-fit: contain;
	max-width: 90%;
}

.general-infos {
	width: 65%;
}

.general-infos h2 {
	margin-top: 0;
}
.general-content {
	margin-top: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
}

.general-description {
	margin-top: 2rem;
}

/*-----------------------------------------------------------------
		Zone détails
	---------------------------------------------------------------*/

.content {
	width: 100%;
	margin-top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.list-element {
	margin-left: 2rem;
	list-style-type: disc;
}

.content ul {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
}
.type {
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1rem;
	align-items: flex-start;
}

.type-color {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.color_square {
	height: 10vh;
	width: 10vh;
}

/* ------------------------------------------------------------------------------------------
				Famille produit

				Pour faire le scroll : http://www.css3create.com/Slider-Galerie-photos-en-boucle-en-CSS3
--------------------------------------------------------------------------------------------*/
.famille-produit {
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
}

.scroll {
	/*scroll qui ne marche pas*/
	width: 80vw;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
}

.famille-card {
	position: relative;
	margin: 1.3rem;
	overflow: hidden;

	height: 200px;
	width: 200px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #1a949d;
}

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

/* ------------------------------------------------------------------------------------------
				RESPONSIVE TELEPHONES
--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	h2 {
		margin-top: 1rem;
	}

	.responsive {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.responsive-row {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 3rem;
	}

	.general-filaire {
		height: 100%;
		width: 100%;
	}

	.general-motifs {
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0;
	}

	.sub-section-content p {
		padding-top: 2rem;
	}

	.famille {
		margin: 0;
	}
}
</style>
