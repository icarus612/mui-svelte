import type { Meta, StoryObj } from '@storybook/svelte';
import ButtonGroup from './button-group.svelte';
import type { ButtonGroupProps } from './button-group.types';

const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup
} satisfies Meta<ButtonGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
