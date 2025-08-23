<<<<<<< HEAD
export type OtpInputProps = {
	value?: string;
	length: number;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type OtpInputProps = {
	value?: $bindable<string>;
	length?: number;
>>>>>>> main
	disabled?: boolean;
	autoFocus?: boolean;
	type?: 'text' | 'number' | 'password';
	inputMode?: 'text' | 'numeric';
	pattern?: RegExp;
	placeholder?: string;
	error?: boolean;
	helperText?: string;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: string) => void;
	oncomplete?: (value: string) => void;
	separator?: Snippet;
>>>>>>> main
};
