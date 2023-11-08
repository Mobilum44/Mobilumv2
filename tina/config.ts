import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT || "",
	token: process.env.TINA_TOKEN || "",

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	schema: {
		collections: [
			{
				name: "produit",
				label: "Produits",
				path: "content/produit",
				format: "md",
				fields: [
					{
						name: "title",
						type: "string",
						label: "Titre",
						isTitle: true,
						required: true,
					},
					{
						name: "designer",
						type: "string",
						label: "Designer",
						required: false,
					},
					{
						name: "collection",
						type: "string",
						label: "Collection",
						required: false,
					},
					{
						name: "category",
						type: "string",
						label: "Catégorie",
						required: false,
					},
					{
						name: "sub_category",
						type: "string",
						label: "Sous-catégorie",
						required: false,
					},
					{
						name: "gamme",
						type: "string",
						label: "Gamme",
						required: false,
					},
					{
						name: "cover_undertext",
						type: "string",
						label: "Sous-texte",
						required: false,
					},
					{
						name: "motifs",
						type: "boolean",
						label: "Motifs",
						required: false,
					},
					{
						name: "motif_vegetal",
						type: "boolean",
						label: "Motif végétal",
						required: false,
					},
					{
						name: "motif_window",
						type: "boolean",
						label: "Motif fenêtre",
						required: false,
					},
					{
						name: "portes",
						type: "boolean",
						label: "Portes",
						required: false,
					},
					{
						name: "bal",
						type: "boolean",
						label: "Bal",
						required: false,
					},
					{
						name: "personnalisation",
						type: "string",
						label: "Personnalisation",
						required: false,
					},
					{
						name: "reference",
						type: "string",
						label: "Réference",
						required: true,
					},
					{
						name: "materiau",
						type: "string",
						label: "Matériau",
						required: true,
					},
					{
						name: "poids",
						type: "number",
						label: "Poids",
						required: true,
					},
					{
						name: "dimensions",
						type: "string",
						label: "Dimensions",
						required: true,
					},
					{
						name: "format",
						type: "string",
						label: "Format",
						required: true,
					},
					{
						name: "traitement",
						type: "string",
						label: "Traitement",
						required: false,
					},
					{
						name: "cover_image",
						type: "image",
						label: "Image de couverture",
						required: true,
					},
					{
						name: "carousel",
						type: "object",
						label: "Galerie d'images",
						list: true,
						ui: {
							itemProps: (item) => {
								return { label: `${item.image_name || "Sans nom"} (${item.image})` };
							},
						},
						fields: [
							{ label: "Image", name: "image", type: "image" },
							{ label: "Nom de l'image", name: "image_name", type: "string" },
						],
					},
					{
						name: "filaire",
						type: "object",
						label: "Filaire",
						list: true,
						ui: {
							itemProps: (item) => {
								return { label: `${item.image_name || "Sans nom"} (${item.image})` };
							},
						},
						fields: [
							{ label: "Image", name: "image", type: "image" },
							{ label: "Nom de l'image", name: "image_name", type: "string" },
						],
					},
					{
						name: "body",
						isBody: true,
						type: "rich-text",
						label: "Description",
					},
				],
			},
		],
	},
	search: {
		tina: {
			indexerToken: process.env.TINA_SEARCH || "",
			stopwordLanguages: ["fra"],
		},
	},
});
