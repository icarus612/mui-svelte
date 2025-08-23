import type { Meta, StoryObj } from '@storybook/svelte';
import Calendar from './calendar.svelte';
import type { CalendarProps } from './calendar.types';

const meta = {
	title: 'Components/Calendar',
	component: Calendar
} satisfies Meta<CalendarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
