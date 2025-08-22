<script lang="ts">
	import type { RichTextEditorProps } from './rich-text-editor.types.js';

	let {
	value = undefined,
	defaultValue = undefined,
	placeholder = undefined,
	disabled = undefined,
	readOnly = undefined,
	toolbar = undefined,
	formats = undefined,
	modules = undefined,
	theme = undefined,
	bounds = undefined,
	scrollingContainer = undefined,
	preserveWhitespace = undefined,
	height = undefined,
	minHeight = undefined,
	maxHeight = undefined,
	cx = undefined,
	onchange = undefined,
	onfocus = undefined,
	onblur = undefined,
	onkeydown = undefined,
	onkeyup = undefined
} = $props();
</script>
