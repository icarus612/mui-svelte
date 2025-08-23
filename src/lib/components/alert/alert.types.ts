<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';
>>>>>>> main
export type AlertProps = {
	closeText?: string;
	color?: 'error' | 'info' | 'success' | 'warning';
	role?: string;
	severity?: 'error' | 'info' | 'success' | 'warning';
	variant?: 'filled' | 'outlined' | 'standard';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclose?: () => void;
	children?: Snippet;
	action?: Snippet;
	icon?: Snippet;
>>>>>>> main
};
