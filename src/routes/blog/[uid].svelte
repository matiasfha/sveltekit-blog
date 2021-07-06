<script context="module" lang="ts">
	export const ssr = true;
	export const prerender = true;
	export async function load({ fetch, page }) {
		const { uid } = page.params;
		const url = `/api/blog/${uid}.json`;
		const res = await fetch(url);
		const article = await res.json();
		if (res.ok) {
			return {
				status: res.status,
				props: {
					article
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}, status: ${res.status}`)
		};
	}
</script>

<script lang="ts">
	import PrismicDOM from 'prismic-dom';
	import Seo from '$lib/components/Seo.svelte';
	export let article;
	const title = PrismicDOM.RichText.asText(article.title);
</script>

<Seo {title} keywords="" image={article.ogImage} type="article" />

<main class="w-full pb-4">
	<header
		class="post-header w-full bg-gray-900 flex items-start flex-col justify-center relative max-h-96 h-96"
	>
		<img
			src={article.image.url}
			class="object-cover w-full absolute top-0 left-0 z-0 max-h-96 filter blur-sm"
			alt={title}
		/>
		<h1 class="text-center text-gray-100 font-bold text-3xl max-w-4xl z-10 p-8">
			{title}
		</h1>
	</header>
	<article class="text-gray-800 text-base text-left py-12 mx-auto container max-w-6xl ">
		{@html PrismicDOM.RichText.asHtml(article.content)}
	</article>
</main>

<style>
	.post-header::after {
		width: 60vw;
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background: #111;
		opacity: 0.85;
		display: block;
		z-index: 5;
		mix-blend-mode: multiply;
		transform: skew(-15deg, 0deg);
		transform-origin: top left;
	}
</style>
