import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import EmptyState from './empty-state.svelte';
import type { EmptyStateProps } from './empty-state.types';

const meta = {
	title: 'Components/EmptyState',
	component: EmptyState
=======
import { EmptyState } from './index.js';
import type { EmptyStateProps } from './empty-state.types.js';

const meta = {
	title: 'Components/EmptyState',
	component: EmptyState,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<EmptyStateProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		title: 'No Items Found',
		description: 'There are no items to display at this time.'
	}
>>>>>>> main
};
