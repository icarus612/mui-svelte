import type { Meta, StoryObj } from '@storybook/svelte';
import Alert from './alert.svelte';
import type { AlertProps } from './alert.types';

const meta = {
	title: 'Components/Alert',
	component: Alert,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['outline', 'dash', 'soft']
		},
		color: {
			control: 'select',
			options: ['info', 'success', 'warning', 'error']
		},
		direction: {
			control: 'select',
			options: ['vertical', 'horizontal']
		}
	},
	args: {
		children: 'An alert message.'
	}
} satisfies Meta<AlertProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
	args: {
		color: 'info'
	}
};

export const Success: Story = {
	args: {
		color: 'success'
	}
};

export const Warning: Story = {
	args: {
		color: 'warning'
	}
};

export const Error: Story = {
	args: {
		color: 'error'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};

export const Soft: Story = {
	args: {
		variant: 'soft'
	}
};

export const WithIcon: Story = {
	args: {
		children: 'An alert with an icon.',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
	}
};
