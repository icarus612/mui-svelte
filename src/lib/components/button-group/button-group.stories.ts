import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import ButtonGroup from './button-group.svelte';
import type { ButtonGroupProps } from './button-group.types';

const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup
=======
import { ButtonGroup } from './index.js';
import type { ButtonGroupProps } from './button-group.types.js';

const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: ['contained', 'outlined', 'text']
			}
		},
		color: {
			control: {
				type: 'select',
				options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			}
		},
		orientation: {
			control: {
				type: 'select',
				options: ['horizontal', 'vertical']
			}
		}
	}
>>>>>>> main
} satisfies Meta<ButtonGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		'aria-label': 'default button group'
	}
>>>>>>> main
};
