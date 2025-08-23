<<<<<<< HEAD
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';
>>>>>>> main
export type PaginationProps = {
	boundaryCount?: number;
	color?: 'primary' | 'secondary' | 'standard';
	count?: number;
	defaultPage?: number;
	disabled?: boolean;
	getItemAriaLabel?: (type: string, page: number, selected: boolean) => string;
	hideNextButton?: boolean;
	hidePrevButton?: boolean;
<<<<<<< HEAD
	page?: number;
=======
	page?: $bindable<number>;
>>>>>>> main
	shape?: 'circular' | 'rounded';
	showFirstButton?: boolean;
	showLastButton?: boolean;
	siblingCount?: number;
	size?: 'small' | 'medium' | 'large';
	variant?: 'outlined' | 'text';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (page: number) => void;
	item?: Snippet<[{ page: number; type: string; selected: boolean }]>;
>>>>>>> main
};
