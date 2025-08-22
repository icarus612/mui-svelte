import type { Meta, StoryObj } from '@storybook/svelte';
import Slider from './slider.svelte';
import type { SliderProps } from './slider.types';

const meta = {
	title: 'Components/Slider',
	component: Slider
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
