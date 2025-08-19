import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './button.svelte';
import type { ButtonProps } from './button.types';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'accent', 'ghost', 'link', 'info', 'success', 'warning', 'error', 'neutral']
		},
		size: {
			control: 'select',
			options: ['lg', 'md', 'sm', 'xs']
		},
		disabled: { control: 'boolean' },
		outline: { control: 'boolean' },
		wide: { control: 'boolean' },
		glass: { control: 'boolean' }
	},
	args: {
		children: 'Click me'
	}
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
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

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Outline: Story = {
	args: {
		outline: true
	}
};
