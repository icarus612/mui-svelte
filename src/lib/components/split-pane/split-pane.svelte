<script lang="ts">
	import type { SplitPaneProps } from './split-pane.types.js';
	let {
	split = undefined,
	minSize = undefined,
	maxSize = undefined,
	defaultSize = undefined,
	size = undefined,
	allowResize = undefined,
	resizerStyle = undefined,
	paneStyle = undefined,
	pane1Style = undefined,
	pane2Style = undefined,
	primary = undefined,
	step = undefined,
	cx = undefined,
	onchange = undefined,
	ondragstarted = undefined,
	ondragfinished = undefined,
	pane1 = undefined,
	pane2 = undefined
} = $props();
</script>
