export type GaugeSegment = {
	value: number;
	color: string;
	label?: string;
};

export type GaugeProps = {
	value: number;
	min?: number;
	max?: number;
	label?: string;
	labelColor?: string;
	segments?: GaugeSegment[];
	showValue?: boolean;
	showMinMax?: boolean;
	showTicks?: boolean;
	tickInterval?: number;
	format?: (value: number) => string;
	thickness?: number;
	size?: number | string;
	startAngle?: number;
	endAngle?: number;
	animated?: boolean;
	animationDuration?: number;
	animationEasing?: string;
	variant?: 'arc' | 'circle' | 'linear';
	class?: string;
};
