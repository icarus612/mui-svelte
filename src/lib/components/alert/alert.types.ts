export type AlertProps = {
	closeText?: string;
	color?: 'error' | 'info' | 'success' | 'warning';
	role?: string;
	severity?: 'error' | 'info' | 'success' | 'warning';
	variant?: 'filled' | 'outlined' | 'standard';
	class?: string;
};
