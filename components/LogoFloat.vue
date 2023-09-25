<template>
	<div>
		<NuxtLink to="/">
			<NuxtImg
				class="logo_header"
				alt="Logo mobilum"
				src="\logos\Blue_logo.png"
				format="avif,webp"
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
	width: 80px;
	animation: scale-back 0.3s ease-in forwards;
}

.logo_header--mini {
	animation: scale 0.3s ease-in forwards;
}

@keyframes scale-back {
	0% {
		transform: scale(0.8);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes scale {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0.8);
	}
}
</style>
