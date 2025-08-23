import type { Meta, StoryObj } from '@storybook/svelte';
import Tooltip from './tooltip.svelte';
import type { TooltipProps } from './tooltip.types';

const meta = {
	title: 'Components/Tooltip',
	component: Tooltip
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
