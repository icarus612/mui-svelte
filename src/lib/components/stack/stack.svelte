<script lang="ts">
<<<<<<< HEAD
import type { StackProps } from './stack.types';

let { ...props }: StackProps = $props();
=======
	import type { StackProps } from './stack.types.js';
	let {
	direction = undefined,
	spacing = undefined,
	useFlexGap = undefined,
	cx = undefined,
	children: childrenSnippet = undefined,
	divider = undefined
} = $props();
>>>>>>> main
</script>
