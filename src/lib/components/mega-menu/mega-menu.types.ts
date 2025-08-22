import type { Snippet, $bindable } from '$lib/internal/types.js';
export type MegaMenuProps = {
	items?: Array<{ title: string; columns: Array<{ title?: string; items: Array<{ label: string; href?: string; description?: string; }>; }>; }>;
	trigger?: 'hover' | 'click';
	open?: $bindable<boolean>;
	fullWidth?: boolean;
	elevation?: number;
	transitionDuration?: number;
	cx?: object;
	onopen?: () => void;
	onclose?: () => void;
	onitemclick?: (item: object) => void;
	icon?: Snippet<[object]>;
};
