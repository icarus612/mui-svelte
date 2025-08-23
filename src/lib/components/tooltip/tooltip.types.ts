export type TooltipProps = {
	title: string;
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
	open?: boolean;
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
	class?: string;
};
