<script lang="ts">
	import CaretLeft from '$lib/components/icons/CaretLeft.svelte';
	import CaretRight from '$lib/components/icons/CaretRight.svelte';
	import { fade } from 'svelte/transition';
	import type { ListingRow } from '$lib/types/listing-row';
	import Pack from '$lib/components/Pack/Pack.svelte';

	export let latestListings: ListingRow[] = [];

	let scrollContainer: HTMLDivElement;
	let innerWidth: number;
	let showLeftScroll = false;
	let showRightScroll = true;

	function scrollRight() {
		let maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		scrollContainer.scrollLeft += innerWidth / 2;
		if (scrollContainer.scrollLeft >= maxScrollLeft - 100) showRightScroll = false;
		showLeftScroll = true;
	}
	function scrollLeft() {
		scrollContainer.scrollLeft -= innerWidth / 2;
		if (scrollContainer.scrollLeft == 0) showLeftScroll = false;
		showRightScroll = true;
	}
</script>

<svelte:window bind:innerWidth />

<section class="bg-white py-24 overflow-x-hidden">
	<div class="mx-auto px-8 lg:px-16">
		<h1 class="w-full text-left mb-8 lg:ml-6">CHECK THE LATEST MIDI PACKS</h1>

		<div class="relative group">
			<div
				bind:this={scrollContainer}
				class="flex flex-row gap-12 overflow-x-scroll lg:no-scrollbar pb-6 scroll-smooth"
				style="-webkit-overflow-scrolling: auto;"
			>
				{#each latestListings as listing}
					<div class="flex justify-center">
						<div class="h-72 w-72 lg:h-96 lg:w-96">
							<Pack
								id={listing.midi?.id}
								image={listing.midi?.metadata?.image
									? listing.midi.metadata.image.replace('ipfs://', 'https://nftstorage.link/ipfs/')
									: ''}
								name={listing.midi?.metadata?.name ? listing.midi.metadata.name : ''}
								totalSupply={listing.midi?.totalSupply ? listing.midi.totalSupply : 0}
							/>
						</div>
					</div>
				{/each}
			</div>

			{#if showLeftScroll && latestListings.length > 4}
				<div class="hidden absolute top-0 bottom-6 -left-6  m-auto lg:flex items-center z-10">
					<button
						in:fade
						out:fade
						on:click={scrollLeft}
						class="bg-gray-50 border border-white hover:cursor-pointer rounded-full p-2 sm:p-4 shadow-md hover:shadow-lg "
					>
						<CaretLeft />
					</button>
				</div>
			{/if}
			{#if showRightScroll && latestListings.length > 4}
				<div
					class="hidden absolute top-0 bottom-6 -right-6 m-auto lg:flex items-center justify-end z-10"
				>
					<button
						in:fade
						out:fade
						on:click={scrollRight}
						class="bg-gray-50 border border-white hover:cursor-pointer rounded-full p-2 sm:p-4 shadow-md hover:shadow-lg "
					>
						<CaretRight />
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>
