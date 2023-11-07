<template>
	<div class="SlideRedirection">
		<div class="box">
			<NuxtImg src="/photospages/plaques-hook-coulage-usine.jpg" width="900px" format="avif,webp" placeholder loading="lazy" />
			<p>Un atelier <em>responsable</em></p>
		</div>
		<div class="box">
			<NuxtImg src="/photospages/design-mobilum.jpg" width="900px" format="avif,webp" placeholder loading="lazy" />
			<p>
				Du design <em><br />à la réalisation</em>
			</p>
		</div>
		<!--
    <NuxtLink
		class="box"
		to="/materiau"
    > -->
		<div class="box">
			<NuxtImg src="/photospages/bfup-truelle-large.jpg" width="900px" format="avif,webp" placeholder loading="lazy" />
			<p><em>Une forte </em>technicité</p>
		</div>
		<!-- </NuxtLink> -->
		<div class="box">
			<NuxtImg src="/photospages/showroom-mobilum-collection.jpg" width="900px" format="avif,webp" placeholder loading="lazy" />
			<p>
				\ Une collection <br />
				\ Du sur-mesure
			</p>
		</div>
	</div>
</template>

<style scoped>
em {
	color: white;
	font-family: "Times New Roman", Times, serif;
	font-style: italic;
}
.SlideRedirection {
	z-index: 20;
	display: flex;
	padding: 2% 0%;
	width: 100%;
	height: 50vh;
	gap: 1rem;
}

.box {
	position: relative;
	flex: 1;
	overflow: hidden;
	transition: 0.5s;
	text-decoration: none;
}

.box > img {
	width: 200%;
	height: calc(100%);
	filter: grayscale(0.8) contrast(1.2);
	object-fit: cover;
	transition: 0.5s;
}

.box p {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: 1;
	font-family: "Bebas Neue";
	font-size: 1.8rem;
	color: white;
	text-shadow: BLACK 1px 0 10px;
}

.box:hover {
	flex: 1 1 50%;
}

.box:hover > img {
	filter: grayscale(0);
	width: 100%;
	height: 100%;
}

@media only screen and (max-width: 950px) {
	.SlideRedirection {
		z-index: 20;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		width: 95%;
		gap: 1;
	}
	.box {
		height: 200px;
	}
	
	.box > img {
		background-attachment: fixed;
	}
}
</style>
