<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';
>>>>>>> main
export type LoadingButtonProps = {
	loading?: boolean;
	loadingPosition?: 'start' | 'end' | 'center';
	disabled?: boolean;
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	href?: string;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclick?: (event: MouseEvent) => void;
	children?: Snippet;
	loadingIndicator?: Snippet;
	startIcon?: Snippet;
	endIcon?: Snippet;
>>>>>>> main
};
