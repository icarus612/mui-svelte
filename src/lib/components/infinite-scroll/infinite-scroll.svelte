<script lang="ts">
<<<<<<< HEAD
import type { InfiniteScrollProps } from './infinite-scroll.types';

let { ...props }: InfiniteScrollProps = $props();
=======
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
>>>>>>> main
</script>
