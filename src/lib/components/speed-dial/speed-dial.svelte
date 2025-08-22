<script lang="ts">
	import type { SpeedDialProps } from './speed-dial.types.js';
	let {
	ariaLabel = undefined,
	direction = undefined,
	hidden = undefined,
	open = undefined,
	transitionDuration = undefined,
	cx = undefined,
	onopen = undefined,
	onclose = undefined,
	children: childrenSnippet = undefined,
	icon = undefined,
	openIcon = undefined
} = $props();
</script>
