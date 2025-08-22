import type { Meta, StoryObj } from '@storybook/svelte';
import { Sidebar } from './index.js';
import type { SidebarProps } from './sidebar.types.js';
const meta = {
	title: 'Components/Sidebar',
	component: Sidebar,
	tags: ['autodocs']
} satisfies Meta<SidebarProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
};
