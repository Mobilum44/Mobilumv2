<template>
	<NuxtLayout>
		<div class="sub__section">
			<Button theme="bordered" to="/collection"> Retour à l'offre </Button>

			<h1>Nos dossiers d'exception</h1>
		</div>
		<section class="sub__section">
			<div class="chapeau">
				<p>Nos projets sont trop exceptionnels !</p>
			</div>
		</section>

		<section class="sub__section">
			<h2>Les grands comptes</h2>

			<section class="sub__section__content">
				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/gare-sncf-grenoble.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>La SNCF</h3>
					</template>

					<template #texte__marche>
						<p>On refait l'intérieur des gares</p>
						<Button theme="transparent" to="/project"> Découvrir </Button>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/assises-societe-du-grand-paris.png"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Le grand paris</h3>
					</template>

					<template #texte__marche>
						<p>Projet monumental du renouvellement des gares</p>
					</template>
				</CarteMarches>
			</section>
		</section>

		<section class="sub__section">
			<h2>Les remarquables</h2>

			<section class="sub__section__content">
				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/jardinieres-trocadero-paris.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Le trocadéro</h3>
					</template>

					<template #texte__marche>
						<p>Les jardinières du Trocadéro</p>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/crous-nantes.png"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Chanel</h3>
					</template>

					<template #texte__marche>
						<p>Mobilier intérieur pour les étudiants</p>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/mobilum-piano-rezzo-ecole-normale-superieure-ens.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Piano Rezzo</h3>
					</template>

					<template #texte__marche>
						<p>Mobilier extérieur pour les étudiants dans un cadre prestigieux</p>
					</template>
				</CarteMarches>
			</section>
		</section>

		<section class="sub__section">
			<h2>Les conceptuels</h2>

			<section class="sub__section__content">
				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/sorbonne-universite-amphi-stoop-cube.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Université de la Sorbonne</h3>
					</template>

					<template #texte__marche>
						<p>Des transats infinis</p>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="table infinie vertou"
							src="/references/cover_image/projet-vertable-tables-vertou.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Parc de la Sèvre, Vertou</h3>
					</template>

					<template #texte__marche>
						<p>Une table infinie</p>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/carnon-transats-mila2.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Port de plaisance, Carnon</h3>
					</template>

					<template #texte__marche>
						<p>Des transats infinis</p>
					</template>
				</CarteMarches>
			</section>
			<section class="sub__section__content">
				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/paris-saclay-tolerie-foreizienne-exceptionnel.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Paris Saclay</h3>
					</template>

					<template #texte__marche>
						<p>Projet tolerie forezienne</p>
					</template>
				</CarteMarches>

				<CarteMarches>
					<template #img__marche>
						<NuxtImg
							alt="mains mobilum"
							src="/references/cover_image/feuille-roquefere.jpg"
							center
							width="1000px"
							fit="cover"
						/>
					</template>

					<template #titre__marche>
						<h3>Roquefert</h3>
					</template>

					<template #texte__marche>
						<p>On a imprimé des feuilles sur les bancs</p>
					</template>
				</CarteMarches>
			</section>
		</section>
		<p class="referencement">
			Plongez dans notre portfolio de projets en BFUP d'exception, en termes de taille, de prestige et d'exigence
			technique.<br /><br />
			<!-- De la participation à des projets monumentaux pour des espaces emblématiques, aux tables de pique-nique
impressionnantes conçues pour accueillir de grandes foules, notre expertise en mobilier urbain en BFUP garantit des
réalisations exceptionnelles qui inspirent et marquent les esprits. <br /><br /> -->
			Chaque projet est réalisé sur mesure pour répondre aux demandes spécifiques de chaque site et s'intégrer
			harmonieusement dans son environnement. Nous sommes fiers de contribuer à la création de lieux publics
			uniques, alliant fonctionnalité, durabilité et design. <br /><br />
			Nous nous engageons à continuer à innover et à repousser les limites pour façonner les espaces publics de
			demain, en créant des projets de mobiliers urbains en BFUP qui captivent les regards et améliorent la vie
			quotidienne des citadins.
		</p>
	</NuxtLayout>
</template>

<style scoped>
h2 {
	border: 0;
}

.chapeau {
	width: 70%;
}
.sub__section__content {
	gap: 1rem;
	margin-bottom: 1rem;
}
</style>
