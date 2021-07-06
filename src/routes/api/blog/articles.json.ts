import Client, { Predicates } from '$lib/PrismicClient';

export async function get() {
	const response = await Client.query(Predicates.at('document.type', 'article'));
	const result = response.results.map((r) => {
		return {
			...r.data,
			id: r.id,
			href: r.href,
			uid: r.uid,
			featured: r.data.featured
		};
	});
	const { featured, articles } = result?.reduce(
		(acc, current) => {
			if (current.featured) {
				acc.featured = current;
			} else {
				acc.articles.push(current);
			}
			return acc;
		},
		{ featured: null, articles: [] }
	);

	return {
		body: {
			featured,
			articles
		}
	};
}
