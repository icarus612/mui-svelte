import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Hidden from './hidden.svelte';
import type { HiddenProps } from './hidden.types';

const meta = {
	title: 'Components/Hidden',
	component: Hidden
} satisfies Meta<HiddenProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
=======
import { Hidden } from './index.js';
import type { HiddenProps } from './hidden.types.js';
const meta = {
	title: 'Components/Hidden',
	component: Hidden,
	tags: ['autodocs']
} satisfies Meta<HiddenProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		mdDown: true
	}
>>>>>>> main
};
