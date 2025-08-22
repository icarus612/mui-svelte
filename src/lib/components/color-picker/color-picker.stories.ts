import type { Meta, StoryObj } from '@storybook/svelte';
import { ColorPicker } from './index.js';
import type { ColorPickerProps } from './color-picker.types.js';

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPicker,
	tags: ['autodocs']
} satisfies Meta<ColorPickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: '#ff0000'
	}
};
