import type { Snippet } from '$lib/internal/types.js';

export type DividerProps = {
	absolute?: boolean;
	flexItem?: boolean;
	light?: boolean;
	orientation?: 'horizontal' | 'vertical';
	textAlign?: 'center' | 'left' | 'right';
	variant?: 'fullWidth' | 'inset' | 'middle';
	cx?: object;
	children?: Snippet;
};
