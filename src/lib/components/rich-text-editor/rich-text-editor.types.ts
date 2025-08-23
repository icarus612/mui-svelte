<<<<<<< HEAD
export type RichTextEditorProps = {
	value?: string;
=======
import type { $bindable } from '$lib/internal/types.js';

export type RichTextEditorProps = {
	value?: $bindable<string>;
>>>>>>> main
	defaultValue?: string;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	toolbar?: string[] | boolean | object;
	formats?: string[];
	modules?: object;
	theme?: string;
	bounds?: string | HTMLElement;
	scrollingContainer?: string | HTMLElement;
	preserveWhitespace?: boolean;
	height?: string | number;
	minHeight?: string | number;
	maxHeight?: string | number;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: string) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
	onkeydown?: (event: KeyboardEvent) => void;
	onkeyup?: (event: KeyboardEvent) => void;
>>>>>>> main
};
