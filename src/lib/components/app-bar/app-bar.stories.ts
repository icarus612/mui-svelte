import type { Meta, StoryObj } from '@storybook/svelte';
import { AppBar } from './index.js';
import type { AppBarProps } from './app-bar.types.js';
const meta = {
	title: 'Components/AppBar',
	component: AppBar,
	tags: ['autodocs']
} satisfies Meta<AppBarProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
