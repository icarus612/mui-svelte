import type { Meta, StoryObj } from '@storybook/svelte';
import { ImageList } from './index.js';
import type { ImageListProps } from './image-list.types.js';
const meta = {
	title: 'Components/ImageList',
	component: ImageList,
	tags: ['autodocs']
} satisfies Meta<ImageListProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		cols: 3,
		gap: 8
	}
};
