<script lang="ts">
<<<<<<< HEAD
import type { ContainerProps } from './container.types';

let { ...props }: ContainerProps = $props();
=======
	import type { ContainerProps } from './container.types.js';
	let {
	disableGutters = undefined,
	fixed = undefined,
	maxWidth = undefined,
	cx = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
