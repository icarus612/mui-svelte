import type { Meta, StoryObj } from '@storybook/svelte';
import { Progress } from './index.js';
import type { ProgressProps } from './progress.types.js';
const meta = {
	title: 'Components/Progress',
	component: Progress,
	tags: ['autodocs']
} satisfies Meta<ProgressProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		value: 50,
		variant: 'determinate'
	}
};
