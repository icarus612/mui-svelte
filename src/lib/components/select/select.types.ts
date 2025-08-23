<<<<<<< HEAD
export type SelectProps<T = any> = {
	value?: T | T[];
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type SelectProps<T> = {
	value?: $bindable<T | T[]>;
>>>>>>> main
	multiple?: boolean;
	displayEmpty?: boolean;
	defaultValue?: T | T[];
	defaultOpen?: boolean;
	autoWidth?: boolean;
	id?: string;
	label?: string;
	native?: boolean;
<<<<<<< HEAD
	open?: boolean;
=======
	open?: $bindable<boolean>;
>>>>>>> main
	variant?: 'filled' | 'outlined' | 'standard';
	error?: boolean;
	helperText?: string;
	required?: boolean;
	disabled?: boolean;
	fullWidth?: boolean;
	margin?: 'dense' | 'none' | 'normal';
	size?: 'small' | 'medium';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: T | T[]) => void;
	onopen?: () => void;
	onclose?: () => void;
	children?: Snippet;
	icon?: Snippet;
>>>>>>> main
};
