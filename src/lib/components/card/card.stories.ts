import type { Meta, StoryObj } from '@storybook/svelte';
import { Card } from './index.js';
import type { CardProps } from './card.types.js';
import h from 'svelte-htm';

const html = h;

const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		}
	}
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		class: 'w-96 bg-base-100 shadow-xl',
		children: html`
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		`
	}
};

export const Bordered: Story = {
	args: {
		class: 'w-96 bg-base-100 shadow-xl',
		bordered: true,
		children: html`
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		`
	}
};

export const ImageFull: Story = {
	args: {
		class: 'w-96 bg-base-100 shadow-xl',
		imageFull: true,
		children: html`
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		`
	}
};

export const Side: Story = {
	args: {
		class: 'w-96 bg-base-100 shadow-xl',
		side: true,
		children: html`
			<figure>
				<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		`
	}
};
