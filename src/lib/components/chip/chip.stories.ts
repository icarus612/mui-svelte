import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Chip from './chip.svelte';
import type { ChipProps } from './chip.types';

const meta = {
	title: 'Components/Chip',
	component: Chip
=======
import { Chip } from './index.js';
import type { ChipProps } from './chip.types.js';

const meta = {
	title: 'Components/Chip',
	component: Chip,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		label: 'Chip'
	}
>>>>>>> main
};
