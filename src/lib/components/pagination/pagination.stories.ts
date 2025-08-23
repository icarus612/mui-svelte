import type { Meta, StoryObj } from '@storybook/svelte';
import Pagination from './pagination.svelte';
import type { PaginationProps } from './pagination.types';

const meta = {
	title: 'Components/Pagination',
	component: Pagination
} satisfies Meta<PaginationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
