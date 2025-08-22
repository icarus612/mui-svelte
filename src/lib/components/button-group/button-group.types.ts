export type ButtonGroupProps = {
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	disabled?: boolean;
	disableElevation?: boolean;
	disableFocusRipple?: boolean;
	disableRipple?: boolean;
	fullWidth?: boolean;
	orientation?: 'horizontal' | 'vertical';
	size?: 'small' | 'medium' | 'large';
	variant?: 'contained' | 'outlined' | 'text';
	'aria-label'?: string;
	class?: string;
};
