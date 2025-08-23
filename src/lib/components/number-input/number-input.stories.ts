import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import NumberInput from './number-input.svelte';
import type { NumberInputProps } from './number-input.types';

const meta = {
	title: 'Components/NumberInput',
	component: NumberInput
=======
import { NumberInput } from './index.js';
import type { NumberInputProps } from './number-input.types.js';

const meta = {
	title: 'Components/NumberInput',
	component: NumberInput,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<NumberInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: 1234.56
	}
>>>>>>> main
};
