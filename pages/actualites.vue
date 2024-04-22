<template>
	<NuxtLayout name="layout-no-margin">
		<div class="sub__section">
			<h1>Nos actualités</h1>
		</div>
		<!--
				<section class="sub__section chapeau">
						Cette section peut servir à rajouter une description sous le titre de la page.
				</section>
		-->

		<section class="wide">
			<ul>
				<li class="articles" :key="typ" v-for="(group, typ) in groupedArticles">
					<h2 v-if="groupWithTitles(group)">{{ typ }}</h2>
					<ul class="articles-list">
						<li v-for="article in group" :key="article._id">
							<CarteMarches
								:title="article.cover_title"
								:path="article._path"
								:img="article.cover_image"
								loading="lazy"
								placeholder
								quality="60"
							/>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import { Article } from "@/assets/types";

const { data: articles } = await useAsyncData(
	"articles",
	() => queryContent("/articles").sort({ order: 1 }).find() as Promise<Article[]>,
);

const groupedArticles = computed(() => {
	const grouped: Record<string, Array<Article>> = {};
	if (articles.value) {
		articles.value.forEach((article: Article) => {
			const type = article.type;
			if (!grouped[type]) {
				grouped[type] = [];
			}
			grouped[type].push(article);
		});
		// Tri par date
		Object.keys(grouped).forEach((groupKey) => {
			grouped[groupKey].sort((a, b) => {
				const dateA = new Date(
					parseInt(a.date.split('/')[2]), // Year
					parseInt(a.date.split('/')[1]) - 1, // Month (zero-based)
					parseInt(a.date.split('/')[0]) // Day
				);
				const dateB = new Date(
					parseInt(b.date.split('/')[2]), // Year
					parseInt(b.date.split('/')[1]) - 1, // Month (zero-based)
					parseInt(b.date.split('/')[0]) // Day
				);
				return dateA.getTime() - dateB.getTime();
			});
		});
	}
	return grouped;
});

const groupWithTitles = (group: Array<Article>): boolean => {
	return group.some(article => article.type !== null);
};

useSeoMeta({
	title: "Nos actualités",
});

definePageMeta({
	layout: false,
});
</script>

<style scoped>
.wide {
	width: 80%;
	display: flex;
	align-items: left;
}

h2 {
	border: 0;
	padding-left: 2rem;
	margin-bottom: 2rem;
}

.chapeau {
	width: 70%;
	margin-bottom: 2rem;
}

.articles {
	margin-top: 2rem;
	margin-bottom: 4rem;
}

.articles-list {
	gap: 2rem;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.articles-list li {
	width: 30%;
}

/*

Mise en page des cartes à faire


ul {
  border : solid blue;
  width : 80vw;
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 2rem;
  list-style-type: none;
}

li {
  border : solid pink;
} */

ul {
	padding: 0;
	width: 100%;
}

@media only screen and (max-width: 950px) {
	.wide {
		width: 95%;
	}

	.chapeau {
		width: 100%;
	}

	.sub__section {
		margin-bottom: 0;
	}

	.sub__section p {
		margin-bottom: 0;
		margin-top: 2rem;
	}

	.articles-list {
		gap: 2rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
	}

	.articles-list li {
		width: 100%;
	}
}
</style>
