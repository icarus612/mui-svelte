<script lang="ts">
	import type { BreadcrumbsProps } from './breadcrumbs.types.js';

	let {
		'aria-label': ariaLabel = 'breadcrumb',
		class: cx = '',
		children
	}: BreadcrumbsProps = $props();
</script>

<div class="text-sm breadcrumbs {cx}" aria-label={ariaLabel}>
	<ul>
		{#if children}
			{#if typeof children === 'string'}
				{@html children}
			{:else}
				{@render children()}
			{/if}
		{/if}
	</ul>
</div>
