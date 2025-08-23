import type { Meta, StoryObj } from '@storybook/svelte';
import DatePicker from './date-picker.svelte';
import type { DatePickerProps } from './date-picker.types';

const meta = {
	title: 'Components/DatePicker',
	component: DatePicker
} satisfies Meta<DatePickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
