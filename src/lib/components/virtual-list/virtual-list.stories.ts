import type { Meta, StoryObj } from '@storybook/svelte';
import VirtualList from './virtual-list.svelte';
import type { VirtualListProps } from './virtual-list.types';

const meta = {
	title: 'Components/VirtualList',
	component: VirtualList
} satisfies Meta<VirtualListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
