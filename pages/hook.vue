<template>
	<NuxtLayout name="layout-no-margin">
		<div class="sub__section">
			<!--<Button theme="arrow" to="/collection"> ⇦ </Button>-->

			<h1>Hook</h1>
		</div>

		<div class="chapeau">
			<p>
				<!--\Qualité \Esthétisme \Personnalisation font du HOOK un produit phare sur le marché des habillages de
				coffrets techniques.<br/>-->
				Des modules personnalisables à souhait, composés de matériaux durables, simples à installer et à
				entretenir.
			</p>
			<p>
				Gamme de 6 modules de dimensions différentes.<br />
				Possibilité d'effectuer des modules sur-mesure.
			</p>
		</div>
		<b>
			Mettre photo illustration en dessous des cartes produits : plaques HOOK coulées en usine <br />
			Tous en bois et mieux "répartis"<br /> Trouver solution pour avoir grille de 6 (2;3)
			et mettre 7eme en sur-mesure : page entière à créer.
		</b>

		<div class="sub__section">
			<ul class="collection-order">
				<li v-for="urbanFurniture in urbanFurnitures" :key="urbanFurniture.title">
					<NuxtLink :to="urbanFurniture._path">
						<article class="image-cover">
							<NuxtImg
								alt="photo collection HOOK mobilum"
								:src="urbanFurniture.cover_image"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<p>{{ urbanFurniture.gamme }}</p>
						</article>
						<p class="hook-size">
							{{ urbanFurniture.cover_undertext }} <br />
							<b>Enlever soulignement</b>
						</p>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "Hook",
});

const { data: urbanFurnitures } = await useAsyncData("produit", () =>
	// Requête pour récupérer les produits de la collection "Mobilier urbain"
	// https://content.nuxtjs.org/api/composables/query-content
	queryContent("/produit").where({ collection: "HOOK" }).sort({ sub_category: 1 }).find(),
);
</script>

<style scoped>
/*---------------------------------------------------------
Paramètres de la galerie - généralités
---------------------------------------------------------*/
.collection-order {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.collection-order ul {
	padding-inline-start: 0px;
}

/*---------------------------------------------------------
Paramètres de la galerie - position de base
---------------------------------------------------------*/
.image-cover {
	border-radius: 7px;
	border: solid white;

	position: relative;
	justify-self: center;
	height: 225px;
	width: 225px;

	background-color: #1a949d;
	/*box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;*/
}

.image-cover > img {
	height: 100%;
	width: 100%;
	opacity: 1;
	transition: all 0.3s ease-in-out;
}

.image-cover p {
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

.hook-size {
	text-align: center;
	font-family: "Bebas Neue";
	color: black;
}

.hook-size a {
	text-decoration: none;
	border: solid red;
}
/*---------------------------------------------------------
    Paramètres de la galerie - position selection
  ---------------------------------------------------------*/
.image-cover:hover {
	border-radius: 4px;
	border: 0px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: all 0.3s ease-in-out;
}
.image-cover:hover p {
	opacity: 1;
	transition: all 0.5s ease-in-out;
}

.image-cover:hover > img {
	opacity: 0.3;
	transition: all 0.3s ease-in-out;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	.collection-order {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
