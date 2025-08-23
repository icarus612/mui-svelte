import type { Meta, StoryObj } from '@storybook/svelte';
import { Badge } from './index.js';
import type { BadgeProps } from './badge.types.js';
import Snippet from '$lib/stories/Snippet.svelte';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs']
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		badgeContent: 5,
		children: Snippet
	}
};

export const Colors: Story = {
	args: {
		badgeContent: 5,
		children: Snippet
	},
	render: (args) => ({
		Component: Badge,
		props: args,
		on: {
			click: () => {
				alert('clicked');
			}
		}
	})
};
