<script lang="ts">
	import type { AffixProps } from './affix.types.js';
	let {
	offsetTop = undefined,
	offsetBottom = undefined,
	position = 'top',
	target = undefined,
	zIndex = undefined,
	cx = undefined,
	onchange = undefined,
	onpin = undefined,
	onunpin = undefined,
	children: childrenSnippet = undefined
} = $props();
</script>
