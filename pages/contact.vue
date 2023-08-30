<template>
	<Layout>
		<template #slot_image>
			<div class="slot_image">
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
							de répondre aux demandes des particuliers.
						</p>
						<p>
							Nos services sont joignables du lundi au vendredi, <br />
							de 9h à 12h30 et de 14h à 18h. <br /><br /><br />
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
		<div class="sub__section">
			<Itinary />
		</div>
	</Layout>
</template>

<style scoped>
.slot_image {
	background: url("../assets/img/sav-crous.jpg") center center no-repeat;
	background-size: cover;
	background-attachment: fixed;
}

.base {
	text-align: center;
	display: flex;
	flex-direction: column;
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
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 600px) {
	.content {
		display: flex;
		flex-direction: column;
	}
}
</style>
