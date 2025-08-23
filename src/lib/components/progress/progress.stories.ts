import type { Meta, StoryObj } from '@storybook/svelte';
import Progress from './progress.svelte';
import type { ProgressProps } from './progress.types';

const meta = {
	title: 'Components/Progress',
	component: Progress
} satisfies Meta<ProgressProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
