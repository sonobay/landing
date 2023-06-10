<script>
	export let text = 'btn';
	export let href = '#';
	export let textColor = 'text-white';
	export let borderColor = 'border-midiYellow';
</script>

<a
	{href}
	class={'rounded-2xl px-4 py-2 bg-midiYellow border-2 text-center shadow-md ' +
		textColor +
		' ' +
		borderColor}>{text}</a
>
