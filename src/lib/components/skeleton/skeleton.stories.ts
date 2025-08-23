import type { Meta, StoryObj } from '@storybook/svelte';
import Skeleton from './skeleton.svelte';
import type { SkeletonProps } from './skeleton.types';

const meta = {
	title: 'Components/Skeleton',
	component: Skeleton
} satisfies Meta<SkeletonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
