<template>
	<NuxtLayout name="layout-no-margin">
		<div class="sub__section">
			<!--<Button theme="arrow" to="/collection"> ⇦ </Button>-->
			<h1>Nos dossiers d'exception</h1>
		</div>
		<section class="sub__section">
			<div class="chapeau">
				<p>
					<!---Pour l'obtention de ces marchés, ce qui a fait la différence chez mobilum provient de la qualité de
					son organisation industrielle, associées à un très fort savoir-faire technique.---->
					La qualité de notre organisation industrielle, associée à un fort savoir-faire technique ont donné
					confiance pour l'obtention de ces projets.
				</p>
				<b>Corriger les mini textes (qui n'apparaissent pas)</b>
			</div>

			<p>
				<b>Mettre photos illustration</b><br/>
				<b> Cover_image : notre quotidien</b> <br />
				<b> Corriger largeur des images (responsive)</b>
			</p>
		</section>

		<section class="wide">
			<ul>
				<li
					class="references"
					v-for="typ in ['Les grands comptes', 'Les remarquables', 'Les conceptuels', 'Les récompensés']"
					:key="typ"
				>
					<h2>{{ typ }}</h2>
					<ul class="references-list">
						<li v-for="reference in references?.filter((r) => r.type === typ)" :key="reference._id">
							<CarteMarches
								:title="reference.cover_title"
								:path="reference._path"
								:img="reference.cover_image"
								loading="lazy"
								placeholder
								:alt="reference.cover_text"
								:cover_text="reference.cover_text"
							/>
						</li>
					</ul>
				</li>
			</ul>
		</section>

		<p class="referencement">
			<!---
			Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de prestige et d'exigence
			technique.<br /><br />
			De la participation à des projets monumentaux pour des espaces emblématiques, aux tables de pique-nique
impressionnantes conçues pour accueillir de grandes foules, notre expertise en mobilier urbain en BFUP garantit des
réalisations exceptionnelles qui inspirent et marquent les esprits. <br /><br />
			Chaque projet est réalisé sur mesure pour répondre aux demandes spécifiques de chaque site et s'intégrer
			harmonieusement dans son environnement. Nous sommes fiers de contribuer à la création de lieux publics
			uniques, alliant fonctionnalité, durabilité et design. <br /><br />
			Nous nous engageons à continuer à innover et à repousser les limites pour façonner les espaces publics de
			demain, en créant des projets de mobiliers urbains en BFUP qui captivent les regards et améliorent la vie
			quotidienne des citadins. --->
		</p>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import { Reference } from "@/assets/types";

const { data: references } = await useAsyncData(
	"references",
	() => queryContent("/references").sort({ order: 1 }).find() as Promise<Reference[]>,
);

useSeoMeta({
	title: "Nos dossiers d'exception",
});

definePageMeta({
	layout: false,
});
</script>

<style scoped>
.wide {
	width: 80%;
	display: flex;
	align-items: left;
}
h2 {
	border: 0;
	padding-left: 2rem;
	margin-bottom: 2rem;
}

.chapeau {
	width: 70%;
}

.references {
	margin-top: 2rem;
	margin-bottom: 4rem;
}
.references-list {
	gap: 2rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.references-list li {
	width: 30%;
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

	.chapeau {
		width: 100%;
	}

	.sub__section {
		margin-bottom: 0;
	}

	.sub__section p {
		margin-bottom: 0;
		margin-top: 2rem;
	}

	.references-list {
		gap: 2rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
	}

	.references-list li {
		width: 100%;
	}
}
</style>
