export type SearchInputProps = {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	clearable?: boolean;
	loading?: boolean;
	suggestions?: string[];
	debounceTime?: number;
	size?: 'small' | 'medium' | 'large';
	variant?: 'outlined' | 'filled' | 'standard';
	fullWidth?: boolean;
	autoFocus?: boolean;
	class?: string;
};
