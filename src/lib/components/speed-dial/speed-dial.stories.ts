import type { Meta, StoryObj } from '@storybook/svelte';
import SpeedDial from './speed-dial.svelte';
import type { SpeedDialProps } from './speed-dial.types';

const meta = {
	title: 'Components/SpeedDial',
	component: SpeedDial
} satisfies Meta<SpeedDialProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
