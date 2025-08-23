<<<<<<< HEAD
export type AutocompleteProps<T = any> = {
	options: T[];
	value?: T | T[] | null;
	inputValue?: string;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type AutocompleteProps<T> = {
	options: Array<T>;
	value: $bindable<T | T[] | null>;
	inputValue: $bindable<string>;
>>>>>>> main
	multiple?: boolean;
	freeSolo?: boolean;
	disableClearable?: boolean;
	clearOnBlur?: boolean;
	clearOnEscape?: boolean;
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;
	noOptionsText?: string;
<<<<<<< HEAD
	open?: boolean;
=======
	open?: $bindable<boolean>;
>>>>>>> main
	autoComplete?: boolean;
	autoHighlight?: boolean;
	autoSelect?: boolean;
	blurOnSelect?: boolean | 'touch' | 'mouse';
<<<<<<< HEAD
	clearIcon?: string; // slot name
=======
>>>>>>> main
	clearText?: string;
	closeText?: string;
	defaultValue?: T | T[];
	disableCloseOnSelect?: boolean;
	disableListWrap?: boolean;
	disablePortal?: boolean;
	filterSelectedOptions?: boolean;
	forcePopupIcon?: boolean | 'auto';
	fullWidth?: boolean;
	getOptionDisabled?: (option: T) => boolean;
	getOptionLabel?: (option: T) => string;
	groupBy?: (option: T) => string;
	handleHomeEndKeys?: boolean;
	id?: string;
	includeInputInList?: boolean;
	inputMode?: string;
	isOptionEqualToValue?: (option: T, value: T) => boolean;
	limitTags?: number;
	openOnFocus?: boolean;
	openText?: string;
<<<<<<< HEAD
	popupIcon?: string; // slot name
	readOnly?: boolean;
	selectOnFocus?: boolean;
	size?: 'small' | 'medium';
	class?: string;
=======
	readOnly?: boolean;
	selectOnFocus?: boolean;
	size?: 'small' | 'medium';
	cx?: object;
	onchange?: (value: T | T[], reason: string) => void;
	oninputchange?: (value: string, reason: string) => void;
	onopen?: () => void;
	onclose?: (reason: string) => void;
	children?: Snippet;
	option?: Snippet<[T]>;
	tag?: Snippet<[T]>;
	loadingSnippet?: Snippet;
	noOptions?: Snippet;
	popupIcon?: Snippet;
	clearIcon?: Snippet;
>>>>>>> main
};
