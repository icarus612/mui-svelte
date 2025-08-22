import type { Snippet } from '$lib/internal/types.js';

export type TableProps = {
	padding?: 'checkbox' | 'none' | 'normal';
	size?: 'small' | 'medium';
	stickyHeader?: boolean;
	cx?: object;
	children?: Snippet;
};
