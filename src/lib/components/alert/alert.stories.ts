import type { Meta, StoryObj } from '@storybook/svelte';
import { Alert } from './index.js';
import type { AlertProps } from './alert.types.js';
import Snippet from '$lib/stories/Snippet.svelte';

const meta = {
	title: 'Components/Alert',
	component: Alert,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['info', 'success', 'warning', 'error']
		},
		variant: {
			control: 'select',
			options: ['standard', 'filled', 'outlined']
		}
	}
} satisfies Meta<AlertProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: Snippet
	}
};

export const Closable: Story = {
	args: {
		children: Snippet,
		onclose: () => {
			alert('closed');
		}
	}
};
