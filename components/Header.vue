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
				<NuxtLink class="nav__link" to="/entreprise"> Mobilum </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/collection"> Nos collections </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/contact"> Contact </NuxtLink>
			</li>
			<li>
				<NuxtLink class="nav__link" to="/taches"> 🔎 </NuxtLink>
			</li>
		</ul>
	</header>
</template>

<script lang="ts" setup>
onMounted(async () => {
	await nextTick();
	window.addEventListener("scroll", () => {
		const header = document.getElementsByClassName("header_content")[0];
		if (!header) return;
		if (document.documentElement.scrollTop >= 25) {
			header.classList.add("header_content--mini");
		} else {
			header.classList.remove("header_content--mini");
		}
	});
});
</script>

<style>
Header {
	top: 0;
	width: 100%;
	background-color: rgb(254, 252, 243, 0.7);
	position: fixed;
	margin-top: 0rem;
	/*background-color: rgb(26, 148, 157, 0.6);
	box-shadow: 0 5px 20px rgba(10, 4, 60, 0.3);*/
	z-index: 999;
}

.header_content {
	background-color: rgb(254, 252, 243, 0.7);
	padding: 1rem 2rem 0rem 2rem;
	padding-bottom: 0;
	display: flex;
	justify-content: center;
	transition: all 0.3s ease-in-out;
}

.header_content--mini {
	padding-top: 0.25rem;
	transition: all 0.3s ease-in-out;
	border-bottom: solid black 1px;
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

.header .nav__link:focus {
	color: #1a949d;
}

.header .nav__link.active {
	color: #1a949d;
}

/* menu */

.header .menu {
	max-height: 0;
	transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
	cursor: pointer;
	display: inline-block;
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

@media (min-width: 48em) {
	.header li {
		float: left;
	}
	.header li .nav__link {
		margin: 1.5rem;
	}
	.header .menu {
		clear: none;
		float: right;
		max-height: none;
	}
	.header .menu-icon {
		display: none;
	}
}
</style>
