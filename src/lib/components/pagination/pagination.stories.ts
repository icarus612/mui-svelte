import type { Meta, StoryObj } from '@storybook/svelte';
import { Pagination } from './index.js';
import type { PaginationProps } from './pagination.types.js';
const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	tags: ['autodocs']
} satisfies Meta<PaginationProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		count: 10
	}
};
