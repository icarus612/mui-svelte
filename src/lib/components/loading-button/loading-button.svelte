<script lang="ts">
<<<<<<< HEAD
import type { LoadingButtonProps } from './loading-button.types';

let { ...props }: LoadingButtonProps = $props();
=======
	import type { LoadingButtonProps } from './loading-button.types.js';
	let {
	loading = undefined,
	loadingPosition = undefined,
	disabled = undefined,
	variant = undefined,
	color = undefined,
	size = undefined,
	fullWidth = undefined,
	href = undefined,
	cx = undefined,
	onclick = undefined,
	children: childrenSnippet = undefined,
	loadingIndicator = undefined,
	startIcon = undefined,
	endIcon = undefined
} = $props();
>>>>>>> main
</script>
