<script>
	import Logo from '../Logo/Logo.svelte';
	import Filter from '../icons/Filter.svelte';
	import XMark from '../icons/XMark.svelte';
	import { slide } from 'svelte/transition';
	let openMenu = false;
</script>

<header>
	<nav class="container mx-auto py-4 px-4 hidden md:block">
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
					href="https://mumbai.sonobay.xyz/mint"
					class="shadow rounded-xl px-8 py-2 bg-white mr-4 border-2 border-black">Mint</a
				>

				<!-- Connect Device -->
				<a
					href="https://mumbai.sonobay.xyz/config"
					class="shadow rounded-xl px-8 py-2 bg-white mr-4 border-2 border-black">Connect Device</a
				>

				<!-- Open app button -->
				<a
					href="https://mumbai.sonobay.xyz"
					class="bg-midiBlue rounded-xl px-8 py-2 flex items-center shadow border-2 border-midiBlue"
					target="_blank">Open App</a
				>
			</div>
		</div>
	</nav>
	<nav class="flex md:hidden fixed top-0 w-full z-20">
		<div class="flex flex-col md:hidden w-full ">
			<div class="flex justify-between w-full bg-midiYellow py-4 px-4 ">
				<a href="/" class="flex align-items justify-center">
					<Logo />
					<div class="ml-2 h-8 flex">
						<img src="/images/sono-bay-logo.png" alt="Sonobay.xyz" />
					</div>
				</a>
				<button
					on:click={() => {
						openMenu = !openMenu;
					}}
				>
					{#if openMenu}
						<XMark width="24px" height="24px" color="#414141" />
					{:else}
						<Filter />
					{/if}
				</button>
			</div>
			{#if openMenu}
				<div
					in:slide={{ duration: 300 }}
					out:slide={{ duration: 300 }}
					class="w-full py-8 flex flex-col gap-4 bg-midiYellow px-4"
				>
					<a href="#">Mint</a>
					<a href="#">Connect Device</a>
					<a href="#">Open App</a>
				</div>
			{/if}
		</div>
	</nav>
</header>
