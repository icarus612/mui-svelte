<script lang="ts">
	import type { ButtonProps } from './button.types';

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		outline = false,
		wide = false,
		glass = false,
		block = false,
		square = false,
		circle = false,
		active = false,
		loading = false,
		class: cx = '',
		children,
		onclick
	}: ButtonProps = $props();

	let buttonClass = $derived(
		[
			'btn',
			variant ? `btn-${variant}` : '',
			size ? `btn-${size}` : '',
			outline ? 'btn-outline' : '',
			wide ? 'btn-wide' : '',
			glass ? 'glass' : '',
			block ? 'btn-block' : '',
			square ? 'btn-square' : '',
			circle ? 'btn-circle' : '',
			active ? 'btn-active' : '',
			loading ? 'btn-disabled' : '',
			cx
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<button class={buttonClass} {disabled} onclick={onclick}>
	{#if loading}
		<span class="loading loading-spinner"></span>
	{/if}
	{#if typeof children === 'string'}
		{children}
	{:else}
		{@render children()}
	{/if}
</button>
