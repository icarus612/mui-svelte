import type { Snippet, $bindable } from '$lib/internal/types.js';
export type SpeedDialProps = {
	ariaLabel?: string;
	direction?: 'down' | 'left' | 'right' | 'up';
	hidden?: boolean;
	open?: $bindable<boolean>;
	transitionDuration?: number | object;
	cx?: object;
	onopen?: (reason: string) => void;
	onclose?: (reason: string) => void;
	children?: Snippet;
	icon?: Snippet;
	openIcon?: Snippet;
};
