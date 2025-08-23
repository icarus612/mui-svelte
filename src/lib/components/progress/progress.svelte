<script lang="ts">
<<<<<<< HEAD
import type { ProgressProps } from './progress.types';

let { ...props }: ProgressProps = $props();
=======
	import type { ProgressProps } from './progress.types.js';
	let {
	color = undefined,
	disableShrink = undefined,
	size = undefined,
	thickness = undefined,
	value = undefined,
	variant = undefined,
	valueBuffer = undefined,
	cx = undefined
} = $props();
>>>>>>> main
</script>
