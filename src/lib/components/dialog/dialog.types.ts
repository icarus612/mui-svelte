import type { Snippet, $bindable } from '$lib/internal/types.js';

export type DialogProps = {
	open?: $bindable<boolean>;
	'aria-describedby'?: string;
	'aria-labelledby'?: string;
	disableEscapeKeyDown?: boolean;
	class?: string;
	onclose?: (event: Event) => void;
	oncancel?: (event: Event) => void;
	onbackdropclick?: (event: MouseEvent) => void;
	children?: Snippet | string;
};
