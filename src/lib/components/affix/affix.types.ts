import type { Snippet } from '$lib/internal/types.js';
export type AffixProps = {
	offsetTop?: number;
	offsetBottom?: number;
	position?: 'top' | 'bottom';
	target?: () => Window | HTMLElement;
	zIndex?: number;
	cx?: object;
	onchange?: (affixed: boolean) => void;
	onpin?: () => void;
	onunpin?: () => void;
	children?: Snippet;
};
