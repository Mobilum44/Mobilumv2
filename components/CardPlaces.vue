<template>
	<div class="cartes_defilantes">
		<div class="card shadow">
			<figure class="card__thumb">
				<NuxtImg
					src="/cards/Galets.jpg"
					alt="Galets rouen bfup Mobilum"
					class="card__image"
					fit="cover"
					width="250"
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
					width="250"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<figcaption class="card__caption">
					<h4>Parc</h4>
					<p>Développement durable intégré.</p>
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
					width="250"
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
					width="250"
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
					height="250"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<figcaption class="card__caption">
					<h4>Tramway</h4>
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
					width="250"
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
					width="250"
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
					width="250"
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
					width="250"
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
</template>

<style scoped>
.shadow {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.cartes_defilantes {
	display: flex;
	flex-wrap: wrap;
}

.card {
    position : relative;
    margin : 1.3rem;
    overflow : hidden;

	height: 250px;
	width: 250px;


    display : flex;
    align-items: center;
    justify-content: center;

    border: solid #fefcf3 6px;
    background-color : #1A949D;
}

.card img {
    object-fit : cover;
    max-height : 100%;
    opacity : 1;
    z-index : 99;
}

/*--------------------------------------------------------------------------------*/
.card h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-shadow : rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;


    z-index : 1;
	opacity: 1;

	font-family: "Bebas Neue";
	font-weight: 400;
	font-size: 1.5rem;
	text-decoration: none;
	text-align: center;
	letter-spacing: 1px;
	color: white;
}

.card p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    opacity : 0;
    width : 60%;

    color : white;
    text-align: center;
}
.card:hover h4 {
	opacity: 0;
    transition: all 0.1s ease-in-out;
}
.card:hover p {
	opacity: 1;
    transition: all 0.7s ease-in-out;
}

.card:hover img {
	opacity: 0.3;
	transition: all 0.3s ease-in-out;
}

</style>


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