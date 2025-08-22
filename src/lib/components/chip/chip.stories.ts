import type { Meta, StoryObj } from '@storybook/svelte';
import { Chip } from './index.js';
import type { ChipProps } from './chip.types.js';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	tags: ['autodocs']
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Chip'
	}
};
