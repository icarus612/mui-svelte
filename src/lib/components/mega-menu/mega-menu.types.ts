<<<<<<< HEAD
export type MegaMenuItem = {
	label: string;
	href?: string;
	description?: string;
};

export type MegaMenuColumn = {
	title?: string;
	items: MegaMenuItem[];
};

export type MegaMenuCategory = {
	title: string;
	columns: MegaMenuColumn[];
};

export type MegaMenuProps = {
	items?: MegaMenuCategory[];
	trigger?: 'hover' | 'click';
	open?: boolean;
	fullWidth?: boolean;
	elevation?: number;
	transitionDuration?: number;
	class?: string;
=======
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
>>>>>>> main
};
