import type { Snippet, $bindable } from '$lib/internal/types.js';

export type CheckboxProps = {
	checked?: $bindable<boolean>;
	defaultChecked?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	size?: 'small' | 'medium' | 'large';
	required?: boolean;
	value?: any;
	id?: string;
	name?: string;
	disableRipple?: boolean;
	cx?: object;
	onchange?: (checked: boolean) => void;
	icon?: Snippet;
	checkedIcon?: Snippet;
	indeterminateIcon?: Snippet;
};
