import type { Meta, StoryObj } from '@storybook/svelte';
import BottomNavigation from './bottom-navigation.svelte';
import type { BottomNavigationProps } from './bottom-navigation.types';

const meta = {
	title: 'Components/BottomNavigation',
	component: BottomNavigation
} satisfies Meta<BottomNavigationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
