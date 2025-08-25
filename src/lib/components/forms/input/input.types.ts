export type InputVariant = 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type InputSize = 'lg' | 'md' | 'sm' | 'xs';

export type InputProps = {
	variant?: InputVariant;
	size?: InputSize;
	disabled?: boolean;
	placeholder?: string;
	value?: string;
	bordered?: boolean;
	ghost?: boolean;
	class?: string;
	oninput?: (event: Event) => void;
};
