export type PopperProps = {
	open: boolean;
	anchorEl?: HTMLElement | null;
	direction?: 'ltr' | 'rtl';
	disablePortal?: boolean;
	keepMounted?: boolean;
	modifiers?: object[];
	placement?:
		| 'auto-end'
		| 'auto-start'
		| 'auto'
		| 'bottom-end'
		| 'bottom-start'
		| 'bottom'
		| 'left-end'
		| 'left-start'
		| 'left'
		| 'right-end'
		| 'right-start'
		| 'right'
		| 'top-end'
		| 'top-start'
		| 'top';
	popperOptions?: object;
	transition?: boolean;
	class?: string;
};
