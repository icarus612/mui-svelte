import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import CodeEditor from './code-editor.svelte';
import type { CodeEditorProps } from './code-editor.types';

const meta = {
	title: 'Components/CodeEditor',
	component: CodeEditor
=======
import { CodeEditor } from './index.js';
import type { CodeEditorProps } from './code-editor.types.js';

const meta = {
	title: 'Components/CodeEditor',
	component: CodeEditor,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<CodeEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: 'console.log("Hello, World!");',
		language: 'javascript'
	}
>>>>>>> main
};
