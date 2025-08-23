import type { Meta, StoryObj } from '@storybook/svelte';
import Toast from './toast.svelte';
import type { ToastProps } from './toast.types';

const meta = {
	title: 'Components/Toast',
	component: Toast
} satisfies Meta<ToastProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
