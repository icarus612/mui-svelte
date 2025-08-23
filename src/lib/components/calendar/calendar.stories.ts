import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Calendar from './calendar.svelte';
import type { CalendarProps } from './calendar.types';

const meta = {
	title: 'Components/Calendar',
	component: Calendar
=======
import { Calendar } from './index.js';
import type { CalendarProps } from './calendar.types.js';

const meta = {
	title: 'Components/Calendar',
	component: Calendar,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<CalendarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: new Date()
	}
>>>>>>> main
};
