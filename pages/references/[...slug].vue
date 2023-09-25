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
						<p>
							<strong>Type</strong>: {{ doc.type }}
						</p>
					</li>
					<li>
						<p>
							<strong>Gamme</strong>: {{ doc.gamme }}
						</p>
					</li>
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
/*.floating_title {
border : solid black;
margin : 0;
margin-top : 55vh;
margin-left : 2rem;
padding : 0;
position : fixed;
height : 100vh;
width : 50%;
}*/

.arrow {
	position: absolute;
	top: 20vh;
	left: 3vw;
}

h1 {
	color: black;
	border: none;
	text-align: center;
	font-size: 300%;
	margin: 0;
}

.sub__section {
	height: 100vh;
	margin-top: 15vh;
	display: flex;
	flex-direction: row;
}
.sub__section__content {
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.text {
	padding: 2rem;
	height: 100%;
	padding-bottom: 0;
	background-color: #f5ebe0;
}
.chapeau {
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: solid black 1px;
	margin: 0;
	margin-bottom: 1rem;
	padding: 1rem;
}
.chapeau div {
	width: 100%;
}
.chapeau p {
	margin-top: 0;
}

.chapeau__column {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.chapeau__column div {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.chapeau__column p {
	margin: 0;
}

.slide-img {
	object-fit: cover;
	height: 100vh;
}

.slider {
	max-width: 50vw;
	height: 100%;
}

.projet {
	width: 100%;
	height: 40vh;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.description__projet {
	width: 80%;
	background-attachment: scroll;
	overflow: scroll;
	overflow-x: hidden;
}

@media only screen and (max-width: 950px) {
}
</style>
