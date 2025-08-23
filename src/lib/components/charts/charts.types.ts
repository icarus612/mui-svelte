export type ChartOptions = {
	title?: string | object;
	subtitle?: string | object;
	xAxis?: object;
	yAxis?: object;
	legend?: object;
	tooltip?: object;
	colors?: string[];
	theme?: object;
	animations?: object;
	responsive?: boolean;
	maintainAspectRatio?: boolean;
};

export type ChartsProps = {
	data: any[] | object;
	type: 'line' | 'bar' | 'pie' | 'donut' | 'area' | 'scatter' | 'bubble' | 'radar' | 'polar';
	options?: ChartOptions;
	width?: number | string;
	height?: number | string;
	plugins?: object[];
	redraw?: boolean;
	updateMode?: 'resize' | 'reset' | 'none' | 'hide' | 'show' | 'normal' | 'active';
	class?: string;
};
