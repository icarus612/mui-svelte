import type { Meta, StoryObj } from '@storybook/svelte';
import { Card } from './index.js';
import type { CardProps } from './card.types.js';
const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs']
} satisfies Meta<CardProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
