import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Avatar from './avatar.svelte';
import type { AvatarProps } from './avatar.types';

const meta = {
	title: 'Components/Avatar',
	component: Avatar
=======
import { Avatar } from './index.js';
import type { AvatarProps } from './avatar.types.js';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		src: 'https://www.sveltematerialui.com/images/character.png'
	}
>>>>>>> main
};
