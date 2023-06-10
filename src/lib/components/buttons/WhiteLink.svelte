<script>
	export let text = 'btn';
	export let href = '#';
	export let textColor = 'text-black';
	export let borderColor = 'border-black';
</script>

<a
	{href}
	class={'rounded-2xl px-4 py-2 bg-white border-2 text-center shadow-md ' +
		textColor +
		' ' +
		borderColor}>{text}</a
>
