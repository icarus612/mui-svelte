import type { Meta, StoryObj } from '@storybook/svelte';
import Grid from './grid.svelte';
import type { GridProps } from './grid.types';

const meta = {
	title: 'Components/Grid',
	component: Grid
} satisfies Meta<GridProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
