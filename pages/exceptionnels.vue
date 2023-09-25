<template>
	<NuxtLayout name="layout-no-margin">
		<div class="sub__section">
			<!--<Button theme="arrow" to="/collection"> ⇦ </Button>-->
			<h1>Nos dossiers d'exception</h1>
		</div>
		<section class="sub__section">
			<div class="chapeau">
				<p>
					Pour l'obtention de ces marchés, ce qui a fait la différence chez mobilum résulte dans la qualité de
					son organisation industrielle, associées à un très fort savoir-faire technique.
				</p>
			</div>
			<p>Faire différentce entre sgp mu et sgp signalétique</p>
			<p>Remarquables : galets, (tramway) angers, puilboreau</p>
			<p>
				Niuvelle catégorie : les récompensés <br />
				St cyr / Les ulis / Bienale
			</p>
		</section>

		<section class="wide">
			<ul>
				<li v-for="typ in ['Les grands comptes', 'Les remarquables', 'Les conceptuels']" :key="typ">
					<ul class="references-list">
						<h2>{{ typ }}</h2>
						<li v-for="reference in references?.filter((r) => r.type === typ)" :key="reference._id">
							<div class="cards__order">
								<CarteMarches
									:title="reference.title"
									:path="reference._path"
									:img="reference.cover_image"
									:alt="reference.cover_text"
								/>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<Button theme="bordered" to="/exceptionnels-v1"> Page modèle </Button>

		<p class="referencement">
			Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de prestige et d'exigence
			technique.<br /><br />
			<!-- De la participation à des projets monumentaux pour des espaces emblématiques, aux tables de pique-nique
impressionnantes conçues pour accueillir de grandes foules, notre expertise en mobilier urbain en BFUP garantit des
réalisations exceptionnelles qui inspirent et marquent les esprits. <br /><br /> -->
			Chaque projet est réalisé sur mesure pour répondre aux demandes spécifiques de chaque site et s'intégrer
			harmonieusement dans son environnement. Nous sommes fiers de contribuer à la création de lieux publics
			uniques, alliant fonctionnalité, durabilité et design. <br /><br />
			Nous nous engageons à continuer à innover et à repousser les limites pour façonner les espaces publics de
			demain, en créant des projets de mobiliers urbains en BFUP qui captivent les regards et améliorent la vie
			quotidienne des citadins.
		</p>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import { Reference } from "@/assets/types";
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

const { data: references } = await useAsyncData(
	"references",
	() => queryContent("/references").find() as Promise<(ParsedContent & Reference)[]>,
);

useSeoMeta({
	title: "Grands comptes et sur-mesure",
});

definePageMeta({
	layout: false,
});
</script>

<!-- 
<page-query>
query {
  references: allReference {
    edges {
      node {
        id
        title
        cover_image
        cover_text
        path
        type
      }
    }
  }
}
</page-query> -->

<!----  

<script>
import Layout from "@/layouts/LayoutAccueil.vue";
import CarteMarches from "@/components/CarteMarches.vue";
import Button from "@/components/Button.vue";

export default {
	components: {
		Layout,
		CarteMarches,
		Button,
	},

	metaInfo: {
		title: "Grands comptes et sur-mesure",
	},

	data: () => {
		return {};
	},

	computed: {
		sortedReferences() {
			/**
			 * @type {Object.<string, Array<{ cover_image: Object, cover_text: string, id: string, path: string, title: string, type: string }>>}
			 */
			const sortedReferences = {};
			/**
			 * @type {Array<{ node: { cover_image: Object, cover_text: string, id: string, path: string, title: string, type: string } }>}
			 */
			const references = this.$page.references.edges;
			/**
			 * @type {Array<{ type: string, content: Array<{ cover_image: Object, cover_text: string, id: string, path: string, title: string, type: string }> }>}
			 */
			references.forEach((ref) => {
				if (sortedReferences[ref.node.type]) {
					sortedReferences[ref.node.type].push(ref.node);
				} else {
					sortedReferences[ref.node.type] = [];
					sortedReferences[ref.node.type].push(ref.node);
				}
			});
			return sortedReferences;
		},
	},
};
</script> --->

<!---
<script setup lang="ts">
import { SomeComponent } from '#components'

const MyButton = resolveComponent('MyButton')
</script>

-->

<style scoped>
.wide {
	width: 80%;
	display: flex;
	align-items: left;
}
h2 {
	border: 0;
	padding-left: 2rem;
}

.chapeau {
	width: 70%;
}

.references-list {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

/*

Mise en page des cartes à faire


ul {
  border : solid blue;
  width : 80vw;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
  list-style-type: none;
}

li {
  border : solid pink;
} */

ul {
	padding: 0;
	width: 100%;
}

@media only screen and (max-width: 950px) {
	.wide {
		width: 95%;
	}

	.sub__section {
		margin-bottom: 0;
	}

	.sub__section p {
		margin-bottom: 0;
		margin-top: 2rem;
	}
}
</style>
