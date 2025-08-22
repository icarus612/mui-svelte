import type { Snippet, $bindable } from '$lib/internal/types.js';

export type RatingProps = {
	value?: $bindable<number>;
	defaultValue?: number;
	disabled?: boolean;
	emptyLabelText?: string;
	getLabelText?: (value: number) => string;
	highlightSelectedOnly?: boolean;
	max?: number;
	name?: string;
	precision?: number;
	readOnly?: boolean;
	size?: 'small' | 'medium' | 'large';
	cx?: object;
	onchange?: (value: number) => void;
	onchangeactive?: (value: number) => void;
	icon?: Snippet;
	emptyIcon?: Snippet;
};
