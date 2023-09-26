
<!-- Contenu conditionnel : https://vuejs.org/guide/essentials/conditional.html -->
<!-- <div v-if="doc.dureeDuProjet">
		<h1>Durée du projet</h1>
		<p>{{ doc.dureeDuProjet }}</p>
	</div> -->
	
<template>
	<main class="reference">
		<ContentDoc v-slot="{ doc }">
			<div class="reference-header">
				<h1>{{ doc.title }}</h1>
				<p>{{ doc.sub_title }}</p>
			</div>
			<div class="reference-info">
				<ul>
					<!--<li>
						<p>
							<strong>Type</strong>: {{ doc.type }}
						</p>
					</li>
					<li>
						<p>
							<strong>Gamme</strong>: {{ doc.gamme }}
						</p>
					</li> --->
					<li>
						<p>
							<strong>Localisation</strong>: {{ doc.localisation }}
						</p>
					</li>
					<li>
						<p>
							<strong>MOE</strong>: {{ doc.moe }}
						</p>
					</li>
					<li>
						<p>
							<strong>MOA</strong>: {{ doc.moa }}
						</p>
					</li>
					<li>
						<p>
							<strong>Fabricant</strong>: {{ doc.fabricant }}
						</p>
					</li>
					<li>
						<p>
							<strong>Date réalisation</strong>: {{ doc.date_realisation }}
						</p>
					</li>
				</ul>
			</div>
			<div class="reference-image">
				<figure>
					<NuxtImg :src="doc.cover_image" :alt="doc.cover_text" width="500" height="500" format="avif,webp" placeholder loading="lazy" />
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
	<!-- <NuxtLayout>
		<div class="sub__section wide">
			<Button theme="arrow" to="/exceptionnels"> ⇦ </Button>
			<div class="sub__section__content text">
				<div>
					<h1>
						\ <br />
						{{ $page.reference.title }}
					</h1>
				</div>
				<div class="chapeau">
					<p><em>Localisation</em> : {{ $page.reference.localisation }} <br /></p>
					<div class="chapeau__column">
						<div>
							<p><em>MOE</em> : {{ $page.reference.moe }} <br /></p>
							<p><em>MOA</em> : {{ $page.reference.moa }} <br /></p>
						</div>
						<div>
							<p><em>Fabricant</em> : {{ $page.reference.fabricant }} <br /></p>
							<p><em>Date de réalisation</em> : {{ $page.reference.date_realisation }} <br /></p>
							<b><br />Les images sont floues</b>
						</div>
					</div>
				</div>
			</div>
			<div class="sub__section__content">
				<div class="slider">
					<carousel
						:autoplay="true"
						:per-page="1"
						:navigation-enabled="false"
						:pagination-enabled="false"
						:autoplay-hover-pause="true"
						>
						<slide
						v-for="img in $page.reference.carousel"
						:key="img.src"
						>
						<NuxtImg
						class="slide-img"
						:src="img"
						/>
						</slide>
						</carousel>
				</div>
			</div>
		</div>

		<div class="projet">
			<p class="description__projet">
				{{ $page.reference.description }}
			</p>
		</div>
	</NuxtLayout> -->
</template>

<style scoped>
.reference {
	margin-top : 20vh;
	width : 60%;
	display : flex;
	flex-direction: column;
	align-items: center;
}
.reference-header {
	padding : 2rem;
	width : 80%;
	border : solid black 1px;
	display : flex;
	flex-direction: column;
	align-items: center;
}

h1 {
	color: black;
	border: none;
	border-bottom : solid black 1px;
	text-align: center;
	font-size: 300%;
	margin: 0;
}



@media only screen and (max-width: 950px) {
}
</style>
