<<<<<<< HEAD
export type ColorPickerProps = {
	value?: string | { r: number; g: number; b: number; a?: number };
=======
import type { $bindable } from '$lib/internal/types.js';

export type ColorPickerProps = {
	value?: $bindable<string | { r: number; g: number; b: number; a?: number }>;
>>>>>>> main
	defaultValue?: string;
	format?: 'hex' | 'rgb' | 'hsl' | 'hsv';
	disabled?: boolean;
	showAlpha?: boolean;
	showPreview?: boolean;
	presets?: string[];
	placement?: 'top' | 'bottom' | 'left' | 'right';
	showInput?: boolean;
	showPalette?: boolean;
	paletteColors?: string[][];
	width?: number | string;
<<<<<<< HEAD
	class?: string;
=======
	cx?: object;
	onchange?: (color: string | object) => void;
	onopen?: () => void;
	onclose?: () => void;
>>>>>>> main
};
