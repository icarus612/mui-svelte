import type { Meta, StoryObj } from '@storybook/svelte';
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
};
