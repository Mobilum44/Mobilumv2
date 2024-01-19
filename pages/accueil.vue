<template>
	<NuxtLayout name="layout-accueil">
		<!-----------------------------------------------
	Partie en attente de développement complet du site
	-------------------------------------------------->

		<template #slot_image>
			<section class="bandeau wide" :style="backgroundStyles('/photospages/accueil-test-fond2.jpg')">
				<div class="bandeau-content">
					<p class="quote">
						<!--<span>Mobilum&thinsp;</span><br /> --->
						<span>Le&thinsp;</span>
						<span>Béton&thinsp;</span>
						<span>Fibré&thinsp;</span><br />
						<span>à&thinsp;</span>
						<span>la&thinsp;</span>
						<span>Nantaise&thinsp;</span>
					</p>
					<NuxtImg
						alt="Logo french fab"
						class="logo-french-fab"
						src="/logos/french-fab.png"
						center
						width="40"
						fit="cover"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
				</div>
			</section>
		</template>

		<p class="accueil_text">
			En neuf ans d'existence, Mobilum a acquis un savoir-faire unique dans la création et la fabrication de
			mobiliers urbains en Béton Fibré Ultra Performant (BFUP). <br />
			<br />

			Ce matériau de construction à base cimentaire est caractérisé par un dosage élevé en microfibres. Il est
			formulé à l'échelle micrométrique pour une compacité optimisée. Il se distingue des bétons traditionnels par
			son comportement ductile en flexion/traction, sa fluidité, ses résistances mécaniques élevées et sa
			durabilité renforcée.
		</p>

		<!--------------------------------
	Slides photos
--------------------------------->

		<template #slot_bandeau>
			<div class="redirection">
				<h3>En quelques mots, Mobilum c'est ...</h3>
				<SlideRedirection />
			</div>
		</template>

		<template #slot_contact> </template>
	</NuxtLayout>
</template>

<script lang="ts" setup>
const img = useImage();

definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "Accueil",
});

function backgroundStyles(thumbnail: string): { backgroundImage: string } {
	const imgUrl = img(thumbnail, {
		width: 1920,
		quality: 80,
		placeholder: true,
		format: "avif,webp",
	});
	return { backgroundImage: `linear-gradient(to bottom, rgba(255, 0, 0, 0) 65%, #fefcf3), url('${imgUrl}')` };
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

/* Section 1 : Logo /Image */
.bandeau {
	margin-top: 120px;
	opacity: 90%;
	background-size: cover;
	height: 100vh;
	padding-bottom: 15vh;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
}

.bandeau-content {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-bottom: 2.5rem;
	padding-right: 12rem;
}

.accueil_text {
	border-top: solid #1a949d 1px;
	border-bottom: solid #1a949d 1px;
	text-align: center;
	color: black;
	margin-top: 5rem;
	margin-bottom: 5rem;
	margin-inline: auto;
	width: 55%;
	padding: 3rem;
}

/*-------------------------------------------------------------------
	  Citation animée
	------------------------------------------------------------------*/
.quote {
	padding: 4vh;

	font-family: "Bebas neue", Times, serif;
	/*
	font-family: "Times New Roman", Times, serif;
	font-style: italic;
	*/
	font-size: 2rem;
	color: black;
	text-shadow: black 1px 0 20px;
	max-width: 180vh;

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
	animation: fade-in 1s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
	100% {
		opacity: 1;
		filter: blur(0);
	}
}

/* section 3 : Activity cards */
.redirection {
	display: flex;
	flex-direction: column;
}
.redirection h3 {
	margin-left: 20rem;
}

@media only screen and (max-width: 950px) {
	.contenu {
		margin: 0;
	}
	.bandeau {
		padding-bottom: 0;
		background-size: cover;
		height: 40vh;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.bandeau-content {
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.quote {
		padding: 0;
		margin: 0;
		width: 75%;
	}

	.accueil_text {
		width: 65%;
		padding: 1.5rem;
		margin: 1rem 0rem;
	}
	.redirection {
		margin: 0rem;
		align-items: center;
	}

	.redirection h3 {
		margin-left: 0rem;
	}
}

/* Section 4 : action band */
</style>
