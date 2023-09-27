<template>
	<!------- Pas utilisé. Pour les références ? A supprimer sinon ------>
	<Section class="AutoSlider">
		<div class="slider-container">
			<div class="slide" v-for="img in carousel" :key="img.src">
				<NuxtImg :src="img" format="avif,webp" placeholder loading="lazy" />
			</div>
		</div>
	</Section>
</template>

<script lang="ts" setup>
defineProps<{
	carousel: any[];
}>();
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.AutoSlider {
	border: solid green;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
}
.AutoSlider .slider-container {
	position: absolute;
	height: 100%;
	width: 300%;
	top: 0;
	left: 0;
	animation: slider 15s infinite;
	display: flex;
	justify-content: center;
}
.AutoSlider .slider-container .slide {
	position: relative;
	width: 50vw;
	height: 100%;
	overflow: hidden;
}
.AutoSlider .slider-container .slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
@keyframes slider {
	0%,
	25%,
	100% {
		left: 0;
	}

	30%,
	55% {
		left: -100%;
	}

	60%,
	85% {
		left: -200%;
	}
}
</style>
