import type { Meta, StoryObj } from '@storybook/svelte';
import TreeView from './tree-view.svelte';
import type { TreeViewProps } from './tree-view.types';

const meta = {
	title: 'Components/TreeView',
	component: TreeView
} satisfies Meta<TreeViewProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
