<!------------------------------------------------------------
Marche pas, mais bonne idée pour nos RS
https://codepen.io/abdelrhmansaid/pen/OJRNOpQ
-------------------------------------------------------------->

<template>
	<ul class="SocialMedial">
		<li class="icon facebook">
			<span class="tooltip">Facebook</span>
			<span><i class="fab fa-facebook-f"></i></span>
		</li>
		<li class="icon twitter">
			<span class="tooltip">Twitter</span>
			<span><i class="fab fa-twitter"></i></span>
		</li>
		<li class="icon instagram">
			<span class="tooltip">Instagram</span>
			<span><i class="fab fa-instagram"></i></span>
		</li>
		<li class="icon github">
			<span class="tooltip">Github</span>
			<span><i class="fab fa-github"></i></span>
		</li>
		<li class="icon youtube">
			<span class="tooltip">Youtube</span>
			<span><i class="fab fa-youtube"></i></span>
		</li>
	</ul>
</template>

<style scoped>
/*
    Auther: Abdelrhman Said
*/

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:focus,
*:active {
	outline: none !important;
	-webkit-tap-highlight-color: transparent;
}

html,
body {
	display: grid;
	height: 100%;
	width: 100%;
	font-family: "Poppins", sans-serif;
	place-items: center;
	background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.SocialMedia {
	display: inline-flex;
	list-style: none;
}

.SocialMedia .icon {
	position: relative;
	background: #ffffff;
	border-radius: 50%;
	padding: 15px;
	margin: 10px;
	width: 50px;
	height: 50px;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.SocialMedia .tooltip {
	position: absolute;
	top: 0;
	font-size: 14px;
	background: #ffffff;
	color: #ffffff;
	padding: 5px 8px;
	border-radius: 5px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
	opacity: 0;
	pointer-events: none;
	transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.SocialMedia .tooltip::before {
	position: absolute;
	content: "";
	height: 8px;
	width: 8px;
	background: #ffffff;
	bottom: -3px;
	left: 50%;
	transform: translate(-50%) rotate(45deg);
	transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.SocialMedia .icon:hover .tooltip {
	top: -45px;
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
}

.SocialMedia .icon:hover span,
.SocialMedia .icon:hover .tooltip {
	text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.SocialMedia .facebook:hover,
.SocialMedia .facebook:hover .tooltip,
.SocialMedia .facebook:hover .tooltip::before {
	background: #1877f2;
	color: #ffffff;
}

.SocialMedia .twitter:hover,
.SocialMedia .twitter:hover .tooltip,
.SocialMedia .twitter:hover .tooltip::before {
	background: #1da1f2;
	color: #ffffff;
}

.SocialMedia .instagram:hover,
.SocialMedia .instagram:hover .tooltip,
.SocialMedia .instagram:hover .tooltip::before {
	background: #e4405f;
	color: #ffffff;
}

.SocialMedia .github:hover,
.SocialMedia .github:hover .tooltip,
.SocialMedia .github:hover .tooltip::before {
	background: #333333;
	color: #ffffff;
}

.SocialMedia .youtube:hover,
.SocialMedia .youtube:hover .tooltip,
.SocialMedia .youtube:hover .tooltip::before {
	background: #cd201f;
	color: #ffffff;
}
</style>
