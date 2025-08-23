export type ContextMenuItem = {
	label: string;
	disabled?: boolean;
	divider?: boolean;
	submenu?: ContextMenuItem[];
	shortcut?: string;
};

export type ContextMenuProps = {
	items?: ContextMenuItem[];
	anchorPoint?: { x: number; y: number };
	anchorEl?: HTMLElement;
	keepMounted?: boolean;
	transitionDuration?: number | 'auto';
	class?: string;
};
