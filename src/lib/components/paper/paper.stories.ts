import type { Meta, StoryObj } from '@storybook/svelte';
import Paper from './paper.svelte';
import type { PaperProps } from './paper.types';

const meta = {
	title: 'Components/Paper',
	component: Paper
} satisfies Meta<PaperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
