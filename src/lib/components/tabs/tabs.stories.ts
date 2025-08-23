import type { Meta, StoryObj } from '@storybook/svelte';
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
};
