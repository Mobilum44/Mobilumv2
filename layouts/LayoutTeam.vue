<template>
	<div class="TeamPage">
		<section class="TeamContent">
			<slot />
		</section>
	</div>
</template>

<style>
/* 
	--------------------------
	comment changer le background de la page 1 UNIQUEMENT ?
	--> Censé avoir des images qui défilent
	--------------------------
	*/

.TeamPage {
	margin: 1rem;
	padding: 1rem;
	border: #7c3e66 solid 1px;
	opacity: 0.8;
	background-color: #f9f5eb;
	background-image: radial-gradient(#7c3e66 0.5px, #f9f5eb 0.5px);
	background-size: 10px 10px;
	background-repeat: repeat;
}

.TeamContent {
	padding-top: 3rem;
	padding-left: 5rem;
	padding-right: 5rem;
}
</style>
