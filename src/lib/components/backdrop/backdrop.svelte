<script lang="ts">
<<<<<<< HEAD
import type { BackdropProps } from './backdrop.types';

let { ...props }: BackdropProps = $props();
=======
	import type { BackdropProps } from './backdrop.types.js';
	let {
	open = undefined,
	invisible = undefined,
	transitionDuration = undefined,
	cx = undefined,
	onclick = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
