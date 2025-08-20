import type { Meta, StoryObj } from '@storybook/svelte';
import { StatCard } from './index.js';
import type { StatCardProps } from './stat-card.types.js';

const meta = {
	title: 'Components/StatCard',
	component: StatCard,
	tags: ['autodocs']
} satisfies Meta<StatCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Total Revenue',
		value: '$45,231.89',
		change: 2.5,
		changeLabel: 'vs last month'
	}
};
