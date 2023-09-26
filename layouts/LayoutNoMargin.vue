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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	margin-top : 14vh;
}
</style>
