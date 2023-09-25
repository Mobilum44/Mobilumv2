<template>
	<div class="cartes_defilantes">
		<div class="card-container">
			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/Galets.jpg"
						alt="Galets rouen bfup Mobilum"
						class="card__image"
						fit="cover"
						height="220"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Centre ville</h4>
						<p>Design urbain unique.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/olivier.jpg"
						alt="photo parc du loroux-botereau mobilum"
						class="card__image"
						fit="cover"
						height="350"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Parc</h4>
						<p>Développement durable assumé.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/obrac-la-rochelle-port-neuf.png"
						alt="Bord de mer à cucq transat Camah de Mobilum"
						class="card__image"
						fit="cover"
						height="220"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Bord de mer</h4>
						<p>Embruns, climats ne sont plus des contraintes.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/gare-est-paris-mobilum.jpg"
						alt="Photo gare paris mobilum"
						class="card__image"
						fit="cover"
						height="300"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Gare</h4>
						<p>Nous participons aux grands projets.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/angers_tram.jpg"
						alt="Banc Vasco de Gamma Angers Mobilum"
						class="card__image"
						fit="cover"
						height="220"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Tram</h4>
						<p>Usage assumé pour un fort traffic.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<!-- Parcs, Bords de mer, Gare, Lycée, ...-->
					<NuxtImg
						src="/cards/zone-commerciale-puilboreau-mobilum-origami.jpeg"
						alt="Banc et totem origami par mobilum zone commerciale la rochelle"
						class="card__image"
						fit="cover"
						height="220"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Zone commerciale</h4>
						<p>Nos gammes sont cohérentes et séduisantes.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/lycée-nord-sur-erdre-mobilum.jpg"
						alt="Vue du ciel Lycée Nord sur Erdre à Nantes Mobilum"
						class="card__image"
						fit="cover"
						height="300"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Ecole</h4>
						<p>Nous accompagnons les générations novatrices.</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<NuxtImg
						src="/cards/totem-tertiaire-mobilum.jpg"
						alt="totem en BFUP pour l'entreprise Luneau Papin par Mobilum"
						class="card__image"
						fit="cover"
						height="300"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Tertiaire</h4>
						<p>Image de marque remarquable et personnalisable. PHOTO DE PIANO REZZO</p>
					</figcaption>
				</figure>
			</div>

			<div class="card shadow">
				<figure class="card__thumb">
					<!-- Parcs, Bords de mer, Gare, Lycée, ...-->
					<NuxtImg
						src="/cards/lotissement-hook-mobilum.png"
						alt="Lotissement coffret technique hook mobilum"
						class="card__image"
						fit="cover"
						height="220"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<figcaption class="card__caption">
						<h4>Lotissement</h4>
						<p>De l'efficacité dans la simplicité.</p>
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
</template>

<style scoped>
.cartes_defilantes {
	width: 100%;
}
.card-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
/* --------------------------------------------------------------------------------------
            Animation des cartes
---------------------------------------------------------------------------------------*/
.card {
	width: 200px;
	height: 200px;
	margin: 10px;
	border-radius: 3%;
}

.card:hover .card__caption {
	top: 50%;
	transform: translateY(-50%);
}
.card:hover .card__image {
	transform: translateY(-10px);
}
.card:hover .card__thumb::after {
	top: 0;
}
.card__thumb {
	margin: 0;
	position: relative;
	overflow: hidden;
	height: 200px;
	width: 200px;
	border-radius: 3%;
}
.card__thumb::after {
	position: absolute;
	top: 0;
	display: block;
	content: "";
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 10%, rgba(255, 255, 255, 0) 100%);
	transition: 0.3s;
	top: calc(100% - 140px);
}

.card__image {
	transition: 0.5s ease-in-out;
	object-fit: cover;
}
.card__caption {
	position: absolute;
	width: 200px;
	height: 200px;
	top: 50%;
	z-index: 1;
	padding: 0 1vw;
	color: white;
	transform: translateY(-50%);
	transition: 0.3s;
	top: calc(100% - 110px);
	transform: unset;
}

.card__caption h4 {
	margin-top: 8vh;
	max-height: 85px;
	overflow: hidden;
	font-family: "Bebas Neue";
	font-size: 1.5rem;
	line-height: 28px;
	text-shadow: 0px 1px 5px black;
}
.card__caption p {
	height: 200px;
	font-family: "Roboto", sans-serif;
	color: white;
	transition: 0.5s ease-in-out;
}
</style>
