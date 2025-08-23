export type OtpInputProps = {
	value?: string;
	length: number;
	disabled?: boolean;
	autoFocus?: boolean;
	type?: 'text' | 'number' | 'password';
	inputMode?: 'text' | 'numeric';
	pattern?: RegExp;
	placeholder?: string;
	error?: boolean;
	helperText?: string;
	class?: string;
};
