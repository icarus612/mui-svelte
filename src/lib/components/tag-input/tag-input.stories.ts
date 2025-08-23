import type { Meta, StoryObj } from '@storybook/svelte';
import TagInput from './tag-input.svelte';
import type { TagInputProps } from './tag-input.types';

const meta = {
	title: 'Components/TagInput',
	component: TagInput
} satisfies Meta<TagInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
