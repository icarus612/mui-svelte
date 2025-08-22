export type ToggleButtonProps = {
	value?: any;
	selected?: boolean;
	color?: 'standard' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	disabled?: boolean;
	disableFocusRipple?: boolean;
	disableRipple?: boolean;
	fullWidth?: boolean;
	size?: 'small' | 'medium' | 'large';
	class?: string;
};
