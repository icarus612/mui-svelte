import type { Meta, StoryObj } from '@storybook/svelte';
import KanbanBoard from './kanban-board.svelte';
import type { KanbanBoardProps } from './kanban-board.types';

const meta = {
	title: 'Components/KanbanBoard',
	component: KanbanBoard
} satisfies Meta<KanbanBoardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
