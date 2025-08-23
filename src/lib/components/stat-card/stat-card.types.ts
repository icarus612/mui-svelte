export type StatCardProps = {
	title?: string;
	value?: string | number;
	change?: number;
	changeLabel?: string;
	changeType?: 'increase' | 'decrease' | 'neutral';
	color?: string;
	loading?: boolean;
	format?: (value: any) => string;
	trend?: number[];
	trendLabel?: string;
	class?: string;
};
