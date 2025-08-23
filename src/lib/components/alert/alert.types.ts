import type { Snippet } from 'svelte';

export type AlertVariant = 'outline' | 'dash' | 'soft';
export type AlertColor = 'info' | 'success' | 'warning' | 'error';
export type AlertDirection = 'vertical' | 'horizontal';

export type AlertProps = {
	variant?: AlertVariant;
	color?: AlertColor;
	direction?: AlertDirection;
	class?: string;
	children: Snippet | string;
	icon?: string;
};
