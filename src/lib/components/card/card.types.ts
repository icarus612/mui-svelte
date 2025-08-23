import type { Snippet } from '$lib/internal/types.js';

export type CardProps = {
	bordered?: boolean;
	imageFull?: boolean;
	side?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	class?: string;
	children: Snippet;
};
