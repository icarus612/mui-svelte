import type { Meta, StoryObj } from '@storybook/svelte';
import RichTextEditor from './rich-text-editor.svelte';
import type { RichTextEditorProps } from './rich-text-editor.types';

const meta = {
	title: 'Components/RichTextEditor',
	component: RichTextEditor
} satisfies Meta<RichTextEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
