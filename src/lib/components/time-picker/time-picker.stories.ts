import type { Meta, StoryObj } from '@storybook/svelte';
import TimePicker from './time-picker.svelte';
import type { TimePickerProps } from './time-picker.types';

const meta = {
	title: 'Components/TimePicker',
	component: TimePicker
} satisfies Meta<TimePickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
