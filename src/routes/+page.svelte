<script>
	import Logo from '$lib/components/Logo/Logo.svelte';
	import LatestMidiPacks from './sections/LatestMidiPacks.svelte';
	import Connect from './sections/Connect.svelte';
	import BrowseAndMint from './sections/BrowseAndMint.svelte';
	export const prerender = true;
</script>

<section class="container mx-auto h-[calc(100vh-76px)] relative overflow-x-hidden">
	<div class="flex justify-center h-full items-center">
		<div class="absolute h-[32rem] w-[32rem] rounded-full bg-white b-0" />
		<div class="z-10 flex justify-center flex-col items-center">
			<img src="/images/devices-with-shadows.png" alt="SonoBay" />
			<div class="flex mt-4 items-center mb-2">
				<Logo />
				<div class="w-64 -mt-2 ml-4">
					<img src="/images/sb-fold.png" alt="SonoBay" />
				</div>
			</div>
			<div class="flex text-xl items-center uppercase text-black">
				<span>The</span>
				<div class="w-14">
					<img class="w-full" src="/images/midi-logo_128.jpg" alt="MIDI" />
				</div>
				<span class="font-bold mr-1">NFT</span>
				<span>Marketplace</span>
			</div>
			<span class="text-xs uppercase text-gray-400">For Producers, Collaborators & Collectors</span>
		</div>
	</div>
</section>
<LatestMidiPacks />
<Connect />
<BrowseAndMint />
