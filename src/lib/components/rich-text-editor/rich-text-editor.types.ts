export type RichTextEditorProps = {
	value?: string;
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
	class?: string;
};
