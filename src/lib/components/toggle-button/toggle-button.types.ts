import type { Snippet, $bindable } from '$lib/internal/types.js';

export type ToggleButtonProps = {
	value?: any;
	selected?: $bindable<boolean>;
	color?: 'standard' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	disabled?: boolean;
	disableFocusRipple?: boolean;
	disableRipple?: boolean;
	fullWidth?: boolean;
	size?: 'small' | 'medium' | 'large';
	cx?: object;
	onchange?: (value: any) => void;
	children?: Snippet;
};
