import type { Meta, StoryObj } from '@storybook/svelte';
import { EmptyState } from './index.js';
import type { EmptyStateProps } from './empty-state.types.js';

const meta = {
	title: 'Components/EmptyState',
	component: EmptyState,
	tags: ['autodocs']
} satisfies Meta<EmptyStateProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'No Items Found',
		description: 'There are no items to display at this time.'
	}
};
