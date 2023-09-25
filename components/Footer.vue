<template>
	<footer>
		<!-- Mobiliers plus espacés, lignes entre les deux, moins de mobiliers -->
		<div class="content_top">
			<div class="column__left">
				<NuxtImg
					class="Logo_mobilum"
					alt="Logo mobilum"
					src="/logos/Mobilum_no_margin.png"
					width="60"
					format="avif,webp"
					placeholder
					loading="lazy"
				/>
				<div>
					<p class="coordonnées">
						+33(0)2 51 72 90 22<br />
						contact@mobilum-france.com<br />
						<br />
						104 rue de l'Industrie<br />
						44430 Le Loroux-Bottereau
					</p>
				</div>
			</div>

			<div class="column__right">
				<div class="menu_footer">
					<!---   <NuxtLink
            class="footer__nav"
            to="/politiques"
			>
            Politiques de confidentialité
		</NuxtLink> -->
					<NuxtLink class="footer__nav" to="/mentions"> Mentions légales </NuxtLink>
					<NuxtLink class="footer__nav" to="/plan"> Plan du site </NuxtLink>
				</div>

				<ul class="content__RS">
					<NuxtLink to="/contact">
						<li class="icon mail">
							<span class="tooltip">Mail</span>
							<NuxtImg src="/logos/mail.png" width="40" format="avif,webp" placeholder loading="lazy" />
						</li>
					</NuxtLink>

					<NuxtLink to="https://www.facebook.com/people/MOBILUM/100063454155980/">
						<li class="icon facebook">
							<span class="tooltip">Facebook</span>
							<NuxtImg
								src="/logos/facebook.png"
								width="40"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
						</li>
					</NuxtLink>

					<NuxtLink to="https://www.linkedin.com/company/mobilum-france/">
						<li class="icon linkedin">
							<span class="tooltip">Linkedin</span>
							<NuxtImg
								src="/logos/linkedin.png"
								width="40"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
						</li>
					</NuxtLink>

					<NuxtLink to="https://www.instagram.com/mobilum_france/?hl=fr">
						<li class="icon instagram">
							<span class="tooltip">Instagram</span>
							<NuxtImg
								src="/logos/instagram.png"
								width="40"
								format="avif,webp"
								placeholder
								loading="lazy"
							/>
						</li>
					</NuxtLink>
				</ul>
			</div>
		</div>

		<div class="legal">
			<p class="coordonnées">
				&copy; Mobilum 2022. Tous droits réservés. Fait avec
				<em class="heart">♥</em> par l'équipe MOBILUM.
			</p>
		</div>
	</footer>
</template>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
}

.heart {
	font-style: normal;
	color: #f56d91;
}

footer {
	z-index: 200;
	position: absolute;
	display: flex;
	flex-direction: column;
	background-color: rgba(26, 148, 157, 1);
	font-size: 14px;
	font-style: normal;
	width: 100%;
}

/*

--------------------------------------------------------------
Zone haute du footer
--------------------------------------------------------------
*/

.content_top {
	border-top: #fefcf3 solid 1px;
	padding-top: 1rem;
	padding-left: 7rem;
	padding-right: 7rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: space-between;
	flex-wrap: wrap;
}

.Logo_mobilum {
	margin-right: 1rem;
}

/*
---------------------------------
Colonne de gauche
---------------------------------
*/

.column__left {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 10px;
}

.coordonnées {
	text-decoration: none;
	margin: 0;
	color: #fefcf3;
}

.column__left a {
	text-decoration: none;
	color: #fefcf3;
}

/*
---------------------------------
Colonne de droite
---------------------------------
*/

.column__right {
	display: flex;
	flex-direction: column;
	padding-top: 1em;
	justify-content: right;
	align-items: right;
}

*:focus,
*:active {
	outline: none !important;
	-webkit-tap-highlight-color: transparent;
}

.content__RS {
	list-style: none;
	display: flex;
	justify-content: flex-start;
	gap: 1rem;
	margin-top: 1rem;
	padding: 0;
	color: #1a949d;
	text-decoration: none;
}

.content__RS .icon {
	position: relative;
	background: #1a949d;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1); */
	cursor: pointer;
	transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.content__RS .tooltip {
	position: absolute;
	top: 0;
	font-size: 14px;
	background: #ffffff;
	color: #ffffff;
	padding: 5px 8px;
	border-radius: 5px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	opacity: 0;
	pointer-events: none;
	transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.content__RS .tooltip::before {
	position: absolute;
	content: "";
	height: 8px;
	width: 8px;
	background: #ffffff;
	bottom: -3px;
	left: 50%;
	transform: translate(-50%) rotate(45deg);
	transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.content__RS .icon:hover .tooltip {
	top: -45px;
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
}

.content__RS .icon:hover span,
.content__RS .icon:hover .tooltip {
	text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.content__RS .mail:hover,
.content__RS .mail:hover .tooltip,
.content__RS .mail:hover .tooltip::before {
	background: #333333;
	color: #ffffff;
}

.content__RS .facebook:hover,
.content__RS .facebook:hover .tooltip,
.content__RS .facebook:hover .tooltip::before {
	background: #1877f2;
	color: #ffffff;
}

.content__RS .instagram:hover,
.content__RS .instagram:hover .tooltip,
.content__RS .instagram:hover .tooltip::before {
	background: #dd2a7b;
	color: #ffffff;
}

.content__RS .linkedin:hover,
.content__RS .linkedin:hover .tooltip,
.content__RS .linkedin:hover .tooltip::before {
	background: #0e76a8;
	color: #ffffff;
}

/*
------------------
Menu secondaire
------------------
*/
.menu_footer {
	display: flex;
	flex-direction: column;
}

.footer__nav {
	font-size: 14px;
	text-decoration: none;
	color: #fefcf3;
}

.footer__nav:visited {
	color: #fefcf3;
}

.footer__nav:hover,
.footer__nav:focus {
	color: black;
	text-decoration: none;
}

.footer__nav.active {
	color: black;
	text-decoration: none;
}

/*
--------------------------------------------------------------
Zone basse du footer
--------------------------------------------------------------
*/

.legal {
	border-top: #fefcf3 solid 1px;
	margin-top: 1rem;
	padding: 1rem;
	display: flex;
	justify-content: center;
	color: white;
}

/* ------------------------------------------------------------------------------------------

            RESPONSIVE TELEPHONES

--------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 950px) {
	.content_top {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.column__left {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.menu_footer {
		display: flex;
		flex-direction: row;
		margin: 0rem;
		margin-top: 1rem;
		padding: 1rem;
		border-top: solid #fefcf3 1px;
		border-bottom: solid #fefcf3 1px;
	}

	.menu_footer a {
		text-align: center;
		width: 33%;
	}

	.content__RS {
		justify-content: center;
		margin-top: 2rem;
	}

	.legal {
		text-align: center;
	}
}
</style>
