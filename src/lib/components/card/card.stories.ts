import type { Meta, StoryObj } from '@storybook/svelte';
import Card from './card.svelte';
import type { CardProps } from './card.types';

const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs']
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'This is a card.'
	}
};

export const WithImage: Story = {
	args: {
		figure:
			'<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />',
		title: 'Shoes!',
		children: 'If a dog chews shoes whose shoes does he choose?',
		actions: '<button class="btn btn-primary">Buy Now</button>'
	}
};

export const Side: Story = {
	args: {
		side: true,
		figure:
			'<img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />',
		title: 'New movie is released!',
		children: 'Click the button to watch on Jetflix app.',
		actions: '<button class="btn btn-primary">Watch</button>'
	}
};

export const NoImage: Story = {
	args: {
		title: 'Card title!',
		children: 'If a dog chews shoes whose shoes does he choose?',
		actions: '<button class="btn btn-primary">Buy Now</button>'
	}
};
