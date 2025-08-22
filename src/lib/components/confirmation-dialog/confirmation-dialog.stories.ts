import type { Meta, StoryObj } from '@storybook/svelte';
import { ConfirmationDialog } from './index.js';
import type { ConfirmationDialogProps } from './confirmation-dialog.types.js';
const meta = {
	title: 'Components/ConfirmationDialog',
	component: ConfirmationDialog,
	tags: ['autodocs']
} satisfies Meta<ConfirmationDialogProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true,
		title: 'Confirm Action',
		message: 'Are you sure you want to perform this action?'
	}
};
