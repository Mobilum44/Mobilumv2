<template>
	<NuxtLayout name="layout-accueil">
		<!-----------------------------------------------
	Partie en attente de développement complet du site
	-------------------------------------------------->

		<template #slot_image>
			<section class="bandeau wide">
				<div class="bandeau_content">
					<div class="section">
						<p class="quote">							
							<span>Mobilum&thinsp;</span><br />
							<!--<span>façonne&thinsp;</span>--->
							<span>Le&thinsp;</span>
							<span>Béton&thinsp;</span>
							<span>Fibré&thinsp;</span>
							<span>à&thinsp;</span>
							<span>la&thinsp;</span>
							<span>Française&thinsp;</span>
						</p>
					</div>
				</div>
			</section>
		</template>

		<template> </template>
		<!--------------------------------
	PARTIE A DEVELOPPER PLUS TARD
	Mise en page : Cartes RS avec texte en dessous, 3 directement affichés
	--------------------------------->
		<p class="accueil_text">
			En dix ans d'existence, Mobilum a acquis un savoir-faire unique dans la création et
			la fabrication de mobiliers urbains en Béton Fibré à Ultra-haute Performance. <br /><br />
			Entreprise artisanale nantaise <b>N majuscule ?</b>, Mobilum répond aux exigences des environnements publics.
		</p>

	<!--------------------------------
	Explorer
	--------------------------------->

		<template #slot_bandeau>
			<div class="redirection">
				<h3>En quelques mots, Mobilum c'est ...</h3>
				<b> Changer photo BFUP</b>
				<SlideRedirection />
			</div>
		</template>

		<template #slot_contact>
		</template>
	</NuxtLayout>
</template>


<script>

definePageMeta({
  layout: false,
});

export default {
	metaInfo: {
		title: "Grands comptes et sur-mesure",
	},

}
</script>


<style scoped>
/* General */
h1 {
	width: 100%;
	text-transform: none;
	font-weight: 200;
	border: none;
	border-bottom: 1px solid;
	color: #1a949d;
	margin: 2rem;
	padding: 1rem;
}

h3 {
	margin-bottom: 0;
	font-size: 1.5rem;
}

p {
	text-align: center;
}

.accueil_text {
	border-top: solid #1a949d 1px;
	border-bottom: solid #1a949d 1px;
	text-align: center;
	color: black;
	margin-top: 5rem;
	margin-bottom: 5rem;
	width: 55%;
	padding: 3rem;
}

/* Section 1 : Logo /Image */
.bandeau {
	margin-top : 17vh;
	background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0) 65%, #fefcf3),
		url("/photospages/accueil-test-fond2.jpg");
	opacity: 90%;
	background-size: cover;
	height: 100vh;
	padding-bottom: 15vh;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
}

/* Section 2 : latest posts + content */
.section {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-bottom : 3rem;
	padding-right : 10rem;
}

/*-------------------------------------------------------------------
	  Citation animée
	------------------------------------------------------------------*/

.quote {
	padding: 4vh;
	font-family: "Times New Roman", Times, serif;
	font-style: italic;
	font-size: 2rem;
	color:black;
	text-shadow: black 1px 0 20px;
	max-width: 150vh;

	transform: scale(0.94);
	animation: scale 6s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
	100% {
		transform: scale(1);
	}
}

span {
	display: inline-block;
	opacity: 0;
	filter: blur(4px);
}

span:nth-child(1) {
	animation: fade-in 1s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
	animation: fade-in 1s 0.6s forwards cubic-bezier(0.11, 0, 0.8, 0);
}

span:nth-child(3) {
	animation: fade-in 1s 0.9s forwards cubic-bezier(0.11, 0, 0.11, 0);
}

span:nth-child(4) {
	animation: fade-in 1s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
	animation: fade-in 1s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
	animation: fade-in 1s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
	animation: fade-in 1s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
	animation: fade-in 1s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
	animation: fade-in 1s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
	animation: fade-in 1s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
	animation: fade-in 3s 3.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
	animation: fade-in 3s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
	animation: fade-in 3s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
	animation: fade-in 3s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
	animation: fade-in 3s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
	animation: fade-in 3s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
	animation: fade-in 3s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
	animation: fade-in 3s 3.7 forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(19) {
	animation: fade-in 3s 3.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(20) {
	animation: fade-in 3s 4.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(21) {
	animation: fade-in 3s 4.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(22) {
	animation: fade-in 3s 4.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(23) {
	animation: fade-in 3s 4.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(24) {
	animation: fade-in 3s 4.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(25) {
	animation: fade-in 3s 5.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(26) {
	animation: fade-in 3s 5.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(27) {
	animation: fade-in 3s 5.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(28) {
	animation: fade-in 3s 5.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(29) {
	animation: fade-in 3s 5.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
	100% {
		opacity: 1;
		filter: blur(0);
	}
}

/* section 3 : Activity cards */
.redirection h3 {
	margin-left: 20rem;
}

@media only screen and (max-width: 950px) {
	.quote {
		gap: 0;
	}
	.bandeau {
		padding-bottom: 0;
	}

	.bandeau p {
		margin-top: 0rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	.redirection {
		margin-left: 0rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.redirection h3 {
		margin-left: 0rem;
	}
}

/* Section 4 : action band */
</style>
