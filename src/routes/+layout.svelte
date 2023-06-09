<script>
	import '../app.css';
	import Head from '$lib/components/shared/Head.svelte';
	import Nav from '$lib/components/shared/Nav.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	export const prerender = true;
</script>

<Head />
<Nav />
<main>
	<slot />
</main>
<Footer />
