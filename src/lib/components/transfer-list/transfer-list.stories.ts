import type { Meta, StoryObj } from '@storybook/svelte';
import TransferList from './transfer-list.svelte';
import type { TransferListProps } from './transfer-list.types';

const meta = {
	title: 'Components/TransferList',
	component: TransferList
} satisfies Meta<TransferListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
