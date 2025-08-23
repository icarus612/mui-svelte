<script lang="ts">
	import type { AlertProps } from './alert.types';

	let { variant, color, direction, class: cx, children, icon }: AlertProps = $props();

	const alertClass = $derived(
		[
			'alert',
			variant ? `alert-${variant}` : '',
			color ? `alert-${color}` : '',
			direction ? `alert-${direction}` : '',
			cx
		]
			.join(' ')
			.trim()
	);
</script>

<div role="alert" class={alertClass}>
	{#if icon}
		{@html icon}
	{/if}
	{#if typeof children === 'string'}
		<span>{children}</span>
	{:else}
		{@render children()}
	{/if}
</div>
