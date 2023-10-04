<template>
	<div class="LayoutNoMargin">
		<Header />
		<section class="contenu contenu-no-margin">
			<slot />
		</section>
		<Banner />
		<Footer />
	</div>
</template>

<style>
.contenu-no-margin {
	padding: 0;
	margin-top: 14vh;
}
</style>
