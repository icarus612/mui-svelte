import type { Meta, StoryObj } from '@storybook/svelte';
import Popover from './popover.svelte';
import type { PopoverProps } from './popover.types';

const meta = {
	title: 'Components/Popover',
	component: Popover
} satisfies Meta<PopoverProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
