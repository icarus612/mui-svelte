import type { Meta, StoryObj } from '@storybook/svelte';
import TextareaAutosize from './textarea-autosize.svelte';
import type { TextareaAutosizeProps } from './textarea-autosize.types';

const meta = {
	title: 'Components/TextareaAutosize',
	component: TextareaAutosize
} satisfies Meta<TextareaAutosizeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
