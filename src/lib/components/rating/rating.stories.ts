import type { Meta, StoryObj } from '@storybook/svelte';
import { Rating } from './index.js';
import type { RatingProps } from './rating.types.js';

const meta = {
	title: 'Components/Rating',
	component: Rating,
	tags: ['autodocs']
} satisfies Meta<RatingProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 2.5,
		precision: 0.5
	}
};
