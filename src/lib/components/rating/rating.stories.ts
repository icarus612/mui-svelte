import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import Rating from './rating.svelte';
import type { RatingProps } from './rating.types';

const meta = {
	title: 'Components/Rating',
	component: Rating
=======
import { Rating } from './index.js';
import type { RatingProps } from './rating.types.js';

const meta = {
	title: 'Components/Rating',
	component: Rating,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<RatingProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: 2.5,
		precision: 0.5
	}
>>>>>>> main
};
