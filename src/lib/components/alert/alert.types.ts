import type { Snippet } from '$lib/internal/types.js';

export type AlertColor = 'error' | 'info' | 'success' | 'warning';
export type AlertVariant = 'filled' | 'outlined' | 'standard' | 'soft' | 'dash';

export type AlertProps = {
	closeText?: string;
	color?: AlertColor;
	role?: string;
	severity?: AlertColor;
	variant?: AlertVariant;
	class?: string;
	onclose?: () => void;
	children?: Snippet | string;
	action?: Snippet | string;
	icon?: Snippet | string;
};
