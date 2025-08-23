<<<<<<< HEAD
export type RatingProps = {
	value?: number;
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type RatingProps = {
	value?: $bindable<number>;
>>>>>>> main
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
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: number) => void;
	onchangeactive?: (value: number) => void;
	icon?: Snippet;
	emptyIcon?: Snippet;
>>>>>>> main
};
