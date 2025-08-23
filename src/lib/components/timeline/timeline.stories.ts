import type { Meta, StoryObj } from '@storybook/svelte';
import Timeline from './timeline.svelte';
import type { TimelineProps } from './timeline.types';

const meta = {
	title: 'Components/Timeline',
	component: Timeline
} satisfies Meta<TimelineProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
