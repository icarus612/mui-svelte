import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Box from './box.svelte';
import type { BoxProps } from './box.types';

const meta = {
	title: 'Components/Box',
	component: Box
} satisfies Meta<BoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

=======
import { Box } from './index.js';
import type { BoxProps } from './box.types.js';
const meta = {
	title: 'Components/Box',
	component: Box,
	tags: ['autodocs']
} satisfies Meta<BoxProps>;
export default meta;
type Story = StoryObj<typeof meta>;
>>>>>>> main
export const Default: Story = {
	args: {}
};
