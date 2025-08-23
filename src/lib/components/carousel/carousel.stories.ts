import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from './carousel.svelte';
import type { CarouselProps } from './carousel.types';

const meta = {
	title: 'Components/Carousel',
	component: Carousel,
	argTypes: {
		snap: {
			control: 'select',
			options: ['start', 'center', 'end']
		},
		vertical: {
			control: 'boolean'
		}
	}
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
	'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
	'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
	'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
	'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
	'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
	'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
	'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
];

export const Default: Story = {
	args: {
		// @ts-ignore
		children: ({ images }) => `
			{#each images as src}
				<div class="carousel-item">
					<img src={src} alt="Burger" />
				</div>
			{/each}
		`,
		images
	}
};

export const SnapToCenter: Story = {
	...Default,
	args: {
		...Default.args,
		snap: 'center'
	}
};

export const Vertical: Story = {
	...Default,
	args: {
		...Default.args,
		vertical: true,
		class: 'h-96'
	}
};
