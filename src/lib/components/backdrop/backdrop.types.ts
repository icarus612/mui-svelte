import type { Snippet } from '$lib/internal/types.js';
export type BackdropProps = {
	open?: boolean;
	invisible?: boolean;
	transitionDuration?: number | object;
	cx?: object;
	onclick?: (event: MouseEvent) => void;
	children?: Snippet;
};
