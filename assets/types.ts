import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Reference extends ParsedContent {
	type: string;
	title: string;
	sub_title: string;
	published: boolean;
	gamme: string;
	cover_image: string;
	cover_text: string;
	carousel: string[];
	localisation: string;
	moe: string;
	moa: string;
	fabricant: string;
	date_realisation: string;
}

export interface Product extends ParsedContent {
	title: string;
	published: boolean;
	designer: string;
	collection: string;
	category: string;
	sub_category: string;
	gamme: string;
	finitions: string;
	cover_image: string;
	carousel: string[]
	filaire: string[];
	reference: string;
	materiau: string;
	poids: number;
	dimensions: string;
	format: string;
	traitement: string;
	tags: string[];
}