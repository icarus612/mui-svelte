import type { Snippet } from 'svelte';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export type ButtonProps = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	outline?: boolean;
	wide?: boolean;
	glass?: boolean;
	class?: string;
	children: Snippet | string;
	onclick?: (event: MouseEvent) => void;
};

export type ButtonTestProps = {
	text?: string;
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	outline?: boolean;
	wide?: boolean;
	glass?: boolean;
	class?: string;
	onclick?: (event: MouseEvent) => void;
};
