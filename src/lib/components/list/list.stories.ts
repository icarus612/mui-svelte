import type { Meta, StoryObj } from '@storybook/svelte';
import { List } from './index.js';
import type { ListProps } from './list.types.js';

const meta = {
	title: 'Components/List',
	component: List,
	tags: ['autodocs']
} satisfies Meta<ListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		subheader: 'My List'
	}
};
