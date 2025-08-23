<script lang="ts">
<<<<<<< HEAD
import type { ChipProps } from './chip.types';

let { ...props }: ChipProps = $props();
=======
	import type { ChipProps } from './chip.types.js';

	let {
	clickable = undefined,
	color = undefined,
	disabled = undefined,
	label = undefined,
	size = undefined,
	skipFocusWhenDisabled = undefined,
	variant = undefined,
	cx = undefined,
	ondelete = undefined,
	onclick = undefined,
	avatar = undefined,
	icon = undefined,
	deleteIcon = undefined
} = $props();
>>>>>>> main
</script>
