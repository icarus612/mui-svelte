import type { Meta, StoryObj } from '@storybook/svelte';
import { Slider } from './index.js';
import type { SliderProps } from './slider.types.js';

const meta = {
	title: 'Components/Slider',
	component: Slider,
	tags: ['autodocs']
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 50
	}
};
