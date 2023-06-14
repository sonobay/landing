<script>
	export let text = 'btn';
	export let action = () => {};
</script>

<button
	on:click={action}
	class={'rounded-2xl px-4 py-2 bg-midiBlue border-2 text-center shadow-md text-white border-midiBlue'}
	>{text}</button
>
