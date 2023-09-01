<template>
	<div class="layout">
		<slot name="slot_image" />

		<section class="contenu">
			<slot />
		</section>

		<slot name="slot_bandeau" />
		<slot name="slot_contact" />
	</div>
</template>

<style scoped>
.contenu {
	gap: 0;
}
</style>
