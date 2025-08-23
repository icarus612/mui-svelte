import type { Meta, StoryObj } from '@storybook/svelte';
import Masonry from './masonry.svelte';
import type { MasonryProps } from './masonry.types';

const meta = {
	title: 'Components/Masonry',
	component: Masonry
} satisfies Meta<MasonryProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
