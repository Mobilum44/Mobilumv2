<template>
	<NuxtLayout name="default">
		<template #slot_image>
			<div class="slot_image" :style="backgroundStyles('/backgroundpages/fond-collection-beam-plage-resized.jpg')">
				<h1>Nos collections</h1>
			</div>
		</template>

		<div class="collection">
			<div class="sub__section">
				<NuxtLink class="items_styling shadow" to="/mobilier-urbain">
					<NuxtImg
						class="items__img"
						alt="mobilum mobilier urbain"
						src="/collectioncover/fond-parc-mobilier-urbain.jpg"
						width="800"
						height="500"
						format="avif,webp"
						placeholder
						loading="lazy"
					/>
					<p>Mobilier urbain</p>
				</NuxtLink>

				<div class="left">
					<p>Nos créations de mobiliers urbains<br /></p>
				</div>
			</div>

			<div class="sub__section reverse">
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

			<div class="sub__section reverse">
				<div class="right">
					<p class="right-align">Une valeur sûre</p>
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
		<!-- <Defilant /> --->
	</NuxtLayout>
</template>

<script lang="ts" setup>
const img = useImage();

definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "Nos collections",
});

function backgroundStyles(thumbnail: string): { backgroundImage: string } {
	const imgUrl = img(thumbnail, {
		width: 1920,
		quality: 60,
		placeholder: true,
		format: "avif,webp",
	});
	return { backgroundImage: `url('${imgUrl}')` };
}
</script>

<style scoped>
.slot_image {
	background-size: cover;
	background-attachment: fixed;
}

.collection {
	margin-top: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	.slot_image {
		background-size: cover;
		background-attachment: local;
	}

	.collection {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 0;
	}

	.sub__section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.left,
	.right {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.reverse {
		flex-direction: column-reverse;
	}

	.sub__section p {
		text-align: center;
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
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
