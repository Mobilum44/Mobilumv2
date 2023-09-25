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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
}
</style>
