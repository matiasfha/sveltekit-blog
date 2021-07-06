import Prismic from '@prismicio/client';
const Client = Prismic.client(import.meta.env.VITE_PRISMIC_API, {
	accessToken: import.meta.env.VITE_PRISMIC_TOKEN
});
export const { Predicates } = Prismic;

export default Client;
