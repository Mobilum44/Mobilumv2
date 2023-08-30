<template>
	<div class="EmptyPage">
		<slot />
	</div>
</template>

<style>
/* 
	--------------------------
	comment changer le background de la page 1 UNIQUEMENT ?
	--> Censé avoir des images qui défilent
	--------------------------
	*/

body {
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
	margin: 0;
	padding: 0;
	line-height: 1.5;
}

.EmptyPage {
	/*background-image: url("https://images.pexels.com/photos/262713/pexels-photo-262713.jpeg"),
		url("https://images.pexels.com/photos/286763/pexels-photo-286763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");*/
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
