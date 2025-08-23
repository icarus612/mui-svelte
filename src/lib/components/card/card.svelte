<script lang="ts">
	import type { CardProps } from './card.types.js';

	let {
		raised = false,
		variant = 'elevation',
		class: cx = '',
		children
	}: CardProps = $props();

	const cardClass = $derived(
		[
			'card',
			'bg-base-100', // default background
			variant === 'elevation' ? (raised ? 'shadow-xl' : 'shadow-sm') : '',
			variant === 'outlined' ? 'card-border' : '',
			cx
		]
			.join(' ')
			.trim()
	);
</script>

<div class={cardClass}>
	{#if children}
		{#if typeof children === 'string'}
			{@html children}
		{:else}
			{@render children()}
		{/if}
	{/if}
</div>
