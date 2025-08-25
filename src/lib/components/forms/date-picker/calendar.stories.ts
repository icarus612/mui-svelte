import type { Meta, StoryObj } from '@storybook/svelte';
import { Calendar } from './index.js';
import type { CalendarProps } from './calendar.types.js';

const meta = {
	title: 'Components/Calendar',
	component: Calendar,
	tags: ['autodocs']
} satisfies Meta<CalendarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: new Date()
	}
};
