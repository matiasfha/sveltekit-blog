<script lang="ts">
	export let title: string;
	export let description: string = undefined;
	export let keywords: string;
	export let canonical: string = undefined;
	export let type: string;
	export let image: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index,follow" />
	{#if description}
		<meta name="description" content={description} />
	{/if}
	{#if canonical}
		<link rel="canonial" href={canonical} />
	{/if}
	<meta name="keywords" content={keywords} />

	<meta property="og:title" content={title} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:type" content={type ? type : 'site'} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	<meta name="twitter:image" content={image} />
</svelte:head>
