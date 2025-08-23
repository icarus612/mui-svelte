import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import ColorPicker from './color-picker.svelte';
import type { ColorPickerProps } from './color-picker.types';

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPicker
=======
import { ColorPicker } from './index.js';
import type { ColorPickerProps } from './color-picker.types.js';

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPicker,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<ColorPickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: '#ff0000'
	}
>>>>>>> main
};
