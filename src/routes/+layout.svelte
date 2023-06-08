<script>
	import Logo from '$lib/components/Logo/Logo.svelte';
	import '../app.css';
	export const prerender = true;
</script>

<header class="container mx-auto py-4 px-4">
	<div class="flex flex-col sm:flex-row justify-between">
		<div class="flex flex-col mb-4 sm:mb-0">
			<h1>
				<a href="/" class="flex align-items justify-center">
					<Logo />
					<div class="ml-2 h-8 flex">
						<img src="/images/sono-bay-logo.png" alt="Sonobay.xyz" />
					</div>
				</a>
			</h1>
		</div>

		<div class="flex justify-center text-sm">
			<!-- Mint Button -->
			<a
				href="https://sepolia.sonobay.xyz/mint"
				class="shadow rounded-xl px-8 py-2 bg-white mr-4 border-2 border-black">Mint</a
			>

			<!-- Connect Device -->
			<a
				href="https://sepolia.sonobay.xyz/config"
				class="shadow rounded-xl px-8 py-2 bg-white mr-4 border-2 border-black">Connect Device</a
			>

			<!-- Open app button -->
			<a
				href="https://sepolia.sonobay.xyz"
				class="bg-midiBlue rounded-xl px-8 py-2 flex items-center shadow border-2 border-midiBlue"
				target="_blank">Open App</a
			>
		</div>
	</div>
</header>

<slot />
