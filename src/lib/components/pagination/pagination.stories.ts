import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
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
=======
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
>>>>>>> main
};
