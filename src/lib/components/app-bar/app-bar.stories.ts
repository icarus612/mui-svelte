import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import AppBar from './app-bar.svelte';
import type { AppBarProps } from './app-bar.types';

const meta = {
	title: 'Components/AppBar',
	component: AppBar
} satisfies Meta<AppBarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { AppBar } from './index.js';
import type { AppBarProps } from './app-bar.types.js';
const meta = {
	title: 'Components/AppBar',
	component: AppBar,
	tags: ['autodocs']
} satisfies Meta<AppBarProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
