import type { Meta, StoryObj } from '@storybook/svelte';
import SnackbarQueue from './snackbar-queue.svelte';
import SnackbarQueueTest from './SnackbarQueueTest.svelte';

const meta = {
	title: 'Components/SnackbarQueue',
	component: SnackbarQueue,
	// This component will have a buttons to trigger snackbars
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<SnackbarQueue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => ({
		Component: SnackbarQueueTest
	})
};
