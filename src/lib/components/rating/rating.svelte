<script lang="ts">
<<<<<<< HEAD
import type { RatingProps } from './rating.types';

let { ...props }: RatingProps = $props();
=======
	import type { RatingProps } from './rating.types.js';

	let {
	value = undefined,
	defaultValue = undefined,
	disabled = undefined,
	emptyLabelText = undefined,
	getLabelText = undefined,
	highlightSelectedOnly = undefined,
	max = undefined,
	name = undefined,
	precision = undefined,
	readOnly = undefined,
	size = undefined,
	cx = undefined,
	onchange = undefined,
	onchangeactive = undefined,
	icon = undefined,
	emptyIcon = undefined
} = $props();
>>>>>>> main
</script>
