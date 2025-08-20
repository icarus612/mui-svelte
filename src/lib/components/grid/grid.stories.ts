import type { Meta, StoryObj } from '@storybook/svelte';
import { Grid } from './index.js';
import type { GridProps } from './grid.types.js';
const meta = {
	title: 'Components/Grid',
	component: Grid,
	tags: ['autodocs']
} satisfies Meta<GridProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		container: true,
		spacing: 2
	}
};
