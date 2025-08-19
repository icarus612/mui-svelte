<script lang="ts">
	import type { InputProps } from './input.types';

	let {
		variant,
		size,
		disabled = false,
		placeholder = '',
		value = '',
		bordered = true,
		ghost = false,
		class: cx = '',
		oninput
	}: InputProps = $props();

	let inputClass = $derived([
		'input',
		variant ? `input-${variant}` : '',
		size ? `input-${size}` : '',
		bordered ? 'input-bordered' : '',
		ghost ? 'input-ghost' : '',
		cx
	].join(' '));
</script>

<input
	type="text"
	class={inputClass}
	{disabled}
	{placeholder}
	{value}
	oninput={oninput}
/>
