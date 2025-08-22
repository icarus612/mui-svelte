import type { Snippet } from '$lib/internal/types.js';

export type AvatarProps = {
	alt?: string;
	sizes?: string;
	src?: string;
	srcSet?: string;
	variant?: 'circular' | 'rounded' | 'square';
	cx?: object;
	children?: Snippet;
};
