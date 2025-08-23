import type { Meta, StoryObj } from '@storybook/svelte';
import { Badge } from './index.js';
import type { BadgeProps } from './badge.types.js';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs']
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		badgeContent: 5
	}
};
