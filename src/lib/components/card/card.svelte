<script lang="ts">
<<<<<<< HEAD
import type { CardProps } from './card.types';

let { ...props }: CardProps = $props();
=======
	import type { CardProps } from './card.types.js';

	let {
	raised = undefined,
	variant = undefined,
	cx = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
