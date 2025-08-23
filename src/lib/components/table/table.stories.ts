import type { Meta, StoryObj } from '@storybook/svelte';
import Table from './table.svelte';
import type { TableProps } from './table.types';

const meta = {
	title: 'Components/Table',
	component: Table
} satisfies Meta<TableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
