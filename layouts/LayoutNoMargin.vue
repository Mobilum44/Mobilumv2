<template>
	<div class="LayoutNoMargin">
		<Header />
		<section class="contenu-no-margin flex-column">
			<slot />
		</section>
		<Banner />
		<Footer />
	</div>
</template>

<style>
.contenu-no-margin {
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-top: 14vh;
}
</style>
