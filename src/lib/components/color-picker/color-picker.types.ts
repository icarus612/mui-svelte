import type { $bindable } from '$lib/internal/types.js';

export type ColorPickerProps = {
	value?: $bindable<string | { r: number; g: number; b: number; a?: number }>;
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
	cx?: object;
	onchange?: (color: string | object) => void;
	onopen?: () => void;
	onclose?: () => void;
};
