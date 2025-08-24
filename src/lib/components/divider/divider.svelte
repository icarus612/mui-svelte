<script lang="ts">
	import type { DividerProps } from './divider.types.js';

	let {
		color,
		orientation = 'vertical',
		position,
		class: cx = '',
		children
	}: DividerProps = $props();

	const dividerClass = $derived(
		[
			'divider',
			color ? `divider-${color}` : '',
			orientation ? `divider-${orientation}` : '',
			position ? `divider-${position}` : '',
			cx
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={dividerClass}>
	{#if children}
		{@render children()}
	{/if}
</div>
