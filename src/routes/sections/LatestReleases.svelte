<script>
	import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte';
	import BlueLink from '$lib/components/buttons/BlueLink.svelte';
	import WhiteLink from '$lib/components/buttons/WhiteLink.svelte';
	import YellowLink from '$lib/components/buttons/YellowLink.svelte';
	import Eth from '$lib/components/icons/Eth.svelte';
	import Midi from '$lib/components/icons/Midi.svelte';
	import Mint from '$lib/components/icons/Mint.svelte';
	import Usb from '$lib/components/icons/Usb.svelte';
	import XMark from '$lib/components/icons/XMark.svelte';
</script>

<section class="bg-white pb-24">
	<div class="container mx-auto px-4">
		<SectionTitle title="Easily Buy & Sell MIDI NFT Packs" />

		<div class="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center">
			<div class="bg-midiYellowLight rounded-2xl p-6 w-full sm:w-min h-min">
				<div class="flex flex-row items-center mb-4">
					<span class="mr-3">
						<Usb />
					</span>
					<p class="font-bold mr-1">Connect</p>
					<p>Instrument</p>
				</div>

				<div class="flex flex-row items-center mb-4">
					<span class="mr-3">
						<Midi />
					</span>
					<p class="font-bold mr-1">Add</p>
					<p>SYSEX Files</p>
				</div>

				<div class="flex flex-row items-center mb-4">
					<span class="mr-3">
						<Mint />
					</span>
					<p class="font-bold mr-1">Mint</p>
					<p>NFT Pack</p>
				</div>

				<div class="flex flex-row items-center">
					<span class="mr-3">
						<Eth />
					</span>
					<p class="font-bold mr-1">List</p>
					<p>and Sell</p>
				</div>
			</div>

			<div class="w-full">
				<img src="/images/mint-modal.png" class="h-full" alt="Mint Pack" />
			</div>
		</div>
	</div>
	<div class="lg:flex lg:flex-row sm:grid-cols-3 grid grid-cols-2 justify-center gap-6 mt-20 px-8">
		<WhiteLink text="ADD DEVICE" />
		<WhiteLink text="MIDI RECIEVED" />
		<WhiteLink borderColor="border-midiBlue" textColor="text-midiBlue" text="ADD TO PACK" />
		<a
			href="#"
			class="shadow-md  justify-between rounded-3xl px-8 py-2 border-2 border-black bg-black/10 opacity-30 flex items-center text-sm sm:text-base"
			>Add tag <span class="ml-2"><XMark /></span>
		</a>
		<BlueLink text="MINT PACK" />
		<YellowLink text="LIST PACK" />
	</div>
</section>
