import type { Meta, StoryObj } from '@storybook/svelte';
import Avatar from './avatar.svelte';
import type { AvatarProps } from './avatar.types';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		shape: {
			control: 'select',
			options: ['rounded', 'rounded-xl', 'rounded-full']
		},
		presence: {
			control: 'select',
			options: [undefined, 'online', 'offline']
		}
	}
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
	}
};

export const Rounded: Story = {
	args: {
		...Default.args,
		shape: 'rounded'
	}
};

export const Online: Story = {
	args: {
		...Default.args,
		presence: 'online'
	}
};

export const Offline: Story = {
	args: {
		...Default.args,
		presence: 'offline'
	}
};

export const Placeholder: Story = {
	args: {
		placeholder: true,
		text: 'AB'
	}
};

export const WithRing: Story = {
	args: {
		...Default.args,
		ring: true
	}
};
