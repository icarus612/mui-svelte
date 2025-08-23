<script lang="ts">
<<<<<<< HEAD
import type { DialogProps } from './dialog.types';

let { ...props }: DialogProps = $props();
=======
	import type { DialogProps } from './dialog.types.js';
	let {
	open = undefined,
	'aria-describedby': ariaDescribedby = undefined,
	'aria-labelledby': ariaLabelledby = undefined,
	disableEscapeKeyDown = undefined,
	fullScreen = undefined,
	fullWidth = undefined,
	maxWidth = undefined,
	scroll = undefined,
	transitionDuration = undefined,
	cx = undefined,
	onclose = undefined,
	onbackdropclick = undefined,
	children: childrenSnippet = undefined
} = $props();
>>>>>>> main
</script>
