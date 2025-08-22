import type { Meta, StoryObj } from '@storybook/svelte';
import Checkbox from './checkbox.svelte';
import type { CheckboxProps } from './checkbox.types';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
