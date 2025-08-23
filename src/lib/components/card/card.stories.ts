import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Card from './card.svelte';
import type { CardProps } from './card.types';

const meta = {
	title: 'Components/Card',
	component: Card
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { Card } from './index.js';
import type { CardProps } from './card.types.js';
const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs']
} satisfies Meta<CardProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
