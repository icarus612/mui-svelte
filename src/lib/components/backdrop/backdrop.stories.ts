import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Backdrop from './backdrop.svelte';
import type { BackdropProps } from './backdrop.types';

const meta = {
	title: 'Components/Backdrop',
	component: Backdrop
} satisfies Meta<BackdropProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
import { Backdrop } from './index.js';
import type { BackdropProps } from './backdrop.types.js';
const meta = {
	title: 'Components/Backdrop',
	component: Backdrop,
	tags: ['autodocs']
} satisfies Meta<BackdropProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		open: true
	}
>>>>>>> main
};
