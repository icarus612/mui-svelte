import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
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
=======
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
>>>>>>> main
};
