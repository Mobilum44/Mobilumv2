<template>
	<header class="header header_content">
		<LogoFloat />
		<input class="menu-btn" type="checkbox" id="menu-btn" />
		<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
		<ul class="menu">
			<li>
				<NuxtLink class="nav__link" to="/accueil"> Accueil </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/notre-entreprise"> Mobilum </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/collection"> Nos collections </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/contact"> Contact </NuxtLink>
			</li>
			<li>
				<!-- <NuxtLink class="nav__link" to="/taches"> 🔎 </NuxtLink> -->
			</li>
		</ul>
	</header>
</template>

<script lang="ts" setup>
onMounted(async () => {
	await nextTick();
	window.addEventListener("scroll", () => {
		const header = document.getElementsByClassName("header_content")[0];
		const menu = document.getElementsByClassName("menu")[0];
		if (!header || !menu) return;
		if (document.documentElement.scrollTop >= 25) {
			header.classList.add("header_content--mini");
			menu.classList.add("menu--mini");
		} else {
			header.classList.remove("header_content--mini");
			menu.classList.remove("menu--mini");
		}
	});
});
</script>

<style>
header {
	top: 0;
	width: 100%;
	background-color: rgb(254, 252, 243, 0.7);
	position: fixed;
	margin-top: 0rem;
	/*background-color: rgb(26, 148, 157, 0.6);
	box-shadow: 0 5px 20px rgba(10, 4, 60, 0.3);*/
	z-index: 999;
}

header:before {
	content: "";
	position: absolute;
	z-index: -1;
	backdrop-filter: blur(0.5rem);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.header_content {
	background-color: rgb(254, 252, 243, 0.7);
	padding: 0.5rem 2rem 0.25rem 2rem;
	padding-bottom: 0;
	display: flex;
	justify-content: space-between;
	transition: all 0.3s ease-in-out;
}

.header_content--mini {
	padding-top: 0.25rem;
	transition: all 0.3s ease-in-out;
	/*border-bottom: solid black 1px;*/
}

.header ul {
	width: 100%;
	display: flex;
	justify-content: right;
	align-items: center;
	list-style-type: none;
}

.header .nav__link {
	font-family: "Bebas Neue";
	font-size: 1.1rem;
	letter-spacing: 2px;
	text-decoration: none;
	color: black;
	margin: 0rem;
	padding: 0;
	position: relative;
}

.header .nav__link::before {
	content: "";
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 100%;
	height: 2px;
	background-color: #1a949d;
	transform-origin: center;
	transform: translate(-50%, 0) scaleX(0);
	transition: transform 0.3s ease-in-out;
}

.header .nav__link:hover::before {
	transform: translate(-50%, 0) scaleX(1);
}

/* A CORRIGER : Mettre le lien en bleu lorsqu'on est sur la page active */

.header .nav__link:focus {
	color: #1a949d;
}
.nav__link:active {
	color: #1a949d;
}

.header ul {
	display: flex;
	flex-direction: row;
	gap: 2rem;
}

/* menu icon */

.header .menu-icon {
	cursor: pointer;
	display: none;
	justify-content: center;
	align-items: center;
	padding: 28px 20px;
	position: relative;
	user-select: none;
}

.header .menu-icon .navicon {
	background: #333;
	display: block;
	height: 2px;
	position: relative;
	transition: background 0.2s ease-out;
	width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
	background: #333;
	content: "";
	display: block;
	height: 100%;
	position: absolute;
	transition: all 0.2s ease-out;
	width: 100%;
}

.header .menu-icon .navicon:before {
	top: 5px;
}

.header .menu-icon .navicon:after {
	top: -5px;
}

/* menu btn */

.header .menu-btn {
	display: none;
}

.header .menu-btn:checked ~ .menu {
	max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
	background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
	transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
	transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
	top: 0;
}

@media (max-width: 768px) {
	.header .menu {
		position: fixed;
		top: 111px;
		left: 0;
		padding-top: 2rem;
		transform: translateX(100%);
		opacity: 0;
		background-color: rgb(254, 252, 243, 0.7);
		height: 100dvh;
		max-height: unset !important;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		transition: all 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
		backdrop-filter: blur(0.5rem);
		border-top: solid rgba(26, 148, 157, 0.5) 1px;
	}

	.header .menu-btn:checked ~ .menu {
		transform: translateX(0%);
		opacity: 1;
	}

	.header .menu-icon {
		display: flex;
	}

	.menu--mini {
		top: 81.25px !important;
		transition: all 0.3s ease-in-out;
	}
}
</style>
