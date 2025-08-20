import type { Meta, StoryObj } from '@storybook/svelte';
import { BottomNavigation } from './index.js';
import type { BottomNavigationProps } from './bottom-navigation.types.js';
const meta = {
	title: 'Components/BottomNavigation',
	component: BottomNavigation,
	tags: ['autodocs']
} satisfies Meta<BottomNavigationProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
