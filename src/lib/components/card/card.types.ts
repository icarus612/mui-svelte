import type { Snippet } from 'svelte';

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardProps = {
	bordered?: boolean;
	dashed?: boolean;
	imageFull?: boolean;
	side?: boolean;
	size?: CardSize;
	class?: string;
	children: Snippet | string;
	figure?: Snippet | string;
	title?: Snippet | string;
	actions?: Snippet | string;
};
