import type { Meta, StoryObj } from '@storybook/svelte';
import { Avatar } from './index.js';
import type { AvatarProps } from './avatar.types.js';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs']
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://www.sveltematerialui.com/images/character.png'
	}
};
