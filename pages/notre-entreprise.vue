<template>
	<NuxtLayout name="default">
		<template #slot_image>
			<div class="slot_image" :style="backgroundStyles('/backgroundpages/fond-entreprise-loroux-bottereau.jpg')">
				<h1>Notre entreprise</h1>
			</div>
		</template>

		<section class="page_top">
		</section>

		<div class="section_top"></div>

		<!-------------------------------------------------------------------
    La griffe Mobilum
-------------------------------------------------------------------->

		<div class="sub__section wide">
			<div class="sub__section__content">
				<div class="section__side illustration croquis"></div>

				<div class="section__side text design">
					<h2>\ Le design selon Mobilum</h2>
					<div class="section__text">
						<p>
							<!--
            La marque et le design : designers et distinctions
			---->
							<strong>"Le design, on adhère !"</strong>
							<br /><br />
							Mobilum se définit par sa compétence en BFUP et son design. <br/>
							Notre ambition est de concevoir des mobiliers urbains modernes et élégants qui s’intègrent
							harmonieusement dans l’espace public. <br /><br />
							Pour cela nous avons fait le choix de nous associer à des designers aguerris qui pensent
							aussi avant tout à l’usage de leurs créations et à la réinterprétation de mobiliers urbains
							classiques. De cette collaboration émerge une ligne de produits avec chacune une
							personnalité unique et une volonté commune de rendre service aux usagers tout en proposant
							des mobiliers discrets, élégants sans ostentation et durables dans le temps.
						</p>
						<div class="real__model">
							<NuxtImg
								alt="Table cantine réelle"
								src="/photospages/table-cantine-02-croquis.png"
								center
								width="200"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<NuxtImg
								alt="Table cantine réelle"
								src="/photospages/table-cantine-01-croquis.png"
								center
								width="200"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
							<NuxtImg
								alt="Logo Janus de la cité 2016"
								src="/photospages/janus-de-la-cite-logo.png"
								center
								width="70"
								fit="cover"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-------------------------------------------------------------------
Notre savoir-faire
-------------------------------------------------------------------->
		<div class="sub__section wide dark">
			<div class="sub__section__content reverse">
				<div class="section__side text">
					<h2>\ Notre savoir-faire</h2>
					<div class="section__text">
						<p>
							<strong>"Chez Mobilum, nos mains sont essentielles."</strong>
							<br /><br />
							Notre volonté est de produire un travail artisanal de qualité 100% français en privilégiant
							le talent des partenaires locaux. Chaque mobilier en Béton Fibré Ultra Performant (BFUP) a
							été étudié, conçu et réalisé avec une attention méticuleuse aux détails, reflétant notre
							engagement envers l’excellence et la fierté du travail bien fait. <br /><br />
							Les techniques développées après des années de recherches sont uniques et exclusives pour
							parvenir à la finesse et les formes de nos mobiliers, dans ce matériau si novateur.<br /><br />
							Désireux de partager notre expérience et notre savoir-faire, nous avons mis en place une
							formation en interne permettant de certifier l’acquisition de compétences propres à
							l’industriel BFUP en partenariat avec l’OPCO2i. Nous croyons fermement à la transmission des
							savoirs qui garantit la pérennité de notre activité.
						</p>
					</div>
				</div>
				<div class="section__side illustration savoir-faire">
					<!--
				<NuxtImg
				alt="mains mobilum"
				src="/savoir-faire.jpg"
				center
				width="1000px"
				fit="cover"
				/>
				-->
				</div>
			</div>
		</div>

		<!---------------------------------------------------
	Nos engagements
	--------------------------------------------------->

		<div class="sub__section wide">
			<div class="sub__section__content">
				<div class="section__side illustration RSE">
					<!--
			<NuxtImg
			alt="Angers tram"
			src="/photospages/angers_tram.jpg"
			center
			width="1000px"
			fit="cover"
			/>
			-->
				</div>
				<div class="section__side text text-rse">
					<h2>\ Nos engagements</h2>
					<div class="section__text">
						<p>
							<strong
								>"Notre devoir est de produire des mobiliers de manière durable et réfléchie."</strong
							>
							<br /><br />
							Repenser le mobilier urbain nécessite d’intégrer le développement durable dans nos
							recherches, nos créations et notre croissance. <br /><br />
							L’intégralité des produits présentés est fabriquée sur notre site au Loroux-Bottereau en
							Loire Atlantique. <br /><br />
							Pérennité du matériau, faible entretien et réponse aux exigences climatiques ont été
							essentiels dans notre choix du BFUP.<br /><br />
							Mobilum a engagé une démarche RSE globale qui commence par la réalisation de son bilan
							carbone, indispensable à la définitions d'objectifs justes et précis. <br/><br/>
						</p>
					</div>
				</div>
			</div>
		</div>

		<!---------------------------------------------------
