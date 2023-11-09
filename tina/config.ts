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
						description:
							"Champ qui débloque le motif window sur la fiche produit. SI le produit en a besoin, il faut cocher.",
						type: "boolean",
						label: "Motif fenêtre",
						required: false,
					},
					{
						name: "portes",
						description:
							"Seulement pour les produits HOOK. Champ qui débloque les portes sur la fiche produit. SI le produit en a besoin, il faut cocher.",
						type: "boolean",
						label: "Portes",
						required: false,
					},
					{
						name: "bal",
						description:
							"Seulement pour les produits HOOK. Champ qui débloque la zone boite aux lettres sur la fiche produit. SI le produit en a besoin, il faut cocher.",
						type: "boolean",
						label: "Bal",
						required: false,
					},
					{
						name: "personnalisation",
						description:
							"Pas utilisée. Si un jour vous avez besoin d’écrire un texte concernant la personnalisation des totems, cocher, et écrire le texte sur la page modèle (slug.vue) des fiches « produits ».",
						type: "string",
						label: "Personnalisation",
						required: false,
					},
					{
						name: "reference",
						description: "Pas utilisé. Ici, vous pouvez indiquer le numéro de référence du produit.",
						type: "string",
						label: "Réference",
						required: false,
					},
					{
						name: "materiau",
						description:
							"Détail des matériaux utilisés pour la conception du produit. Il peut y avoir plusieurs matériaux différents : BFUP, Inox, … à demander à Christophe.",
						type: "string",
						label: "Matériau",
						required: true,
					},
					{
						name: "poids",
						description:
							"Poids de l’article. Mettre uniquement un chiffre, le « kg » s’affichera de lui-même.",
						type: "number",
						label: "Poids",
						required: true,
					},
					{
						name: "dimensions",
						description:
							"Dimensions de l’article. Suivre le format :  . Il faut aussi faire attention à ce que les mesures correspondent également à celles du filaire.",
						type: "string",
						label: "Dimensions",
						required: true,
					},
					{
						name: "format",
						description:
							"La façon dont le produit est coulé : en un moule (Monobloc) ou en plusieurs moules (Multibloc).",
						type: "string",
						label: "Format",
						required: true,
					},
					{
						name: "traitement",
						description: "Pas utilisé. Pour les finitions du produit : vernis, couche de protection, …",
						type: "string",
						label: "Traitement",
						required: false,
					},
					{
						name: "cover_image",
						description:
							"Chemin vers l’image de couverture. Cette image apparaitra sur la vignette du produit sur sa page « Collection » (Mobilier urbain, Signalétique, HOOK). Il ne faut mettre qu’une seule image.",
						type: "image",
						label: "Image de couverture",
						required: true,
					},
					{
						name: "carousel",
						description:
							"Chemin vers les photos du carousel. Les photos apparaissent sur la fiche du produit, sous forme défilante. Vous pouvez en mettre autant que vous voulez.",
						type: "image",
						label: "Galerie d'images",
						list: true,
					},
					{
						name: "filaire",
						description:
							"Chemin vers la photo filaire du produit. Il faut bien faire attention à ce que la photo soit sous format .png, afin de conserver la transparence du filaire sur la page produit. Vous ne pouvez mettre qu’un seul filaire.",
						type: "image",
						label: "Filaire",
						list: true,
					},
					{
						name: "body",
						isBody: true,
						type: "rich-text",
						label: "Description",
					},
				],
			},
			{
				name: "ref_reussites",
				label: "References",
				path: "content/references",
				format: "md",
				fields: [
					{
						name: "title",
						type: "string",
						label: "Titre",
						required: true,
					},
					{
						name: "sub_title",
						type: "string",
						label: "sous-titre",
						required: false,
					},
					{
						name: "type",
						type: "string",
						label: "Type",
						required: true,
					},
					{
						name: "order",
						type: "number",
						label: "Ordre d'apparition",
						required: true,
					},
					{
						name: "cover_image",
						type: "image",
						label: "Image",
						required: true,
					},
					{
						name: "client",
						type: "string",
						label: "Client",
						required: false,
					},
					{
						name: "installateur",
						type: "string",
						label: "Installateur",
						required: false,
					},
					{
						name: "fabricant",
						type: "string",
						label: "Fabricant",
						required: false,
					},
					{
						name: "date_demarrage",
						type: "number",
						label: "Année démarrage",
						required: false,
					},
					{
						name: "localisation",
						type: "string",
						label: "Localisation",
						required: false,
					},
					{
						name: "agent",
						type: "string",
						label: "Agent",
						required: false,
					},
					{
						name: "concept",
						type: "string",
						label: "Concept",
						required: false,
					},
					{
						name: "recompense",
						type: "string",
						label: "Recompense",
						required: false,
					},
					{
						name: "prem_loc",
						type: "string",
						label: "Galets : première localisation",
						required: false,
					},
					{
						name: "prem_client",
						type: "string",
						label: "Galets : premier client",
						required: false,
					},
					{
						name: "prem_archi_be",
						type: "string",
						label: "Galets : architecte / bureau d'étude 1",
						required: false,
					},
					{
						name: "sec_loc",
						type: "string",
						label: "Galets : seconde localisation",
						required: false,
					},
					{
						name: "sec_client",
						type: "string",
						label: "Galets : second client",
						required: false,
					},
					{
						name: "sec_archi_be",
						type: "string",
						label: "Galets : architecte / bureau d'étude 2",
						required: false,
					},
					{
						name: "texte_quotidien",
						type: "boolean",
						label: "Texte quotidien",
						required: false,
					},
					{
						name: "texte_vicat",
						type: "boolean",
						label: "Texte Vicat",
						required: false,
					},
					{
						name: "relatedProducts",
						label: "Produits liés",
						type: "string",
						list: true,
					},
					{
						name: "carousel",
						type: "image",
						label: "Galerie d'images",
						list: true,
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
