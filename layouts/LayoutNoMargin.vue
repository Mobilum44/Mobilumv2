<template>
	<div class="LayoutNoMargin">
		<Header />
		<section class="contenu-no-margin">
			<slot />
		</section>
		<Banner />
		<Footer />
	</div>
</template>

<style>
.contenu-no-margin {
	padding: 0rem;
}
</style>
