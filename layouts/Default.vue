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
.image_title {
	height: 20vh;
	margin-top: 4rem;
}

.contenu {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
	padding: 0;
}
</style>
