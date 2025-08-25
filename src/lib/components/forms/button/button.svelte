<script lang="ts">
	import type { ButtonProps } from './button.types';

	let {
		variant = 'primary',
		size = 'md',
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
	{#if typeof children === 'string'}
		{children}
	{:else}
		{@render children()}
	{/if}
</button>
