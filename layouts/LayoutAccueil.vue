<template>
	<div class="LayoutAccueil">
		<Header />
		<slot name="slot_image" />
		<section class="contenu">
			<slot />
		</section>
		<slot name="slot_bandeau" />
		<slot name="slot_contact" />
		<Banner />
		<Footer />
	</div>
</template>

<style scoped>
.slot_image {
	margin-top: 120px;
}
.contenu {
	gap: 0;
}
</style>
