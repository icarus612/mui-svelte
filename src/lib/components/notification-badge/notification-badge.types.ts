export type NotificationBadgeProps = {
	count?: number;
	dot?: boolean;
	showZero?: boolean;
	max?: number;
	color?: string;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
	offset?: [number, number];
	animated?: boolean;
	pulse?: boolean;
	shake?: boolean;
	class?: string;
};
