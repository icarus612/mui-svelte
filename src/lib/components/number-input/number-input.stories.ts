import type { Meta, StoryObj } from '@storybook/svelte';
import { NumberInput } from './index.js';
import type { NumberInputProps } from './number-input.types.js';

const meta = {
	title: 'Components/NumberInput',
	component: NumberInput,
	tags: ['autodocs']
} satisfies Meta<NumberInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 1234.56
	}
};
