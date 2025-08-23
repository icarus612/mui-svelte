import type { Snippet } from 'svelte';

export type CarouselSnap = 'start' | 'center' | 'end';

export type CarouselProps = {
	snap?: CarouselSnap;
	vertical?: boolean;
	class?: string;
	children: Snippet;
};
