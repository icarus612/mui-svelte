import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Fab from './fab.svelte';
import type { FabProps } from './fab.types';

const meta = {
	title: 'Components/FAB',
	component: Fab
=======
import { Fab } from './index.js';
import type { FabProps } from './fab.types.js';

const meta = {
	title: 'Components/Fab',
	component: Fab,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: ['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			}
		},
		variant: {
			control: {
				type: 'select',
				options: ['circular', 'extended']
			}
		}
	}
>>>>>>> main
} satisfies Meta<FabProps>;

export default meta;
type Story = StoryObj<typeof meta>;

<<<<<<< HEAD
export const Default: Story = {
	args: {}
=======
export const Circular: Story = {
	args: {
		variant: 'circular',
		color: 'primary'
	}
};

export const Extended: Story = {
	args: {
		variant: 'extended',
		color: 'secondary'
	}
>>>>>>> main
};
