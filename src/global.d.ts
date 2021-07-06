/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="@prismicio/types" />

import type { DateField, RichTextField, RTHeading1Node, RTImageNode } from '@prismicio/types';

interface ImportMetaEnv {
	VITE_PRISMIC_API: string;
	VITE_PRISMIC_TOKEN: string;
	VITE_CLOUDINARY_API_KEY: string;
	VITE_CLOUDINARY_API_SECRET: string;
	VITE_CLOUDINARY_CLOUD_NAME: string;
}

interface Article {
	image: RTImageNode;
	title: RTHeading1Node;
	date: DateField;
	url: string;
	id: string;
	content: RichTextField;
	featured: boolean;
	uid: string;
	ogImage?: string;
}
