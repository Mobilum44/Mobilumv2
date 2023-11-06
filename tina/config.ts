import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
	branch,
	clientId: process.env.TINA_CLIENT,
	token: process.env.TINA_TOKEN,

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
						name: "cover_image",
						type: "image",
						label: "Sous-catégorie",
						required: true,
					},
				],
			},
			//   {
			//     name: "post",
			//     label: "Posts",
			//     path: "content/posts",
			//     fields: [
			//       {
			//         type: "string",
			//         name: "title",
			//         label: "Title",
			//         isTitle: true,
			//         required: true,
			//       },
			//       {
			//         type: "rich-text",
			//         name: "body",
			//         label: "Body",
			//         isBody: true,
			//       },
			//     ],
			//   },
		],
	},
});
