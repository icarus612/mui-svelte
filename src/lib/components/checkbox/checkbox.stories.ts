import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Checkbox from './checkbox.svelte';
import type { CheckboxProps } from './checkbox.types';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox
=======
import { Checkbox } from './index.js';
import type { CheckboxProps } from './checkbox.types.js';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			}
		}
	}
>>>>>>> main
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		checked: false
	}
};

export const Checked: Story = {
	args: {
		checked: true
	}
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
>>>>>>> main
};
