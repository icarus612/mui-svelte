import type { Meta, StoryObj } from '@storybook/svelte';
import { TagInput } from './index.js';
import type { TagInputProps } from './tag-input.types.js';

const meta = {
	title: 'Components/TagInput',
	component: TagInput,
	tags: ['autodocs']
} satisfies Meta<TagInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: ['svelte', 'kit']
	}
};
