import type { Meta, StoryObj } from '@storybook/svelte';
import ToggleButton from './toggle-button.svelte';
import type { ToggleButtonProps } from './toggle-button.types';

const meta = {
	title: 'Components/ToggleButton',
	component: ToggleButton
} satisfies Meta<ToggleButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
