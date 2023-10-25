<template>
	<NuxtLayout name="layout-no-margin">
		<div class="sub__section">
			<!--<Button theme="arrow" to="/collection"> ⇦ </Button>-->

			<h1>Signaletique</h1>
		</div>
		<p class="chapeau">
			Nos totems équipent les rues, les parcs, les bords de mer, les zones de bus, les enceintes privées.<br />
			Ils ont la particularité de résister aux aménagements les plus sensibles.<br /><br />

			Il ne vous reste plus qu'à libérer votre créativité afin de donner vie à une pièce unique et distinguée.<br />
			</p>
			
		<div class="sub__section">
			<ul class="section-collection">
				<li v-for="urbanFurniture in urbanFurnitures" :key="urbanFurniture.title" class="collection-item">
					<NuxtLink :to="urbanFurniture._path">
						<article class="image_cover">
							<NuxtImg
								alt="photo collection signaletique mobilum"
								:src="urbanFurniture.cover_image"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>{{ urbanFurniture.title }}</p>
						</article>
							<p class="undertext">{{ urbanFurniture.cover_undertext }}</p>
					</NuxtLink>
				</li>
			</ul>
		</div>

		<div class="sub__section wide">
			<h2>Votre totem sur mesure</h2>

			<div class="sur-mesure">
				<div class="surmesure-focus dark">
					<NuxtImg
						alt="photo totem en fabrication mobilum BFUP"
						src="/totems/totems-dimensions.png"
						format="avif,webp"
						placeholder
						loading="lazy"
						width="230"
					/>

					<div class="surmesure-focus-texte">
						<h3>Dimensions</h3>
						<p>Adapté à vos besoins</p>
					</div>
				</div>

				<div class="surmesure-focus dark">
					<NuxtImg
						alt="photo totem en fabrication mobilum BFUP"
						src="/totems/totems-sablage.png"
						format="avif,webp"
						placeholder
						loading="lazy"
						width="400"
					/>

					<div class="surmesure-focus-texte">
						<h3>Sablage</h3>
						<p>Une esthétique qui vous ressemble</p>
					</div>
				</div>

				<div class="surmesure-focus dark">

					<NuxtImg
						alt="photo totem en fabrication mobilum BFUP"
						src="/totems/totems-peinturev2.png"
						format="avif,webp"
						placeholder
						loading="lazy"
						width="400"
					/>

					<div class="surmesure-focus-texte">
						<h3>Peinture</h3>
						<p>Du peps pour illuminer vos aménagements</p>
					</div>


				</div>

				<div class="surmesure-focus dark">
					<NuxtImg
						alt="photo totem en fabrication mobilum BFUP"
						src="/totems/totems-plaquesv2.png"
						format="avif,webp"
						placeholder
						loading="lazy"
						width="400"
					/>

					<div class="surmesure-focus-texte">
						<h3>Pose de plaques</h3>
						<p>Une personnalisation infinie</p>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "La signalétique",
});

const { data: urbanFurnitures } = await useAsyncData("produit", () =>
	// Requête pour récupérer les produits de la collection "Mobilier urbain"
	// https://content.nuxtjs.org/api/composables/query-content
	queryContent("/produit").where({ collection: "Signalétique" }).sort({ sub_category: 1 }).find(),
);
</script>

<style scoped>
/*---------------------------------------------------------
    Paramètres de la galerie - généralités
  ---------------------------------------------------------*/
.section-collection {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
}
.collection-item {
	text-align: center;
	text-decoration: none;
	font-family: "Times New Roman", Times, serif;
	font-size: 1.2rem;
}

.undertext {
	font-style: italic;
}

.collection-item a {
	text-decoration: none;
}
/*---------------------------------------------------------
    Paramètres de la galerie - position de base
  ---------------------------------------------------------*/
.image_cover {
	border-radius: 7px;

	position: relative;
	justify-self: center;
	height: 300px;
	width: 300px;

	background-color: #1a949d;
	/*box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;*/
}
.image_cover > img {
	height: 100%;
	width: 100%;
	opacity: 1;
	transition: all 0.3s ease-in-out;
}
.image_cover p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	margin: 0;
	opacity: 0;

	font-family: "Bebas Neue";
	font-size: 1.5rem;
	text-align: center;
	letter-spacing: 2px;
	color: white;
	transition: all 0.5s ease-in-out;
}

/*---------------------------------------------------------
    Paramètres de la galerie - position selection
  ---------------------------------------------------------*/
.image_cover:hover {
	border-radius: 4px;
	border: 0px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: all 0.3s ease-in-out;
}
.image_cover:hover p {
	opacity: 1;
	transition: all 0.5s ease-in-out;
	color: white;
}

.image_cover:hover > img {
	opacity: 0.3;
	transition: all 0.3s ease-in-out;
}

/*---------------------------------------------------------
    Section sur-mesure
  ---------------------------------------------------------*/

h2 {
	padding: 0;
}
h3 {
	font-family: "Montserrat";
	text-align: center;
}
.wide {
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.sur-mesure {
	display : flex;
	flex-direction : row;
}
.surmesure-focus {
	width : 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem;
}

.surmesure-focus img {
	max-width : 80%;
}

.surmesure-focus-texte {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem;
	text-align: center;
}
/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	.sub__section {
		margin-top: 0;
		margin-bottom: 1rem;
	}
	.section-collection {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section-collection > p {
		height: 0;
		opacity: 0;
	}

	.sur-mesure {
	display : flex;
	flex-direction : column;
}
	.surmesure-focus {
		width : 90%;
		margin: 1rem;
	}

	.surmesure-focus img {
		height: 50vh;
		width: 100%;
		object-fit: contain;
	}
}
</style>
