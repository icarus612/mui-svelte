import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Tooltip from './tooltip.svelte';
import type { TooltipProps } from './tooltip.types';

const meta = {
	title: 'Components/Tooltip',
	component: Tooltip
=======
import { Tooltip } from './index.js';
import type { TooltipProps } from './tooltip.types.js';

const meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		title: 'This is a tooltip'
	}
>>>>>>> main
};
