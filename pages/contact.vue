<template>
	<NuxtLayout name="default">
		<template #slot_image>
			<div class="slot_image" :style="backgroundStyles('/photospages/sav-crous.jpg')">
				<h1>Contact</h1>
			</div>
		</template>

		<div class="sub__section base">
			<div class="content">
				<div class="content_box">
					<Form />
				</div>

				<div class="content_box">
					<!-- Mettre les informations en colonne -->
					<div class="services_box">
						<p>
							Nous vous prions de bien vouloir noter que notre service de contact est spécifiquement dédié
							aux demandes professionnelles et institutionnelles. Nous regrettons de ne pas être en mesure
							de répondre aux demandes des particuliers. <br /><br />

							Les coordonnées de nos différents services :
						</p>
						<!-- Mettre les informations en colonne -->
						<div class="service">
							<!-- Mettre les informations en colonne-->
							<h3>Commerce</h3>
							<p>
								contact@mobilum-france.com <br />
								+33(0)2 51 72 90 22
							</p>
						</div>

						<div class="service">
							<h3>Facturation</h3>
							<p>
								fournisseurs@mobilum-france.com <br />
								+33(0)2 52 59 58 77
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!---
		<div class="sub__section maps">
			<MapsAdress />
		</div> --->
	</NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "Contact",
});

const img = useImage();

function backgroundStyles(thumbnail: string): { background: string } {
	const imgUrl = img(thumbnail, {
		width: 1920,
		quality: 80,
		placeholder: true,
		format: "avif,webp",
	});
	return { background: `url('${imgUrl}') center center no-repeat` };
}
</script>

<style scoped>
.slot_image {
	background-size: cover;
	background-attachment: fixed;
}

.base {
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: space-between;
}

.content {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;
}

.content_box {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem;
	width: 50%;
}

.services_box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 80%;
}

.service {
	border-radius: 8px;
	background-color: #f5ebe0;
	width: 18rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem;
	font-size: 14px;
	padding: 1rem;
	color: #1a949d;
}

.services,
h3 {
	font-size: 1.2rem;
	margin: 0;
	padding: 0;
	color: black;
	text-decoration: none;
}

.services,
p {
	color: black;
}

.sub__section {
	height: 100%;
	width: 100%;
}

.maps {
	height: 100%;
}
/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 600px) {
	.slot_image {
		background-size: contain;
		background-attachment: local;
	}

	.content {
		display: flex;
		flex-direction: column;
	}
}
</style>
