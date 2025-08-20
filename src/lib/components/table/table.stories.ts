import type { Meta, StoryObj } from '@storybook/svelte';
import { Table } from './index.js';
import type { TableProps } from './table.types.js';

const meta = {
	title: 'Components/Table',
	component: Table,
	tags: ['autodocs']
} satisfies Meta<TableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
