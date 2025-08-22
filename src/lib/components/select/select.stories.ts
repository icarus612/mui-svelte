import type { Meta, StoryObj } from '@storybook/svelte';
import Select from './select.svelte';
import type { SelectProps } from './select.types';

const meta = {
	title: 'Components/Select',
	component: Select
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
