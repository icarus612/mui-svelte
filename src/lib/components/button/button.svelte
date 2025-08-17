<script lang="ts">
	import type { ButtonProps } from './button.types';

	let {
		variant,
		size,
		disabled = false,
		outline = false,
		wide = false,
		glass = false,
		class: cx = '',
		children,
		onclick
	}: ButtonProps = $props();

	let buttonClass = $derived([
		'btn',
		variant ? `btn-${variant}` : '',
		size ? `btn-${size}` : '',
		outline ? 'btn-outline' : '',
		wide ? 'btn-wide' : '',
		glass ? 'glass' : '',
		cx
	].join(' '));
</script>

<button class={buttonClass} {disabled} onclick={onclick}>
	{@render children()}
</button>
