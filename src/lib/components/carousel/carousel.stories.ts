import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from './carousel.svelte';
import type { CarouselProps } from './carousel.types';

const meta = {
	title: 'Components/Carousel',
	component: Carousel
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
