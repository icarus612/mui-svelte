import type { Snippet } from '$lib/internal/types.js';

export type ButtonGroupProps = {
	orientation?: 'horizontal' | 'vertical';
	class?: string;
	children?: Snippet | string;
};
