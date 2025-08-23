import type { Meta, StoryObj } from '@storybook/svelte';
import Stack from './stack.svelte';
import type { StackProps } from './stack.types';

const meta = {
	title: 'Components/Stack',
	component: Stack
} satisfies Meta<StackProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
