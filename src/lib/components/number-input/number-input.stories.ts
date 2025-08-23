import type { Meta, StoryObj } from '@storybook/svelte';
import NumberInput from './number-input.svelte';
import type { NumberInputProps } from './number-input.types';

const meta = {
	title: 'Components/NumberInput',
	component: NumberInput
} satisfies Meta<NumberInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
