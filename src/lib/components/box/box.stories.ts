import type { Meta, StoryObj } from '@storybook/svelte';
import Box from './box.svelte';
import type { BoxProps } from './box.types';

const meta = {
	title: 'Components/Box',
	component: Box
} satisfies Meta<BoxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
