import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import BottomNavigation from './bottom-navigation.svelte';
import type { BottomNavigationProps } from './bottom-navigation.types';

const meta = {
	title: 'Components/BottomNavigation',
	component: BottomNavigation
} satisfies Meta<BottomNavigationProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { BottomNavigation } from './index.js';
import type { BottomNavigationProps } from './bottom-navigation.types.js';
const meta = {
	title: 'Components/BottomNavigation',
	component: BottomNavigation,
	tags: ['autodocs']
} satisfies Meta<BottomNavigationProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
