export type ProgressProps = {
	color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	disableShrink?: boolean; // Circular only
	size?: number | string; // Circular only
	thickness?: number; // Circular only
	value?: number;
	variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query'; // buffer and query for Linear only
	valueBuffer?: number; // Linear only
	class?: string;
};
