import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Divider from './divider.svelte';
import type { DividerProps } from './divider.types';

const meta = {
	title: 'Components/Divider',
	component: Divider
=======
import { Divider } from './index.js';
import type { DividerProps } from './divider.types.js';

const meta = {
	title: 'Components/Divider',
	component: Divider,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
