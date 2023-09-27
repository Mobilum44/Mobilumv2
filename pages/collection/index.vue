<template>
	<NuxtLayout name="default">
		<!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
Supprimer sav -->
		<template #slot_image>
			<div class="slot_image">
				<!-- :style="{ backgroundImage: `url(${image})`}">-->
				<h1>Nos collections</h1>
			</div>
		</template>

		<b> Rendre ca responsive // Corriger toutes les images qui explosent ( . JPG)</b>

		<div class="collection">
			<div class="sub__section">
				<NuxtLink class="items_styling shadow" to="/mu">
					<NuxtImg
						class="items__img"
						alt="SNCF Gare Auxerre"
						src="/collectioncover/angers_tram.jpg"
						width="800"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<p>Mobilier urbain</p>
				</NuxtLink>

				<div class="left">
					<p>Une gamme de 70 (à vérifier) mobiliers urbains à votre disposition <br />
						<b>Photo angers beacoup utilisée</b>
					</p>
				</div>
			</div>

			<div class="sub__section">
				<div class="right">
					<p class="right-align">Nous savons répondre présents</p>
				</div>

				<NuxtLink class="items_styling shadow" to="/exceptionnels">
					<NuxtImg
						class="items__img"
						alt="SNCF Gare Auxerre"
						src="/collectioncover/SNCF_auxerre.png"
						width="800"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<p>Dossiers d'exception</p>
				</NuxtLink>
			</div>

			<div class="sub__section">
				<NuxtLink class="items_styling shadow" to="/signaletique">
					<NuxtImg
						class="items__img"
						alt="SNCF Gare Auxerre"
						src="/collectioncover/gaetan-sablage-totem.jpg"
						width="800"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<p>Signalétique</p>
				</NuxtLink>
				<div class="left">
					<p>Démarquez vous</p>
				</div>
			</div>

			<div class="sub__section">
				<div class="right">
					<p class="right-align">Une valeur sure</p>
				</div>
				<NuxtLink class="items_styling shadow" to="/hook">
					<NuxtImg
						class="items__img"
						alt="SNCF Gare Auxerre"
						src="/collectioncover/hook-cover-image.jpg"
						width="800"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<p>HOOK</p>
				</NuxtLink>
			</div>
		</div>

		<p class="referencement">
			Découvrez notre nouvelle collection de mobilier urbain en BFUP, alliant esthétisme et durabilité. Des bancs,
			tables et jardinières conçus en BFUP pour embellir et aménager vos espaces publics de manière moderne et
			résistante.
		</p>
		<!-- <Defilant /> --->
	</NuxtLayout>
</template>

<style scoped>
.slot_image {
	background: url("/backgroundpages/fond-plage-collection.jpg") center center no-repeat;
	background-size: cover;
	background-attachment: fixed;
}

.collection {
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.sub__section {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;
	gap: 1rem;
	margin-bottom: 5rem;
}

.left,
.right {
	width: 50%;
}

.left > p,
.right p {
	width: 80%;
	color: black;
	font-family: "Montserrat";
	font-weight: 400;
	font-size: 2rem;
	letter-spacing: -1px;
	margin-bottom: 1rem;
	padding: 1rem;
}

.right-align {
	text-align: right;
}
/*------------------------------------------------------------------------------------------
        Images des collections
-------------------------------------------------------------------------------------------*/

.items_styling {
	border-radius: 4px;
	justify-self: center;
	position: relative;
	height: 400px;
	width: 640px;
	/*
  background-color: rgba(250, 250, 250, 0.25); */
	background-color: #1a949d;
}
.items_styling > img {
	border-radius: 4px;
	height: 100%;
	max-width: 100%;
	object-fit: cover;
	opacity: 1;
	transition: all 0.3s ease-in-out;
}

.items_styling p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	margin: 0;
	opacity: 1;

	font-family: "Bebas Neue";
	font-weight: 400;
	font-size: 1.5rem;
	text-decoration: none;
	text-align: center;
	letter-spacing: 2px;
	color: white;
	transition: all 0.5s ease-in-out;
}

.items_styling:hover p {
	text-shadow: #0a2647 1px 0 10px;
	opacity: 1;
	transition: all 0.5s ease-in-out;
}

.items_styling:hover > img {
	opacity: 0.3;
	transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 950px) {
	.collection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 0;
	}

	.items_styling {
		height: 20rem;
		width: 20rem;
	}
	.items_styling p {
		opacity: 1;
	}
}
</style>
