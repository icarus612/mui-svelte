import type { Meta, StoryObj } from '@storybook/svelte';
import SnackbarQueueDemo from './snackbar-queue-demo.svelte';

const meta = {
	title: 'Components/SnackbarQueue',
	component: SnackbarQueueDemo,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<SnackbarQueueDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
