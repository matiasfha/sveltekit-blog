<script context="module" lang="ts">
	export async function load({ fetch }) {
		const url = `/api/blog/articles.json`;
		const res = await fetch(url);
		const { articles, featured } = await res.json();

		if (res.ok) {
			return {
				status: res.status,
				props: {
					articles,
					featured
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
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	export let articles: Article[];
	export let featured: Article;
	const list = [...articles].splice(1, articles.length);
	const listHeader = articles[0];
</script>

<section class="w-full">
	<div class="container max-w-6xl py-12 mx-auto">
		<article class="grid grid-cols-2 gap-4">
			<div>
				<a href={`/blog/${featured.uid}`}>
					<img
						alt={PrismicDOM.RichText.asText(featured.title)}
						src={featured.image.url}
						class="bg-contain object-contain shadow-sm"
					/>
				</a>
			</div>
			<div>
				<h2 class="text-sm uppercase text-gray-600">Editor's Pick</h2>
				<a href={`/blog/${featured.uid}`}>
					<h1 class="text-3xl text-gray-900">
						{PrismicDOM.RichText.asText(featured.title)}
					</h1>
				</a>
				<p class="text-base text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus
					adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus
					cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
					consectetur doloribus aliquam accusantium beatae?
				</p>
			</div>
		</article>
	</div>
</section>

<section class="w-full py-8">
	<div class="container max-w-6xl py-12 mx-auto">
		<div class="grid grid-cols-3 gap-8">
			<article class="flex flex-col">
				<a href={`/blog/${listHeader.uid}`}>
					<img
						alt={PrismicDOM.RichText.asText(listHeader.title)}
						src={listHeader.image.url}
						class="m-0 pb-4 w-full h-52 object-fill"
					/>
				</a>
				<a href={`/blog/${listHeader.uid}`}>
					<h1 class="text-gray-900 text-xl mb-4">{PrismicDOM.RichText.asText(listHeader.title)}</h1>
				</a>s
				<p class="text-sm text-gray-800">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus
					adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus
					cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi
					consectetur doloribus aliquam accusantium beatae?
				</p>
			</article>
			<!-- Section Articles -->
			<section>
				{#each list as article}
					<ArticleCard {article} />
				{/each}
			</section>
			<div class="flex flex-col gap-4">
				<h1 class="text-base text-gray-800">Featured</h1>
				<ul class="list-none flex flex-col m-0 gap-8">
					<li class="flex flex-row gap-4">
						<span class="text-3xl text-gray-400">01</span>
						<div class="w-full flex flex-col items-start">
							<h2 class="text-base text-gray-900">
								News Needs to Meet Its Audiences Whey They Are
							</h2>
							<span class="text-sm text-gray-400">Jun 19, 2021</span>
						</div>
					</li>
					<li class="flex flex-row gap-4">
						<span class="text-3xl text-gray-400">02</span>
						<div class="w-full flex flex-col items-start">
							<h2 class="text-base text-gray-900">
								News Needs to Meet Its Audiences Whey They Are
							</h2>
							<span class="text-sm text-gray-400">Jun 19, 2021</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
