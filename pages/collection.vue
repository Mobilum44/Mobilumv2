<template>
	<!--mobilier urbain, Ammenagement(hook + signaletique), grands comptes, Nos réalisations sur mesure
	Supprimer sav -->
	<NuxtLayout name="default">
		<template #slot_image>
			<div class="slot_image"> <!-- :style="{ backgroundImage: `url(${image})`}">-->
				<h1>Nos collections</h1>
			</div>
		</template>

		<b> Rendre ca responsive</b>


			<div class="collection">

				<div class="sub__section">
					<NuxtLink class="items_styling shadow" to="/mu">
						<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="/photospages/angers_tram.jpg" center />
						<p>Mobilier urbain</p>
					</NuxtLink>

					<p>Une gamme complète de MU à votre disposition</p>
				</div>

				<div class="sub__section">
					<NuxtLink class="items_styling shadow" to="/exceptionnels">
						<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="/photospages/SNCF_auxerre.png" center />
						<p>Dossiers d'exception</p>
					</NuxtLink>

					<p>Nous savons répondre présents</p>
				</div>

				<div class="sub__section">
					<NuxtLink class="items_styling shadow" to="/signaletique">
						<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="/photospages/gaetan-sablage.jpg" center />
						<p>Signalétique</p>
					</NuxtLink>
					<p>Démarquez vous</p>
				</div>

				<div class="sub__section">
					<NuxtLink class="items_styling shadow" to="/hook">
						<NuxtImg class="items__img" alt="SNCF Gare Auxerre" src="/photospages/hook-cover-image.JPG" center />
						<p>HOOK</p>
					</NuxtLink>
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

	</NuxtLayout>
</template>

<script>
definePageMeta({
  layout: "Default",
});

</script>

<!---
<script>
import BackColl from "/backgroundpages/fond-plage-collection.jpg";

export default {
  data() {
    return {
      image: BackColl,
    };
  }
};
</script>
--->


<style scoped>

.slot_image {
	background: url("/backgroundpages/fond-plage-collection.jpg") center center no-repeat;
	background-size: cover;
	background-attachment: fixed;
}

.collection {
	margin-top : 5rem;
	display: flex;
	flex-direction: column;
	align-items : center;
	width : 90%;
}

.sub__section {
	width : 60%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items : center;
	gap : 4rem;
}

.sub__section p {
	color: black;
	font-family: "Montserrat";
	font-weight: 400;
	line-height: 2rem;
	margin-left: 3rem;
	margin-bottom: 2rem;
}

/*------------------------------------------------------------------------------------------
        Images des collections
-------------------------------------------------------------------------------------------*/

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
	font-weight : 400;
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
