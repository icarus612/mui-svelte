export type FileUploadProps = {
	accept?: object | string;
	disabled?: boolean;
	maxSize?: number;
	minSize?: number;
	multiple?: boolean;
	maxFiles?: number;
	validator?: (file: File) => string | string[] | null;
	noDrag?: boolean;
	noDragEventsBubbling?: boolean;
	noClick?: boolean;
	noKeyboard?: boolean;
	preventDropOnDocument?: boolean;
	class?: string;
};
