import type { Meta, StoryObj } from '@storybook/svelte';
import { CodeEditor } from './index.js';
import type { CodeEditorProps } from './code-editor.types.js';

const meta = {
	title: 'Components/CodeEditor',
	component: CodeEditor,
	tags: ['autodocs']
} satisfies Meta<CodeEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 'console.log("Hello, World!");',
		language: 'javascript'
	}
};
