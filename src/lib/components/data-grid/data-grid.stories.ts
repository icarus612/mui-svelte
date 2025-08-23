import type { Meta, StoryObj } from '@storybook/svelte';
import DataGrid from './data-grid.svelte';
import type { DataGridProps } from './data-grid.types';

const meta = {
	title: 'Components/DataGrid',
	component: DataGrid
} satisfies Meta<DataGridProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
