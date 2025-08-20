import type { Snippet } from '$lib/internal/types.js';
export type SkeletonProps = {
	animation?: 'pulse' | 'wave' | false;
	height?: number | string;
	variant?: 'circular' | 'rectangular' | 'rounded' | 'text';
	width?: number | string;
	cx?: object;
	children?: Snippet;
};
