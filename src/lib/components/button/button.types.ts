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
	children: any;
	onclick?: (event: MouseEvent) => void;
};
