<script>
	export let text = 'btn';
	export let href = '#';
	export let textColor = 'text-white';
	export let borderColor = 'border-midiBlue';
</script>

<a
	{href}
	class={'rounded-2xl px-4 py-2 bg-midiBlue border-2 text-center ' + textColor + ' ' + borderColor}
	>{text}</a
>
