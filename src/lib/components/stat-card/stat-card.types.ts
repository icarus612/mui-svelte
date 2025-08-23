<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';

>>>>>>> main
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
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onclick?: (event: MouseEvent) => void;
	prefix?: Snippet;
	suffix?: Snippet;
	icon?: Snippet;
	footer?: Snippet;
>>>>>>> main
};
