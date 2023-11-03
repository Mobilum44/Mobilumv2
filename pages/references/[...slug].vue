<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<h2>{{ doc.sub_title }}</h2>
			</div>

			<b> Faire responsive + gammes</b>
			<ul class="reference-info">
				<li class="reference-info-ligne">
					<div v-if="doc.client">{{ doc.client }}</div>
					<div v-if="doc.archi_be">/ {{ doc.archi_be }}</div>
				</li>

				<li>
					<div v-if="doc.installateur">
						<p>{{ doc.installateur }}</p>
					</div>
				</li>
			</ul>

			<ul class="reference-info-ligne responsive">
				<!---- Mise en page spéciale (Galets): 2 marchés ------------>
				<li class="reference-info-colonne">
					<div v-if="doc.prem_loc">
						<p>{{ doc.prem_loc }}</p>
					</div>
					<div v-if="doc.prem_client">{{ doc.prem_client }}</div>
					<div v-if="doc.prem_archi_be">/ {{ doc.prem_archi_be }}</div>
				</li>
				<li class="reference-info-colonne">
					<div v-if="doc.sec_loc">
						<p>{{ doc.sec_loc }}</p>
					</div>
					<div v-if="doc.sec_client">{{ doc.sec_client }}</div>
					<div v-if="doc.sec_archi_be">{{ doc.sec_archi_be }}</div>
				</li>
			</ul>

			<!-- Mise en page spécial : Quotidien -->
			<div v-if="doc.texte_quotidien" class="chapeau">
				Chers clients, vous êtes tout simplement remarquables ! <br />
				<br />
				Grâce à votre adhésion vous avez permis le développement de cette nouvelle activité artisanale.<br />
				Des premiers mobiliers posés en 2015 sur Trélazé (49) à aujourd'hui nous ne pouvons que vous le
				confirmer. Vous nous avez donné cette chance de progresser en nous confiant la fabrication de plus de 10
				000 pièces pour l'aménagement de vos lieux de vie représentant notre beau pays. <br /><br />
				<em>Il est donc essentiel de vous remercier et de partager légitimement ce petit brin de fierté avec
				vous.</em><br /><br />
				Cette réussite, nous nous devons aussi de la partager avec nos fournisseurs qui au fil du temps et des
				épreuves sont devenus de véritable partenaires.<br/>
				Le petit mot de VICAT partenaire majeur de Mobilum :
			</div>

			<div v-if="doc.texte_vicat" class="vicat">
				L'innovation est dans l'ADN du groupe Vicat depuis notre origine, c'est pourquoi, riches de notre
				histoire et tournés vers l'avenir, nous poursuivons notre transformation pour nous adapter à un monde
				qui change en accompagnant les mutations techniques, environnementales et sociétales. Pour cela, la
				relation avec un industriel est pour Vicat une évidence et cette volonté a amené Mobilum à nous faire
				confiance. Professionnel dans la fabrication et la distribution de mobiliers urbains en BFUP, Mobilum
				ouvre de nouvelles perspectives pour faire face à l'évolution des espaces publics et des attentes des
				utilisateurs. C'est ainsi que nous avons décidé d'apporter un service complet en fournissant notre BFUP
				Smart-Up afin d'oeuvrer ensemble à la démocratisation de ce matériau dans l'espace public au travers de
				design innovants, artistiques et audacieux dont Mobilum a le secret. Nous croyons conjointement en
				l'avenir des BFUP dans la construction et nous sommes persuadés qu'il contribue au développement de
				solutions plus performantes, plus faciles d'utilisation et à l'impact carbone réduit.
			</div>

			<ul class="reference-info responsive">
				<li>
					<div v-if="doc.fabricant">
						<p><em>Fabricants</em>: {{ doc.fabricant }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.agent">
						<p><em>Agence</em>: {{ doc.agent }}</p>
					</div>
				</li>

				<li class="reference-info-ligne responsive">
					<!---- Dates du projet --->
					<div v-if="doc.date_realisation">{{ doc.date_realisation }} /</div>
					<div v-if="doc.date_demarrage">{{ doc.date_demarrage }} /</div>
					<div v-if="doc.duree_marche">{{ doc.duree_marche }} /</div>

					<!-----Localisation sur la même ligne ----->
					<div v-if="doc.localisation">{{ doc.localisation }}</div>
				</li>
			</ul>
			<ul class="reference-info">
				<li>
					<div v-if="doc.recompense">
						<p><em>Récompense</em>: {{ doc.recompense }}</p>
						<br />
					</div>
				</li>
				<div v-if="doc.concept">
					<p><em>Concept</em>: {{ doc.concept }}</p>
				</div>

				<!---
				<div class="reference-description">
					<ContentRenderer :value="doc" />
				</div>
				--->
			</ul>

			<div class="reference-carousel wide" v-if="doc.carousel">
				<Carousel :wrap-around="true" snap-align="center" :items-to-show="1">
					<Slide v-for="(img, i) in doc.carousel" :key="i">
						<NuxtImg
							:src="img"
							width="1050"
							height="700"
							quality="100"
							placeholder
							format="avif,webp"
							loading="lazy"
						/>
					</Slide>

					<template #addons>
						<Navigation />
						<Pagination />
					</template>
				</Carousel>
			</div>

			<div class="reference-info" v-if="relatedProducts && relatedProducts.length">
				<h3>Produits présentés dans le projet</h3>
				<div>
					<ul class="famille-produit responsive">
						<li class="famille-card" v-for="product in relatedProducts" :key="product._id">
							<NuxtLink :to="product._path">
								<!----
								<NuxtImg
									:src="relatedProducts.cover_image"
									:alt="relatedProducts.title"
									width="200px"
									height="200px"
									fit="cover"
									format="avif,webp"
									placeholder
									loading="lazy"
								/> ---->
								<p>
									{{ product.title }}
								</p>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</ContentDoc>
	</main>
</template>

<script setup lang="ts">
import { Product } from "@/assets/types";

useSeoMeta({
	title: "Nos références",
});

const route = useRoute();

const { data: currentProject } = await useAsyncData("currentProject", () =>
	queryContent(route.fullPath).only(["_path", "relatedProducts", "_id"]).findOne(),
);

const { data: relatedProducts } = await useAsyncData(
	"relatedProducts",
	() =>
		queryContent("/produit/")
			.where({ title: { $in: currentProject.value?.relatedProducts || [] } })
			.only(["_path", "title", "cover_image", "_id"])
			.limit(9)
			.find() as Promise<Product[]>,
);
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

.chapeau {
	margin-top: 2rem;
	width: 75%;
	text-align: center;
	font-size: 1rem;
	margin-left : 0;
}

.vicat {
	background-color: #09738d;
	color: white;
	width: 80%;
	padding: 1rem;
	text-align: justify;
	font-family: Roboto;
}

.reference {
	margin-top: 120px;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.reference-header {
	padding: 2rem;
	margin-top: 2rem;
	width: 80%;
	border: solid black 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.reference-info {
	padding: 0;
	margin-top: 1.5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.reference-info-ligne {
	width: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.reference-info-colonne {
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.reference-carousel {
	width: 100%;
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.reference-carousel img {
	max-width: 100%;
	object-fit: contain;
}

@media only screen and (max-width: 950px) {
	.reference-header {
		padding: 0.5rem;
		width: 100%;
		text-align: center;
	}

	h1 {
		padding: 0;
		text-align: center;
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}

	.responsive {
		flex-direction: column;
		align-items: center;
	}
}
</style>
