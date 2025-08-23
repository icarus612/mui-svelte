<script lang="ts">
<<<<<<< HEAD
import type { EmptyStateProps } from './empty-state.types';

let { ...props }: EmptyStateProps = $props();
=======
	import type { EmptyStateProps } from './empty-state.types.js';

	let {
	title = undefined,
	description = undefined,
	image = undefined,
	imageWidth = undefined,
	imageHeight = undefined,
	actionText = undefined,
	iconColor = undefined,
	variant = undefined,
	cx = undefined,
	onaction = undefined,
	icon = undefined,
	action = undefined
} = $props();
>>>>>>> main
</script>
