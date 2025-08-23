import type { Meta, StoryObj } from '@storybook/svelte';
import Sidebar from './sidebar.svelte';
import type { SidebarProps } from './sidebar.types';

const meta = {
	title: 'Components/Sidebar',
	component: Sidebar
} satisfies Meta<SidebarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
