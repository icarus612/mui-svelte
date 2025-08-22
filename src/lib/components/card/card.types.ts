import type { Snippet } from '$lib/internal/types.js';
export type CardProps = {
	raised?: boolean;
	variant?: 'elevation' | 'outlined';
	cx?: object;
	children?: Snippet;
};
