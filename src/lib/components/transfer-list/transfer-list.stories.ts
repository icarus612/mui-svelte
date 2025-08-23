import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import TransferList from './transfer-list.svelte';
import type { TransferListProps } from './transfer-list.types';

const meta = {
	title: 'Components/TransferList',
	component: TransferList
=======
import { TransferList } from './index.js';
import type { TransferListProps } from './transfer-list.types.js';

const meta = {
	title: 'Components/TransferList',
	component: TransferList,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<TransferListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		left: ['Item 1', 'Item 2', 'Item 3'],
		right: ['Item 4', 'Item 5', 'Item 6'],
		titles: ['Left', 'Right']
	}
>>>>>>> main
};
