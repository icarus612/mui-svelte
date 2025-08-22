import type { Snippet, $bindable } from '$lib/internal/types.js';

export type SwitchProps = {
	checked?: $bindable<boolean>;
	defaultChecked?: boolean;
	disabled?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	edge?: 'start' | 'end' | false;
	size?: 'small' | 'medium';
	id?: string;
	required?: boolean;
	value?: any;
	disableRipple?: boolean;
	cx?: object;
	onchange?: (checked: boolean) => void;
	checkedIcon?: Snippet;
	icon?: Snippet;
};
