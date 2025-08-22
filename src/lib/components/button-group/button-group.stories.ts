import type { Meta, StoryObj } from '@storybook/svelte';
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
} satisfies Meta<ButtonGroupProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		'aria-label': 'default button group'
	}
};
