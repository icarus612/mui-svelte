<script lang="ts">
	import type { BottomNavigationProps } from './bottom-navigation.types.js';

	let { class: cx = '', children }: BottomNavigationProps = $props();
</script>

<div class="dock {cx}">
	{#if children}
		{#if typeof children === 'string'}
			{@html children}
		{:else}
			{@render children()}
		{/if}
	{/if}
</div>
