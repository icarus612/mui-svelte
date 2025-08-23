<script lang="ts">
	import type { BadgeProps } from './badge.types';

	let { variant, color, size, class: cx, children }: BadgeProps = $props();

	const badgeClass = $derived(
		[
			'badge',
			variant ? `badge-${variant}` : '',
			color ? `badge-${color}` : '',
			size ? `badge-${size}` : '',
			cx
		]
			.join(' ')
			.trim()
	);
</script>

<div class={badgeClass}>
	{#if typeof children === 'string'}
		{children}
	{:else}
		{@render children()}
	{/if}
</div>
