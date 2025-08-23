import type { Meta, StoryObj } from '@storybook/svelte';
import { Alert } from './index.js';
import type { AlertProps } from './alert.types.js';
const meta = {
	title: 'Components/Alert',
	component: Alert,
	tags: ['autodocs']
} satisfies Meta<AlertProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		severity: 'success'
	}
};
