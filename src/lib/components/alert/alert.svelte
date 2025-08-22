<script lang="ts">
	import type { AlertProps } from './alert.types.js';
	let {
	closeText = undefined,
	color = 'info',
	role = 'alert',
	severity = 'info',
	variant = 'standard',
	cx = undefined,
	onclose = undefined,
	children: childrenSnippet = undefined,
	action = undefined,
	icon = undefined
} = $props();
</script>
