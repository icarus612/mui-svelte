import type { Meta, StoryObj } from '@storybook/svelte';
import ConfirmationDialog from './confirmation-dialog.svelte';
import type { ConfirmationDialogProps } from './confirmation-dialog.types';

const meta = {
	title: 'Components/ConfirmationDialog',
	component: ConfirmationDialog
} satisfies Meta<ConfirmationDialogProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
