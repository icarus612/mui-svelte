import type { Meta, StoryObj } from '@storybook/svelte';
import Chip from './chip.svelte';
import type { ChipProps } from './chip.types';

const meta = {
	title: 'Components/Chip',
	component: Chip
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
