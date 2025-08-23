import type { Meta, StoryObj } from '@storybook/svelte';
import Avatar from './avatar.svelte';
import type { AvatarProps } from './avatar.types';

const meta = {
	title: 'Components/Avatar',
	component: Avatar
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
