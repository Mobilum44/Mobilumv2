<template>
	<div>
		<ul>
			<li v-for="(path, i) in img" :key="i">
				<div>
					<button v-if="i > 0" @click="scrollTo(i - 1)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M19 12H6M12 5l-7 7 7 7" />
						</svg>
					</button>

					<div class="carousel__container">
						<NuxtImg class="carousel__photo" fit="cover" height="80vh" :src="path" :id="`slide-${i}`" />
					</div>

					<button v-if="i + 1 < img.length" @click="scrollTo(i + 1)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="48"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M5 12h13M12 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
// export default {
// 	props: {
// 		img: {
// 			type: Array,
// 			default: () => [],
// 		},
// 	},
// 	methods: {
// 		scrollTo(i) {
// 			const el = document.getElementById(`slide-${i}`);
// 			el.scrollIntoView({ behavior: "smooth", block: "center" });
// 		},
// 	},
// };

// with default
defineProps<{
	img: any[];
}>();

function scrollTo(i: number): void {
	const el = document.getElementById(`slide-${i}`);
	if (!el) return;
	el.scrollIntoView({ behavior: "smooth", block: "center" });
}
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	position: relative;
}

ul li {
	scroll-snap-align: start;
	flex: 0 0 fit-content;
	position: relative;
}

ul li button {
	cursor: pointer;
	opacity: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	font-size: 2rem;
	color: white;
	z-index: 1;
	transition: all 0.2s ease-in-out;
}

ul li button:first-child {
	left: 1rem;
}

ul li button:last-child {
	right: 1rem;
}

ul li:hover button {
	opacity: 1;
	transition: all 0.2s ease-in-out;
}

ul::-webkit-scrollbar {
	width: 12px; /* width of the entire scrollbar */
}

.carousel__container {
	margin: 0;
	position: relative;
	overflow: hidden;
	height: 100%;
	width: 100%;
}

.carousel__photo {
	position: relative;
	flex: 0 0 100%;
	width: 100%;
	/* 
  background-color: #f99;
  counter-increment: item; */
}

@media only screen and (max-width: 950px) {
	/*------------------------------------------------------------
          Faire un bouton retour pour les téléphones
--------------------------------------------------------------*/
	.carousel__container {
		margin: 0;
		position: relative;
		overflow: hidden;
		height: 50vh;
		width: 100%;
	}

	.carousel__photo {
		position: relative;
		height: 100%;
		object-fit: cover;
		/* 
  background-color: #f99;
  counter-increment: item; */
	}
}
</style>
