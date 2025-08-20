<script lang="ts">
	import type { BreadcrumbsProps } from './breadcrumbs.types.js';

	let {
	'aria-label': ariaLabel = undefined,
	expandText = undefined,
	itemsAfterCollapse = undefined,
	itemsBeforeCollapse = undefined,
	maxItems = undefined,
	separator = undefined,
	cx = undefined,
	children: childrenSnippet = undefined,
	separatorSnippet = undefined
} = $props();
</script>
