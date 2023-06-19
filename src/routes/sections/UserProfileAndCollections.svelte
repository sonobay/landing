<script>
	import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte';
	import BlueLink from '$lib/components/buttons/BlueLink.svelte';
	import WhiteLink from '$lib/components/buttons/WhiteLink.svelte';
	import Eth from '$lib/components/icons/Eth.svelte';
	import Filter from '$lib/components/icons/Filter.svelte';
</script>

<section class=" relative overflow-x-hidden">
	<div class="container mx-auto px-4 z-10 relative pb-16">
		<SectionTitle title="Connect User profile & Collections" />
		<div class="flex flex-col md:flex-row gap-6 sm:gap-12 justify-center items-center">
			<img
				src="./images/artist-profile.png"
				class="h-full md:h-80 lg:h-full max-h-[30rem]"
				alt=""
			/>
			<div class="w-full">
				<div
					class="bg-midiYellowLight flex-col md:flex-row justify-center items-center flex rounded-3xl md:p-6 lg:p-10 p-10 gap-4 lg:gap-8 m-4"
				>
					<div class="w-full lg:w-1/2 flex flex-col">
						<BlueLink text="Listings" />
						<div class="mt-4" />
						<WhiteLink text="Collections" borderColor="border-midiBlue" textColor="text-midiBlue" />
					</div>
					<div class="w-full lg:w-1/2">
						<p>
							<span class="font-bold">See what packs</span>
							your favorite producer is selling and collecting
						</p>
					</div>
				</div>
				<div
					class="bg-midiYellowLight flex-col md:flex-row justify-center items-center flex rounded-3xl md:p-6 lg:p-10 p-10 gap-4 lg:gap-8 m-4"
				>
					<div class="w-full lg:w-1/2 flex flex-col">
						<a
							href="#"
							class="shadow-md rounded-2xl px-4 py-2 border-2 bg-white border-black/30 text-black/30 flex items-center justify-between"
							>Filter device <span class="ml-2"
								><Filter color="rgb(0 0 0 / 0.3)" width="16px" height="16px" />
							</span>
						</a>
						<div class="mt-4" />

						<BlueLink text="SEND TO DEVICE" />
					</div>
					<div class="w-full lg:w-1/2">
						<p>
							<span class="font-bold">Search packs</span>
							by compatible devices to try on your instrument
						</p>
					</div>
				</div>

				<div class="bg-midiYellowLight flex-row flex items-center rounded-3xl p-6 m-4 ">
					<Eth color="rgb(0 0 0)" backgroundColor="rgb(255 255 255)" />
					<p class="ml-4"><span class="font-bold">User profiles </span> are powered by</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container h-full mx-auto relative">
		<div
			class=" absolute h-[32rem] w-[64rem] rounded-tr-full rounded-tl-full bg-white bottom-0 -left-80"
		/>
	</div>
</section>
