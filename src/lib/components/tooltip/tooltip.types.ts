<<<<<<< HEAD
export type TooltipProps = {
	title: string;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type TooltipProps = {
	title?: string;
>>>>>>> main
	arrow?: boolean;
	describeChild?: boolean;
	disableFocusListener?: boolean;
	disableHoverListener?: boolean;
	disableInteractive?: boolean;
	disableTouchListener?: boolean;
	enterDelay?: number;
	enterNextDelay?: number;
	enterTouchDelay?: number;
	followCursor?: boolean;
	id?: string;
	leaveDelay?: number;
	leaveTouchDelay?: number;
<<<<<<< HEAD
	open?: boolean;
=======
	open?: $bindable<boolean>;
>>>>>>> main
	placement?:
		| 'bottom-end'
		| 'bottom-start'
		| 'bottom'
		| 'left-end'
		| 'left-start'
		| 'left'
		| 'right-end'
		| 'right-start'
		| 'right'
		| 'top-end'
		| 'top-start'
		| 'top';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onopen?: () => void;
	onclose?: () => void;
	children?: Snippet;
>>>>>>> main
};
