export default {
	name: "marca",
	title: "Marca",
	type: "document",
	fields: [
		{
			name: "nombre",
			title: "Nombre",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "imagen",
			title: "Imagen",
			type: "image",
		},
		{
			name: "destacada",
			title: "Destacada",
			type: "boolean",
		},
	],
};
