<script lang="ts">
<<<<<<< HEAD
import type { CheckboxProps } from './checkbox.types';

let { ...props }: CheckboxProps = $props();
=======
	import type { CheckboxProps } from './checkbox.types.js';

	let {
	checked = undefined,
	defaultChecked = undefined,
	disabled = undefined,
	indeterminate = undefined,
	color = undefined,
	size = undefined,
	required = undefined,
	value = undefined,
	id = undefined,
	name = undefined,
	disableRipple = undefined,
	cx = undefined,
	onchange = undefined,
	icon = undefined,
	checkedIcon = undefined,
	indeterminateIcon = undefined
} = $props();
>>>>>>> main
</script>
