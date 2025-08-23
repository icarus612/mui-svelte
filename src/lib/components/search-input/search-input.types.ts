<<<<<<< HEAD
export type SearchInputProps = {
	value?: string;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type SearchInputProps = {
	value?: $bindable<string>;
>>>>>>> main
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
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (event: Event) => void;
	onsearch?: (value: string) => void;
	onclear?: () => void;
	onsuggestionselect?: (suggestion: string) => void;
	searchIcon?: Snippet;
	clearIcon?: Snippet;
>>>>>>> main
};
