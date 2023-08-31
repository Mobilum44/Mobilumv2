<template>
	<!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
	Supprimer sav -->
	<Layout>
		<template #slot_image>
			<section class="slot_image">
				<h1>Nos collections</h1>
			</section>
		</template>

		<b> Le bordel pour rendre tout ca responsive </b>

		<p>
			Pour la signalétique <br />
			\diSTINQU2 \résisistant \ ultra personalisable font de nos totems des pièces uniques dans ce domaine <br />
			Dé"tails en plus sur chaque page de totem
		</p>

		<div class="old__collection">
			<!-- <NuxtLink
				class="items_styling shadow"
				:to="edge.node.path"
				v-for="(edge, i) in $page.allCollection.edges"
				:key="edge.node.id"
			>
				<NuxtImg
					class="items__img"
					alt="Sablage pour signalétique MOBILUM"
					src="\photospages\gaetan-sablage.jpg"
					v-if="i === 0"
					center
				/>
				<NuxtImg
					class="items__img"
					alt="SNCF Gare Auxerre"
					src="\photospages\hook-cover-image.JPG"
					v-else-if="i === 1"
					center
				/>
				<NuxtImg
					class="items__img"
					alt="banc Mobilum sur le tram d'Angers"
					src="\photospages\angers_tram.jpg"
					v-else
					center
				/>
				<p>
					{{ edge.node.title }}
				</p>
			</NuxtLink> -->

		</div>

		<div class="sub__section">
			<div class="collection">

				<NuxtLink class="items_styling shadow" to="/mu">
					<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="\photospages\SNCF_auxerre.png" center />
					<p>Mobilier urbain</p>
				</NuxtLink>


				<NuxtLink class="items_styling shadow" to="/exceptionnels">
					<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="\photospages\SNCF_auxerre.png" center />
					<p>Dossiers d'exception</p>
				</NuxtLink>

				<NuxtLink class="items_styling shadow" to="/signaletique">
					<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="\photospages\SNCF_auxerre.png" center />
					<p>Signalétique</p>
				</NuxtLink>

				<NuxtLink class="items_styling shadow" to="/hook">
					<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="\photospages\SNCF_auxerre.png" center />
					<p>HOOK</p>
				</NuxtLink>


			</div>

			<div class="collection__descriptions">
				<p>Une gamme complète de MU à votre disposition</p>
				<p>Nous savons répondre présents</p>
				<p>Démarquez vous</p>
				<p>Une valeur sure</p>
			</div>
		</div>

		<p class="referencement">
			Découvrez notre nouvelle collection de mobilier urbain en BFUP, alliant esthétisme et durabilité. Des bancs,
			tables et jardinières conçus en BFUP pour embellir et aménager vos espaces publics de manière moderne et
			résistante.
		</p>
		<!--
    <Defilant />
--->
	</Layout>
</template>
<!-- 
<page-query>
query Collections {allCollection{edges{node{title, path}}}}
</page-query> -->

<style scoped>
.slot_image {
	background: url("\photospages\fond-plage-collection.jpg	") center center no-repeat;
	background-size: cover;
	background-attachment: fixed;
}

.sub__section {
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 4rem;
	margin-top: 3rem;
}

.old__collection {
	display: flex;
	flex-direction: row;
	gap: 2rem;
}

/*------------------------------------------------------------------------------------------
        Images des collections
-------------------------------------------------------------------------------------------*/
.collection {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.items_styling {
	border-radius: 4px;
	justify-self: center;
	position: relative;
	height: 300px;
	width: 300px;
	/*
  background-color: rgba(250, 250, 250, 0.25); */
	background-color: #1a949d;
}

.items_styling > .items__img {
	border-radius: 4px;
	width: 100%;
	height: 100%;
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
	opacity: 0;

	font-family: "Bebas Neue";
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

/*------------------------------------------------------------------------------------------
        Description des collections
-------------------------------------------------------------------------------------------*/
.collection__descriptions {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
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
