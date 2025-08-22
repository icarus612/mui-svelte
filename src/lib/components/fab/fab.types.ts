import type { Snippet } from '$lib/internal/types.js';

export type FabProps = {
	color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	size?: 'small' | 'medium' | 'large';
	variant?: 'circular' | 'extended';
	disabled?: boolean;
	disableFocusRipple?: boolean;
	disableRipple?: boolean;
	href?: string;
	cx?: object;
	onclick?: (event: MouseEvent) => void;
	children?: Snippet;
	icon?: Snippet;
};
