import type { Meta, StoryObj } from '@storybook/svelte';
import MarkdownViewer from './markdown-viewer.svelte';
import type { MarkdownViewerProps } from './markdown-viewer.types';

const meta = {
	title: 'Components/MarkdownViewer',
	component: MarkdownViewer
} satisfies Meta<MarkdownViewerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
