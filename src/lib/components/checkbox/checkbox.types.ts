import type { Snippet, $bindable } from '$lib/internal/types.js';

export type CheckboxProps = {
	checked?: $bindable<boolean>;
	defaultChecked?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	required?: boolean;
	value?: any;
	id?: string;
	name?: string;
	class?: string;
	onchange?: (checked: boolean) => void;
};
