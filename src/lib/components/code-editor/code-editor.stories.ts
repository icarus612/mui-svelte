import type { Meta, StoryObj } from '@storybook/svelte';
import CodeEditor from './code-editor.svelte';
import type { CodeEditorProps } from './code-editor.types';

const meta = {
	title: 'Components/CodeEditor',
	component: CodeEditor
} satisfies Meta<CodeEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
