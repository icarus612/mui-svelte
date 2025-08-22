import type { Meta, StoryObj } from '@storybook/svelte';
import ColorPicker from './color-picker.svelte';
import type { ColorPickerProps } from './color-picker.types';

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPicker
} satisfies Meta<ColorPickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
