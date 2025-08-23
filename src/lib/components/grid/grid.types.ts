<<<<<<< HEAD
export type GridProps = {
	columns?: number | object;
	columnSpacing?: number | string | any[] | object;
=======
import type { Snippet } from '$lib/internal/types.js';
export type GridProps = {
	columns?: number | object;
	columnSpacing?: number | string | object;
>>>>>>> main
	container?: boolean;
	direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
	item?: boolean;
	lg?: 'auto' | number | boolean;
	md?: 'auto' | number | boolean;
<<<<<<< HEAD
	rowSpacing?: number | string | any[] | object;
	size?: number;
	sm?: 'auto' | number | boolean;
	spacing?: number | string | any[] | object;
=======
	rowSpacing?: number | string | object;
	size?: number;
	sm?: 'auto' | number | boolean;
	spacing?: number | string | object;
>>>>>>> main
	wrap?: 'nowrap' | 'wrap-reverse' | 'wrap';
	xl?: 'auto' | number | boolean;
	xs?: 'auto' | number | boolean;
	zeroMinWidth?: boolean;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	children?: Snippet;
>>>>>>> main
};
