<template>
	<NuxtLayout>
		<h3>Inspirations</h3>
		<p>https://www.sanleonardo.it/</p>

		<h3>A faire</h3>
		<p>
			Faire une barre ou section recherche <br />
			Formulaire de Contact <br />
		</p>

		<CarteMarches>
			<template #img__marche>
				<NuxtImg
					alt="mains mobilum"
					src="/references/cover_image/jardinieres-trocadero-paris.jpg"
					center
					width="1000"
					fit="cover"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
			</template>

			<template #titre__marche>
				<h3>Test titre</h3>
			</template>

			<template #texte__marche>
				<p>Texte ici blablabla</p>
			</template>
		</CarteMarches>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { CarteMarches } from "#components";
</script>

<style scoped>
/*---------------------------------------------------------------------------------------------------
		Le style ne marche pas quand il est directement sur le fichier du composant.
		Il faut donc le copier / coller sur la page où l composant sera utilisé .........
		Ca n'a aucun sens.
---------------------------------------------------------------------------------------------------*/

.CarteMarches img {
	object-fit: contain;
	max-width: 100%;
}

.CarteMarches h3 {
	position: absolute;
	inset: auto auto 30px 30px;
	margin: 0;
	transition: inset 0.3s 0.3s ease-out;
	font-family: "Bebas neue";
	text-transform: uppercase;
	color: white;
}

.CarteMarches p,
.CarteMarches a {
	position: absolute;
	opacity: 0;
	max-width: 80%;
	transition: opacity 0.3s ease-out;
	color: white;
}
.CarteMarches p {
	inset: auto auto 80px 30px;
}
.CarteMarches a {
	inset: auto auto 40px 30px;
	color: inherit;
	text-decoration: none;
}
.CarteMarches:hover h3 {
	inset: auto auto 220px 30px;
	transition: inset 0.3s;
}
.CarteMarches:hover p,
.CarteMarches:hover a {
	opacity: 1;
	transition: opacity 0.3s 0.1s ease-in;
}
.CarteMarches:hover img {
	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	filter: grayscale(100%) blur(1px);
	transition: all 0.5s ease;
	opacity: 80%;
}

@media only screen and (max-width: 950px) {
	ul {
		display: flex;
		justify-content: center;
	}
	.CarteMarches {
		margin: 1rem;
		width: 90%;
		height: 60vh;
		/* border-radius: 10px;*/
		overflow: hidden;
		position: relative;
		color: white;
	}
}
</style>
