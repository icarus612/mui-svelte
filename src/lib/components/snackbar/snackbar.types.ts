import type { Snippet, $bindable } from '$lib/internal/types.js';
export type SnackbarProps = {
	anchorOrigin?: { horizontal: 'center' | 'left' | 'right'; vertical: 'bottom' | 'top' };
	autoHideDuration?: number;
	disableWindowBlurListener?: boolean;
	key?: any;
	message?: string;
	open?: $bindable<boolean>;
	resumeHideDuration?: number;
	transitionDuration?: number | object;
	cx?: object;
	onclose?: (reason: string) => void;
	children?: Snippet;
	action?: Snippet;
};
