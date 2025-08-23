export type BadgeProps = {
	badgeContent?: string | number;
	anchorOrigin?: { horizontal: 'left' | 'right'; vertical: 'top' | 'bottom' };
	color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	invisible?: boolean;
	max?: number;
	overlap?: 'circular' | 'rectangular';
	showZero?: boolean;
	variant?: 'dot' | 'standard';
	class?: string;
};
