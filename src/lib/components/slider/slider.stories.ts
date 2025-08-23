import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Slider from './slider.svelte';
import type { SliderProps } from './slider.types';

const meta = {
	title: 'Components/Slider',
	component: Slider
=======
import { Slider } from './index.js';
import type { SliderProps } from './slider.types.js';

const meta = {
	title: 'Components/Slider',
	component: Slider,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: 50
	}
>>>>>>> main
};
