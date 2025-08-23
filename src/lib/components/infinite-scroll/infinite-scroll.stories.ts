import type { Meta, StoryObj } from '@storybook/svelte';
import InfiniteScroll from './infinite-scroll.svelte';
import type { InfiniteScrollProps } from './infinite-scroll.types';

const meta = {
	title: 'Components/InfiniteScroll',
	component: InfiniteScroll
} satisfies Meta<InfiniteScrollProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
