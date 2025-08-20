import type { Meta, StoryObj } from '@storybook/svelte';
import { Box } from './index.js';
import type { BoxProps } from './box.types.js';
const meta = {
	title: 'Components/Box',
	component: Box,
	tags: ['autodocs']
} satisfies Meta<BoxProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {}
};
