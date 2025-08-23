import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Menu from './menu.svelte';
import type { MenuProps } from './menu.types';

const meta = {
	title: 'Components/Menu',
	component: Menu
} satisfies Meta<MenuProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
import { Menu } from './index.js';
import type { MenuProps } from './menu.types.js';
const meta = {
	title: 'Components/Menu',
	component: Menu,
	tags: ['autodocs']
} satisfies Meta<MenuProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
>>>>>>> main
};
