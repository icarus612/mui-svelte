import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import StatCard from './stat-card.svelte';
import type { StatCardProps } from './stat-card.types';

const meta = {
	title: 'Components/StatCard',
	component: StatCard
=======
import { StatCard } from './index.js';
import type { StatCardProps } from './stat-card.types.js';

const meta = {
	title: 'Components/StatCard',
	component: StatCard,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<StatCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		title: 'Total Revenue',
		value: '$45,231.89',
		change: 2.5,
		changeLabel: 'vs last month'
	}
>>>>>>> main
};
