<template>
	<div class="layout">
		<slot name="slot_image" class="slot_image"> </slot>

		<section class="contenu">
			<slot />
		</section>

		<slot name="slot_bandeau"> </slot>
		<slot name="slot_contact"> </slot>
	</div>
</template>

<style scoped>
.contenu {
	gap: 0;
}
</style>
