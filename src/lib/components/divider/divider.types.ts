import type { Snippet } from '$lib/internal/types.js';

export type DividerProps = {
	color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error';
	orientation?: 'horizontal' | 'vertical';
	position?: 'start' | 'end';
	class?: string;
	children?: Snippet;
};
