<template>
	<TeamPage>
		<NuxtLink class="Retour" to="/entreprise"> Retour </NuxtLink>

		<div class="title">
			<h1>Bienvenue chez nous !</h1>
		</div>

		<article class="comic">
			<div class="panel">
				<p class="text top-left">Oh, vous êtes là...</p>
				<p class="text bottom-right">...Venez on va se présenter !</p>
			</div>
			<div class="panel">
				<p class="speech">C'est là où on travaille tous</p>
			</div>

			<div class="panel">
				<p class="text top-left">Ah, voici le chef de la tribu !</p>
			</div>

			<div class="panel"></div>
			<div class="panel"></div>
			<div class="panel"></div>
			<div class="panel">
				<p class="thought">Dans le compte 658</p>
			</div>
			<div class="panel"></div>
			<div class="panel"></div>

			<div class="panel">
				<p class="text bottom-right">Au revoir !</p>
			</div>
		</article>
	</TeamPage>
</template>

<style scoped>
body,
p,
h1 {
	font-family: "Comic Sans", cursive;
}

h1 {
	display: flex;
	justify-content: center;
	padding: 1rem;
	margin: 0;
}

.title {
	background-color: #fff;
	border: solid 2px #000;
	box-shadow: 0 6px 6px -6px #000;
	display: inline-block;
	width: 97.5%;
	margin: 1rem;
	overflow: hidden;
	position: relative;
}

p {
	padding-bottom: 3rem;
}

/* Button style */

.Retour {
	text-decoration: none;
	color: black;
	position: relative;
	width: 200px;
	height: 50px;
	background-color: rgba(0, 0, 0, 0);
	border: 2px solid black;
	margin-bottom: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	text-decoration: none;
	font-size: 15px;
	font-weight: 200;
	letter-spacing: 1px;
}

.Retour::after {
	content: "";
	background-color: #fff;
	box-shadow: 0 6px 8px -6px #000;
	width: 100%;
	z-index: -1;
	position: absolute;
	height: 100%;
	top: 7px;
	left: 7px;
	transition: 0.2s;
}

.Retour:hover::after {
	top: 0px;
	left: 0px;
}

/*page style*/

.comic {
	display: flex;
	flex-wrap: wrap;
	padding: 1vmin;
}

.panel {
	background-color: #fff;
	border: solid 2px #000;
	box-shadow: 0 6px 6px -6px #000;
	display: inline-block;
	flex: 1 1;
	height: 300px;
	margin: 1vmin;
	overflow: hidden;
	position: relative;
}

/* cases */

.panel:nth-child(1) {
	flex-basis: 240px;
	background-image: url(https://www.dupuis.com/v5/img/visuels_resume/schtroumpfs.jpg);
	background-size: cover;
}
.panel:nth-child(2) {
	flex-basis: 600px;
	background-image: url(https://www.lelombard.com/uploads/actualite/3_GRANDIRAVECLESSCHTROUMPFS_02.jpg);
	background-size: cover;
}
.panel:nth-child(3) {
	flex-basis: 200px;
	background-image: url(https://i.skyrock.net/8302/42358302/pics/1695998062.jpg);
	background-size: cover;
}
.panel:nth-child(4) {
	flex-basis: 400px;
	background-image: url(http://img.xooimage.com/files2/5/a/b/schtroumpfs2jp5-1858124.jpg);
	background-size: cover;
}
.panel:nth-child(5) {
	flex-basis: 200px;
	background-image: url(https://www.rts.ch/2018/10/19/13/46/9906785.image?mw=1280);
	background-size: cover;
}
.panel:nth-child(6) {
	flex-basis: 190px;
	background-image: url(https://www.rts.ch/2018/10/01/10/38/9882764.image?w=0&h=NaN);
	background-size: cover;
}
.panel:nth-child(7) {
	flex-basis: 250px;
	background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGJ_dm28ZklcDoiKrj3Cvd4GLzXMXxV2XNEjSrAB_qYrxXi8fGICFTmrPAr2CCbh2wf8&usqp=CAU);
	background-size: cover;
}
.panel:nth-child(8) {
	flex-basis: 190px;
	background-image: url(data:image/png;base64,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);
	background-size: cover;
}

.panel:nth-child(9) {
	flex-basis: 200px;
	background-image: url(https://i.pinimg.com/originals/57/04/0a/57040a9ea1140669b21ef2910b9e0434.jpg);
	background-size: cover;
}

.panel:nth-child(10) {
	flex-basis: 400px;
	background-image: url(https://img-31.ccm2.net/bs_jfUQ7kARCvvcApj014DMt3bk=/580x348/smart/bbf5bb76e4e547ee9a34b5d53636b6ea/ccmcms-hugo/10760765.jpg);
	background-size: cover;
}

/* Decorations */
.text {
	background-color: #fff;
	border: solid 2px #000;
	margin: 0;
	padding: 3px 10px;
}

.top-left {
	left: -6px;
	position: absolute;
	top: -2px;
	transform: skew(-15deg);
}

.bottom-right {
	bottom: -2px;
	position: absolute;
	right: -6px;
	transform: skew(-15deg);
}

.speech {
	background-color: #fff;
	border: solid 2px #000;
	border-radius: 12px;
	display: inline-block;
	margin: 0.5em;
	padding: 0.5em 1em;
	margin-left: 60vh;
	position: relative;
}

.speech:before {
	border: solid 12px transparent;
	border-left: solid 12px #000;
	border-top: solid 12px #000;
	bottom: -24px;
	content: "";
	height: 0;
	left: 24px;
	position: absolute;
	transform: skew(-15deg);
	width: 0;
}

.speech:after {
	border: solid 10px transparent;
	border-left: solid 10px #fff;
	border-top: solid 10px #fff;
	bottom: -19px;
	content: "";
	height: 0;
	left: 27px;
	position: absolute;
	transform: skew(-15deg);
	width: 0;
}

.thought {
	background-color: #fff;
	border: solid black;
	border-radius: 30px;

	padding: 2px;
	margin: 20px;
	position: relative;
	display: flex;
	justify-content: center;
	text-align: center;
}
</style>
