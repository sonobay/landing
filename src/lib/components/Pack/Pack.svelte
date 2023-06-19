<script lang="ts">
	import NounErrorPage from '../icons/NounErrorPage.svelte';
	import NounMidi from '../icons/NounMidi.svelte';
	import NounMint from '../icons/NounMint.svelte';

	export let image: string;
	export let name: string;
	export let totalSupply: number;
	export let id: number;
</script>

<a
	class="relative w-full h-full hover:cursor-pointer inline-block"
	href={'https://mumbai.sonobay.xyz/midi/' + id}
>
	<div
		class="rounded-xl overflow-hidden w-full h-full items-center justify-center flex bg-gray-100"
	>
		{#if image}
			<img class="w-full hover:scale-105 transition-all" src={image} alt={name} />
		{:else}
			<NounErrorPage size={36} />
		{/if}
	</div>

	<div class="absolute bottom-1 left-0 right-0 flex flex-col p-2">
		<div class="mb-2">
			<div class="bg-white/75 text-black rounded-lg py-1 px-3 text-sm flex float-left items-center">
				<NounMint size={16} />
				<span class="ml-2">{totalSupply}</span>
			</div>
		</div>

		<div class="mb-2">
			<div class="bg-white/75 text-black rounded-lg py-1 px-3 text-sm flex float-left items-center">
				<NounMidi size={16} />
				<span class="ml-2">{1}</span>
			</div>
		</div>

		<div class="w-full flex">
			<span class="bg-black/75 text-white w-full rounded-lg py-1 px-3 font-bold text-sm"
				>{name}</span
			>
		</div>
	</div>
</a>
