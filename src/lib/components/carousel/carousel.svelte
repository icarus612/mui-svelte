<script lang="ts">
	import type { CarouselProps } from './carousel.types.js';

	let {
	activeIndex = undefined,
	autoPlay = undefined,
	autoPlayInterval = undefined,
	pauseOnHover = undefined,
	infiniteLoop = undefined,
	showArrows = undefined,
	showStatus = undefined,
	showIndicators = undefined,
	showThumbs = undefined,
	thumbWidth = undefined,
	selectedItem = undefined,
	swipeable = undefined,
	transitionTime = undefined,
	swipeScrollTolerance = undefined,
	width = undefined,
	height = undefined,
	centerMode = undefined,
	centerSlidePercentage = undefined,
	cx = undefined,
	onactiveindexchange = undefined,
	onclickitem = undefined,
	onclickthumb = undefined,
	onchange = undefined,
	onswipestart = undefined,
	onswipeend = undefined,
	onswipemove = undefined,
	children: childrenSnippet = undefined,
	arrowPrev = undefined,
	arrowNext = undefined,
	indicator = undefined,
	item = undefined,
	thumb = undefined
} = $props();
</script>
