import type { Meta, StoryObj } from '@storybook/svelte';
import Alert from './alert.svelte';
import type { AlertProps } from './alert.types';

const meta = {
	title: 'Components/Alert',
	component: Alert
} satisfies Meta<AlertProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
