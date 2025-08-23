<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';

>>>>>>> main
export type ChipProps = {
	clickable?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	disabled?: boolean;
	label?: string;
	size?: 'small' | 'medium';
	skipFocusWhenDisabled?: boolean;
	variant?: 'filled' | 'outlined';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	ondelete?: (event: MouseEvent) => void;
	onclick?: (event: MouseEvent) => void;
	avatar?: Snippet;
	icon?: Snippet;
	deleteIcon?: Snippet;
>>>>>>> main
};
