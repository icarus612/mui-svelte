export type LoadingButtonProps = {
	loading?: boolean;
	loadingPosition?: 'start' | 'end' | 'center';
	disabled?: boolean;
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	href?: string;
	class?: string;
};
