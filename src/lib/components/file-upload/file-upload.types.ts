import type { Snippet } from '$lib/internal/types.js';

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
	cx?: object;
	ondrop?: (acceptedFiles: File[], rejectedFiles: File[]) => void;
	ondragenter?: (event: DragEvent) => void;
	ondragleave?: (event: DragEvent) => void;
	ondragover?: (event: DragEvent) => void;
	ondropaccepted?: (files: File[]) => void;
	ondroprejected?: (fileRejections: Array<any>) => void;
	onfiledialogcancel?: () => void;
	onfiledialogopen?: () => void;
	children?: Snippet<[{ isDragActive: boolean; isDragAccept: boolean; isDragReject: boolean }]>;
};
