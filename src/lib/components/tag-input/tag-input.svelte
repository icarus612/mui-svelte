<script lang="ts">
<<<<<<< HEAD
import type { TagInputProps } from './tag-input.types';

let { ...props }: TagInputProps = $props();
=======
	import type { TagInputProps } from './tag-input.types.js';

	let {
	value = undefined,
	defaultValue = undefined,
	placeholder = undefined,
	disabled = undefined,
	readOnly = undefined,
	maxTags = undefined,
	allowDuplicates = undefined,
	separator = undefined,
	validate = undefined,
	transform = undefined,
	suggestions = undefined,
	clearable = undefined,
	cx = undefined,
	onchange = undefined,
	onadd = undefined,
	ondelete = undefined,
	oninputchange = undefined,
	tag = undefined
} = $props();
>>>>>>> main
</script>
