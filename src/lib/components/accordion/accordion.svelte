<script lang="ts">
	import type { AccordionProps } from './accordion.types.js';
	let {
	defaultExpanded = false,
	disabled = false,
	disableGutters = false,
	expanded = undefined,
	square = false,
	cx = undefined,
	onchange = undefined,
	children: childrenSnippet = undefined,
	summary = undefined,
	details = undefined
} = $props();
</script>
