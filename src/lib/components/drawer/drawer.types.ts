export type DrawerProps = {
	anchor?: 'bottom' | 'left' | 'right' | 'top';
	elevation?: number;
	hideBackdrop?: boolean;
	open?: boolean;
	transitionDuration?: number | object;
	variant?: 'permanent' | 'persistent' | 'temporary';
	class?: string;
};
