<script>
	import BlueLink from '$lib/components/buttons/BlueLink.svelte';
</script>

<section class="relative overflow-hidden ">
	<div class="container mx-auto px-8 z-10 relative text-center py-24">
		<h1 class="font-bold text-5xl mb-16">Connect MIDI device to get started</h1>
		<div class="flex flex-col md:flex-row gap-12 justify-center items-center">
			<img src="./images/MIDI-Plug.png" class="h-full max-h-[12rem] object-contain" alt="" />
			<div
				class=" bg-midiYellowLight rounded-3xl px-4 py-6 md:py-8 md:px-12 shadow-sm h-min max-w-lg"
			>
				<p class="mb-8 text-left">
					<span class="font-bold block">To mint packs or test out MIDI on your device,</span>
					you'll need to connect your synthesizer to Sono Bay via USB.
				</p>
				<BlueLink text="CONNECT NOW" />
			</div>
		</div>
	</div>
	<div class="container h-full mx-auto relative">
		<div
			class="hidden md:block absolute h-[34rem] w-[68rem] -ml-72 -mb-80 rounded-tr-full rounded-tl-full bg-white bottom-0 "
		/>
	</div>
</section>
