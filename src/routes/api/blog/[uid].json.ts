import Client from '$lib/PrismicClient';
import PrismicDOM from 'prismic-dom';
import getOgImage from '$lib/getOgImage';

export async function get({ params }) {
	const { uid } = params;
	console.log({params})
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
}
