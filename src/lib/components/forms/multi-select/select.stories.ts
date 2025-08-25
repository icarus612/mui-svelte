import type { Meta, StoryObj } from '@storybook/svelte';
import { Select } from './index.js';
import type { SelectProps } from './select.types.js';

const meta = {
	title: 'Components/Select',
	component: Select,
	tags: ['autodocs']
} satisfies Meta<SelectProps<any>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Select an option'
	}
};
