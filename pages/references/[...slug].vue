<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.sub_title }}</p>
			</div>

			<ul class="reference-info">
				<!--- mettre en row-->
				<li>
					<div v-if="doc.fabricant">
						<p><em>Fabricant</em>: {{ doc.fabricant }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.recompense">
						<p><em>Récompense</em>: {{ doc.recompense }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.date_realisation">
						<p><em>Date de réalisation </em>: {{ doc.date_realisation }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.date_demarrage">
						<p><em>Date de démarrage</em>: {{ doc.date_demarrage }}</p>
					</div>
				</li>

				<li>
					<div v-if="doc.duree_marche">
						<p><em>Durée du marché</em>: {{ doc.duree_marche }}</p>
					</div>
				</li>
			</ul>

			<ul class="reference-info-acteurs">
				<div>
					<li>
						<div v-if="doc.prem_loc">
							<p><em>Localisation</em>: {{ doc.prem_loc }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.prem_moe">
							<p><em>MOE</em>: {{ doc.prem_moe }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.prem_moa">
							<p><em>MOA</em>: {{ doc.prem_moa }}</p>
						</div>
					</li>
				</div>
				<div>
					<li>
						<div v-if="doc.sec_loc">
							<p><em>Localisation</em>: {{ doc.sec_loc }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.sec_moe">
							<p><em>MOE</em>: {{ doc.sec_moe }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.sec_moa">
							<p><em>MOA</em>: {{ doc.sec_moa }}</p>
						</div>
					</li>
				</div>
			</ul>
			

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
						<p><em>MOA</em>: {{ doc.moa_commun }}</p>
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

			<div class="reference-description">
				<ContentRenderer :value="doc" />
			</div>
		</ContentDoc>
	</main>
</template>

<style scoped>
.reference {
	margin-top: 17vh;
	width: 80%;
	display : flex;
	flex-direction: column;
	align-items: center;
}
.reference-header {
	padding: 2rem;
	width: 80%;
	border: solid black 1px;
	display : flex;
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

.reference-info-acteurs {
	width: 50%;
	display : flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	gap: 3rem;
}

.reference-info {
	display : flex;
	flex-direction: column;
	align-items: flex-start;
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
