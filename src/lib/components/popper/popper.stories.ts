import type { Meta, StoryObj } from '@storybook/svelte';
import Popper from './popper.svelte';
import type { PopperProps } from './popper.types';

const meta = {
	title: 'Components/Popper',
	component: Popper
} satisfies Meta<PopperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
