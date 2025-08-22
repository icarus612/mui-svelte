import type { Meta, StoryObj } from '@storybook/svelte';
import { Dialog } from './index.js';
import type { DialogProps } from './dialog.types.js';
const meta = {
	title: 'Components/Dialog',
	component: Dialog,
	tags: ['autodocs']
} satisfies Meta<DialogProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
};
