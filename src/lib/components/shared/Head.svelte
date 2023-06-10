<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Sono Bay - MIDI Nft Marketplace</title>
	<meta name="description" content="description here" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Sono bay" />
	<meta property="og:url" content={$page.url.toString()} />
	<meta property="og:description" content="description here" />
	<meta property="og:image" content={$page.url.origin + '/images/sonobay-logo-yellow.png'} />
</svelte:head>
