import type { Meta, StoryObj } from '@storybook/svelte';
import { Stack } from './index.js';
import type { StackProps } from './stack.types.js';
const meta = {
	title: 'Components/Stack',
	component: Stack,
	tags: ['autodocs']
} satisfies Meta<StackProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		spacing: 2
	}
};
