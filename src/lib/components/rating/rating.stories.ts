import type { Meta, StoryObj } from '@storybook/svelte';
import Rating from './rating.svelte';
import type { RatingProps } from './rating.types';

const meta = {
	title: 'Components/Rating',
	component: Rating
} satisfies Meta<RatingProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
