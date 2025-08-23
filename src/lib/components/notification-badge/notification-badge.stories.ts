import type { Meta, StoryObj } from '@storybook/svelte';
import NotificationBadge from './notification-badge.svelte';
import type { NotificationBadgeProps } from './notification-badge.types';

const meta = {
	title: 'Components/NotificationBadge',
	component: NotificationBadge
} satisfies Meta<NotificationBadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
