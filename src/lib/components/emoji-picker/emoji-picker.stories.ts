import type { Meta, StoryObj } from '@storybook/svelte';
import EmojiPicker from './emoji-picker.svelte';
import type { EmojiPickerProps } from './emoji-picker.types';

const meta = {
	title: 'Components/EmojiPicker',
	component: EmojiPicker
} satisfies Meta<EmojiPickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
