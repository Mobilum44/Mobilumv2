<template>
	<div class="Banner">
		<div class="banniere">
			<Button class="banner__button" theme="bordered" to="/contact"> Nous contacter </Button>
			<NuxtImg
				class="banner__image"
				src="/photospages/frise-isa.png"
				quality="20"
				format="avif,webp"
				alt="Mobiliers Mobilum filaires"
				loading="lazy"
				placeholder
			/>
		</div>
	</div>
</template>

<style>
.banniere {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	font-family: "Bebas Neue";
	margin-top: 3rem;
}

.banner__button {
	z-index: 999;
	margin-bottom: 1rem;
}

.banner__image {
	position: relative;
	width: 100%;
}

/* ----------------------------------------------------
     Responsive qui marche bien
     ---------------------------------------------------- */
@media only screen and (max-width: 950px) {
	.banner__button {
		z-index: 999;
		margin-bottom: 1rem;
	}
}
</style>
