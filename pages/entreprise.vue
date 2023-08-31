<template>
	<Layout>
		<template #slot_image>
			<section class="slot_image">
				<h1>Mobilum</h1>
			</section>
		</template>

		<section class="page_top">
			<div class="title"></div>
		</section>

		<div class="section_top"></div>

<!-------------------------------------------------------------------
    La griffe Mobilum
-------------------------------------------------------------------->

		<div class="sub__section wide">
			<div class="sub__section__content">
				<div class="section__side illustration croquis">
					<!--
		<NuxtImg
		alt="Table cantine réelle"
		src="/croquis-sovann-kim-pour-mobilum.png"
		center
		width="600"
		fit="cover"
		/>
				-->
				</div>

				<div class="section__side text design">
					<h2>\ Le design selon Mobilum</h2>
					<div class="section__text">
						<p>
			<!--
            La marque et le design : designers et distinctions
			---->
							<strong>"Le design, notre essence."</strong>
							<br /><br />
							Mobilum se définit par sa compétence en BFUP et son design, véritable ADN de l’entreprise.
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
								src="\photospages\table-cantine-02-croquis.png"
								center
								width="200px"
								fit="cover"
							/>
							<NuxtImg
								alt="Table cantine réelle"
								src="\photospages\table-cantine-01-croquis.png"
								center
								width="200px"
								fit="cover"
							/>
							<NuxtImg
								alt="Logo Janus de la cité 2016"
								src="\photospages\janus-de-la-cite-logo.png"
								center
								width="70px"
								fit="cover"
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
			<div class="sub__section__content">
				<div class="section__side text">
					<h2>\ Notre savoir-faire</h2>
					<div class="section__text">
						<p>
							<strong
								>"Chez Mobilum, notre savoir-faire est ancré dans un artisanat 100% français et
								local."</strong
							>
							<br /><br />
							Notre volonté est de produire un travail artisanal de qualité 100% français en privilégiant
							le talent des partenaires locaux. Chaque mobilier a été étudié, conçu et réalisé dans notre
							usine avec une attention méticuleuse aux détails, reflétant notre engagement envers
							l’excellence et la fierté du travail bien fait. <br /><br />
							Les techniques développées après des années de recherches sont uniques et exclusives pour
							parvenir à la finesse et les formes de nos mobiliers.<br /><br />
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
			src="\photospages\angers_tram.jpg"
			center
			width="1000px"
			fit="cover"
			/>
			-->
				</div>
				<div class="section__side text">
					<h2>\ Nos engagements</h2>
					<div class="section__text">
						<p>
							<strong
								>"Nous produisons de manière raisonnée en limitant au maximum notre impact sur
								l'environnement."</strong
							>
							<br /><br />
							Repenser le mobilier urbain nécessite d’intégrer le développement durable dans nos
							recherches, nos créations et notre croissance. <br /><br />
							Nous nous efforçons de produire de manière raisonnée pour limiter autant que possible notre
							impact sur l’environnement. L’intégralité des produits présentés est fabriquée sur notre
							site au Loroux-Bottereau en Loire Atlantique. <br /><br />
							Mobilum souhaite structurer une démarche RSE globale qui commnence par la réalisation de son
							bilan carbone, indispensable à la définitions d'objectifs justes et précis.
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
				<h3>Mobilum, une présence remarquée</h3>
			</div>
			<div class="sub__section">
				<Card />

				<div class="sub__section wide">
					<div class="left">
						<h3>Notre réseau commercial nous permet d'être présents</h3>
					</div>
					<Villes />
				</div>
			</div>
		</div>
	</Layout>
</template>


<style scoped>
/*-------------------------------------------------------------------------
    General
-----------------------------------------------------------------------*/
.slot_image {
	background: url("\photospages\fond-entreprise-eglise-resized.jpg") center center no-repeat;
	background-size: cover;
	background-attachment: fixed;
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
	font-size: 1rem;
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

article {
	-webkit-column-count: 2;
	-moz-column-count: 2;
	column-count: 2;
	-webkit-column-gap: 30px;
	-moz-column-gap: 30px;
	column-gap: 30px;
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

.left {
	width: 80%;
	display: flex;
	align-items: left;
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

/* ------------------------------------------------------------------------------------------
            Gestion des images
--------------------------------------------------------------------------------------------*/
.illustration {
	width: 50%;
	object-fit: contain;
	background-position-y: center;
}

.croquis {
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #fefcf3),
		url("/croquis-sovann-kim-pour-mobilum.png");
	/* border-radius: 5px;
   border : solid black 1px; */
}
.savoir-faire {
	background-image: linear-gradient(to left, rgba(255, 0, 0, 0), #f5ebe0),
		url("/savoir-faire.jpg");
	background-size: cover;
}
.RSE {
	background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #fefcf3),
		url("\photospages\mobilum-valeurs-rse-avenirv2.png");
	background-size: cover;
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

	article {
		-webkit-column-count: 1;
		-moz-column-count: 1;
		column-count: 1;
		width: 100%;
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
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		/* border-radius: 5px; */
	}

	.section__text {
		padding-bottom: 0;
	}
	.illustration img {
		object-fit: cover;
		width: 50%;
		height: 50vh;
		background-position-y: bottom;
	}

	.dark {
		background-color: #fefcf3;
		color: black;
	}
	.dark p {
		color: black;
	}

	.croquis {
		width: 50%;
		height: 50vh;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("/croquis-sovann-kim-pour-mobilum.png");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
	}

	.savoir-faire {
		width: 50%;
		height: 50vh;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("/savoir-faire.jpg");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
	}

	.RSE {
		width: 50%;
		height: 50vh;
		padding-bottom: 2rem;
		background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)),
			url("\photospages\angers_tram.jpg");
		background-size: cover;
		box-shadow: rgba(50, 50, 93, 0.8) 0px 2px 5px -1px, rgba(0, 0, 0, 0.8) 0px 1px 3px -1px;
	}

	.real__model {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding-top: 2rem;
		align-items: center;
		justify-content: center;
	}
}
</style>
