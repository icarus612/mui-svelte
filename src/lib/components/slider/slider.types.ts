<<<<<<< HEAD
export type SliderProps = {
	value?: number | number[];
=======
import type { Snippet, $bindable } from '$lib/internal/types.js';

export type SliderProps = {
	value?: $bindable<number | number[]>;
>>>>>>> main
	defaultValue?: number | number[];
	disabled?: boolean;
	disableSwap?: boolean;
	getAriaLabel?: (index: number) => string;
	getAriaValueText?: (value: number, index: number) => string;
	marks?: boolean | Array<{ value: number; label?: string }>;
	max?: number;
	min?: number;
	name?: string;
	orientation?: 'horizontal' | 'vertical';
	scale?: (value: number) => number;
	size?: 'small' | 'medium';
	step?: number | null;
	tabIndex?: number;
	track?: 'normal' | false | 'inverted';
	valueLabelDisplay?: 'on' | 'auto' | 'off';
	valueLabelFormat?: string | ((value: number, index: number) => string);
	color?: 'primary' | 'secondary';
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (value: number | number[], activeThumb: number) => void;
	onchangecommitted?: (value: number | number[]) => void;
	thumb?: Snippet;
	trackSnippet?: Snippet;
	rail?: Snippet;
	mark?: Snippet;
	markLabel?: Snippet;
	valueLabel?: Snippet;
>>>>>>> main
};
