import type { Meta, StoryObj } from '@storybook/svelte';
import { Tooltip } from './index.js';
import type { TooltipProps } from './tooltip.types.js';

const meta = {
	title: 'Components/Tooltip',
	component: Tooltip,
	tags: ['autodocs']
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'This is a tooltip'
	}
};
