import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
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
=======
import { Drawer } from './index.js';
import type { DrawerProps } from './drawer.types.js';
const meta = {
	title: 'Components/Drawer',
	component: Drawer,
	tags: ['autodocs']
} satisfies Meta<DrawerProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
>>>>>>> main
};
