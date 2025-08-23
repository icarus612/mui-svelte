import type { Meta, StoryObj } from '@storybook/svelte';
import List from './list.svelte';
import type { ListProps } from './list.types';

const meta = {
	title: 'Components/List',
	component: List
} satisfies Meta<ListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
