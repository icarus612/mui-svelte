import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
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
=======
import { Paper } from './index.js';
import type { PaperProps } from './paper.types.js';
const meta = {
	title: 'Components/Paper',
	component: Paper,
	tags: ['autodocs']
} satisfies Meta<PaperProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		elevation: 3
	}
>>>>>>> main
};
