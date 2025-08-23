import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import InfiniteScroll from './infinite-scroll.svelte';
import type { InfiniteScrollProps } from './infinite-scroll.types';

const meta = {
	title: 'Components/InfiniteScroll',
	component: InfiniteScroll
=======
import { InfiniteScroll } from './index.js';
import type { InfiniteScrollProps } from './infinite-scroll.types.js';

const meta = {
	title: 'Components/InfiniteScroll',
	component: InfiniteScroll,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<InfiniteScrollProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		dataLength: 50,
		hasMore: true
	}
>>>>>>> main
};
