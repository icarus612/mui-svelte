export type ChipProps = {
	clickable?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	disabled?: boolean;
	label?: string;
	size?: 'small' | 'medium';
	skipFocusWhenDisabled?: boolean;
	variant?: 'filled' | 'outlined';
	class?: string;
};
