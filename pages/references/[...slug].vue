<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<h2>{{ doc.sub_title }}</h2>
			</div>

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

			<div class="reference-carousel wide">
				<ul>
					<li v-for="(img, i) in doc.carousel" :key="i">
						<NuxtImg :src="img" width="1900" format="avif,webp" placeholder loading="lazy" />
					</li>
				</ul>
			</div>

			<div class="reference-info">
				<p>Produits présentés dans le projet</p>
				<p><b>Mettre le lien vers les fiches produits</b></p>
			</div>
		</ContentDoc>
	</main>
</template>

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

.reference {
	margin-top: 120px;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.reference-header {
	padding: 2rem;
	margin-top : 2rem;
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
