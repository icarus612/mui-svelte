export type GridProps = {
	columns?: number | object;
	columnSpacing?: number | string | any[] | object;
	container?: boolean;
	direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
	item?: boolean;
	lg?: 'auto' | number | boolean;
	md?: 'auto' | number | boolean;
	rowSpacing?: number | string | any[] | object;
	size?: number;
	sm?: 'auto' | number | boolean;
	spacing?: number | string | any[] | object;
	wrap?: 'nowrap' | 'wrap-reverse' | 'wrap';
	xl?: 'auto' | number | boolean;
	xs?: 'auto' | number | boolean;
	zeroMinWidth?: boolean;
	class?: string;
};
