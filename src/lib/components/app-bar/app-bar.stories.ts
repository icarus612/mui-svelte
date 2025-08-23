import type { Meta, StoryObj } from '@storybook/svelte';
import AppBar from './app-bar.svelte';
import type { AppBarProps } from './app-bar.types';

const meta = {
	title: 'Components/AppBar',
	component: AppBar
} satisfies Meta<AppBarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
