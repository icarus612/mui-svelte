import type { Meta, StoryObj } from '@storybook/svelte';
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
};
