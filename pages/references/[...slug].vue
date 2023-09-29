<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<p><b>Idée : mettre lien vers la fiche des produits ? </b></p>
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.sub_title }}</p>
			</div>

			<ul class="reference-info">
				<li class="reference-info-ligne">
					<div v-if="doc.client">{{ doc.client }}</div>
					<div v-if="doc.archi_be">/ {{ doc.archi_be }}</div>
				</li>

				<li>
					<div v-if="doc.fabricant">
						<p><em>Fabricants</em>: {{ doc.fabricant }}</p>
					</div>
				</li>

				<li class="reference-info-ligne">
					<!---- Dates du projet --->
					<div v-if="doc.date_realisation">{{ doc.date_realisation }}</div>
					<div v-if="doc.date_demarrage">/ {{ doc.date_demarrage }}</div>
					<div v-if="doc.duree_marche">/ {{ doc.duree_marche }}</div>

					<!-----Localisation sur la même ligne ----->
					<div v-if="doc.prem_loc"><b>(espace)</b>/ {{ doc.prem_loc }}</div>
				</li>

				<li>
					<div v-if="doc.recompense">
						<p><em>Récompense</em>: {{ doc.recompense }}</p>
					</div>
				</li>

				<!-----Si jamais il y a eu 2 marchés pour le même projet ------>
				<li>
					<div v-if="doc.prem_client">{{ doc.prem_client }}</div>
					<div v-if="doc.prem_archi_be">/ {{ doc.prem_archi_be }}</div>
				</li>
				<li>
					<div v-if="doc.sec_loc">
						<p>{{ doc.sec_loc }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.sec_client">
						<p>{{ doc.sec_client }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.sec_archi_be">
						<p>{{ doc.sec_archi_be }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.installateur">
						<p>{{ doc.installateur }}</p>
					</div>
				</li>
			</ul>

			<div v-if="doc.concept">
				<p><em>Concept</em>: {{ doc.concept }}</p>
			</div>

			<div class="reference-carousel wide">
				<ul>
					<li v-for="(img, i) in doc.carousel" :key="i">
						<NuxtImg :src="img" width="1900" format="avif,webp" placeholder loading="lazy" />
					</li>
				</ul>
			</div>

			<ul class="reference-info">
				<li>
					<div v-if="doc.moa_commun">
						<p>{{ doc.moa_commun }}</p>
					</div>
				</li>
			</ul>

			<!---			<div class="reference-image">
				<figure>
					<NuxtImg
						:src="doc.cover_image"
						:alt="doc.cover_text"
						width="500"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption>
						<p>{{ doc.cover_text }}</p>
					</figcaption>
				</figure>
			</div> ------>
			<!---
			<div class="reference-description">
				<ContentRenderer :value="doc" />
			</div>
			--->
		</ContentDoc>
	</main>
</template>

<style scoped>
.reference {
	margin-top: 17vh;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.reference-header {
	padding: 2rem;
	width: 80%;
	border: solid black 1px;
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

.reference-info {
	padding: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.reference-info-ligne {
	display: flex;
	flex-direction: row;
}

h1 {
	color: black;
	border: none;
	border-bottom: solid black 1px;
	text-align: center;
	font-size: 300%;
	margin: 0;
}

@media only screen and (max-width: 950px) {
}
</style>
