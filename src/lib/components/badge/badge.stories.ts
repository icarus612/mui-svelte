import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Badge from './badge.svelte';
import type { BadgeProps } from './badge.types';

const meta = {
	title: 'Components/Badge',
	component: Badge
=======
import { Badge } from './index.js';
import type { BadgeProps } from './badge.types.js';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		badgeContent: 5
	}
>>>>>>> main
};
