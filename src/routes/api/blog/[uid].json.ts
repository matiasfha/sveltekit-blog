import Client from '$lib/PrismicClient';
import PrismicDOM from 'prismic-dom';
import getOgImage from '$lib/getOgImage';

import cloudinary from 'cloudinary';

cloudinary.v2.config({
	cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
	api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
	api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
});

const uploader = ({ url, id }) => {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.upload(
			url,
			{
				public_id: id,
				unique_filename: false,
				resource_type: 'image',
				format: 'jpg',
				transform: 'q_auto'
			},
			(error, result) => {
				if (error) {
					return reject(error);
				}
				return resolve(result);
			}
		);
	});
};

export async function get({ params }) {
	const { uid } = params;
	const response = await Client.getByUID('article', uid);
	const { title } = response.data;

	return {
		body: {
			...response.data,
			id: response.id,
			href: response.href,
			uid: response.uid,
			ogImage: await getOgImage({
				cloudName: import.meta.env.VITE_CLOUDINAARY_CLOUD_NAME,
				text: PrismicDOM.RichText.asText(title)
			})
		}
	};
