import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Reference extends ParsedContent {
	type: string;
	cover_title: string;
	title: string;
	sub_title: string;
	order: string;
	cover_image: string;
	client: string;
	installateur: string;
	fabricant: string;
	date_demarrage: string;
	localisation: string;
	agent: string;
	concept: string;
	recompense: string;
	prem_loc: string;
	prem_client: string;
	string;
	sec_loc: string;
	sec_client: string;
	sec_archi_be: string;
	carousel: string[];
	texte_quotidien: string;
	texte_vicat: string;
}

export interface Product extends ParsedContent {
	title: string;
	designer: string;
	collection: string;
	category: string;
	sub_category: string;
	gamme: string;
	cover_undertext: string;
	motifs: string;
	motif_vegetal: string;
	motif_window: string;
	portes: string;
	bal: string;
	personnalisation: string;
	cover_image: string;
	carousel: string[];
	filaire: string[];
	reference: string;
	materiau: string;
	poids: number;
	dimensions: string;
	format: string;
	traitement: string;
	tags: string[];
}
