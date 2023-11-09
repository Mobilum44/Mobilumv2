<template>
	<NuxtLayout name="layout-no-margin">
		<h1>Plan du site</h1>

		<div class="sub__section">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a
				voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste
				reprehenderit maxime! Iusto.
			</p>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});

useSeoMeta({
	title: "Plan du site",
});
</script>

<style scoped>
h1 {
	color : black;
}
</style>
