import type { Meta, StoryObj } from '@storybook/svelte';
import ContextMenu from './context-menu.svelte';
import type { ContextMenuProps } from './context-menu.types';

const meta = {
	title: 'Components/ContextMenu',
	component: ContextMenu
} satisfies Meta<ContextMenuProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
