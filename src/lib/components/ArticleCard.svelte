<script lang="ts">
	import PrismicDOM from 'prismic-dom';
	export let article: Article;
	let date = new Date(article.date).toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
</script>

<article class="flex flex-row items-center justify-between transform duration-150 hover:shadow-md">
	<a href={`/blog/${article.uid}`}>
		<img
			class="object-scale-down w-28 h-28"
			src={article.image.url}
			alt={PrismicDOM.RichText.asText(article.title)}
		/>
	</a>
	<div class="flex flex-col ml-4 items-start justify-around">
		<a href={`/blog/${article.uid}`}>
			<h1 class="text-gray-900 text-base mt-4">{PrismicDOM.RichText.asText(article.title)}</h1>
		</a>
		<span class="text-gray-500 text-sm">{date}</span>
	</div>
</article>
