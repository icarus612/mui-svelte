import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Select from './select.svelte';
import type { SelectProps } from './select.types';

const meta = {
	title: 'Components/Select',
	component: Select
} satisfies Meta<SelectProps>;
=======
import { Select } from './index.js';
import type { SelectProps } from './select.types.js';

const meta = {
	title: 'Components/Select',
	component: Select,
	tags: ['autodocs']
} satisfies Meta<SelectProps<any>>;
>>>>>>> main

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		label: 'Select an option'
	}
>>>>>>> main
};
