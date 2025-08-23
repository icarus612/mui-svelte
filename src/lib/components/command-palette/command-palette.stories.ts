import type { Meta, StoryObj } from '@storybook/svelte';
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
};
