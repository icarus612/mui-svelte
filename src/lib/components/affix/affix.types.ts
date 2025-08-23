<<<<<<< HEAD
=======
import type { Snippet } from '$lib/internal/types.js';
>>>>>>> main
export type AffixProps = {
	offsetTop?: number;
	offsetBottom?: number;
	position?: 'top' | 'bottom';
	target?: () => Window | HTMLElement;
	zIndex?: number;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (affixed: boolean) => void;
	onpin?: () => void;
	onunpin?: () => void;
	children?: Snippet;
>>>>>>> main
};
