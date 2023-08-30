<template>
	<Layout>
		<h3>Inspirations</h3>
		<p>https://www.sanleonardo.it/</p>
		<h3>A faire</h3>
		<p>
			Faire une barre ou section recherche <br />
			Formulaire de Contact <br />
			Mettre logo réseaux sociaux <br />
			Faire liste des produits et des photos / retraitements à prévoir <br />
			Proposer vidéastes
		</p>

		<h3>Propositions</h3>
		<p>
			Plutôt qu'une photo en page d'accueil, courte vidéo (gif) <br />
			Harmonisation et choix globaux de l'esthétisme du site <br />
			Photos à modifier <br />
		</p>

		<CarteMarches>
			<template #img__marche>
				<NuxtImg
					alt="mains mobilum"
					src="../../src/assets/img/savoir-faire.jpg"
					center
					width="1000px"
					fit="cover"
				/>
			</template>

			<template #titre__marche>
				<h2>Test titre</h2>
			</template>

			<template #texte__marche>
				<p>Texte ici blablabla</p>
			</template>
		</CarteMarches>

		<NuxtLink to="/test"> Page test caroussel </NuxtLink>
	</Layout>
</template>
