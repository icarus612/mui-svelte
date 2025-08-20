<script lang="ts">
	import type { InfiniteScrollProps } from './infinite-scroll.types.js';

	let {
	dataLength = undefined,
	hasMore = undefined,
	endMessage = undefined,
	scrollThreshold = undefined,
	inverse = undefined,
	hasChildren = undefined,
	pullDownToRefresh = undefined,
	pullDownToRefreshThreshold = undefined,
	initialScrollY = undefined,
	height = undefined,
	cx = undefined,
	onnext = undefined,
	onscroll = undefined,
	onrefresh = undefined,
	children: childrenSnippet = undefined,
	loader = undefined,
	endMessageSnippet = undefined,
	pullDownContent = undefined,
	releaseContent = undefined
} = $props();
</script>
