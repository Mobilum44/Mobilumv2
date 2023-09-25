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
