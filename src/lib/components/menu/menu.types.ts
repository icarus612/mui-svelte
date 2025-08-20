import type { Snippet, $bindable } from '$lib/internal/types.js';
export type MenuProps = {
	anchorEl?: HTMLElement | null;
	disableAutoFocusItem?: boolean;
	open?: $bindable<boolean>;
	transitionDuration?: 'auto' | number | object;
	variant?: 'menu' | 'selectedMenu';
	cx?: object;
	onclose?: (reason: string) => void;
	children?: Snippet;
};
