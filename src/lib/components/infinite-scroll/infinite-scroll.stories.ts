import type { Meta, StoryObj } from '@storybook/svelte';
import { InfiniteScroll } from './index.js';
import type { InfiniteScrollProps } from './infinite-scroll.types.js';

const meta = {
	title: 'Components/InfiniteScroll',
	component: InfiniteScroll,
	tags: ['autodocs']
} satisfies Meta<InfiniteScrollProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		dataLength: 50,
		hasMore: true
	}
};
