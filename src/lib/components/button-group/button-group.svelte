<script lang="ts">
	import type { ButtonGroupProps } from './button-group.types.js';

	let {
		orientation = 'horizontal',
		class: cx = '',
		children
	}: ButtonGroupProps = $props();

	const orientationClass = $derived(orientation === 'vertical' ? 'join-vertical' : 'join-horizontal');
</script>

<div class="join {orientationClass} {cx}">
	{#if children}
		{#if typeof children === 'string'}
			{@html children}
		{:else}
			{@render children()}
		{/if}
	{/if}
</div>
