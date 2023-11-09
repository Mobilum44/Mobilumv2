<template>
	<div>
		<NuxtLink to="/">
			<NuxtImg
				class="logo_header"
				alt="Logo mobilum"
				src="/logos/Blue_logo.png"
				format="avif,webp"
				width="80"
				placeholder
				loading="lazy"
			/>
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
onMounted(async () => {
	await nextTick();
	window.addEventListener("scroll", () => {
		let logo = document.getElementsByClassName("logo_header")[0];
		if (document.documentElement.scrollTop >= 25) {
			logo.classList.add("logo_header--mini");
		} else {
			logo.classList.remove("logo_header--mini");
		}
	});
});
</script>

<style scoped>
.logo_header {
	transition: all 0.3s ease-in-out;
}

.logo_header--mini {
	width: 60px;
	transition: all 0.3s ease-in-out;
}

a {
	display: flex;
}
</style>
