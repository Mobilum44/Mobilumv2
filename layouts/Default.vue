<template>
	<div class="layout">
		<Header />

		<slot name="slot_image" class="slot_image">
			<section class="image_title"></section>
		</slot>
		<section class="contenu">
			<slot />
		</section>
		<Banner />
		<Footer />
	</div>
</template>

<style>
.contenu {
	padding: 0;
	min-height: calc(100dvh - 300px);
}

@media only screen and (max-width: 950px) {
	.contenu {
		width: 100%;
	}
}
</style>
