import type { Snippet } from '$lib/internal/types.js';

export type AvatarVariant = 'circular' | 'rounded' | 'square';

export type AvatarProps = {
	alt?: string;
	sizes?: string;
	src?: string;
	srcSet?: string;
	variant?: AvatarVariant;
	class?: string;
	children?: Snippet | string;
};
