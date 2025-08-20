import type { Snippet } from '$lib/internal/types.js';
export type ImageListProps = {
	cols?: number;
	gap?: number;
	rowHeight?: number | 'auto';
	variant?: 'masonry' | 'quilted' | 'standard' | 'woven';
	cx?: object;
	children?: Snippet;
};
