import type { Meta, StoryObj } from '@storybook/svelte';
import Badge from './badge.svelte';
import type { BadgeProps } from './badge.types';

const meta = {
	title: 'Components/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['outline', 'dash', 'soft', 'ghost']
		},
		color: {
			control: 'select',
			options: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl']
		}
	},
	args: {
		children: 'Badge'
	}
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};

export const Dash: Story = {
	args: {
		variant: 'dash'
	}
};

export const Soft: Story = {
	args: {
		variant: 'soft'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost'
	}
};

export const Primary: Story = {
	args: {
		color: 'primary'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary'
	}
};

export const Accent: Story = {
	args: {
		color: 'accent'
	}
};

export const Large: Story = {
	args: {
		size: 'lg'
	}
};

export const Small: Story = {
	args: {
		size: 'sm'
	}
};
