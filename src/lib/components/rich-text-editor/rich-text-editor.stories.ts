import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import RichTextEditor from './rich-text-editor.svelte';
import type { RichTextEditorProps } from './rich-text-editor.types';

const meta = {
	title: 'Components/RichTextEditor',
	component: RichTextEditor
=======
import { RichTextEditor } from './index.js';
import type { RichTextEditorProps } from './rich-text-editor.types.js';

const meta = {
	title: 'Components/RichTextEditor',
	component: RichTextEditor,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<RichTextEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: '<p>Hello World</p>'
	}
>>>>>>> main
};
