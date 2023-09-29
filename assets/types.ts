import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Reference extends ParsedContent {
	type: string;
	cover_title: string;
	title: string;
	sub_title: string;
	published: boolean;
	gamme: string;
	cover_image: string;
	cover_text: string;
	carousel: string[];
	prem_loc: string;
	prem_client: string;
	prem_archi_be: string;
	sec_loc: string;
	sec_client: string;
	sec_archi_be: string;
	moa_commun: string;
	installateur: string;
	fabricant: string;
	date_realisation: string;
	date_demarrage: string;
	duree_marche: string;
	recompense: string;
	concept: string;
	localisation: string;
	client: string;
	archi_be: string;
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
