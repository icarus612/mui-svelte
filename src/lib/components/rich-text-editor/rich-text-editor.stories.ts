import type { Meta, StoryObj } from '@storybook/svelte';
import { RichTextEditor } from './index.js';
import type { RichTextEditorProps } from './rich-text-editor.types.js';

const meta = {
	title: 'Components/RichTextEditor',
	component: RichTextEditor,
	tags: ['autodocs']
} satisfies Meta<RichTextEditorProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: '<p>Hello World</p>'
	}
};
