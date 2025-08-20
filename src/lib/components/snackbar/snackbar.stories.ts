import type { Meta, StoryObj } from '@storybook/svelte';
import { Snackbar } from './index.js';
import type { SnackbarProps } from './snackbar.types.js';
const meta = {
	title: 'Components/Snackbar',
	component: Snackbar,
	tags: ['autodocs']
} satisfies Meta<SnackbarProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true,
		message: 'This is a snackbar message.'
	}
};
