<script lang="ts">
	import type { CommandPaletteProps } from './command-palette.types.js';
	let {
	open = undefined,
	commands = undefined,
	placeholder = undefined,
	noResultsText = undefined,
	searchKeys = undefined,
	categories = undefined,
	showCategories = undefined,
	showShortcuts = undefined,
	maxResults = undefined,
	fuzzySearch = undefined,
	hotKey = undefined,
	cx = undefined,
	onclose = undefined,
	onsearch = undefined,
	onselect = undefined,
	icon = undefined
} = $props();
</script>
