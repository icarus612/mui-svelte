<script lang="ts">
	import type { CarouselProps } from './carousel.types';

	let { snap, vertical, class: cx, children }: CarouselProps = $props();

	const carouselClass = $derived(
		['carousel', snap ? `carousel-${snap}` : '', vertical ? 'carousel-vertical' : '', cx]
			.join(' ')
			.trim()
	);
</script>

<div class={carouselClass}>
	{@render children()}
</div>
