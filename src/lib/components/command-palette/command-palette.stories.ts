import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import CommandPalette from './command-palette.svelte';
import type { CommandPaletteProps } from './command-palette.types';

const meta = {
	title: 'Components/CommandPalette',
	component: CommandPalette
} satisfies Meta<CommandPaletteProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
import { CommandPalette } from './index.js';
import type { CommandPaletteProps } from './command-palette.types.js';
const meta = {
	title: 'Components/CommandPalette',
	component: CommandPalette,
	tags: ['autodocs']
} satisfies Meta<CommandPaletteProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
>>>>>>> main
};
