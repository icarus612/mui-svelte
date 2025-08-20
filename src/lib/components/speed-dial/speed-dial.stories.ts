import type { Meta, StoryObj } from '@storybook/svelte';
import { SpeedDial } from './index.js';
import type { SpeedDialProps } from './speed-dial.types.js';
const meta = {
	title: 'Components/SpeedDial',
	component: SpeedDial,
	tags: ['autodocs']
} satisfies Meta<SpeedDialProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		ariaLabel: 'SpeedDial basic example'
	}
};
