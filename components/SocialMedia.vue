<!------------------------------------------------------------
Marche pas, mais bonne idée pour nos RS
https://codepen.io/abdelrhmansaid/pen/OJRNOpQ
-------------------------------------------------------------->

<template>
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
</template>

<style scoped>


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

</style>
