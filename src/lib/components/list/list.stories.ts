import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import List from './list.svelte';
import type { ListProps } from './list.types';

const meta = {
	title: 'Components/List',
	component: List
=======
import { List } from './index.js';
import type { ListProps } from './list.types.js';

const meta = {
	title: 'Components/List',
	component: List,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<ListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		subheader: 'My List'
	}
>>>>>>> main
};
