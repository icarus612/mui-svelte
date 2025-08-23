<<<<<<< HEAD
export type ToggleButtonProps = {
	value?: any;
	selected?: boolean;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type ToggleButtonProps = {
	value?: any;
	selected?: $bindable<boolean>;
>>>>>>> main
	color?: 'standard' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	disabled?: boolean;
	disableFocusRipple?: boolean;
	disableRipple?: boolean;
	fullWidth?: boolean;
	size?: 'small' | 'medium' | 'large';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: any) => void;
	children?: Snippet;
>>>>>>> main
};
