import type { Snippet, $bindable } from '$lib/internal/types.js';
export type DrawerProps = {
	anchor?: 'bottom' | 'left' | 'right' | 'top';
	elevation?: number;
	hideBackdrop?: boolean;
	open?: $bindable<boolean>;
	transitionDuration?: number | object;
	variant?: 'permanent' | 'persistent' | 'temporary';
	cx?: object;
	onclose?: () => void;
	children?: Snippet;
};
