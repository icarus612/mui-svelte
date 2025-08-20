import type { Meta, StoryObj } from '@storybook/svelte';
import { Toast } from './index.js';
import type { ToastProps } from './toast.types.js';
const meta = {
	title: 'Components/Toast',
	component: Toast,
	tags: ['autodocs']
} satisfies Meta<ToastProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		message: 'This is a toast notification.'
	}
};
