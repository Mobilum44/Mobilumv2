<template>
	<NuxtLink :to="to" :class="theme">
		<slot />
	</NuxtLink>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		theme: "blue" | "slide" | "bordered" | "transparent" | "arrow";
		to: string;
	}>(),
	{
		theme: "blue",
		to: "/",
	},
);
</script>

<style scoped>
/* ---------------------------------------------------------------
    Style du bouton simple bleu
--------------------------------------------------------------*/

.blue {
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 36px;
	max-width: max-content;
	background-color: #fefcf3;
	border-radius: 10px;
	text-decoration: none;
	color: #1a949d;
	line-height: 0;
	font-size: 1rem;
	padding: 0 1.3em;
}

.blue:hover {
	background-color: rgba(26, 148, 157);
	text-decoration: none;
	color: #fefcf3;
}

/* ---------------------------------------------------------------
    Style du bouton Slide
  --------------------------------------------------------------*/
.slide {
	z-index: 1;
	cursor: pointer;
	border: 1px solid rgba(255, 255, 255, 0.4);
	position: relative;
	overflow: hidden;
	padding: 0.5rem 4rem;

	font-family: "Bebas Neue";
	text-decoration: none;
	color: #f4f4f4;
	font-size: 1.2rem;
	text-transform: uppercase;
}

.slide:hover {
	box-shadow: 1px 1px 25px 10px rgba(255, 255, 255, 0.4);
}

.slide:before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent);
	transition: all 650ms;
}

.slide:hover:before {
	left: 100%;
}

/* ---------------------------------------------------------------
    Style du bouton bordered
  --------------------------------------------------------------*/
.bordered {
	z-index: 1;
	width: 10rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Bebas Neue";
	text-decoration: none;
	height: 2rem;
	border: 1px solid black;
	color: black;
	box-shadow: rgb(0, 0, 0) 5px 5px 0px -3px;
	/*padding: 1rem 3rem 1rem 3rem;*/
}

.bordered:hover {
	background-color: black;
	color: white;
	box-shadow: #1a949d00 5px 5px 0px -3px;
}

/* ---------------------------------------------------------------
    Style du bouton transparent
  --------------------------------------------------------------*/
.transparent {
	z-index: 1;
	width: 10rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Bebas Neue";
	text-decoration: none;
	height: 2rem;
	border: 1px solid black;
	color: black;
	/*padding: 1rem 3rem 1rem 3rem;*/
}

.transparent:hover {
	background-color: black;
	color: white;
}

/* ---------------------------------------------------------------
    Style du bouton arrow
  --------------------------------------------------------------*/
.arrow {
	color: black;
	text-decoration: none;
	font-size: 3rem;
	position: absolute;
	margin-top: -1rem;
}

.arrow:hover {
	color: #1a949d;
	text-decoration: none;
	font-size: 3rem;
	position: absolute;
	margin-top: -1rem;
}
</style>
