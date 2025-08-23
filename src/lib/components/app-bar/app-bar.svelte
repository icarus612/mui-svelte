<script lang="ts">
	import type { AppBarProps } from './app-bar.types.js';

	let {
		color = 'default',
		position = 'static',
		variant = 'elevation',
		class: cx = '',
		children
	}: AppBarProps = $props();

	const appBarClass = $derived(
		[
			'navbar',
			color === 'primary' ? 'bg-primary text-primary-content' : '',
			color === 'secondary' ? 'bg-secondary text-secondary-content' : '',
			color === 'default' ? 'bg-base-100' : '',
			variant === 'elevation' ? 'shadow-md' : '',
			variant === 'outlined' ? 'border' : '',
			cx
		]
			.join(' ')
			.trim()
	);

	const appBarstyle = $derived(`position: ${position};`);
</script>

<div class={appBarClass} style={appBarstyle}>
	{#if children}
		{#if typeof children === 'string'}
			{children}
		{:else}
			{@render children()}
		{/if}
	{/if}
</div>
