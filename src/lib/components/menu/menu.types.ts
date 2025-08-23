export type MenuProps = {
	anchorEl?: HTMLElement | null;
	disableAutoFocusItem?: boolean;
	open?: boolean;
	transitionDuration?: 'auto' | number | object;
	variant?: 'menu' | 'selectedMenu';
	class?: string;
};
