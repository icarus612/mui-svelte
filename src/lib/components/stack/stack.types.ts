<<<<<<< HEAD
export type StackProps = {
	direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
	spacing?: number | string | any[] | object;
	useFlexGap?: boolean;
	class?: string;
=======
import type { Snippet } from '$lib/internal/types.js';
export type StackProps = {
	direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
	spacing?: number | string | object;
	useFlexGap?: boolean;
	cx?: object;
	children?: Snippet;
	divider?: Snippet;
>>>>>>> main
};