Nos activités
--------------------------------------------------->
		<div class="sub__section wide dark cards">
			<div class="left">
				<h3>Mobilum, une présence remarquée, un réseau national</h3>
			</div>
			<div class="sub__section">
				<CardPlaces />
				<!--
				<div class="sub__section wide">
					<div class="left texte-commerce">
					</div>
					<Villes />
				</div>---->
			</div>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: false,
});

const img = useImage();

useSeoMeta({
	title: "Mobilum",
});

function backgroundStyles(thumbnail: string): { backgroundImage: string } {
	const imgUrl = img(thumbnail, {
		width: 1920,
		quality: 80,
		placeholder: true,
		format: "avif,webp",
	});
	return { backgroundImage: `url('${imgUrl}')` };
}
</script>

<style scoped>
.slot_image {
	opacity: 90%;
	background-size: cover;
	background-attachment: fixed;
}
/*-------------------------------------------------------------------------
    General
-----------------------------------------------------------------------*/
h1 {
	opacity : 0;
}

h2 {
	padding-bottom: 1rem;
	margin: 1rem;
	padding-top: 2rem;
	border-bottom: solid 1px;
}

h3 {
	font-family: "Montserrat";
	font-weight: 500;
	font-size: 1.5rem;
	padding-bottom: 1rem;
	margin: 1rem;
	padding-top: 2rem;
	border-bottom: solid 1px;
}

/*-------------------------------------------------------------------------
    Page top 
  -----------------------------------------------------------------------*/

.section_top {
	width: 70%;
	margin-bottom: 3rem;
	margin-top: 3rem;

	display: flex;
	flex-direction: row;
	text-align: justify;
	align-items: center;
}

/*-------------------------------------------------------------------------
    Page content 
  -----------------------------------------------------------------------*/
.sub__section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
}
.section__side {
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* border-radius: 5px; */
	height: 120vh;
}
.design {
	margin: 0;
	margin-right: 3rem;
}

.real__model {
	padding-top: 3rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.cards {
	display: flex;
	align-items: center;
	padding-bottom: 2rem;
}
/*--------------------------------------------
    Gestion des textes
--------------------------------------------*/
.text {
	padding: 1rem;
}
.section__text {
	z-index: 1;
	padding: 2rem;
	text-align: justify;
	padding-top: 0;
}
.texte-commerce {
	margin-top: 2rem;
}
/* ------------------------------------------------------------------------------------------
            Gestion des images
--------------------------------------------------------------------------------------------*/
.illustration {
	width: 200%;
	object-fit: contain;
	background-position-y: center;
}

.croquis {
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #fefcf3),
		url("/photospages/croquis-sovann-kim-pour-mobilum.png");
	background-size: cover;
}
.savoir-faire {
	background-image: linear-gradient(to left, rgba(255, 0, 0, 0), #f5ebe0), url("/photospages/savoir-faire.jpg");
	background-size: cover;
}
.RSE {
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #fefcf3),
		url("/photospages/mobilum-valeurs-rse-avenirv3.jpg");
	background-size: cover;
	width: 100%;
}

.text-rse {
	width: 100%;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	h2 {
		padding-left: 1rem;
		padding-bottom: 1rem;
		margin: 0rem;
		border-bottom: solid 1px;
	}

	.section_top {
		margin: 0rem;
	}

	.sub__section {
		height: 100%;
	}
	.sub__section__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.section__side {
		height: 100%;
		justify-content: flex-end;
		border-radius: 5px;
		padding: 0;
	}

	.section__text {
		padding-bottom: 0;
		width: 100%;
	}

	.text {
		width: 100%;
	}

	.real__model {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding-top: 2rem;
		align-items: center;
		justify-content: center;
	}

	.dark {
		background-color: #fefcf3;
		color: black;
	}
	.dark p {
		color: black;
	}

	.illustration img {
		object-fit: cover;
		background-position-y: bottom;
		width: 100%;
	}

	.design {
		margin: 0;
	}

	.croquis {
		height: 50vh;
		width: 90%;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("/photospages/croquis-sovann-kim-pour-mobilum.png");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
		margin: 0;
	}

	.reverse {
		flex-direction: column-reverse;
	}
	.savoir-faire {
		height: 30vh;
		width: 90vw;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("/photospages/savoir-faire.jpg");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
	}

	.RSE {
		height: 50vh;
		width: 90vw;
		padding-bottom: 2rem;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("/photospages/mobilum-valeurs-rse-avenirv2.png");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
	}
}
</style>
