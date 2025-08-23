import type { Meta, StoryObj } from '@storybook/svelte';
import EmptyState from './empty-state.svelte';
import type { EmptyStateProps } from './empty-state.types';

const meta = {
	title: 'Components/EmptyState',
	component: EmptyState
} satisfies Meta<EmptyStateProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
