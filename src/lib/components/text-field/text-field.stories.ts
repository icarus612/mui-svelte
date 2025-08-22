import type { Meta, StoryObj } from '@storybook/svelte';
import { TextField } from './index.js';
import type { TextFieldProps } from './text-field.types.js';

const meta = {
	title: 'Components/TextField',
	component: TextField,
	tags: ['autodocs']
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Text Field'
	}
};
