import type { Meta, StoryObj } from '@storybook/svelte';
import ImageList from './image-list.svelte';
import type { ImageListProps } from './image-list.types';

const meta = {
	title: 'Components/ImageList',
	component: ImageList
} satisfies Meta<ImageListProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
