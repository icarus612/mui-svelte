import type { Snippet, $bindable } from '$lib/internal/types.js';

export type NumberInputProps = {
	value?: $bindable<number>;
	defaultValue?: number;
	min?: number;
	max?: number;
	step?: number;
	precision?: number;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	error?: boolean;
	helperText?: string;
	placeholder?: string;
	thousandSeparator?: string | boolean;
	decimalSeparator?: string;
	allowNegative?: boolean;
	allowLeadingZeros?: boolean;
	showControls?: boolean;
	controlsPosition?: 'right' | 'left' | 'split';
	size?: 'small' | 'medium' | 'large';
	variant?: 'outlined' | 'filled' | 'standard';
	fullWidth?: boolean;
	cx?: object;
	onchange?: (value: number) => void;
	prefix?: Snippet;
	suffix?: Snippet;
};
