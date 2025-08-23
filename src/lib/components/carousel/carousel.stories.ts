import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Carousel from './carousel.svelte';
import type { CarouselProps } from './carousel.types';

const meta = {
	title: 'Components/Carousel',
	component: Carousel
=======
import { Carousel } from './index.js';
import type { CarouselProps } from './carousel.types.js';

const meta = {
	title: 'Components/Carousel',
	component: Carousel,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
