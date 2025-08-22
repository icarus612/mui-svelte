<script lang="ts">
	import type { CodeEditorProps } from './code-editor.types.js';

	let {
	value = undefined,
	language = undefined,
	theme = undefined,
	disabled = undefined,
	readOnly = undefined,
	lineNumbers = undefined,
	wordWrap = undefined,
	fontSize = undefined,
	tabSize = undefined,
	showGutter = undefined,
	highlightActiveLine = undefined,
	showPrintMargin = undefined,
	autoComplete = undefined,
	suggestions = undefined,
	markers = undefined,
	annotations = undefined,
	height = undefined,
	width = undefined,
	minLines = undefined,
	maxLines = undefined,
	cx = undefined,
	onchange = undefined,
	onvalidate = undefined,
	onselectionchange = undefined,
	oncursorchange = undefined,
	onfocus = undefined,
	onblur = undefined
} = $props();
</script>
