import type { Meta, StoryObj } from '@storybook/svelte';
import { Skeleton } from './index.js';
import type { SkeletonProps } from './skeleton.types.js';
const meta = {
	title: 'Components/Skeleton',
	component: Skeleton,
	tags: ['autodocs']
} satisfies Meta<SkeletonProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		variant: 'text',
		width: 210,
		height: 60
	}
};
