import type { Meta, StoryObj } from '@storybook/svelte';
<<<<<<< HEAD
import TagInput from './tag-input.svelte';
import type { TagInputProps } from './tag-input.types';

const meta = {
	title: 'Components/TagInput',
	component: TagInput
=======
import { TagInput } from './index.js';
import type { TagInputProps } from './tag-input.types.js';

const meta = {
	title: 'Components/TagInput',
	component: TagInput,
	tags: ['autodocs']
>>>>>>> main
} satisfies Meta<TagInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
<<<<<<< HEAD
	args: {}
=======
	args: {
		value: ['svelte', 'kit']
	}
>>>>>>> main
};
