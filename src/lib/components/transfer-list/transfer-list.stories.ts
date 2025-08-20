import type { Meta, StoryObj } from '@storybook/svelte';
import { TransferList } from './index.js';
import type { TransferListProps } from './transfer-list.types.js';

const meta = {
	title: 'Components/TransferList',
	component: TransferList,
	tags: ['autodocs']
} satisfies Meta<TransferListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		left: ['Item 1', 'Item 2', 'Item 3'],
		right: ['Item 4', 'Item 5', 'Item 6'],
		titles: ['Left', 'Right']
	}
};
