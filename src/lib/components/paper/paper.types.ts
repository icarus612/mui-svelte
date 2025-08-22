import type { Snippet } from '$lib/internal/types.js';
export type PaperProps = {
	elevation?: number;
	square?: boolean;
	variant?: 'elevation' | 'outlined';
	cx?: object;
	children?: Snippet;
};
