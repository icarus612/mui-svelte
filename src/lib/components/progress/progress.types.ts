export type ProgressProps = {
	color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	disableShrink?: boolean;
	size?: number | string;
	thickness?: number;
	value?: number;
	variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
	valueBuffer?: number;
	cx?: object;
};
