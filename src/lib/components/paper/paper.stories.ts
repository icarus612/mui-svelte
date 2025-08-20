import type { Meta, StoryObj } from '@storybook/svelte';
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
};
