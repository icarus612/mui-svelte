import type { Meta, StoryObj } from '@storybook/svelte';
import Input from './input.svelte';
import { fn } from '@storybook/test';

const meta = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'neutral']
		},
		size: {
			control: 'select',
			options: ['lg', 'md', 'sm', 'xs']
		},
		disabled: { control: 'boolean' },
		bordered: { control: 'boolean' },
		ghost: { control: 'boolean' },
		placeholder: { control: 'text' },
		value: { control: 'text' }
	},
	args: {
		oninput: fn()
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Default input'
	}
};

export const Primary: Story = {
	args: {
		variant: 'primary',
		placeholder: 'Primary input'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		placeholder: 'Large input'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'Disabled input'
	}
};
