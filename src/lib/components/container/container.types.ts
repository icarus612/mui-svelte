import type { Snippet } from '$lib/internal/types.js';
export type ContainerProps = {
	disableGutters?: boolean;
	fixed?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
	cx?: object;
	children?: Snippet;
};
