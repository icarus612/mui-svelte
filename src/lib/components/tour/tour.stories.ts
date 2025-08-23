import type { Meta, StoryObj } from '@storybook/svelte';
import Tour from './tour.svelte';
import type { TourProps } from './tour.types';

const meta = {
	title: 'Components/Tour',
	component: Tour
} satisfies Meta<TourProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
