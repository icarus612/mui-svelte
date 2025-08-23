import type { Meta, StoryObj } from '@storybook/svelte';
import DiffViewer from './diff-viewer.svelte';
import type { DiffViewerProps } from './diff-viewer.types';

const meta = {
	title: 'Components/DiffViewer',
	component: DiffViewer
} satisfies Meta<DiffViewerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
