import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import ToggleButton from './toggle-button.svelte';
import type { ToggleButtonProps } from './toggle-button.types';

const meta = {
	title: 'Components/ToggleButton',
	component: ToggleButton
=======
import { ToggleButton } from './index.js';
import type { ToggleButtonProps } from './toggle-button.types.js';

const meta = {
	title: 'Components/ToggleButton',
	component: ToggleButton,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: ['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
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
} satisfies Meta<ToggleButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: 'test',
		selected: false
	}
};

export const Selected: Story = {
	args: {
		value: 'test',
		selected: true
	}
>>>>>>> main
};
