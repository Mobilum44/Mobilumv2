<template>
	<NuxtLayout name="contenu_no_margin">
		<div class="sub__section">
			<!--<Button theme="arrow" to="/collection"> ⇦ </Button>-->

			<h1>Signaletique</h1>
		</div>

		<p class="chapeau">
			\Distingué \résisistant \ ultra personalisable font de nos totems des pièces uniques dans ce domaine <br />
			Dé"tails en plus sur chaque page de totem
		</p>

		<div class="sub__section">
			<ul class="collection_order">
				<li v-for="urbanFurniture in urbanFurnitures" :key="urbanFurniture.title">
					<NuxtLink :to="urbanFurniture._path">
						<article class="image_cover">
							<NuxtImg alt="photo collection signaletique mobilum" :src="urbanFurniture.cover_image" />
							<p>{{ urbanFurniture.title }}</p>
						</article>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
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
.collection_order {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
}

/*---------------------------------------------------------
    Paramètres de la galerie - position de base
  ---------------------------------------------------------*/
.image_cover {
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

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	.collection_order {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
