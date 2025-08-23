<<<<<<< HEAD
export type CodeEditorProps = {
	value?: string;
=======
import type { $bindable } from '$lib/internal/types.js';

export type CodeEditorProps = {
	value?: $bindable<string>;
>>>>>>> main
	language?: string;
	theme?: string;
	disabled?: boolean;
	readOnly?: boolean;
	lineNumbers?: boolean;
	wordWrap?: boolean;
	fontSize?: number;
	tabSize?: number;
	showGutter?: boolean;
	highlightActiveLine?: boolean;
	showPrintMargin?: boolean;
	autoComplete?: boolean;
	suggestions?: object[];
	markers?: object[];
	annotations?: object[];
	height?: string | number;
	width?: string | number;
	minLines?: number;
	maxLines?: number;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: string) => void;
	onvalidate?: (annotations: Array<any>) => void;
	onselectionchange?: (selection: object) => void;
	oncursorchange?: (selection: object) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
>>>>>>> main
};
