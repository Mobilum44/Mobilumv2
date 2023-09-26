<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.sub_title }}</p>
			</div>
			<div class="reference-info">
				<ul>
					<li>
						<div v-if="doc.prem_loc">
							<p><strong>Localisation</strong>: {{ doc.prem_loc }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.prem_moe">
							<p><strong>MOE</strong>: {{ doc.prem_moe }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.prem_moa">
							<p><strong>MOA</strong>: {{ doc.prem_moa }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.sec_loc">
							<p><strong>Localisation</strong>: {{ doc.sec_loc }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.sec_moe">
							<p><strong>MOE</strong>: {{ doc.sec_moe }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.sec_moa">
							<p><strong>MOA</strong>: {{ doc.sec_moa }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.fabricant">
							<p><strong>Fabricant</strong>: {{ doc.fabricant }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.recompense">
							<p><strong>Récompense</strong>: {{ doc.recompense }}</p>
						</div>
					</li>


					<li>
						<div v-if="doc.date_realisation">
							<p><strong>Date de réalisation </strong>: {{ doc.date_realisation }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.date_demarrage">
							<p><strong>Date de démarrage</strong>: {{ doc.date_demarrage }}</p>
						</div>
					</li>

					<li>
						<div v-if="doc.duree_marche">
							<p><strong>Durée du marché</strong>: {{ doc.duree_marche }}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="reference-image">
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
			</div>
			<div class="reference-carousel">
				<ul>
					<li v-for="(img, i) in doc.carousel" :key="i">
						<NuxtImg :src="img" width="100" height="100" format="avif,webp" placeholder loading="lazy" />
					</li>
				</ul>
			</div>
			<div class="reference-description">
				<ContentRenderer :value="doc" />
			</div>
		</ContentDoc>
	</main>
</template>

<style scoped>
.reference {
	margin-top: 17vh;
	width: 60%;
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
