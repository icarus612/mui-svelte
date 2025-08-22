export type CheckboxProps = {
	checked?: boolean;
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
	class?: string;
};
