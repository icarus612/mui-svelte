<script lang="ts">
<<<<<<< HEAD
import type { SearchInputProps } from './search-input.types';

let { ...props }: SearchInputProps = $props();
=======
	import type { SearchInputProps } from './search-input.types.js';

	let {
	value = undefined,
	placeholder = undefined,
	disabled = undefined,
	clearable = undefined,
	loading = undefined,
	suggestions = undefined,
	debounceTime = undefined,
	size = undefined,
	variant = undefined,
	fullWidth = undefined,
	autoFocus = undefined,
	cx = undefined,
	onchange = undefined,
	onsearch = undefined,
	onclear = undefined,
	onsuggestionselect = undefined,
	searchIcon = undefined,
	clearIcon = undefined
} = $props();
>>>>>>> main
</script>
