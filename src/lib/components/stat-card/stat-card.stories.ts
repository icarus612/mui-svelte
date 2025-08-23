import type { Meta, StoryObj } from '@storybook/svelte';
import StatCard from './stat-card.svelte';
import type { StatCardProps } from './stat-card.types';

const meta = {
	title: 'Components/StatCard',
	component: StatCard
} satisfies Meta<StatCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
