import type { Snippet } from 'svelte';

export type BadgeVariant = 'outline' | 'dash' | 'soft' | 'ghost';
export type BadgeColor =
	| 'neutral'
	| 'primary'
	| 'secondary'
	| 'accent'
	| 'info'
	| 'success'
	| 'warning'
	| 'error';
export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BadgeProps = {
	variant?: BadgeVariant;
	color?: BadgeColor;
	size?: BadgeSize;
	class?: string;
	children: Snippet;
};
