import type { Meta, StoryObj } from '@storybook/svelte';
import Drawer from './drawer.svelte';
import type { DrawerProps } from './drawer.types';

const meta = {
	title: 'Components/Drawer',
	component: Drawer
} satisfies Meta<DrawerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
