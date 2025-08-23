import type { Snippet } from '$lib/internal/types.js';

export type ChipProps = {
	clickable?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
	disabled?: boolean;
	label?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	variant?: 'filled' | 'outlined' | 'ghost' | 'soft' | 'dash';
	class?: string;
	ondelete?: (event: MouseEvent) => void;
	onclick?: (event: MouseEvent) => void;
	avatar?: Snippet;
	icon?: Snippet;
	deleteIcon?: Snippet;
};
