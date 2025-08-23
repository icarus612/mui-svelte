export type PopoverOrigin = {
	horizontal: number | 'center' | 'left' | 'right';
	vertical: number | 'bottom' | 'center' | 'top';
};

export type PopoverProps = {
	anchorEl?: HTMLElement | null;
	anchorOrigin?: PopoverOrigin;
	anchorPosition?: { left: number; top: number };
	anchorReference?: 'anchorEl' | 'anchorPosition' | 'none';
	disableRestoreFocus?: boolean;
	elevation?: number;
	marginThreshold?: number;
	modal?: boolean;
	open?: boolean;
	transformOrigin?: PopoverOrigin;
	transitionDuration?: number | object | 'auto';
	class?: string;
};
