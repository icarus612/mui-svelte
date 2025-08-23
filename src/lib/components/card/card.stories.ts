import type { Meta, StoryObj } from '@storybook/svelte';
import Card from './card.svelte';
import type { CardProps } from './card.types';

const meta = {
	title: 'Components/Card',
	component: Card
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
