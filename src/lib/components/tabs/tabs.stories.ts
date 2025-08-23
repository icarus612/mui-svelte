import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Tabs from './tabs.svelte';
import type { TabsProps } from './tabs.types';

const meta = {
	title: 'Components/Tabs',
	component: Tabs
} satisfies Meta<TabsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
import { Tabs } from './index.js';
import type { TabsProps } from './tabs.types.js';
const meta = {
	title: 'Components/Tabs',
	component: Tabs,
	tags: ['autodocs']
} satisfies Meta<TabsProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		value: 0
	}
>>>>>>> main
};
