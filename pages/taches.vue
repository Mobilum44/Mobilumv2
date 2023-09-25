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
					src="/savoir-faire.jpg"
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


	<!------------

		<div class="cards__order">
			<NuxtLink :to="project.path">
				<CarteMarches>
					<template #img__marche>
						<NuxtImg :src="project.cover_image" />
					</template>

					<template #titre__marche>
						<h3>{{ project.title }}</h3>
					</template>
					
					<template #texte__marche>
						<p>
							{{ project.cover_text }}
						</p>
					</template>
				</CarteMarches>
			</NuxtLink>
		</div> ----->
	</NuxtLayout>
</template>

<!--
<script setup lang="ts">
import { CarteMarches } from '#components'
</script>


----------->
