import type { Meta, StoryObj } from '@storybook/svelte';
import Badge from './badge.svelte';
import type { BadgeProps } from './badge.types';

const meta = {
	title: 'Components/Badge',
	component: Badge
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
