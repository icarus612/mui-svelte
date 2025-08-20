import type { Snippet } from '$lib/internal/types.js';
export type AlertProps = {
	closeText?: string;
	color?: 'error' | 'info' | 'success' | 'warning';
	role?: string;
	severity?: 'error' | 'info' | 'success' | 'warning';
	variant?: 'filled' | 'outlined' | 'standard';
	cx?: object;
	onclose?: () => void;
	children?: Snippet;
	action?: Snippet;
	icon?: Snippet;
};
